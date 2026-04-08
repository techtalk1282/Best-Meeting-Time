/**
 * File: app/ui/LayoutShell.tsx
 * Version: v3.0 (CLEAN RESET — IMAGE-BASED BOOK DISPLAY)
 * Date: 2026-04-08
 *
 * PURPOSE:
 * - Replace broken book rendering with polished image asset
 * - Keep layout clean and stable
 *
 * CHANGES:
 * - Removed all individual book image logic
 * - Added single image-based display (books-display.png)
 * - Preserved CTA (Shop Now)
 * - Preserved layout + spacing
 *
 * ROLLBACK:
 * - Revert to v2.9
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
      <section id="hero">{hero}</section>
      <section id="tool-preview">{toolPreview}</section>
      <section>{premiumFeatures}</section>

      {/* 🔥 MONETIZATION — FINAL STABLE */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px 60px",
          textAlign: "center",
        }}
      >
        {/* TITLE */}
        <div
          style={{
            color: "#fff",
            fontSize: "22px",
            fontWeight: "800",
            marginBottom: "6px",
          }}
        >
          Level up your productivity today
        </div>

        {/* SUBTEXT */}
        <div
          style={{
            color: "#c4b5fd",
            fontSize: "14px",
            marginBottom: "24px",
          }}
        >
          Top books used by high performers — get yours now
        </div>

        {/* ✅ BOOK IMAGE (SOURCE OF TRUTH) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "18px",
          }}
        >
          <img
            src="/books-display.png"
            alt="Top productivity books"
            style={{
              width: "100%",
              maxWidth: "420px",
              height: "auto",
              borderRadius: "14px",
              boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
            }}
          />
        </div>

        {/* HELPER */}
        <div
          style={{
            color: "#d1d5db",
            fontSize: "12px",
            marginBottom: "20px",
          }}
        >
          Tap any book to view details and availability
        </div>

        {/* CTA */}
        <a
          href="https://amzn.to/47HUGKw"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "linear-gradient(90deg,#facc15,#f59e0b)",
            color: "#000",
            fontWeight: "800",
            padding: "14px 32px",
            borderRadius: "14px",
            textDecoration: "none",
            fontSize: "16px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
          }}
        >
          Shop Now
        </a>
      </section>

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

        <div
          style={{
            marginTop: "10px",
            fontSize: "12px",
            textAlign: "center",
            color: "#aaa",
          }}
        >
          As an Amazon Associate, I earn from qualifying purchases.
        </div>
      </footer>
    </div>
  );
}
