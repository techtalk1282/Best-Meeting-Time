/**
 * File: app/about/page.tsx
 * Version: v1.0 (PREMIUM ABOUT PAGE - ADSENSE TRUST)
 * Date: 2026-05-05
 *
 * PURPOSE:
 * - Fix /about 404
 * - Add trust-focused About page for AdSense readiness
 * - Match homepage/blog white-container layout style
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Delete this file if About is removed from navigation
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
              Helping People Schedule Across Time Zones With Less Guesswork
            </h1>

            <p style={intro}>
              Best Meeting Time is built for remote teams, clients, freelancers,
              consultants, and global collaborators who need a faster way to compare
              local times and choose better meeting windows.
            </p>
          </div>

          <div style={missionCard}>
            <h2 style={cardTitle}>Our Mission</h2>
            <p style={cardText}>
              Make time zone scheduling clearer, faster, and easier to understand
              before someone sends the invite.
            </p>
          </div>
        </section>

        <section style={valueGrid}>
          <div style={valueCard}>
            <span style={valueLabel}>01</span>
            <strong>Simple planning</strong>
            <p>Compare locations without manually converting time zones.</p>
          </div>

          <div style={valueCard}>
            <span style={valueLabel}>02</span>
            <strong>Better meeting windows</strong>
            <p>Review recommended times before choosing a schedule.</p>
          </div>

          <div style={valueCard}>
            <span style={valueLabel}>03</span>
            <strong>Useful for global work</strong>
            <p>Plan across cities, countries, teams, clients, and partners.</p>
          </div>
        </section>

        <section style={contentSection}>
          <div style={contentBlock}>
            <h2 style={sectionTitle}>Why We Built This</h2>
            <p style={sectionText}>
              Scheduling across time zones can be frustrating when people are
              working in different cities or regions. A time that works well for
              one person may be too early, too late, or outside normal working
              hours for someone else.
            </p>
            <p style={sectionText}>
              Best Meeting Time helps make that decision easier by showing local
              times side by side and guiding users toward practical meeting
              windows.
            </p>
          </div>

          <div style={contentBlock}>
            <h2 style={sectionTitle}>Who It Helps</h2>
            <p style={sectionText}>
              The planner is useful for remote teams, agencies, business owners,
              freelancers, consultants, customer calls, international projects,
              and anyone coordinating meetings across more than one time zone.
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
  padding: "18px 18px 42px",
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
  marginBottom: "18px",
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
  gridTemplateColumns: "1.25fr 0.75fr",
  gap: "18px",
  padding: "10px 10px 18px",
};

const heroCopy = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "30px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 12px",
  padding: "7px 13px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "12px",
  fontWeight: 900,
};

const headline = {
  color: "#111827",
  fontSize: "clamp(34px, 4vw, 46px)",
  lineHeight: "1.06",
  margin: "0 0 14px",
  fontWeight: 950,
  letterSpacing: "-0.04em",
};

const intro = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: 0,
};

const missionCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "28px",
  boxShadow: "0 14px 32px rgba(91,33,182,0.1)",
};

const cardTitle = {
  color: "#111827",
  fontSize: "24px",
  fontWeight: 950,
  margin: "0 0 10px",
};

const cardText = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: 0,
};

const valueGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "14px",
  padding: "0 10px 18px",
};

<section style={valueGrid}>
  <div style={valueCard}>
    <div style={valueHeader}>
      <span style={valueNumber}>01</span>
      <strong style={valueTitle}>Simple planning</strong>
    </div>
    <p style={valueText}>
      Compare multiple cities instantly without manually converting time zones
      or calculating offsets.
    </p>
  </div>

  <div style={valueCard}>
    <div style={valueHeader}>
      <span style={valueNumber}>02</span>
      <strong style={valueTitle}>Better meeting windows</strong>
    </div>
    <p style={valueText}>
      Identify practical overlap times so meetings are not too early or too late
      for anyone involved.
    </p>
  </div>

  <div style={valueCard}>
    <div style={valueHeader}>
      <span style={valueNumber}>03</span>
      <strong style={valueTitle}>Built for global work</strong>
    </div>
    <p style={valueText}>
      Designed for remote teams, clients, freelancers, and international
      collaboration across time zones.
    </p>
  </div>
</section>

const valueLabel = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
};

const contentSection = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "14px",
  padding: "0 10px 18px",
};

const contentBlock = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "22px",
};

const sectionTitle = {
  color: "#111827",
  fontSize: "22px",
  fontWeight: 950,
  margin: "0 0 10px",
};

const sectionText = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.65",
  margin: "8px 0",
};

const ctaBand = {
  margin: "0 10px",
  padding: "18px 20px",
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
  fontSize: "22px",
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
const valueHeader = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "8px",
};

const valueNumber = {
  color: "#7c3aed",
  fontSize: "12px",
  fontWeight: 900,
};

const valueTitle = {
  color: "#111827",
  fontSize: "15px",
  fontWeight: 900,
};

const valueText = {
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.6",
};
