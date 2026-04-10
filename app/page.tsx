/**
 * File: app/page.tsx
 * Version: v2.1 (HIGH-CONVERTING VISUAL UPGRADE)
 * Date: 2026-04-09
 *
 * PURPOSE:
 * - Improve SEO section UX (scanable + engaging)
 * - Add visual blocks (NO images, lightweight)
 * - Highlight real-world example (key conversion element)
 *
 * NOTES:
 * - ZERO changes to logic, Stripe, or gating
 * - SEO meaning unchanged (safe for AdSense)
 *
 * ROLLBACK:
 * - Revert to v2.0 if needed
 */

import dynamic from "next/dynamic";

import LayoutShell from "./ui/LayoutShell";
import HeroSection from "./ui/HeroSection";
import PremiumFeaturesSection from "./ui/PremiumFeaturesSection";
import FooterSection from "./ui/FooterSection";

// ✅ CRITICAL: disable SSR for this component
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
          <div style={{ marginTop: "60px", textAlign: "center" }}>
            
            {/* ============================= */}
            {/* INTERNAL LINKS (SEO SIGNAL)   */}
            {/* ============================= */}

            <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
              Popular Meeting Time Cities
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "12px",
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

            {/* ============================= */}
            {/* HIGH-CONVERTING SEO SECTION   */}
            {/* ============================= */}

            <div
              style={{
                maxWidth: "900px",
                margin: "60px auto 0",
                padding: "0 20px",
                color: "white",
                textAlign: "left",
              }}
            >
              {/* 🔥 HOOK */}
              <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>
                Find the Best Meeting Time — Instantly, Without Guesswork
              </h2>

              <p style={{ marginBottom: "30px", color: "#ddd6fe" }}>
                Scheduling across time zones does not need to be complicated. Instantly compare cities, visualize overlapping hours, and choose the best meeting window in seconds.
              </p>

              {/* 🔥 FEATURED EXAMPLE CARD */}
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  padding: "20px",
                  marginBottom: "30px",
                }}
              >
                <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                  Example: New York ↔ London
                </h3>

                <p style={{ color: "#ddd6fe", marginBottom: "10px" }}>
                  New York (9:00 AM) → London (2:00 PM)
                </p>

                <p style={{ color: "#c4b5fd", fontWeight: 500 }}>
                  Best overlap window: 9:00 AM – 12:00 PM EST
                </p>
              </div>

              {/* 🔥 WHO IT'S FOR */}
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
                  Who This Is For
                </h3>

                <ul style={{ paddingLeft: "20px", color: "#ddd6fe" }}>
                  <li>Remote teams across multiple time zones</li>
                  <li>Consultants scheduling client meetings</li>
                  <li>Sales teams booking international calls</li>
                  <li>Freelancers working with global clients</li>
                </ul>
              </div>

              {/* 🔥 WHY IT MATTERS */}
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
                  Why Scheduling Across Time Zones Is Difficult
                </h3>

                <p style={{ color: "#ddd6fe" }}>
                  Without a clear view of overlapping working hours, meetings often get scheduled too early or too late. This leads to missed calls, lower productivity, and unnecessary friction.
                </p>
              </div>

              {/* 🔥 HOW IT WORKS (VISUAL STYLE) */}
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "12px",
                  padding: "20px",
                  marginBottom: "30px",
                }}
              >
                <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
                  How This Tool Helps You
                </h3>

                <ul style={{ paddingLeft: "20px", color: "#ddd6fe" }}>
                  <li>Compare two cities in real time</li>
                  <li>See overlapping working hours instantly</li>
                  <li>Identify the best meeting window</li>
                  <li>Schedule faster without manual conversions</li>
                </ul>
              </div>

              {/* 🔥 CLOSING */}
              <p style={{ color: "#c4b5fd", fontWeight: 500 }}>
                Whether you're scheduling across continents or booking a quick call, finding the right time makes every meeting more productive.
              </p>
            </div>
          </div>
        }
        footer={<FooterSection />}
      />
    </>
  );
}
