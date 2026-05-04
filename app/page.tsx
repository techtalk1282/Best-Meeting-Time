/**
 * File: app/page.tsx
 * Version: v4.6 (REFINED HOMEPAGE HERO + BRAND CLEANUP)
 * Date: 2026-05-04
 *
 * PURPOSE:
 * - Clean up homepage visual hierarchy
 * - Remove duplicate Schedule a Meeting CTA from hero-left area
 * - Keep primary CTAs in top-right nav, planner preview, and bottom CTA only
 * - Replace off-brand green planner highlight with branded gold
 * - Improve first-viewport framing at 100% zoom
 * - Make headline read cleaner and less jumbled
 * - Improve feature cards so they feel more useful and polished
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert app/page.tsx to v4.5 if this layout does not test cleanly
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

              <nav style={nav} aria-label="Homepage navigation">
                <a href="#features" style={navLink}>
                  Features
                </a>
                <a href="#how-it-works" style={navLink}>
                  How It Works
                </a>
                <a href="/guides" style={navLink}>
                  Guides
                </a>
                <a href="/contact" style={navLink}>
                  Contact
                </a>
              </nav>

              <a href="/how-it-works#schedule-tool" style={navButton}>
                <span style={navButtonMain}>Schedule a Meeting</span>
                <span style={navButtonSub}>Free to try — no sign-up</span>
              </a>
            </header>

            <section style={heroSection}>
              <div style={heroLeft}>
                <p style={eyebrow}>Trusted Time Zone Meeting Planner</p>

                <h1 style={heroHeading}>
                  Find the Best Meeting Time Across Time Zones
                </h1>

                <p style={heroText}>
                  Compare local times, avoid scheduling confusion, and choose a
                  meeting window that works better for everyone.
                </p>

                <div style={trustRow}>
                  <span>100% Free to Try</span>
                  <span>No Sign-up</span>
                  <span>Works Worldwide</span>
                </div>

                <div style={heroBulletBox}>
                  <div style={heroBullet}>
                    <strong>Compare two cities instantly</strong>
                    <span>See local times side by side before you schedule.</span>
                  </div>

                  <div style={heroBullet}>
                    <strong>Find recommended meeting windows</strong>
                    <span>Quickly pick a practical time for both locations.</span>
                  </div>

                  <div style={heroBullet}>
                    <strong>Start without an account</strong>
                    <span>Use the planner first, then upgrade later if needed.</span>
                  </div>
                </div>
              </div>

              <div style={plannerCard}>
                <div style={plannerCardHeader}>
                  <div>
                    <p style={plannerEyebrow}>Planner Preview</p>
                    <h2 style={plannerTitle}>Recommended meeting window</h2>
                  </div>

                  <span style={plannerBadge}>Free</span>
                </div>

                <div style={cityGrid}>
                  <div style={cityCard}>
                    <div style={cityHeader}>
                      <strong>New York, USA</strong>
                      <img
                        src="https://flagcdn.com/w40/us.png"
                        alt="United States flag"
                        style={flagImage}
                      />
                    </div>

                    <span style={labelText}>Current Time</span>
                    <strong style={timeText}>9:00 AM EDT</strong>
                    <span style={subText}>Local time</span>
                  </div>

                  <div style={cityCard}>
                    <div style={cityHeader}>
                      <strong>London, UK</strong>
                      <img
                        src="https://flagcdn.com/w40/gb.png"
                        alt="United Kingdom flag"
                        style={flagImage}
                      />
                    </div>

                    <span style={labelText}>Current Time</span>
                    <strong style={timeText}>2:00 PM BST</strong>
                    <span style={subText}>Same meeting time</span>
                  </div>
                </div>

                <div style={durationRow}>
                  <span>Meeting Duration</span>
                  <strong>60 minutes</strong>
                </div>

                <div style={bestTimeCard}>
                  <span style={bestTimeLabel}>Best Meeting Time</span>
                  <strong>New York: 9:00 AM – 10:00 AM</strong>
                  <strong>London: 2:00 PM – 3:00 PM</strong>
                </div>

                <a href="/how-it-works#schedule-tool" style={plannerButton}>
                  Schedule a Meeting
                </a>

                <p style={plannerFreeNote}>Free to try — no sign-up required.</p>
              </div>
            </section>

            <section id="features" style={featureStrip}>
              <div style={featureCard}>
                <span style={featureIcon}>◷</span>
                <strong>Live Time Comparison</strong>
                <span>Check both locations before choosing a meeting time.</span>
              </div>

              <div style={featureCard}>
                <span style={featureIcon}>↯</span>
                <strong>Faster Scheduling</strong>
                <span>Reduce long message threads and timezone mistakes.</span>
              </div>

              <div style={featureCard}>
                <span style={featureIcon}>♙</span>
                <strong>Remote Team Friendly</strong>
                <span>Useful for clients, teams, freelancers, and partners.</span>
              </div>

              <div style={featureCard}>
                <span style={featureIcon}>♡</span>
                <strong>Free to Start</strong>
                <span>No account required to test your meeting time.</span>
              </div>
            </section>

            <section id="how-it-works" style={howSection}>
              <div style={sectionHeader}>
                <h2 style={sectionTitle}>How Best Meeting Time Works</h2>
                <p style={sectionSubtitle}>
                  A simple way to compare locations and pick a practical meeting
                  window.
                </p>
              </div>

              <div style={howGrid}>
                <div style={howCard}>
                  <span style={stepNumber}>1</span>
                  <strong>Select locations</strong>
                  <span>Choose the cities or time zones for your meeting.</span>
                </div>

                <div style={howCard}>
                  <span style={stepNumber}>2</span>
                  <strong>Compare local times</strong>
                  <span>View both locations side by side before scheduling.</span>
                </div>

                <div style={howCard}>
                  <span style={stepNumber}>3</span>
                  <strong>Pick the best window</strong>
                  <span>Use recommended times to schedule with confidence.</span>
                </div>
              </div>
            </section>

            <section id="resources" style={resourcesSection}>
              <div style={sectionHeader}>
                <h2 style={sectionTitle}>
                  Helpful Resources to Schedule Better Meetings
                </h2>

                <p style={sectionSubtitle}>
                  Guides and tips to help you collaborate across time zones.
                </p>
              </div>

              <div style={resourcesGrid}>
                <a
                  href="/how-to-schedule-meetings-across-time-zones"
                  style={resourceCard}
                >
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
                <div style={ctaBandText}>
                  <span>Ready to find the best time for your next meeting?</span>
                  <small>Start free — no sign-up required.</small>
                </div>

                <a href="/how-it-works#schedule-tool" style={ctaButton}>
                  Schedule a Free Meeting
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
  margin: "18px auto 0",
  padding: "18px 18px 28px",
  border: "1px solid rgba(237,233,254,0.9)",
  boxShadow: "0 24px 70px rgba(30,27,75,0.18)",
};

const header = {
  minHeight: "66px",
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
  padding: "9px 16px",
  borderRadius: "8px",
  fontWeight: 900,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.15,
  minWidth: "154px",
  boxShadow: "0 10px 22px rgba(91,33,182,0.22)",
};

const navButtonMain = {
  fontSize: "13px",
  fontWeight: 900,
};

const navButtonSub = {
  fontSize: "10px",
  fontWeight: 800,
  opacity: 0.9,
};

const heroSection = {
  display: "grid",
  gridTemplateColumns: "0.9fr 1fr",
  alignItems: "center",
  gap: "42px",
  padding: "24px 10px 22px",
};

const heroLeft = {
  maxWidth: "500px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 13px",
  padding: "7px 13px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "12px",
  fontWeight: 900,
};

const heroHeading = {
  color: "#111827",
  fontSize: "clamp(36px, 4vw, 48px)",
  lineHeight: "1.06",
  margin: "0 0 14px",
  fontWeight: 950,
  letterSpacing: "-0.04em",
};

const heroText = {
  color: "#374151",
  fontSize: "15px",
  lineHeight: "1.55",
  margin: "0 0 14px",
  maxWidth: "470px",
};

const trustRow = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "14px",
  color: "#4c1d95",
  fontSize: "12px",
  fontWeight: 850,
  marginBottom: "14px",
};

const heroBulletBox = {
  display: "grid",
  gap: "8px",
  marginTop: "8px",
};

const heroBullet = {
  background: "#faf9ff",
  border: "1px solid #ede9fe",
  borderRadius: "10px",
  padding: "9px 11px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "2px",
  color: "#374151",
  fontSize: "12px",
  lineHeight: "1.35",
};

const plannerCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "18px",
  boxShadow: "0 22px 55px rgba(76,29,149,0.16)",
};

const plannerCardHeader = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "12px",
  marginBottom: "14px",
};

const plannerEyebrow = {
  color: "#6d28d9",
  fontSize: "11px",
  fontWeight: 950,
  margin: "0 0 4px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const plannerTitle = {
  color: "#111827",
  fontSize: "18px",
  fontWeight: 950,
  margin: 0,
};

const plannerBadge = {
  background: "#fef3c7",
  color: "#92400e",
  borderRadius: "999px",
  padding: "5px 9px",
  fontSize: "10px",
  fontWeight: 950,
};

const cityGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px",
  marginBottom: "12px",
};

const cityCard = {
  background: "#f8f7ff",
  border: "1px solid #ddd6fe",
  borderRadius: "12px",
  padding: "13px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "5px",
};

const cityHeader = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  color: "#111827",
  fontSize: "13px",
  fontWeight: 900,
};

const flagImage = {
  width: "32px",
  height: "22px",
  objectFit: "cover" as const,
  borderRadius: "3px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
};

const labelText = {
  color: "#6b7280",
  fontSize: "10px",
  fontWeight: 900,
  textTransform: "uppercase" as const,
};

const timeText = {
  color: "#111827",
  fontSize: "22px",
  fontWeight: 950,
  letterSpacing: "-0.02em",
};

const subText = {
  color: "#6b7280",
  fontSize: "11px",
};

const durationRow = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "10px",
  padding: "11px 12px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#374151",
  fontSize: "12px",
  fontWeight: 900,
  marginBottom: "12px",
};

const bestTimeCard = {
  background: "#fef3c7",
  color: "#78350f",
  border: "1px solid #fde68a",
  borderRadius: "12px",
  padding: "13px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "5px",
  fontSize: "12px",
  fontWeight: 900,
  marginBottom: "12px",
};

const bestTimeLabel = {
  color: "#78350f",
  fontSize: "12px",
  fontWeight: 950,
};

const plannerButton = {
  display: "block",
  width: "100%",
  background: "#5b21b6",
  color: "#ffffff",
  textAlign: "center" as const,
  padding: "12px",
  borderRadius: "9px",
  fontSize: "13px",
  fontWeight: 900,
  textDecoration: "none",
};

const plannerFreeNote = {
  margin: "9px 0 0",
  color: "#5b21b6",
  fontSize: "11px",
  fontWeight: 900,
  textAlign: "center" as const,
};

const featureStrip = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "12px",
  margin: "8px 0 14px",
};

const featureCard = {
  background: "#ffffff",
  border: "1px solid #ede9fe",
  borderRadius: "12px",
  padding: "13px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "5px",
  boxShadow: "0 8px 18px rgba(0,0,0,0.04)",
  fontSize: "11px",
};

const featureIcon = {
  width: "20px",
  height: "20px",
  borderRadius: "7px",
  background: "#ede9fe",
  color: "#5b21b6",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "11px",
  fontWeight: 900,
};

const howSection = {
  marginTop: "14px",
  padding: "20px 16px",
  background: "#ffffff",
  borderRadius: "14px",
  border: "1px solid #ede9fe",
};

const sectionHeader = {
  textAlign: "center" as const,
  marginBottom: "14px",
};

const sectionTitle = {
  fontSize: "22px",
  fontWeight: 950,
  color: "#111827",
  margin: "0 0 6px",
};

const sectionSubtitle = {
  color: "#6b7280",
  fontSize: "13px",
  margin: 0,
};

const howGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
};

const howCard = {
  background: "#f9fafb",
  border: "1px solid #ede9fe",
  borderRadius: "12px",
  padding: "14px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "6px",
  fontSize: "12px",
  lineHeight: "1.4",
};

const stepNumber = {
  width: "26px",
  height: "26px",
  borderRadius: "999px",
  background: "#ede9fe",
  color: "#5b21b6",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  fontWeight: 950,
};

const resourcesSection = {
  marginTop: "14px",
  padding: "20px 16px",
  background: "#ffffff",
  borderRadius: "14px",
  border: "1px solid #ede9fe",
};

const resourcesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "10px",
  marginBottom: "14px",
};

const resourceCard = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "5px",
  background: "#f9fafb",
  border: "1px solid #ede9fe",
  borderRadius: "12px",
  padding: "11px",
  textDecoration: "none",
  color: "#111827",
  fontSize: "10px",
  lineHeight: "1.25",
};

const resourceIcon = {
  width: "20px",
  height: "20px",
  borderRadius: "7px",
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
  gap: "14px",
  background: "#5b21b6",
  color: "#ffffff",
  padding: "14px 16px",
  borderRadius: "12px",
  fontWeight: 900,
  fontSize: "12px",
};

const ctaBandText = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "3px",
};

const ctaButton = {
  background: "#facc15",
  color: "#111827",
  padding: "9px 13px",
  borderRadius: "8px",
  fontSize: "11px",
  fontWeight: 900,
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
};
