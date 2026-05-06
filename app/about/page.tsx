/**
 * File: app/about/page.tsx
 * Version: v6.0 (PREMIUM ABOUT PAGE REBUILD)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Rebuild failed About page using the Blog page white-shell visual system
 * - Remove empty-card feeling and weak whitespace
 * - Improve premium content density, visual balance, and SEO value
 * - Keep first desktop viewport clean at 100% zoom
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v5.1 if this rebuild does not test cleanly
 */

export default function AboutPage() {
  return (
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
            A Practical Meeting Time Planner for Global Work
          </h1>

          <p style={intro}>
            Best Meeting Time helps remote teams, consultants, agencies,
            clients, and global professionals compare time zones before the
            invite goes out.
          </p>

          <p style={introSmall}>
            The goal is simple: make it easier to find fair meeting windows,
            reduce scheduling mistakes, and move faster across locations.
          </p>
        </div>

        <div style={visualPanel}>
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80"
            alt="Remote team planning a meeting across locations"
            style={visualImage}
          />

          <div style={visualCaption}>
            <strong>Built for real scheduling decisions.</strong>
            <span>
              Compare cities, review local times, and choose a practical window
              before sending the meeting invite.
            </span>
          </div>
        </div>
      </section>

      <section style={missionGrid}>
        <div style={missionCard}>
          <p style={sectionEyebrow}>Our Mission</p>
          <h2 style={sectionTitle}>
            Make time zone scheduling easier, clearer, and more fair.
          </h2>

          <p style={sectionText}>
            Scheduling across time zones should not require guesswork, repeated
            manual conversions, or long back-and-forth messages. Best Meeting
            Time gives users a faster way to compare local times and identify
            meeting windows that make sense for everyone involved.
          </p>
        </div>

        <div style={focusCard}>
          <p style={sectionEyebrow}>What We Focus On</p>

          <div style={focusItem}>
            <strong>Clarity</strong>
            <span>Side-by-side local times that are easy to compare.</span>
          </div>

          <div style={focusItem}>
            <strong>Fairness</strong>
            <span>Better overlap windows for distributed teams.</span>
          </div>

          <div style={focusItem}>
            <strong>Speed</strong>
            <span>Less back-and-forth before the invite is sent.</span>
          </div>
        </div>
      </section>

      <section style={valueGrid}>
        <article style={valueCard}>
          <p style={cardLabel}>Avoid Mistakes</p>
          <h3 style={cardTitle}>Reduce time zone confusion</h3>
          <p style={cardText}>
            Compare cities before scheduling so meetings do not get missed
            because of wrong local times, daylight-saving confusion, or manual
            conversion errors.
          </p>
        </article>

        <article style={valueCard}>
          <p style={cardLabel}>Schedule Fairly</p>
          <h3 style={cardTitle}>Find better overlap windows</h3>
          <p style={cardText}>
            Review realistic windows that help keep one region from always
            taking the earliest or latest meeting slot.
          </p>
        </article>

        <article style={valueCard}>
          <p style={cardLabel}>Move Faster</p>
          <h3 style={cardTitle}>Send clearer meeting invites</h3>
          <p style={cardText}>
            Give clients, partners, and remote teammates a practical time
            choice without endless timezone messages.
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
  margin: "24px auto",
  padding: "18px",
  background: "#ffffff",
  color: "#111827",
  border: "1px solid rgba(237,233,254,0.95)",
  boxShadow: "0 18px 50px rgba(30,27,75,0.16)",
};

const header = {
  minHeight: "70px",
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
  padding: "10px 18px",
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

const heroSection = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "14px",
  marginBottom: "14px",
};

const heroCopy = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "28px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 12px",
  padding: "7px 14px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "12px",
  fontWeight: 950,
};

const headline = {
  color: "#111827",
  fontSize: "clamp(34px, 4vw, 48px)",
  lineHeight: "1.04",
  margin: "0 0 12px",
  fontWeight: 950,
  letterSpacing: "-0.045em",
};

const intro = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.55",
  margin: "0 0 10px",
};

const introSmall = {
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: 0,
};

const visualPanel = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "10px",
  boxShadow: "0 8px 24px rgba(91,33,182,0.08)",
};

const visualImage = {
  width: "100%",
  height: "190px",
  objectFit: "cover" as const,
  borderRadius: "14px",
  display: "block",
};

const visualCaption = {
  padding: "12px 4px 2px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "4px",
  color: "#4b5563",
  fontSize: "13.5px",
  lineHeight: "1.42",
};

const missionGrid = {
  display: "grid",
  gridTemplateColumns: "1.35fr 0.65fr",
  gap: "14px",
  marginBottom: "14px",
};

const missionCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "22px",
  boxShadow: "0 7px 18px rgba(91,33,182,0.06)",
};

const focusCard = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "22px",
};

const sectionEyebrow = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const sectionTitle = {
  color: "#111827",
  fontSize: "24px",
  lineHeight: "1.18",
  fontWeight: 950,
  margin: "0 0 10px",
};

const sectionText = {
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.55",
  margin: 0,
};

const focusItem = {
  display: "grid",
  gap: "3px",
  padding: "9px 0",
  color: "#4b5563",
  fontSize: "13.5px",
  lineHeight: "1.4",
  borderTop: "1px solid #ede9fe",
};

const valueGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "14px",
  marginBottom: "14px",
};

const valueCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "20px",
  boxShadow: "0 7px 18px rgba(91,33,182,0.06)",
};

const cardLabel = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const cardTitle = {
  color: "#111827",
  fontSize: "19px",
  lineHeight: "1.18",
  fontWeight: 950,
  margin: "0 0 8px",
};

const cardText = {
  color: "#4b5563",
  fontSize: "13.5px",
  lineHeight: "1.52",
  margin: 0,
};

const ctaBand = {
  padding: "18px 22px",
  borderRadius: "16px",
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
  letterSpacing: "0.05em",
};

const ctaTitle = {
  margin: "0 0 4px",
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: 950,
  letterSpacing: "-0.02em",
};

const ctaText = {
  margin: 0,
  color: "rgba(255,255,255,0.88)",
  fontSize: "14px",
  lineHeight: "1.45",
};

const ctaButton = {
  background: "#ffffff",
  color: "#5b21b6",
  padding: "11px 18px",
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
