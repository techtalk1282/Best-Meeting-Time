/**
 * File: app/about/page.tsx
 * Version: v2.0 (COMPACT PREMIUM ABOUT PAGE - SEO + UX)
 * Date: 2026-05-05
 *
 * PURPOSE:
 * - Improve About page content quality, SEO value, and first-screen fit
 * - Remove weak numbered cards and empty mission spacing
 * - Create a polished, compact trust page aligned with homepage/blog design
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v1.1 if this layout does not test cleanly
 */

import FooterSection from "../ui/FooterSection";

export default function AboutPage() {
  return (
    <>
      <main style={pageShell}>
        <header style={header}>
          <a href="/" style={brandLink}>
            <span style={brandIcon}>⌘</span>
            <span>Best Meeting Time</span>
          </a>

          <nav style={nav} aria-label="About page navigation">
            <a href="/" style={navLink}>Home</a>
            <a href="/how-it-works" style={navLink}>How It Works</a>
            <a href="/features" style={navLink}>Features</a>
            <a href="/guides" style={navLink}>Guides</a>
            <a href="/blog" style={navLink}>Blog</a>
            <a href="/about" style={navLink}>About</a>
            <a href="/contact" style={navLink}>Contact</a>
          </nav>

          <a href="/how-it-works#schedule-tool" style={navButton}>
            <span style={navButtonMain}>Schedule a Meeting</span>
            <span style={navButtonSub}>Free to try — no sign-up</span>
          </a>
        </header>

        <section style={heroSection}>
          <div style={heroCopy}>
            <p style={eyebrow}>About Best Meeting Time</p>

            <h1 style={headline}>
              A Faster Way to Plan Meetings Across Time Zones
            </h1>

            <p style={intro}>
              Best Meeting Time helps people compare cities, review local times,
              and choose practical meeting windows before sending an invite.
              It is built for remote teams, client calls, freelancers,
              consultants, agencies, and global collaboration.
            </p>

            <div style={quickRow}>
              <span>Time zone planning</span>
              <span>Remote team scheduling</span>
              <span>Client meeting coordination</span>
            </div>
          </div>

          <div style={missionCard}>
            <p style={missionLabel}>Our Mission</p>
            <h2 style={missionTitle}>Make scheduling feel clear before the invite goes out.</h2>
            <p style={missionText}>
              The goal is simple: reduce confusion, prevent bad meeting times,
              and help people find a fair window that works across different
              locations.
            </p>
          </div>
        </section>

        <section style={valueGrid}>
          <div style={valueCard}>
            <strong>Compare locations quickly</strong>
            <p>
              See how meeting times line up across cities instead of manually
              calculating offsets or guessing the right time.
            </p>
          </div>

          <div style={valueCard}>
            <strong>Choose better time windows</strong>
            <p>
              Review practical overlap times so meetings are less likely to land
              too early, too late, or outside normal working hours.
            </p>
          </div>

          <div style={valueCard}>
            <strong>Support real global work</strong>
            <p>
              Useful for distributed teams, customer calls, international
              projects, remote workers, and cross-region planning.
            </p>
          </div>
        </section>

        <section style={contentSection}>
          <div style={contentBlock}>
            <h2 style={sectionTitle}>Why This Matters</h2>
            <p style={sectionText}>
              Time zone mistakes can cause missed meetings, low attendance, late
              calls, and avoidable scheduling friction. A clearer planning view
              helps teams respect local time and make better decisions faster.
            </p>
          </div>

          <div style={contentBlock}>
            <h2 style={sectionTitle}>Who It Helps</h2>
            <p style={sectionText}>
              Best Meeting Time is designed for people who coordinate across
              more than one location: remote teams, founders, sales teams,
              consultants, agencies, freelancers, educators, and client-facing
              businesses.
            </p>
          </div>
        </section>

        <section style={ctaBand}>
          <div>
            <p style={ctaEyebrow}>Start Planning</p>
            <h2 style={ctaTitle}>Ready to choose a better meeting time?</h2>
            <p style={ctaText}>
              Compare cities and review recommended meeting windows before you
              send the invite.
            </p>
          </div>

          <a href="/how-it-works#schedule-tool" style={ctaButton}>
            <span style={ctaMain}>Schedule a Meeting</span>
            <span style={ctaSub}>Free to try — no sign-up</span>
          </a>
        </section>
      </main>

      <FooterSection />
    </>
  );
}

/* STYLES */

const pageShell = {
  maxWidth: "1120px",
  margin: "18px auto 0",
  padding: "18px 18px 34px",
  background: "#ffffff",
  color: "#111827",
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
  whiteSpace: "nowrap" as const,
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
  lineHeight: 1.18,
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
  opacity: 0.92,
};

const heroSection = {
  display: "grid",
  gridTemplateColumns: "1.15fr 0.85fr",
  gap: "14px",
  padding: "8px 10px 14px",
};

const heroCopy = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "24px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 10px",
  padding: "7px 13px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "12px",
  fontWeight: 900,
};

const headline = {
  color: "#111827",
  fontSize: "clamp(32px, 4vw, 44px)",
  lineHeight: "1.06",
  margin: "0 0 12px",
  fontWeight: 950,
  letterSpacing: "-0.04em",
};

const intro = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.55",
  margin: "0 0 14px",
};

const quickRow = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "8px",
};

const missionCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "24px",
  boxShadow: "0 14px 32px rgba(91,33,182,0.1)",
};

const missionLabel = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const missionTitle = {
  color: "#111827",
  fontSize: "24px",
  lineHeight: "1.18",
  fontWeight: 950,
  margin: "0 0 10px",
};

const missionText = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: 0,
};

const valueGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
  padding: "0 10px 14px",
};

const valueCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "16px",
  boxShadow: "0 10px 25px rgba(91,33,182,0.08)",
  fontSize: "14px",
  lineHeight: "1.55",
};

const contentSection = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px",
  padding: "0 10px 14px",
};

const contentBlock = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "18px",
};

const sectionTitle = {
  color: "#111827",
  fontSize: "21px",
  fontWeight: 950,
  margin: "0 0 8px",
};

const sectionText = {
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: 0,
};

const ctaBand = {
  margin: "0 10px",
  padding: "16px 18px",
  borderRadius: "14px",
  background: "#5b21b6",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
};

const ctaEyebrow = {
  margin: "0 0 4px",
  color: "#facc15",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const ctaTitle = {
  margin: "0 0 4px",
  color: "#ffffff",
  fontSize: "21px",
  fontWeight: 950,
};

const ctaText = {
  margin: 0,
  color: "rgba(255,255,255,0.86)",
  fontSize: "14px",
  lineHeight: "1.5",
};

const ctaButton = {
  background: "#ffffff",
  color: "#5b21b6",
  padding: "10px 16px",
  borderRadius: "8px",
  fontWeight: 900,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.15,
  minWidth: "160px",
  boxShadow: "0 10px 22px rgba(30,27,75,0.18)",
};

const ctaMain = {
  fontSize: "13px",
  fontWeight: 900,
};

const ctaSub = {
  fontSize: "10px",
  fontWeight: 800,
  opacity: 0.9,
};
