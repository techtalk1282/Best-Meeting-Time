/**
 * File: app/features/page.tsx
 * Version: v3.2 (GLOBAL COLLABORATION + GOLD ACTIONS)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Restore clean 100% desktop landing fit
 * - Replace planner preview with global collaboration image
 * - Keep stronger workflow content section
 * - Add gold premium action buttons
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v3.1 if needed
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
        <div style={imageCard}>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Global remote team collaboration meeting"
            style={featureImage}
          />

          <div style={imageOverlay}>
            <div style={locationRow}>
              <span>New York</span>
              <span>London</span>
              <span>Tokyo</span>
            </div>

            <strong>
              Remote teams. Client calls. Global schedules.
            </strong>

            <span>
              Choose the best meeting window before the invite goes out.
            </span>
          </div>
        </div>

        <div style={featureCopy}>
          <p style={sectionEyebrow}>Real workflow features</p>

          <h2 style={sectionTitle}>
            Built around how people actually schedule.
          </h2>

          <p style={sectionText}>
            Select cities, compare local times, review recommended windows, and
            move directly into sharing or calendar actions without rebuilding
            the meeting details from scratch.
          </p>

          <div style={goldButtonGrid}>
            <button style={goldButton}>Share Link</button>
            <button style={goldButton}>Add to Google</button>
            <button style={goldButton}>Add to Outlook</button>
            <button style={goldButton}>Add to Calendar</button>
          </div>
        </div>
      </section>

      <section style={featureGrid}>
        <article style={card}>
          <p style={cardLabel}>City Selection</p>

          <h2 style={cardTitle}>
            Choose cities fast.
          </h2>

          <p style={cardText}>
            Compare locations side by side and quickly swap cities when plans
            change.
          </p>
        </article>

        <article style={card}>
          <p style={cardLabel}>Smart Windows</p>

          <h2 style={cardTitle}>
            See best times and alternatives.
          </h2>

          <p style={cardText}>
            Review recommended meeting windows plus backup time options across
            different regions.
          </p>
        </article>

        <article style={card}>
          <p style={cardLabel}>Premium Workflow</p>

          <h2 style={cardTitle}>
            Share and add to calendars.
          </h2>

          <p style={cardText}>
            Unlock sharing and Google, Outlook, and calendar scheduling actions.
          </p>
        </article>
      </section>

      <section style={ctaBand}>
        <div>
          <p style={ctaEyebrow}>Start Planning</p>

          <h2 style={ctaTitle}>
            Ready to try the scheduler?
          </h2>

          <p style={ctaText}>
            Compare meeting times first, then unlock premium tools when you
            need to share and schedule faster.
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

const navButtonMain = {
  fontSize: "13px",
  fontWeight: 950,
};

const navButtonSub = {
  fontSize: "10px",
  fontWeight: 850,
  opacity: 0.94,
};

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

const imageCard = {
  position: "relative" as const,
  overflow: "hidden",
  minHeight: "250px",
  borderRadius: "18px",
  border: "1px solid #ddd6fe",
  background: "#faf9ff",
};

const featureImage = {
  width: "100%",
  height: "100%",
  minHeight: "250px",
  objectFit: "cover" as const,
  display: "block",
};

const imageOverlay = {
  position: "absolute" as const,
  left: "14px",
  right: "14px",
  bottom: "14px",
  padding: "11px 13px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.92)",
  color: "#111827",
  display: "grid",
  gap: "4px",
  fontSize: "13px",
  lineHeight: "1.32",
  boxShadow: "0 10px 24px rgba(30,27,75,0.18)",
};

const locationRow = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap" as const,
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
  margin: "0 0 14px",
};

const goldButtonGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "10px",
};

const goldButton = {
  background: "#facc15",
  color: "#111827",
  border: "none",
  borderRadius: "999px",
  padding: "12px 14px",
  fontSize: "14px",
  fontWeight: 900,
  cursor: "pointer",
  boxShadow: "0 6px 14px rgba(250,204,21,0.28)",
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

const ctaMain = {
  fontSize: "13px",
  fontWeight: 950,
};

const ctaSub = {
  fontSize: "10px",
  fontWeight: 850,
  opacity: 0.9,
};
