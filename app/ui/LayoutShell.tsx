/**
 * File: app/ui/LayoutShell.tsx
 * Version: v3.5 (MOBILE OVERFLOW CONTAINMENT)
 * Date: 2026-05-11
 *
 * PURPOSE:
 * - Add safe mobile/tablet overflow containment at the shared shell level
 * - Prevent child sections from forcing horizontal page overflow
 * - Preserve current layout, styling, footer behavior, and ad-gated book section
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No planner logic changes
 *
 * ROLLBACK:
 * - Revert to v3.4 if layout regresses
 */

"use client";

import { ReactNode, useEffect, useState } from "react";

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
  const [showAdContent, setShowAdContent] = useState(false);

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense push error:", e);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const unlocked = localStorage.getItem("ad_unlocked") === "true";
    setShowAdContent(unlocked);
  }, []);

  const books = [
    { label: "Atomic Habits", link: "https://amzn.to/47HUGKw" },
    { label: "The 7 Habits", link: "https://amzn.to/4siUb0Q" },
    { label: "Getting Things Done", link: "https://amzn.to/4duax2V" },
  ];

  return (
    <>
      <style>{`
        @media (max-width: 1100px) {
          html,
          body {
            max-width: 100%;
            overflow-x: hidden;
          }

          .bmt-layout-shell,
          .bmt-layout-shell section,
          .bmt-layout-shell footer {
            max-width: 100%;
            overflow-x: hidden;
            box-sizing: border-box;
          }

          .bmt-layout-inner {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .bmt-ad-book-actions {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 10px !important;
            justify-items: center !important;
          }
        }
      `}</style>

      <div
        className="bmt-layout-shell"
        style={{
          background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
        }}
      >
        <section id="hero">{hero}</section>

        <section id="tool-preview">{toolPreview}</section>

        <section
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "0 16px",
            boxSizing: "border-box",
          }}
        >
          <div
            className="bmt-layout-inner"
            style={{
              width: "100%",
              maxWidth: "1100px",
            }}
          >
            {premiumFeatures}
          </div>
        </section>

        {showAdContent && (
          <section
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "56px 20px 72px",
              textAlign: "center",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                color: "#fff",
                fontSize: "26px",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "12px",
              }}
            >
              Level up your productivity today
            </div>

            <div
              style={{
                color: "#c4b5fd",
                fontSize: "15px",
                lineHeight: 1.4,
                marginBottom: "28px",
              }}
            >
              Top books used by high performers — get yours now
            </div>

            <div
              style={{
                width: "100%",
                maxWidth: "760px",
                marginBottom: "28px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src="/books-display.png"
                alt="Top productivity books"
                style={{
                  width: "100%",
                  maxWidth: "760px",
                  height: "auto",
                  display: "block",
                  borderRadius: "16px",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
                  objectFit: "contain",
                  imageRendering: "auto",
                }}
              />
            </div>

            <div
              className="bmt-ad-book-actions"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                maxWidth: "760px",
                marginTop: "10px",
              }}
            >
              {books.map((book) => (
                <a
                  key={book.label}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "linear-gradient(90deg, #facc15, #f59e0b)",
                    color: "#111827",
                    padding: "12px 18px",
                    borderRadius: "999px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: 1,
                    boxShadow: "0 10px 24px rgba(0,0,0,0.32)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {book.label}
                </a>
              ))}
            </div>
          </section>
        )}

        <section id="bonus-features">{bonusFeatures}</section>

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

            <a
              href="/terms-of-service"
              style={{ marginRight: "15px", color: "#ddd6fe" }}
            >
              Terms of Service
            </a>

            <a href="/contact" style={{ color: "#ddd6fe" }}>
              Contact
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
    </>
  );
}
