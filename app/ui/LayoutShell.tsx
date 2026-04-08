/**
 * File: app/ui/LayoutShell.tsx
 * Version: v2.6
 * Date: 2026-04-07
 *
 * PURPOSE:
 * - Layout wrapper for homepage
 * - Clean monetization block with strong CTA + better visuals
 *
 * WHAT WAS CHANGED:
 * - Added strong CTA (top + bottom)
 * - Unified card sizes
 * - Introduced gold + brand color accents
 * - Improved visual hierarchy for conversion
 *
 * ROLLBACK:
 * - Revert to v2.5
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
      {/* HERO */}
      <section id="hero">{hero}</section>

      {/* TOOL */}
      <section id="tool-preview">{toolPreview}</section>

      {/* PREMIUM */}
      <section>{premiumFeatures}</section>

      {/* MONETIZATION */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 0 40px 0",
        }}
      >
        <div style={{ height: "6px" }} />

        {/* 🔥 AMAZON FALLBACK — v2.6 FINAL */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "1000px",
            width: "100%",
            padding: "0 20px",
          }}
        >
          {/* TOP CTA */}
          <div
            style={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "6px",
            }}
          >
            Level up your productivity today
          </div>

          <div
            style={{
              color: "#facc15",
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Top books used by high performers — get yours now
          </div>

          {/* CARDS */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                title: "Atomic Habits",
                desc: "Build better systems",
                link: "https://amzn.to/47HUGKw",
                gradient: "linear-gradient(145deg,#facc15,#eab308)",
              },
              {
                title: "7 Habits",
                desc: "Proven success principles",
                link: "https://amzn.to/4siUb0Q",
                gradient: "linear-gradient(145deg,#6366f1,#4f46e5)",
              },
              {
                title: "Getting Things Done",
                desc: "Master your workflow",
                link: "https://amzn.to/4duax2V",
                gradient: "linear-gradient(145deg,#f59e0b,#d97706)",
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
                    width: "180px",
                    height: "250px",
                    background: "#ffffff",
                    borderRadius: "14px",
                    padding: "14px",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  {/* TOP VISUAL */}
                  <div
                    style={{
                      height: "140px",
                      borderRadius: "10px",
                      background: book.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#111",
                      fontWeight: "800",
                      fontSize: "16px",
                      padding: "10px",
                    }}
                  >
                    {book.title}
                  </div>

                  {/* TEXT */}
                  <div>
                    <div
                      style={{
                        color: "#111",
                        fontWeight: "700",
                        fontSize: "14px",
                        marginBottom: "4px",
                      }}
                    >
                      {book.title}
                    </div>

                    <div
                      style={{
                        color: "#6b7280",
                        fontSize: "12px",
                        marginBottom: "6px",
                      }}
                    >
                      {book.desc}
                    </div>

                    <div
                      style={{
                        color: "#f59e0b",
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      Shop now →
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div
            style={{
              marginTop: "18px",
              color: "#fff",
              fontSize: "13px",
            }}
          >
            Tap any book to view details and availability
          </div>
        </div>
      </section>

      {/* BONUS */}
      <section id="bonus-features">{bonusFeatures}</section>

      {/* FOOTER */}
      <footer id="footer">
        {footer}

        <div
          style={{
            marginTop: "10px",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          <a
            href="/privacy-policy"
            style={{ marginRight: "15px", color: "#ddd6fe" }}
          >
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
