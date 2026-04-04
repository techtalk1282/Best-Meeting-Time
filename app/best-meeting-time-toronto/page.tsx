/**
 * File: app/best-meeting-time-toronto/page.tsx
 * Version: v1.0
 * Date: 2026-04-04
 *
 * Purpose:
 * - Toronto SEO expansion page
 * - Uses locked city template
 *
 * Rollback:
 * - Safe delete
 */

"use client";

import ToolPreviewSection from "@/app/ui/ToolPreviewSection";
import PremiumFeaturesSection from "@/app/ui/PremiumFeaturesSection";

export default function TorontoMeetingPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main style={{ maxWidth: "1320px", margin: "0 auto", padding: "40px 20px", color: "white", flex: 1 }}>

        <div style={{ marginBottom: "24px" }}>
          <a href="/" style={{ color: "#fff", fontSize: "18px", fontWeight: 600 }}>← Back to Home</a>
        </div>

        <h1>Best Meeting Time from Toronto</h1>

        <p style={{ color: "#ddd6fe", marginBottom: "24px" }}>
          Find the best meeting times between Toronto and other global cities.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "90px" }}>

          <div>
            <div style={{ minHeight: "calc(100vh - 260px)" }}>
              <ToolPreviewSection defaultCityLeft="Toronto, Canada" />
            </div>

            <div id="premium-features" style={{ marginTop: "40px" }}>
              <PremiumFeaturesSection />
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <h2>Popular Comparisons</h2>

            {[
              { title: "Toronto ↔ New York", desc: "Same time zone" },
              { title: "Toronto ↔ London", desc: "5-hour difference" },
              { title: "Toronto ↔ Tokyo", desc: "13–14 hour difference" },
              { title: "Toronto ↔ Sydney", desc: "15–16 hour difference" },
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
