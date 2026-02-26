// app/api/verify/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readUnlockStatus } from "@/lib/storage/kv";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Verify endpoint - checks unlock status from KV (authoritative source)
 * 
 * PRODUCTION-SAFE FLOW:
 * 1. Reads unlock status from Vercel KV (authoritative source)
 * 2. If KV key exists → unlock confirmed, set premium cookie
 * 3. If KV key doesn't exist → webhook hasn't written yet, return pending
 * 
 * NO Stripe API calls - reads ONLY from KV for unlock decisions
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const session_id = searchParams.get("session_id");

    if (!session_id) {
      return NextResponse.json(
        { ok: false, reason: "missing_session_id" },
        { status: 400 }
      );
    }

    console.log(`UNLOCK_READ: Verifying unlock for session ${session_id}`);

    // Read from KV (authoritative source) - NO Stripe API calls
    const unlockStatus = await readUnlockStatus(session_id);

    if (!unlockStatus) {
      // KV doesn't have unlock yet - webhook hasn't written
      console.log(`UNLOCK_READ: No unlock found in KV for ${session_id}, webhook pending`);
      return NextResponse.json(
        { ok: false, reason: "webhook_pending", retry: true },
        { status: 200 }
      );
    }

    // Unlock exists in KV - safe to grant access
    console.log(`UNLOCK_READ: Unlock confirmed in KV for ${session_id}, setting cookie`);
    
    cookies().set("premium", "1", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("UNLOCK_READ: verify error:", err);
    return NextResponse.json(
      { ok: false, reason: "verify_exception" },
      { status: 500 }
    );
  }
}
