/**
 * File: app/blog/page.tsx
 * Version: v3.1 (INTEGRATED BLOG PAGE HEADER)
 * Date: 2026-05-05
 *
 * PURPOSE:
 * - Put the blog navigation inside the same white page shell
 * - Remove the disconnected two-block layout
 * - Match the homepage-style structure more closely
 * - Keep blog hub polished, useful, and AdSense-ready
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v3.0 if this layout does not test cleanly
 */

import FooterSection from "../ui/FooterSection";

export default function BlogPage() {
  return (
    <>
      <main style={pageShell}>
        <header style={header}>
          <a href="/" style={brandLink}>
            <span style={brandIcon}>⌘</span>
            <span>Best Meeting Time</span>
          </a>

          <nav style={nav} aria-label="Blog navigation">
            <a href="/" style={navLink}>Home</a>
            <a href="/how-it-works" style={navLink}>How It Works</a>
            <a href="/features" style={navLink}>Features</a>
            <a href="/guides" style={navLink}>Guides</a>
            <a href="/blog" style={navLink}>Blog</a>
            <a href="/about" style={navLink}>About</a>
            <a href="/contact" style={navLink}>Contact</a>
          </nav>

          <a href="/how-it-works#schedule-tool" style={navButton}>
            <span style={navButtonMain}>Schedule a Meeting</span>
            <span style={navButtonSub}>Free to try — no sign-up</span>
          </a>
        </header>

        <section style={heroCard}>
          <p style={eyebrow}>Time Zone Scheduling Insights</p>

          <h1 style={heroTitle}>
            Better Meeting Times for Remote Teams, Clients, and Global Work
          </h1>

          <p style={heroText}>
            Practical articles to help you avoid bad meeting times, compare time
            zones faster, and schedule with more confidence.
          </p>
        </section>

        <section style={articleGrid} aria-label="Featured scheduling articles">
          <a href="/best-meeting-times-remote-teams" style={articleCard}>
            <span style={articleTag}>Remote Teams</span>
            <h2 style={articleTitle}>
              Stop Scheduling Remote Meetings at the Worst Possible Time
            </h2>
            <p style={articleText}>
              Learn how to find fair overlap windows for teams working across
              cities, countries, and different workdays.
            </p>
            <span style={readLink}>Read the remote team guide →</span>
          </a>

          <a href="/how-to-schedule-meetings-across-time-zones" style={articleCard}>
            <span style={articleTag}>Time Zones</span>
            <h2 style={articleTitle}>
              How to Schedule Across Time Zones Without Guessing
            </h2>
            <p style={articleText}>
              A clear step-by-step guide for choosing meeting times that make
              sense for everyone invited.
            </p>
            <span style={readLink}>Read the scheduling guide →</span>
          </a>

          <a href="/time-zone-meeting-planner-guide" style={articleCard}>
            <span style={articleTag}>Planner Guide</span>
            <h2 style={articleTitle}>
              What a Time Zone Meeting Planner Actually Helps You Do
            </h2>
            <p style={articleText}>
              See how comparing cities, local times, duration, and recommended
              windows can make scheduling faster.
            </p>
            <span style={readLink}>Read the planner guide →</span>
          </a>
        </section>

        <section style={bottomBand}>
          <div>
            <p style={bottomEyebrow}>Start Planning</p>
            <h2 style={bottomTitle}>Ready to find a better meeting time?</h2>
            <p style={bottomText}>
              Compare cities and review recommended meeting windows before you
              send the invite.
            </p>
          </div>

          <a href="/how-it-works#schedule-tool" style={ctaButton}>
            <span style={ctaMain}>Schedule a Meeting</span>
            <span style={ctaSub}>Free to try — no sign-up</span>
          </a>
        </section>
      </main>

      <FooterSection />
    </>
  );
}

/* STYLES */

const pageShell = {
  maxWidth: "1120px",
  margin: "18px auto 0",
  padding: "18px 18px 42px",
  background: "#ffffff",
  color: "#111827",
  border: "1px solid rgba(237,233,254,0.9)",
  boxShadow: "0 24px 70px rgba(30,27,75,0.18)",
};

const header = {
  minHeight: "66px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
  borderBottom: "1px solid #ede9fe",
  marginBottom: "14px",
};

const brandLink = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: "#5b21b6",
  fontSize: "18px",
  fontWeight: 900,
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
};

const brandIcon = {
  width: "24px",
  height: "24px",
  borderRadius: "7px",
  background: "#ede9fe",
  color: "#5b21b6",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
};

const nav = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "18px",
};

const navLink = {
  color: "#374151",
  fontSize: "13px",
  fontWeight: 800,
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
};

const navButton = {
  background: "#5b21b6",
  color: "#ffffff",
  padding: "9px 16px",
  borderRadius: "8px",
  fontWeight: 900,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.18,
  minWidth: "154px",
  boxShadow: "0 10px 22px rgba(91,33,182,0.22)",
};

const navButtonMain = {
  fontSize: "13px",
  fontWeight: 900,
};

const navButtonSub = {
  fontSize: "10px",
  fontWeight: 800,
  opacity: 0.92,
};

const heroCard = {
  textAlign: "center" as const,
  padding: "30px 24px 22px",
  borderBottom: "1px solid #ede9fe",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 12px",
  padding: "7px 13px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "12px",
  fontWeight: 900,
};

const heroTitle = {
  maxWidth: "780px",
  margin: "0 auto 12px",
  color: "#111827",
  fontSize: "clamp(34px, 4vw, 48px)",
  lineHeight: "1.06",
  fontWeight: 950,
  letterSpacing: "-0.04em",
};

const heroText = {
  maxWidth: "720px",
  margin: "0 auto",
  color: "#6b7280",
  fontSize: "16px",
  lineHeight: "1.6",
  fontWeight: 500,
};

const articleGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  padding: "22px 10px 18px",
};

const articleCard = {
  minHeight: "250px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-between",
  gap: "12px",
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "22px",
  textDecoration: "none",
  color: "#111827",
  boxShadow: "0 12px 28px rgba(91,33,182,0.08)",
};

const articleTag = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const articleTitle = {
  color: "#111827",
  fontSize: "22px",
  lineHeight: "1.15",
  fontWeight: 950,
  margin: 0,
};

const articleText = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.55",
  margin: 0,
};

const readLink = {
  color: "#5b21b6",
  fontSize: "14px",
  fontWeight: 900,
};

const bottomBand = {
  margin: "0 10px",
  padding: "18px 20px",
  borderRadius: "14px",
  background: "#5b21b6",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
};

const bottomEyebrow = {
  margin: "0 0 4px",
  color: "#facc15",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const bottomTitle = {
  margin: "0 0 4px",
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: 950,
};

const bottomText = {
  margin: 0,
  color: "rgba(255,255,255,0.86)",
  fontSize: "14px",
  lineHeight: "1.5",
};

const ctaButton = {
  background: "#ffffff",
  color: "#5b21b6",
  padding: "10px 16px",
  borderRadius: "8px",
  fontWeight: 900,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.15,
  minWidth: "160px",
  boxShadow: "0 10px 22px rgba(30,27,75,0.18)",
};

const ctaMain = {
  fontSize: "13px",
  fontWeight: 900,
};

const ctaSub = {
  fontSize: "10px",
  fontWeight: 800,
  opacity: 0.9,
};
