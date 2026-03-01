"use client";

import UnlockPremiumButton from "./UnlockPremiumButton";

export default function HomePage() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Best Meeting Time</h1>

      <p>Premium: OFF</p>

      {/* IMPORTANT: no <a>, no <form>, no href */}
      <UnlockPremiumButton />
    </main>
  );
}
