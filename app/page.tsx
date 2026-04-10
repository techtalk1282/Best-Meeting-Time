/**
 * File: app/page.tsx
 * Version: v2.6 (SEO BLOCK — SPLIT LAYOUT + VIEWPORT FIX)
 * Date: 2026-04-09
 *
 * PURPOSE:
 * - Fix cutoff at 100% zoom
 * - Improve readability and contrast
 * - Add visual polish and hierarchy
 *
 * SAFE:
 * - No logic touched
 */

import dynamic from "next/dynamic";

import LayoutShell from "./ui/LayoutShell";
import HeroSection from "./ui/HeroSection";
import PremiumFeaturesSection from "./ui/PremiumFeaturesSection";
import FooterSection from "./ui/FooterSection";

const VerifyPremium = dynamic(() => import("./ui/VerifyPremium"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <VerifyPremium />

      <LayoutShell
        hero={<HeroSection />}
        toolPreview={null}
        premiumFeatures={<PremiumFeaturesSection />}
        bonusFeatures={
          <div style={{ marginTop: "80px", padding: "0 20px" }}>

            {/* INTERNAL LINKS */}
            <div style={{ textAlign: "center", marginBottom: "40px", color: "white" }}>
              <h2 style={{ fontSize: "26px", marginBottom: "12px" }}>
                Popular Meeting Time Cities
              </h2>

              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
                <a href="/best-meeting-time-new-york">New York</a>
                <a href="/best-meeting-time-london">London</a>
                <a href="/best-meeting-time-tokyo">Tokyo</a>
                <a href="/best-meeting-time-sydney">Sydney</a>
                <a href="/best-meeting-time-dubai">Dubai</a>
                <a href="/best-meeting-time-berlin">Berlin</a>
                <a href="/best-meeting-time-paris">Paris</a>
                <a href="/best-meeting-time-mumbai">Mumbai</a>
                <a href="/best-meeting-time-toronto">Toronto</a>
              </div>
            </div>

            {/* ============================= */}
            {/* BLOCK 1 — MAIN */}
            {/* ============================= */}

            <div
              style={{
                maxWidth: "1100px",
                margin: "0 auto 30px auto",
                background: "#ede9fe",
                borderRadius: "20px",
                padding: "40px",
                boxShadow: "0 10px 35px rgba(0,0,0,0.25)",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <h2 style={{ fontSize: "30px", color: "#1e1b4b", marginBottom: "8px" }}>
                  Find the Best Meeting Time — Instantly
                </h2>

                <p style={{ color: "#312e81", fontSize: "16px" }}>
                  Compare cities, visualize overlap, and schedule smarter in seconds.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

                {/* Example */}
                <div style={card}>
                  <h3 style={title}>New York ↔ London</h3>
                  <p style={text}>9:00 AM → 2:00 PM</p>
                  <p style={gold}>Best window: 9AM – 12PM EST</p>
                </div>

                {/* Who */}
                <div style={card}>
                  <h3 style={title}>Who This Is For</h3>
                  <ul style={textList}>
                    <li>Remote teams</li>
                    <li>Consultants</li>
                    <li>Sales teams</li>
                    <li>Freelancers</li>
                  </ul>
                </div>

                {/* Problem */}
                <div style={card}>
                  <h3 style={title}>Why This Is Difficult</h3>
                  <p style={text}>
                    Without clear overlap visibility, meetings get scheduled too early or too late.
                  </p>
                </div>

                {/* Solution */}
                <div style={card}>
                  <h3 style={title}>How This Tool Helps</h3>
                  <ul style={textList}>
                    <li>Compare cities instantly</li>
                    <li>See overlap</li>
                    <li>Find best time</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* ============================= */}
            {/* BLOCK 2 — FLOW */}
            {/* ============================= */}

            <div
              style={{
                maxWidth: "900px",
                margin: "0 auto",
                background: "#ede9fe",
                borderRadius: "18px",
                padding: "25px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#1e1b4b", marginBottom: "15px" }}>
                How It Works
              </h3>

              <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "12px" }}>
                {["Compare", "View", "Choose"].map((s, i) => (
                  <div key={i} style={pill}>{s}</div>
                ))}
              </div>

              <p style={{ color: "#4b5563", fontSize: "14px" }}>
                Find the best time quickly and avoid scheduling conflicts.
              </p>
            </div>

          </div>
        }
        footer={<FooterSection />}
      />
    </>
  );
}

/* STYLES */
const card = {
  background: "white",
  padding: "18px",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.12)",
};

const title = {
  color: "#1e1b4b",
  marginBottom: "8px",
};

const text = {
  color: "#374151",
};

const textList = {
  color: "#374151",
  paddingLeft: "18px",
  lineHeight: "1.7",
};

const gold = {
  color: "#d97706",
  fontWeight: 700,
};

const pill = {
  background: "white",
  padding: "8px 14px",
  borderRadius: "8px",
  boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
  color: "#374151",
};
