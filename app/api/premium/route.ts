// app/api/premium/route.ts
// NOTE: This route appears unused but kept for backward compatibility
// It now follows the same production-safe pattern as /api/verify
// Uses KV as authoritative source (no Stripe API calls for unlock decisions)
import { NextRequest, NextResponse } from "next/server";
import { readUnlockStatus } from "@/lib/storage/kv";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Legacy premium route - redirects after checking payment
 * Now uses KV as authoritative source (same as /api/verify)
 * 
 * NO Stripe API calls - reads ONLY from KV for unlock decisions
 */
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const sessionId = url.searchParams.get("session_id") || "";

  if (!sessionId) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  try {
    // Read from KV (authoritative source) - NO Stripe API calls
    console.log(`UNLOCK_READ: Checking KV for paid:session:${sessionId} (premium route)`);
    const unlockStatus = await readUnlockStatus(sessionId);

    const res = NextResponse.redirect(new URL("/", req.url));

    if (unlockStatus) {
      // Unlock exists in KV - safe to set premium cookie
      console.log(`UNLOCK_READ: Unlock confirmed in KV for ${sessionId}, setting cookie (premium route)`);
      res.cookies.set("premium", "1", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 365, // 1 year (consistent with verify)
      });
    } else {
      console.log(`UNLOCK_READ: No unlock found in KV for ${sessionId} (premium route)`);
    }

    return res;
  } catch (err) {
    console.error("UNLOCK_READ: premium route error:", err);
    return NextResponse.redirect(new URL("/", req.url));
  }
}
