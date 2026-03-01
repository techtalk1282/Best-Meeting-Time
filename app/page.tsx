// app/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function HomePage({
  searchParams,
}: {
  searchParams?: { session_id?: string };
}) {
  const premium = cookies().get("premium")?.value === "1";
  const sessionId = searchParams?.session_id;

  // If returning from Stripe with session_id, verify unlock
  if (sessionId) {
    redirect(`/verify-unlock?session_id=${sessionId}`);
  }

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Best Meeting Time</h1>
      <p>Premium: {premium ? "ON" : "OFF"}</p>

      {!premium && (
        <a href="/api/checkout">
          <button>Unlock Premium ($1)</button>
        </a>
      )}
    </main>
  );
}
