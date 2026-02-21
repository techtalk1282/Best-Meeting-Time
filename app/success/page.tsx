import Stripe from "stripe";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>Payment Result</h1>
        <p>Missing session_id.</p>
        <a href="/">Back home</a>
      </main>
    );
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>Payment Result</h1>
        <p>Server misconfigured: Missing STRIPE_SECRET_KEY.</p>
        <a href="/">Back home</a>
      </main>
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-06-20",
  });

  let paid = false;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    paid = session.payment_status === "paid";
  } catch {
    paid = false;
  }

  const continueHref = `/api/premium?session_id=${encodeURIComponent(sessionId)}`;

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Payment {paid ? "Successful" : "Not Verified"}</h1>
      <p>Premium: {paid ? "ON" : "OFF"}</p>

      <div style={{ marginTop: 16 }}>
        {paid ? (
          <a href={continueHref}>Continue</a>
        ) : (
          <a href="/">Back home</a>
        )}
      </div>

      {!paid && (
        <p style={{ marginTop: 16 }}>
          If you were charged, this usually means the session_id is invalid,
          expired, or the payment is not marked paid yet.
        </p>
      )}
    </main>
  );
}
