/**
 * File: app/best-meeting-time-new-york/page.tsx
 * Version: v1.2
 * Date: 2026-04-02
 * Purpose: New York SEO landing page (card layout upgrade)
 *
 * Changes:
 * - Removed long scrolling text
 * - Added horizontal card layout (fixes cutoff + improves UX)
 * - Keeps ToolPreviewSection untouched
 *
 * Rollback:
 * - Revert to v1.1 if needed
 */

"use client";

import ToolPreviewSection from "@/app/ui/ToolPreviewSection";

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
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 20px 80px 20px",
          color: "white",
          flex: 1,
        }}
      >
        {/* BACK */}
        <div style={{ marginBottom: "30px" }}>
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
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "12px",
          }}
        >
          Best Meeting Time from New York
        </h1>

        {/* DESCRIPTION */}
        <p
          style={{
            marginBottom: "30px",
            color: "#ddd6fe",
            fontSize: "18px",
            maxWidth: "700px",
          }}
        >
          Find the best meeting times between New York and other global cities.
          Instantly see overlapping working hours and schedule meetings efficiently.
        </p>

        {/* TOOL */}
        <div style={{ marginBottom: "40px" }}>
          <ToolPreviewSection defaultCityLeft="New York, USA" />
        </div>

        {/* ✅ NEW CARD SECTION */}
        <div>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
            Popular Meeting Time Comparisons
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                title: "New York ↔ London",
                desc: "5-hour difference",
              },
              {
                title: "New York ↔ Los Angeles",
                desc: "3-hour difference",
              },
              {
                title: "New York ↔ Tokyo",
                desc: "13–14 hour difference",
              },
              {
                title: "New York ↔ Sydney",
                desc: "14–16 hour difference",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "18px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.05))",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                }}
              >
                <div style={{ fontWeight: 700, marginBottom: "6px" }}>
                  {item.title}
                </div>
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
