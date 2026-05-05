/**
 * File: app/best-meeting-times-remote-teams/page.tsx
 * Version: v2.0 (PREMIUM REMOTE TEAMS ARTICLE LAYOUT)
 * Date: 2026-05-05
 *
 * PURPOSE:
 * - Rebuild the remote teams article page with a polished target-UI layout
 * - Replace stacked plain cards with a structured article experience
 * - Align navigation and CTA wording with homepage/blog standards
 * - Remove “free tool” wording and use “Schedule a Meeting / Free to try — no sign-up”
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v1.0 if this layout does not test cleanly
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

        <section style={heroGrid}>
          <div style={heroCopy}>
            <p style={eyebrow}>Remote Team Scheduling Guide</p>

            <h1 style={headline}>
              Best Meeting Times for Remote Teams
            </h1>

            <p style={intro}>
              Remote teams work best when meetings are planned with everyone’s
              local time in mind. Use this guide to choose fairer meeting windows,
              avoid inconvenient schedules, and make collaboration easier across
              cities, countries, and continents.
            </p>

            <a href="/how-it-works#schedule-tool" style={primaryButton}>
              <span style={primaryMain}>Schedule a Meeting</span>
              <span style={primarySub}>Free to try — no sign-up</span>
            </a>
          </div>

          <div style={previewCard}>
            <p style={previewEyebrow}>Example meeting window</p>

            <div style={timeRow}>
              <div style={timeBox}>
                <span style={timeLabel}>New York</span>
                <strong style={timeValue}>9:00 AM</strong>
                <span style={timeNote}>Team start</span>
              </div>

              <div style={timeBox}>
                <span style={timeLabel}>London</span>
                <strong style={timeValue}>2:00 PM</strong>
                <span style={timeNote}>Same meeting</span>
              </div>
            </div>

            <div style={bestWindow}>
              <strong>Good overlap window</strong>
              <span>US morning + Europe afternoon</span>
            </div>
          </div>
        </section>

        <section style={summaryGrid}>
          <div style={summaryCard}>
            <span style={summaryNumber}>01</span>
            <strong>Protect working hours</strong>
            <p>
              Avoid forcing one region into early morning, late night, or
              repeated off-hour calls.
            </p>
          </div>

          <div style={summaryCard}>
            <span style={summaryNumber}>02</span>
            <strong>Find fair overlap</strong>
            <p>
              Compare local 9 AM to 5 PM windows before sending the invite.
            </p>
          </div>

          <div style={summaryCard}>
            <span style={summaryNumber}>03</span>
            <strong>Rotate when needed</strong>
            <p>
              When no perfect time exists, rotate inconvenience instead of making
              the same team adjust.
            </p>
          </div>
        </section>

        <section style={contentGrid}>
          <article style={mainArticle}>
            <section style={contentBlock}>
              <h2 style={heading}>Why Remote Team Meeting Times Matter</h2>

              <p style={text}>
                Remote work gives teams more flexibility, but it also makes
                scheduling more complicated. A meeting that feels normal for one
                person may happen early in the morning, late at night, or outside
                working hours for someone else.
              </p>

              <p style={text}>
                Over time, unfair meeting schedules can create frustration and
                reduce participation. Choosing better meeting times helps teams
                protect focus time, improve attendance, and make collaboration
                feel more balanced.
              </p>
            </section>

            <section style={contentBlock}>
              <h2 style={heading}>Start With Working-Hour Overlap</h2>

              <p style={text}>
                The best meeting times for remote teams usually fall inside the
                overlap between normal working hours. For many teams, that means
                comparing each participant’s local 9:00 AM to 5:00 PM window and
                finding where those windows intersect.
              </p>

              <div style={calloutBox}>
                <strong>Simple example</strong>
                <span>New York morning can work well for London afternoon.</span>
                <span>Los Angeles morning can work well for New York midday.</span>
                <span>Europe and Asia may require rotation or async updates.</span>
              </div>
            </section>

            <section style={contentBlock}>
              <h2 style={heading}>Good Meeting Windows by Team Type</h2>

              <div style={tableWrap}>
                <table style={table}>
                  <thead>
                    <tr>
                      <th style={th}>Team Type</th>
                      <th style={th}>Best Scheduling Approach</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={td}>US-only team</td>
                      <td style={td}>Midday Eastern time often works well.</td>
                    </tr>
                    <tr>
                      <td style={td}>US + Europe</td>
                      <td style={td}>US morning and Europe afternoon.</td>
                    </tr>
                    <tr>
                      <td style={td}>US + Asia</td>
                      <td style={td}>Rotate meeting times or use async updates.</td>
                    </tr>
                    <tr>
                      <td style={td}>Global team</td>
                      <td style={td}>Use rotating schedules and shared documentation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </article>

          <aside style={sidePanel}>
            <div style={sideCard}>
              <h2 style={sideTitle}>Remote Team Checklist</h2>

              <ul style={checkList}>
                <li>Confirm each person’s city or time zone.</li>
                <li>Compare normal working hours first.</li>
                <li>Check daylight saving time changes.</li>
                <li>Rotate inconvenient meeting times.</li>
                <li>Include major local times in the invite.</li>
                <li>Use async updates when a live meeting is not needed.</li>
              </ul>
            </div>

            <div style={sideCardHighlight}>
              <h2 style={sideTitle}>Better meetings start with better timing.</h2>

              <p style={sideText}>
                Compare cities before you send the invite and choose a window
                that works better for everyone.
              </p>

              <a href="/how-it-works#schedule-tool" style={sideButton}>
                <span style={primaryMain}>Schedule a Meeting</span>
                <span style={primarySub}>Free to try — no sign-up</span>
              </a>
            </div>
          </aside>
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

const heroGrid = {
  display: "grid",
  gridTemplateColumns: "1.15fr 0.85fr",
  gap: "24px",
  alignItems: "stretch",
  padding: "10px 10px 18px",
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
  margin: "0 0 18px",
};

const primaryButton = {
  background: "#5b21b6",
  color: "#ffffff",
  padding: "11px 17px",
  borderRadius: "9px",
  fontWeight: 900,
  textDecoration: "none",
  display: "inline-flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.18,
  boxShadow: "0 10px 22px rgba(91,33,182,0.22)",
};

const primaryMain = {
  fontSize: "13px",
  fontWeight: 900,
};

const primarySub = {
  fontSize: "10px",
  fontWeight: 800,
  opacity: 0.92,
};

const previewCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "22px",
  boxShadow: "0 14px 32px rgba(91,33,182,0.1)",
};

const previewEyebrow = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 14px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const timeRow = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px",
  marginBottom: "12px",
};

const timeBox = {
  background: "#f8f7ff",
  border: "1px solid #ddd6fe",
  borderRadius: "14px",
  padding: "16px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "6px",
};

const timeLabel = {
  color: "#4b5563",
  fontSize: "12px",
  fontWeight: 900,
};

const timeValue = {
  color: "#111827",
  fontSize: "26px",
  fontWeight: 950,
};

const timeNote = {
  color: "#6b7280",
  fontSize: "12px",
};

const bestWindow = {
  background: "#ede9fe",
  color: "#4c1d95",
  border: "1px solid #c4b5fd",
  borderRadius: "14px",
  padding: "16px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "6px",
  fontSize: "13px",
};

const summaryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "14px",
  padding: "0 10px 18px",
};

const summaryCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "18px",
  boxShadow: "0 10px 25px rgba(91,33,182,0.08)",
};

const summaryNumber = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
};

const contentGrid = {
  display: "grid",
  gridTemplateColumns: "1.35fr 0.65fr",
  gap: "18px",
  padding: "0 10px",
};

const mainArticle = {
  display: "grid",
  gap: "14px",
};

const contentBlock = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "22px",
  boxShadow: "0 10px 25px rgba(91,33,182,0.08)",
};

const heading = {
  color: "#111827",
  fontSize: "24px",
  fontWeight: 950,
  margin: "0 0 10px",
};

const text = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.65",
  margin: "8px 0",
};

const calloutBox = {
  marginTop: "16px",
  background: "#f5f3ff",
  border: "1px solid #c4b5fd",
  borderRadius: "14px",
  padding: "16px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "7px",
  color: "#374151",
  fontSize: "14px",
};

const tableWrap = {
  overflowX: "auto" as const,
};

const table = {
  width: "100%",
  borderCollapse: "collapse" as const,
  background: "white",
  borderRadius: "12px",
  overflow: "hidden",
};

const th = {
  textAlign: "left" as const,
  background: "#ede9fe",
  color: "#1e1b4b",
  padding: "12px",
  border: "1px solid #ddd6fe",
};

const td = {
  color: "#374151",
  padding: "12px",
  border: "1px solid #ddd6fe",
  verticalAlign: "top" as const,
};

const sidePanel = {
  display: "grid",
  gap: "14px",
  alignSelf: "start",
};

const sideCard = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "20px",
};

const sideCardHighlight = {
  background: "#5b21b6",
  color: "#ffffff",
  borderRadius: "16px",
  padding: "20px",
};

const sideTitle = {
  fontSize: "20px",
  fontWeight: 950,
  margin: "0 0 10px",
};

const sideText = {
  color: "rgba(255,255,255,0.88)",
  fontSize: "14px",
  lineHeight: "1.55",
  margin: "0 0 14px",
};

const checkList = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "1.7",
  paddingLeft: "20px",
  margin: 0,
};

const sideButton = {
  background: "#ffffff",
  color: "#5b21b6",
  padding: "10px 14px",
  borderRadius: "9px",
  fontWeight: 900,
  textDecoration: "none",
  display: "inline-flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.18,
};
