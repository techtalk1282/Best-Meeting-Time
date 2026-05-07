/**
 * File: app/guides/page.tsx
 * Version: v3.1 (MOCKUP-MATCH GLOBAL GUIDES HUB)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Match approved colorful Guides mockup direction
 * - Use polished built-in visual panels instead of unreliable external images
 * - Keep integrated navigation/header structure
 * - Present Guides as an educational global time resource hub
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to app/guides/page.tsx v3.0 if this layout does not test cleanly
 */

export default function GuidesPage() {
  return (
    <main style={pageShell}>
      <header style={header}>
        <a href="/" style={brandLink}>
          <span style={brandIcon}>⌘</span>
          <span>Best Meeting Time</span>
        </a>

        <nav style={nav} aria-label="Guides navigation">
          <a href="/" style={navLink}>Home</a>
          <a href="/how-it-works" style={navLink}>How It Works</a>
          <a href="/features" style={navLink}>Features</a>
          <a href="/guides" style={activeNavLink}>Guides</a>
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
          <p style={pill}>Global Time Guides & Resources</p>

          <h1 style={heroTitle}>
            Understand Time Zones. Connect Across the World.
          </h1>

          <p style={heroText}>
            Learn how time zones affect meetings, work, travel, entertainment,
            and daily life. Explore guides, cultural insights, and planning tips
            for a world that never stops.
          </p>

          <div style={statsRow}>
            <div style={statItem}>
              <span style={statIcon}>24</span>
              <strong>Primary time zones</strong>
            </div>

            <div style={statItem}>
              <span style={statIcon}>195+</span>
              <strong>Countries with local schedules</strong>
            </div>

            <div style={statItem}>
              <span style={statIcon}>24/7</span>
              <strong>The world never stops moving</strong>
            </div>
          </div>
        </div>

        <div style={globePanel}>
          <div style={globe}>
            <span style={pinNorthAmerica} />
            <span style={pinEurope} />
            <span style={pinAsia} />
            <span style={pinAustralia} />
            <span style={arcOne} />
            <span style={arcTwo} />
            <span style={arcThree} />
          </div>

          <div style={timeOverlay}>
            <div style={timeCellOrange}>
              <strong>9:00 AM</strong>
              <span>New York</span>
            </div>
            <div style={timeCellPurple}>
              <strong>2:00 PM</strong>
              <span>London</span>
            </div>
            <div style={timeCellBlue}>
              <strong>11:00 PM</strong>
              <span>Tokyo</span>
            </div>
            <div style={timeCellGreen}>
              <strong>6:00 AM</strong>
              <span>Sydney</span>
            </div>
          </div>

          <div style={globeCaption}>
            Different places. Different times. One connected world.
          </div>
        </div>
      </section>

      <section style={guideIntro}>
        <p style={pill}>Explore Our Guides</p>
        <h2 style={sectionTitle}>Choose a Guide to Start Learning</h2>
        <p style={sectionText}>
          From time zone basics to cultural tips and entertainment timing, these
          guides help you understand the world and plan with confidence.
        </p>
      </section>

      <section style={guideGrid}>
        <a href="/guides/time-zone-basics" style={guideCard}>
          <div style={timeZoneImage}>
            <span style={mapClockOne}>UTC</span>
            <span style={mapClockTwo}>GMT</span>
            <span style={mapClockThree}>DST</span>
          </div>

          <div style={cardBody}>
            <span style={circlePurple}>1</span>
            <h3 style={cardTitle}>Time Zone Basics</h3>
            <ul style={bulletList}>
              <li>How many time zones are there?</li>
              <li>Why do time zones exist?</li>
              <li>Why do clocks change?</li>
            </ul>
            <span style={readLink}>Read more on this guide →</span>
          </div>
        </a>

        <a href="/guides/cultural-timing-guides" style={guideCard}>
          <div style={cultureImage}>
            <span style={cultureBuilding}>Tokyo</span>
            <span style={cultureBuilding}>Paris</span>
            <span style={cultureBuilding}>Dubai</span>
            <span style={cultureBuilding}>London</span>
          </div>

          <div style={cardBody}>
            <span style={circleGold}>2</span>
            <h3 style={cardTitle}>Cultural Timing Guides</h3>
            <ul style={bulletList}>
              <li>Best time to contact Japan</li>
              <li>Work hours around the world</li>
              <li>Weekend differences globally</li>
            </ul>
            <span style={readLink}>Read more on this guide →</span>
          </div>
        </a>

        <a href="/guides/entertainment-social-timing" style={guideCard}>
          <div style={entertainmentImage}>
            <span style={screenIcon}>Live</span>
            <span style={gameIcon}>Game</span>
            <span style={sportsIcon}>Sports</span>
          </div>

          <div style={cardBody}>
            <span style={circleGreen}>3</span>
            <h3 style={cardTitle}>Entertainment & Social Timing</h3>
            <ul style={bulletList}>
              <li>Best time for global gaming events</li>
              <li>Streaming across time zones</li>
              <li>International sports viewing times</li>
            </ul>
            <span style={readLink}>Read more on this guide →</span>
          </div>
        </a>
      </section>

      <section style={whySection}>
        <p style={pill}>Why Learning Matters</p>
        <h2 style={whyTitle}>Time zones affect more than just meetings.</h2>

        <div style={whyGrid}>
          <div style={whyItem}>
            <strong>Work & Business</strong>
            <span>Plan fair meetings and respect work hours around the world.</span>
          </div>

          <div style={whyItem}>
            <strong>Travel & Lifestyle</strong>
            <span>Avoid missed flights, confusion, and scheduling surprises.</span>
          </div>

          <div style={whyItem}>
            <strong>Family & Friends</strong>
            <span>Stay connected with loved ones across different time zones.</span>
          </div>

          <div style={whyItem}>
            <strong>Entertainment</strong>
            <span>Catch live events, streams, and games at the right time.</span>
          </div>

          <div style={whyItem}>
            <strong>Global Community</strong>
            <span>Join online communities and events happening worldwide.</span>
          </div>
        </div>
      </section>

      <section style={ctaBand}>
        <div style={plannerVisual}>
          <div style={plannerScreen}>
            <div style={plannerRow} />
            <div style={plannerRowWide} />
            <div style={plannerGrid}>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div style={ctaTextBox}>
          <h2 style={ctaTitle}>Ready to find the best time to connect?</h2>
          <p style={ctaText}>
            Use our planner to compare cities, find overlap windows, and
            schedule with confidence.
          </p>
        </div>

        <a href="/how-it-works#schedule-tool" style={ctaButton}>
          <span>Open the Meeting Planner</span>
          <small>Free to try — no sign-up</small>
        </a>
      </section>
    </main>
  );
}

/* STYLES */

const pageShell = {
  maxWidth: "1120px",
  margin: "18px auto 0",
  padding: "18px 18px 28px",
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
  marginBottom: "24px",
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
};

const activeNavLink = {
  ...navLink,
  color: "#5b21b6",
  borderBottom: "2px solid #5b21b6",
  paddingBottom: "6px",
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
  lineHeight: 1.16,
  minWidth: "154px",
};

const navButtonMain = {
  fontSize: "13px",
  fontWeight: 900,
};

const navButtonSub = {
  fontSize: "10px",
  fontWeight: 800,
};

const heroSection = {
  display: "grid",
  gridTemplateColumns: "0.95fr 1.05fr",
  gap: "38px",
  alignItems: "center",
  padding: "22px 10px 30px",
};

const heroCopy = {};

const pill = {
  display: "inline-block",
  margin: "0 0 14px",
  padding: "7px 13px",
  borderRadius: "999px",
  background: "#f3efff",
  color: "#5b21b6",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
};

const heroTitle = {
  fontSize: "clamp(38px, 4.8vw, 58px)",
  lineHeight: "1.02",
  letterSpacing: "-0.05em",
  fontWeight: 950,
  color: "#111827",
  margin: "0 0 16px",
};

const heroText = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.65",
  margin: "0 0 24px",
};

const statsRow = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "14px",
};

const statItem = {
  borderRight: "1px solid #ddd6fe",
  paddingRight: "12px",
  display: "grid",
  gap: "5px",
};

const statIcon = {
  color: "#5b21b6",
  fontSize: "25px",
  fontWeight: 950,
};

const globePanel = {
  position: "relative" as const,
  minHeight: "420px",
  borderRadius: "18px",
  overflow: "hidden",
  background:
    "radial-gradient(circle at 25% 30%, #fde68a 0%, transparent 30%), radial-gradient(circle at 58% 44%, #0ea5e9 0%, #1d4ed8 42%, #0f172a 78%)",
  boxShadow: "0 24px 55px rgba(30,27,75,0.22)",
};

const globe = {
  position: "absolute" as const,
  inset: "0",
  background:
    "radial-gradient(circle at 55% 42%, rgba(255,255,255,0.22), transparent 18%), radial-gradient(circle at 50% 50%, transparent 0%, transparent 56%, rgba(255,255,255,0.34) 57%, transparent 60%)",
};

const pinNorthAmerica = {
  position: "absolute" as const,
  left: "24%",
  top: "35%",
  width: "16px",
  height: "16px",
  borderRadius: "999px",
  background: "#8b5cf6",
  boxShadow: "0 0 0 7px rgba(139,92,246,0.28)",
};

const pinEurope = {
  position: "absolute" as const,
  left: "47%",
  top: "28%",
  width: "16px",
  height: "16px",
  borderRadius: "999px",
  background: "#facc15",
  boxShadow: "0 0 0 7px rgba(250,204,21,0.28)",
};

const pinAsia = {
  position: "absolute" as const,
  right: "25%",
  top: "42%",
  width: "16px",
  height: "16px",
  borderRadius: "999px",
  background: "#fb7185",
  boxShadow: "0 0 0 7px rgba(251,113,133,0.28)",
};

const pinAustralia = {
  position: "absolute" as const,
  right: "18%",
  bottom: "30%",
  width: "16px",
  height: "16px",
  borderRadius: "999px",
  background: "#22c55e",
  boxShadow: "0 0 0 7px rgba(34,197,94,0.28)",
};

const arcOne = {
  position: "absolute" as const,
  left: "25%",
  top: "39%",
  width: "250px",
  borderTop: "2px dashed rgba(250,204,21,0.8)",
  transform: "rotate(-12deg)",
};

const arcTwo = {
  position: "absolute" as const,
  right: "21%",
  top: "48%",
  width: "260px",
  borderTop: "2px dashed rgba(250,204,21,0.75)",
  transform: "rotate(19deg)",
};

const arcThree = {
  position: "absolute" as const,
  right: "22%",
  bottom: "35%",
  width: "210px",
  borderTop: "2px dashed rgba(250,204,21,0.7)",
  transform: "rotate(-24deg)",
};

const timeOverlay = {
  position: "absolute" as const,
  left: "28px",
  right: "28px",
  bottom: "86px",
  background: "#ffffff",
  borderRadius: "14px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  overflow: "hidden",
};

const timeCellOrange = {
  padding: "14px",
  color: "#f97316",
  display: "grid",
  gap: "5px",
};

const timeCellPurple = {
  padding: "14px",
  color: "#6d28d9",
  display: "grid",
  gap: "5px",
};

const timeCellBlue = {
  padding: "14px",
  color: "#2563eb",
  display: "grid",
  gap: "5px",
};

const timeCellGreen = {
  padding: "14px",
  color: "#16a34a",
  display: "grid",
  gap: "5px",
};

const globeCaption = {
  position: "absolute" as const,
  left: "28px",
  right: "28px",
  bottom: "24px",
  background: "rgba(76,29,149,0.94)",
  color: "#ffffff",
  padding: "13px 16px",
  borderRadius: "14px",
  textAlign: "center" as const,
  fontWeight: 950,
};

const guideIntro = {
  textAlign: "center" as const,
  padding: "18px 10px 24px",
};

const sectionTitle = {
  fontSize: "clamp(30px, 3vw, 40px)",
  lineHeight: "1.08",
  fontWeight: 950,
  letterSpacing: "-0.035em",
  margin: "0 0 10px",
};

const sectionText = {
  maxWidth: "680px",
  margin: "0 auto",
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.55",
};

const guideGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  padding: "0 10px 26px",
};

const guideCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  overflow: "hidden",
  textDecoration: "none",
  color: "#111827",
  boxShadow: "0 16px 36px rgba(91,33,182,0.10)",
};

const timeZoneImage = {
  height: "198px",
  position: "relative" as const,
  background:
    "linear-gradient(90deg, rgba(37,99,235,0.16) 0 20%, rgba(59,130,246,0.25) 20% 40%, rgba(96,165,250,0.2) 40% 60%, rgba(147,197,253,0.24) 60% 80%, rgba(191,219,254,0.42) 80%), radial-gradient(circle at 50% 50%, #2563eb 0%, #60a5fa 30%, transparent 32%)",
};

const cultureImage = {
  height: "198px",
  background:
    "linear-gradient(135deg, #fef3c7 0%, #fca5a5 32%, #c4b5fd 67%, #bfdbfe 100%)",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  alignItems: "end",
  padding: "16px",
  gap: "8px",
};

const entertainmentImage = {
  height: "198px",
  background:
    "radial-gradient(circle at 78% 26%, #f0abfc 0%, transparent 25%), linear-gradient(135deg, #0f172a 0%, #312e81 45%, #7e22ce 100%)",
  position: "relative" as const,
};

const mapClockOne = {
  position: "absolute" as const,
  left: "16%",
  top: "38%",
  background: "#ffffff",
  border: "3px solid #6d28d9",
  borderRadius: "999px",
  padding: "9px",
  color: "#5b21b6",
  fontWeight: 950,
};

const mapClockTwo = {
  position: "absolute" as const,
  left: "47%",
  top: "25%",
  background: "#ffffff",
  border: "3px solid #6d28d9",
  borderRadius: "999px",
  padding: "9px",
  color: "#5b21b6",
  fontWeight: 950,
};

const mapClockThree = {
  position: "absolute" as const,
  right: "14%",
  top: "48%",
  background: "#ffffff",
  border: "3px solid #6d28d9",
  borderRadius: "999px",
  padding: "9px",
  color: "#5b21b6",
  fontWeight: 950,
};

const cultureBuilding = {
  height: "70px",
  background: "rgba(255,255,255,0.66)",
  borderRadius: "12px 12px 0 0",
  color: "#4c1d95",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  fontWeight: 950,
};

const screenIcon = {
  position: "absolute" as const,
  left: "40%",
  top: "27%",
  border: "2px solid #a855f7",
  color: "#ffffff",
  borderRadius: "14px",
  padding: "18px 24px",
  boxShadow: "0 0 24px rgba(168,85,247,0.85)",
  fontWeight: 950,
};

const gameIcon = {
  position: "absolute" as const,
  left: "16%",
  bottom: "28%",
  color: "#ffffff",
  border: "2px solid #22c55e",
  borderRadius: "999px",
  padding: "12px",
  fontWeight: 950,
};

const sportsIcon = {
  position: "absolute" as const,
  right: "13%",
  bottom: "26%",
  color: "#ffffff",
  border: "2px solid #facc15",
  borderRadius: "999px",
  padding: "12px",
  fontWeight: 950,
};

const cardBody = {
  padding: "22px",
};

const circlePurple = {
  width: "42px",
  height: "42px",
  borderRadius: "999px",
  background: "#7c3aed",
  color: "#ffffff",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 950,
  marginBottom: "14px",
};

const circleGold = {
  ...circlePurple,
  background: "#facc15",
  color: "#111827",
};

const circleGreen = {
  ...circlePurple,
  background: "#22c55e",
};

const cardTitle = {
  fontSize: "26px",
  lineHeight: "1.12",
  letterSpacing: "-0.02em",
  fontWeight: 950,
  margin: "0 0 14px",
};

const bulletList = {
  color: "#374151",
  fontSize: "15px",
  lineHeight: "1.65",
  paddingLeft: "18px",
  margin: "0 0 18px",
};

const readLink = {
  color: "#5b21b6",
  fontSize: "15px",
  fontWeight: 950,
};

const whySection = {
  borderTop: "1px solid #ede9fe",
  textAlign: "center" as const,
  padding: "26px 10px 28px",
};

const whyTitle = {
  fontSize: "32px",
  lineHeight: "1.08",
  fontWeight: 950,
  margin: "0 0 24px",
};

const whyGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "16px",
};

const whyItem = {
  borderRight: "1px solid #ede9fe",
  padding: "0 12px",
  display: "grid",
  gap: "8px",
  color: "#374151",
  fontSize: "13px",
  lineHeight: "1.45",
};

const ctaBand = {
  background: "linear-gradient(135deg, #312e81 0%, #6d28d9 100%)",
  borderRadius: "18px",
  padding: "20px 26px",
  display: "grid",
  gridTemplateColumns: "230px 1fr 250px",
  gap: "24px",
  alignItems: "center",
  color: "#ffffff",
};

const plannerVisual = {
  minHeight: "130px",
  borderRadius: "16px",
  background: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)",
  padding: "16px",
};

const plannerScreen = {
  background: "#ede9fe",
  borderRadius: "12px",
  padding: "12px",
};

const plannerRow = {
  height: "10px",
  width: "45%",
  background: "#6d28d9",
  borderRadius: "999px",
  marginBottom: "8px",
};

const plannerRowWide = {
  height: "10px",
  width: "75%",
  background: "#a78bfa",
  borderRadius: "999px",
  marginBottom: "12px",
};

const plannerGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "7px",
};

const ctaTextBox = {};

const ctaTitle = {
  fontSize: "30px",
  lineHeight: "1.05",
  fontWeight: 950,
  margin: "0 0 8px",
};

const ctaText = {
  color: "#ede9fe",
  fontSize: "15px",
  lineHeight: "1.55",
  margin: 0,
};

const ctaButton = {
  background: "#facc15",
  color: "#111827",
  padding: "16px 18px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: 950,
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  lineHeight: 1.15,
};
