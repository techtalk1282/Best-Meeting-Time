// app/api/webhooks/stripe/route.ts

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";
import { writeUnlockStatus, hasUnlockStatus } from "@/lib/storage/kv";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v || !v.trim()) throw new Error(`Missing env: ${name}`);
  return v.trim();
}

/**
 * Stripe Webhook Handler
 * AUTHORITATIVE writer to KV
 */
export async function POST(req: NextRequest) {
  const body = await req.text();
  const headersList = headers();
  const signature = headersList.get("stripe-signature");

  if (!signature) {
    console.error("STRIPE_WEBHOOK: Missing stripe-signature header");
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const stripe = new Stripe(requireEnv("STRIPE_SECRET_KEY"), {
    apiVersion: "2024-06-20",
  });

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      requireEnv("STRIPE_WEBHOOK_SECRET")
    );

    console.log(
      `STRIPE_WEBHOOK: Verified event ${event.id} (${event.type})`
    );
  } catch (err: any) {
    console.error(
      `STRIPE_WEBHOOK: Signature verification failed: ${err.message}`
    );
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // ============================================================
  // HANDLE checkout.session.completed
  // ============================================================

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (!session.id) {
      console.error("STRIPE_WEBHOOK: Missing session.id");
      return NextResponse.json({ received: true });
    }

    console.log(
      `STRIPE_WEBHOOK: Processing session ${session.id} | payment_status=${session.payment_status}`
    );

    // Only process fully paid sessions
    if (session.payment_status !== "paid") {
      console.log(
        `STRIPE_WEBHOOK: Session ${session.id} not paid yet. Skipping.`
      );
      return NextResponse.json({ received: true });
    }

    // Idempotency via KV (authoritative)
    try {
      const alreadyUnlocked = await hasUnlockStatus(session.id);

      if (alreadyUnlocked) {
        console.log(
          `STRIPE_WEBHOOK: Session ${session.id} already unlocked.`
        );
        return NextResponse.json({ received: true });
      }

      // 🔎 Log EXACT key being written
      const kvKey = `paid:session:${session.id}`;
      console.log("KV_WRITE_KEY =", kvKey);

      await writeUnlockStatus(session.id);

      console.log(
        `STRIPE_WEBHOOK: Successfully wrote unlock for ${session.id}`
      );
    } catch (err) {
      console.error(
        `STRIPE_WEBHOOK: KV write failed for ${session.id}`,
        err
      );

      // Return 200 so Stripe does not retry infinitely
      return NextResponse.json({ received: true });
    }

    return NextResponse.json({ received: true });
  }

  // ============================================================
  // Other event types (safe no-op)
  // ============================================================

  console.log(`STRIPE_WEBHOOK: Unhandled event type ${event.type}`);
  return NextResponse.json({ received: true });
}
