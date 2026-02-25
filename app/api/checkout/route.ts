import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

/**
 * Initialize Stripe
 */
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

/**
 * Create Checkout Session
 */
export async function POST(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Missing STRIPE_SECRET_KEY" },
        { status: 500 }
      );
    }

    if (!process.env.STRIPE_PRICE_ID) {
      return NextResponse.json(
        { error: "Missing STRIPE_PRICE_ID" },
        { status: 500 }
      );
    }

    /**
     * ✅ SAFELY derive absolute origin (https://...)
     * Works in:
     * - Production
     * - Preview
     * - Custom domains
     */
    const origin = req.headers.get("origin");

    if (!origin) {
      return NextResponse.json(
        { error: "Unable to determine request origin" },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      // Metadata for webhook tracking (optional but helpful)
      metadata: {
        created_at: new Date().toISOString(),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe Checkout Error:", err);

    return NextResponse.json(
      { error: err.message ?? "Stripe checkout failed" },
      { status: 500 }
    );
  }
}
