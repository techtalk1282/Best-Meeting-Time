/**
 * File: app/features/page.tsx
 * Version: v3.4 (100% FIT + BALANCED GOLD ACTIONS)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Keep preferred collaboration image
 * - Restore full 100% desktop landing fit
 * - Keep gold buttons balanced inside the workflow card
 * - Preserve premium feature showcase content
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v3.3 if this version does not test cleanly
 */

export default function FeaturesPage() {
  return (
    <main style={pageShell}>
      <header style={header}>
        <a href="/" style={brandLink} aria-label="Best Meeting Time home">
  <img
    src="/images/branding/logo.png"
    alt="Best Meeting Time"
    style={brandLogo}
  />
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

            <strong>Remote teams. Client calls. Global schedules.</strong>
            <span>Choose the best meeting window before the invite goes out.</span>
          </div>
        </div>

        <div style={featureCopy}>
          <div>
            <p style={sectionEyebrow}>Real workflow features</p>

            <h2 style={sectionTitle}>
              Built around how people actually schedule.
            </h2>

            <p style={sectionText}>
              Select cities, compare local times, review recommended windows,
              and move directly into sharing or calendar actions.
            </p>
          </div>

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
          <h2 style={cardTitle}>Choose cities fast.</h2>
          <p style={cardText}>
            Compare locations side by side and quickly swap cities when plans change.
          </p>
        </article>

        <article style={card}>
          <p style={cardLabel}>Smart Windows</p>
          <h2 style={cardTitle}>See best times and alternatives.</h2>
          <p style={cardText}>
            Review recommended meeting windows plus backup time options.
          </p>
        </article>

        <article style={card}>
          <p style={cardLabel}>Premium Workflow</p>
          <h2 style={cardTitle}>Share and add to calendars.</h2>
          <p style={cardText}>
            Unlock sharing and Google, Outlook, and calendar scheduling actions.
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
  margin: "8px auto",
  padding: "10px",
  background: "#ffffff",
  color: "#111827",
  border: "1px solid rgba(237,233,254,0.95)",
  boxShadow: "0 18px 50px rgba(30,27,75,0.16)",
};

const header = {
  minHeight: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  borderBottom: "1px solid #ede9fe",
  marginBottom: "10px",
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
  padding: "8px 16px",
  borderRadius: "9px",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.08,
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
  gap: "14px",
  alignItems: "end",
  marginBottom: "8px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 7px",
  padding: "6px 14px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "13px",
  fontWeight: 950,
};

const headline = {
  color: "#111827",
  fontSize: "clamp(28px, 3.45vw, 40px)",
  lineHeight: "1.01",
  margin: "0 0 5px",
  fontWeight: 950,
  letterSpacing: "-0.045em",
};

const subheadline = {
  color: "#4b5563",
  fontSize: "13.5px",
  lineHeight: "1.28",
  margin: 0,
};

const accessCard = {
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  background: "#faf9ff",
  padding: "11px",
};

const accessLabel = {
  margin: "0 0 6px",
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
};

const accessRows = {
  display: "grid",
  gap: "5px",
  color: "#4b5563",
  fontSize: "13px",
  lineHeight: "1.25",
};

const showcase = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
  alignItems: "stretch",
  marginBottom: "9px",
};

const imageCard = {
  position: "relative" as const,
  overflow: "hidden",
  minHeight: "205px",
  borderRadius: "18px",
  border: "1px solid #ddd6fe",
  background: "#faf9ff",
};

const featureImage = {
  width: "100%",
  height: "100%",
  minHeight: "205px",
  objectFit: "cover" as const,
  display: "block",
};

const imageOverlay = {
  position: "absolute" as const,
  left: "12px",
  right: "12px",
  bottom: "12px",
  padding: "9px 11px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.92)",
  color: "#111827",
  display: "grid",
  gap: "2px",
  fontSize: "12px",
  lineHeight: "1.22",
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
  padding: "14px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  gap: "14px",
};

const sectionEyebrow = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 5px",
  textTransform: "uppercase" as const,
};

const sectionTitle = {
  color: "#111827",
  fontSize: "21px",
  lineHeight: "1.06",
  fontWeight: 950,
  margin: "0 0 6px",
};

const sectionText = {
  color: "#4b5563",
  fontSize: "12.75px",
  lineHeight: "1.28",
  margin: 0,
};

const goldButtonGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "9px",
};

const goldButton = {
  background: "#facc15",
  color: "#111827",
  border: "none",
  borderRadius: "999px",
  padding: "10px 12px",
  fontSize: "13px",
  fontWeight: 900,
  cursor: "pointer",
  boxShadow: "0 6px 14px rgba(250,204,21,0.28)",
};

const featureGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "9px",
  marginBottom: "9px",
};

const card = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "12px",
};

const cardLabel = {
  color: "#6d28d9",
  fontSize: "11px",
  fontWeight: 950,
  margin: "0 0 5px",
  textTransform: "uppercase" as const,
};

const cardTitle = {
  color: "#111827",
  fontSize: "18px",
  lineHeight: "1.08",
  fontWeight: 950,
  margin: "0 0 4px",
};

const cardText = {
  color: "#4b5563",
  fontSize: "12.5px",
  lineHeight: "1.22",
  margin: 0,
};

const ctaBand = {
  padding: "10px 18px",
  borderRadius: "16px",
  background: "#5b21b6",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
};

const ctaEyebrow = {
  margin: "0 0 1px",
  color: "#facc15",
  fontSize: "11.5px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
};

const ctaTitle = {
  margin: "0 0 1px",
  color: "#ffffff",
  fontSize: "19px",
  fontWeight: 950,
};

const ctaText = {
  margin: 0,
  color: "rgba(255,255,255,0.88)",
  fontSize: "12px",
  lineHeight: "1.2",
};

const ctaButton = {
  background: "#ffffff",
  color: "#5b21b6",
  padding: "8px 15px",
  borderRadius: "9px",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.08,
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
