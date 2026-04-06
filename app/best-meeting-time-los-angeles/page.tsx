/**
 * File: app/best-meeting-time-los-angeles/page.tsx
 * Version: v2.1 (ADD ADSENSE SLOT)
 * Date: 2026-04-06
 *
 * Purpose:
 * - Add AdSense slot below premium section (match homepage strategy)
 *
 * Rollback:
 * - Revert to v2.0
 */

"use client";

import { useEffect } from "react";
import ToolPreviewSection from "@/app/ui/ToolPreviewSection";
import PremiumFeaturesSection from "@/app/ui/PremiumFeaturesSection";

export default function LosAngelesMeetingPage() {

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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <main
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "40px 20px 40px 20px",
          color: "white",
          flex: 1,
        }}
      >
        {/* BACK */}
        <div style={{ marginBottom: "24px" }}>
          <a
            href="/"
            style={{
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            ← Back to Home
          </a>
        </div>

        {/* TITLE */}
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "10px",
            lineHeight: 1.2,
          }}
        >
          Best Meeting Time from Los Angeles
        </h1>

        {/* DESCRIPTION */}
        <p
          style={{
            marginBottom: "24px",
            color: "#ddd6fe",
            fontSize: "15px",
            lineHeight: 1.5,
            maxWidth: "1100px",
          }}
        >
          Find the best meeting times between Los Angeles and other global cities. Instantly see overlapping working hours and schedule meetings efficiently.
        </p>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "90px",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div>
            <div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  }}
>
              <ToolPreviewSection defaultCityLeft="Los Angeles, USA" />
            </div>

            {/* PREMIUM */}
            <div id="premium-features" style={{ marginTop: "40px" }}>
              <PremiumFeaturesSection />
            </div>

            {/* 🟡 AD SLOT (NEW) */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "30px 0",
              }}
            >
              <ins
                className="adsbygoogle"
                style={{ display: "block", width: "100%", maxWidth: 728, height: 90 }}
                data-ad-client="ca-pub-9246885832557966"
                data-ad-slot="5883090133"
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <h2 style={{ fontSize: "18px", marginBottom: "6px" }}>
              Popular Comparisons
            </h2>

            {[
              { title: "Los Angeles ↔ New York", desc: "3-hour difference" },
              { title: "Los Angeles ↔ London", desc: "8-hour difference" },
              { title: "Los Angeles ↔ Tokyo", desc: "16–17 hour difference" },
              { title: "Los Angeles ↔ Sydney", desc: "17–19 hour difference" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "14px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.05))",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
                }}
              >
                <div style={{ fontWeight: 700 }}>{item.title}</div>
                <div style={{ fontSize: "13px", opacity: 0.8 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
