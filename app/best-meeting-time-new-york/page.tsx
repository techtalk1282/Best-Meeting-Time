/**
 * File: app/best-meeting-time-new-york/page.tsx
 * Version: v1.9
 * Date: 2026-04-03
 *
 * Purpose:
 * - Tighten New York city page layout so more of the page is visible at 100% zoom
 * - Keep PremiumFeaturesSection in place for gating scroll behavior
 * - Do not change shared gating logic or protected payment logic
 *
 * Rollback:
 * - Revert to v1.8 if needed
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
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "32px 20px 60px 20px",
          color: "white",
          flex: 1,
        }}
      >
        {/* BACK */}
        <div style={{ marginBottom: "20px" }}>
          <a
            href="/"
            style={{
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 700,
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
            lineHeight: 1.15,
          }}
        >
          Best Meeting Time from New York
        </h1>

        {/* DESCRIPTION */}
        <p
          style={{
            marginBottom: "28px",
            color: "#ddd6fe",
            fontSize: "16px",
            lineHeight: 1.5,
            maxWidth: "980px",
          }}
        >
          Find the best meeting times between New York and other global cities. Instantly see overlapping working hours and schedule meetings efficiently.
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
            <ToolPreviewSection defaultCityLeft="New York, USA" />

            {/* REQUIRED FOR GATING SCROLL */}
            <PremiumFeaturesSection />

            <div style={{ height: "20px" }} />
          </div>

          {/* RIGHT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              marginTop: "42px",
            }}
          >
            <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
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
                  padding: "16px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.05))",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                }}
              >
                <div style={{ fontWeight: 700 }}>{item.title}</div>
                <div style={{ fontSize: "14px", opacity: 0.8 }}>
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
