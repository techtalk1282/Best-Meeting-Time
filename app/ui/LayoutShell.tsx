/**
 * File: app/ui/LayoutShell.tsx
 * Version: v3.1 (BOOK LINKS + BALANCED LAYOUT)
 * Date: 2026-04-08
 *
 * PURPOSE:
 * - Add individual clickable book buttons under image
 * - Preserve clean hero layout
 * - Improve monetization clarity
 *
 * ROLLBACK:
 * - Revert to v3.0
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

      {/* 🔥 MONETIZATION — HERO WITH BOOK LINKS */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        {/* TITLE */}
        <div style={{ color: "#fff", fontSize: "26px", fontWeight: "800", marginBottom: "10px" }}>
          Level up your productivity today
        </div>

        {/* SUBTEXT */}
        <div style={{ color: "#c4b5fd", fontSize: "15px", marginBottom: "28px" }}>
          Top books used by high performers — get yours now
        </div>

        {/* IMAGE */}
        <div style={{ width: "100%", maxWidth: "700px", marginBottom: "26px" }}>
          <img
            src="/books-display.png"
            alt="Top productivity books"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
            }}
          />
        </div>

        {/* ✅ BOOK BUTTON LINKS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
            marginBottom: "26px",
          }}
        >
          {[
            { label: "Atomic Habits", link: "https://amzn.to/47HUGKw" },
            { label: "The 7 Habits", link: "https://amzn.to/4siUb0Q" },
            { label: "Getting Things Done", link: "https://amzn.to/4duax2V" },
          ].map((book) => (
            <a
              key={book.label}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 16px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                fontSize: "13px",
                fontWeight: "600",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                transition: "all 0.2s ease",
              }}
            >
              {book.label}
            </a>
          ))}
        </div>

        {/* HELPER */}
        <div style={{ color: "#d1d5db", fontSize: "13px", marginBottom: "26px" }}>
          Tap a book above to view details and availability
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
            padding: "16px 40px",
            borderRadius: "16px",
            textDecoration: "none",
            fontSize: "18px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
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
