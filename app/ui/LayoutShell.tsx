/**
 * File: app/ui/LayoutShell.tsx
 * Version: v2.3
 * Date: 2026-04-07
 *
 * PURPOSE:
 * - Layout wrapper for all sections
 * - Includes AdSense slot + Amazon fallback monetization
 *
 * WHAT WAS CHANGED:
 * - Removed invalid inline text that broke JSX compilation
 * - Cleaned JSX structure
 * - Preserved AdSense + Amazon fallback block
 *
 * ROLLBACK:
 * - Revert to v2.2
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
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 0",
        }}
      >
        {/* Label */}
        <div
          style={{
            textAlign: "center",
            color: "#ddd6fe",
            fontSize: "12px",
            opacity: 0.6,
            marginBottom: "10px",
          }}
        >
          Advertisement
        </div>

        {/* AdSense */}
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            width: "100%",
            maxWidth: 728,
            height: 90,
          }}
          data-ad-client="ca-pub-9246885832557966"
          data-ad-slot="5883090133"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />

        {/* 🔥 AMAZON FALLBACK */}
        <div
          style={{
            marginTop: "20px",
            background: "rgba(255,255,255,0.08)",
            padding: "16px",
            borderRadius: "12px",
            textAlign: "center",
            maxWidth: "700px",
          }}
        >
          <div
            style={{
              color: "#ddd6fe",
              fontSize: "13px",
              marginBottom: "12px",
            }}
          >
           <div
  style={{
    color: "#ddd6fe",
    fontSize: "14px",
    marginBottom: "10px",
    fontWeight: "600",
  }}
>
  Struggling to find the best time to meet?
</div>

<div
  style={{
    color: "#bbb",
    fontSize: "13px",
    marginBottom: "15px",
  }}
>
  These books help professionals manage time, schedules, and productivity better
</div>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  }}
>
  <a
    href="https://amzn.to/47HUGKw"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      background: "rgba(0,0,0,0.4)",
      padding: "10px 14px",
      borderRadius: "8px",
      textDecoration: "none",
      color: "#fff",
      fontSize: "13px",
      fontWeight: "500",
    }}
  >
    Atomic Habits →
  </a>

  <a
    href="https://amzn.to/4siUb0Q"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      background: "rgba(0,0,0,0.4)",
      padding: "10px 14px",
      borderRadius: "8px",
      textDecoration: "none",
      color: "#fff",
      fontSize: "13px",
      fontWeight: "500",
    }}
  >
    7 Habits →
  </a>

  <a
    href="https://amzn.to/4duax2V"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      background: "rgba(0,0,0,0.4)",
      padding: "10px 14px",
      borderRadius: "8px",
      textDecoration: "none",
      color: "#fff",
      fontSize: "13px",
      fontWeight: "500",
    }}
  >
    Getting Things Done →
  </a>
</div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://amzn.to/47HUGKw"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "none", fontSize: "13px" }}
            >
              Atomic Habits
            </a>

            <a
              href="https://amzn.to/4siUb0Q"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "none", fontSize: "13px" }}
            >
              7 Habits
            </a>

            <a
              href="https://amzn.to/4duax2V"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "none", fontSize: "13px" }}
            >
              Getting Things Done
            </a>
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

        {/* Amazon disclosure */}
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
