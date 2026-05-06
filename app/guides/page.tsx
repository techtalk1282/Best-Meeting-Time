/**
 * File: app/guides/page.tsx
 * Version: v2.0 (WHITE-SHELL GUIDES HUB REBUILD)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Rebuild Guides page to match current homepage/blog/about/features white-shell system
 * - Add shared SiteNav
 * - Improve AdSense/SEO content depth
 * - Add stronger internal links to existing guide/article routes
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to app/guides/page.tsx v1.5 if this layout does not test cleanly
 */

import SiteNav from "../ui/SiteNav";

export default function GuidesPage() {
  return (
    <main style={page}>
      <SiteNav />

      <section style={shell}>
        <section style={hero}>
          <p style={eyebrow}>Time Zone Scheduling Guides</p>

          <h1 style={heading}>Time Zone Guides & Resources</h1>

          <p style={intro}>
            Practical guides to help remote teams, clients, freelancers, and
            global businesses schedule better meetings across time zones.
          </p>
        </section>

        <section style={featuredGrid}>
          <a href="/how-to-schedule-meetings-across-time-zones" style={featuredCard}>
            <span style={cardLabel}>Scheduling Guide</span>
            <h2 style={cardTitle}>How to Schedule Across Time Zones</h2>
            <p style={cardText}>
              Learn how to compare locations, avoid time zone confusion, and
              choose meeting times that work for everyone.
            </p>
          </a>

          <a href="/best-meeting-times-remote-teams" style={featuredCard}>
            <span style={cardLabel}>Remote Teams</span>
            <h2 style={cardTitle}>Best Meeting Times for Remote Teams</h2>
            <p style={cardText}>
              Find better overlap windows for distributed teams working across
              cities, countries, and different workdays.
            </p>
          </a>

          <a href="/time-zone-meeting-planner-guide" style={featuredCard}>
            <span style={cardLabel}>Planner Guide</span>
            <h2 style={cardTitle}>Time Zone Meeting Planner Guide</h2>
            <p style={cardText}>
              Understand how meeting planners compare cities, working hours,
              and recommended meeting windows.
            </p>
          </a>
        </section>

        <section style={supportSection}>
          <div style={supportCard}>
            <span style={cardLabel}>Global Scheduling</span>
            <h2 style={supportTitle}>Schedule with less guesswork.</h2>
            <p style={supportText}>
              Use these resources to understand time zone overlap, daylight
              saving changes, remote team scheduling, and better planning habits
              before sending a calendar invite.
            </p>
          </div>

          <div style={linkGrid}>
            <a href="/features" style={smallLinkCard}>
              <strong>Explore Features</strong>
              <span>See how planning, sharing, and calendar actions fit together.</span>
            </a>

            <a href="/how-it-works#schedule-tool" style={smallLinkCard}>
              <strong>Try the Tool</strong>
              <span>Compare two cities and review recommended meeting windows.</span>
            </a>

            <a href="/blog" style={smallLinkCard}>
              <strong>Read the Blog</strong>
              <span>Browse practical articles for better global meeting times.</span>
            </a>
          </div>
        </section>

        <section style={ctaBand}>
          <div>
            <span style={ctaLabel}>Start Planning</span>
            <h2 style={ctaTitle}>Ready to find a better meeting time?</h2>
            <p style={ctaText}>
              Compare cities and review recommended meeting windows before you
              send the invite.
            </p>
          </div>

          <a href="/how-it-works#schedule-tool" style={ctaButton}>
            <span>Schedule a Meeting</span>
            <small>Free to try — no sign-up</small>
          </a>
        </section>
      </section>
    </main>
  );
}

/* STYLES */

const page = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
  color: "#111827",
  padding: "0 20px 42px",
};

const shell = {
  maxWidth: "1120px",
  margin: "0 auto",
  background: "#ffffff",
  border: "1px solid rgba(237,233,254,0.9)",
  boxShadow: "0 24px 70px rgba(30,27,75,0.18)",
  padding: "42px 18px 18px",
};

const hero = {
  maxWidth: "820px",
  margin: "0 auto 34px",
  textAlign: "center" as const,
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 14px",
  padding: "8px 14px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "13px",
  fontWeight: 900,
};

const heading = {
  color: "#111827",
  fontSize: "clamp(38px, 5vw, 56px)",
  lineHeight: "1.04",
  margin: "0 0 14px",
  fontWeight: 950,
  letterSpacing: "-0.045em",
};

const intro = {
  color: "#4b5563",
  fontSize: "17px",
  lineHeight: "1.6",
  margin: 0,
};

const featuredGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "18px",
  marginBottom: "18px",
};

const featuredCard = {
  background: "#faf9ff",
  color: "#111827",
  padding: "26px",
  borderRadius: "18px",
  textDecoration: "none",
  border: "1px solid #ddd6fe",
  minHeight: "214px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-between",
};

const cardLabel = {
  color: "#5b21b6",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const cardTitle = {
  fontSize: "24px",
  lineHeight: "1.12",
  margin: "16px 0 12px",
  color: "#111827",
  fontWeight: 950,
};

const cardText = {
  fontSize: "15px",
  lineHeight: "1.55",
  margin: 0,
  color: "#4b5563",
};

const supportSection = {
  display: "grid",
  gridTemplateColumns: "1fr 1.2fr",
  gap: "18px",
  marginBottom: "18px",
};

const supportCard = {
  background: "#f8f7ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "24px",
};

const supportTitle = {
  color: "#111827",
  fontSize: "26px",
  lineHeight: "1.12",
  margin: "14px 0 10px",
  fontWeight: 950,
};

const supportText = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: 0,
};

const linkGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "14px",
};

const smallLinkCard = {
  background: "#ffffff",
  color: "#111827",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "20px",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  gap: "8px",
  minHeight: "136px",
};

const ctaBand = {
  background: "linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)",
  color: "#ffffff",
  borderRadius: "18px",
  padding: "22px 28px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
};

const ctaLabel = {
  color: "#facc15",
  fontSize: "13px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
};

const ctaTitle = {
  margin: "6px 0 4px",
  fontSize: "26px",
  fontWeight: 950,
};

const ctaText = {
  margin: 0,
  color: "#ede9fe",
  fontSize: "14px",
};

const ctaButton = {
  background: "#ffffff",
  color: "#5b21b6",
  padding: "12px 20px",
  borderRadius: "10px",
  fontWeight: 950,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  lineHeight: 1.15,
  minWidth: "172px",
};

const small = {
  fontSize: "11px",
};
