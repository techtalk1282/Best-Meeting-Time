// FILE: app/guides/page.tsx
// VERSION: v1.2
// PURPOSE: Fix Guides hub JSX structure and show visible guide cards

export default function GuidesPage() {
  return (
    <main style={page}>
      <h1 style={heading}>Time Zone Guides & Resources</h1>

      <p style={intro}>
        Learn how to schedule meetings across time zones effectively.
      </p>

      <div style={grid}>
        <a href="/how-to-schedule-meetings-across-time-zones" style={cardStyle}>
          <h3 style={cardTitle}>How to Schedule Across Time Zones</h3>
          <p style={cardText}>
            Step-by-step guide to scheduling meetings globally without confusion.
          </p>
        </a>

        <a href="/best-meeting-times-remote-teams" style={cardStyle}>
          <h3 style={cardTitle}>Best Meeting Times for Remote Teams</h3>
          <p style={cardText}>
            Learn how to find the best overlap times for distributed teams.
          </p>
        </a>
      </div>
    </main>
  );
}

const page = {
  background: "linear-gradient(180deg, #4c1d95, #312e81)",
  minHeight: "100vh",
  padding: "60px 20px",
  color: "white",
  textAlign: "center" as const,
};

const heading = {
  fontSize: "36px",
  marginBottom: "10px",
};

const intro = {
  marginBottom: "40px",
  opacity: 0.9,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px",
  maxWidth: "900px",
  margin: "0 auto",
};

const cardStyle = {
  background: "white",
  color: "#111",
  padding: "24px",
  borderRadius: "14px",
  textDecoration: "none",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  minHeight: "120px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
};

const cardTitle = {
  marginBottom: "10px",
  color: "#1e1b4b",
};

const cardText = {
  fontSize: "14px",
  opacity: 0.8,
  lineHeight: "1.5",
};
