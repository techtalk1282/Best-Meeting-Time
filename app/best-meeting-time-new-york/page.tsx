/**
 * File: app/best-meeting-time-new-york/page.tsx
 * Version: v3.2 (LA TEMPLATE ALIGNMENT + CONTENT)
 * Date: 2026-04-08
 *
 * Purpose:
 * - Match Los Angeles layout EXACTLY
 * - Keep SEO content for AdSense approval
 * - Remove right column (non-standard)
 *
 * Rollback:
 * - v3.1 if needed
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
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 20px 40px 20px",
          color: "white",
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
          }}
        >
          Find the best meeting times between New York and other global cities. Instantly see overlapping working hours and schedule meetings efficiently.
        </p>

        {/* TOOL */}
        <ToolPreviewSection defaultCityLeft="New York, USA" />

        {/* ✅ MATCH LA: COMPARISON CARDS UNDER TOOL */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginTop: "24px",
          }}
        >
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
                textAlign: "center",
              }}
            >
              <div style={{ fontWeight: 700 }}>{item.title}</div>
              <div style={{ fontSize: "13px", opacity: 0.8 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ SEO CONTENT (KEEP THIS) */}
        <div
          style={{
            marginTop: "50px",
            maxWidth: "900px",
            color: "#ddd6fe",
            lineHeight: 1.7,
          }}
        >
          <h2 style={{ color: "#fff" }}>
            Best Meeting Times Between New York and Global Cities
          </h2>

          <p>
            Scheduling meetings across time zones can be challenging. New York operates on Eastern Time (ET), which overlaps differently with cities across Europe, Asia, and Australia.
          </p>

          <p>
            This tool helps you quickly identify the best overlapping hours so you can schedule meetings efficiently without confusion.
          </p>

          <h3 style={{ color: "#fff" }}>Popular Time Differences</h3>

          <ul>
            <li>London → 5 hours ahead</li>
            <li>Los Angeles → 3 hours behind</li>
            <li>Tokyo → 13–14 hours ahead</li>
            <li>Sydney → 14–16 hours ahead</li>
          </ul>

          <h3 style={{ color: "#fff" }}>When Should You Schedule?</h3>

          <ul>
            <li>8 AM – 12 PM New York (Europe overlap)</li>
            <li>4 PM – 7 PM New York (Asia overlap)</li>
          </ul>
        </div>

        {/* PREMIUM */}
        <div id="premium-features" style={{ marginTop: "40px" }}>
          <PremiumFeaturesSection />
        </div>
      </main>
    </div>
  );
}
