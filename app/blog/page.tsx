/**
 * File: app/blog/page.tsx
 * Version: v2.0 (POLISHED BLOG OVERVIEW - ADSENSE READY)
 * Date: 2026-05-05
 *
 * PURPOSE:
 * - Replace thin /blog page with a polished article hub
 * - Match the target UI direction: clean cards, useful article previews, branded layout
 * - Improve AdSense trust by removing empty-looking cards and adding meaningful content
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v1.0 if this page does not test cleanly
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
                Learn how to find practical overlap times for distributed teams,
                clients, consultants, and global partners.
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
                A simple step-by-step guide to avoiding confusion when meeting
                across different cities and regions.
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
                Understand how a meeting planner helps compare cities, local
                times, meeting duration, and recommended windows.
              </p>
              <span style={readMore}>Read Article →</span>
            </div>
          </a>
        </section>

        <section style={infoSection}>
          <div style={infoCard}>
            <h2 style={infoTitle}>Why These Articles Matter</h2>
            <p style={infoText}>
              Scheduling across time zones can create missed meetings, late calls,
              and avoidable confusion. These guides are designed to help teams
              choose better times quickly and plan with more confidence.
            </p>
          </div>

          <div style={ctaCard}>
            <h2 style={infoTitle}>Ready to Find a Better Meeting Time?</h2>
            <p style={infoText}>
              Use the free planner to compare cities and find recommended meeting
              windows.
            </p>

            <a href="/how-it-works#schedule-tool" style={ctaButton}>
              Schedule a Meeting
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
  padding: "36px 20px 80px",
  color: "#ffffff",
};

const heroSection = {
  textAlign: "center" as const,
  marginBottom: "34px",
};

const eyebrow = {
  color: "#facc15",
  fontSize: "13px",
  fontWeight: 900,
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const title = {
  color: "#ffffff",
  fontSize: "clamp(34px, 4vw, 46px)",
  fontWeight: 950,
  lineHeight: "1.08",
  margin: "0 0 12px",
};

const subtitle = {
  color: "rgba(255,255,255,0.82)",
  fontSize: "17px",
  lineHeight: "1.6",
  maxWidth: "720px",
  margin: "0 auto",
};

const featuredWrap = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  marginBottom: "24px",
};

const featuredCard = {
  background: "#ffffff",
  color: "#111827",
  borderRadius: "18px",
  overflow: "hidden",
  textDecoration: "none",
  boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
  border: "1px solid rgba(221,214,254,0.9)",
};

const imageBlock = {
  minHeight: "138px",
  background: "linear-gradient(135deg, #ede9fe 0%, #c4b5fd 100%)",
  color: "#4c1d95",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  fontWeight: 950,
};

const articleContent = {
  padding: "20px",
};

const category = {
  display: "inline-block",
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 900,
  marginBottom: "8px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const articleTitle = {
  color: "#111827",
  fontSize: "21px",
  fontWeight: 950,
  lineHeight: "1.2",
  margin: "0 0 10px",
};

const articleText = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.55",
  margin: "0 0 14px",
};

const readMore = {
  color: "#5b21b6",
  fontSize: "14px",
  fontWeight: 900,
};

const infoSection = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
};

const infoCard = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: "18px",
  padding: "24px",
};

const ctaCard = {
  background: "#ffffff",
  color: "#111827",
  borderRadius: "18px",
  padding: "24px",
  boxShadow: "0 18px 45px rgba(0,0,0,0.16)",
};

const infoTitle = {
  fontSize: "22px",
  fontWeight: 950,
  margin: "0 0 10px",
};

const infoText = {
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 18px",
  color: "inherit",
  opacity: 0.9,
};

const ctaButton = {
  display: "inline-block",
  background: "#5b21b6",
  color: "#ffffff",
  padding: "12px 18px",
  borderRadius: "10px",
  fontSize: "14px",
  fontWeight: 900,
  textDecoration: "none",
};
