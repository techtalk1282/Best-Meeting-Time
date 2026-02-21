// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v || !v.trim()) throw new Error(`Missing ${name}`);
  return v.trim();
}

function getBaseUrl(req: NextRequest): string {
  // Prefer NEXT_PUBLIC_APP_URL if it's a valid absolute URL with http/https
  const envUrl = (process.env.NEXT_PUBLIC_APP_URL || "").trim();
  if (envUrl) {
    try {
      const u = new URL(envUrl);
      if (u.protocol === "http:" || u.protocol === "https:") return u.origin;
    } catch {
      // fall through to req origin
    }
  }

  // Fallback: always valid on Vercel (includes https://)
  return req.nextUrl.origin;
}

export async function POST(req: NextRequest) {
  try {
    const stripeSecretKey = requireEnv("STRIPE_SECRET_KEY");
    const stripePriceId = requireEnv("STRIPE_PRICE_ID");

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2024-06-20",
    });

    const baseUrl = getBaseUrl(req);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [{ price: stripePriceId, quantity: 1 }],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    const message =
      typeof err?.message === "string" ? err.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
