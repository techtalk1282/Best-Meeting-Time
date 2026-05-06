/**
 * File: app/about/page.tsx
 * Version: v3.0 (FINAL OPTIMIZED ABOUT PAGE)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Fix mission content (real, strong, SEO-focused)
 * - Eliminate empty space and weak layout
 * - Ensure clean 100% viewport landing (no cutoff)
 * - Restore meaningful value cards
 * - Match homepage design quality
 *
 * ROLLBACK:
 * - Revert to previous version if layout spacing breaks
 */

import SiteNav from "@/app/ui/SiteNav";

export default function AboutPage() {
  return (
    <div style={page}>
      <SiteNav />

      <main style={container}>
        
        {/* HERO + MISSION */}
        <section style={topGrid}>
          <div style={heroCard}>
            <span style={pill}>About Best Meeting Time</span>

            <h1 style={title}>
              A Better Way to Schedule Meetings Across Time Zones
            </h1>

            <p style={subtitle}>
              Best Meeting Time helps remote teams, clients, and global professionals compare time zones,
              find practical meeting windows, and schedule with confidence—without guesswork.
            </p>

            <div style={seoRow}>
              Time zone scheduling • Remote team meetings • Global meeting planner • Client scheduling
            </div>
          </div>

          <div style={missionCard}>
            <h2 style={missionTitle}>Our Mission</h2>

            <p style={missionText}>
              Our mission is to make time zone scheduling clear before a meeting invite is ever sent.
              When teams work across different cities, countries, and time zones, choosing a meeting time
              can quickly become confusing, frustrating, and inefficient.
            </p>

            <p style={missionText}>
              Best Meeting Time simplifies that process by showing local times side by side and highlighting
              practical meeting windows. Instead of guessing or manually converting time zones, users can
              instantly see what works—and what doesn’t—for everyone involved.
            </p>

            <p style={missionText}>
              The goal is simple: reduce scheduling friction, prevent bad meeting times, and help people
              coordinate faster across global teams, client calls, and remote collaboration.
            </p>
          </div>
        </section>

        {/* VALUE CARDS */}
        <section style={valueGrid}>
          <div style={valueCard}>
            <h3 style={valueTitle}>Compare locations instantly</h3>
            <p style={valueText}>
              View multiple cities side by side to quickly understand time differences without manual conversion.
            </p>
          </div>

          <div style={valueCard}>
            <h3 style={valueTitle}>Find better meeting windows</h3>
            <p style={valueText}>
              Identify realistic overlap times so meetings are not too early, too late, or disruptive for participants.
            </p>
          </div>

          <div style={valueCard}>
            <h3 style={valueTitle}>Built for real global work</h3>
            <p style={valueText}>
              Designed for remote teams, freelancers, agencies, and businesses coordinating across time zones.
            </p>
          </div>
        </section>

        {/* SUPPORTING CONTENT */}
        <section style={bottomGrid}>
          <div style={infoCard}>
            <h3 style={infoTitle}>Why This Matters</h3>
            <p style={infoText}>
              Poor meeting times lead to missed calls, low attendance, and unnecessary scheduling friction.
              A meeting that works for one person may be outside working hours for someone else.
            </p>
            <p style={infoText}>
              A clearer planning view helps teams respect time zones, improve collaboration, and make
              better scheduling decisions faster.
            </p>
          </div>

          <div style={infoCard}>
            <h3 style={infoTitle}>Who It Helps</h3>
            <p style={infoText}>
              Best Meeting Time is designed for professionals who coordinate meetings across locations,
              including remote teams, founders, consultants, freelancers, agencies, and client-facing businesses.
            </p>
            <p style={infoText}>
              It is especially useful for anyone managing international meetings, cross-time-zone teams,
              or client calls that require fair and practical scheduling.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}

/* STYLES */

const page = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
};

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "20px 20px 40px",
};

/* TOP SECTION */

const topGrid = {
  display: "grid",
  gridTemplateColumns: "1.2fr 1fr",
  gap: "18px",
  marginBottom: "18px",
};

const heroCard = {
  background: "#ffffff",
  padding: "22px",
  borderRadius: "12px",
};

const missionCard = {
  background: "#ffffff",
  padding: "22px",
  borderRadius: "12px",
};

const pill = {
  display: "inline-block",
  background: "#ede9fe",
  color: "#5b21b6",
  fontSize: "12px",
  fontWeight: 800,
  padding: "6px 10px",
  borderRadius: "999px",
  marginBottom: "10px",
};

const title = {
  fontSize: "34px",
  fontWeight: 900,
  marginBottom: "10px",
  color: "#111827",
  lineHeight: 1.2,
};

const subtitle = {
  fontSize: "14px",
  color: "#4b5563",
  marginBottom: "10px",
};

const seoRow = {
  fontSize: "12px",
  color: "#6b7280",
};

/* MISSION */

const missionTitle = {
  fontSize: "20px",
  fontWeight: 900,
  marginBottom: "10px",
};

const missionText = {
  fontSize: "14px",
  color: "#4b5563",
  marginBottom: "8px",
};

/* VALUE CARDS */

const valueGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "14px",
  marginBottom: "18px",
};

const valueCard = {
  background: "#ffffff",
  padding: "16px",
  borderRadius: "10px",
};

const valueTitle = {
  fontSize: "14px",
  fontWeight: 900,
  marginBottom: "6px",
};

const valueText = {
  fontSize: "13px",
  color: "#4b5563",
};

/* BOTTOM SECTION */

const bottomGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
};

const infoCard = {
  background: "#ffffff",
  padding: "18px",
  borderRadius: "10px",
};

const infoTitle = {
  fontSize: "18px",
  fontWeight: 900,
  marginBottom: "8px",
};

const infoText = {
  fontSize: "14px",
  color: "#4b5563",
  marginBottom: "6px",
};
