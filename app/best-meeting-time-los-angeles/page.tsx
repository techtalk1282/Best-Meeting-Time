/**
 * File: app/best-meeting-time-los-angeles/page.tsx
 * Version: v4.2 (REMOVE CALENDLY — GATING PREP)
 * Date: 2026-04-08
 *
 * Purpose:
 * - Remove ALWAYS-VISIBLE monetization block (Calendly)
 * - Prepare for gated unlock monetization system
 * - Keep Los Angeles as MASTER template
 *
 * Rollback:
 * - v4.1 if needed
 */

"use client";

import { useEffect } from "react";
import ToolPreviewSection from "@/app/ui/ToolPreviewSection";
import PremiumFeaturesSection from "@/app/ui/PremiumFeaturesSection";

export default function LosAngelesMeetingPage() {

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense push error:", e);
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 20px",
          color: "white",
          flex: 1,
        }}
      >
        {/* BACK */}
        <div style={{ marginBottom: "24px" }}>
          <a href="/" style={{ color: "#ffffff", fontSize: "18px", fontWeight: 600 }}>
            ← Back to Home
          </a>
        </div>

        {/* TITLE */}
        <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "10px" }}>
          Best Meeting Time from Los Angeles
        </h1>

        {/* DESCRIPTION */}
        <p style={{ marginBottom: "24px", color: "#ddd6fe" }}>
          Find the best meeting times between Los Angeles and other global cities. Instantly see overlapping working hours and schedule meetings efficiently.
        </p>

        {/* TOOL + CONTENT */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: "60px",
          }}
        >
          {/* TOOL */}
          <ToolPreviewSection defaultCityLeft="Los Angeles, USA" />

          {/* COMPARISON CARDS */}
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              gap: "14px",
              justifyContent: "space-between",
              flexWrap: "nowrap",
            }}
          >
            {[
              { title: "Los Angeles ↔ New York", desc: "3-hour difference" },
              { title: "Los Angeles ↔ London", desc: "8-hour difference" },
              { title: "Los Angeles ↔ Tokyo", desc: "16–17 hour difference" },
              { title: "Los Angeles ↔ Sydney", desc: "17–19 hour difference" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  padding: "14px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.05))",
                  border: "1px solid rgba(255,255,255,0.15)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: 700 }}>{item.title}</div>
                <div style={{ fontSize: "13px", opacity: 0.85 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PREMIUM */}
        <div id="premium-features" style={{ marginTop: "30px" }}>
          <PremiumFeaturesSection />
        </div>

        {/* 🚫 REMOVED: Monetization block (Calendly) */}
      </main>
    </div>
  );
}
