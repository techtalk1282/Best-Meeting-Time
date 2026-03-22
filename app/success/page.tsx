"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function SuccessInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    // If no session, go home
    if (!sessionId) {
      router.replace("/");
      return;
    }

    // ✅ FORCE PREMIUM COOKIE (TEST MODE)
    document.cookie = "premium=1; path=/; max-age=31536000";

    // ✅ Give browser time to persist cookie before redirect
    setTimeout(() => {
      router.replace("/");
    }, 500);

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
