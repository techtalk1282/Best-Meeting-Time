/**
 * File: app/ui/LayoutShell.tsx
 * Version: v2.8
 * Date: 2026-04-08
 *
 * PURPOSE:
 * - Match Variation B polished monetization card
 *
 * CHANGES:
 * - Added dark rounded container
 * - Improved book sizing + spacing
 * - Stronger CTA ("Shop Now")
 * - Better visual hierarchy + depth
 *
 * ROLLBACK:
 * - Revert to v2.7
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

      {/* 🔥 MONETIZATION — VARIATION B */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "50px 20px 70px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "720px",
            background: "linear-gradient(180deg,#3b1f8a,#2a1667)",
            borderRadius: "24px",
            padding: "30px 25px 35px",
            boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
            textAlign: "center",
          }}
        >
          {/* TITLE */}
          <div
            style={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: "800",
              marginBottom: "6px",
            }}
          >
            Level up your productivity today
          </div>

          <div
            style={{
              color: "#c4b5fd",
              fontSize: "13px",
              marginBottom: "25px",
            }}
          >
            Top books used by high performers — get yours now
          </div>

          {/* BOOKS */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                title: "Atomic Habits",
                link: "https://amzn.to/47HUGKw",
                img: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg",
              },
              {
                title: "7 Habits",
                link: "https://amzn.to/4siUb0Q",
                img: "https://m.media-amazon.com/images/I/71f6DceqZAL.jpg",
              },
              {
                title: "Getting Things Done",
                link: "https://amzn.to/4duax2V",
                img: "https://m.media-amazon.com/images/I/81M1C7U1cKL.jpg",
              },
            ].map((book) => (
              <a
                key={book.title}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={book.img}
                  alt={book.title}
                  style={{
                    width: "110px",
                    borderRadius: "10px",
                    boxShadow: "0 18px 35px rgba(0,0,0,0.6)",
                  }}
                />
              </a>
            ))}
          </div>

          {/* HELPER TEXT */}
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
              padding: "14px 30px",
              borderRadius: "14px",
              textDecoration: "none",
              fontSize: "15px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
            }}
          >
            Shop Now
          </a>
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
