/**
 * File: app/page.tsx
 * Version: v4.7 (HOMEPAGE BRAND + SECTION CLARITY CLEANUP)
 * Date: 2026-05-04
 *
 * PURPOSE:
 * - Remove off-brand yellow/brown planner highlight
 * - Remove misleading “Free” badge from planner preview
 * - Improve hero headline and SEO-supporting value cards
 * - Make Features and How It Works sections clearer when nav links are clicked
 * - Keep homepage as marketing-only preview
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert app/page.tsx to v4.6 if this layout does not test cleanly
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
                <a href="#features" style={navLink}>Features</a>
                <a href="#how-it-works" style={navLink}>How It Works</a>
                <a href="/guides" style={navLink}>Guides</a>
                <a href="/contact" style={navLink}>Contact</a>
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
  Find the Best Time to Meet Across Time Zones
</h1>

                <div style={heroBulletBox}>
                  <div style={heroBullet}>
                    <strong>Compare cities and time zones instantly</strong>
                    <span>
                      View local times side by side for teams, clients, freelancers,
                      and remote meetings across different regions.
                    </span>
                  </div>

                  <div style={heroBullet}>
                    <strong>Find recommended meeting windows faster</strong>
                    <span>
                      Avoid manual time zone conversion and quickly choose a practical
                      meeting time that works for both locations.
                    </span>
                  </div>

                  <div style={heroBullet}>
                    <strong>Start planning without an account</strong>
                    <span>
                      Use the meeting time planner first, then unlock more scheduling
                      options if you need premium planning tools.
                    </span>
                  </div>
                </div>

                <div style={trustRow}>
                  <span>Free to Try</span>
                  <span>No Sign-up</span>
                  <span>Works Worldwide</span>
                </div>
              </div>

              <div style={plannerCard}>
                <div style={plannerCardHeader}>
                  <div>
                    <p style={plannerEyebrow}>Planner Preview</p>
                    <h2 style={plannerTitle}>Recommended meeting window</h2>
                  </div>
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

            <section id="features" style={featuresSection}>
              <div style={sectionHeader}>
                <p style={sectionEyebrow}>Features</p>
                <h2 style={sectionTitle}>Plan Meetings Across Time Zones Faster</h2>
                <p style={sectionSubtitle}>
                  Best Meeting Time helps you compare cities, review local times,
                  and choose better meeting windows without guesswork.
                </p>
              </div>

              <div style={featureGrid}>
                <div style={featureCard}>
                  <span style={featureLabel}>01</span>
                  <strong>Live Time Comparison</strong>
                  <span>Check both locations before choosing a meeting time.</span>
                </div>

                <div style={featureCard}>
                  <span style={featureLabel}>02</span>
                  <strong>Recommended Meeting Windows</strong>
                  <span>See practical time options for both cities.</span>
                </div>

                <div style={featureCard}>
                  <span style={featureLabel}>03</span>
                  <strong>Remote Team Scheduling</strong>
                  <span>Useful for teams, consultants, clients, and partners.</span>
                </div>

                <div style={featureCard}>
                  <span style={featureLabel}>04</span>
                  <strong>Free Planning Start</strong>
                  <span>Begin without creating an account or signing in.</span>
                </div>
              </div>
            </section>

            <section id="how-it-works" style={howSection}>
              <div style={sectionHeader}>
                <p style={sectionEyebrow}>How It Works</p>
                <h2 style={sectionTitle}>How Best Meeting Time Works</h2>
                <p style={sectionSubtitle}>
                  A simple three-step flow for scheduling across time zones.
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
                <p style={sectionEyebrow}>Resources</p>
                <h2 style={sectionTitle}>
                  Helpful Resources to Schedule Better Meetings
                </h2>
                <p style={sectionSubtitle}>
                  Guides and tips to help you collaborate across time zones.
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
  gridTemplateColumns: "0.95fr 1fr",
  alignItems: "start",
  gap: "36px",
  padding: "18px 10px 12px",
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

const trustRow = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "14px",
  color: "#4c1d95",
  fontSize: "12px",
  fontWeight: 850,
  marginTop: "14px",
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
  background: "#ede9fe",
  color: "#5b21b6",
  border: "1px solid #c4b5fd",
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
  color: "#4c1d95",
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

const featuresSection = {
  marginTop: "8px",
  padding: "20px 16px",
  background: "#ffffff",
  borderRadius: "14px",
  border: "1px solid #ede9fe",
  scrollMarginTop: "24px",
};

const sectionHeader = {
  textAlign: "center" as const,
  marginBottom: "14px",
};

const sectionEyebrow = {
  color: "#6d28d9",
  fontSize: "11px",
  fontWeight: 950,
  margin: "0 0 4px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
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

const featureGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "12px",
};

const featureCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "14px",
  padding: "18px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "8px",
  fontSize: "13px",
  lineHeight: "1.5",
  boxShadow: "0 10px 25px rgba(91,33,182,0.08)",
};

const featureLabel = {
  display: "none",
};

const howSection = {
  marginTop: "14px",
  padding: "20px 16px",
  background: "#ffffff",
  borderRadius: "14px",
  border: "1px solid #ede9fe",
  scrollMarginTop: "24px",
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
  display: "none",
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
  gap: "6px",
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "12px",
  padding: "14px",
  textDecoration: "none",
  color: "#111827",
  fontSize: "12px",
  lineHeight: "1.4",
  fontWeight: 700,
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
