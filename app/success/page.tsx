// app/success/page.tsx
import Link from "next/link";

export const dynamic = "force-dynamic";

type Props = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function SuccessPage({ searchParams }: Props) {
  const raw = searchParams?.session_id;
  const session_id =
    typeof raw === "string" ? raw : Array.isArray(raw) ? raw[0] : null;

  if (!session_id) {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>Payment Not Verified</h1>
        <p>Missing session_id.</p>
        <Link href="/">Back home</Link>
      </main>
    );
  }

  // Server-side call to our verify endpoint
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify?session_id=${session_id}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const ok = data?.ok === true;

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>{ok ? "Payment Successful" : "Payment Not Verified"}</h1>
      <p>Premium: {ok ? "ON" : "OFF"}</p>

      <div style={{ marginTop: 16 }}>
        <Link href="/">Back home</Link>
      </div>
    </main>
  );
}
