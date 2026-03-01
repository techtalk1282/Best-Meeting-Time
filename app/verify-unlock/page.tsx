// app/verify-unlock/page.tsx
"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function VerifyUnlockPage() {
  const params = useSearchParams();
  const router = useRouter();
  const sessionId = params.get("session_id");

  useEffect(() => {
    if (!sessionId) {
      router.replace("/");
      return;
    }

    fetch(`/api/verify?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          router.replace("/");
        } else if (data.retry) {
          setTimeout(() => router.refresh(), 1000);
        } else {
          router.replace("/");
        }
      })
      .catch(() => router.replace("/"));
  }, [sessionId, router]);

  return <p>Finalizing unlock…</p>;
}
