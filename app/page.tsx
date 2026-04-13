/**
 * File: app/page.tsx
 * Version: v3.3 (FINAL POLISH — VISUAL REFINEMENT)
 * Date: 2026-04-13
 *
 * PURPOSE:
 * - Apply final polish improvements ONLY (no layout changes)
 * - Improve visual depth, hierarchy, and clarity
 * - Maintain exact structure + spacing
 *
 * SAFE:
 * - No ToolPreviewSection changes
 * - No PremiumFeaturesSection changes
 * - No layout/spacing changes
 *
 * Rollback:
 * - v3.2
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
          <div style={{ marginTop: "70px", padding: "0 20px", paddingBottom: "70px" }}>

            {/* INTERNAL LINKS */}
            <div style={{ textAlign: "center", marginBottom: "40px", color: "white" }}>
              <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>
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
            {/* 🆕 HIGH-VALUE CONTENT BLOCK (ADSENSE FIX) */}
<div
  style={{
    maxWidth: "980px",
    margin: "0 auto 40px auto",
    background: "rgba(255,255,255,0.92)",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 10px 35px rgba(0,0,0,0.25)",
  }}
>
  <h2 style={{ fontSize: "28px", color: "#1e1b4b", marginBottom: "15px" }}>
    How to Schedule Meetings Across Time Zones (Without Mistakes)
  </h2>

  <p style={text}>
    Scheduling meetings across time zones is one of the most common challenges for
    remote teams, global businesses, and freelancers. A time that looks convenient in
    one region can fall outside working hours in another, leading to missed calls,
    delays, or poor collaboration.
  </p>

  <p style={text}>
    The key to effective scheduling is understanding overlapping working hours. Instead
    of guessing or manually converting time zones, the most efficient approach is to
    compare both locations side-by-side and identify a shared window that works for all
    participants.
  </p>

  <h3 style={title}>Best Practices for Global Scheduling</h3>
  <ul style={textList}>
    <li>Prioritize overlapping business hours whenever possible</li>
    <li>Avoid early morning or late-night meetings for any participant</li>
    <li>Rotate meeting times to distribute inconvenience fairly</li>
    <li>Confirm daylight saving changes when scheduling internationally</li>
  </ul>

  <h3 style={title}>Why Time Zone Planning Matters</h3>
  <p style={text}>
    Poorly scheduled meetings reduce productivity and can impact team morale. Clear,
    consistent scheduling improves attendance, communication, and overall efficiency—
    especially for distributed teams working across multiple continents.
  </p>
</div>
            {/* ✅ UNIFIED SEO BLOCK */}
            <div
              style={{
                maxWidth: "980px",
                margin: "0 auto",
                background: "rgba(255,255,255,0.92)", // ✅ contrast improvement
                borderRadius: "20px",
                padding: "25px",
                boxShadow: "0 10px 35px rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.35)",
              }}
            >
              {/* TITLE + INTRO */}
              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <h2 style={{ fontSize: "30px", color: "#1e1b4b", marginBottom: "5px" }}>
                  Find the Best Meeting Time — Instantly
                </h2>

                <p
                  style={{
                    color: "#312e81",
                    fontSize: "13px",
                    lineHeight: "1.3",
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
                  marginBottom: "8px",
                  border: "2px solid #c4b5fd",
                  boxShadow: "0 8px 22px rgba(124,58,237,0.15)", // ✅ enhanced highlight
                }}
              >
                <h3 style={title}>New York → London Meeting Time (Real Example)</h3>

                <p style={text}>New York (EST): 9:00 AM</p>
                <p style={text}>London (GMT): 2:00 PM</p>
                <p style={text}>Overlap: 9AM – 12PM EST</p>

                <p style={gold}>
                  Best meeting window: 9AM – 12PM EST (optimal overlap)
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
                  <h3 style={title}>Who Uses This</h3>
                  <ul style={textList}>
                    <li>Remote teams working across multiple time zones</li>
                    <li>Consultants scheduling international client calls</li>
                    <li>Sales teams coordinating global meetings</li>
                    <li>Freelancers managing clients in different regions</li>
                  </ul>
                </div>

                <div style={card}>
                  <h3 style={title}>The Challenge</h3>
                  <p style={text}>
                    Scheduling meetings across time zones is more complex than it seems. A
                    time that works for one participant may fall outside normal working hours
                    for another, leading to delays, missed calls, or inefficient scheduling.
                  </p>
                </div>

                <div style={card}>
                  <h3 style={title}>The Solution</h3>
                  <ul style={textList}>
                    <li>Instantly compare cities and their local times</li>
                    <li>Visualize overlapping working hours clearly</li>
                    <li>Identify the most convenient meeting window</li>
                    <li>Eliminate manual time conversion errors</li>
                  </ul>
                </div>
              </div>

              {/* TRUST BAR */}
              <div
                style={{
                  marginTop: "22px",
                  textAlign: "center",
                  color: "#4338ca",
                  fontSize: "14px",
                  opacity: 0.8,
                }}
              >
                Trusted by remote teams and global professionals
              </div>

              <div
                style={{
                  marginTop: "6px",
                  textAlign: "center",
                  color: "#5b21b6",
                  fontSize: "13px",
                  opacity: 0.8,
                }}
              >
                No sign-up required • No subscriptions • Fast and reliable
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
  background: "#ffffff", // ✅ cleaner contrast
  padding: "10px",
  borderRadius: "14px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)", // ✅ softer shadow
  border: "1px solid rgba(124,58,237,0.15)", // ✅ subtle premium border
};

const title = {
  color: "#1e1b4b",
  marginBottom: "3px",
};

const text = {
  color: "#374151",
  lineHeight: "1.3",
  margin: "2px 0",
};

const textList = {
  color: "#374151",
  paddingLeft: "18px",
  lineHeight: "1.5",
  margin: 0,
};

const gold = {
  color: "#f59e0b", // ✅ slightly brighter premium tone
  fontWeight: 600,
};
