/**
 * File: app/best-meeting-time-new-york/page.tsx
 * Version: v1.1
 * Date: 2026-04-02
 * Purpose: New York SEO landing page
 * Notes:
 * - Improves Back to Home visibility
 * - Adds stronger spacing and page structure
 * - Keeps ToolPreviewSection untouched
 * - Intended to reduce the visual cutoff feeling on the SEO page
 * Rollback:
 * - Revert this file to the prior committed version if needed
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
        width: "100%",
      }}
    >
      <main
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 20px 120px 20px",
          color: "white",
          flex: 1,
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          <a
            href="/"
            style={{
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            ← Back to Home
          </a>
        </div>

        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "12px",
            lineHeight: "1.1",
          }}
        >
          Best Meeting Time from New York
        </h1>

        <p
          style={{
            marginBottom: "30px",
            color: "#ddd6fe",
            fontSize: "18px",
            lineHeight: "1.6",
            maxWidth: "760px",
          }}
        >
          Find the best meeting times between New York and other global cities.
          Instantly see overlapping working hours and schedule meetings
          efficiently across time zones.
        </p>

        <div style={{ marginTop: "30px", marginBottom: "40px" }}>
          <ToolPreviewSection defaultCityLeft="New York, USA" />
        </div>

        <div
          style={{
            marginTop: "20px",
            color: "#ddd6fe",
            lineHeight: "1.7",
            maxWidth: "800px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "12px",
              color: "white",
            }}
          >
            Scheduling Meetings from New York
          </h2>

          <p>
            New York operates in the Eastern Time Zone (ET). When scheduling
            meetings with international teams, it’s important to find
            overlapping working hours.
          </p>

          <p style={{ marginTop: "12px" }}>For example:</p>

          <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
            <li>New York to London: Typically 5-hour difference</li>
            <li>New York to Los Angeles: 3-hour difference</li>
            <li>New York to Tokyo: 13–14 hour difference</li>
          </ul>

          <p style={{ marginTop: "12px" }}>
            Use the tool above to instantly find the best meeting window based
            on your selected cities.
          </p>
        </div>
      </main>
    </div>
  );
}
