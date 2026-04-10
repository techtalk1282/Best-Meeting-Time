/**
 * File: app/page.tsx
 * Version: v2.0 (FINAL SEO + AUTHORITY BLOCK)
 * Date: 2026-04-09
 *
 * PURPOSE:
 * - Maintain layout shell structure (NO logic changes)
 * - Add high-value SEO content for AdSense approval
 * - Include real-world example + use-case targeting
 *
 * NOTES:
 * - No changes to Stripe, gating, or premium logic
 * - SEO content added inside bonusFeatures only
 *
 * ROLLBACK:
 * - Revert to v1.9 if needed
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
            {/* FINAL SEO + AUTHORITY BLOCK   */}
            {/* ============================= */}

            <div
              style={{
                maxWidth: "900px",
                margin: "60px auto 0",
                padding: "0 20px",
                color: "white",
                lineHeight: "1.7",
                textAlign: "left",
              }}
            >
              <h2 style={{ fontSize: "28px", marginBottom: "18px" }}>
                Best Meeting Time Across Time Zones — Plan Smarter, Faster
              </h2>

              <p style={{ marginBottom: "18px", color: "#ddd6fe" }}>
                Scheduling meetings across time zones can quickly become frustrating, especially when working with remote teams, international clients, or global partners. This tool helps you instantly find the best meeting time between cities by showing overlapping working hours — so you can schedule confidently without the back-and-forth.
              </p>

              <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
                Real Example: New York and London
              </h3>

              <p style={{ marginBottom: "18px", color: "#ddd6fe" }}>
                If you are scheduling a meeting between New York and London, there is typically a 5-hour time difference. A 9:00 AM meeting in New York is 2:00 PM in London — making late morning in the U.S. one of the best overlapping windows for both teams.
              </p>

              <p style={{ marginBottom: "18px", color: "#ddd6fe" }}>
                Instead of calculating this manually every time, this tool instantly highlights the best meeting window so you can focus on productivity, not time conversions.
              </p>

              <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
                Who This Is For
              </h3>

              <ul style={{ paddingLeft: "20px", marginBottom: "18px", color: "#ddd6fe" }}>
                <li>Remote teams working across multiple time zones</li>
                <li>Consultants and agencies scheduling client calls</li>
                <li>Sales teams booking international meetings</li>
                <li>Freelancers working with global clients</li>
              </ul>

              <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
                Why Scheduling Across Time Zones Is Difficult
              </h3>

              <p style={{ marginBottom: "18px", color: "#ddd6fe" }}>
                Without a clear view of overlapping working hours, meetings often get scheduled too early or too late for one side. This leads to missed calls, lower productivity, and unnecessary friction between teams.
              </p>

              <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
                How This Tool Helps You Find the Best Meeting Time
              </h3>

              <ul style={{ paddingLeft: "20px", marginBottom: "18px", color: "#ddd6fe" }}>
                <li>Instantly compare two cities in real time</li>
                <li>Visualize overlapping working hours</li>
                <li>Identify the most convenient meeting window</li>
                <li>Schedule faster without manual calculations</li>
              </ul>

              <p style={{ marginTop: "20px", color: "#c4b5fd", fontWeight: 500 }}>
                Whether you're scheduling a quick call or coordinating across continents, finding the right time makes every meeting more productive. Use this tool to eliminate guesswork and plan with confidence.
              </p>
            </div>

          </div>
        }
        footer={<FooterSection />}
      />
    </>
  );
}
