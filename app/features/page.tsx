/**
 * File: app/features/page.tsx
 * Version: v1.0 (FEATURES PAGE CREATE)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Create missing /features route
 * - Match Blog/About white-shell branding
 * - Explain free features and premium $7 one-time unlock
 * - Add SEO-focused feature content without fake claims
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Delete this file to remove the /features route
 */

export default function FeaturesPage() {
  return (
    <main style={pageShell}>
      <header style={header}>
        <a href="/" style={brandLink}>
          <span style={brandIcon}>⌘</span>
          <span>Best Meeting Time</span>
        </a>

        <nav style={nav} aria-label="Features page navigation">
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

      <section style={hero}>
        <p style={eyebrow}>Best Meeting Time Features</p>

        <h1 style={headline}>
          Time Zone Scheduling Tools for Remote Teams and Client Calls
        </h1>

        <p style={subheadline}>
          Compare cities, review local times, find better overlap windows, and
          unlock premium scheduling tools when you need more planning power.
        </p>
      </section>

      <section style={visualBand}>
        <div style={mockPanel}>
          <div style={mockTop}>
            <span style={mockDot}></span>
            <strong>Meeting Window Preview</strong>
            <span style={mockBadge}>Smart Match</span>
          </div>

          <div style={timeRows}>
            <div style={timeRow}>
              <span>New York</span>
              <strong>9:00 AM</strong>
              <em>Good</em>
            </div>
            <div style={timeRow}>
              <span>London</span>
              <strong>2:00 PM</strong>
              <em>Good</em>
            </div>
            <div style={timeRow}>
              <span>Tokyo</span>
              <strong>11:00 PM</strong>
              <em>Late</em>
            </div>
          </div>
        </div>

        <div style={visualCopy}>
          <p style={sectionEyebrow}>Built for real scheduling decisions</p>
          <h2 style={sectionTitle}>See the timing problem before the invite is sent.</h2>
          <p style={sectionText}>
            Best Meeting Time helps users compare local time zones, avoid
            daylight-saving confusion, and choose meeting windows that are easier
            for remote teams, consultants, clients, and global partners to attend.
          </p>
        </div>
      </section>

      <section style={featureGrid}>
        <article style={card}>
          <p style={cardLabel}>Free Planning</p>
          <h2 style={cardTitle}>Compare meeting times quickly</h2>
          <p style={cardText}>
            Start with practical time zone comparison, local time review, and
            meeting window planning before sending an invite.
          </p>
        </article>

        <article style={card}>
          <p style={cardLabel}>Recommended Windows</p>
          <h2 style={cardTitle}>Find better overlap across cities</h2>
          <p style={cardText}>
            Review better scheduling options for remote teams, client meetings,
            interviews, sales calls, support calls, and global collaboration.
          </p>
        </article>

        <article style={card}>
          <p style={cardLabel}>Premium Unlock</p>
          <h2 style={cardTitle}>Unlock more scheduling tools for $7</h2>
          <p style={cardText}>
            Premium is a one-time unlock designed for users who want more
            planning access, sharing options, and calendar-ready scheduling tools.
          </p>
        </article>
      </section>

      <section style={premiumBand}>
        <div>
          <p style={premiumEyebrow}>Free + Premium</p>
          <h2 style={premiumTitle}>Use the basics first. Upgrade when you need more.</h2>
          <p style={premiumText}>
            Free planning helps users try the scheduler without sign-up. Premium
            adds a stronger workflow for people who schedule across time zones
            more often.
          </p>
        </div>

        <div style={priceBox}>
          <span>Premium Unlock</span>
          <strong>$7 one time</strong>
          <em>No subscription</em>
        </div>
      </section>

      <section style={ctaBand}>
        <div>
          <p style={ctaEyebrow}>Start Planning</p>
          <h2 style={ctaTitle}>Ready to compare meeting times?</h2>
          <p style={ctaText}>
            Try the scheduler and review better meeting windows before you send
            the invite.
          </p>
        </div>

        <a href="/how-it-works#schedule-tool" style={ctaButton}>
          <span style={ctaMain}>Schedule a Meeting</span>
          <span style={ctaSub}>Free to try — no sign-up</span>
        </a>
      </section>
    </main>
  );
}

/* STYLES */

const pageShell = {
  maxWidth: "1120px",
  margin: "14px auto",
  padding: "14px",
  background: "#ffffff",
  color: "#111827",
  border: "1px solid rgba(237,233,254,0.95)",
  boxShadow: "0 18px 50px rgba(30,27,75,0.16)",
};

const header = {
  minHeight: "58px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  borderBottom: "1px solid #ede9fe",
  marginBottom: "26px",
};

const brandLink = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "#5b21b6",
  fontSize: "20px",
  fontWeight: 950,
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
};

const brandIcon = {
  width: "28px",
  height: "28px",
  borderRadius: "8px",
  background: "#ede9fe",
  color: "#5b21b6",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
};

const nav = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "17px",
};

const navLink = {
  color: "#111827",
  fontSize: "13px",
  fontWeight: 900,
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
};

const navButton = {
  background: "#5b21b6",
  color: "#ffffff",
  padding: "9px 17px",
  borderRadius: "9px",
  fontWeight: 950,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.1,
  minWidth: "158px",
  boxShadow: "0 10px 22px rgba(91,33,182,0.24)",
};

const navButtonMain = {
  fontSize: "13px",
  fontWeight: 950,
};

const navButtonSub = {
  fontSize: "10px",
  fontWeight: 850,
  opacity: 0.94,
};

const hero = {
  maxWidth: "850px",
  margin: "0 auto 20px",
  textAlign: "center" as const,
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 12px",
  padding: "7px 15px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "13px",
  fontWeight: 950,
};

const headline = {
  color: "#111827",
  fontSize: "clamp(34px, 4vw, 48px)",
  lineHeight: "1.04",
  margin: "0 0 10px",
  fontWeight: 950,
  letterSpacing: "-0.045em",
};

const subheadline = {
  maxWidth: "780px",
  margin: "0 auto",
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.45",
};

const visualBand = {
  display: "grid",
  gridTemplateColumns: "1fr 1.05fr",
  gap: "16px",
  alignItems: "center",
  marginBottom: "14px",
  padding: "12px",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  background: "#faf9ff",
};

const mockPanel = {
  borderRadius: "14px",
  padding: "12px",
  background: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 55%, #7c3aed 100%)",
  color: "#ffffff",
  display: "grid",
  gap: "9px",
};

const mockTop = {
  display: "flex",
  alignItems: "center",
  gap: "7px",
  fontSize: "12px",
};

const mockDot = {
  width: "7px",
  height: "7px",
  borderRadius: "999px",
  background: "#facc15",
};

const mockBadge = {
  marginLeft: "auto",
  padding: "4px 7px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.16)",
  fontSize: "9px",
  fontWeight: 900,
};

const timeRows = {
  display: "grid",
  gap: "6px",
};

const timeRow = {
  display: "grid",
  gridTemplateColumns: "1fr auto auto",
  gap: "10px",
  alignItems: "center",
  padding: "7px 9px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.14)",
  border: "1px solid rgba(255,255,255,0.18)",
  fontSize: "11px",
};

const visualCopy = {
  display: "grid",
  gap: "6px",
};

const sectionEyebrow = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  margin: 0,
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const sectionTitle = {
  color: "#111827",
  fontSize: "23px",
  lineHeight: "1.12",
  fontWeight: 950,
  margin: 0,
};

const sectionText = {
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.42",
  margin: 0,
};

const featureGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "14px",
  marginBottom: "14px",
};

const card = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "18px",
};

const cardLabel = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 9px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const cardTitle = {
  color: "#111827",
  fontSize: "21px",
  lineHeight: "1.14",
  fontWeight: 950,
  margin: "0 0 8px",
};

const cardText = {
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.42",
  margin: 0,
};

const premiumBand = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "18px",
  alignItems: "center",
  marginBottom: "14px",
  padding: "16px 18px",
  borderRadius: "16px",
  background: "#f5f0ff",
  border: "1px solid #ddd6fe",
};

const premiumEyebrow = {
  margin: "0 0 4px",
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const premiumTitle = {
  margin: "0 0 4px",
  color: "#111827",
  fontSize: "22px",
  fontWeight: 950,
};

const premiumText = {
  margin: 0,
  color: "#4b5563",
  fontSize: "13.5px",
  lineHeight: "1.38",
};

const priceBox = {
  minWidth: "150px",
  padding: "12px",
  borderRadius: "14px",
  background: "#ffffff",
  color: "#4c1d95",
  border: "1px solid #ddd6fe",
  display: "grid",
  gap: "3px",
  textAlign: "center" as const,
  fontSize: "12px",
  fontWeight: 850,
};

const ctaBand = {
  padding: "15px 20px",
  borderRadius: "16px",
  background: "#5b21b6",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
};

const ctaEyebrow = {
  margin: "0 0 3px",
  color: "#facc15",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const ctaTitle = {
  margin: "0 0 3px",
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: 950,
  letterSpacing: "-0.02em",
};

const ctaText = {
  margin: 0,
  color: "rgba(255,255,255,0.88)",
  fontSize: "13.5px",
  lineHeight: "1.35",
};

const ctaButton = {
  background: "#ffffff",
  color: "#5b21b6",
  padding: "10px 17px",
  borderRadius: "9px",
  fontWeight: 950,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.1,
  minWidth: "158px",
  boxShadow: "0 9px 20px rgba(30,27,75,0.18)",
};

const ctaMain = {
  fontSize: "13px",
  fontWeight: 950,
};

const ctaSub = {
  fontSize: "10px",
  fontWeight: 850,
  opacity: 0.9,
};
