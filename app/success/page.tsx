"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) return;

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
