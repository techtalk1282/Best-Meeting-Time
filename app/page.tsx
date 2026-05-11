/**
 * File: app/page.tsx
 * Version: v4.8 (HOMEPAGE MOBILE OVERFLOW FIX)
 * Date: 2026-05-11
 *
 * PURPOSE:
 * - Fix homepage mobile and tablet horizontal overflow
 * - Preserve current homepage marketing layout and content
 * - Add responsive class-based overrides for mobile grids, nav, cards, and CTA sections
 * - Keep homepage as marketing-only preview
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 * - No ToolPreviewMobile changes
 *
 * ROLLBACK:
 * - Revert app/page.tsx to v4.7 if this layout does not test cleanly
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
      <style>{`
        html,
        body {
          max-width: 100%;
          overflow-x: hidden;
        }

        @media (max-width: 1100px) {
          .bmt-home-wrap {
            width: calc(100% - 24px) !important;
            max-width: 100% !important;
            margin: 12px auto 0 !important;
            padding: 14px !important;
            overflow: hidden !important;
            box-sizing: border-box !important;
          }

          .bmt-home-header {
            display: grid !important;
            grid-template-columns: 1fr !important;
            justify-items: center !important;
            gap: 10px !important;
          }

          .bmt-home-nav {
            width: 100% !important;
            display: flex !important;
            overflow-x: auto !important;
            justify-content: flex-start !important;
            padding-bottom: 6px !important;
            scrollbar-width: thin;
          }

          .bmt-home-nav-button {
            display: none !important;
          }

          .bmt-home-hero {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            padding: 14px 0 8px !important;
          }

          .bmt-home-left {
            max-width: 100% !important;
          }

          .bmt-home-planner-card {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }

          .bmt-home-city-grid,
          .bmt-home-feature-grid,
          .bmt-home-how-grid,
          .bmt-home-resources-grid {
            grid-template-columns: 1fr !important;
          }

          .bmt-home-premium-row {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
          }

          .bmt-home-cta-band {
            display: grid !important;
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
        }

        @media (max-width: 480px) {
          .bmt-home-brand-logo {
            width: 160px !important;
            height: auto !important;
          }

          .bmt-home-heading {
            font-size: 34px !important;
          }

          .bmt-home-premium-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <VerifyPremium />

      <LayoutShell
        hero={
          <main className="bmt-home-wrap" style={pageWrap}>
            <header className="bmt-home-header" style={header}>
              <a href="/" style={brandLink} aria-label="Best Meeting Time home">
                <img
                  className="bmt-home-brand-logo"
                  src="/images/branding/logo.png"
                  alt="Best Meeting Time"
                  style={brandLogo}
                />
              </a>

              <nav
                className="bmt-home-nav"
                style={nav}
                aria-label="Homepage navigation"
              >
                <a href="/" style={navLink}>
                  Home
                </a>
                <a href="/how-it-works" style={navLink}>
                  Schedule a Meeting
                </a>
                <a href="/features" style={navLink}>
                  Features
                </a>
                <a href="/guides" style={navLink}>
                  Guides
                </a>
                <a href="/blog" style={navLink}>
                  Blog
                </a>
                <a href="/about" style={navLink}>
                  About
                </a>
                <a href="/contact" style={navLink}>
                  Contact
                </a>
              </nav>

              <a
                href="/how-it-works#schedule-tool"
                className="bmt-home-nav-button"
                style={navButton}
              >
                <span style={navButtonMain}>Schedule a Meeting</span>
                <span style={navButtonSub}>Free to try — no sign-up</span>
              </a>
            </header>

            <section className="bmt-home-hero" style={heroSection}>
              <div className="bmt-home-left" style={heroLeft}>
                <p style={eyebrow}>Trusted Time Zone Meeting Planner</p>

                <h1 className="bmt-home-heading" style={heroHeading}>
                  Schedule the Best Meeting Times Worldwide
                </h1>

                <p style={heroSubtitle}>
                  Smarter scheduling across time zones — fast, simple, and
                  accurate.
                </p>

                <div style={heroBulletBox}>
                  <div style={heroBullet}>
                    <strong>Compare cities and time zones instantly</strong>
                    <span>
                      View local times side by side for teams, clients,
                      freelancers, and remote meetings across different regions.
                    </span>
                  </div>

                  <div style={heroBullet}>
                    <strong>Find recommended meeting windows faster</strong>
                    <span>
                      Avoid manual time zone conversion and quickly choose a
                      practical meeting time that works for both locations.
                    </span>
                  </div>

                  <div style={heroBullet}>
                    <strong>Start planning without an account</strong>
                    <span>
                      Use the meeting time planner first, then unlock more
                      scheduling options if you need premium planning tools.
                    </span>
                  </div>
                </div>

                <div style={trustRow}>
                  <span>Free to Try</span>
                  <span>No Sign-up</span>
                  <span>Works Worldwide</span>
                </div>
              </div>

              <div className="bmt-home-planner-card" style={plannerCard}>
                <div style={plannerCardHeader}>
                  <div>
                    <p style={plannerEyebrow}>Planner Preview</p>
                    <h2 style={plannerTitle}>Recommended meeting window</h2>
                  </div>
                </div>

                <div className="bmt-home-city-grid" style={cityGrid}>
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

                <p style={plannerFreeNote}>
                  Free to try — no sign-up required.
                </p>
              </div>
            </section>

            <section id="premium-tools" style={premiumToolsSection}>
              <div style={premiumToolsHeader}>
                <p style={sectionEyebrow}>Premium Tools</p>
                <h2 style={sectionTitle}>
                  Plan, Share, and Add Meetings Faster
                </h2>
                <p style={sectionSubtitle}>
                  After finding the best meeting time, unlock planning tools to
                  share your selected window and add it to your calendar
                  workflow.
                </p>
              </div>

              <div className="bmt-home-premium-row" style={premiumToolRow}>
                <a href="/how-it-works#schedule-tool" style={premiumToolPill}>
                  Share Link
                </a>

                <a href="/how-it-works#schedule-tool" style={premiumToolPill}>
                  Add to Google
                </a>

                <a href="/how-it-works#schedule-tool" style={premiumToolPill}>
                  Add to Outlook
                </a>

                <a href="/how-it-works#schedule-tool" style={premiumToolPill}>
                  Add to Calendar
                </a>
              </div>
            </section>

            <section id="features" style={featuresSection}>
              <div style={sectionHeader}>
                <p style={sectionEyebrow}>Features</p>
                <h2 style={sectionTitle}>
                  Plan Meetings Across Time Zones Faster
                </h2>
                <p style={sectionSubtitle}>
                  Best Meeting Time helps you compare cities, review local
                  times, and choose better meeting windows without guesswork.
                </p>
              </div>

              <div className="bmt-home-feature-grid" style={featureGrid}>
                <div style={featureCard}>
                  <span style={featureLabel}>01</span>
                  <strong>Live Time Comparison</strong>
                  <span>
                    Check both locations before choosing a meeting time.
                  </span>
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

              <div className="bmt-home-how-grid" style={howGrid}>
                <div style={howCard}>
                  <span style={stepNumber}>1</span>
                  <strong>Select locations</strong>
                  <span>Choose the cities or time zones for your meeting.</span>
                </div>

                <div style={howCard}>
                  <span style={stepNumber}>2</span>
                  <strong>Compare local times</strong>
                  <span>
                    View both locations side by side before scheduling.
                  </span>
                </div>

                <div style={howCard}>
                  <span style={stepNumber}>3</span>
                  <strong>Pick the best window</strong>
                  <span>
                    Use recommended times to schedule with confidence.
                  </span>
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

              <div className="bmt-home-resources-grid" style={resourcesGrid}>
                <a
                  href="/how-to-schedule-meetings-across-time-zones"
                  style={resourceCard}
                >
                  <strong>How to Schedule Across Time Zones</strong>
                  <span>Step-by-step guide for global teams.</span>
                </a>

                <a
                  href="/best-meeting-times-remote-teams"
                  style={resourceCard}
                >
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

              <div className="bmt-home-cta-band" style={ctaBand}>
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
  textDecoration: "none",
  flexShrink: 0,
};

const brandLogo = {
  display: "block",
  width: "210px",
  height: "54px",
  objectFit: "contain" as const,
  objectPosition: "left center",
};

const nav = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
};

const navLink = {
  color: "#374151",
  fontSize: "13px",
  fontWeight: 700,
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
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
  minWidth: "146px",
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

const heroSubtitle = {
  color: "#6b7280",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 14px",
  fontWeight: 500,
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

const premiumToolsSection = {
  marginTop: "8px",
  padding: "18px 16px",
  background: "#ffffff",
  borderRadius: "14px",
  border: "1px solid #ede9fe",
  scrollMarginTop: "24px",
};

const premiumToolsHeader = {
  textAlign: "center" as const,
  marginBottom: "12px",
};

const premiumToolRow = {
  display: "flex",
  flexWrap: "wrap" as const,
  justifyContent: "center",
  gap: "10px",
};

const premiumToolPill = {
  background: "#facc15",
  color: "#111827",
  padding: "10px 16px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: 900,
  textDecoration: "none",
  boxShadow: "0 8px 18px rgba(250,204,21,0.22)",
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
  marginTop: "10px",
};

const howCard = {
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
  gap: "12px",
  marginTop: "10px",
  marginBottom: "14px",
};

const resourceCard = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "8px",
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "14px",
  padding: "18px",
  textDecoration: "none",
  color: "#111827",
  fontSize: "13px",
  lineHeight: "1.5",
  fontWeight: 700,
  boxShadow: "0 10px 25px rgba(91,33,182,0.08)",
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
