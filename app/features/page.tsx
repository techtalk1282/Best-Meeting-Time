/**
 * File: app/features/page.tsx
 * Version: v3.0 (PREMIUM PRODUCT SHOWCASE - 100% FIT)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Rebuild Features page as a product showcase, not a generic text page
 * - Keep 100% desktop landing fit with CTA visible
 * - Spotlight city selection, swap, best time, alternatives, share links, and calendar actions
 * - Use gold action buttons and premium Best Meeting Time branding
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v2.0 if this version does not test cleanly
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

      <section style={heroGrid}>
        <div>
          <p style={eyebrow}>Best Meeting Time Features</p>

          <h1 style={headline}>
            Plan the Time. Share the Link. Add It to Your Calendar.
          </h1>

          <p style={subheadline}>
            Compare cities, swap locations, review the best meeting window, then
            unlock premium tools to share and add meetings faster.
          </p>
        </div>

        <div style={accessCard}>
          <p style={accessLabel}>Free + Premium Access</p>
          <div style={accessRows}>
            <span><strong>Free:</strong> try a planning session first</span>
            <span><strong>Premium:</strong> $7 one-time unlock</span>
          </div>
        </div>
      </section>

      <section style={showcase}>
        <div style={plannerMock}>
          <div style={mockTop}>
            <span style={mockPill}>Planner Preview</span>
            <span style={swapBadge}>Swap Cities</span>
          </div>

          <div style={cityRow}>
            <div style={cityBox}>
              <span>From</span>
              <strong>New York</strong>
              <em>9:00 AM EDT</em>
            </div>

            <div style={swapCircle}>⇄</div>

            <div style={cityBox}>
              <span>To</span>
              <strong>London</strong>
              <em>2:00 PM BST</em>
            </div>
          </div>

          <div style={bestWindow}>
            <span>Best Meeting Time</span>
            <strong>9:00 AM — 10:00 AM New York</strong>
            <em>2:00 PM — 3:00 PM London</em>
          </div>

          <div style={altRow}>
            <span>Alternative: 10:00 AM ET</span>
            <span>Duration: 60 min</span>
          </div>
        </div>

        <div style={featureCopy}>
          <p style={sectionEyebrow}>Real workflow features</p>
          <h2 style={sectionTitle}>Built around how people actually schedule.</h2>
          <p style={sectionText}>
            Select cities, compare local times, review recommended windows, and
            move directly into sharing or calendar actions without rebuilding
            the meeting details from scratch.
          </p>

          <div style={goldButtonGrid}>
            <span>Create Link</span>
            <span>Copy Link</span>
            <span>Add to Google</span>
            <span>Add to Outlook</span>
            <span>Add to Apple Calendar</span>
          </div>
        </div>
      </section>

      <section style={featureGrid}>
        <article style={card}>
          <p style={cardLabel}>City Selection</p>
          <h2 style={cardTitle}>Choose cities fast.</h2>
          <p style={cardText}>
            Compare locations side by side and swap cities when plans change.
          </p>
        </article>

        <article style={card}>
          <p style={cardLabel}>Smart Windows</p>
          <h2 style={cardTitle}>See best times and alternatives.</h2>
          <p style={cardText}>
            Review the recommended meeting time plus backup windows.
          </p>
        </article>

        <article style={card}>
          <p style={cardLabel}>Premium Workflow</p>
          <h2 style={cardTitle}>Share and add to calendars.</h2>
          <p style={cardText}>
            Unlock link sharing and Google, Outlook, and Apple Calendar actions.
          </p>
        </article>
      </section>

      <section style={ctaBand}>
        <div>
          <p style={ctaEyebrow}>Start Planning</p>
          <h2 style={ctaTitle}>Ready to try the scheduler?</h2>
          <p style={ctaText}>
            Compare meeting times first, then unlock premium tools when you need
            to share and schedule faster.
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
  marginBottom: "18px",
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
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.1,
  minWidth: "158px",
  boxShadow: "0 10px 22px rgba(91,33,182,0.24)",
};

const navButtonMain = { fontSize: "13px", fontWeight: 950 };
const navButtonSub = { fontSize: "10px", fontWeight: 850, opacity: 0.94 };

const heroGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 280px",
  gap: "18px",
  alignItems: "end",
  marginBottom: "12px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 9px",
  padding: "7px 15px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "13px",
  fontWeight: 950,
};

const headline = {
  color: "#111827",
  fontSize: "clamp(32px, 3.9vw, 46px)",
  lineHeight: "1.02",
  margin: "0 0 8px",
  fontWeight: 950,
  letterSpacing: "-0.045em",
};

const subheadline = {
  color: "#4b5563",
  fontSize: "15.5px",
  lineHeight: "1.38",
  margin: 0,
};

const accessCard = {
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  background: "#faf9ff",
  padding: "14px",
};

const accessLabel = {
  margin: "0 0 8px",
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
};

const accessRows = {
  display: "grid",
  gap: "7px",
  color: "#4b5563",
  fontSize: "13px",
  lineHeight: "1.35",
};

const showcase = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "14px",
  alignItems: "stretch",
  marginBottom: "12px",
};

const plannerMock = {
  borderRadius: "18px",
  padding: "14px",
  background: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 55%, #7c3aed 100%)",
  color: "#ffffff",
  display: "grid",
  gap: "10px",
  boxShadow: "0 12px 24px rgba(91,33,182,0.2)",
};

const mockTop = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const mockPill = {
  color: "#facc15",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
};

const swapBadge = {
  padding: "5px 10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.16)",
  fontSize: "11px",
  fontWeight: 900,
};

const cityRow = {
  display: "grid",
  gridTemplateColumns: "1fr 34px 1fr",
  gap: "8px",
  alignItems: "center",
};

const cityBox = {
  display: "grid",
  gap: "2px",
  padding: "10px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.15)",
  border: "1px solid rgba(255,255,255,0.2)",
  fontSize: "11px",
};

const swapCircle = {
  width: "34px",
  height: "34px",
  borderRadius: "999px",
  background: "#facc15",
  color: "#4c1d95",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "19px",
  fontWeight: 950,
};

const bestWindow = {
  display: "grid",
  gap: "2px",
  padding: "10px",
  borderRadius: "12px",
  background: "#ffffff",
  color: "#4c1d95",
  fontSize: "12px",
};

const altRow = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  fontSize: "11px",
  fontWeight: 850,
};

const featureCopy = {
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  background: "#faf9ff",
  padding: "18px",
};

const sectionEyebrow = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 6px",
  textTransform: "uppercase" as const,
};

const sectionTitle = {
  color: "#111827",
  fontSize: "25px",
  lineHeight: "1.1",
  fontWeight: 950,
  margin: "0 0 8px",
};

const sectionText = {
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.38",
  margin: "0 0 12px",
};

const goldButtonGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "8px",
};

const featureGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
  marginBottom: "12px",
};

const card = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "15px",
};

const cardLabel = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 7px",
  textTransform: "uppercase" as const,
};

const cardTitle = {
  color: "#111827",
  fontSize: "20px",
  lineHeight: "1.12",
  fontWeight: 950,
  margin: "0 0 6px",
};

const cardText = {
  color: "#4b5563",
  fontSize: "13.5px",
  lineHeight: "1.34",
  margin: 0,
};

const ctaBand = {
  padding: "14px 20px",
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
};

const ctaTitle = {
  margin: "0 0 3px",
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: 950,
};

const ctaText = {
  margin: 0,
  color: "rgba(255,255,255,0.88)",
  fontSize: "13.5px",
  lineHeight: "1.32",
};

const ctaButton = {
  background: "#ffffff",
  color: "#5b21b6",
  padding: "10px 17px",
  borderRadius: "9px",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.1,
  minWidth: "158px",
};

const ctaMain = { fontSize: "13px", fontWeight: 950 };
const ctaSub = { fontSize: "10px", fontWeight: 850, opacity: 0.9 };
