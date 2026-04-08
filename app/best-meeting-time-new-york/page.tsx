/**
 * File: app/best-meeting-time-new-york/page.tsx
 * Version: v3.1 (CONTENT UPGRADE — ADSENSE FIX)
 * Date: 2026-04-08
 *
 * Purpose:
 * - Add high-value SEO content to fix AdSense “low value content”
 * - Improve indexing + ranking signals
 * - Keep layout + tool behavior unchanged
 *
 * Rollback:
 * - Revert to v3.0 if needed
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
          Best Meeting Time from New York
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
            {/* TOOL */}
            <div
              style={{
                minHeight: "calc(100vh - 260px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <ToolPreviewSection defaultCityLeft="New York, USA" />
            </div>

            {/* ✅ NEW: HIGH VALUE CONTENT BLOCK */}
            <div
              style={{
                marginTop: "50px",
                maxWidth: "900px",
                color: "#ddd6fe",
                lineHeight: 1.7,
              }}
            >
              <h2 style={{ fontSize: "22px", marginBottom: "12px", color: "#ffffff" }}>
                Best Meeting Times Between New York and Global Cities
              </h2>

              <p style={{ marginBottom: "16px" }}>
                Scheduling meetings across time zones can be challenging. New York operates on Eastern Time (ET), which overlaps differently with cities across Europe, Asia, and Australia.
              </p>

              <p style={{ marginBottom: "24px" }}>
                This tool helps you quickly identify the best overlapping hours so you can schedule meetings efficiently without confusion or missed opportunities.
              </p>

              <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#ffffff" }}>
                Popular Time Differences from New York
              </h3>

              <ul style={{ marginBottom: "24px", paddingLeft: "18px" }}>
                <li>London → 5 hours ahead</li>
                <li>Los Angeles → 3 hours behind</li>
                <li>Tokyo → 13–14 hours ahead</li>
                <li>Sydney → 14–16 hours ahead</li>
              </ul>

              <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#ffffff" }}>
                When Should You Schedule?
              </h3>

              <p style={{ marginBottom: "10px" }}>
                The best meeting windows typically fall between:
              </p>

              <ul style={{ paddingLeft: "18px" }}>
                <li>8 AM – 12 PM New York (best for Europe overlap)</li>
                <li>4 PM – 7 PM New York (best for Asia overlap)</li>
              </ul>

              <p style={{ marginTop: "20px" }}>
                Use the tool above to instantly find the most convenient time for everyone involved.
              </p>
            </div>

            {/* PREMIUM */}
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
