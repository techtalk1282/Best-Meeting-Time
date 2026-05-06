/**
 * File: app/guides/page.tsx
 * Version: v2.1 (INTEGRATED RESOURCE CENTER GUIDES PAGE)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Rebuild Guides page into a true SEO-focused scheduling resource center
 * - Integrate navigation inside the same white page shell like Blog/About/Features
 * - Add visual guide cards, global time examples, scheduling topics, and deeper educational content
 * - Improve 100% desktop viewport presentation without disconnected header layout
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 * - No payment, premium unlock, or API changes
 *
 * ROLLBACK:
 * - Revert to app/guides/page.tsx v2.0 if this layout does not test cleanly
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

      <section style={heroSection}>
        <div style={heroCopy}>
          <p style={eyebrow}>Time Zone Scheduling Resource Center</p>

          <h1 style={heroTitle}>
            Practical Guides for Better Global Meeting Times
          </h1>

          <p style={heroText}>
            Learn how to plan meetings across time zones, compare city overlap,
            avoid daylight-saving mistakes, and choose meeting windows that work
            for remote teams, clients, and international partners.
          </p>
        </div>

        <div style={worldPanel}>
          <p style={panelLabel}>Example Global Planning View</p>

          <div style={cityRows}>
            {[
              ["New York", "9:00 AM", "Good morning window"],
              ["London", "2:00 PM", "Strong workday overlap"],
              ["Tokyo", "11:00 PM", "Too late for most teams"],
            ].map(([city, time, note]) => (
              <div key={city} style={cityRow}>
                <strong>{city}</strong>
                <span>{time}</span>
                <small>{note}</small>
              </div>
            ))}
          </div>

          <div style={panelFooter}>
            Better guides help you choose fairer meeting times before the invite
            goes out.
          </div>
        </div>
      </section>

      <section style={featuredSection} aria-label="Featured time zone guides">
        <a href="/how-to-schedule-meetings-across-time-zones" style={largeGuideCard}>
          <div style={imageBoxBlue}>
            <div style={miniWindow}>
              <span>New York</span>
              <strong>9:00 AM</strong>
            </div>
            <div style={miniWindow}>
              <span>London</span>
              <strong>2:00 PM</strong>
            </div>
            <div style={miniWindow}>
              <span>Tokyo</span>
              <strong>11:00 PM</strong>
            </div>
          </div>

          <span style={articleTag}>Scheduling Guide</span>
          <h2 style={guideTitle}>How to Schedule Across Time Zones</h2>
          <p style={guideText}>
            A practical guide for comparing locations, avoiding confusing time
            conversions, and choosing meeting times that make sense for everyone.
          </p>
          <span style={readLink}>Read the time zone guide →</span>
        </a>

        <a href="/best-meeting-times-remote-teams" style={largeGuideCard}>
          <div style={imageBoxGold}>
            <div style={teamAvatarRow}>
              <span style={avatar}>NY</span>
              <span style={avatar}>LDN</span>
              <span style={avatar}>SG</span>
            </div>
            <div style={calendarMock}>
              <span>Best overlap</span>
              <strong>9:00 AM – 11:00 AM ET</strong>
            </div>
          </div>

          <span style={articleTag}>Remote Teams</span>
          <h2 style={guideTitle}>Best Meeting Times for Remote Teams</h2>
          <p style={guideText}>
            Learn how to identify fair overlap windows for distributed teams
            working across countries, workdays, and different local schedules.
          </p>
          <span style={readLink}>Read the remote team guide →</span>
        </a>

        <a href="/time-zone-meeting-planner-guide" style={largeGuideCard}>
          <div style={imageBoxPurple}>
            <div style={plannerMiniCard}>
              <span>Compare</span>
              <strong>Cities + Working Hours</strong>
            </div>
            <div style={plannerMiniCard}>
              <span>Review</span>
              <strong>Recommended Windows</strong>
            </div>
          </div>

          <span style={articleTag}>Planner Guide</span>
          <h2 style={guideTitle}>Time Zone Meeting Planner Guide</h2>
          <p style={guideText}>
            Understand how a meeting planner helps compare cities, local times,
            meeting duration, and recommended scheduling windows.
          </p>
          <span style={readLink}>Read the planner guide →</span>
        </a>
      </section>

      <section style={topicsSection}>
        <div style={topicsIntro}>
          <p style={sectionEyebrow}>Popular Scheduling Topics</p>
          <h2 style={sectionTitle}>What These Guides Help You Plan</h2>
          <p style={sectionText}>
            Use these resources to avoid common global scheduling mistakes and
            make better decisions before sending a calendar invite.
          </p>
        </div>

        <div style={topicsGrid}>
          {[
            ["Overlap windows", "Find times when both locations are inside reasonable working hours."],
            ["Daylight saving changes", "Avoid meeting mistakes when regions shift clocks on different dates."],
            ["Remote team fairness", "Rotate inconvenient times instead of always burdening one location."],
            ["Client scheduling", "Choose professional meeting times for international customers and partners."],
            ["Calendar planning", "Move from recommended windows into share links and calendar actions."],
            ["Global communication", "Reduce back-and-forth messages before confirming a meeting time."],
          ].map(([title, text]) => (
            <div key={title} style={topicCard}>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={seoSection}>
        <div style={seoCard}>
          <p style={sectionEyebrow}>Scheduling Education</p>

          <h2 style={sectionTitle}>
            Why Time Zone Guides Matter for Global Work
          </h2>

          <p style={seoText}>
            Scheduling across time zones is more than converting one clock to
            another. A good meeting time depends on local work hours, daylight
            saving changes, meeting duration, participant location, and whether
            the selected window is reasonable for everyone invited.
          </p>

          <p style={seoText}>
            These guides are designed to help remote teams, consultants,
            freelancers, agencies, and international businesses understand how
            to compare cities before sending an invite. Instead of guessing,
            you can review practical overlap windows and make better scheduling
            decisions.
          </p>

          <p style={seoText}>
            Best Meeting Time connects these guides to a real planning workflow:
            compare cities, review recommended meeting windows, choose a better
            time, then use premium tools when you need to share or add the
            meeting to your calendar workflow.
          </p>
        </div>

        <div style={toolCard}>
          <p style={sectionEyebrow}>Try the Planner</p>
          <h2 style={toolTitle}>Turn the guide into a real meeting time.</h2>
          <p style={toolText}>
            Start with two cities, compare local times, review recommended
            windows, and plan the meeting before sending the invite.
          </p>

          <a href="/how-it-works#schedule-tool" style={toolButton}>
            Open the Meeting Time Tool
          </a>
        </div>
      </section>

      <section style={bottomBand}>
        <div>
          <p style={bottomEyebrow}>Start Planning</p>
          <h2 style={bottomTitle}>Ready to find a better meeting time?</h2>
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
  padding: "18px 18px 28px",
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
  marginBottom: "14px",
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
  gridTemplateColumns: "1.08fr 0.92fr",
  gap: "22px",
  alignItems: "stretch",
  padding: "18px 10px 16px",
  borderBottom: "1px solid #ede9fe",
};

const heroCopy = {
  padding: "8px 0 0",
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

const heroTitle = {
  color: "#111827",
  fontSize: "clamp(36px, 4.4vw, 52px)",
  lineHeight: "1.04",
  margin: "0 0 12px",
  fontWeight: 950,
  letterSpacing: "-0.045em",
};

const heroText = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.58",
  margin: 0,
  maxWidth: "650px",
};

const worldPanel = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "18px",
  boxShadow: "0 14px 32px rgba(91,33,182,0.08)",
};

const panelLabel = {
  margin: "0 0 12px",
  color: "#5b21b6",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
};

const cityRows = {
  display: "grid",
  gap: "10px",
};

const cityRow = {
  background: "#ffffff",
  border: "1px solid #ede9fe",
  borderRadius: "12px",
  padding: "10px 12px",
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "4px 12px",
  alignItems: "center",
};

const panelFooter = {
  marginTop: "12px",
  padding: "10px 12px",
  background: "#5b21b6",
  color: "#ffffff",
  borderRadius: "12px",
  fontSize: "13px",
  fontWeight: 800,
  lineHeight: 1.45,
};

const featuredSection = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  padding: "20px 10px 16px",
};

const largeGuideCard = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "16px",
  textDecoration: "none",
  color: "#111827",
  boxShadow: "0 12px 28px rgba(91,33,182,0.08)",
  display: "flex",
  flexDirection: "column" as const,
  gap: "12px",
  minHeight: "310px",
};

const imageBoxBlue = {
  minHeight: "118px",
  borderRadius: "14px",
  padding: "12px",
  background: "linear-gradient(135deg, #ede9fe 0%, #dbeafe 100%)",
  display: "grid",
  gap: "8px",
};

const imageBoxGold = {
  minHeight: "118px",
  borderRadius: "14px",
  padding: "12px",
  background: "linear-gradient(135deg, #fef3c7 0%, #ede9fe 100%)",
  display: "grid",
  gap: "10px",
};

const imageBoxPurple = {
  minHeight: "118px",
  borderRadius: "14px",
  padding: "12px",
  background: "linear-gradient(135deg, #6d28d9 0%, #312e81 100%)",
  display: "grid",
  gap: "8px",
};

const miniWindow = {
  background: "rgba(255,255,255,0.9)",
  border: "1px solid rgba(196,181,253,0.8)",
  borderRadius: "10px",
  padding: "7px 9px",
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  fontSize: "12px",
};

const teamAvatarRow = {
  display: "flex",
  gap: "8px",
};

const avatar = {
  width: "42px",
  height: "42px",
  borderRadius: "999px",
  background: "#5b21b6",
  color: "#ffffff",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "11px",
  fontWeight: 950,
};

const calendarMock = {
  background: "#ffffff",
  border: "1px solid #fde68a",
  borderRadius: "12px",
  padding: "10px",
  display: "grid",
  gap: "4px",
  color: "#111827",
};

const plannerMiniCard = {
  background: "rgba(255,255,255,0.12)",
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.28)",
  borderRadius: "12px",
  padding: "12px",
  display: "grid",
  gap: "4px",
};

const articleTag = {
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
  lineHeight: "1.52",
  margin: 0,
};

const readLink = {
  color: "#5b21b6",
  fontSize: "14px",
  fontWeight: 900,
  marginTop: "auto",
};

const topicsSection = {
  display: "grid",
  gridTemplateColumns: "0.85fr 1.15fr",
  gap: "18px",
  padding: "0 10px 16px",
};

const topicsIntro = {
  background: "#f8f7ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "22px",
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
  fontSize: "26px",
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

const topicsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "12px",
};

const topicCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "14px",
  padding: "14px",
  display: "grid",
  gap: "6px",
  color: "#111827",
};

const seoSection = {
  display: "grid",
  gridTemplateColumns: "1.25fr 0.75fr",
  gap: "18px",
  padding: "0 10px 18px",
};

const seoCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "22px",
};

const seoText = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.62",
  margin: "0 0 10px",
};

const toolCard = {
  background: "#f8f7ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "22px",
};

const toolTitle = {
  color: "#111827",
  fontSize: "24px",
  lineHeight: "1.12",
  fontWeight: 950,
  margin: "0 0 10px",
};

const toolText = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.55",
  margin: "0 0 18px",
};

const toolButton = {
  display: "inline-block",
  background: "#facc15",
  color: "#1e1b4b",
  padding: "11px 15px",
  borderRadius: "999px",
  fontWeight: 950,
  textDecoration: "none",
  fontSize: "14px",
};

const bottomBand = {
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
