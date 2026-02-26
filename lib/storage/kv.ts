// lib/storage/kv.ts
import { kv } from '@vercel/kv';

export interface UnlockStatus {
  unlocked: true;
  unlockedAt: string; // ISO timestamp
}

/**
 * Check if KV is properly configured
 */
function isKVConfigured(): boolean {
  return !!(
    process.env.KV_REST_API_URL &&
    process.env.KV_REST_API_TOKEN
  );
}

/**
 * Read unlock status from KV (authoritative source)
 * Returns null if not found (webhook hasn't written yet)
 */
export async function readUnlockStatus(
  sessionId: string
): Promise<UnlockStatus | null> {
  if (!isKVConfigured()) {
    console.warn(`UNLOCK_READ: KV not configured (missing KV_REST_API_URL or KV_REST_API_TOKEN). Returning null for session ${sessionId}`);
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
    console.error(`UNLOCK_READ: Error reading KV for ${sessionId}:`, error);
    throw error;
  }
}

/**
 * Write unlock status to KV (idempotent)
 * Only webhook should call this - it's the ONLY writer
 */
export async function writeUnlockStatus(
  sessionId: string
): Promise<void> {
  if (!isKVConfigured()) {
    const error = new Error('KV not configured: Missing KV_REST_API_URL or KV_REST_API_TOKEN. Cannot write unlock status.');
    console.error(`UNLOCK_WRITE: ${error.message} for session ${sessionId}`);
    throw error;
  }

  const key = `paid:session:${sessionId}`;
  const value: UnlockStatus = {
    unlocked: true,
    unlockedAt: new Date().toISOString(),
  };
  
  console.log(`UNLOCK_WRITE: Writing to KV key: ${key}`);
  
  try {
    // KV set is idempotent - same key = overwrite (safe)
    await kv.set(key, value, { ex: 60 * 60 * 24 * 365 }); // 1 year TTL
    console.log(`UNLOCK_WRITE: Successfully wrote unlock for session ${sessionId}`);
  } catch (error) {
    console.error(`UNLOCK_WRITE: Error writing KV for ${sessionId}:`, error);
    throw error;
  }
}

/**
 * Check if unlock exists in KV (for idempotency checks)
 */
export async function hasUnlockStatus(sessionId: string): Promise<boolean> {
  if (!isKVConfigured()) {
    console.warn(`UNLOCK_READ: KV not configured. Returning false for session ${sessionId}`);
    return false;
  }

  const key = `paid:session:${sessionId}`;
  try {
    const value = await kv.get<UnlockStatus>(key);
    return value !== null;
  } catch (error) {
    console.error(`UNLOCK_READ: Error checking KV for ${sessionId}:`, error);
    return false;
  }
}
