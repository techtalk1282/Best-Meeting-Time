/**
 * File: app/ui/LayoutShell.tsx
 * Version: v2.4
 * Date: 2026-04-07
 *
 * PURPOSE:
 * - Layout wrapper for all homepage sections
 * - Preserve AdSense slot
 * - Upgrade Amazon fallback monetization block to cleaner visual cards
 *
 * WHAT WAS CHANGED:
 * - Removed duplicated/nested Amazon fallback markup
 * - Replaced old fallback links with one clean visual card block
 * - Preserved AdSense render logic and overall section structure
 * - Preserved footer legal links and Amazon disclosure
 *
 * ROLLBACK:
 * - Revert to v2.3
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

        {/* 🔥 AMAZON FALLBACK — v2.4 */}
        <div
          style={{
            marginTop: "20px",
            background: "rgba(255,255,255,0.08)",
            padding: "20px",
            borderRadius: "16px",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          <div
            style={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            Improve your time & productivity while you wait
          </div>

          <div
            style={{
              color: "#bbb",
              fontSize: "13px",
              marginBottom: "18px",
            }}
          >
            Trusted by millions of professionals worldwide
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://amzn.to/47HUGKw"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", width: "180px" }}
            >
              <div
                style={{
                  background: "rgba(0,0,0,0.5)",
                  borderRadius: "12px",
                  padding: "15px",
                  color: "#fff",
                }}
              >
                <div style={{ fontWeight: "600", marginBottom: "6px" }}>
                  Atomic Habits
                </div>
                <div style={{ fontSize: "12px", color: "#bbb" }}>
                  4.8 rating • Build better systems
                </div>
              </div>
            </a>

            <a
              href="https://amzn.to/4siUb0Q"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", width: "180px" }}
            >
              <div
                style={{
                  background: "rgba(0,0,0,0.5)",
                  borderRadius: "12px",
                  padding: "15px",
                  color: "#fff",
                }}
              >
                <div style={{ fontWeight: "600", marginBottom: "6px" }}>
                  7 Habits
                </div>
                <div style={{ fontSize: "12px", color: "#bbb" }}>
                  4.8 rating • Proven success principles
                </div>
              </div>
            </a>

            <a
              href="https://amzn.to/4duax2V"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", width: "180px" }}
            >
              <div
                style={{
                  background: "rgba(0,0,0,0.5)",
                  borderRadius: "12px",
                  padding: "15px",
                  color: "#fff",
                }}
              >
                <div style={{ fontWeight: "600", marginBottom: "6px" }}>
                  Getting Things Done
                </div>
                <div style={{ fontSize: "12px", color: "#bbb" }}>
                  4.5 rating • Master your workflow
                </div>
              </div>
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
