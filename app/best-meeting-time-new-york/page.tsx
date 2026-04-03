/**
 * File: app/best-meeting-time-new-york/page.tsx
 * Version: v1.5
 * Date: 2026-04-02
 *
 * Purpose:
 * - Push comparison cards further right
 * - Convert description to single-line horizontal layout
 * - Improve breathing room without touching ToolPreviewSection
 *
 * Changes:
 * - Increased grid spacing significantly
 * - Adjusted column ratio
 * - Forced description into one line
 *
 * Rollback:
 * - Revert to v1.4 if needed
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
          maxWidth: "1400px", // ⬅️ more width
          margin: "0 auto",
          padding: "60px 20px 100px 20px",
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
            marginBottom: "10px",
          }}
        >
          Best Meeting Time from New York
        </h1>

        {/* ✅ SINGLE LINE DESCRIPTION */}
        <p
          style={{
            marginBottom: "50px",
            color: "#ddd6fe",
            fontSize: "16px", // slightly smaller
            whiteSpace: "nowrap", // ⬅️ force one line
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Find the best meeting times between New York and other global cities. Instantly see overlapping working hours and schedule meetings efficiently.
        </p>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "120px", // ⬅️ BIG separation
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div style={{ paddingBottom: "40px" }}>
            <ToolPreviewSection defaultCityLeft="New York, USA" />
          </div>

          {/* RIGHT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              marginTop: "60px", // ⬅️ pushes cards down + right feel
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
