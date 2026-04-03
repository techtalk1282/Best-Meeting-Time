/**
 * File: app/best-meeting-time-new-york/page.tsx
 * Version: v1.4
 * Date: 2026-04-02
 *
 * Purpose:
 * - Fix crowding
 * - Add breathing room between columns
 * - Push cards further right
 * - Ensure buttons align in one row cleanly
 *
 * Changes:
 * - Increased grid gap
 * - Adjusted column widths
 * - Added spacing below tool
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
          maxWidth: "1300px", // ⬅️ more breathing room
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
            marginBottom: "12px",
          }}
        >
          Best Meeting Time from New York
        </h1>

        {/* DESCRIPTION */}
        <p
          style={{
            marginBottom: "50px",
            color: "#ddd6fe",
            fontSize: "18px",
            maxWidth: "700px",
          }}
        >
          Find the best meeting times between New York and other global cities.
          Instantly see overlapping working hours and schedule meetings efficiently.
        </p>

        {/* ✅ 2 COLUMN LAYOUT */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2.2fr 1fr", // ⬅️ pushes cards right
            gap: "80px", // ⬅️ BIG spacing improvement
            alignItems: "start",
          }}
        >
          {/* LEFT — TOOL */}
          <div style={{ paddingBottom: "40px" }}>
            <ToolPreviewSection defaultCityLeft="New York, USA" />
          </div>

          {/* RIGHT — CARDS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              marginTop: "40px", // ⬅️ lowers cards slightly
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
