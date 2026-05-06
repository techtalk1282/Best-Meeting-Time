/**
 * File: app/about/page.tsx
 * Version: v4.0 (BRANDED ABOUT PAGE WITH VISUAL PANEL)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Rebuild About page to match the polished blog/homepage visual system
 * - Add a branded visual image panel similar to the target UI
 * - Improve layout balance so the nav and content feel cohesive
 * - Keep strong SEO-focused About content without filler
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v3.0 if this page does not test cleanly
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
              repeated conversions, or long back-and-forth messages. When people
              work across different cities, countries, and regions, a meeting
              time that looks normal for one person may be too early, too late,
              or outside normal working hours for someone else.
            </p>

            <p style={sectionText}>
              Best Meeting Time was created to make that decision clearer. The
              planner helps users compare local times side by side, understand
              where schedules overlap, and choose meeting windows that are more
              practical for remote teams, client calls, and global collaboration.
            </p>
          </div>

          <div style={focusCard}>
            <p style={sectionEyebrow}>What We Focus On</p>

            <div style={focusList}>
              <div>
                <strong>Clarity</strong>
                <span>Show local times in a way users can understand quickly.</span>
              </div>

              <div>
                <strong>Fairness</strong>
                <span>Help avoid meeting times that repeatedly inconvenience one region.</span>
              </div>

              <div>
                <strong>Speed</strong>
                <span>Make scheduling faster for teams, clients, and partners.</span>
              </div>
            </div>
          </div>
        </section>

        <section style={valueGrid}>
          <div style={valueCard}>
            <strong>Compare locations quickly</strong>
            <p>
              View cities side by side and understand time differences without
              manually calculating offsets.
            </p>
          </div>

          <div style={valueCard}>
            <strong>Choose better meeting windows</strong>
            <p>
              Review practical overlap times so meetings are less likely to land
              too early, too late, or outside working hours.
            </p>
          </div>

          <div style={valueCard}>
            <strong>Support real global work</strong>
            <p>
              Built for remote teams, founders, consultants, agencies,
              freelancers, educators, and client-facing businesses.
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
  margin: "18px auto 0",
  padding: "18px 18px 36px",
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

const heroSection = {
  display: "grid",
  gridTemplateColumns: "1.05fr 0.95fr",
  gap: "16px",
  padding: "8px 10px 14px",
};

const heroCopy = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "24px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 10px",
  padding: "7px 13px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "12px",
  fontWeight: 900,
};

const headline = {
  color: "#111827",
  fontSize: "clamp(31px, 3.6vw, 42px)",
  lineHeight: "1.06",
  margin: "0 0 12px",
  fontWeight: 950,
  letterSpacing: "-0.04em",
};

const intro = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.55",
  margin: "0 0 13px",
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
  borderRadius: "18px",
  padding: "12px",
  boxShadow: "0 14px 32px rgba(91,33,182,0.1)",
};

const visualImage = {
  width: "100%",
  height: "170px",
  objectFit: "cover" as const,
  borderRadius: "14px",
  display: "block",
};

const visualCaption = {
  padding: "12px 4px 2px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "4px",
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.45",
};

const missionSection = {
  display: "grid",
  gridTemplateColumns: "1.25fr 0.75fr",
  gap: "14px",
  padding: "0 10px 14px",
};

const missionCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "20px",
  boxShadow: "0 10px 25px rgba(91,33,182,0.08)",
};

const focusCard = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "20px",
};

const sectionEyebrow = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  margin: "0 0 6px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const sectionTitle = {
  color: "#111827",
  fontSize: "22px",
  lineHeight: "1.2",
  fontWeight: 950,
  margin: "0 0 8px",
};

const sectionText = {
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.58",
  margin: "0 0 8px",
};

const focusList = {
  display: "grid",
  gap: "10px",
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.45",
};

const valueGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
  padding: "0 10px 14px",
};

const valueCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "16px",
  boxShadow: "0 10px 25px rgba(91,33,182,0.08)",
  fontSize: "14px",
  lineHeight: "1.55",
};

const ctaBand = {
  margin: "0 10px",
  padding: "16px 18px",
  borderRadius: "14px",
  background: "#5b21b6",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
};

const ctaEyebrow = {
  margin: "0 0 4px",
  color: "#facc15",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const ctaTitle = {
  margin: "0 0 4px",
  color: "#ffffff",
  fontSize: "21px",
  fontWeight: 950,
};

const ctaText = {
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
