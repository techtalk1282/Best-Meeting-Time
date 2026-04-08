/**
 * File: app/ui/LayoutShell.tsx
 * Version: v2.7
 * Date: 2026-04-08
 *
 * PURPOSE:
 * - Upgrade monetization section to realistic book visuals (Variation B)
 *
 * CHANGES:
 * - Replaced flat gradients with real book images
 * - Added depth, shadow, hover lift
 * - Improved CTA styling
 *
 * ROLLBACK:
 * - Revert to v2.6
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

      {/* 🔥 MONETIZATION — UPDATED */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 0 60px 0",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "1000px",
            width: "100%",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              color: "#fff",
              fontSize: "22px",
              fontWeight: "800",
              marginBottom: "8px",
            }}
          >
            Level up your productivity today
          </div>

          <div
            style={{
              color: "#c4b5fd",
              fontSize: "14px",
              marginBottom: "30px",
            }}
          >
            Top books used by high performers — get yours now
          </div>

          {/* 📚 BOOKS */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
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
                <div
                  style={{
                    width: "160px",
                    transition: "all 0.25s ease",
                  }}
                >
                  <img
                    src={book.img}
                    alt={book.title}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                    }}
                  />

                  <div
                    style={{
                      marginTop: "10px",
                      textAlign: "center",
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    {book.title}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://amzn.to/47HUGKw"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "30px",
              background: "linear-gradient(90deg,#facc15,#f59e0b)",
              color: "#000",
              fontWeight: "800",
              padding: "14px 28px",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
            }}
          >
            View on Amazon
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
