// lib/storage/kv.ts
import { kv } from "@vercel/kv";

export interface UnlockStatus {
  unlocked: true;
  unlockedAt: string;
}

/**
 * Detect which KV env vars are actually present.
 * Supports both legacy and newly-prefixed Upstash connections.
 */
function getKVConfig() {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    return {
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
      source: "KV_*",
    };
  }

  if (
    process.env.NEWKV_KV_REST_API_URL &&
    process.env.NEWKV_KV_REST_API_TOKEN
  ) {
    return {
      url: process.env.NEWKV_KV_REST_API_URL,
      token: process.env.NEWKV_KV_REST_API_TOKEN,
      source: "NEWKV_*",
    };
  }

  return null;
}

/**
 * Read unlock status from KV (AUTHORITATIVE)
 */
export async function readUnlockStatus(
  sessionId: string
): Promise<UnlockStatus | null> {
  const cfg = getKVConfig();

  if (!cfg) {
    console.error("UNLOCK_READ: No KV env vars found");
    return null;
  }

  const key = `paid:session:${sessionId}`;
  console.log(`UNLOCK_READ: Using ${cfg.source}, key=${key}`);

  const value = await kv.get<UnlockStatus>(key);
  return value ?? null;
}

/**
 * Write unlock status to KV (ONLY webhook should call this)
 */
export async function writeUnlockStatus(sessionId: string): Promise<void> {
  const cfg = getKVConfig();

  if (!cfg) {
    throw new Error("UNLOCK_WRITE: No KV env vars found");
  }

  const key = `paid:session:${sessionId}`;
  const value: UnlockStatus = {
    unlocked: true,
    unlockedAt: new Date().toISOString(),
  };

  console.log(`UNLOCK_WRITE: Using ${cfg.source}, key=${key}`);

  await kv.set(key, value, {
    ex: 60 * 60 * 24 * 365, // 1 year
  });
}

/**
 * Idempotency check
 */
export async function hasUnlockStatus(
  sessionId: string
): Promise<boolean> {
  const cfg = getKVConfig();
  if (!cfg) return false;

  const key = `paid:session:${sessionId}`;
  const value = await kv.get(key);
  return value !== null;
}
