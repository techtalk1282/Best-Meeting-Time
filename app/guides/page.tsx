// FILE: app/guides/page.tsx
// VERSION: v3.0
// PURPOSE: Premium educational Guides hub with visual SEO-driven layout
// ROLLBACK: Restore previous guides/page.tsx if needed

export default function GuidesPage() {
  return (
    <main style={page}>
      <div style={shell}>
        {/* HERO */}
        <section style={heroSection}>
          <div style={heroLeft}>
            <div style={eyebrow}>
              GLOBAL TIME GUIDES & RESOURCES
            </div>

            <h1 style={heroTitle}>
              Understand Time
              <br />
              Zones. Connect
              <br />
              Across the World.
            </h1>

            <p style={heroText}>
              Learn how time zones affect meetings, work, travel,
              entertainment, and daily life. Explore guides,
              cultural insights, and practical planning tips for
              a world that never stops.
            </p>

            <div style={statsRow}>
              <div style={statCard}>
                <div style={statNumber}>24</div>
                <div style={statLabel}>Primary time zones</div>
              </div>

              <div style={statCard}>
                <div style={statNumber}>195+</div>
                <div style={statLabel}>
                  Countries with local schedules
                </div>
              </div>

              <div style={statCard}>
                <div style={statNumber}>24/7</div>
                <div style={statLabel}>
                  The world never stops moving
                </div>
              </div>
            </div>
          </div>

          <div style={heroRight}>
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=1400&auto=format&fit=crop"
              alt="Global connected world"
              style={heroImage}
            />

            <div style={heroTimePanel}>
              <div style={timeBox}>
                <div style={timeValueOrange}>9:00 AM</div>
                <div style={timeCity}>New York</div>
              </div>

              <div style={timeBox}>
                <div style={timeValuePurple}>2:00 PM</div>
                <div style={timeCity}>London</div>
              </div>

              <div style={timeBox}>
                <div style={timeValueBlue}>11:00 PM</div>
                <div style={timeCity}>Tokyo</div>
              </div>

              <div style={timeBox}>
                <div style={timeValueGreen}>6:00 AM</div>
                <div style={timeCity}>Sydney</div>
              </div>
            </div>

            <div style={heroBottom}>
              Different places. Different times. One connected world.
            </div>
          </div>
        </section>

        {/* SECTION TITLE */}
        <section style={guidesHeader}>
          <div style={eyebrowCentered}>EXPLORE OUR GUIDES</div>

          <h2 style={sectionTitle}>
            Choose a Guide to Start Learning
          </h2>

          <p style={sectionText}>
            From time zone basics to cultural tips and entertainment timing,
            these guides help you understand the world and plan with confidence.
          </p>
        </section>

        {/* GUIDE CARDS */}
        <section style={cardsGrid}>
          {/* CARD 1 */}
          <div style={guideCard}>
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&auto=format&fit=crop"
              alt="Time zone basics"
              style={cardImage}
            />

            <div style={cardBody}>
              <div style={purpleCircle}>1</div>

              <h3 style={cardTitle}>Time Zone Basics</h3>

              <ul style={bulletList}>
                <li>How many time zones are there?</li>
                <li>Why do time zones exist?</li>
                <li>Why do clocks change?</li>
              </ul>

              <a
                href="/how-to-schedule-meetings-across-time-zones"
                style={cardLink}
              >
                Read more on this guide →
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div style={guideCard}>
            <img
              src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1200&auto=format&fit=crop"
              alt="Cultural timing"
              style={cardImage}
            />

            <div style={cardBody}>
              <div style={goldCircle}>2</div>

              <h3 style={cardTitle}>Cultural Timing Guides</h3>

              <ul style={bulletList}>
                <li>Best time to contact Japan</li>
                <li>Work hours around the world</li>
                <li>Weekend differences globally</li>
              </ul>

              <a
                href="/best-meeting-times-remote-teams"
                style={cardLink}
              >
                Read more on this guide →
              </a>
            </div>
          </div>

          {/* CARD 3 */}
          <div style={guideCard}>
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
              alt="Entertainment timing"
              style={cardImage}
            />

            <div style={cardBody}>
              <div style={greenCircle}>3</div>

              <h3 style={cardTitle}>
                Entertainment & Social Timing
              </h3>

              <ul style={bulletList}>
                <li>Best time for global gaming events</li>
                <li>Streaming across time zones</li>
                <li>International sports viewing times</li>
              </ul>

              <a
                href="/time-zone-meeting-planner-guide"
                style={cardLink}
              >
                Read more on this guide →
              </a>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section style={whySection}>
          <div style={eyebrowCentered}>WHY LEARNING MATTERS</div>

          <h2 style={whyTitle}>
            Time zones affect more than just meetings.
          </h2>

          <div style={whyGrid}>
            <div style={whyCard}>
              <div style={whyIcon}>💼</div>
              <h4 style={whyHeading}>Work & Business</h4>
              <p style={whyText}>
                Plan fair meetings and respect work hours around the world.
              </p>
            </div>

            <div style={whyCard}>
              <div style={whyIcon}>✈️</div>
              <h4 style={whyHeading}>Travel & Lifestyle</h4>
              <p style={whyText}>
                Avoid missed flights, confusion, and scheduling surprises.
              </p>
            </div>

            <div style={whyCard}>
              <div style={whyIcon}>🎮</div>
              <h4 style={whyHeading}>Entertainment</h4>
              <p style={whyText}>
                Catch live events, streams, and games at the right time.
              </p>
            </div>

            <div style={whyCard}>
              <div style={whyIcon}>🌎</div>
              <h4 style={whyHeading}>Global Community</h4>
              <p style={whyText}>
                Join online communities and events happening worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={ctaSection}>
          <div style={ctaLeft}>
            <h2 style={ctaTitle}>
              Ready to find the best time to connect?
            </h2>

            <p style={ctaText}>
              Use our planner to compare cities, find overlap windows,
              and schedule with confidence.
            </p>
          </div>

          <a href="/" style={ctaButton}>
            Open the Meeting Planner
          </a>
        </section>
      </div>
    </main>
  );
}

const page = {
  background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
  minHeight: "100vh",
  padding: "30px 20px 80px",
};

const shell = {
  maxWidth: "1180px",
  margin: "0 auto",
  background: "#ffffff",
  borderRadius: "24px",
  padding: "40px",
};

const heroSection = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "40px",
  alignItems: "center",
};

const heroLeft = {};

const heroRight = {
  position: "relative" as const,
};

const eyebrow = {
  display: "inline-block",
  background: "#ede9fe",
  color: "#5b21b6",
  padding: "10px 16px",
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "13px",
  marginBottom: "20px",
};

const heroTitle = {
  fontSize: "72px",
  lineHeight: "0.95",
  fontWeight: 900,
  color: "#0f172a",
  marginBottom: "24px",
};

const heroText = {
  fontSize: "22px",
  lineHeight: "1.7",
  color: "#475569",
  maxWidth: "620px",
};

const heroImage = {
  width: "100%",
  height: "620px",
  objectFit: "cover" as const,
  borderRadius: "28px",
};

const heroTimePanel = {
  position: "absolute" as const,
  left: "24px",
  right: "24px",
  bottom: "96px",
  background: "#ffffff",
  borderRadius: "24px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  padding: "18px",
  gap: "12px",
};

const timeBox = {
  textAlign: "center" as const,
};

const timeValueOrange = {
  color: "#f97316",
  fontWeight: 800,
  fontSize: "26px",
};

const timeValuePurple = {
  color: "#7c3aed",
  fontWeight: 800,
  fontSize: "26px",
};

const timeValueBlue = {
  color: "#2563eb",
  fontWeight: 800,
  fontSize: "26px",
};

const timeValueGreen = {
  color: "#16a34a",
  fontWeight: 800,
  fontSize: "26px",
};

const timeCity = {
  color: "#334155",
  marginTop: "6px",
  fontSize: "16px",
};

const heroBottom = {
  position: "absolute" as const,
  left: "24px",
  right: "24px",
  bottom: "24px",
  background: "#5b21b6",
  color: "white",
  textAlign: "center" as const,
  padding: "18px",
  borderRadius: "18px",
  fontWeight: 700,
  fontSize: "18px",
};

const statsRow = {
  display: "flex",
  gap: "18px",
  marginTop: "34px",
};

const statCard = {
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "20px",
  minWidth: "160px",
};

const statNumber = {
  fontSize: "42px",
  fontWeight: 900,
  color: "#5b21b6",
};

const statLabel = {
  color: "#475569",
  marginTop: "8px",
  lineHeight: "1.5",
};

const guidesHeader = {
  textAlign: "center" as const,
  marginTop: "90px",
  marginBottom: "50px",
};

const eyebrowCentered = {
  display: "inline-block",
  background: "#ede9fe",
  color: "#5b21b6",
  padding: "10px 16px",
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "13px",
  marginBottom: "20px",
};

const sectionTitle = {
  fontSize: "56px",
  fontWeight: 900,
  color: "#0f172a",
  marginBottom: "18px",
};

const sectionText = {
  fontSize: "22px",
  color: "#475569",
  maxWidth: "780px",
  margin: "0 auto",
  lineHeight: "1.7",
};

const cardsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "30px",
};

const guideCard = {
  border: "1px solid #ddd6fe",
  borderRadius: "24px",
  overflow: "hidden",
  background: "#ffffff",
};

const cardImage = {
  width: "100%",
  height: "260px",
  objectFit: "cover" as const,
};

const cardBody = {
  padding: "28px",
};

const purpleCircle = {
  width: "52px",
  height: "52px",
  borderRadius: "999px",
  background: "#7c3aed",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 800,
  marginBottom: "20px",
};

const goldCircle = {
  ...purpleCircle,
  background: "#facc15",
  color: "#111827",
};

const greenCircle = {
  ...purpleCircle,
  background: "#22c55e",
};

const cardTitle = {
  fontSize: "42px",
  lineHeight: "1.05",
  fontWeight: 900,
  color: "#0f172a",
  marginBottom: "22px",
};

const bulletList = {
  paddingLeft: "24px",
  color: "#334155",
  lineHeight: "2",
  fontSize: "20px",
  marginBottom: "24px",
};

const cardLink = {
  color: "#5b21b6",
  textDecoration: "none",
  fontWeight: 800,
  fontSize: "18px",
};

const whySection = {
  marginTop: "90px",
  textAlign: "center" as const,
};

const whyTitle = {
  fontSize: "52px",
  fontWeight: 900,
  color: "#0f172a",
  marginBottom: "40px",
};

const whyGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "24px",
};

const whyCard = {
  border: "1px solid #e2e8f0",
  borderRadius: "20px",
  padding: "28px",
};

const whyIcon = {
  fontSize: "42px",
  marginBottom: "16px",
};

const whyHeading = {
  fontSize: "24px",
  fontWeight: 800,
  color: "#0f172a",
  marginBottom: "12px",
};

const whyText = {
  color: "#475569",
  lineHeight: "1.7",
  fontSize: "17px",
};

const ctaSection = {
  marginTop: "90px",
  background: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)",
  borderRadius: "28px",
  padding: "48px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "40px",
};

const ctaLeft = {
  maxWidth: "700px",
};

const ctaTitle = {
  fontSize: "48px",
  lineHeight: "1.1",
  color: "white",
  fontWeight: 900,
  marginBottom: "16px",
};

const ctaText = {
  color: "#ede9fe",
  lineHeight: "1.7",
  fontSize: "20px",
};

const ctaButton = {
  background: "#facc15",
  color: "#111827",
  padding: "20px 34px",
  borderRadius: "18px",
  textDecoration: "none",
  fontWeight: 900,
  fontSize: "18px",
  whiteSpace: "nowrap" as const,
};
