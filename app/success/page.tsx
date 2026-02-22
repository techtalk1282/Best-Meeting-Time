// app/success/page.tsx
export const dynamic = "force-dynamic";
"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");

  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      return;
    }

    fetch(`/api/verify?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setStatus("ok");
          setTimeout(() => {
            router.push("/");
          }, 1500);
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, [sessionId, router]);

  if (status === "loading") {
    return <h1>Verifying payment…</h1>;
  }

  if (status === "error") {
    return (
      <>
        <h1>Verification failed</h1>
        <a href="/">Back home</a>
      </>
    );
  }

  return <h1>Payment successful! Redirecting…</h1>;
}
