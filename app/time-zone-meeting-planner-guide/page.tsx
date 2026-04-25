// FILE: app/time-zone-meeting-planner-guide/page.tsx
// VERSION: v1.0
// PURPOSE: Add third standalone AdSense recovery guide page for the time zone meeting planner topic

export default function TimeZoneMeetingPlannerGuidePage() {
  return (
    <main style={page}>
      <header style={nav}>
        <a href="/" style={logo}>Best Meeting Time</a>

        <nav style={navLinks}>
          <a href="/" style={navLink}>Home</a>
          <a href="/guides" style={navLink}>Guides</a>
          <a href="/contact" style={navLink}>Contact</a>
          <a href="/privacy-policy" style={navLink}>Privacy</a>
        </nav>
      </header>

      <section style={hero}>
        <p style={eyebrow}>Meeting Planner Guide</p>

        <h1 style={headline}>Time Zone Meeting Planner Guide</h1>

        <p style={intro}>
          A time zone meeting planner helps you compare cities, find overlapping
          working hours, and choose a meeting time that works for people in
          different locations.
        </p>

        <a href="/#schedule-tool" style={primaryButton}>
          Try the Free Meeting Time Tool
        </a>
      </section>

      <article style={article}>
        <section style={panel}>
          <h2 style={heading}>What Is a Time Zone Meeting Planner?</h2>
          <p style={text}>
            A time zone meeting planner is a scheduling tool that helps compare
            local times across different cities. Instead of manually converting
            hours, you can see which meeting windows are more convenient for
            everyone involved.
          </p>
        </section>

        <section style={panel}>
          <h2 style={heading}>Why It Helps Global Teams</h2>
          <p style={text}>
            Teams often lose time going back and forth over availability. A
            planner reduces confusion by showing overlap clearly, especially when
            people are spread across multiple countries or continents.
          </p>
        </section>

        <section style={panel}>
          <h2 style={heading}>How to Use a Meeting Planner Effectively</h2>
          <ul style={list}>
            <li>Choose each participant’s city or time zone.</li>
            <li>Compare normal working-hour overlap.</li>
            <li>Avoid late-night or very early meetings where possible.</li>
            <li>Confirm the final time in each person’s local time.</li>
            <li>Use rotating schedules when no perfect time exists.</li>
          </ul>
        </section>

        <section style={panel}>
          <h2 style={heading}>Example: New York and London</h2>
          <p style={text}>
            A New York morning meeting can often work well for London because it
            falls during the London afternoon. This kind of overlap is easier to
            spot when both cities are compared side by side.
          </p>

          <div style={exampleBox}>
            <p style={text}>New York: 9:00 AM</p>
            <p style={text}>London: 2:00 PM</p>
            <p style={highlight}>This is usually a practical overlap window.</p>
          </div>
        </section>

        <section style={panel}>
          <h2 style={heading}>Common Planning Mistakes</h2>
          <ul style={list}>
            <li>Using abbreviations without checking daylight saving changes.</li>
            <li>Assuming the same meeting time works all year.</li>
            <li>Scheduling based on one person’s local time only.</li>
            <li>Forgetting to include the time zone in the meeting invite.</li>
          </ul>
        </section>

        <section style={ctaPanel}>
          <h2 style={heading}>Plan Your Next Meeting Faster</h2>
          <p style={text}>
            Use Best Meeting Time to compare cities and find a better meeting
            window without manual time zone conversion.
          </p>

          <a href="/#schedule-tool" style={primaryButton}>
            Use the Free Tool
          </a>
        </section>
      </article>

      <footer style={footer}>
        <a href="/" style={footerLink}>Home</a>
        <a href="/guides" style={footerLink}>Guides</a>
        <a href="/how-to-schedule-meetings-across-time-zones" style={footerLink}>
          Time Zone Scheduling Guide
        </a>
        <a href="/best-meeting-times-remote-teams" style={footerLink}>
          Remote Teams Guide
        </a>
        <a href="/terms" style={footerLink}>Terms</a>
      </footer>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
  color: "#111827",
  padding: "24px 20px 50px",
};

const nav = {
  maxWidth: "1080px",
  margin: "0 auto 34px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  flexWrap: "wrap" as const,
};

const logo = {
  color: "#facc15",
  fontWeight: 800,
  fontSize: "18px",
  textDecoration: "none",
};

const navLinks = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap" as const,
};

const navLink = {
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
};

const hero = {
  maxWidth: "980px",
  margin: "0 auto 30px",
  background: "rgba(255,255,255,0.96)",
  borderRadius: "24px",
  padding: "42px 34px",
  textAlign: "center" as const,
  boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
};

const eyebrow = {
  display: "inline-block",
  marginBottom: "14px",
  color: "#5b21b6",
  fontWeight: 800,
  fontSize: "14px",
};

const headline = {
  color: "#1e1b4b",
  fontSize: "38px",
  lineHeight: "1.1",
  margin: "0 0 18px",
};

const intro = {
  maxWidth: "760px",
  margin: "0 auto 24px",
  color: "#374151",
  fontSize: "17px",
  lineHeight: "1.6",
};

const primaryButton = {
  display: "inline-block",
  background: "#facc15",
  color: "#1e1b4b",
  padding: "12px 20px",
  borderRadius: "12px",
  fontWeight: 800,
  textDecoration: "none",
};

const article = {
  maxWidth: "980px",
  margin: "0 auto",
};

const panel = {
  background: "rgba(255,255,255,0.96)",
  borderRadius: "20px",
  padding: "28px",
  marginBottom: "22px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
};

const ctaPanel = {
  background: "rgba(255,255,255,0.96)",
  borderRadius: "20px",
  padding: "30px",
  marginBottom: "22px",
  textAlign: "center" as const,
  boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
};

const heading = {
  color: "#1e1b4b",
  fontSize: "26px",
  margin: "0 0 12px",
};

const text = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "1.65",
  margin: "8px 0",
};

const list = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "1.7",
  paddingLeft: "24px",
  margin: 0,
};

const exampleBox = {
  marginTop: "18px",
  background: "#f5f3ff",
  border: "1px solid #c4b5fd",
  borderRadius: "16px",
  padding: "18px",
};

const highlight = {
  color: "#f59e0b",
  fontWeight: 800,
  fontSize: "16px",
  lineHeight: "1.55",
};

const footer = {
  maxWidth: "980px",
  margin: "34px auto 0",
  display: "flex",
  justifyContent: "center",
  gap: "18px",
  flexWrap: "wrap" as const,
};

const footerLink = {
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
};
