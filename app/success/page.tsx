"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function SuccessInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) {
      router.replace("/");
      return;
    }

    let attempts = 0;
    const maxAttempts = 10;

    const interval = setInterval(async () => {
      attempts++;

      const res = await fetch(`/api/verify?session_id=${sessionId}`, {
        method: "GET",
        cache: "no-store",
      });

      if (res.ok) {
        const data = await res.json();

        if (data?.premium === true) {
          clearInterval(interval);
          router.replace("/");
        }
      }

      if (attempts >= maxAttempts) {
        clearInterval(interval);
        router.replace("/");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [sessionId, router]);

  return <h1>Payment successful. Redirecting...</h1>;
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<h1>Finalizing payment…</h1>}>
      <SuccessInner />
    </Suspense>
  );
}
