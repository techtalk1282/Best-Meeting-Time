import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v || !v.trim()) throw new Error(`Missing env: ${name}`);
  return v.trim();
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const sessionId = url.searchParams.get("session_id") || "";

  if (!sessionId) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const stripe = new Stripe(requireEnv("STRIPE_SECRET_KEY"), {
    apiVersion: "2024-06-20",
  });

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const paid = session.payment_status === "paid";

    const res = NextResponse.redirect(new URL("/", req.url));

    if (paid) {
      // Persist premium on the server for this browser
      res.cookies.set("premium", "1", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
    }

    return res;
  } catch {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
