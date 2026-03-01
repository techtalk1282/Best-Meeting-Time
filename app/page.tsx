// app/page.tsx
import { cookies } from "next/headers";

export default async function HomePage({
  searchParams,
}: {
  searchParams?: { session_id?: string };
}) {
  const cookieStore = cookies();
  const premium = cookieStore.get("premium")?.value === "1";

  // If Stripe redirected back with session_id and premium is not set yet,
  // trigger a server-side verify (KV-authoritative)
  if (!premium && searchParams?.session_id) {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify?session_id=${searchParams.session_id}`,
        { cache: "no-store" }
      );
    } catch {
      // fail silently — webhook remains authoritative
    }
  }

  const refreshedPremium = cookieStore.get("premium")?.value === "1";

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Best Meeting Time</h1>
      <p>Premium: {refreshedPremium ? "ON" : "OFF"}</p>

      {!refreshedPremium && (
        <form action="/api/checkout" method="POST">
          <button
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              background: "black",
              color: "white",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Unlock Premium ($1)
          </button>
        </form>
      )}
    </main>
  );
}
