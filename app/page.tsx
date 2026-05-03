/**
 * File: app/page.tsx
 * Version: v4.2 (TARGET HOMEPAGE ONLY)
 * Date: 2026-05-03
 *
 * PURPOSE:
 * - Match the supplied V3 homepage target UI
 * - Keep homepage focused: header, hero, feature strip, resources, CTA
 * - Remove outdated homepage sections not shown in target UI
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection logic changes
 *
 * ROLLBACK:
 * - Revert app/page.tsx to v4.1 if this layout does not test cleanly
 */

import dynamic from "next/dynamic";

import LayoutShell from "./ui/LayoutShell";
import FooterSection from "./ui/FooterSection";

const VerifyPremium = dynamic(() => import("./ui/VerifyPremium"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <VerifyPremium />

      <LayoutShell
        hero={
          <main style={pageWrap}>
            <header style={header}>
              <a href="/" style={brandLink}>
                <span style={brandIcon}>⌘</span>
                <span>Best Meeting Time</span>
              </a>

              <nav style={nav}>
                <a href="/how-it-works" style={navLink}>How It Works</a>
                <a href="#features" style={navLink}>Features</a>
                <a href="/guides" style={navLink}>Guides</a>
                <a href="/contact" style={navLink}>Contact</a>
              </nav>

              <a href="#resources" style={navButton}>
                Try the Tool Free
              </a>
            </header>

            <section style={heroSection}>
              <div style={heroLeft}>
                <p style={eyebrow}>The Trusted Time Zone Meeting Planner</p>

                <h1 style={heroHeading}>
                  Find the Best Meeting Time Across Any Time Zone
                </h1>

                <p style={heroText}>
                  Smart scheduling for global teams. Save hours of back-and-forth
                  and find the perfect time for everyone, instantly.
                </p>

                <div style={trustRow}>
                  <span>100% Free to Use</span>
                  <span>No Sign-up</span>
                  <span>Works Worldwide</span>
                </div>
              </div>

              <div style={heroCard}>
                <div style={heroCardLayout}>
                  <div style={mockForm}>
                    <p style={mockTitle}>Select Time Zones</p>

                    <label style={mockLabel}>Time Zone 1</label>
                    <div style={mockSelect}>New York, USA (EDT)</div>

                    <label style={mockLabel}>Time Zone 2</label>
                    <div style={mockSelect}>London, UK (BST)</div>

                    <label style={mockLabel}>Meeting Duration</label>
                    <div style={mockSelect}>60 minutes</div>

                    <label style={mockLabel}>Preferred Time Window</label>
                    <div style={mockSlider}>
                      <span style={mockSliderDot}></span>
                    </div>

                    <a href="/how-it-works" style={mockButton}>
                      Find Best Time
                    </a>
                  </div>


                  <div style={mockTimeline}>
                    <div style={mockTimelineHeader}>
                      <span>NY</span>
                      <span>London</span>
                    </div>

                    <div style={timeGrid}>
                      <span>8 AM</span>
                      <span style={timeCellLight}></span>
                      <span style={timeCellLight}></span>

                      <span>10 AM</span>
                      <span style={timeCellLight}></span>
                      <span style={timeCellMid}></span>

                      <span>12 PM</span>
                      <span style={timeCellMid}></span>
                      <span style={timeCellDark}></span>

                      <span>2 PM</span>
                      <span style={timeCellDark}></span>
                      <span style={timeCellMid}></span>

                      <span>4 PM</span>
                      <span style={timeCellBest}>Best Time</span>
                      <span style={timeCellLight}></span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="features" style={featureStrip}>
              <div style={featureCard}>
                <strong>Accurate & Reliable</strong>
                <span>Uses real time zone data.</span>
              </div>

              <div style={featureCard}>
                <strong>Save Hours</strong>
                <span>Eliminate endless emails.</span>
              </div>

              <div style={featureCard}>
                <strong>For Teams of Any Size</strong>
                <span>Perfect for remote teams.</span>
              </div>

              <div style={featureCard}>
                <strong>100% Free</strong>
                <span>Free forever, no catch.</span>
              </div>
            </section>

            <section id="resources" style={resourcesSection}>
              <div style={resourcesHeader}>
                <h2 style={sectionTitle}>
                  Helpful Resources to Schedule Better Meetings
                </h2>

                <p style={sectionSubtitle}>
                  In-depth guides and tips to help you collaborate across time zones.
                </p>
              </div>

              <div style={resourcesGrid}>
                <a href="/how-to-schedule-meetings-across-time-zones" style={resourceCard}>
                  <strong>How to Schedule Across Time Zones</strong>
                  <span>Step-by-step guide for global teams.</span>
                </a>

                <a href="/best-meeting-times-remote-teams" style={resourceCard}>
                  <strong>Best Meeting Times for Remote Teams</strong>
                  <span>Practical tips that actually work.</span>
                </a>

                <a href="/time-zone-meeting-planner-guide" style={resourceCard}>
                  <strong>Time Zone Meeting Planner Guide</strong>
                  <span>Master your zone planning.</span>
                </a>

                <a href="/global-meeting-scheduling-tips" style={resourceCard}>
                  <strong>Global Meeting Scheduling Tips</strong>
                  <span>Expert tips for faster scheduling.</span>
                </a>

                <a href="/guides" style={resourceCard}>
                  <strong>Meeting Time Zone Converter Guide</strong>
                  <span>Understand time zones easily.</span>
                </a>
              </div>

              <div style={ctaBand}>
                <span>Ready to find the best time for your next meeting?</span>

                <a href="/how-it-works" style={ctaButton}>
                  Try the Free Tool Now
                </a>
              </div>
            </section>
          </main>
        }
        toolPreview={null}



        premiumFeatures={null}
        bonusFeatures={null}
        footer={<FooterSection />}
      />
    </>
  );
}

/* STYLES */

const pageWrap = {
  background: "#ffffff",
  color: "#111827",
  maxWidth: "1240px",
  margin: "0 auto",
  padding: "0 18px 34px",
};

const header = {
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
  borderBottom: "1px solid #ede9fe",
};

const brandLink = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "#5b21b6",
  fontSize: "18px",
  fontWeight: 900,
  textDecoration: "none",
};

const brandIcon = {
  width: "24px",
  height: "24px",
  borderRadius: "7px",
  background: "#ede9fe",
  color: "#5b21b6",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
};

const nav = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "22px",
};

const navLink = {
  color: "#374151",
  fontSize: "13px",
  fontWeight: 800,
  textDecoration: "none",
};

const navButton = {
  background: "#5b21b6",
  color: "#ffffff",
  padding: "10px 16px",
  borderRadius: "7px",
  fontSize: "13px",
  fontWeight: 900,
  textDecoration: "none",
};

const heroSection = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  gap: "46px",
  padding: "44px 24px 28px",
};

const heroLeft = {
  maxWidth: "560px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 18px",
  padding: "8px 14px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "13px",
  fontWeight: 900,
};

const heroHeading = {
  color: "#111827",
  fontSize: "clamp(38px, 4.5vw, 56px)",
  lineHeight: "1.04",
  margin: "0 0 18px",
  fontWeight: 950,
  letterSpacing: "-0.045em",
};

const heroText = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "1.55",
  margin: "0 0 24px",
};

const trustRow = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "20px",
  color: "#4c1d95",
  fontSize: "13px",
  fontWeight: 850,
};

const heroCard = {
  background: "#ffffff",
  border: "1px solid #e9d5ff",
  borderRadius: "10px",
  padding: "18px",
  boxShadow: "0 18px 45px rgba(76,29,149,0.13)",
};

const heroCardLayout = {
  display: "grid",
  gridTemplateColumns: "1fr 0.78fr",
  gap: "18px",
  alignItems: "stretch",
};

const mockForm = {
  minWidth: 0,
};

const mockTitle = {
  color: "#4c1d95",
  fontSize: "13px",
  fontWeight: 950,
  margin: "0 0 12px",
};

const mockLabel = {
  display: "block",
  color: "#6b7280",
  fontSize: "10px",
  fontWeight: 900,
  margin: "10px 0 5px",
};

const mockSelect = {
  background: "#f8f7ff",
  border: "1px solid #ddd6fe",
  borderRadius: "6px",
  padding: "9px 10px",
  color: "#111827",
  fontSize: "12px",
  fontWeight: 800,
};

const mockSlider = {
  height: "8px",
  background: "#ede9fe",
  borderRadius: "999px",
  position: "relative" as const,
  margin: "11px 0 14px",
};


const mockSliderDot = {
  width: "16px",
  height: "16px",
  background: "#5b21b6",
  borderRadius: "50%",
  position: "absolute" as const,
  top: "-4px",
  left: "60%",
};

const mockButton = {
  display: "block",
  width: "100%",
  background: "#5b21b6",
  color: "#ffffff",
  textAlign: "center" as const,
  padding: "10px 0",
  borderRadius: "6px",
  fontSize: "13px",
  fontWeight: 900,
  textDecoration: "none",
  marginTop: "6px",
};

const mockTimeline = {
  background: "#f8f7ff",
  borderRadius: "8px",
  padding: "10px",
  display: "flex",
  flexDirection: "column" as const,
};

const mockTimelineHeader = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "10px",
  fontWeight: 900,
  color: "#6b7280",
  marginBottom: "6px",
};

const timeGrid = {
  display: "grid",
  gridTemplateColumns: "auto 1fr 1fr",
  gap: "4px",
  alignItems: "center",
  fontSize: "10px",
};

const timeCellLight = {
  height: "18px",
  background: "#ede9fe",
  borderRadius: "4px",
};

const timeCellMid = {
  height: "18px",
  background: "#c4b5fd",
  borderRadius: "4px",
};

const timeCellDark = {
  height: "18px",
  background: "#8b5cf6",
  borderRadius: "4px",
};

const timeCellBest = {
  height: "18px",
  background: "#22c55e",
  color: "#ffffff",
  fontSize: "9px",
  fontWeight: 900,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
};

const featureStrip = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "16px",
  margin: "34px 0",
};

const featureCard = {
  background: "#ffffff",
  border: "1px solid #ede9fe",
  borderRadius: "10px",
  padding: "18px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "6px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
  fontSize: "13px",
};

const resourcesSection = {
  marginTop: "18px",
  padding: "34px 22px",
  background: "#ffffff",
  borderRadius: "10px",
  border: "1px solid #ede9fe",
};

const resourcesHeader = {
  textAlign: "center" as const,
  marginBottom: "26px",
};

const sectionTitle = {
  fontSize: "24px",
  fontWeight: 950,
  color: "#111827",
  margin: "0 0 8px",
};

const sectionSubtitle = {
  color: "#6b7280",
  fontSize: "14px",
};

const resourcesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "14px",
  marginBottom: "22px",
};

const resourceCard = {
  display: "block",
  background: "#f9fafb",
  border: "1px solid #ede9fe",
  borderRadius: "10px",
  padding: "16px",
  textDecoration: "none",
  color: "#111827",
  fontSize: "13px",
  lineHeight: "1.4",
};

const ctaBand = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#5b21b6",
  color: "#ffffff",
  padding: "16px 22px",
  borderRadius: "10px",
  fontWeight: 900,
};

const ctaButton = {
  background: "#facc15",
  color: "#111827",
  padding: "10px 16px",
  borderRadius: "8px",
  fontSize: "13px",
  fontWeight: 900,
  textDecoration: "none",
};

