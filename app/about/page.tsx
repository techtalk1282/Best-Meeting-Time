/**
 * File: app/about/page.tsx
 * Version: v7.2 (BRANDED VISUAL PANEL REPLACE IMAGE)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Replace awkward cropped photo with controlled branded scheduling visual
 * - Preserve current 100% desktop viewport fit
 * - Keep Blog-page matching white-shell structure
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v7.1 if this visual panel does not test cleanly
 */

export default function AboutPage() {
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

        <nav style={nav} aria-label="About page navigation">
          <a href="/" style={navLink}>Home</a>
         <a href="/how-it-works" style={navLink}>Schedule a Meeting</a>
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
        <p style={eyebrow}>About Best Meeting Time</p>

        <h1 style={headline}>
          Smarter Scheduling for Remote Teams, Clients, and Global Work
        </h1>

        <p style={subheadline}>
          Best Meeting Time helps people compare time zones faster, find fair
          overlap windows, and schedule meetings with more confidence before the
          invite goes out.
        </p>
      </section>

      <section style={imagePanel}>
        <div style={mockVisual}>
          <div style={mockHeader}>
            <span style={mockDot}></span>
            <strong>Best Overlap Window</strong>
            <span style={mockBadge}>Recommended</span>
          </div>

          <div style={cityGrid}>
            <div style={cityCard}>
              <span>New York</span>
              <strong>9:00 AM</strong>
            </div>

            <div style={cityCard}>
              <span>London</span>
              <strong>2:00 PM</strong>
            </div>

            <div style={cityCard}>
              <span>Tokyo</span>
              <strong>11:00 PM</strong>
            </div>
          </div>

          <div style={windowBar}>
            <span>Best meeting window</span>
            <strong>9:00 AM — 11:00 AM ET</strong>
          </div>
        </div>

        <div style={imageText}>
          <strong>Built for practical scheduling decisions.</strong>
          <span>
            Compare cities, local times, working hours, and meeting windows
            before sending a remote team or client invite.
          </span>
        </div>
      </section>

      <section style={cardGrid}>
        <article style={card}>
          <p style={cardLabel}>Our Mission</p>
          <h2 style={cardTitle}>Make time zone planning easier.</h2>
          <p style={cardText}>
            Scheduling across locations should not depend on guesswork,
            repeated conversions, or long message threads.
          </p>
        </article>

        <article style={card}>
          <p style={cardLabel}>Why It Matters</p>
          <h2 style={cardTitle}>Better meetings start with better timing.</h2>
          <p style={cardText}>
            Good timing helps reduce missed calls, late-night meetings,
            daylight-saving mistakes, and team confusion.
          </p>
        </article>

        <article style={card}>
          <p style={cardLabel}>Who It Helps</p>
          <h2 style={cardTitle}>Remote teams, clients, and consultants.</h2>
          <p style={cardText}>
            Useful for distributed teams, freelancers, agencies, sales calls,
            interviews, and global client scheduling.
          </p>
        </article>
      </section>

      <section style={ctaBand}>
        <div>
          <p style={ctaEyebrow}>Start Planning</p>
          <h2 style={ctaTitle}>Ready to find a better meeting time?</h2>
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
  textDecoration: "none",
  flexShrink: 0,
};

const brandLogo = {
  display: "block",
  width: "160px",
  height: "auto",
  objectFit: "contain" as const,
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
  maxWidth: "820px",
  margin: "0 auto 18px",
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

const imagePanel = {
  display: "grid",
  gridTemplateColumns: "1fr 1.15fr",
  gap: "16px",
  alignItems: "center",
  marginBottom: "14px",
  padding: "12px",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  background: "#faf9ff",
};

const mockVisual = {
  height: "92px",
  borderRadius: "14px",
  padding: "10px",
  background: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 55%, #7c3aed 100%)",
  color: "#ffffff",
  display: "grid",
  gap: "7px",
  boxShadow: "0 10px 22px rgba(91,33,182,0.18)",
};

const mockHeader = {
  display: "flex",
  alignItems: "center",
  gap: "7px",
  fontSize: "11px",
  lineHeight: 1,
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
  color: "#ffffff",
  fontSize: "9px",
  fontWeight: 900,
};

const cityGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "6px",
};

const cityCard = {
  display: "grid",
  gap: "2px",
  padding: "6px 7px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.14)",
  border: "1px solid rgba(255,255,255,0.18)",
  fontSize: "10px",
};

const windowBar = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
  padding: "5px 8px",
  borderRadius: "10px",
  background: "#ffffff",
  color: "#4c1d95",
  fontSize: "10px",
  fontWeight: 850,
};

const imageText = {
  display: "grid",
  gap: "5px",
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.42",
};

const cardGrid = {
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
