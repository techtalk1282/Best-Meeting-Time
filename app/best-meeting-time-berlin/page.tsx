/**
 * File: app/best-meeting-time-berlin/page.tsx
 * Version: v1.0
 * Date: 2026-04-04
 *
 * Purpose:
 * - Berlin SEO expansion page
 * - Uses locked NY/LA template (no shared logic changes)
 *
 * Rollback:
 * - Safe delete (no shared impact)
 */

"use client";

import ToolPreviewSection from "@/app/ui/ToolPreviewSection";
import PremiumFeaturesSection from "@/app/ui/PremiumFeaturesSection";

export default function BerlinMeetingPage() {
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
          }}
        >
          Best Meeting Time from Berlin
        </h1>

        {/* DESCRIPTION */}
        <p
          style={{
            marginBottom: "24px",
            color: "#ddd6fe",
          }}
        >
          Find the best meeting times between Berlin and other global cities. Instantly see overlapping working hours and schedule meetings efficiently across time zones.
        </p>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "90px",
          }}
        >
          {/* LEFT */}
          <div>
            <div style={{ minHeight: "calc(100vh - 260px)" }}>
              <ToolPreviewSection defaultCityLeft="Berlin, Germany" />
            </div>

            <div id="premium-features" style={{ marginTop: "40px" }}>
              <PremiumFeaturesSection />
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ marginTop: "30px" }}>
            <h2>Popular Comparisons</h2>

            {[
              { title: "Berlin ↔ New York", desc: "6-hour difference" },
              { title: "Berlin ↔ London", desc: "1-hour difference" },
              { title: "Berlin ↔ Tokyo", desc: "8-hour difference" },
              { title: "Berlin ↔ Sydney", desc: "9–10 hour difference" },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: "12px" }}>
                <strong>{item.title}</strong>
                <div>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
