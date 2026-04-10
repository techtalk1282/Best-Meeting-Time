/**
 * File: app/page.tsx
 * Version: v2.2 (PROPER LAYOUT REBUILD — GRID + SPLIT SECTIONS)
 * Date: 2026-04-09
 *
 * PURPOSE:
 * - Replace vertical text stack with real product-style layout
 * - Introduce 2-column hero content + grids + flow sections
 * - Restore content while improving structure and readability
 *
 * NOTES:
 * - ZERO impact to logic / Stripe / gating
 * - SEO meaning preserved (safe for AdSense)
 *
 * ROLLBACK:
 * - Revert to v2.1 if needed
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

            {/* ============================= */}
            {/* INTERNAL LINKS */}
            {/* ============================= */}

            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>
                Popular Meeting Time Cities
              </h2>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "14px",
                }}
              >
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
            {/* SECTION 1 — SPLIT HERO */}
            {/* ============================= */}

            <div
              style={{
                maxWidth: "1100px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr",
                gap: "40px",
                alignItems: "center",
                marginBottom: "80px",
                color: "white",
              }}
            >
              {/* LEFT */}
              <div>
                <h2 style={{ fontSize: "34px", marginBottom: "15px" }}>
                  Find the Best Meeting Time — Instantly
                </h2>

                <p style={{ color: "#ddd6fe", lineHeight: "1.6" }}>
                  Scheduling across time zones can be frustrating. This tool helps you instantly compare cities, visualize overlapping hours, and choose the best meeting time without manual calculations.
                </p>
              </div>

              {/* RIGHT — FEATURE CARD */}
              <div
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "14px",
                  padding: "24px",
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>
                  New York ↔ London
                </h3>

                <p style={{ color: "#ddd6fe", marginBottom: "8px" }}>
                  9:00 AM → 2:00 PM
                </p>

                <p style={{ color: "#c4b5fd", fontWeight: 500 }}>
                  Best window: 9AM – 12PM EST
                </p>
              </div>
            </div>

            {/* ============================= */}
            {/* SECTION 2 — USE CASE GRID */}
            {/* ============================= */}

            <div
              style={{
                maxWidth: "1100px",
                margin: "0 auto",
                marginBottom: "80px",
                color: "white",
              }}
            >
              <h3 style={{ marginBottom: "25px" }}>Who This Is For</h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "20px",
                }}
              >
                {[
                  "Remote teams across time zones",
                  "Consultants scheduling client calls",
                  "Sales teams booking international meetings",
                  "Freelancers working with global clients",
                ].map((text, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      padding: "20px",
                      borderRadius: "12px",
                      color: "#ddd6fe",
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* ============================= */}
            {/* SECTION 3 — PROBLEM / SOLUTION */}
            {/* ============================= */}

            <div
              style={{
                maxWidth: "1100px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "40px",
                marginBottom: "80px",
                color: "white",
              }}
            >
              {/* PROBLEM */}
              <div>
                <h3 style={{ marginBottom: "10px" }}>
                  Why This Is Difficult
                </h3>

                <p style={{ color: "#ddd6fe" }}>
                  Without a clear view of overlapping working hours, meetings often get scheduled too early or too late. This leads to missed calls, lower productivity, and unnecessary friction.
                </p>
              </div>

              {/* SOLUTION */}
              <div>
                <h3 style={{ marginBottom: "10px" }}>
                  How This Tool Helps
                </h3>

                <ul style={{ color: "#ddd6fe", paddingLeft: "20px" }}>
                  <li>Compare two cities instantly</li>
                  <li>Visualize overlapping hours</li>
                  <li>Find the best meeting window</li>
                  <li>Eliminate manual conversions</li>
                </ul>
              </div>
            </div>

            {/* ============================= */}
            {/* SECTION 4 — FLOW */}
            {/* ============================= */}

            <div
              style={{
                maxWidth: "1100px",
                margin: "0 auto",
                marginBottom: "60px",
                color: "white",
                textAlign: "center",
              }}
            >
              <h3 style={{ marginBottom: "30px" }}>
                How It Works
              </h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                {[
                  "Compare Cities",
                  "View Overlap",
                  "Choose Time",
                ].map((step, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      padding: "18px 24px",
                      borderRadius: "10px",
                    }}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* ============================= */}
            {/* CLOSING */}
            {/* ============================= */}

            <div
              style={{
                textAlign: "center",
                color: "#c4b5fd",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Whether you're scheduling across continents or booking a quick call, finding the right time makes every meeting more productive.
            </div>

          </div>
        }
        footer={<FooterSection />}
      />
    </>
  );
}
