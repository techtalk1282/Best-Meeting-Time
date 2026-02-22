// app/api/verify/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v || !v.trim()) throw new Error(`Missing env: ${name}`);
  return v.trim();
}

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

    const stripe = new Stripe(requireEnv("STRIPE_SECRET_KEY"));
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { ok: false, reason: "not_paid" },
        { status: 200 }
      );
    }

    cookies().set("premium", "1", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("verify error:", err);
    return NextResponse.json(
      { ok: false, reason: "verify_exception" },
      { status: 500 }
    );
  }
}
