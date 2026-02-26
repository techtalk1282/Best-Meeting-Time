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
 * Webhook handler for Stripe events
 * This is the AUTHORITATIVE source for premium status
 * Only this endpoint sets premium cookies after payment verification
 */
export async function POST(req: NextRequest) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get("stripe-signature");

  if (!signature) {
    console.error("STRIPE_WEBHOOK: Missing stripe-signature header");
    return NextResponse.json(
      { error: "Missing signature" },
      { status: 400 }
    );
  }

  const webhookSecret = requireEnv("STRIPE_WEBHOOK_SECRET");
  const stripe = new Stripe(requireEnv("STRIPE_SECRET_KEY"), {
    apiVersion: "2024-06-20",
  });

  let event: Stripe.Event;

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    console.log(`STRIPE_WEBHOOK: Verified event ${event.id} of type ${event.type}`);
  } catch (err: any) {
    console.error(`STRIPE_WEBHOOK: Signature verification failed: ${err.message}`);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Handle checkout.session.completed event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Only process if payment is actually paid
    if (session.payment_status !== "paid") {
      console.log(
        `STRIPE_WEBHOOK: Session ${session.id} completed but payment_status is ${session.payment_status}, skipping`
      );
      return NextResponse.json({ received: true });
    }

    console.log(
      `STRIPE_WEBHOOK: Processing checkout.session.completed for session ${session.id}, customer: ${session.customer_email || session.customer || "unknown"}`
    );

    // Idempotency Check 1: Check if this event was already processed (via metadata)
    const lastEventId = session.metadata?.last_webhook_event_id;
    if (lastEventId === event.id) {
      console.log(`STRIPE_WEBHOOK: Event ${event.id} already processed for session ${session.id}`);
      return NextResponse.json({ received: true }); // Idempotent
    }

    // Idempotency Check 2: Check if unlock already exists in KV (most authoritative)
    const kvHasUnlock = await hasUnlockStatus(session.id);
    if (kvHasUnlock) {
      console.log(`STRIPE_WEBHOOK: Session ${session.id} already unlocked in KV, skipping write`);
      // Still update event ID in metadata for tracking (optional, non-authoritative)
      try {
        await stripe.checkout.sessions.update(session.id, {
          metadata: {
            ...(session.metadata || {}),
            last_webhook_event_id: event.id,
          },
        });
      } catch (updateErr) {
        console.error(`STRIPE_WEBHOOK: Failed to update event ID for ${session.id}:`, updateErr);
      }
      return NextResponse.json({ received: true }); // Idempotent
    }

    // Write to KV (authoritative store) - ONLY writer to KV
    try {
      await writeUnlockStatus(session.id);
      console.log(`STRIPE_WEBHOOK: Successfully unlocked session ${session.id} in KV`);
    } catch (kvError) {
      console.error(`STRIPE_WEBHOOK: Failed to write KV for ${session.id}:`, kvError);
      // Still return 200 to prevent Stripe retry (will retry on next webhook if needed)
      // Log error for monitoring
      return NextResponse.json({ received: true });
    }

    // Optional: Update Stripe metadata for logging/debugging (NOT authoritative)
    try {
      await stripe.checkout.sessions.update(session.id, {
        metadata: {
          ...(session.metadata || {}),
          webhook_processed: "true",
          webhook_processed_at: new Date().toISOString(),
          last_webhook_event_id: event.id,
        },
      });
      console.log(`STRIPE_WEBHOOK: Updated metadata for session ${session.id} (logging only)`);
    } catch (updateErr) {
      // Non-critical, log only
      console.error(`STRIPE_WEBHOOK: Failed to update metadata for ${session.id}:`, updateErr);
    }

    return NextResponse.json({ received: true });
  }

  // Handle cancelled/expired checkout sessions (optional - for analytics)
  if (event.type === "checkout.session.async_payment_failed" || 
      event.type === "checkout.session.expired") {
    const session = event.data.object as Stripe.Checkout.Session;
    console.log(
      `STRIPE_WEBHOOK: Checkout session ${session.id} ${event.type === "checkout.session.async_payment_failed" ? "payment failed" : "expired"}`
    );
    // Optional: Track cancelled sessions for analytics
    // No action needed - user is already redirected to cancel page
    return NextResponse.json({ received: true });
  }

  // Handle other event types (idempotent - return success)
  console.log(`STRIPE_WEBHOOK: Unhandled event type: ${event.type}`);
  return NextResponse.json({ received: true });
}
