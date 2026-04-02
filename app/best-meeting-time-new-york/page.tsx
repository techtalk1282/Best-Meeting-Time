"use client";

import ToolPreviewSection from "@/app/ui/ToolPreviewSection";

export default function NewYorkMeetingPage() {
  return (
  <div
  style={{
    
   
    display: "flex",
    flexDirection: "column"
  }}
>
  <main
  style={{
    padding: "40px 20px 100px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    color: "white",
    flex: 1
  }}
>
      
      <div style={{ marginBottom: "20px" }}>
  <a
    href="/"
    style={{
      color: "#ddd6fe",
      fontSize: "16px",
      textDecoration: "none",
      display: "inline-block"
    }}
  >
    ← Back to Home
  </a>
</div>

{/* ✅ SEO TITLE */}
<h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "10px" }}>
  Best Meeting Time from New York
</h1>

      {/* ✅ SEO DESCRIPTION */}
      <p style={{ marginBottom: "20px", color: "#ddd6fe" }}>
        Find the best meeting times between New York and other global cities. Instantly see overlapping working hours and schedule meetings efficiently across time zones.
      </p>

      {/* ✅ TOOL (IMPORTANT) */}
      <div style={{ marginTop: "30px" }}>
        <ToolPreviewSection defaultCityLeft="New York, USA" />
      </div>

      {/* ✅ EXTRA SEO CONTENT */}
      <div style={{ marginTop: "40px", color: "#ddd6fe", lineHeight: "1.6" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
          Scheduling Meetings from New York
        </h2>

        <p>
          New York operates in the Eastern Time Zone (ET). When scheduling meetings with international teams, it’s important to find overlapping working hours.
        </p>

        <p style={{ marginTop: "10px" }}>
          For example:
        </p>

        <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
          <li>New York to London: Typically 5-hour difference</li>
          <li>New York to Los Angeles: 3-hour difference</li>
          <li>New York to Tokyo: 13–14 hour difference</li>
        </ul>

        <p style={{ marginTop: "10px" }}>
          Use the tool above to instantly find the best meeting window based on your selected cities.
        </p>
      </div>

    </main>
    </div>
  );
}
