/**
 * File: app/blog/page.tsx
 * Version: v1.0 (BLOG OVERVIEW PAGE)
 * Date: 2026-05-05
 *
 * PURPOSE:
 * - Fix /blog 404
 * - Add SEO content hub for AdSense
 * - Provide initial article structure
 *
 * ROLLBACK:
 * - Delete this file if blog is removed from nav
 */

import SiteNav from "../ui/SiteNav";
import FooterSection from "../ui/FooterSection";

export default function BlogPage() {
  return (
    <>
      <SiteNav />

      <main style={pageWrap}>
        <div style={header}>
          <h1 style={title}>Meeting Scheduling Blog</h1>
          <p style={subtitle}>
            Tips, strategies, and best practices for scheduling meetings across time zones.
          </p>
        </div>

        <div style={grid}>
          <a href="/how-to-schedule-meetings-across-time-zones" style={card}>
            <h2>How to Schedule Meetings Across Time Zones</h2>
            <p>Step-by-step process for global scheduling without confusion.</p>
          </a>

          <a href="/best-meeting-times-remote-teams" style={card}>
            <h2>Best Meeting Times for Remote Teams</h2>
            <p>Find overlap times that actually work for distributed teams.</p>
          </a>

          <a href="/time-zone-meeting-planner-guide" style={card}>
            <h2>Time Zone Meeting Planner Guide</h2>
            <p>Learn how to use scheduling tools effectively.</p>
          </a>
        </div>
      </main>

      <FooterSection />
    </>
  );
}

/* STYLES */

const pageWrap = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "40px 20px 80px",
  color: "white",
};

const header = {
  textAlign: "center" as const,
  marginBottom: "40px",
};

const title = {
  fontSize: "34px",
  fontWeight: 900,
  marginBottom: "10px",
};

const subtitle = {
  fontSize: "16px",
  opacity: 0.85,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
};

const card = {
  background: "white",
  color: "#1e1b4b",
  padding: "20px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: 700,
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
};
