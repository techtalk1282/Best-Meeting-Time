/**
 * File: app/ui/LayoutShell.tsx
 * Version: v2.5
 * Date: 2026-04-07
 *
 * PURPOSE:
 * - Layout wrapper for all homepage sections
 * - Temporarily hide the empty ad gap until a real ad network is active
 * - Upgrade Amazon fallback monetization into cleaner, higher-contrast product-style cards
 *
 * WHAT WAS CHANGED:
 * - Removed the dull purple boxed Amazon fallback presentation
 * - Kept the ad slot area collapsed to a minimal spacer while AdSense is inactive
 * - Rebuilt the Amazon fallback as clean white product cards with stronger contrast
 * - Preserved overall homepage structure, footer legal links, and Amazon disclosure
 *
 * ROLLBACK:
 * - Revert to v2.4
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
  // Keep AdSense render logic available for future activation
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

      {/* MONETIZATION SLOT */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px 0 30px 0",
        }}
      >
        {/* TEMP: keep the ad area visually collapsed until a real ad is active */}
        <div style={{ height: "6px" }} />

        {/* AMAZON FALLBACK — v2.5 */}
        <div
          style={{
            marginTop: "24px",
            textAlign: "center",
            maxWidth: "980px",
            width: "100%",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 700,
              marginBottom: "6px",
            }}
          >
            Trusted by millions of professionals worldwide
          </div>

          <div
            style={{
              color: "#d1d5db",
              fontSize: "13px",
              marginBottom: "22px",
            }}
          >
            Popular books for building better time, focus, and productivity habits
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            {/* Atomic Habits */}
            <a
              href="https://amzn.to/47HUGKw"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  width: "170px",
                  minHeight: "210px",
                  background: "#ffffff",
                  borderRadius: "12px",
                  padding: "16px 14px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.28)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    height: "122px",
                    borderRadius: "8px",
                    background: "linear-gradient(145deg, #e5d3b3 0%, #d6b98c 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px",
                    color: "#5b4636",
                    fontWeight: 800,
                    fontSize: "22px",
                    lineHeight: 1.1,
                    letterSpacing: "0.2px",
                  }}
                >
                  Atomic
                  <br />
                  Habits
                </div>

                <div style={{ marginTop: "14px" }}>
                  <div
                    style={{
                      color: "#111827",
                      fontSize: "15px",
                      fontWeight: 700,
                      marginBottom: "6px",
                    }}
                  >
                    Atomic Habits
                  </div>
                  <div
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      lineHeight: 1.45,
                    }}
                  >
                    4.8 rating • Build better systems
                  </div>
                </div>
              </div>
            </a>

            {/* 7 Habits */}
            <a
              href="https://amzn.to/4siUb0Q"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  width: "170px",
                  minHeight: "210px",
                  background: "#ffffff",
                  borderRadius: "12px",
                  padding: "16px 14px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.28)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    height: "122px",
                    borderRadius: "8px",
                    background: "linear-gradient(145deg, #f3efe5 0%, #d6c39a 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    color: "#23395d",
                    fontWeight: 800,
                    fontSize: "19px",
                    lineHeight: 1.15,
                    letterSpacing: "0.2px",
                  }}
                >
                  The 7 Habits
                </div>

                <div style={{ marginTop: "14px" }}>
                  <div
                    style={{
                      color: "#111827",
                      fontSize: "15px",
                      fontWeight: 700,
                      marginBottom: "6px",
                    }}
                  >
                    7 Habits
                  </div>
                  <div
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      lineHeight: 1.45,
                    }}
                  >
                    4.8 rating • Proven success principles
                  </div>
                </div>
              </div>
            </a>

            {/* Getting Things Done */}
            <a
              href="https://amzn.to/4duax2V"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  width: "170px",
                  minHeight: "210px",
                  background: "#ffffff",
                  borderRadius: "12px",
                  padding: "16px 14px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.28)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    height: "122px",
                    borderRadius: "8px",
                    background: "linear-gradient(145deg, #f5f5f5 0%, #d7d7d7 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    color: "#3f3f46",
                    fontWeight: 800,
                    fontSize: "18px",
                    lineHeight: 1.15,
                    letterSpacing: "0.2px",
                  }}
                >
                  Getting Things Done
                </div>

                <div style={{ marginTop: "14px" }}>
                  <div
                    style={{
                      color: "#111827",
                      fontSize: "15px",
                      fontWeight: 700,
                      marginBottom: "6px",
                    }}
                  >
                    Getting Things Done
                  </div>
                  <div
                    style={{
                      color: "#6b7280",
                      fontSize: "12px",
                      lineHeight: 1.45,
                    }}
                  >
                    4.5 rating • Master your workflow
                  </div>
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
