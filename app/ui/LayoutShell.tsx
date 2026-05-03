/**
 * File: app/ui/LayoutShell.tsx
 * Version: v3.4 (GATE BOOK MONETIZATION SECTION)
 * Date: 2026-04-10
 *
 * PURPOSE:
 * - Hide the books monetization section until ad unlock is triggered
 * - Keep current layout, styling, and footer behavior intact
 * - Avoid showing books to unpaid users before they choose the ad flow
 *
 * ROLLBACK:
 * - Revert to v3.3
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
  <div
    style={{
      background: "#ffffff",
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
  }}
>
  <div
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
  );
}
