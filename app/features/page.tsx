/**
 * File: app/features/page.tsx
 * Version: v2.0 (FEATURES PAGE - PREMIUM VALUE REBUILD)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Replace generic Features page with concrete product feature content
 * - Keep 100% desktop landing fit
 * - Show free planning, premium unlock, share link, and calendar workflow
 * - Avoid repeating About-page visual panel
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v1.0 if this version does not test cleanly
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
            Plan, Compare, Share, and Add Meetings Faster
          </h1>

          <p style={subheadline}>
            Start with free time zone planning, then unlock premium tools for
            sharing meeting links and adding selected windows to your calendar
            workflow.
          </p>

          <div style={miniStack}>
            <div style={miniItem}>
              <strong>Free planning session</strong>
              <span>Compare cities and review recommended windows first.</span>
            </div>

            <div style={miniItem}>
              <strong>Premium unlock — $7 one time</strong>
              <span>More planning access, share links, and calendar actions.</span>
            </div>
          </div>
        </div>

        <div style={toolCard}>
          <p style={toolLabel}>Premium Tools Preview</p>
          <h2 style={toolTitle}>After you find the right time</h2>

          <div style={buttonGrid}>
            <span>Create Link</span>
            <span>Copy Link</span>
            <span>Add to Google</span>
            <span>Add to Outlook</span>
            <span>Add to Apple Calendar</span>
          </div>

          <div style={toolNote}>
            Selected window: <strong>New York 9:00 AM / London 2:00 PM</strong>
          </div>
        </div>
      </section>

      <section style={featureGrid}>
        <article style={card}>
          <p style={cardLabel}>Compare Cities</p>
          <h2 style={cardTitle}>See local times side by side.</h2>
          <p style={cardText}>
            Review city times before sending an invite so remote teams and
            clients can quickly understand the same meeting window.
          </p>
        </article>

        <article style={card}>
          <p style={cardLabel}>Recommended Windows</p>
          <h2 style={cardTitle}>Find practical overlap faster.</h2>
          <p style={cardText}>
            Use the planner to identify better meeting windows across working
            hours, time zones, and global team schedules.
          </p>
        </article>

        <article style={card}>
          <p style={cardLabel}>Premium Sharing</p>
          <h2 style={cardTitle}>Share and calendar-ready actions.</h2>
          <p style={cardText}>
            Premium unlocks stronger workflow actions for creating links,
            copying links, and adding meeting windows to calendar tools.
          </p>
        </article>
      </section>

      <section style={accessBand}>
        <div>
          <p style={accessEyebrow}>Access Model</p>
          <h2 style={accessTitle}>Try the scheduler first. Upgrade when it helps.</h2>
          <p style={accessText}>
            Free access gives users a starting planning session. Premium is a
            $7 one-time unlock for users who schedule across time zones more
            often and want faster follow-through.
          </p>
        </div>

        <div style={priceCard}>
          <span>Premium</span>
          <strong>$7</strong>
          <em>one-time unlock</em>
        </div>
      </section>

      <section style={ctaBand}>
        <div>
          <p style={ctaEyebrow}>Start Planning</p>
          <h2 style={ctaTitle}>Ready to compare meeting times?</h2>
          <p style={ctaText}>
            Use the planner to review time zones and meeting windows before the
            invite goes out.
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
  marginBottom: "22px",
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
  gridTemplateColumns: "1fr 0.88fr",
  gap: "18px",
  alignItems: "center",
  marginBottom: "14px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 11px",
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
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.45",
  margin: "0 0 12px",
};

const miniStack = {
  display: "grid",
  gap: "8px",
};

const miniItem = {
  padding: "10px 12px",
  borderRadius: "12px",
  border: "1px solid #ddd6fe",
  background: "#faf9ff",
  display: "grid",
  gap: "3px",
  color: "#4b5563",
  fontSize: "13px",
  lineHeight: "1.35",
};

const toolCard = {
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "16px",
  background: "#faf9ff",
};

const toolLabel = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 6px",
  textTransform: "uppercase" as const,
};

const toolTitle = {
  color: "#111827",
  fontSize: "24px",
  fontWeight: 950,
  margin: "0 0 12px",
};

const buttonGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "8px",
  marginBottom: "10px",
};

const toolNote = {
  padding: "10px",
  borderRadius: "12px",
  background: "#ede9fe",
  color: "#4c1d95",
  fontSize: "13px",
  fontWeight: 850,
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
  padding: "17px",
};

const cardLabel = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
};

const cardTitle = {
  color: "#111827",
  fontSize: "21px",
  lineHeight: "1.14",
  fontWeight: 950,
  margin: "0 0 7px",
};

const cardText = {
  color: "#4b5563",
  fontSize: "13.5px",
  lineHeight: "1.38",
  margin: 0,
};

const accessBand = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "18px",
  alignItems: "center",
  marginBottom: "14px",
  padding: "14px 18px",
  borderRadius: "16px",
  background: "#f5f0ff",
  border: "1px solid #ddd6fe",
};

const accessEyebrow = {
  margin: "0 0 3px",
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
};

const accessTitle = {
  margin: "0 0 4px",
  color: "#111827",
  fontSize: "22px",
  fontWeight: 950,
};

const accessText = {
  margin: 0,
  color: "#4b5563",
  fontSize: "13.5px",
  lineHeight: "1.35",
};

const priceCard = {
  minWidth: "140px",
  padding: "11px",
  borderRadius: "14px",
  background: "#ffffff",
  color: "#4c1d95",
  border: "1px solid #ddd6fe",
  display: "grid",
  gap: "2px",
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
  lineHeight: "1.35",
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
