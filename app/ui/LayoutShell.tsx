/**
 * File: app/ui/LayoutShell.tsx
 * Version: v2.9
 * Date: 2026-04-08
 *
 * PURPOSE:
 * - Correct book display to match Variation B
 *
 * CHANGES:
 * - Removed bulky container
 * - Restored large upright book visuals
 * - Fixed third book rendering
 * - Improved spacing + visual balance
 *
 * ROLLBACK:
 * - Revert to v2.8
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

      {/* 🔥 MONETIZATION — FINAL FIX */}
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

        <div
          style={{
            color: "#c4b5fd",
            fontSize: "14px",
            marginBottom: "28px",
          }}
        >
          Top books used by high performers — get yours now
        </div>

        {/* 📚 BOOK DISPLAY (KEY FIX) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "18px",
            marginBottom: "18px",
          }}
        >
          {/* Atomic Habits */}
          <a href="https://amzn.to/47HUGKw" target="_blank">
            <img
              src="https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg"
              alt="Atomic Habits"
              style={{
                height: "200px",
                borderRadius: "10px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
              }}
            />
          </a>

          {/* 7 Habits (center highlight) */}
          <a href="https://amzn.to/4siUb0Q" target="_blank">
            <img
              src="https://m.media-amazon.com/images/I/71f6DceqZAL.jpg"
              alt="7 Habits"
              style={{
                height: "220px",
                borderRadius: "10px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.7)",
                transform: "translateY(-8px)",
              }}
            />
          </a>

          {/* Getting Things Done */}
          <a href="https://amzn.to/4duax2V" target="_blank">
            <img
              src="https://m.media-amazon.com/images/I/81M1C7U1cKL.jpg"
              alt="Getting Things Done"
              style={{
                height: "200px",
                borderRadius: "10px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
              }}
            />
          </a>
        </div>

        {/* Helper */}
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
