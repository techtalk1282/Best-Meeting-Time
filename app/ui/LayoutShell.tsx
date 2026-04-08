/**
 * File: app/ui/LayoutShell.tsx
 * Version: v3.2 (FINAL — INDIVIDUAL BOOK CTAs)
 * Date: 2026-04-08
 *
 * PURPOSE:
 * - Improve clarity and conversion
 * - Remove misleading CTA
 * - Add individual book CTAs
 * - Improve image rendering quality
 *
 * ROLLBACK:
 * - Revert to v3.1
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

  const books = [
    { label: "Atomic Habits", link: "https://amzn.to/47HUGKw" },
    { label: "The 7 Habits", link: "https://amzn.to/4siUb0Q" },
    { label: "Getting Things Done", link: "https://amzn.to/4duax2V" },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
      }}
    >
      <section id="hero">{hero}</section>
      <section id="tool-preview">{toolPreview}</section>
      <section>{premiumFeatures}</section>

      {/* 🔥 MONETIZATION — FINAL CLEAN */}
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

        {/* IMAGE (IMPROVED RENDERING) */}
        <div style={{ width: "100%", maxWidth: "800px", marginBottom: "34px" }}>
          <img
            src="/books-display.png"
            alt="Top productivity books"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
              imageRendering: "auto",
            }}
          />
        </div>

        {/* ✅ INDIVIDUAL BOOK CTAs */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            width: "100%",
            maxWidth: "360px",
          }}
        >
          {books.map((book) => (
            <a
              key={book.label}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "linear-gradient(90deg,#facc15,#f59e0b)",
                color: "#000",
                fontWeight: "700",
                padding: "14px",
                borderRadius: "12px",
                textDecoration: "none",
                fontSize: "15px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
              }}
            >
              {book.label} → Get the Book
            </a>
          ))}
        </div>
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
