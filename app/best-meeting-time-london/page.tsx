/**
 * File: app/best-meeting-time-london/page.tsx
 * Version: v1.0 (CITY TEMPLATE)
 * Date: 2026-04-04
 *
 * Purpose:
 * - New city page using locked NY/LA/Chicago template
 * - Maintain identical layout, gating behavior, and scroll behavior
 * - Safe SEO expansion page (no shared logic changes)
 *
 * Rollback:
 * - Delete this file if needed (no shared impact)
 */

"use client";

import ToolPreviewSection from "@/app/ui/ToolPreviewSection";
import PremiumFeaturesSection from "@/app/ui/PremiumFeaturesSection";

export default function LondonMeetingPage() {
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
          Best Meeting Time from London
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
          Find the best meeting times between London and other global cities. Instantly see overlapping working hours and schedule meetings efficiently across time zones.
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
                minHeight: "calc(100vh - 260px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <ToolPreviewSection defaultCityLeft="London, UK" />
            </div>

            <div id="premium-features" style={{ marginTop: "40px" }}>
              <PremiumFeaturesSection />
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
              { title: "London ↔ New York", desc: "5-hour difference" },
              { title: "London ↔ Chicago", desc: "6-hour difference" },
              { title: "London ↔ Tokyo", desc: "9-hour difference" },
              { title: "London ↔ Sydney", desc: "10–11 hour difference" },
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
