// FILE: app/guides/page.tsx
// VERSION: v1.0
// PURPOSE: Central guides hub for SEO + AdSense content structure

export default function GuidesPage() {
  return (
    <main style={{
      background: "linear-gradient(180deg, #4c1d95, #312e81)",
      minHeight: "100vh",
      padding: "60px 20px",
      color: "white",
      textAlign: "center"
    }}>

      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        Time Zone Guides & Resources
      </h1>

      <p style={{ marginBottom: "40px", opacity: 0.9 }}>
        Learn how to schedule meetings across time zones effectively.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "20px",
        maxWidth: "900px",
        margin: "0 auto"
      }}>

        <a href="/how-to-schedule-meetings-across-time-zones" style={cardStyle}>
          <h3>How to Schedule Across Time Zones</h3>
          <p>Step-by-step scheduling guide</p>
        </a>

        <a href="/best-meeting-times-remote-teams" style={cardStyle}>
          <h3>Best Meeting Times for Remote Teams</h3>
          <p>Find ideal meeting windows</p>
        </a>

      </div>

    </main>
  );
}

const cardStyle = {
  background: "white",
  color: "#111",
  padding: "20px",
  borderRadius: "12px",
  textDecoration: "none",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
};
