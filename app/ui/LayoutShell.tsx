/**
 * File: app/ui/LayoutShell.tsx
 * Version: v2.1
 * Date: 2026-04-05
 *
 * PURPOSE:
 * - Add AdSense slot between Premium and Bonus sections
 *
 * WHAT WAS CHANGED:
 * - Inserted <ins class="adsbygoogle"> container
 * - Added useEffect to trigger ad render
 *
 * ROLLBACK:
 * - Revert to v2.0 to remove ad slot
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
          justifyContent: "center",
          padding: "30px 0",
        }}
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", maxWidth: 728, height: 90 }}
          data-ad-client="ca-pub-9246885832557966"
          data-ad-slot="5883090133"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </section>

      {/* BONUS */}
      <section id="bonus-features">{bonusFeatures}</section>

     <footer id="footer">
  {footer}

  <div style={{ marginTop: "20px", fontSize: "14px", textAlign: "center" }}>
    <a href="/privacy-policy" style={{ marginRight: "15px", color: "#ddd6fe" }}>
      Privacy Policy
    </a>
    <a href="/terms-of-service" style={{ color: "#ddd6fe" }}>
      Terms of Service
    </a>
  </div>
</footer>
      <footer id="footer">{footer}</footer>
    </div>
  );
}
