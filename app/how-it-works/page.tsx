/**
 * File: app/how-it-works/page.tsx
 * Version: v1.2 (TOOL FIRST LAYOUT)
 * Date: 2026-05-03
 *
 * PURPOSE:
 * - Keep How It Works education page
 * - Move the real ToolPreviewSection above the education content
 * - Improve desktop and mobile conversion by showing the usable tool sooner
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No premium/payment logic changes
 *
 * ROLLBACK:
 * - Revert to v1.1 if this page layout fails
 */

import SiteNav from "../ui/SiteNav";
import ToolPreviewSection from "../ui/ToolPreviewSection";

export default function HowItWorksPage() {
  return (
    <main style={pageWrap}>
      <div style={{ background: "#4c1d95" }}>
        <SiteNav />
      </div>

            <section style={introSpacer} />

      <section id="schedule-tool" style={toolSection}>
        <ToolPreviewSection />
      </section>

      <section style={stepsSection}>
        <div style={stepsGrid}>
          {[
            [
  [
    "1",
    "Select Time Zones",
    "Choose the cities or time zones for everyone attending your meeting. This helps you instantly compare global time differences without manual calculations."
  ],
  [
    "2",
    "Compare Local Times",
    "View both locations side by side in real time. Avoid costly scheduling mistakes caused by incorrect time conversions or daylight saving changes."
  ],
  [
    "3",
    "Review the Best Window",
    "Instantly see the best overlapping working hours between both locations so you can schedule meetings that work for everyone."
  ],
  [
    "4",
    "Plan With Confidence",
    "Create links or add meetings directly to your calendar so your team can schedule faster, stay aligned, and avoid confusion."
  ],
].map(([num, title, text]) => (
            <div key={num} style={stepCard}>
              <div style={stepNumber}>{num}</div>
              <h2 style={stepTitle}>{title}</h2>
              <p style={stepText}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={whySection}>
        <div style={whyCard}>
          <h2 style={sectionHeading}>Why It Works</h2>
          <p style={bodyText}>
  Scheduling meetings across time zones can be challenging, especially when teams are spread across different regions. 
  This tool automatically calculates the best overlapping working hours between cities, so you can avoid early mornings, 
  late nights, and scheduling conflicts.
</p>

<p style={{ ...bodyText, marginTop: "10px" }}>
  Instead of manually converting time zones or relying on guesswork, you get a clear, accurate view of when both locations 
  are available. This makes it easier to plan meetings, coordinate global teams, and stay productive without confusion.
</p>
<div style={{ marginTop: "18px" }}>
  <h3 style={{ fontSize: "18px", marginBottom: "8px", color: "#1e1b4b" }}>
    Common Problems This Solves
  </h3>

  <ul style={{ ...bodyText, paddingLeft: "18px" }}>
    <li>Avoid scheduling meetings outside working hours</li>
    <li>Eliminate manual time zone conversions</li>
    <li>Prevent confusion across international teams</li>
    <li>Quickly find the best meeting time for remote teams</li>
  </ul>
</div>
          <div style={ctaRow}>
            <a href="#schedule-tool" style={primaryButton}>
              Try the Free Meeting Time Tool
            </a>
            <a href="/guides" style={secondaryButton}>
             View Time Zone Scheduling Guides
            </a>
          </div>
        </div>
      </section>

      <section style={seoSection}>
        <div style={seoCard}>
          <h2 style={sectionHeading}>How to Schedule Meetings Across Time Zones</h2>

          <p style={bodyText}>
            Scheduling meetings across different time zones can be difficult when team members,
            clients, or partners are located in different regions. Best Meeting Time helps you
            compare local times, review recommended meeting windows, and choose a time that works
            better for everyone.
          </p>

          <p style={{ ...bodyText, marginTop: "10px" }}>
            This is useful for remote teams, freelancers, consultants, and businesses that work
            with people across the United States, Europe, Asia, and other global time zones.
            Instead of manually calculating time differences, you can use the tool to quickly
            identify practical meeting options.
          </p>

          <p style={{ ...bodyText, marginTop: "10px", fontWeight: 700 }}>
            Built for remote teams, freelancers, consultants, and businesses scheduling meetings worldwide.
          </p>
        </div>
      </section>

      <footer style={footer}>
        <a href="/" style={footerLink}>Home</a>
        <a href="/guides" style={footerLink}>Guides</a>
        <a href="/contact" style={footerLink}>Contact</a>
        <a href="/privacy-policy" style={footerLink}>Privacy Policy</a>
        <a href="/terms-of-service" style={footerLink}>Terms of Service</a>
      </footer>
    </main>
  );
}

/* STYLES */

const pageWrap = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
  color: "#ffffff",
};

const introSpacer = { padding: "14px 20px 4px" };

const heroCard = {
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center" as const,
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 14px",
  padding: "8px 15px",
  borderRadius: "999px",
  background: "rgba(250,204,21,0.16)",
  color: "#facc15",
  fontSize: "13px",
  fontWeight: 900,
};

const heading = {
  fontSize: "clamp(34px, 5vw, 56px)",
  lineHeight: 1.05,
  margin: "0 0 16px",
  fontWeight: 900,
};

const subtext = {
  maxWidth: "720px",
  margin: "0 auto",
  color: "rgba(255,255,255,0.84)",
  fontSize: "17px",
  lineHeight: 1.6,
};

const toolSection = {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "18px 20px 20px",
  scrollMarginTop: "30px",

  minHeight: "calc(100vh - 120px)", // forces full first viewport
  display: "flex",
  alignItems: "flex-start",
};

const stepsSection = {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "90px 20px 38px",
};

const stepsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "18px",
};

const stepCard = {
  background: "rgba(255,255,255,0.96)",
  color: "#1e1b4b",
  borderRadius: "22px",
  padding: "24px",
  textAlign: "center" as const,
  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
  border: "1px solid rgba(196,181,253,0.65)",
};

const stepNumber = {
  width: "46px",
  height: "46px",
  margin: "0 auto 14px",
  borderRadius: "999px",
  background: "#6d28d9",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  fontSize: "18px",
};

const stepTitle = {
  fontSize: "20px",
  margin: "0 0 10px",
  color: "#1e1b4b",
};

const stepText = {
  margin: 0,
  color: "#4b5563",
  lineHeight: 1.55,
  fontSize: "15px",
};

const whySection = { padding: "18px 20px 34px" };

const whyCard = {
  maxWidth: "920px",
  margin: "0 auto",
  background: "rgba(255,255,255,0.96)",
  color: "#1e1b4b",
  borderRadius: "24px",
  padding: "34px",
  boxShadow: "0 14px 38px rgba(0,0,0,0.22)",
  border: "1px solid rgba(196,181,253,0.65)",
};

const sectionHeading = {
  fontSize: "30px",
  margin: "0 0 14px",
  color: "#1e1b4b",
};

const bodyText = {
  color: "#374151",
  lineHeight: 1.65,
  fontSize: "16px",
  margin: "0 0 14px",
};

const ctaRow = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "12px",
  marginTop: "24px",
};

const primaryButton = {
  display: "inline-block",
  background: "#facc15",
  color: "#1e1b4b",
  padding: "12px 18px",
  borderRadius: "999px",
  fontWeight: 900,
  textDecoration: "none",
};

const secondaryButton = {
  display: "inline-block",
  background: "#ede9fe",
  color: "#4c1d95",
  padding: "12px 18px",
  borderRadius: "999px",
  fontWeight: 900,
  textDecoration: "none",
};
const seoSection = {
  padding: "0 20px 42px",
};

const seoCard = {
  maxWidth: "920px",
  margin: "0 auto",
  background: "rgba(255,255,255,0.96)",
  color: "#1e1b4b",
  borderRadius: "24px",
  padding: "30px 34px",
  boxShadow: "0 14px 38px rgba(0,0,0,0.18)",
  border: "1px solid rgba(196,181,253,0.65)",
};
const footer = {
  borderTop: "1px solid rgba(255,255,255,0.14)",
  padding: "24px 20px 34px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap" as const,
  gap: "18px",
};

const footerLink = {
  color: "#ddd6fe",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 700,
};
