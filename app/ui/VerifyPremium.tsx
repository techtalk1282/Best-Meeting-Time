"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function VerifyPremium() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (!sessionId) return;

    console.log("VERIFY: session detected");

    fetch(`/api/verify?session_id=${sessionId}`)
      .then(res => res.json())
      .then(data => {
        console.log("VERIFY RESULT:", data);

        if (data.ok) {
          console.log("Premium unlocked");

          // clean URL
          window.history.replaceState({}, "", "/");
        } else if (data.retry) {
          console.log("Webhook pending — retrying");

          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      })
      .catch(err => console.error("VERIFY ERROR:", err));
  }, [searchParams]);

  return null; // no UI impact
}
