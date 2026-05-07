/**
 * File: app/guides/page.tsx
 * Version: v3.0 (GLOBAL TIME EDUCATION HUB)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Transform Guides into a visual educational resource center
 * - Focus on global time education, scheduling psychology, world coordination, and international timing
 * - Improve SEO + AdSense authority with evergreen educational content
 * - Integrate Best Meeting Time naturally instead of making the page feel like marketing
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
 * - Revert to app/guides/page.tsx v2.2 if needed
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
        <div style={heroLeft}>
          <p style={eyebrow}>Global Time & Scheduling Education</p>

          <h1 style={heroTitle}>
            Understanding Time Zones, Global Meetings, and Worldwide Scheduling
          </h1>

          <p style={heroText}>
            Educational guides for remote teams, international collaboration,
            entertainment events, travel planning, global communication, and
            better meeting coordination across time zones.
          </p>

          <div style={heroFacts}>
            <div style={factBox}>
              <strong>24</strong>
              <span>Primary global time zones</span>
            </div>

            <div style={factBox}>
              <strong>38+</strong>
              <span>Actual local time offsets used worldwide</span>
            </div>

            <div style={factBox}>
              <strong>Billions</strong>
              <span>Of people coordinating across regions daily</span>
            </div>
          </div>
        </div>

        <div style={heroMapPanel}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/88/World_Time_Zones_Map.png"
            alt="World time zone map"
            style={heroMap}
          />

          <div style={mapOverlay}>
            <strong>Global coordination starts with understanding time.</strong>
          </div>
        </div>
      </section>

      <section style={learningGrid}>
        <article style={learningCard}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Timezones2008_UTC-6_gray.png"
            alt="United States time zones"
            style={learningImage}
          />

          <div style={learningBody}>
            <span style={learningTag}>Time Zone Basics</span>

            <h2 style={learningTitle}>
              Why Time Zones Exist and Why They Still Confuse People
            </h2>

            <p style={learningText}>
              Learn how global time zones were created, why countries use
              different offsets, and why daylight-saving changes still create
              scheduling problems today.
            </p>

            <a href="/blog" style={readMore}>
              Explore time zone articles →
            </a>
          </div>
        </article>

        <article style={learningCard}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7f/World_Time_Zones_Map.png"
            alt="Global world time zone illustration"
            style={learningImage}
          />

          <div style={learningBody}>
            <span style={learningTag}>Global Scheduling</span>

            <h2 style={learningTitle}>
              Best Overlap Windows Between Major World Cities
            </h2>

            <p style={learningText}>
              Discover practical overlap windows between cities like New York,
              London, Tokyo, Sydney, and Los Angeles for remote work and
              international collaboration.
            </p>

            <a href="/how-it-works#schedule-tool" style={readMore}>
              Compare cities with the planner →
            </a>
          </div>
        </article>

        <article style={learningCard}>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="International remote team collaboration"
            style={learningImage}
          />

          <div style={learningBody}>
            <span style={learningTag}>Remote Teams</span>

            <h2 style={learningTitle}>
              Why Poor Meeting Times Hurt Productivity and Team Morale
            </h2>

            <p style={learningText}>
              Explore how scheduling fatigue affects global teams, why fairness
              matters in distributed work, and how smarter overlap planning
              reduces burnout.
            </p>

            <a href="/features" style={readMore}>
              Learn about planning tools →
            </a>
          </div>
        </article>
      </section>

      <section style={infoSection}>
        <div style={infoLeft}>
          <p style={sectionEyebrow}>Interesting Global Time Facts</p>

          <h2 style={sectionTitle}>
            Time zones affect much more than business meetings.
          </h2>

          <p style={sectionText}>
            Global timing impacts entertainment, livestreams, gaming events,
            sports broadcasts, travel coordination, online communities, and
            social communication around the world.
          </p>

          <div style={factList}>
            <div style={factItem}>
              <strong>Sports & Streaming</strong>
              <span>
                Global fans often wake up early or stay up late to watch live
                international events.
              </span>
            </div>

            <div style={factItem}>
              <strong>Travel Coordination</strong>
              <span>
                Travelers regularly manage flight schedules, hotel check-ins,
                and meeting times across multiple regions.
              </span>
            </div>

            <div style={factItem}>
              <strong>Remote Gaming</strong>
              <span>
                International gaming communities coordinate tournaments and
                events across multiple continents daily.
              </span>
            </div>

            <div style={factItem}>
              <strong>Global Work Hours</strong>
              <span>
                Different countries start and end their workdays at very
                different local times and cultural expectations.
              </span>
            </div>
          </div>
        </div>

        <div style={infoRight}>
          <img
            src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=80"
            alt="People from different countries collaborating"
            style={sideImage}
          />

          <div style={quoteCard}>
            <p style={quoteText}>
              “Global coordination is no longer optional — modern work, social
              events, and entertainment all depend on understanding time zones.”
            </p>
          </div>
        </div>
      </section>

      <section style={educationSection}>
        <div style={educationCard}>
          <p style={sectionEyebrow}>Scheduling Education</p>

          <h2 style={sectionTitle}>
            Why global scheduling is harder than most people realize
          </h2>

          <p style={educationText}>
            Scheduling across time zones is not just converting one clock into
            another. Good scheduling depends on overlap windows, local working
            hours, daylight-saving rules, meeting duration, regional customs,
            and whether the selected time is practical for everyone involved.
          </p>

          <p style={educationText}>
            Many remote teams unknowingly create unfair meeting patterns where
            the same region is repeatedly forced into late-night or early-morning
            calls. Over time, this can create frustration, fatigue, and lower
            participation.
          </p>

          <p style={educationText}>
            Educational scheduling guides help people understand how global
            timing works before they send invites. The Best Meeting Time planner
            is designed to help turn that knowledge into practical scheduling
            decisions using real overlap windows and recommended meeting times.
          </p>
        </div>

        <div style={toolPanel}>
          <p style={sectionEyebrow}>Interactive Planning</p>

          <h2 style={toolTitle}>
            Use the planner after learning the basics.
          </h2>

          <p style={toolText}>
            Compare cities, review overlap windows, and find better meeting
            times using the interactive scheduling tool.
          </p>

          <a href="/how-it-works#schedule-tool" style={toolButton}>
            Open the Meeting Planner
          </a>
        </div>
      </section>

      <section style={bottomBand}>
        <div>
          <p style={bottomEyebrow}>Explore More</p>

          <h2 style={bottomTitle}>
            Continue learning about global time coordination
          </h2>

          <p style={bottomText}>
            Educational scheduling resources, world time guides, and interactive
            planning tools designed for global collaboration.
          </p>
        </div>

        <a href="/blog" style={bottomButton}>
          <span style={bottomButtonMain}>Read More Guides</span>
          <span style={bottomButtonSub}>Educational articles & resources</span>
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
  gridTemplateColumns: "1fr 0.95fr",
  gap: "22px",
  padding: "12px 10px 22px",
  alignItems: "center",
};

const heroLeft = {};

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
  color: "#111827",
  fontSize: "clamp(36px, 4.5vw, 54px)",
  lineHeight: "1.02",
  fontWeight: 950,
  letterSpacing: "-0.05em",
  margin: "0 0 14px",
};

const heroText = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.62",
  margin: "0 0 18px",
};

const heroFacts = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
};

const factBox = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "14px",
  padding: "14px",
  display: "grid",
  gap: "6px",
};

const heroMapPanel = {
  position: "relative" as const,
  overflow: "hidden",
  borderRadius: "20px",
  border: "1px solid #ddd6fe",
  background: "#faf9ff",
};

const heroMap = {
  width: "100%",
  height: "100%",
  objectFit: "cover" as const,
  display: "block",
};

const mapOverlay = {
  position: "absolute" as const,
  left: "18px",
  bottom: "18px",
  background: "rgba(17,24,39,0.82)",
  color: "#ffffff",
  padding: "10px 14px",
  borderRadius: "12px",
  fontSize: "14px",
};

const learningGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  padding: "0 10px 18px",
};

const learningCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  overflow: "hidden",
  boxShadow: "0 12px 28px rgba(91,33,182,0.08)",
};

const learningImage = {
  width: "100%",
  height: "180px",
  objectFit: "cover" as const,
  display: "block",
};

const learningBody = {
  padding: "18px",
};

const learningTag = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
};

const learningTitle = {
  fontSize: "28px",
  lineHeight: "1.08",
  fontWeight: 950,
  margin: "10px 0",
};

const learningText = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.6",
  marginBottom: "14px",
};

const readMore = {
  color: "#5b21b6",
  fontWeight: 900,
  textDecoration: "none",
  fontSize: "14px",
};

const infoSection = {
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: "18px",
  padding: "0 10px 18px",
};

const infoLeft = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "22px",
};

const infoRight = {
  display: "grid",
  gap: "14px",
};

const sectionEyebrow = {
  color: "#6d28d9",
  fontSize: "12px",
  fontWeight: 950,
  textTransform: "uppercase" as const,
  marginBottom: "8px",
};

const sectionTitle = {
  fontSize: "34px",
  lineHeight: "1.05",
  fontWeight: 950,
  margin: "0 0 12px",
};

const sectionText = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.65",
};

const factList = {
  display: "grid",
  gap: "12px",
  marginTop: "18px",
};

const factItem = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "14px",
  padding: "14px",
  display: "grid",
  gap: "5px",
};

const sideImage = {
  width: "100%",
  height: "300px",
  objectFit: "cover" as const,
  borderRadius: "18px",
  border: "1px solid #ddd6fe",
};

const quoteCard = {
  background: "#5b21b6",
  color: "#ffffff",
  borderRadius: "18px",
  padding: "20px",
};

const quoteText = {
  fontSize: "18px",
  lineHeight: "1.6",
  fontWeight: 700,
  margin: 0,
};

const educationSection = {
  display: "grid",
  gridTemplateColumns: "1.2fr 0.8fr",
  gap: "18px",
  padding: "0 10px 18px",
};

const educationCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "24px",
};

const educationText = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.68",
  marginBottom: "14px",
};

const toolPanel = {
  background: "#faf9ff",
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "24px",
};

const toolTitle = {
  fontSize: "30px",
  lineHeight: "1.05",
  fontWeight: 950,
  margin: "0 0 12px",
};

const toolText = {
  color: "#4b5563",
  fontSize: "15px",
  lineHeight: "1.65",
  marginBottom: "18px",
};

const toolButton = {
  display: "inline-block",
  background: "#facc15",
  color: "#111827",
  padding: "12px 18px",
  borderRadius: "999px",
  fontWeight: 950,
  textDecoration: "none",
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
};

const bottomTitle = {
  fontSize: "28px",
  lineHeight: "1.08",
  fontWeight: 950,
  margin: "6px 0",
};

const bottomText = {
  color: "rgba(255,255,255,0.88)",
  fontSize: "15px",
  lineHeight: "1.6",
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
  minWidth: "190px",
};

const bottomButtonMain = {
  fontSize: "14px",
  fontWeight: 950,
};

const bottomButtonSub = {
  fontSize: "11px",
  fontWeight: 700,
};
