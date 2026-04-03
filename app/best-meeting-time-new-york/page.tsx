/**
 * File: app/best-meeting-time-new-york/page.tsx
 * Version: v2.1
 * Date: 2026-04-03
 *
 * Purpose:
 * - Fix New York city page first-load viewport without touching shared logic
 * - Keep main page and ToolPreviewSection untouched
 * - Keep PremiumFeaturesSection available for gating scroll
 *
 * Rollback:
 * - Revert to v2.0 if needed
 */

"use client";

import ToolPreviewSection from "@/app/ui/ToolPreviewSection";
import PremiumFeaturesSection from "@/app/ui/PremiumFeaturesSection";

export default function NewYorkMeetingPage() {
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
          padding: "30px 20px 140px 20px",
          color: "white",
          flex: 1,
        }}
      >
        {/* BACK */}
        <div style={{ marginBottom: "16px" }}>
          <a
            href="/"
            style={{
              color: "#ffffff",
              fontSize: "16px",
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
            marginBottom: "6px",
            lineHeight: 1.2,
          }}
        >
          Best Meeting Time from New York
        </h1>

        {/* DESCRIPTION */}
        <p
          style={{
            marginBottom: "20px",
            color: "#ddd6fe",
            fontSize: "15px",
            lineHeight: 1.5,
            maxWidth: "900px",
          }}
        >
          Find the best meeting times between New York and other global cities. Instantly see overlapping working hours and schedule meetings efficiently.
        </p>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "70px",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div>
            {/* CITY-ONLY VIEWPORT TUNING */}
            <div
              style={{
                transform: "scale(0.92)",
                transformOrigin: "top left",
                width: "108.7%",
                marginBottom: "-90px",
              }}
            >
              <ToolPreviewSection defaultCityLeft="New York, USA" />
            </div>

            {/* REQUIRED FOR GATING SCROLL */}
            <div id="premium-features" style={{ marginTop: "300px" }}>
              <PremiumFeaturesSection />
            </div>

            <div style={{ height: "10px" }} />
          </div>

          {/* RIGHT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "30px",
            }}
          >
            <h2 style={{ fontSize: "18px", marginBottom: "6px" }}>
              Popular Comparisons
            </h2>

            {[
              { title: "New York ↔ London", desc: "5-hour difference" },
              { title: "New York ↔ Los Angeles", desc: "3-hour difference" },
              { title: "New York ↔ Tokyo", desc: "13–14 hour difference" },
              { title: "New York ↔ Sydney", desc: "14–16 hour difference" },
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
