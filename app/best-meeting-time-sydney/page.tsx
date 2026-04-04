/**
 * File: app/best-meeting-time-sydney/page.tsx
 * Version: v1.0
 */

"use client";

import ToolPreviewSection from "@/app/ui/ToolPreviewSection";
import PremiumFeaturesSection from "@/app/ui/PremiumFeaturesSection";

export default function SydneyMeetingPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main style={{ maxWidth: "1320px", margin: "0 auto", padding: "40px 20px", color: "white", flex: 1 }}>
        
        <div style={{ marginBottom: "24px" }}>
          <a href="/" style={{ color: "#ffffff", fontSize: "18px", fontWeight: 600, textDecoration: "none" }}>
            ← Back to Home
          </a>
        </div>

        <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "10px" }}>
          Best Meeting Time from Sydney
        </h1>

        <p style={{ marginBottom: "24px", color: "#ddd6fe" }}>
          Find the best meeting times between Sydney and other global cities. Instantly see overlapping working hours and schedule meetings efficiently.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "90px" }}>
          
          <div>
            <div style={{ minHeight: "calc(100vh - 260px)", display: "flex", flexDirection: "column" }}>
              <ToolPreviewSection defaultCityLeft="Sydney, Australia" />
            </div>

            <div id="premium-features" style={{ marginTop: "40px" }}>
              <PremiumFeaturesSection />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "30px" }}>
            <h2>Popular Comparisons</h2>

            {[
              { title: "Sydney ↔ New York", desc: "15–16 hour difference" },
              { title: "Sydney ↔ London", desc: "10–11 hour difference" },
              { title: "Sydney ↔ Tokyo", desc: "1–2 hour difference" },
              { title: "Sydney ↔ Los Angeles", desc: "17–18 hour difference" },
            ].map((item, i) => (
              <div key={i} style={{ padding: "14px", borderRadius: "12px", background: "rgba(255,255,255,0.08)" }}>
                <div style={{ fontWeight: 700 }}>{item.title}</div>
                <div style={{ fontSize: "13px", opacity: 0.8 }}>{item.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
