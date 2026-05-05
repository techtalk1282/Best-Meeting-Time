/**
 * File: app/blog/page.tsx
 * Version: v2.1 (LAYOUT POLISH - ABOVE THE FOLD FIX)
 * Date: 2026-05-05
 */

import SiteNav from "../ui/SiteNav";
import FooterSection from "../ui/FooterSection";

export default function BlogPage() {
  return (
    <>
      <SiteNav />

      <main style={pageWrap}>
        <section style={heroSection}>
          <p style={eyebrow}>Latest Articles</p>

          <h1 style={title}>Meeting Scheduling Blog</h1>

          <p style={subtitle}>
            Practical tips for planning meetings across time zones, working with
            remote teams, and choosing better meeting windows.
          </p>
        </section>

        <section style={featuredWrap}>
          <a href="/best-meeting-times-remote-teams" style={featuredCard}>
            <div style={imageBlock}>Remote Teams</div>

            <div style={articleContent}>
              <span style={category}>Remote Work</span>
              <h2 style={articleTitle}>
                Best Meeting Times for Remote Teams
              </h2>
              <p style={articleText}>
                Find overlap times for distributed teams and global partners.
              </p>
              <span style={readMore}>Read Article →</span>
            </div>
          </a>

          <a href="/how-to-schedule-meetings-across-time-zones" style={featuredCard}>
            <div style={imageBlock}>Time Zones</div>

            <div style={articleContent}>
              <span style={category}>Scheduling</span>
              <h2 style={articleTitle}>
                How to Schedule Meetings Across Time Zones
              </h2>
              <p style={articleText}>
                Avoid confusion when planning meetings across cities.
              </p>
              <span style={readMore}>Read Article →</span>
            </div>
          </a>

          <a href="/time-zone-meeting-planner-guide" style={featuredCard}>
            <div style={imageBlock}>Planner Guide</div>

            <div style={articleContent}>
              <span style={category}>Planning Tools</span>
              <h2 style={articleTitle}>
                Time Zone Meeting Planner Guide
              </h2>
              <p style={articleText}>
                Compare cities, local times, and recommended windows.
              </p>
              <span style={readMore}>Read Article →</span>
            </div>
          </a>
        </section>

        <section style={infoSection}>
          <div style={infoCard}>
            <h2 style={infoTitle}>Why These Articles Matter</h2>
            <p style={infoText}>
              Scheduling across time zones can create missed meetings and
              confusion. These guides help teams choose better times quickly.
            </p>
          </div>

          <div style={ctaCard}>
            <h2 style={infoTitle}>Ready to Schedule a Meeting?</h2>
            <p style={infoText}>
              Compare cities and find recommended meeting windows instantly.
            </p>

            <a href="/how-it-works#schedule-tool" style={ctaButton}>
              Schedule a Meeting
              <span style={ctaSub}>Free to try — no sign-up</span>
            </a>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}

/* STYLES */

const pageWrap = {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "28px 20px 80px",
  color: "#ffffff",
};

const heroSection = {
  textAlign: "center" as const,
  marginBottom: "24px",
};

const eyebrow = {
  color: "#facc15",
  fontSize: "12px",
  fontWeight: 900,
  marginBottom: "6px",
};

const title = {
  fontSize: "clamp(32px, 4vw, 42px)",
  fontWeight: 950,
  marginBottom: "8px",
};

const subtitle = {
  fontSize: "16px",
  opacity: 0.85,
  maxWidth: "640px",
  margin: "0 auto",
};

const featuredWrap = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "18px",
  marginBottom: "40px", // ← KEY FIX (push next section down)
};

const featuredCard = {
  background: "#ffffff",
  color: "#111827",
  borderRadius: "16px",
  overflow: "hidden",
  textDecoration: "none",
  boxShadow: "0 14px 35px rgba(0,0,0,0.16)",
};

const imageBlock = {
  minHeight: "100px", // ← REDUCED (was 138px)
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  background: "linear-gradient(135deg, #ede9fe, #c4b5fd)",
};

const articleContent = {
  padding: "16px", // tighter
};

const category = {
  fontSize: "11px",
  fontWeight: 900,
  color: "#6d28d9",
};

const articleTitle = {
  fontSize: "18px",
  fontWeight: 900,
  margin: "6px 0",
};

const articleText = {
  fontSize: "14px",
  color: "#4b5563",
  marginBottom: "10px",
};

const readMore = {
  fontSize: "13px",
  fontWeight: 900,
  color: "#5b21b6",
};

const infoSection = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
};

const infoCard = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "20px",
};

const ctaCard = {
  background: "#ffffff",
  color: "#111827",
  borderRadius: "16px",
  padding: "20px",
};

const infoTitle = {
  fontSize: "20px",
  fontWeight: 900,
  marginBottom: "8px",
};

const infoText = {
  fontSize: "14px",
  lineHeight: "1.5",
};

const ctaButton = {
  display: "inline-flex",
  flexDirection: "column" as const,
  alignItems: "center",
  background: "#5b21b6",
  color: "#fff",
  padding: "10px 16px",
  borderRadius: "10px",
  fontWeight: 900,
  textDecoration: "none",
  marginTop: "10px",
};

const ctaSub = {
  fontSize: "11px",
  opacity: 0.85,
};
