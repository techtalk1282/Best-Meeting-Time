/**
 * File: app/guides/page.tsx
 * Version: v3.1 (POLISHED GLOBAL TIME LEARNING HUB)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Replace weak/broken image layout with polished built-in visual guide panels
 * - Make Guides feel like an educational time-zone learning hub
 * - Improve visual impact, SEO value, and AdSense-friendly informational depth
 * - Keep branding aligned with homepage/blog/about/features
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 * - No payment or premium logic changes
 *
 * ROLLBACK:
 * - Revert to app/guides/page.tsx v3.0 if needed
 */

export default function GuidesPage() {
  return (
    <main style={pageShell}>
      <header style={header}>
        <a href="/" style={brandLink}>
          <span style={brandIcon}>⌘</span>
          <span>Best Meeting Time</span>
        </a>

        <nav style={nav} aria-label="Main navigation">
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
          <p style={eyebrow}>Global Time Learning Center</p>

          <h1 style={heroTitle}>
            Learn Time Zones, World Schedules, and Smarter Global Planning
          </h1>

          <p style={heroText}>
            Explore how time zones affect meetings, travel, sports, streaming,
            gaming, remote work, and international communication — then use the
            planner when you are ready to compare real cities.
          </p>
        </div>

        <div style={heroVisual}>
          <div style={worldStrip}>
            <div style={zoneBlockA}>Pacific</div>
            <div style={zoneBlockB}>Central</div>
            <div style={zoneBlockC}>London</div>
            <div style={zoneBlockD}>Dubai</div>
            <div style={zoneBlockE}>Tokyo</div>
          </div>

          <div style={clockRow}>
            <div style={clockCard}>
              <strong>9 AM</strong>
              <span>New York</span>
            </div>
            <div style={clockCard}>
              <strong>2 PM</strong>
              <span>London</span>
            </div>
            <div style={clockCard}>
              <strong>11 PM</strong>
              <span>Tokyo</span>
            </div>
          </div>

          <div style={visualCaption}>
            One meeting can feel normal in one city and exhausting in another.
          </div>
        </div>
      </section>

      <section style={featureGrid}>
        <article style={featureCard}>
          <div style={visualCardBlue}>
            <span style={visualLabel}>Time Zone Basics</span>
            <div style={miniMapGrid}>
              <span>UTC−8</span>
              <span>UTC−5</span>
              <span>UTC+0</span>
              <span>UTC+4</span>
              <span>UTC+9</span>
            </div>
          </div>

          <h2 style={cardTitle}>Why Time Zones Exist</h2>
          <p style={cardText}>
            Learn why the world does not run on one clock, how offsets work,
            and why countries sometimes use unusual time-zone rules.
          </p>
        </article>

        <article style={featureCard}>
          <div style={visualCardGold}>
            <span style={visualLabelDark}>Sports, Streaming & Events</span>
            <div style={eventRows}>
              <span>Live Match</span>
              <span>Global Stream</span>
              <span>Online Watch Party</span>
            </div>
          </div>

          <h2 style={cardTitle}>Timing Beyond Meetings</h2>
          <p style={cardText}>
            Time zones affect fans, creators, gamers, travelers, families, and
            online communities trying to connect at the same moment.
          </p>
        </article>

        <article style={featureCard}>
          <div style={visualCardPurple}>
            <span style={visualLabelLight}>Remote Work</span>
            <div style={overlapBox}>
              <strong>Best overlap window</strong>
              <span>Fair for both sides</span>
            </div>
          </div>

          <h2 style={cardTitle}>Better Global Work Hours</h2>
          <p style={cardText}>
            Understand how to avoid repeatedly forcing one location into early
            morning or late-night meetings.
          </p>
        </article>
      </section>

      <section style={learningSection}>
        <div style={learningMain}>
          <p style={sectionEyebrow}>What You Can Learn Here</p>
          <h2 style={sectionTitle}>A practical guide to how global time works.</h2>

          <div style={lessonGrid}>
            <div style={lessonCard}>
              <strong>Time zone basics</strong>
              <span>
                Learn UTC, GMT, offsets, regional clocks, and why some countries
                have multiple time zones.
              </span>
            </div>

            <div style={lessonCard}>
              <strong>Daylight-saving confusion</strong>
              <span>
                Understand why clock changes do not happen everywhere at the
                same time and why that causes scheduling errors.
              </span>
            </div>

            <div style={lessonCard}>
              <strong>Entertainment timing</strong>
              <span>
                Plan livestreams, sports viewing, gaming events, and global
                online gatherings across multiple regions.
              </span>
            </div>

            <div style={lessonCard}>
              <strong>Meeting fairness</strong>
              <span>
                Learn how to choose better overlap windows so one city does not
                always carry the scheduling burden.
              </span>
            </div>
          </div>
        </div>

        <div style={spotlightCard}>
          <p style={sectionEyebrow}>Guide Spotlight</p>
          <h2 style={spotlightTitle}>When it is convenient for one city, it may be impossible for another.</h2>
          <p style={spotlightText}>
            That is the hidden challenge behind global scheduling. A good guide
            does not just show the time — it explains what that time means for
            real people in different places.
          </p>
          <a href="/how-it-works#schedule-tool" style={goldButton}>
            Try the Planner
          </a>
        </div>
      </section>

      <section style={deepGuideSection}>
        <div style={deepGuideHeader}>
          <p style={sectionEyebrow}>Popular Learning Paths</p>
          <h2 style={sectionTitle}>Choose the guide path that matches your goal.</h2>
        </div>

        <div style={pathGrid}>
          <a href="/how-to-schedule-meetings-across-time-zones" style={pathCard}>
            <span style={pathNumber}>01</span>
            <strong>Schedule across time zones</strong>
            <p>
              Learn the step-by-step process for comparing locations and choosing
              a better meeting time.
            </p>
          </a>

          <a href="/best-meeting-times-remote-teams" style={pathCard}>
            <span style={pathNumber}>02</span>
            <strong>Plan for remote teams</strong>
            <p>
              Understand overlap windows, fairness, workday boundaries, and
              rotating inconvenient meeting times.
            </p>
          </a>

          <a href="/time-zone-meeting-planner-guide" style={pathCard}>
            <span style={pathNumber}>03</span>
            <strong>Use the meeting planner</strong>
            <p>
              Compare cities, review recommended windows, and move into sharing
              or calendar actions when needed.
            </p>
          </a>
        </div>
      </section>

      <section style={bottomBand}>
        <div>
          <p style={bottomEyebrow}>Start Learning</p>
          <h2 style={bottomTitle}>Explore global time, then plan smarter.</h2>
          <p style={bottomText}>
            Learn how time zones affect real life, then use Best Meeting Time to
            compare cities and find better meeting windows.
          </p>
        </div>

        <a href="/how-it-works#schedule-tool" style={bottomButton}>
          <span style={bottomButtonMain}>Open the Planner</span>
          <span style={bottomButtonSub}>Free to try — no sign-up</span>
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
};

const heroSection = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "28px",
  alignItems: "center",
  padding: "18px 10px 22px",
  borderBottom: "1px solid #ede9fe",
};

const heroCopy = {};

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
  fontSize: "clamp(36px, 4vw, 50px)",
  lineHeight: "1.04",
  fontWeight: 950,
  letterSpacing: "-0.045em",
  margin: "0 0 14px",
};

const heroText = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: 0,
};

const heroVisual = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "22px",
  padding: "18px",
  boxShadow: "0 18px 40px rgba(91,33,182,0.12)",
};

const worldStrip = {
  height: "140px",
  display: "grid",
  gridTemplateColumns: "0.9fr 1fr 1.1fr 1fr 0.9fr",
  overflow: "hidden",
  borderRadius: "18px",
  border: "1px solid #ddd6fe",
  marginBottom: "14px",
};

const zoneBlockA = {
  background: "#38bdf8",
  color: "#0f172a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 950,
};

const zoneBlockB = {
  background: "#facc15",
  color: "#0f172a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 950,
};

const zoneBlockC = {
  background: "#8b5cf6",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 950,
};

const zoneBlockD = {
  background: "#fb7185",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 950,
};

const zoneBlockE = {
  background: "#22c55e",
  color: "#0f172a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 950,
};

const clockRow = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
};

const clockCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "14px",
  padding: "12px",
  display: "grid",
  gap: "4px",
};

const visualCaption = {
  marginTop: "12px",
  background: "#5b21b6",
  color: "#ffffff",
  borderRadius: "14px",
  padding: "12px",
  fontWeight: 850,
  lineHeight: 1.4,
};

const featureGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  padding: "20px 10px 18px",
};

const featureCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "16px",
  boxShadow: "0 12px 28px rgba(91,33,182,0.08)",
};

const visualCardBlue = {
  height: "150px",
  borderRadius: "16px",
  background: "linear-gradient(135deg, #dbeafe 0%, #ede9fe 100%)",
  padding: "14px",
  display: "grid",
  alignContent: "space-between",
};

const visualCardGold = {
  height: "150px",
  borderRadius: "16px",
  background: "linear-gradient(135deg, #facc15 0%, #fed7aa 100%)",
  padding: "14px",
  display: "grid",
  alignContent: "space-between",
};

const visualCardPurple = {
  height: "150px",
  borderRadius: "16px",
  background: "linear-gradient(135deg, #5b21b6 0%, #312e81 100%)",
  padding: "14px",
  display: "grid",
  alignContent: "space-between",
};

const visualLabel = {
  color: "#4c1d95",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
};

const visualLabelDark = {
  color: "#111827",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
};

const visualLabelLight = {
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
};

const miniMapGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "5px",
};

const eventRows = {
  display: "grid",
  gap: "6px",
};

const overlapBox = {
  background: "rgba(255,255,255,0.14)",
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: "14px",
  padding: "12px",
  display: "grid",
  gap: "4px",
};

const cardTitle = {
  fontSize: "24px",
  lineHeight: "1.12",
  margin: "14px 0 8px",
  fontWeight: 950,
};

const cardText = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.55",
  margin: 0,
};

const learningSection = {
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: "18px",
  padding: "0 10px 18px",
};

const learningMain = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "22px",
};

const sectionEyebrow = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
  margin: "0 0 8px",
};

const sectionTitle = {
  fontSize: "32px",
  lineHeight: "1.05",
  fontWeight: 950,
  margin: "0 0 14px",
};

const lessonGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "12px",
};

const lessonCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "14px",
  padding: "14px",
  display: "grid",
  gap: "6px",
};

const spotlightCard = {
  background: "#5b21b6",
  color: "#ffffff",
  borderRadius: "18px",
  padding: "24px",
};

const spotlightTitle = {
  fontSize: "30px",
  lineHeight: "1.05",
  fontWeight: 950,
  margin: "0 0 12px",
};

const spotlightText = {
  color: "rgba(255,255,255,0.88)",
  fontSize: "16px",
  lineHeight: "1.65",
};

const goldButton = {
  display: "inline-block",
  background: "#facc15",
  color: "#111827",
  padding: "12px 18px",
  borderRadius: "999px",
  fontWeight: 950,
  textDecoration: "none",
};

const deepGuideSection = {
  padding: "0 10px 18px",
};

const deepGuideHeader = {
  marginBottom: "12px",
};

const pathGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
};

const pathCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "20px",
  textDecoration: "none",
  color: "#111827",
  display: "grid",
  gap: "10px",
};

const pathNumber = {
  color: "#6d28d9",
  fontSize: "13px",
  fontWeight: 950,
};

const bottomBand = {
  margin: "0 10px",
  padding: "20px",
  borderRadius: "16px",
  background: "#5b21b6",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
};

const bottomEyebrow = {
  color: "#facc15",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
  margin: "0 0 4px",
};

const bottomTitle = {
  fontSize: "28px",
  lineHeight: "1.08",
  fontWeight: 950,
  margin: "0 0 6px",
};

const bottomText = {
  color: "rgba(255,255,255,0.88)",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: 0,
};

const bottomButton = {
  background: "#ffffff",
  color: "#5b21b6",
  padding: "12px 18px",
  borderRadius: "10px",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  minWidth: "170px",
};

const bottomButtonMain = {
  fontSize: "14px",
  fontWeight: 950,
};

const bottomButtonSub = {
  fontSize: "11px",
  fontWeight: 700,
};
