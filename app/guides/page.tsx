// FILE: app/guides/page.tsx
// VERSION: v1.5
// PURPOSE: Add third guide card to Guides hub for internal linking

export default function GuidesPage() {
  return (
    <main style={page}>
      <section style={hero}>
        <h1 style={heading}>Time Zone Guides & Resources</h1>

        <p style={intro}>
          Learn how to schedule meetings across time zones effectively.
        </p>

        <div style={grid}>
          <a href="/how-to-schedule-meetings-across-time-zones" style={cardStyle}>
            <h2 style={cardTitle}>How to Schedule Across Time Zones</h2>
            <p style={cardText}>
              Step-by-step guide to scheduling meetings globally without confusion.
            </p>
          </a>

          <a href="/best-meeting-times-remote-teams" style={cardStyle}>
            <h2 style={cardTitle}>Best Meeting Times for Remote Teams</h2>
            <p style={cardText}>
              Learn how to find better overlap times for distributed teams.
            </p>
          </a>

          <a href="/time-zone-meeting-planner-guide" style={cardStyle}>
            <h2 style={cardTitle}>Time Zone Meeting Planner Guide</h2>
            <p style={cardText}>
              Understand how meeting planners compare cities and working-hour overlap.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}

const page = {
  background: "linear-gradient(180deg, #4c1d95, #312e81)",
  minHeight: "100vh",
  padding: "70px 20px",
  color: "white",
};

const hero = {
  maxWidth: "980px",
  margin: "0 auto",
  textAlign: "center" as const,
};

const heading = {
  fontSize: "38px",
  marginBottom: "12px",
};

const intro = {
  fontSize: "18px",
  marginBottom: "42px",
  opacity: 0.9,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "24px",
};

const cardStyle = {
  background: "#ffffff",
  color: "#1e1b4b",
  padding: "30px",
  borderRadius: "16px",
  textDecoration: "none",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  minHeight: "140px",
  display: "block",
};

const cardTitle = {
  fontSize: "22px",
  margin: "0 0 14px 0",
  color: "#1e1b4b",
};

const cardText = {
  fontSize: "16px",
  lineHeight: "1.5",
  margin: 0,
  color: "#374151",
};
