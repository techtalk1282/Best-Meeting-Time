/**
 * File: app/guides/page.tsx
 * Version: v2.2 (VISUAL GUIDE HUB REBUILD)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Rebuild Guides page as a true visual resource hub, not another generic card page
 * - Keep integrated white-shell header structure used by Blog/About/Features
 * - Add real guide imagery, practical website-use guidance, SEO-friendly summaries, and a clear user pathway
 * - Improve 100% desktop viewport fit by keeping the first view compact and guide-focused
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 * - No payment, premium unlock, API, or app logic changes
 *
 * ROLLBACK:
 * - Revert to app/guides/page.tsx v2.1 if this layout does not test cleanly
 */

export default function GuidesPage() {
  return (
    <main style={pageShell}>
      <header style={header}>
        <a href="/" style={brandLink}>
          <span style={brandIcon}>⌘</span>
          <span>Best Meeting Time</span>
        </a>

        <nav style={nav} aria-label="Guides navigation">
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
        <p style={eyebrow}>Time Zone Guides & Resources</p>

        <h1 style={heroTitle}>
          Learn How to Plan Better Meetings Across Time Zones
        </h1>

        <p style={heroText}>
          Use these guides to understand time-zone planning, remote team overlap,
          international client scheduling, daylight-saving confusion, and how to
          move from reading a guide into using the meeting planner.
        </p>
      </section>

      <section style={guideGrid} aria-label="Featured scheduling guides">
        <a href="/how-to-schedule-meetings-across-time-zones" style={guideCard}>
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
            alt="People reviewing a laptop during a scheduling meeting"
            style={guideImage}
          />

          <div style={guideBody}>
            <span style={guideTag}>Start Here</span>
            <h2 style={guideTitle}>How to Schedule Across Time Zones</h2>
            <p style={guideText}>
              Learn the basic planning process: compare locations, check local
              work hours, review overlap, and avoid sending a meeting invite at
              the wrong time.
            </p>
            <span style={readLink}>Read the guide →</span>
          </div>
        </a>

        <a href="/best-meeting-times-remote-teams" style={guideCard}>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
            alt="Remote team members collaborating around a table"
            style={guideImage}
          />

          <div style={guideBody}>
            <span style={guideTag}>Remote Teams</span>
            <h2 style={guideTitle}>Best Meeting Times for Remote Teams</h2>
            <p style={guideText}>
              Understand how to choose fair meeting windows for distributed
              teams, rotate difficult time slots, and reduce scheduling friction.
            </p>
            <span style={readLink}>Read the guide →</span>
          </div>
        </a>

        <a href="/time-zone-meeting-planner-guide" style={guideCard}>
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
            alt="Workspace with laptop used for planning and scheduling"
            style={guideImage}
          />

          <div style={guideBody}>
            <span style={guideTag}>Use the Tool</span>
            <h2 style={guideTitle}>Time Zone Meeting Planner Guide</h2>
            <p style={guideText}>
              See how the planner helps you compare cities, select meeting
              duration, review recommended windows, and prepare the next step.
            </p>
            <span style={readLink}>Read the guide →</span>
          </div>
        </a>
      </section>

      <section style={pathwaySection}>
        <div style={pathwayIntro}>
          <p style={sectionEyebrow}>Guide Pathway</p>
          <h2 style={sectionTitle}>How to Use This Resource Center</h2>
          <p style={sectionText}>
            Start with the guide that matches your scheduling problem, then use
            the tool to compare locations and choose a better meeting window.
          </p>
        </div>

        <div style={stepsGrid}>
          <div style={stepCard}>
            <span style={stepNumber}>1</span>
            <strong>Read the right guide</strong>
            <p>Choose a guide for time zones, remote teams, or planner usage.</p>
          </div>

          <div style={stepCard}>
            <span style={stepNumber}>2</span>
            <strong>Compare locations</strong>
            <p>Use the planner to review city times and working-hour overlap.</p>
          </div>

          <div style={stepCard}>
            <span style={stepNumber}>3</span>
            <strong>Pick a fair window</strong>
            <p>Select a practical meeting time before sending the invite.</p>
          </div>

          <div style={stepCard}>
            <span style={stepNumber}>4</span>
            <strong>Share or add later</strong>
            <p>Use premium actions when you need links or calendar workflow.</p>
          </div>
        </div>
      </section>

      <section style={ctaBand}>
        <div>
          <p style={bottomEyebrow}>Start Planning</p>
          <h2 style={bottomTitle}>Ready to turn a guide into a meeting time?</h2>
          <p style={bottomText}>
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
  margin: "18px auto 0",
  padding: "18px 18px 26px",
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
  marginBottom: "12px",
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

const hero = {
  textAlign: "center" as const,
  padding: "20px 20px 18px",
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

const heroTitle = {
  maxWidth: "860px",
  margin: "0 auto 10px",
  color: "#111827",
  fontSize: "clamp(34px, 4vw, 48px)",
  lineHeight: "1.05",
  fontWeight: 950,
  letterSpacing: "-0.04em",
};

const heroText = {
  maxWidth: "760px",
  margin: "0 auto",
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.55",
};

const guideGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  padding: "0 10px 16px",
};

const guideCard = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  overflow: "hidden",
  textDecoration: "none",
  color: "#111827",
  boxShadow: "0 12px 28px rgba(91,33,182,0.08)",
  display: "flex",
  flexDirection: "column" as const,
  minHeight: "330px",
};

const guideImage = {
  width: "100%",
  height: "126px",
  objectFit: "cover" as const,
  display: "block",
};

const guideBody = {
  padding: "16px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "9px",
  flex: 1,
};

const guideTag = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const guideTitle = {
  color: "#111827",
  fontSize: "22px",
  lineHeight: "1.12",
  fontWeight: 950,
  margin: 0,
};

const guideText = {
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: 0,
};

const readLink = {
  color: "#5b21b6",
  fontSize: "14px",
  fontWeight: 900,
  marginTop: "auto",
};

const pathwaySection = {
  display: "grid",
  gridTemplateColumns: "0.9fr 1.1fr",
  gap: "16px",
  padding: "0 10px 16px",
};

const pathwayIntro = {
  background: "#f8f7ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "20px",
};

const sectionEyebrow = {
  margin: "0 0 8px",
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
};

const sectionTitle = {
  color: "#111827",
  fontSize: "25px",
  lineHeight: "1.12",
  fontWeight: 950,
  margin: "0 0 10px",
};

const sectionText = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.55",
  margin: 0,
};

const stepsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "12px",
};

const stepCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "14px",
  display: "grid",
  gap: "6px",
};

const stepNumber = {
  width: "28px",
  height: "28px",
  borderRadius: "999px",
  background: "#5b21b6",
  color: "#ffffff",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "13px",
  fontWeight: 950,
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

const bottomEyebrow = {
  margin: "0 0 4px",
  color: "#facc15",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const bottomTitle = {
  margin: "0 0 4px",
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: 950,
};

const bottomText = {
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
