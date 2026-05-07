/**
 * File: app/contact/page.tsx
 * Version: v2.0 (PREMIUM CONTACT PAGE SHELL)
 * Date: 2026-05-07
 *
 * PURPOSE:
 * - Rebuild Contact page with premium white-shell layout
 * - Add shared SiteNav for navigation consistency
 * - Improve AdSense trust/compliance presentation
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v1.0 if this premium layout does not test cleanly
 */

import SiteNav from "../ui/SiteNav";

export default function ContactPage() {
  return (
    <>
      <SiteNav />

      <main style={pageShell}>
        <section style={hero}>
          <p style={eyebrow}>Contact Best Meeting Time</p>

          <h1 style={headline}>Questions, Feedback, or Support?</h1>

          <p style={subheadline}>
            Reach out for support, feedback, scheduling questions, or general
            inquiries about Best Meeting Time.
          </p>
        </section>

        <section style={contactPanel}>
          <div style={contactCard}>
            <p style={cardLabel}>Support Email</p>
            <h2 style={emailText}>support@bestmeetingtimeapp.com</h2>
            <p style={cardText}>
              Send us your question, issue, or feedback and include any helpful
              details about what you were trying to do.
            </p>
          </div>

          <div style={contactCard}>
            <p style={cardLabel}>Response Time</p>
            <h2 style={cardTitle}>24–48 hours</h2>
            <p style={cardText}>
              We typically respond within one to two business days depending on
              request volume.
            </p>
          </div>
        </section>

        <section style={infoGrid}>
          <article style={infoCard}>
            <p style={infoLabel}>Product Support</p>
            <h2 style={infoTitle}>Help with scheduling tools.</h2>
            <p style={infoText}>
              Contact us if you have trouble using the meeting planner, comparing
              cities, or understanding suggested meeting windows.
            </p>
          </article>

          <article style={infoCard}>
            <p style={infoLabel}>Feedback</p>
            <h2 style={infoTitle}>Help improve Best Meeting Time.</h2>
            <p style={infoText}>
              Share ideas for better time zone guides, workflow improvements, or
              features that would make global scheduling easier.
            </p>
          </article>

          <article style={infoCard}>
            <p style={infoLabel}>General Questions</p>
            <h2 style={infoTitle}>Ask about the site.</h2>
            <p style={infoText}>
              Use the contact email for general site questions, content issues,
              or business inquiries related to Best Meeting Time.
            </p>
          </article>
        </section>

        <section style={ctaBand}>
          <div>
            <p style={ctaEyebrow}>Start Planning</p>
            <h2 style={ctaTitle}>Need to compare meeting times now?</h2>
            <p style={ctaText}>
              Open the planner and find better meeting windows across cities and
              time zones.
            </p>
          </div>

          <a href="/how-it-works#schedule-tool" style={ctaButton}>
            <span style={ctaMain}>Schedule a Meeting</span>
            <span style={ctaSub}>Free to try — no sign-up</span>
          </a>
        </section>
      </main>
    </>
  );
}

/* STYLES */

const pageShell = {
  maxWidth: "1120px",
  margin: "0 auto 14px",
  padding: "18px",
  background: "#ffffff",
  color: "#111827",
  border: "1px solid rgba(237,233,254,0.95)",
  boxShadow: "0 18px 50px rgba(30,27,75,0.16)",
};

const hero = {
  maxWidth: "820px",
  margin: "0 auto 24px",
  textAlign: "center" as const,
  padding: "20px 10px 8px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 12px",
  padding: "7px 15px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "13px",
  fontWeight: 950,
};

const headline = {
  color: "#111827",
  fontSize: "clamp(34px, 4vw, 48px)",
  lineHeight: "1.04",
  margin: "0 0 10px",
  fontWeight: 950,
  letterSpacing: "-0.045em",
};

const subheadline = {
  maxWidth: "720px",
  margin: "0 auto",
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.45",
};

const contactPanel = {
  display: "grid",
  gridTemplateColumns: "1.2fr 0.8fr",
  gap: "14px",
  marginBottom: "14px",
};

const contactCard = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "22px",
};

const cardLabel = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const emailText = {
  color: "#111827",
  fontSize: "clamp(24px, 3vw, 34px)",
  lineHeight: "1.08",
  fontWeight: 950,
  margin: "0 0 10px",
  wordBreak: "break-word" as const,
};

const cardTitle = {
  color: "#111827",
  fontSize: "clamp(24px, 3vw, 34px)",
  lineHeight: "1.08",
  fontWeight: 950,
  margin: "0 0 10px",
};

const cardText = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.5",
  margin: 0,
};

const infoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "14px",
  marginBottom: "14px",
};

const infoCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "18px",
};

const infoLabel = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 9px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const infoTitle = {
  color: "#111827",
  fontSize: "21px",
  lineHeight: "1.14",
  fontWeight: 950,
  margin: "0 0 8px",
};

const infoText = {
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.42",
  margin: 0,
};

const ctaBand = {
  padding: "15px 20px",
  borderRadius: "16px",
  background: "#5b21b6",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
};

const ctaEyebrow = {
  margin: "0 0 3px",
  color: "#facc15",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const ctaTitle = {
  margin: "0 0 3px",
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: 950,
  letterSpacing: "-0.02em",
};

const ctaText = {
  margin: 0,
  color: "rgba(255,255,255,0.88)",
  fontSize: "13.5px",
  lineHeight: "1.35",
};

const ctaButton = {
  background: "#ffffff",
  color: "#5b21b6",
  padding: "10px 17px",
  borderRadius: "9px",
  fontWeight: 950,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.1,
  minWidth: "158px",
  boxShadow: "0 9px 20px rgba(30,27,75,0.18)",
};

const ctaMain = {
  fontSize: "13px",
  fontWeight: 950,
};

const ctaSub = {
  fontSize: "10px",
  fontWeight: 850,
  opacity: 0.9,
};
