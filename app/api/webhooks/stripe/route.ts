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
    console.log(`STRIPE_WEBHOOK: Verified ${event.type} ${event.id}`);
  } catch (err: any) {
    console.error("STRIPE_WEBHOOK: Signature verification failed", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status !== "paid") {
      console.log("STRIPE_WEBHOOK: Payment not paid, ignoring");
      return NextResponse.json({ received: true });
    }

    const alreadyUnlocked = await hasUnlockStatus(session.id);
    if (!alreadyUnlocked) {
      await writeUnlockStatus(session.id);
      console.log(`STRIPE_WEBHOOK: Unlock written for ${session.id}`);
    } else {
      console.log(`STRIPE_WEBHOOK: Unlock already exists for ${session.id}`);
    }

    return NextResponse.json({ received: true });
  }

  return NextResponse.json({ received: true });
}
