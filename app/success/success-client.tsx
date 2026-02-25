"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");

  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      return;
    }

    // Poll verify endpoint with exponential backoff
    // Webhook may take a few seconds to process
    const pollVerify = async (attempt: number = 0): Promise<void> => {
      if (attempt >= 10) {
        // Max 10 attempts (~30 seconds total)
        setStatus("error");
        return;
      }

      try {
        const res = await fetch(`/api/verify?session_id=${sessionId}`);
        const data = await res.json();

        if (data.ok) {
          // Payment verified and webhook processed - success!
          setStatus("ok");
          setTimeout(() => router.push("/"), 2000);
          return;
        }

        if (data.reason === "webhook_pending" && data.retry) {
          // Webhook hasn't processed yet - retry with exponential backoff
          setRetryCount(attempt + 1);
          const delay = Math.min(1000 * Math.pow(1.5, attempt), 5000); // Max 5s delay
          setTimeout(() => pollVerify(attempt + 1), delay);
          return;
        }

        // Other error (not_paid, etc.)
        setStatus("error");
      } catch (err) {
        // Network error - retry once more
        if (attempt < 3) {
          setTimeout(() => pollVerify(attempt + 1), 1000);
        } else {
          setStatus("error");
        }
      }
    };

    pollVerify();
  }, [sessionId, router]);

  if (status === "loading") {
    return (
      <>
        <h1>Verifying payment…</h1>
        {retryCount > 0 && (
          <p>Waiting for payment confirmation… (attempt {retryCount})</p>
        )}
      </>
    );
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
