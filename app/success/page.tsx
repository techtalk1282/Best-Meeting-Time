// app/success/page.tsx
import Stripe from "stripe";
import { cookies } from "next/headers";
import Link from "next/link";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v || !v.trim()) throw new Error(`Missing env: ${name}`);
  return v.trim();
}

type Props = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function SuccessPage({ searchParams }: Props) {
  const sessionIdRaw = searchParams?.session_id;
  const session_id =
    typeof sessionIdRaw === "string"
      ? sessionIdRaw
      : Array.isArray(sessionIdRaw)
      ? sessionIdRaw[0]
      : undefined;

  if (!session_id) {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>Missing session_id</h1>
        <p>Stripe did not return a session_id.</p>
        <Link href="/">Back home</Link>
      </main>
    );
  }

  const stripe = new Stripe(requireEnv("STRIPE_SECRET_KEY"));

  const session = await stripe.checkout.sessions.retrieve(session_id);

  const paid = session.payment_status === "paid";

  if (paid) {
    cookies().set("premium", "1", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>{paid ? "Payment Successful" : "Payment Not Completed"}</h1>
      <p>Premium: {paid ? "ON" : "OFF"}</p>

      <div style={{ marginTop: 16 }}>
        <Link href="/">Back home</Link>
      </div>

      <div style={{ marginTop: 16, opacity: 0.7, fontSize: 12 }}>
        <div>session_id: {session_id}</div>
        <div>payment_status: {session.payment_status}</div>
      </div>
    </main>
  );
}
