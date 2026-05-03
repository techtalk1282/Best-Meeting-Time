/**
 * File: app/page.tsx
 * Version: v4.1 (TARGET MOCKUP HOMEPAGE REBUILD)
 * Date: 2026-05-03
 *
 * PURPOSE:
 * - Rebuild homepage to closely match the white SaaS-style V3 target mockup
 * - Preserve the working meeting tool by keeping HeroSection untouched
 * - Preserve VerifyPremium, PremiumFeaturesSection, FooterSection, and protected premium behavior
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection logic changes
 *
 * ROLLBACK:
 * - Revert app/page.tsx to v4.0 or v3.7 if this layout does not test cleanly
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
        hero={
          <div style={pageShell}>
            <header style={header}>
              <a href="/" style={brandLink}>
                <span style={brandMark}>⌘</span>
                <span>Best Meeting Time</span>
              </a>

              <nav style={navLinks}>
                <a href="/how-it-works" style={navLink}>How It Works</a>
                <a href="#features" style={navLink}>Features</a>
                <a href="/guides" style={navLink}>Guides</a>
                <a href="/contact" style={navLink}>Contact</a>
              </nav>

              <a href="#schedule-tool" style={navButton}>
                Try the Tool Free
              </a>
            </header>

            <section style={heroSection}>
              <div style={heroContent}>
                <p style={eyebrow}>The Trusted Time Zone Meeting Planner</p>

                <h1 style={heroHeading}>
                  Find the Best Meeting Time Across Any Time Zone
                </h1>

                <p style={heroSubtext}>
                  Smart scheduling for global teams. Save hours of back-and-forth
                  and find the perfect time for everyone, instantly.
                </p>

                <div style={heroTrustRow}>
                  <span>100% Free to Use</span>
                  <span>No Sign-up</span>
                  <span>Works Worldwide</span>
                </div>

                <div style={heroButtonRow}>
                  <a href="#schedule-tool" style={primaryButton}>
                    Find Best Time
                  </a>

                  <a href="/how-it-works" style={secondaryButton}>
                    See How It Works
                  </a>
                </div>
              </div>

              <div style={heroMockCard}>
                <div style={mockHeaderRow}>
                  <span style={mockTitle}>Select Time Zones</span>
                  <span style={mockBadge}>Best Time</span>
                </div>

                <div style={mockFieldGroup}>
                  <label style={mockLabel}>From Zone</label>
                  <div style={mockSelect}>New York, USA (EDT)</div>
                </div>

                <div style={mockFieldGroup}>
                  <label style={mockLabel}>To Zone</label>
                  <div style={mockSelect}>London, UK (BST)</div>
                </div>

                <div style={mockFieldGroup}>
                  <label style={mockLabel}>Meeting Duration</label>
                  <div style={mockSelect}>60 minutes</div>
                </div>

                <div style={mockGridWrap}>
                  <div style={mockGridLabels}>
                    <span>8 AM</span>
                    <span>10 AM</span>
                    <span>12 PM</span>
                    <span>2 PM</span>
                    <span>4 PM</span>
                  </div>

                  <div style={mockGrid}>
                    <span style={mockCellLight}></span>
                    <span style={mockCellLight}></span>
                    <span style={mockCellMid}></span>
                    <span style={mockCellDark}></span>
                    <span style={mockCellBest}>Best Time</span>

                    <span style={mockCellLight}></span>
                    <span style={mockCellMid}></span>
                    <span style={mockCellDark}></span>
                    <span style={mockCellMid}></span>
                    <span style={mockCellLight}></span>
                  </div>
                </div>

                <a href="#schedule-tool" style={mockButton}>
                  Find Best Time
                </a>
              </div>
            </section>
          </div>
        }

        toolPreview={
          <>
            <section id="features" style={featureStrip}>
              <div style={featureGrid}>
                <div style={featureCard}>
                  <strong>Accurate & Reliable</strong>
                  <span>Use real time zone offsets.</span>
                </div>

                <div style={featureCard}>
                  <strong>Save Hours</strong>
                  <span>End back-and-forth emails.</span>
                </div>

                <div style={featureCard}>
                  <strong>For Teams of Any Size</strong>
                  <span>Perfect for remote teams.</span>
                </div>

                <div style={featureCard}>
                  <strong>100% Free</strong>
                  <span>Free forever, no catch.</span>
                </div>
              </div>
            </section>

            <section style={resourcesSection}>
              <div style={sectionHeader}>
                <h2 style={sectionTitle}>
                  Helpful Resources to Schedule Better Meetings
                </h2>

                <p style={sectionSubtitle}>
                  In-depth guides and tips to help you collaborate across time zones.
                </p>
              </div>

              <div style={resourceGrid}>
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

                <a href="#schedule-tool" style={ctaButton}>
                  Try the Free Tool Now
                </a>
              </div>
            </section>

            <section id="schedule-tool" style={toolSection}>
              <div style={toolIntro}>
                <p style={eyebrow}>Use the Tool</p>

                <h2 style={toolTitle}>
                  Compare Time Zones and Find Your Best Meeting Window
                </h2>

                <p style={toolSubtitle}>
                  Select two locations, review the overlap, and choose a time
                  that works better for everyone.
                </p>
              </div>

              <HeroSection />
            </section>
          </>
        }

        premiumFeatures={null}
        bonusFeatures={
          <main style={mainContent}>
            <section style={citySection}>
              <h2 style={sectionTitle}>
                Compare Popular Cities Across Time Zones
              </h2>

              <div style={cityLinks}>
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
            </section>

            <section style={contentPanel}>
              <h2 style={panelHeading}>
                How to Schedule Meetings Across Time Zones Without Mistakes
              </h2>

              <p style={text}>
                Scheduling meetings across time zones is one of the most common
                challenges for remote teams, global businesses, and freelancers.
                A time that looks convenient in one region can fall outside
                working hours in another, leading to missed calls, delays, or
                poor collaboration.
              </p>

              <p style={text}>
                The key to effective scheduling is understanding overlapping
                working hours. Instead of guessing or manually converting time
                zones, the most efficient approach is to compare both locations
                side-by-side and identify a shared window that works for all
                participants.
              </p>

              <h3 style={smallTitle}>Best Practices for Global Scheduling</h3>

              <ul style={textList}>
                <li>Prioritize overlapping business hours whenever possible</li>
                <li>Avoid early morning or late-night meetings for any participant</li>
                <li>Rotate meeting times to distribute inconvenience fairly</li>
                <li>Confirm daylight saving changes when scheduling internationally</li>
              </ul>
            </section>

            <section style={contentPanel}>
              <div style={{ textAlign: "center", marginBottom: "26px" }}>
                <h2 style={panelHeading}>Find the Best Meeting Time — Instantly</h2>

                <p style={panelIntro}>
                  Compare time zones instantly and find the best meeting time
                  between cities without guesswork. This simple time zone
                  converter and meeting planner helps you schedule across time
                  zones, visualize overlapping working hours, and confidently
                  choose the most productive time for your team.
                </p>
              </div>

              <div style={exampleCard}>
                <h3 style={smallTitle}>New York → London Meeting Time Example</h3>
                <p style={text}>New York: 9:00 AM</p>
                <p style={text}>London: 2:00 PM</p>
                <p style={text}>Overlap: 9AM – 12PM New York time</p>

                <p style={goldText}>
                  Best meeting window: 9AM – 12PM New York time
                </p>
              </div>

              <div style={infoGrid}>
                <div style={infoCard}>
                  <h3 style={smallTitle}>Who Uses This</h3>

                  <ul style={textList}>
                    <li>Remote teams working across multiple time zones</li>
                    <li>Consultants scheduling international client calls</li>
                    <li>Sales teams coordinating global meetings</li>
                    <li>Freelancers managing clients in different regions</li>
                  </ul>
                </div>

                <div style={infoCard}>
                  <h3 style={smallTitle}>The Challenge</h3>

                  <p style={text}>
                    Scheduling meetings across time zones is more complex than it
                    seems. A time that works for one participant may fall outside
                    normal working hours for another, leading to delays, missed
                    calls, or inefficient scheduling.
                  </p>
                </div>

                <div style={infoCard}>
                  <h3 style={smallTitle}>The Solution</h3>

                  <ul style={textList}>
                    <li>Instantly compare cities and their local times</li>
                    <li>Visualize overlapping working hours clearly</li>
                    <li>Identify the most convenient meeting window</li>
                    <li>Eliminate manual time conversion errors</li>
                  </ul>
                </div>
              </div>
            </section>

            <section style={premiumWrap}>
              <PremiumFeaturesSection />
            </section>
          </main>
        }
        footer={<FooterSection />}
      />
    </>
  );
}

/* STYLES */

const pageShell = {
  background: "#ffffff",
  color: "#1e1b4b",
};

const header = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "18px 20px",
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
  color: "#4c1d95",
  fontSize: "18px",
  fontWeight: 900,
  textDecoration: "none",
};

const brandMark = {
  width: "24px",
  height: "24px",
  borderRadius: "8px",
  background: "#ede9fe",
  color: "#5b21b6",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
};

const navLinks = {
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
  borderRadius: "8px",
  fontSize: "13px",
  fontWeight: 900,
  textDecoration: "none",
};

const heroSection = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "52px 20px 34px",
  display: "grid",
  gridTemplateColumns: "1.05fr 0.95fr",
  alignItems: "center",
  gap: "42px",
};

const heroContent = {
  maxWidth: "560px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 14px",
  padding: "8px 14px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "13px",
  fontWeight: 900,
};

const heroHeading = {
  color: "#111827",
  fontSize: "clamp(42px, 5.3vw, 64px)",
  lineHeight: "1.02",
  margin: "0 0 18px",
  fontWeight: 950,
  letterSpacing: "-0.045em",
};

const heroSubtext = {
  color: "#374151",
  fontSize: "17px",
  lineHeight: "1.6",
  margin: "0 0 20px",
};

const heroTrustRow = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "18px",
  color: "#4c1d95",
  fontSize: "13px",
  fontWeight: 800,
  marginBottom: "22px",
};

const heroButtonRow = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "12px",
};

const primaryButton = {
  display: "inline-block",
  background: "#5b21b6",
  color: "#ffffff",
  padding: "13px 20px",
  borderRadius: "8px",
  fontWeight: 900,
  textDecoration: "none",
  boxShadow: "0 12px 22px rgba(91,33,182,0.18)",
};

const secondaryButton = {
  display: "inline-block",
  background: "#ffffff",
  color: "#5b21b6",
  padding: "13px 20px",
  borderRadius: "8px",
  fontWeight: 900,
  textDecoration: "none",
  border: "1px solid #c4b5fd",
};

const heroMockCard = {
  background: "#ffffff",
  color: "#1e1b4b",
  borderRadius: "12px",
  padding: "22px",
  boxShadow: "0 18px 45px rgba(76,29,149,0.14)",
  border: "1px solid #e9d5ff",
};

const mockHeaderRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "16px",
};

const mockTitle = {
  color: "#4c1d95",
  fontSize: "13px",
  fontWeight: 900,
};

const mockBadge = {
  background: "#22c55e",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "6px 10px",
  fontSize: "12px",
  fontWeight: 900,
};

const mockFieldGroup = {
  marginBottom: "12px",
};

const mockLabel = {
  display: "block",
  color: "#6b7280",
  fontSize: "11px",
  fontWeight: 800,
  marginBottom: "5px",
};

const mockSelect = {
  background: "#f8f7ff",
  border: "1px solid #ddd6fe",
  borderRadius: "8px",
  padding: "10px 12px",
  color: "#111827",
  fontSize: "13px",
  fontWeight: 800,
};

const mockGridWrap = {
  marginTop: "16px",
};

const mockGridLabels = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "6px",
  color: "#6b7280",
  fontSize: "10px",
  fontWeight: 800,
  marginBottom: "7px",
};

const mockGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "7px",
};

const mockCellLight = {
  minHeight: "38px",
  borderRadius: "6px",
  background: "#ede9fe",
};

const mockCellMid = {
  minHeight: "38px",
  borderRadius: "6px",
  background: "#c4b5fd",
};

const mockCellDark = {
  minHeight: "38px",
  borderRadius: "6px",
  background: "#8b5cf6",
};

const mockCellBest = {
  minHeight: "38px",
  borderRadius: "6px",
  background: "#22c55e",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "11px",
  fontWeight: 900,
};

const mockButton = {
  display: "block",
  marginTop: "16px",
  background: "#5b21b6",
  color: "#ffffff",
  padding: "12px 18px",
  borderRadius: "8px",
  fontWeight: 900,
  textAlign: "center" as const,
  textDecoration: "none",
};

const featureStrip = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "0 20px 28px",
};

const featureGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
  gap: "14px",
};

const featureCard = {
  background: "#ffffff",
  color: "#1e1b4b",
  borderRadius: "10px",
  padding: "18px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "7px",
  boxShadow: "0 10px 24px rgba(76,29,149,0.08)",
  border: "1px solid #ede9fe",
};

const resourcesSection = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "34px 20px 52px",
  background: "#ffffff",
  color: "#111827",
};

const sectionHeader = {
  textAlign: "center" as const,
  marginBottom: "22px",
};

const sectionTitle = {
  color: "#111827",
  fontSize: "clamp(26px, 3vw, 36px)",
  lineHeight: "1.15",
  margin: "0 0 8px",
  fontWeight: 950,
  letterSpacing: "-0.03em",
};

const sectionSubtitle = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.55",
  margin: 0,
};

const resourceGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
  gap: "12px",
};

const resourceCard = {
  background: "#ffffff",
  color: "#1e1b4b",
  minHeight: "110px",
  borderRadius: "10px",
  padding: "18px",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  gap: "8px",
  boxShadow: "0 10px 24px rgba(76,29,149,0.08)",
  border: "1px solid #ede9fe",
};

const ctaBand = {
  marginTop: "22px",
  background: "#5b21b6",
  color: "#ffffff",
  borderRadius: "10px",
  padding: "18px 22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap" as const,
  gap: "14px",
  fontWeight: 900,
};

const ctaButton = {
  background: "#facc15",
  color: "#1e1b4b",
  padding: "11px 16px",
  borderRadius: "8px",
  fontWeight: 950,
  textDecoration: "none",
};

const toolSection = {
  background: "#4c1d95",
  padding: "54px 20px 62px",
};

const toolIntro = {
  maxWidth: "760px",
  margin: "0 auto 18px",
  textAlign: "center" as const,
};

const toolTitle = {
  color: "#ffffff",
  fontSize: "clamp(28px, 4vw, 42px)",
  lineHeight: "1.12",
  margin: "0 0 10px",
  fontWeight: 950,
  letterSpacing: "-0.03em",
};

const toolSubtitle = {
  maxWidth: "720px",
  margin: "0 auto 26px",
  color: "rgba(255,255,255,0.78)",
  lineHeight: "1.6",
  fontSize: "15px",
};

const mainContent = {
  background: "#ffffff",
  padding: "56px 20px 78px",
};

const citySection = {
  maxWidth: "980px",
  margin: "0 auto 40px",
  textAlign: "center" as const,
};

const cityLinks = {
  display: "flex",
  flexWrap: "wrap" as const,
  justifyContent: "center",
  gap: "12px",
};

const contentPanel = {
  maxWidth: "980px",
  margin: "0 auto 40px",
  background: "#ffffff",
  borderRadius: "16px",
  padding: "32px",
  boxShadow: "0 14px 38px rgba(76,29,149,0.10)",
  border: "1px solid #ede9fe",
};

const panelHeading = {
  color: "#111827",
  fontSize: "28px",
  lineHeight: "1.2",
  margin: "0 0 15px",
  fontWeight: 950,
};

const panelIntro = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.6",
  maxWidth: "760px",
  margin: "0 auto",
};

const smallTitle = {
  color: "#1e1b4b",
  margin: "14px 0 8px",
  fontWeight: 950,
};

const text = {
  color: "#374151",
  lineHeight: "1.58",
  margin: "7px 0",
};

const textList = {
  color: "#374151",
  paddingLeft: "18px",
  lineHeight: "1.65",
  margin: 0,
};

const exampleCard = {
  background: "#f8f7ff",
  padding: "18px",
  borderRadius: "12px",
  marginBottom: "18px",
  border: "1px solid #c4b5fd",
};

const goldText = {
  color: "#b45309",
  fontWeight: 900,
};

const infoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "14px",
};

const infoCard = {
  background: "#ffffff",
  padding: "18px",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(76,29,149,0.08)",
  border: "1px solid #ede9fe",
};

const premiumWrap = {
  maxWidth: "980px",
  margin: "56px auto 0",
};
