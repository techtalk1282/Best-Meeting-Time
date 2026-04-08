/**
 * File: app/ui/LayoutShell.tsx
 * Version: v2.2
 * Date: 2026-04-07
 *
 * PURPOSE:
 * - Add monetization fallback using Amazon affiliate links
 *
 * WHAT WAS CHANGED:
 * - Replaced fallback placeholder link with Amazon affiliate links
 * - Maintained AdSense slot and rendering logic
 *
 * ROLLBACK:
 * - Restore previous fallback <div> block
 */

"use client";

import { ReactNode, useEffect } from "react";

export default function LayoutShell({
  hero,
  toolPreview,
  premiumFeatures,
  bonusFeatures,
  footer,
}: {
  hero: ReactNode;
  toolPreview: ReactNode;
  premiumFeatures: ReactNode;
  bonusFeatures: ReactNode;
  footer: ReactNode;
}) {

  // ✅ Trigger AdSense render
  useEffect(() => {
  try {
    // @ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    console.error("AdSense push error:", e);
  }
}, []);

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
      }}
    >
      {/* HERO */}
      <section id="hero">{hero}</section>

      {/* TOOL */}
      <section id="tool-preview">{toolPreview}</section>

      {/* PREMIUM */}
      <section>{premiumFeatures}</section>

      {/* 🟡 AD SLOT */}
<section
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px 0",
  }}
>
  {/* Label (temporary until ads load) */}
  <div
    style={{
      textAlign: "center",
      color: "#ddd6fe",
      fontSize: "12px",
      opacity: 0.6,
      marginBottom: "10px",
    }}
  >
    Advertisement
  </div>

  <ins
  className="adsbygoogle"
  style={{ display: "block", width: "100%", maxWidth: 728, height: 90 }}
  data-ad-client="ca-pub-9246885832557966"
  data-ad-slot="5883090133"
  data-ad-format="auto"
  data-full-width-responsive="true"
/>

{/* 🔥 AMAZON FALLBACK MONETIZATION — v2.2 */}
<div
  style={{
    marginTop: "20px",
    background: "rgba(255,255,255,0.08)",
    padding: "16px",
    borderRadius: "12px",
    textAlign: "center",
    maxWidth: "700px",
  }}
>
  <div style={{ color: "#ddd6fe", fontSize: "13px", marginBottom: "12px" }}>
    Recommended Productivity Books
  </div>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      flexWrap: "wrap",
    }}
  >
    <a
      href="https://amzn.to/47HUGKw"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#fff", textDecoration: "none", fontSize: "13px" }}
    >
      Atomic Habits
    </a>

    <a
      href="https://amzn.to/4siUb0Q"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#fff", textDecoration: "none", fontSize: "13px" }}
    >
      7 Habits
    </a>

    <a
      href="https://amzn.to/4duax2V"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#fff", textDecoration: "none", fontSize: "13px" }}
    >
      Getting Things Done
    </a>
  </div>
</div>
📌 VERSION UPDATE (REQUIRED)

Update your header:

 * Version: v2.2
 * Date: 2026-04-07
 *
 * WHAT WAS CHANGED:
 * - Replaced fallback monetization link with Amazon affiliate links
 * - Maintained AdSense container (no structural changes)
 *
 * ROLLBACK:
 * - Restore previous fallback <div> block
💰 WHY THIS IS THE RIGHT MOVE
You keep AdSense path open
You monetize immediately
You don’t risk breaking layout
You stay within your existing container architecture
⚠️ CRITICAL (DO THIS AFTER)

Add to footer (Amazon requirement):

As an Amazon Associate, I earn from qualifying purchases.
▶️ YOUR STEP

Make this exact replacement only

Then reply:

👉 “deployed”

Next step:
I’ll show you how to increase clicks 3–10x without adding more ads (this is where money actually starts).
</section>

      {/* BONUS */}
      <section id="bonus-features">{bonusFeatures}</section>

     <footer id="footer">
  {footer}

  <div style={{ marginTop: "10px", fontSize: "14px", textAlign: "center" }}>
    <a href="/privacy-policy" style={{ marginRight: "15px", color: "#ddd6fe" }}>
      Privacy Policy
    </a>
    <a href="/terms-of-service" style={{ color: "#ddd6fe" }}>
      Terms of Service
    </a>
  </div>
</footer>
      
    </div>
  );
}
