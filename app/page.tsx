/**
 * File: app/page.tsx
 * Version: v2.5 (SEO BLOCK — PREMIUM STYLE LIGHT CARD REBUILD)
 * Date: 2026-04-09
 *
 * PURPOSE:
 * - Rebuild the homepage SEO block so it visually matches the upper product sections
 * - Replace the bland dark-purple block with a light premium-style container
 * - Keep SEO content intact while improving structure, centering, spacing, and polish
 *
 * SAFE:
 * - No Stripe logic touched
 * - No ToolPreviewSection logic touched
 * - No premium / gating logic touched
 *
 * ROLLBACK:
 * - Revert to v2.4 if needed
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

            {/* MAIN SEO CONTAINER */}
            <div
              style={{
                maxWidth: "1100px",
                margin: "0 auto",
                background: "#ede9fe",
                borderRadius: "20px",
                padding: "50px 40px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
              }}
            >
              {/* HEADER */}
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <h2 style={{ fontSize: "32px", color: "#1e1b4b", marginBottom: "10px" }}>
                  Find the Best Meeting Time — Instantly
                </h2>

                <p
                  style={{
                    color: "#4338ca",
                    maxWidth: "720px",
                    margin: "0 auto",
                    lineHeight: "1.6",
                  }}
                >
                  Scheduling across time zones can be frustrating. This tool helps you instantly
                  compare cities, visualize overlapping hours, and choose the best meeting time
                  without manual calculations.
                </p>
              </div>

              {/* TOP ROW */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "14px",
                    padding: "24px",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.14)",
                  }}
                >
                  <h3 style={{ color: "#1e1b4b", marginBottom: "10px" }}>
                    New York ↔ London
                  </h3>

                  <p style={{ color: "#6b7280", marginBottom: "8px" }}>
                    9:00 AM → 2:00 PM
                  </p>

                  <p style={{ color: "#d97706", fontWeight: 700 }}>
                    Best window: 9AM – 12PM EST
                  </p>
                </div>

                <div
                  style={{
                    background: "white",
                    borderRadius: "14px",
                    padding: "24px",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.14)",
                  }}
                >
                  <h3 style={{ color: "#1e1b4b", marginBottom: "14px" }}>
                    Who This Is For
                  </h3>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "12px",
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
                          background: "#f5f3ff",
                          borderRadius: "10px",
                          padding: "12px 14px",
                          color: "#4b5563",
                          fontSize: "14px",
                          lineHeight: "1.5",
                        }}
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* MIDDLE ROW */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                  marginBottom: "32px",
                }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "14px",
                    padding: "24px",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.14)",
                  }}
                >
                  <h3 style={{ color: "#1e1b4b", marginBottom: "12px" }}>
                    Why This Is Difficult
                  </h3>

                  <p style={{ color: "#4b5563", lineHeight: "1.7" }}>
                    Without a clear view of overlapping working hours, meetings often get
                    scheduled too early or too late. This leads to missed calls, lower
                    productivity, and unnecessary friction.
                  </p>
                </div>

                <div
                  style={{
                    background: "white",
                    borderRadius: "14px",
                    padding: "24px",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.14)",
                  }}
                >
                  <h3 style={{ color: "#1e1b4b", marginBottom: "12px" }}>
                    How This Tool Helps
                  </h3>

                  <ul
                    style={{
                      color: "#4b5563",
                      paddingLeft: "20px",
                      margin: 0,
                      lineHeight: "1.8",
                    }}
                  >
                    <li>Compare two cities instantly</li>
                    <li>Visualize overlapping hours</li>
                    <li>Find the best meeting window</li>
                    <li>Eliminate manual conversions</li>
                  </ul>
                </div>
              </div>

              {/* BOTTOM FLOW */}
              <div
                style={{
                  background: "white",
                  borderRadius: "14px",
                  padding: "28px 24px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.14)",
                  textAlign: "center",
                }}
              >
                <h3 style={{ marginBottom: "18px", color: "#1e1b4b" }}>
                  How It Works
                </h3>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "14px",
                    flexWrap: "wrap",
                    marginBottom: "18px",
                  }}
                >
                  {["Compare Cities", "View Overlap", "Choose Time"].map((step, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#f5f3ff",
                        padding: "12px 18px",
                        borderRadius: "10px",
                        color: "#4b5563",
                        fontWeight: 600,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      {step}
                    </div>
                  ))}
                </div>

                <p
                  style={{
                    color: "#6b7280",
                    maxWidth: "760px",
                    margin: "0 auto",
                    lineHeight: "1.6",
                  }}
                >
                  Whether you're scheduling across continents or booking a quick call, finding
                  the right time makes every meeting more productive.
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
