"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");

  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      return;
    }

    const verify = async () => {
      try {
        const res = await fetch(`/api/verify?session_id=${sessionId}`, {
          cache: "no-store",
        });

        const data = await res.json();

        if (data.ok === true) {
          setStatus("ok");
          setTimeout(() => router.replace("/"), 1500);
          return;
        }

        // Retry up to 10 times (webhook delay tolerance)
        if (attempt < 10) {
          setAttempt((a) => a + 1);
          setTimeout(verify, 1500);
        } else {
          setStatus("error");
        }
      } catch {
        if (attempt < 10) {
          setAttempt((a) => a + 1);
          setTimeout(verify, 1500);
        } else {
          setStatus("error");
        }
      }
    };

    verify();
  }, [sessionId, attempt, router]);

  if (status === "loading") {
    return (
      <>
        <h1>Verifying payment…</h1>
        {attempt > 0 && <p>Attempt {attempt} of 10</p>}
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <h1>Payment verification failed</h1>
        <a href="/">Return home</a>
      </>
    );
  }

  return <h1>Payment successful. Redirecting…</h1>;
}
