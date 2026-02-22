// app/success/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const sessionId = searchParams?.session_id;
  const [status, setStatus] = useState<
    "loading" | "success" | "error"
  >("loading");

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      return;
    }

    fetch(`/api/verify?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.ok) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      })
      .catch(() => {
        setStatus("error");
      });
  }, [sessionId]);

  if (status === "loading") {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>Verifying payment…</h1>
        <p>Please wait.</p>
      </main>
    );
  }

  if (status === "error") {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>Verification failed</h1>
        <p>We could not confirm your payment.</p>
        <Link href="/">Back home</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Payment successful</h1>
      <p>Premium has been unlocked.</p>
      <Link href="/">Go back home</Link>
    </main>
  );
}
