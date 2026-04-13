/**
 * File: app/page.tsx
 * Version: v3.2 (UNIFIED SEO BLOCK — CLEAN + PREMIUM)
 * Date: 2026-04-13
 *
 * PURPOSE:
 * - Combine SEO sections into one unified premium block
 * - Improve example clarity and usefulness
 * - Remove redundant sections (How It Works + duplicate text)
 * - Maintain clean UI + strong SEO density
 *
 * SAFE:
 * - No ToolPreviewSection changes
 * - No PremiumFeaturesSection changes
 * - No city page impact
 *
 * Rollback:
 * - v3.1
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
          <div style={{ marginTop: "80px", padding: "0 20px", paddingBottom: "80px" }}>

            {/* INTERNAL LINKS */}
            <div style={{ textAlign: "center", marginBottom: "40px", color: "white" }}>
              <h2 style={{ fontSize: "26px", marginBottom: "12px" }}>
  Compare Popular Cities Across Time Zones
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

            {/* ✅ UNIFIED SEO BLOCK */}
            <div
              style={{
                maxWidth: "980px",
                margin: "0 auto",
                background: "linear-gradient(180deg, #efe7ff 0%, #f6f2ff 100%)",
                borderRadius: "20px",
                padding: "28px",
                boxShadow: "0 10px 35px rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.35)",
              }}
            >
              {/* TITLE + INTRO */}
              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <h2 style={{ fontSize: "30px", color: "#1e1b4b", marginBottom: "10px" }}>
                  Find the Best Meeting Time — Instantly
                </h2>

                <p
                  style={{
                    color: "#312e81",
                    fontSize: "16px",
                    lineHeight: "1.6",
maxWidth: "700px",
                    margin: "0 auto",
                  }}
                >
                  Compare time zones instantly and find the best meeting time between cities
                  without guesswork. This simple time zone converter and meeting planner helps
                  you schedule across time zones, visualize overlapping working hours, and
                  confidently choose the most productive time for your team.
                </p>
              </div>

              {/* 🔥 IMPROVED EXAMPLE */}
              <div
                style={{
                  ...card,
                  marginBottom: "14px",
                  border: "2px solid #c4b5fd",
                }}
              >
                <h3 style={title}>New York → London Meeting Time (Real Example)</h3>

                <p style={text}>New York (EST): 9:00 AM</p>
                <p style={text}>London (GMT): 2:00 PM</p>
                <p style={text}>Overlap: 9AM – 12PM EST</p>

                <p style={gold}>
                  This is the ideal window for productive meetings across both cities.
                </p>
              </div>

              {/* GRID */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "14px",
                }}
              >
                <div style={card}>
                  <h3 style={title}>Who This Is For</h3>
                  <ul style={textList}>
                    <li>Remote teams working across multiple time zones</li>
                    <li>Consultants scheduling international client calls</li>
                    <li>Sales teams coordinating global meetings</li>
                    <li>Freelancers managing clients in different regions</li>
                  </ul>
                </div>

                <div style={card}>
                  <h3 style={title}>Why This Is Difficult</h3>
                  <p style={text}>
                    Scheduling meetings across time zones is more complex than it seems. A
                    time that works for one participant may fall outside normal working hours
                    for another, leading to delays, missed calls, or inefficient scheduling.
                  </p>
                </div>

                <div style={card}>
                  <h3 style={title}>How This Tool Helps</h3>
                  <ul style={textList}>
                    <li>Instantly compare cities and their local times</li>
                    <li>Visualize overlapping working hours clearly</li>
                    <li>Identify the most convenient meeting window</li>
                    <li>Eliminate manual time conversion errors</li>
                  </ul>
                </div>
              </div>

              {/* TRUST / AUTHORITY */}
              <div
                style={{
                  marginTop: "24px",
                  textAlign: "center",
                  color: "#4338ca",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Used by professionals, remote teams, and global businesses to schedule meetings
                across time zones quickly and efficiently.
              </div>

              {/* SUPPORT TEXT */}
              <div
                style={{
                  marginTop: "16px",
                  textAlign: "center",
                  color: "#5b21b6",
                  fontSize: "13px",
                }}
              >
                No sign-up required. No subscriptions. Just fast, reliable scheduling across time zones.
              </div>
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
  padding: "16px",
  borderRadius: "14px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
};

const title = {
  color: "#1e1b4b",
  marginBottom: "10px",
};

const text = {
  color: "#374151",
  lineHeight: "1.6",
};

const textList = {
  color: "#374151",
  paddingLeft: "18px",
  lineHeight: "1.8",
  margin: 0,
};

const gold = {
  color: "#d97706",
  fontWeight: 700,
};
