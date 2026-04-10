/**
 * File: app/page.tsx
 * Version: v3.0 (FINAL POLISH — UX + SEO + VISUAL BALANCE)
 * Date: 2026-04-09
 *
 * PURPOSE:
 * - Improve "How It Works" clarity and strength
 * - Add bottom container for visual separation
 * - Tighten typography + spacing
 * - Add trust signal for SEO / AdSense
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
          <div style={{ marginTop: "80px", padding: "0 20px", paddingBottom: "80px" }}>

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

            {/* BLOCK 1 */}
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

                <p style={{ color: "#312e81", fontSize: "16px", maxWidth: "720px", margin: "0 auto" }}>
                  Compare time zones instantly and find the best meeting time between cities without guesswork. Whether you're scheduling a client call, coordinating a remote team, or planning across continents, this tool shows overlapping working hours so you can confidently choose the most productive time.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

                <div style={card}>
                  <h3 style={title}>New York ↔ London</h3>
                  <p style={text}>9:00 AM → 2:00 PM</p>
                  <p style={gold}>Best window: 9AM – 12PM EST</p>
                </div>

                <div style={card}>
                  <h3 style={title}>Who This Is For</h3>
                  <ul style={textList}>
                    <li>Remote teams working across multiple time zones</li>
                    <li>Consultants booking international client calls</li>
                    <li>Sales teams coordinating global meetings</li>
                    <li>Freelancers managing clients in different regions</li>
                  </ul>
                </div>

                <div style={card}>
                  <h3 style={title}>Why This Is Difficult</h3>
                  <p style={text}>
                    Scheduling meetings across time zones is more complex than it seems. A time that works for one participant may fall outside normal working hours for another, often leading to delays, missed calls, or inefficient scheduling.
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
            </div>

            {/* BLOCK 2 — UPGRADED */}
            <div
              style={{
                maxWidth: "900px",
                margin: "0 auto 30px auto",
                background: "#ede9fe",
                borderRadius: "18px",
                padding: "28px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#1e1b4b", marginBottom: "18px", fontSize: "20px" }}>
                How It Works
              </h3>

              <div style={{ display: "flex", justifyContent: "center", gap: "14px", marginBottom: "14px" }}>
                {["Compare Time Zones", "Find Overlap", "Schedule with Confidence"].map((s, i) => (
                  <div key={i} style={pill}>{s}</div>
                ))}
              </div>

              <p style={{ color: "#4b5563", fontSize: "14px" }}>
                Quickly identify the best meeting time by comparing cities, visualizing overlapping hours, and choosing the most efficient window for everyone involved.
              </p>
            </div>

            {/* FINAL SECTION — POLISHED */}
            <div
              style={{
                maxWidth: "820px",
                margin: "40px auto 0 auto",
                textAlign: "center",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "22px",
                color: "#ddd6fe",
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              <p>
                Built for professionals, remote teams, and global businesses, this tool helps you quickly find the best meeting time across time zones without confusion or back-and-forth.
              </p>

              <p style={{ marginTop: "12px" }}>
                Share meeting links instantly to keep teams aligned, and add events directly to Google, Outlook, or Apple calendars to eliminate manual scheduling. These features improve collaboration, reduce errors, and help you move from planning to execution with confidence.
              </p>

              <p style={{ color: "#a5b4fc", fontSize: "13px", marginTop: "18px" }}>
                No sign-up required. No subscriptions. Built for fast, reliable scheduling across time zones.
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
  padding: "10px 16px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
  color: "#374151",
  fontWeight: 500,
};
