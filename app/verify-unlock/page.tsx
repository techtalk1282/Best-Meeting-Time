// app/verify-unlock/page.tsx
"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

/**
 * This page exists ONLY to:
 * 1. Read session_id from the URL
 * 2. Call /api/verify (KV-authoritative)
 * 3. Let cookies be set server-side
 * 4. Redirect back to home
 *
 * NO Stripe calls
 * NO KV writes
 * NO business logic
 */

function VerifyUnlockClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const session_id = searchParams.get("session_id");

    if (!session_id) {
      // Nothing to verify — go home safely
      router.replace("/");
      return;
    }

    // Call KV-authoritative verify endpoint
    fetch(`/api/verify?session_id=${session_id}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then(() => {
        // Regardless of pending or confirmed,
        // home page will reflect correct premium state
        router.replace("/");
      })
      .catch(() => {
        // Fail closed — never block the user
        router.replace("/");
      });
  }, [searchParams, router]);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Finalizing your unlock…</h1>
      <p>Please wait.</p>
    </main>
  );
}

export default function VerifyUnlockPage() {
  return (
    <Suspense fallback={<div />}>
      <VerifyUnlockClient />
    </Suspense>
  );
}
