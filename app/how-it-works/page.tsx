/**
 * File: app/how-it-works/page.tsx
 * Version: v1.4 (PREMIUM TOOL PAGE SHELL + OFFICIAL LOGO)
 * Date: 2026-05-09
 *
 * PURPOSE:
 * - Add official Best Meeting Time logo branding
 * - Improve the tool page premium presentation without touching ToolPreviewSection
 * - Keep the real ToolPreviewSection first and protected
 * - Preserve Stripe, premium, KV, checkout, and planner logic boundaries
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No premium/payment logic changes
 * - No ToolPreviewSection logic changes
 *
 * ROLLBACK:
 * - Revert to v1.3 if this page layout does not test cleanly
 */

import ToolPreviewSection from "../ui/ToolPreviewSection";

export default function HowItWorksPage() {
  const steps = [
    [
      "1",
      "Select Time Zones",
      "Choose the cities or time zones for everyone attending your meeting.",
    ],
    [
      "2",
      "Compare Local Times",
      "View both locations side by side before choosing a meeting window.",
    ],
    [
      "3",
      "Review Meeting Windows",
      "See recommended meeting times and backup options.",
    ],
    [
      "4",
      "Plan With Confidence",
      "Share the selected time or add it to your calendar workflow.",
    ],
  ];

  return (
    <main style={pageWrap}>
      <section style={pageShell}>
        <header style={header}>
          <a href="/" style={brand} aria-label="Best Meeting Time home">
            <img
              src="/images/branding/logo.png"
              alt="Best Meeting Time"
              style={brandLogo}
            />
          </a>

          <nav style={nav} aria-label="How It Works navigation">
            <a href="/" style={navLink}>Home</a>
            <a href="/how-it-works" style={activeNavLink}>How It Works</a>
            <a href="/features" style={navLink}>Features</a>
            <a href="/guides" style={navLink}>Guides</a>
            <a href="/blog" style={navLink}>Blog</a>
            <a href="/about" style={navLink}>About</a>
            <a href="/contact" style={navLink}>Contact</a>
          </nav>

          <a href="/how-it-works#schedule-tool" style={navCta}>
            <span style={navCtaMain}>Schedule a Meeting</span>
            <span style={navCtaSub}>Free to try — no sign-up</span>
          </a>
        </header>

        <section style={toolIntro}>
          <p style={eyebrow}>Live Meeting Time Planner</p>
          <h1 style={toolHeadline}>Find the Best Meeting Time Across Time Zones</h1>
          <p style={toolSubtitle}>
            Compare cities, review recommended meeting windows, and schedule global meetings faster.
          </p>
        </section>

        <section id="schedule-tool" style={toolSection}>
          <ToolPreviewSection />
        </section>
      </section>

      <section style={stepsSection}>
        <div style={stepsGrid}>
          {steps.map(([num, title, text]) => (
            <div key={num} style={stepCard}>
              <div style={stepNumber}>{num}</div>
              <h2 style={stepTitle}>{title}</h2>
              <p style={stepText}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={whySection}>
        <div style={whyCard}>
          <h2 style={sectionHeading}>Why It Works</h2>

          <p style={bodyText}>
            Scheduling meetings across time zones can be challenging when teams,
            clients, or partners are spread across different regions. Best Meeting
            Time helps compare local times and identify practical overlap windows.
          </p>

          <div style={problemBlock}>
            <h3 style={subHeading}>Common Problems This Solves</h3>

            <ul style={problemList}>
              <li>Avoid scheduling meetings outside working hours</li>
              <li>Eliminate manual time zone conversions</li>
              <li>Prevent confusion across international teams</li>
              <li>Quickly find better meeting times for remote teams</li>
            </ul>
          </div>

          <div style={ctaRow}>
            <a href="#schedule-tool" style={primaryButton}>
              Try the Free Meeting Time Tool
            </a>
            <a href="/guides" style={secondaryButton}>
              View Time Zone Scheduling Guides
            </a>
          </div>
        </div>
      </section>

      <footer style={footer}>
        <a href="/" style={footerLink}>Home</a>
        <a href="/guides" style={footerLink}>Guides</a>
        <a href="/contact" style={footerLink}>Contact</a>
        <a href="/privacy-policy" style={footerLink}>Privacy Policy</a>
        <a href="/terms-of-service" style={footerLink}>Terms of Service</a>
      </footer>
    </main>
  );
}

/* STYLES */

const pageWrap = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
  color: "#ffffff",
  padding: "22px 20px 58px",
};

const pageShell = {
  width: "100%",
  maxWidth: "1120px",
  margin: "0 auto",
  background: "#ffffff",
  color: "#111827",
  border: "1px solid rgba(237,233,254,0.9)",
  boxShadow: "0 24px 70px rgba(30,27,75,0.18)",
  padding: "14px 18px 22px",
};

const header = {
  minHeight: "58px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
  borderBottom: "1px solid #ede9fe",
  marginBottom: "14px",
};

const brand = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  flexShrink: 0,
};

const brandLogo = {
  display: "block",
  width: "170px",
  height: "auto",
  objectFit: "contain" as const,
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
  whiteSpace: "nowrap" as const,
};

const activeNavLink = {
  ...navLink,
  color: "#5b21b6",
  borderBottom: "2px solid #5b21b6",
  paddingBottom: "6px",
};

const navCta = {
  background: "#5b21b6",
  color: "#ffffff",
  padding: "9px 16px",
  borderRadius: "8px",
  fontWeight: 900,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  lineHeight: 1.16,
  minWidth: "154px",
  boxShadow: "0 10px 22px rgba(91,33,182,0.22)",
};

const navCtaMain = {
  fontSize: "13px",
  fontWeight: 900,
};

const navCtaSub = {
  fontSize: "10px",
  fontWeight: 800,
  opacity: 0.92,
};

const toolIntro = {
  textAlign: "center" as const,
  maxWidth: "760px",
  margin: "0 auto 2px",
  paddingTop: "2px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 7px",
  padding: "6px 13px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "12px",
  fontWeight: 950,
};

const toolHeadline = {
  color: "#111827",
  fontSize: "clamp(28px, 3vw, 36px)",
  lineHeight: "0.96",
  margin: "0 0 2px",
  fontWeight: 950,
  letterSpacing: "-0.05em",
};

const toolSubtitle = {
  color: "#4b5563",
  fontSize: "13px",
  lineHeight: "1.32",
  margin: "0 0 4px",
};

const toolSection = {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "4px 0 0",
  scrollMarginTop: "24px",
};

const stepsSection = {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "34px 20px 24px",
};

const stepsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "14px",
};

const stepCard = {
  background: "rgba(255,255,255,0.96)",
  color: "#1e1b4b",
  borderRadius: "18px",
  padding: "18px",
  textAlign: "center" as const,
  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
  border: "1px solid rgba(196,181,253,0.65)",
};

const stepNumber = {
  width: "38px",
  height: "38px",
  margin: "0 auto 10px",
  borderRadius: "999px",
  background: "#6d28d9",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  fontSize: "16px",
};

const stepTitle = {
  fontSize: "18px",
  margin: "0 0 7px",
  color: "#1e1b4b",
};

const stepText = {
  margin: 0,
  color: "#4b5563",
  lineHeight: 1.45,
  fontSize: "14px",
};

const whySection = {
  padding: "10px 20px 28px",
};

const whyCard = {
  maxWidth: "920px",
  margin: "0 auto",
  background: "rgba(255,255,255,0.96)",
  color: "#1e1b4b",
  borderRadius: "22px",
  padding: "28px",
  boxShadow: "0 14px 38px rgba(0,0,0,0.22)",
  border: "1px solid rgba(196,181,253,0.65)",
};

const sectionHeading = {
  fontSize: "28px",
  margin: "0 0 12px",
  color: "#1e1b4b",
};

const subHeading = {
  fontSize: "18px",
  margin: "0 0 8px",
  color: "#1e1b4b",
};

const bodyText = {
  color: "#374151",
  lineHeight: 1.6,
  fontSize: "15px",
  margin: "0 0 12px",
};

const problemBlock = {
  marginTop: "14px",
};

const problemList = {
  ...bodyText,
  paddingLeft: "18px",
};

const ctaRow = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "12px",
  marginTop: "20px",
};

const primaryButton = {
  display: "inline-block",
  background: "#facc15",
  color: "#1e1b4b",
  padding: "12px 18px",
  borderRadius: "999px",
  fontWeight: 900,
  textDecoration: "none",
};

const secondaryButton = {
  display: "inline-block",
  background: "#ede9fe",
  color: "#4c1d95",
  padding: "12px 18px",
  borderRadius: "999px",
  fontWeight: 900,
  textDecoration: "none",
};

const footer = {
  borderTop: "1px solid rgba(255,255,255,0.14)",
  padding: "22px 20px 30px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap" as const,
  gap: "18px",
};

const footerLink = {
  color: "#ddd6fe",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 700,
};
