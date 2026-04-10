/**
 * File: app/page.tsx
 * Version: v2.3 (LIGHT CARD SYSTEM — MATCHES PRODUCT UI)
 * Date: 2026-04-09
 *
 * PURPOSE:
 * - Replace dark SEO section with light card-based layout
 * - Match styling of tool + premium sections
 * - Improve spacing, readability, and visual hierarchy
 *
 * NOTES:
 * - NO changes to logic / Stripe / gating
 * - ALL SEO text preserved (Google-safe)
 *
 * ROLLBACK:
 * - Revert to v2.2 if needed
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

            <div style={{ textAlign: "center", marginBottom: "50px", color: "white" }}>
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
            {/* LIGHT CARD CONTAINER */}
            {/* ============================= */}

            <div
              style={{
                maxWidth: "1100px",
                margin: "0 auto",
                background: "#f8fafc",
                borderRadius: "20px",
                padding: "40px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
            >

              {/* ============================= */}
              {/* HEADER + EXAMPLE */}
              {/* ============================= */}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1fr",
                  gap: "40px",
                  marginBottom: "50px",
                }}
              >
                <div>
                  <h2 style={{ fontSize: "30px", marginBottom: "10px", color: "#1e293b" }}>
                    Find the Best Meeting Time — Instantly
                  </h2>

                  <p style={{ color: "#475569", lineHeight: "1.6" }}>
                    Scheduling across time zones can be frustrating. This tool helps you instantly compare cities, visualize overlapping hours, and choose the best meeting time without manual calculations.
                  </p>
                </div>

                <div
                  style={{
                    background: "white",
                    borderRadius: "12px",
                    padding: "20px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 style={{ marginBottom: "8px", color: "#1e293b" }}>
                    New York ↔ London
                  </h3>

                  <p style={{ color: "#64748b", marginBottom: "6px" }}>
                    9:00 AM → 2:00 PM
                  </p>

                  <p style={{ color: "#7c3aed", fontWeight: 600 }}>
                    Best window: 9AM – 12PM EST
                  </p>
                </div>
              </div>

              {/* ============================= */}
              {/* USE CASE GRID */}
              {/* ============================= */}

              <div style={{ marginBottom: "50px" }}>
                <h3 style={{ marginBottom: "20px", color: "#1e293b" }}>
                  Who This Is For
                </h3>

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
                        background: "white",
                        padding: "18px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        color: "#475569",
                      }}
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* ============================= */}
              {/* PROBLEM / SOLUTION */}
              {/* ============================= */}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "40px",
                  marginBottom: "50px",
                }}
              >
                <div
                  style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  <h3 style={{ marginBottom: "10px", color: "#1e293b" }}>
                    Why This Is Difficult
                  </h3>

                  <p style={{ color: "#475569" }}>
                    Without a clear view of overlapping working hours, meetings often get scheduled too early or too late. This leads to missed calls, lower productivity, and unnecessary friction.
                  </p>
                </div>

                <div
                  style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  <h3 style={{ marginBottom: "10px", color: "#1e293b" }}>
                    How This Tool Helps
                  </h3>

                  <ul style={{ color: "#475569", paddingLeft: "20px" }}>
                    <li>Compare two cities instantly</li>
                    <li>Visualize overlapping hours</li>
                    <li>Find the best meeting window</li>
                    <li>Eliminate manual conversions</li>
                  </ul>
                </div>
              </div>

              {/* ============================= */}
              {/* FLOW */}
              {/* ============================= */}

              <div style={{ textAlign: "center" }}>
                <h3 style={{ marginBottom: "20px", color: "#1e293b" }}>
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
                  {["Compare Cities", "View Overlap", "Choose Time"].map((step, i) => (
                    <div
                      key={i}
                      style={{
                        background: "white",
                        padding: "14px 20px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                        color: "#475569",
                      }}
                    >
                      {step}
                    </div>
                  ))}
                </div>

                <p style={{ marginTop: "25px", color: "#64748b" }}>
                  Whether you're scheduling across continents or booking a quick call, finding the right time makes every meeting more productive.
                </p>
              </div>

            </div>
          </div>
        }
        footer={<FooterSection />}
      />
    </>
  );
}
