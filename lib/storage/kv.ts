// lib/storage/kv.ts
import { kv } from '@vercel/kv';

export interface UnlockStatus {
  unlocked: true;
  unlockedAt: string; // ISO timestamp
}

/**
 * Resolve KV credentials from environment variables.
 * Supports both legacy KV_* and newer NEWKV_* prefixes.
 */
function getKVCredentials(): {
  url: string;
  token: string;
} | null {
  if (
    process.env.KV_REST_API_URL &&
    process.env.KV_REST_API_TOKEN
  ) {
    return {
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
    };
  }

  if (
    process.env.NEWKV_KV_REST_API_URL &&
    process.env.NEWKV_KV_REST_API_TOKEN
  ) {
    return {
      url: process.env.NEWKV_KV_REST_API_URL,
      token: process.env.NEWKV_KV_REST_API_TOKEN,
    };
  }

  return null;
}

/**
 * Check if KV is properly configured
 */
function isKVConfigured(): boolean {
  return getKVCredentials() !== null;
}

/**
 * Read unlock status from KV (authoritative source)
 * Returns null if not found (webhook hasn't written yet)
 */
export async function readUnlockStatus(
  sessionId: string
): Promise<UnlockStatus | null> {
  if (!isKVConfigured()) {
    console.warn(
      `UNLOCK_READ: KV not configured (missing KV_REST_API_URL/KV_REST_API_TOKEN or NEWKV_* equivalents). Returning null for session ${sessionId}`
    );
    return null;
  }

  const key = `paid:session:${sessionId}`;
  console.log(`UNLOCK_READ: Checking KV key: ${key}`);

  try {
    const value = await kv.get<UnlockStatus>(key);

    if (value) {
      console.log(`UNLOCK_READ: Found unlock for session ${sessionId}`);
    } else {
      console.log(`UNLOCK_READ: No unlock found for session ${sessionId}`);
    }

    return value;
  } catch (error) {
    console.error(
      `UNLOCK_READ: Error reading KV for session ${sessionId}:`,
      error
    );
    throw error;
  }
}

/**
 * Write unlock status to KV (idempotent)
 * ONLY the Stripe webhook should call this
 */
export async function writeUnlockStatus(
  sessionId: string
): Promise<void> {
  if (!isKVConfigured()) {
    const error = new Error(
      'KV not configured: Missing KV_REST_API_URL/KV_REST_API_TOKEN or NEWKV_* equivalents.'
    );
    console.error(
      `UNLOCK_WRITE: ${error.message} Cannot write unlock status for session ${sessionId}`
    );
    throw error;
  }

  const key = `paid:session:${sessionId}`;
  const value: UnlockStatus = {
    unlocked: true,
    unlockedAt: new Date().toISOString(),
  };

  console.log(`UNLOCK_WRITE: Writing to KV key: ${key}`);

  try {
    // Idempotent write — overwrite is safe
    await kv.set(key, value, {
      ex: 60 * 60 * 24 * 365, // 1 year TTL
    });

    console.log(
      `UNLOCK_WRITE: Successfully wrote unlock for session ${sessionId}`
    );
  } catch (error) {
    console.error(
      `UNLOCK_WRITE: Error writing KV for session ${sessionId}:`,
      error
    );
    throw error;
  }
}

/**
 * Check if unlock exists in KV (idempotency / verification helper)
 */
export async function hasUnlockStatus(
  sessionId: string
): Promise<boolean> {
  if (!isKVConfigured()) {
    console.warn(
      `UNLOCK_READ: KV not configured. Returning false for session ${sessionId}`
    );
    return false;
  }

  const key = `paid:session:${sessionId}`;

  try {
    const value = await kv.get<UnlockStatus>(key);
    return value !== null;
  } catch (error) {
    console.error(
      `UNLOCK_READ: Error checking KV for session ${sessionId}:`,
      error
    );
    return false;
  }
}
