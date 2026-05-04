/**
 * File: app/page.tsx
 * Version: v4.4 (HOMEPAGE CTA + PLANNER PREVIEW ALIGNMENT)
 * Date: 2026-05-04
 *
 * PURPOSE:
 * - Clarify homepage navigation and CTA language
 * - Remove confusing “Try Tool” language from homepage
 * - Add “Free to try — no sign-up” reassurance to the primary CTA
 * - Update homepage preview card to better match the redesigned planner flow
 * - Keep homepage as marketing-only preview
 * - Send users to the real scheduling planner section
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert app/page.tsx to v4.3 if this layout does not test cleanly
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
                <a href="#how-it-works-preview" style={navLink}>
                  How It Works
                </a>
                <a href="#features" style={navLink}>
                  Features
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
                <p style={mockTitle}>Meeting Time Preview</p>

                <div style={plannerPreviewGrid}>
                  <div style={cityPreviewCard}>
                    <div style={cityTopRow}>
                      <strong style={cityName}>New York, USA</strong>
                      <span style={flagText}>🇺🇸</span>
                    </div>
                    <span style={cityLabel}>Current Time</span>
                    <strong style={cityTime}>9:00 AM EDT</strong>
                    <span style={cityDate}>Local time</span>
                  </div>

                  <div style={cityPreviewCard}>
                    <div style={cityTopRow}>
                      <strong style={cityName}>London, UK</strong>
                      <span style={flagText}>🇬🇧</span>
                    </div>
                    <span style={cityLabel}>Current Time</span>
                    <strong style={cityTime}>2:00 PM BST</strong>
                    <span style={cityDate}>Same meeting time</span>
                  </div>
                </div>

                <div style={durationPreview}>
                  <span>Meeting Duration</span>
                  <strong>60 minutes</strong>
                </div>

                <div style={recommendedPreview}>
                  <span style={recommendedLabel}>Recommended meeting time</span>
                  <strong>New York: 9:00 AM – 10:00 AM</strong>
                  <strong>London: 2:00 PM – 3:00 PM</strong>
                </div>

                <a href="/how-it-works#schedule-tool" style={mockButton}>
                  Schedule a Meeting
                </a>

                <p style={freeNote}>Free to try — no sign-up required.</p>
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
                <span>Free to try, no sign-up.</span>
              </div>
            </section>

            <section id="how-it-works-preview" style={howItWorksSection}>
              <div style={howItWorksHeader}>
                <h2 style={sectionTitle}>How Best Meeting Time Works</h2>
                <p style={sectionSubtitle}>
                  Pick two locations, compare local times, and choose a meeting
                  window that works better for everyone.
                </p>
              </div>

              <div style={howItWorksGrid}>
                <div style={howCard}>
                  <strong>1. Select locations</strong>
                  <span>Choose the cities or time zones for your meeting.</span>
                </div>

                <div style={howCard}>
                  <strong>2. Compare times</strong>
                  <span>See both local times side by side.</span>
                </div>

                <div style={howCard}>
                  <strong>3. Pick a window</strong>
                  <span>Use recommended meeting times to schedule faster.</span>
                </div>
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
  margin: "0 auto",
  padding: "20px 18px 28px",
};

const header = {
  minHeight: "72px",
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
  borderRadius: "7px",
  fontWeight: 900,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.15,
  minWidth: "150px",
};

const navButtonMain = {
  fontSize: "13px",
  fontWeight: 900,
};

const navButtonSub = {
  fontSize: "10px",
  fontWeight: 800,
  opacity: 0.86,
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
  borderRadius: "12px",
  padding: "14px",
  boxShadow: "0 10px 30px rgba(76,29,149,0.12)",
};

const mockTitle = {
  color: "#4c1d95",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 10px",
};

const plannerPreviewGrid = {
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

const cityTopRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
};

const cityName = {
  fontSize: "11px",
  fontWeight: 900,
  color: "#111827",
};

const flagText = {
  fontSize: "18px",
  lineHeight: 1,
};

const cityLabel = {
  color: "#6b7280",
  fontSize: "9px",
  fontWeight: 900,
  textTransform: "uppercase" as const,
};

const cityTime = {
  fontSize: "16px",
  fontWeight: 950,
  color: "#111827",
};

const cityDate = {
  fontSize: "10px",
  color: "#6b7280",
};

const durationPreview = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "8px",
  padding: "9px 10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#4b5563",
  fontSize: "11px",
  fontWeight: 800,
  marginBottom: "10px",
};

const recommendedPreview = {
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

const recommendedLabel = {
  color: "#166534",
  fontSize: "11px",
  fontWeight: 950,
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

const freeNote = {
  margin: "7px 0 0",
  color: "#5b21b6",
  fontSize: "10px",
  fontWeight: 900,
  textAlign: "center" as const,
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

const howItWorksSection = {
  marginTop: "8px",
  padding: "16px 14px",
  background: "#ffffff",
  borderRadius: "10px",
  border: "1px solid #ede9fe",
};

const howItWorksHeader = {
  textAlign: "center" as const,
  marginBottom: "12px",
};

const howItWorksGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
};

const howCard = {
  background: "#f9fafb",
  border: "1px solid #ede9fe",
  borderRadius: "9px",
  padding: "12px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "5px",
  fontSize: "11px",
  lineHeight: "1.35",
};

const resourcesSection = {
  marginTop: "12px",
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
  gap: "14px",
  background: "#5b21b6",
  color: "#ffffff",
  padding: "12px 16px",
  borderRadius: "9px",
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
  padding: "8px 12px",
  borderRadius: "7px",
  fontSize: "11px",
  fontWeight: 900,
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
};
