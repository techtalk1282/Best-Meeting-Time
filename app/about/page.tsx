/**
 * File: app/about/page.tsx
 * Version: v5.0 (100% VIEWPORT FIT - PREMIUM ABOUT PAGE)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Make About page fit within 100% desktop viewport without scrolling
 * - Preserve branded image panel and improved mission content
 * - Replace weak value cards with stronger SEO-focused user value cards
 * - Reduce wasted white space while keeping premium visual quality
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v4.0 if this compact viewport layout does not test cleanly
 */

import FooterSection from "../ui/FooterSection";

export default function AboutPage() {
  return (
    <>
      <main style={pageShell}>
        <header style={header}>
          <a href="/" style={brandLink}>
            <span style={brandIcon}>⌘</span>
            <span>Best Meeting Time</span>
          </a>

          <nav style={nav} aria-label="About page navigation">
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

        <section style={heroSection}>
          <div style={heroCopy}>
            <p style={eyebrow}>About Best Meeting Time</p>

            <h1 style={headline}>
              Smarter Time Zone Scheduling for Remote Teams and Global Work
            </h1>

            <p style={intro}>
              Best Meeting Time helps remote teams, clients, freelancers,
              consultants, agencies, and global professionals compare local
              times, review practical meeting windows, and schedule with more
              confidence.
            </p>

            <div style={trustRow}>
              <span>Time Zone Planning</span>
              <span>Remote Team Meetings</span>
              <span>Client Scheduling</span>
            </div>
          </div>

          <div style={visualPanel}>
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
              alt="Remote team planning a meeting together"
              style={visualImage}
            />

            <div style={visualCaption}>
              <strong>Built for teams working across locations.</strong>
              <span>
                Compare cities before sending the invite and choose a meeting
                time that feels fair for everyone involved.
              </span>
            </div>
          </div>
        </section>

        <section style={missionSection}>
          <div style={missionCard}>
            <p style={sectionEyebrow}>Our Mission</p>
            <h2 style={sectionTitle}>
              Make global meeting planning easier before the invite goes out.
            </h2>

            <p style={sectionText}>
              Scheduling across time zones should not require guesswork,
              repeated conversions, or long back-and-forth messages. Best
              Meeting Time helps users compare local times side by side,
              understand schedule overlap, and choose practical meeting windows.
            </p>
          </div>

          <div style={focusCard}>
            <p style={sectionEyebrow}>What We Focus On</p>

            <div style={focusList}>
              <p><strong>Clarity:</strong> show local times in a way users can understand quickly.</p>
              <p><strong>Fairness:</strong> reduce repeated early or late meetings for one region.</p>
              <p><strong>Speed:</strong> help teams and clients schedule with less back-and-forth.</p>
            </div>
          </div>
        </section>

        <section style={valueGrid}>
          <div style={valueCard}>
            <strong>Avoid time zone mistakes</strong>
            <p>
              Reduce missed meetings, wrong local times, daylight-saving confusion,
              and manual conversion errors.
            </p>
          </div>

          <div style={valueCard}>
            <strong>Schedule more fairly</strong>
            <p>
              Find overlap windows that respect local working hours and improve
              attendance across regions.
            </p>
          </div>

          <div style={valueCard}>
            <strong>Move faster across teams</strong>
            <p>
              Spend less time messaging back and forth and more time sending clear,
              practical meeting invites.
            </p>
          </div>
        </section>

        <section style={ctaBand}>
          <div>
            <p style={ctaEyebrow}>Start Planning</p>
            <h2 style={ctaTitle}>Ready to choose a better meeting time?</h2>
            <p style={ctaText}>
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
  margin: "10px auto 0",
  padding: "14px 18px 18px",
  background: "#ffffff",
  color: "#111827",
  border: "1px solid rgba(237,233,254,0.9)",
  boxShadow: "0 20px 55px rgba(30,27,75,0.16)",
};

const header = {
  minHeight: "58px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  borderBottom: "1px solid #ede9fe",
  marginBottom: "10px",
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
  gap: "16px",
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
  padding: "8px 15px",
  borderRadius: "8px",
  fontWeight: 900,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.15,
  minWidth: "150px",
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

const heroSection = {
  display: "grid",
  gridTemplateColumns: "1.05fr 0.95fr",
  gap: "12px",
  padding: "6px 10px 10px",
};

const heroCopy = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "18px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 8px",
  padding: "6px 12px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "12px",
  fontWeight: 900,
};

const headline = {
  color: "#111827",
  fontSize: "clamp(28px, 3.2vw, 38px)",
  lineHeight: "1.05",
  margin: "0 0 9px",
  fontWeight: 950,
  letterSpacing: "-0.04em",
};

const intro = {
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.45",
  margin: "0 0 9px",
};

const trustRow = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "8px",
  color: "#4c1d95",
  fontSize: "12px",
  fontWeight: 850,
};

const visualPanel = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "10px",
  boxShadow: "0 10px 25px rgba(91,33,182,0.08)",
};

const visualImage = {
  width: "100%",
  height: "132px",
  objectFit: "cover" as const,
  borderRadius: "13px",
  display: "block",
};

const visualCaption = {
  padding: "9px 3px 0",
  display: "flex",
  flexDirection: "column" as const,
  gap: "3px",
  color: "#4b5563",
  fontSize: "13px",
  lineHeight: "1.35",
};

const missionSection = {
  display: "grid",
  gridTemplateColumns: "1.25fr 0.75fr",
  gap: "12px",
  padding: "0 10px 10px",
};

const missionCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "15px",
  padding: "15px",
  boxShadow: "0 8px 20px rgba(91,33,182,0.07)",
};

const focusCard = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "15px",
  padding: "15px",
};

const sectionEyebrow = {
  color: "#6d28d9",
  fontSize: "11px",
  fontWeight: 950,
  margin: "0 0 5px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const sectionTitle = {
  color: "#111827",
  fontSize: "20px",
  lineHeight: "1.16",
  fontWeight: 950,
  margin: "0 0 7px",
};

const sectionText = {
  color: "#4b5563",
  fontSize: "13px",
  lineHeight: "1.45",
  margin: 0,
};

const focusList = {
  display: "grid",
  gap: "6px",
  color: "#4b5563",
  fontSize: "13px",
  lineHeight: "1.35",
};

const valueGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
  padding: "0 10px 10px",
};

const valueCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "15px",
  padding: "14px",
  boxShadow: "0 8px 20px rgba(91,33,182,0.07)",
  fontSize: "13px",
  lineHeight: "1.4",
};

const ctaBand = {
  margin: "0 10px",
  padding: "13px 16px",
  borderRadius: "13px",
  background: "#5b21b6",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
};

const ctaEyebrow = {
  margin: "0 0 3px",
  color: "#facc15",
  fontSize: "11px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const ctaTitle = {
  margin: "0 0 3px",
  color: "#ffffff",
  fontSize: "19px",
  fontWeight: 950,
};

const ctaText = {
  margin: 0,
  color: "rgba(255,255,255,0.86)",
  fontSize: "13px",
  lineHeight: "1.35",
};

const ctaButton = {
  background: "#ffffff",
  color: "#5b21b6",
  padding: "9px 15px",
  borderRadius: "8px",
  fontWeight: 900,
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.15,
  minWidth: "154px",
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
