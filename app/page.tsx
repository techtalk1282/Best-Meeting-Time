/**
 * File: app/page.tsx
 * Version: v4.3 (HOMEPAGE PREVIEW POLISH)
 * Date: 2026-05-03
 *
 * PURPOSE:
 * - Polish homepage to better match target UI
 * - Keep homepage as marketing-only preview
 * - Send users to real tool/app flow from CTA buttons
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert app/page.tsx to v4.2 if this layout does not test cleanly
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
                <a href="/how-it-works#schedule-tool" style={navLink}>Schedule</a>
                <a href="#features" style={navLink}>Features</a>
                <a href="/guides" style={navLink}>Guides</a>
                <a href="/contact" style={navLink}>Contact</a>
              </nav>

              <a href="/how-it-works#schedule-tool" style={navButton}>
  Schedule a Meeting
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
                <p style={mockTitle}>Example Meeting Time</p>

                <div style={cityPreviewGrid}>
                  <div style={cityPreviewCard}>
                    <span style={cityLabel}>New York, USA 🇺🇸</span>
                    <strong style={cityTime}>9:00 AM EDT</strong>
                    <span style={cityDate}>Local time</span>
                  </div>

                  <div style={cityPreviewCard}>
                    <span style={cityLabel}>London, UK 🇬🇧</span>
                    <strong style={cityTime}>2:00 PM BST</strong>
                    <span style={cityDate}>Same meeting time</span>
                  </div>
                </div>

                <div style={bestWindowCard}>
                  <span>Best Meeting Window</span>
                  <strong>9:00 AM – 12:00 PM New York time</strong>
                </div>

                <a href="/how-it-works#schedule-tool" style={mockButton}>
  Schedule a Meeting
</a>
              </div>
            </section>

            <section id="features" style={featureStrip}>
              <div style={featureCard}>
                <span style={featureIcon}>◷</span>
                <strong>Accurate & Reliable</strong>
                <span>Uses real time zone data.</span>
              </div>

              <div style={featureCard}>
                <span style={featureIcon}>↯</span>
                <strong>Save Hours</strong>
                <span>Eliminate endless emails.</span>
              </div>

              <div style={featureCard}>
                <span style={featureIcon}>♙</span>
                <strong>For Teams of Any Size</strong>
                <span>Perfect for remote teams.</span>
              </div>

              <div style={featureCard}>
                <span style={featureIcon}>♡</span>
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
                  <span style={resourceIcon}>▣</span>
                  <strong>How to Schedule Across Time Zones</strong>
                  <span>Step-by-step guide for global teams.</span>
                </a>

                <a href="/best-meeting-times-remote-teams" style={resourceCard}>
                  <span style={resourceIcon}>⌘</span>
                  <strong>Best Meeting Times for Remote Teams</strong>
                  <span>Practical tips that actually work.</span>
                </a>

                <a href="/time-zone-meeting-planner-guide" style={resourceCard}>
                  <span style={resourceIcon}>☷</span>
                  <strong>Time Zone Meeting Planner Guide</strong>
                  <span>Master your zone planning.</span>
                </a>

                <a href="/global-meeting-scheduling-tips" style={resourceCard}>
                  <span style={resourceIcon}>✣</span>
                  <strong>Global Meeting Scheduling Tips</strong>
                  <span>Expert tips for faster scheduling.</span>
                </a>

                <a href="/guides" style={resourceCard}>
                  <span style={resourceIcon}>⌁</span>
                  <strong>Meeting Time Zone Converter Guide</strong>
                  <span>Understand time zones easily.</span>
                </a>
              </div>

              <div style={ctaBand}>
                <span>Ready to find the best time for your next meeting?</span>

                <a href="/how-it-works#schedule-tool" style={ctaButton}>
  Schedule a Meeting
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
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "20px 18px 28px",
};

const header = {
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
  borderBottom: "1px solid #ede9fe",
  marginBottom: "14px",
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
  gap: "18px",
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
  gap: "36px",
  padding: "24px 10px 14px",
};

const heroLeft = {
  maxWidth: "520px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 12px",
  padding: "6px 12px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "12px",
  fontWeight: 900,
};

const heroHeading = {
  color: "#111827",
  fontSize: "clamp(34px, 4vw, 46px)",
  lineHeight: "1.08",
  margin: "0 0 12px",
  fontWeight: 950,
  letterSpacing: "-0.03em",
};

const heroText = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 16px",
};

const trustRow = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "14px",
  color: "#4c1d95",
  fontSize: "12px",
  fontWeight: 850,
};

const heroCard = {
  background: "#ffffff",
  border: "1px solid #e9d5ff",
  borderRadius: "10px",
  padding: "14px",
  boxShadow: "0 10px 30px rgba(76,29,149,0.12)",
};

const heroCardLayout = {
  display: "grid",
  gridTemplateColumns: "1fr 0.75fr",
  gap: "14px",
  alignItems: "stretch",
};

const mockForm = {
  minWidth: 0,
};

const mockTitle = {
  color: "#4c1d95",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 10px",
};

const mockLabel = {
  display: "block",
  color: "#6b7280",
  fontSize: "10px",
  fontWeight: 900,
  margin: "8px 0 4px",
};

const mockSelect = {
  background: "#f8f7ff",
  border: "1px solid #ddd6fe",
  borderRadius: "6px",
  padding: "8px 9px",
  color: "#111827",
  fontSize: "12px",
  fontWeight: 800,
};

const mockSlider = {
  height: "6px",
  background: "#ede9fe",
  borderRadius: "999px",
  position: "relative" as const,
  margin: "10px 0 12px",
};

const mockSliderDot = {
  width: "10px",
  height: "10px",
  background: "#5b21b6",
  borderRadius: "999px",
  position: "absolute" as const,
  top: "-2px",
  left: "58%",
};

const mockButton = {
  display: "block",
  width: "100%",
  background: "#5b21b6",
  color: "#ffffff",
  textAlign: "center" as const,
  padding: "10px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: 900,
  textDecoration: "none",
  marginTop: "6px",
};

const mockResultPanel = {
  background: "#f8f7ff",
  borderRadius: "8px",
  padding: "10px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "8px",
  border: "1px solid #ede9fe",
};

const mockResultTop = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "2px",
  color: "#6b7280",
  fontSize: "9px",
  fontWeight: 900,
};

const mockResultBox = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "7px",
  padding: "8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#111827",
  fontSize: "10px",
  fontWeight: 800,
};

const mockBestBox = {
  background: "#dcfce7",
  color: "#166534",
  borderRadius: "7px",
  padding: "9px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "3px",
  fontSize: "10px",
  fontWeight: 900,
};

const featureStrip = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "10px",
  margin: "12px 0",
};

const featureCard = {
  background: "#ffffff",
  border: "1px solid #ede9fe",
  borderRadius: "9px",
  padding: "10px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "4px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.035)",
  fontSize: "11px",
};

const featureIcon = {
  width: "18px",
  height: "18px",
  borderRadius: "6px",
  background: "#ede9fe",
  color: "#5b21b6",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "11px",
  fontWeight: 900,
};

const resourcesSection = {
  marginTop: "8px",
  padding: "16px 14px",
  background: "#ffffff",
  borderRadius: "10px",
  border: "1px solid #ede9fe",
};

const resourcesHeader = {
  textAlign: "center" as const,
  marginBottom: "12px",
};

const sectionTitle = {
  fontSize: "20px",
  fontWeight: 950,
  color: "#111827",
  margin: "0 0 5px",
};

const sectionSubtitle = {
  color: "#6b7280",
  fontSize: "12px",
  margin: 0,
};

const resourcesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "10px",
  marginBottom: "12px",
};

const resourceCard = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "5px",
  background: "#f9fafb",
  border: "1px solid #ede9fe",
  borderRadius: "9px",
  padding: "10px",
  textDecoration: "none",
  color: "#111827",
  fontSize: "10px",
  lineHeight: "1.25",
};

const resourceIcon = {
  width: "18px",
  height: "18px",
  borderRadius: "6px",
  background: "#ede9fe",
  color: "#5b21b6",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "10px",
  fontWeight: 900,
};

const ctaBand = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#5b21b6",
  color: "#ffffff",
  padding: "12px 16px",
  borderRadius: "9px",
  fontWeight: 900,
  fontSize: "12px",
};

const ctaButton = {
  background: "#facc15",
  color: "#111827",
  padding: "8px 12px",
  borderRadius: "7px",
  fontSize: "11px",
  fontWeight: 900,
  textDecoration: "none",
};
const cityPreviewGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
  marginBottom: "10px",
};

const cityPreviewCard = {
  background: "#f8f7ff",
  border: "1px solid #ddd6fe",
  borderRadius: "8px",
  padding: "10px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "4px",
};

const cityLabel = {
  fontSize: "11px",
  fontWeight: 800,
  color: "#374151",
};

const cityTime = {
  fontSize: "16px",
  fontWeight: 900,
  color: "#111827",
};

const cityDate = {
  fontSize: "10px",
  color: "#6b7280",
};

const bestWindowCard = {
  background: "#dcfce7",
  color: "#166534",
  borderRadius: "8px",
  padding: "10px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "4px",
  fontSize: "11px",
  fontWeight: 900,
  marginBottom: "8px",
};
