/**
 * File: app/best-meeting-times-remote-teams/page.tsx
 * Version: v3.0 (PREMIUM REMOTE TEAMS EDITORIAL REDESIGN)
 * Date: 2026-05-12
 *
 * PURPOSE:
 * - Completely redesign the Remote Teams article page
 * - Match the premium visual quality of the Guides page
 * - Add strong visual hierarchy, color segmentation, and editorial structure
 * - Introduce global collaboration imagery and richer visual storytelling
 * - Preserve current routes, SEO content, and responsive behavior
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v2.0 if redesign does not test cleanly
 */

import FooterSection from "../ui/FooterSection";

export default function BestMeetingTimesRemoteTeamsPage() {
  return (
    <>
      <main style={pageShell}>
        <header style={header}>
          <a href="/" style={brandLink}>
            <span style={brandIcon}>⌘</span>
            <span>Best Meeting Time</span>
          </a>

          <nav style={nav} aria-label="Remote team article navigation">
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
          <div style={heroContent}>
            <span style={heroBadge}>REMOTE TEAM SCHEDULING GUIDE</span>

            <h1 style={headline}>
              Better Meeting Times for Global Remote Teams
            </h1>

            <p style={intro}>
              Coordinate meetings across cities, countries, and continents
              without frustrating your team. Compare local times, create fairer
              schedules, and improve collaboration across every region.
            </p>

            <div style={heroStats}>
              <div style={statCard}>
                <strong style={statValue}>24</strong>
                <span style={statLabel}>Major Time Zones</span>
              </div>

              <div style={statCard}>
                <strong style={statValue}>Remote</strong>
                <span style={statLabel}>Global Collaboration</span>
              </div>

              <div style={statCard}>
                <strong style={statValue}>Fair</strong>
                <span style={statLabel}>Meeting Rotation</span>
              </div>
            </div>

            <a href="/how-it-works#schedule-tool" style={primaryButton}>
              <span style={primaryMain}>Schedule a Meeting</span>
              <span style={primarySub}>Free to try — no sign-up</span>
            </a>
          </div>

          <div style={heroVisual}>
            <img
              src="/images/guides/global-timezones-guide.webp"
              alt="Global remote collaboration"
              style={heroImage}
            />

            <div style={overlayCard}>
              <div style={overlayRow}>
                <span style={city}>New York</span>
                <strong style={cityTime}>9:00 AM</strong>
              </div>

              <div style={overlayRow}>
                <span style={city}>London</span>
                <strong style={cityTime}>2:00 PM</strong>
              </div>

              <div style={overlayRow}>
                <span style={city}>Tokyo</span>
                <strong style={cityTime}>10:00 PM</strong>
              </div>
            </div>
          </div>
        </section>

        <section style={summaryGrid}>
          <div style={summaryCardPurple}>
            <span style={summaryTag}>Remote Teams</span>

            <h2 style={summaryTitle}>
              Protect Working Hours
            </h2>

            <p style={summaryText}>
              Repeated late-night or early-morning meetings eventually create
              burnout. Better scheduling helps teams stay productive and engaged.
            </p>
          </div>

          <div style={summaryCardBlue}>
            <span style={summaryTag}>Scheduling Strategy</span>

            <h2 style={summaryTitle}>
              Find Better Overlap Windows
            </h2>

            <p style={summaryText}>
              Compare local times before scheduling meetings so every region has
              a realistic chance to participate comfortably.
            </p>
          </div>

          <div style={summaryCardGold}>
            <span style={summaryTag}>Global Collaboration</span>

            <h2 style={summaryTitle}>
              Rotate Inconvenient Meetings
            </h2>

            <p style={summaryText}>
              When no perfect overlap exists, rotate difficult meeting windows
              fairly across teams and regions.
            </p>
          </div>
        </section>

        <section style={featureSection}>
          <div style={featureContent}>
            <span style={featureEyebrow}>WHY THIS MATTERS</span>

            <h2 style={sectionHeading}>
              Remote teams work better when scheduling feels fair.
            </h2>

            <p style={sectionText}>
              One bad meeting may not matter, but repeated scheduling problems
              eventually reduce participation, focus, and collaboration. Teams
              that consistently respect local working hours tend to communicate
              better and stay more connected.
            </p>

            <div style={highlightGrid}>
              <div style={highlightCard}>
                <strong style={highlightTitle}>Avoid burnout</strong>
                <p style={highlightText}>
                  Prevent repeated after-hours meetings for the same team.
                </p>
              </div>

              <div style={highlightCard}>
                <strong style={highlightTitle}>Improve attendance</strong>
                <p style={highlightText}>
                  Better meeting windows usually increase participation.
                </p>
              </div>

              <div style={highlightCard}>
                <strong style={highlightTitle}>Reduce confusion</strong>
                <p style={highlightText}>
                  Compare cities before sending the calendar invite.
                </p>
              </div>

              <div style={highlightCard}>
                <strong style={highlightTitle}>Respect global teams</strong>
                <p style={highlightText}>
                  Fair scheduling creates healthier collaboration habits.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={workflowSection}>
          <div style={workflowHeader}>
            <span style={featureEyebrow}>REMOTE TEAM WORKFLOW</span>

            <h2 style={sectionHeading}>
              A better process for scheduling across time zones
            </h2>
          </div>

          <div style={workflowGrid}>
            <div style={workflowCard}>
              <div style={workflowNumber}>01</div>

              <h3 style={workflowTitle}>Compare Cities</h3>

              <p style={workflowText}>
                Start by identifying each participant’s city or time zone before
                proposing a meeting.
              </p>
            </div>

            <div style={workflowCard}>
              <div style={workflowNumber}>02</div>

              <h3 style={workflowTitle}>Review Overlap</h3>

              <p style={workflowText}>
                Focus on realistic working-hour overlap instead of convenience
                for a single office.
              </p>
            </div>

            <div style={workflowCard}>
              <div style={workflowNumber}>03</div>

              <h3 style={workflowTitle}>Rotate Fairly</h3>

              <p style={workflowText}>
                Share difficult meeting times fairly between global regions when
                no perfect overlap exists.
              </p>
            </div>
          </div>
        </section>

        <section style={tableSection}>
          <div style={tableHeader}>
            <span style={featureEyebrow}>GLOBAL SCHEDULING EXAMPLES</span>

            <h2 style={sectionHeading}>
              Good meeting windows by team type
            </h2>
          </div>

          <div style={tableGrid}>
            <div style={tableCard}>
              <strong style={tableTitle}>US-only team</strong>
              <p style={tableCopy}>
                Midday Eastern Time often creates the best overlap.
              </p>
            </div>

            <div style={tableCard}>
              <strong style={tableTitle}>US + Europe</strong>
              <p style={tableCopy}>
                US mornings and Europe afternoons usually work best.
              </p>
            </div>

            <div style={tableCard}>
              <strong style={tableTitle}>US + Asia</strong>
              <p style={tableCopy}>
                Rotate meeting times and reduce unnecessary live meetings.
              </p>
            </div>

            <div style={tableCard}>
              <strong style={tableTitle}>Global organization</strong>
              <p style={tableCopy}>
                Use rotating schedules with strong async documentation.
              </p>
            </div>
          </div>
        </section>

        <section style={bottomCTA}>
          <div>
            <p style={bottomEyebrow}>READY TO SCHEDULE BETTER?</p>

            <h2 style={bottomHeading}>
              Compare cities before you send the invite.
            </h2>

            <p style={bottomText}>
              Review overlap windows, compare local times, and choose a meeting
              schedule that works better for everyone.
            </p>
          </div>

          <a href="/how-it-works#schedule-tool" style={bottomButton}>
            <span style={bottomButtonMain}>Schedule a Meeting</span>
            <span style={bottomButtonSub}>Free to try — no sign-up</span>
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
  marginBottom: "22px",
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
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: "22px",
  alignItems: "stretch",
  marginBottom: "22px",
};

const heroContent = {
  background: "linear-gradient(180deg, #ffffff 0%, #f6f2ff 100%)",
  border: "1px solid #ddd6fe",
  borderRadius: "22px",
  padding: "34px",
};

const heroBadge = {
  display: "inline-block",
  padding: "7px 14px",
  borderRadius: "999px",
  background: "#ede9fe",
  color: "#5b21b6",
  fontSize: "12px",
  fontWeight: 900,
  marginBottom: "16px",
};

const headline = {
  color: "#111827",
  fontSize: "clamp(40px, 5vw, 58px)",
  lineHeight: "1.02",
  margin: "0 0 18px",
  fontWeight: 950,
  letterSpacing: "-0.05em",
};

const intro = {
  color: "#4b5563",
  fontSize: "17px",
  lineHeight: "1.7",
  marginBottom: "22px",
};

const heroStats = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
  marginBottom: "22px",
};

const statCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "14px",
  padding: "14px",
  textAlign: "center" as const,
};

const statValue = {
  display: "block",
  color: "#5b21b6",
  fontSize: "22px",
  fontWeight: 950,
  marginBottom: "6px",
};

const statLabel = {
  color: "#4b5563",
  fontSize: "12px",
  fontWeight: 800,
};

const primaryButton = {
  background: "#5b21b6",
  color: "#ffffff",
  padding: "12px 18px",
  borderRadius: "10px",
  textDecoration: "none",
  display: "inline-flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 12px 24px rgba(91,33,182,0.22)",
};

const primaryMain = {
  fontSize: "13px",
  fontWeight: 950,
};

const primarySub = {
  fontSize: "10px",
  fontWeight: 900,
};

const heroVisual = {
  position: "relative" as const,
  borderRadius: "22px",
  overflow: "hidden",
  minHeight: "100%",
};

const heroImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover" as const,
  display: "block",
};

const overlayCard = {
  position: "absolute" as const,
  bottom: "20px",
  right: "20px",
  background: "rgba(17,24,39,0.88)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  padding: "16px",
  minWidth: "180px",
  display: "grid",
  gap: "10px",
};

const overlayRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
};

const city = {
  color: "#ffffff",
  fontSize: "13px",
  fontWeight: 800,
};

const cityTime = {
  color: "#facc15",
  fontSize: "15px",
  fontWeight: 950,
};

const summaryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  marginBottom: "22px",
};

const summaryCardPurple = {
  background: "linear-gradient(180deg, #5b21b6 0%, #4c1d95 100%)",
  color: "#ffffff",
  borderRadius: "18px",
  padding: "24px",
};

const summaryCardBlue = {
  background: "linear-gradient(180deg, #2563eb 0%, #1d4ed8 100%)",
  color: "#ffffff",
  borderRadius: "18px",
  padding: "24px",
};

const summaryCardGold = {
  background: "linear-gradient(180deg, #facc15 0%, #eab308 100%)",
  color: "#111827",
  borderRadius: "18px",
  padding: "24px",
};

const summaryTag = {
  display: "inline-block",
  marginBottom: "14px",
  padding: "6px 10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.18)",
  fontSize: "11px",
  fontWeight: 900,
  letterSpacing: "0.04em",
};

const summaryTitle = {
  fontSize: "24px",
  lineHeight: "1.1",
  fontWeight: 950,
  margin: "0 0 12px",
};

const summaryText = {
  fontSize: "15px",
  lineHeight: "1.7",
  margin: 0,
};

const featureSection = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "22px",
  padding: "34px",
  marginBottom: "22px",
};

const featureContent = {};

const featureEyebrow = {
  display: "inline-block",
  color: "#5b21b6",
  fontSize: "12px",
  fontWeight: 950,
  marginBottom: "12px",
  letterSpacing: "0.04em",
};

const sectionHeading = {
  color: "#111827",
  fontSize: "42px",
  lineHeight: "1.05",
  fontWeight: 950,
  margin: "0 0 18px",
  letterSpacing: "-0.04em",
};

const sectionText = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.75",
  maxWidth: "850px",
  marginBottom: "24px",
};

const highlightGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "16px",
};

const highlightCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "20px",
};

const highlightTitle = {
  display: "block",
  color: "#111827",
  fontSize: "18px",
  fontWeight: 950,
  marginBottom: "8px",
};

const highlightText = {
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: 0,
};

const workflowSection = {
  marginBottom: "22px",
};

const workflowHeader = {
  marginBottom: "18px",
};

const workflowGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
};

const workflowCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "24px",
  boxShadow: "0 14px 30px rgba(91,33,182,0.08)",
};

const workflowNumber = {
  width: "42px",
  height: "42px",
  borderRadius: "999px",
  background: "#ede9fe",
  color: "#5b21b6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: 950,
  marginBottom: "18px",
};

const workflowTitle = {
  color: "#111827",
  fontSize: "22px",
  fontWeight: 950,
  margin: "0 0 10px",
};

const workflowText = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.7",
  margin: 0,
};

const tableSection = {
  background: "linear-gradient(180deg, #1e1b4b 0%, #312e81 100%)",
  borderRadius: "24px",
  padding: "34px",
  marginBottom: "24px",
};

const tableHeader = {
  marginBottom: "24px",
};

const tableGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "16px",
};

const tableCard = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "18px",
  padding: "22px",
  backdropFilter: "blur(8px)",
};

const tableTitle = {
  display: "block",
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: 950,
  marginBottom: "10px",
};

const tableCopy = {
  color: "rgba(255,255,255,0.84)",
  fontSize: "15px",
  lineHeight: "1.65",
  margin: 0,
};

const bottomCTA = {
  background: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)",
  borderRadius: "24px",
  padding: "28px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "24px",
};

const bottomEyebrow = {
  color: "#facc15",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 10px",
  letterSpacing: "0.04em",
};

const bottomHeading = {
  color: "#ffffff",
  fontSize: "36px",
  lineHeight: "1.08",
  fontWeight: 950,
  margin: "0 0 12px",
};

const bottomText = {
  color: "rgba(255,255,255,0.88)",
  fontSize: "15px",
  lineHeight: "1.7",
  maxWidth: "700px",
  margin: 0,
};

const bottomButton = {
  background: "#facc15",
  color: "#111827",
  padding: "14px 18px",
  borderRadius: "12px",
  textDecoration: "none",
  display: "inline-flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  minWidth: "210px",
  boxShadow: "0 14px 28px rgba(0,0,0,0.18)",
};

const bottomButtonMain = {
  color: "#111827",
  fontSize: "14px",
  fontWeight: 950,
};

const bottomButtonSub = {
  color: "#111827",
  fontSize: "11px",
  fontWeight: 900,
  opacity: 1,
};
