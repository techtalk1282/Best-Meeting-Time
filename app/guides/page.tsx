// FILE: app/guides/page.tsx
// VERSION: v3.0
// PURPOSE: Premium educational Guides Hub redesign

export default function GuidesPage() {
  return (
    <main style={page}>
      {/* MAIN WRAPPER */}
      <div style={container}>
        
        {/* HERO */}
        <section style={heroSection}>
          <div style={heroLeft}>
            <div style={pill}>
              Global Time Guides & Resources
            </div>

            <h1 style={heroTitle}>
              Understand Time Zones. Connect Across the World.
            </h1>

            <p style={heroText}>
              Learn how time zones affect meetings, work, travel,
              entertainment, and daily life. Explore guides,
              cultural insights, and practical planning tips
              for a world that never stops.
            </p>

            <div style={statsRow}>
              <div style={statCard}>
                <div style={statNumber}>24</div>
                <div style={statText}>Primary time zones</div>
              </div>

              <div style={statCard}>
                <div style={statNumber}>195+</div>
                <div style={statText}>
                  Countries with different times
                </div>
              </div>

              <div style={statCard}>
                <div style={statNumber}>24/7</div>
                <div style={statText}>
                  The world never stops moving
                </div>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div style={heroImageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1600&auto=format&fit=crop"
              alt="Global time zones and worldwide communication"
              style={heroImage}
            />

            <div style={overlayCard}>
              <div style={timeBox}>
                <span style={timeValueNY}>9:00 AM</span>
                <span style={timeCity}>New York</span>
              </div>

              <div style={timeBox}>
                <span style={timeValueLondon}>2:00 PM</span>
                <span style={timeCity}>London</span>
              </div>

              <div style={timeBox}>
                <span style={timeValueTokyo}>11:00 PM</span>
                <span style={timeCity}>Tokyo</span>
              </div>

              <div style={timeBox}>
                <span style={timeValueSydney}>6:00 AM</span>
                <span style={timeCity}>Sydney</span>
              </div>
            </div>

            <div style={heroBottomBanner}>
              Different places. Different times. One connected world.
            </div>
          </div>
        </section>

        {/* SECTION TITLE */}
        <section style={guideIntroSection}>
          <div style={smallPill}>
            Explore Our Guides
          </div>

          <h2 style={sectionTitle}>
            Choose a Guide to Start Learning
          </h2>

          <p style={sectionText}>
            From time zone basics to cultural tips and entertainment timing,
            these guides help people understand the world and plan with confidence.
          </p>
        </section>

        {/* GUIDE GRID */}
        <section style={guideGrid}>

          {/* CARD 1 */}
          <a
            href="/guides/time-zone-basics"
            style={guideCard}
          >
            <img
              src="https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=1200&auto=format&fit=crop"
              alt="World map showing global time zones"
              style={cardImage}
            />

            <div style={cardBody}>
              <div style={cardNumberPurple}>1</div>

              <h3 style={cardTitle}>
                Time Zone Basics
              </h3>

              <ul style={bulletList}>
                <li>How many time zones are there?</li>
                <li>Why do time zones exist?</li>
                <li>Why do clocks change?</li>
              </ul>

              <div style={cardLink}>
                Read more on this guide →
              </div>
            </div>
          </a>

          {/* CARD 2 */}
          <a
            href="/guides/cultural-timing-guides"
            style={guideCard}
          >
            <img
              src="https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1200&auto=format&fit=crop"
              alt="Cultural scheduling and global communication"
              style={cardImage}
            />

            <div style={cardBody}>
              <div style={cardNumberGold}>2</div>

              <h3 style={cardTitle}>
                Cultural Timing Guides
              </h3>

              <ul style={bulletList}>
                <li>Best time to contact Japan</li>
                <li>Work hours around the world</li>
                <li>Weekend differences globally</li>
              </ul>

              <div style={cardLink}>
                Read more on this guide →
              </div>
            </div>
          </a>

          {/* CARD 3 */}
          <a
            href="/guides/entertainment-social-timing"
            style={guideCard}
          >
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
              alt="Gaming streams and global entertainment events"
              style={cardImage}
            />

            <div style={cardBody}>
              <div style={cardNumberGreen}>3</div>

              <h3 style={cardTitle}>
                Entertainment & Social Timing
              </h3>

              <ul style={bulletList}>
                <li>Best time for global gaming events</li>
                <li>Streaming across time zones</li>
                <li>International sports viewing times</li>
              </ul>

              <div style={cardLink}>
                Read more on this guide →
              </div>
            </div>
          </a>
        </section>

        {/* WHY IT MATTERS */}
        <section style={whySection}>
          <div style={smallPill}>
            Why Learning Matters
          </div>

          <h2 style={whyTitle}>
            Time zones affect more than just meetings.
          </h2>

          <div style={iconGrid}>
            <div style={iconItem}>
              <div style={emoji}>💼</div>
              <h4 style={iconHeading}>Work & Business</h4>
              <p style={iconText}>
                Plan fair meetings and respect work hours around the world.
              </p>
            </div>

            <div style={iconItem}>
              <div style={emoji}>✈️</div>
              <h4 style={iconHeading}>Travel & Lifestyle</h4>
              <p style={iconText}>
                Avoid missed flights, confusion, and scheduling surprises.
              </p>
            </div>

            <div style={iconItem}>
              <div style={emoji}>🎮</div>
              <h4 style={iconHeading}>Entertainment</h4>
              <p style={iconText}>
                Catch live events, streams, and games at the right time.
              </p>
            </div>

            <div style={iconItem}>
              <div style={emoji}>🌍</div>
              <h4 style={iconHeading}>Global Community</h4>
              <p style={iconText}>
                Join worldwide communities and online events more easily.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={ctaSection}>
          <div style={ctaLeft}>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="Laptop showing meeting planning"
              style={ctaImage}
            />
          </div>

          <div style={ctaCenter}>
            <h2 style={ctaTitle}>
              Ready to find the best time to connect?
            </h2>

            <p style={ctaText}>
              Use our planner to compare cities, find overlap windows,
              and schedule with confidence.
            </p>
          </div>

          <div style={ctaRight}>
            <a href="/" style={ctaButton}>
              Open the Meeting Planner
            </a>

            <div style={ctaSmallText}>
              Free to try — no sign-up
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

/* PAGE */

const page = {
  background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
  minHeight: "100vh",
  padding: "40px 20px",
};

const container = {
  maxWidth: "1180px",
  margin: "0 auto",
  background: "#ffffff",
  borderRadius: "24px",
  padding: "40px",
};

/* HERO */

const heroSection = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "40px",
  alignItems: "center",
  marginBottom: "80px",
};

const heroLeft = {};

const pill = {
  display: "inline-block",
  background: "#ede9fe",
  color: "#5b21b6",
  padding: "10px 18px",
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "14px",
  marginBottom: "24px",
};

const heroTitle = {
  fontSize: "72px",
  lineHeight: "0.95",
  fontWeight: 900,
  color: "#0f172a",
  marginBottom: "28px",
};

const heroText = {
  fontSize: "24px",
  lineHeight: "1.6",
  color: "#475569",
  marginBottom: "40px",
};

const statsRow = {
  display: "flex",
  gap: "18px",
};

const statCard = {
  flex: 1,
  border: "1px solid #ddd6fe",
  borderRadius: "18px",
  padding: "20px",
};

const statNumber = {
  fontSize: "34px",
  fontWeight: 900,
  color: "#4c1d95",
  marginBottom: "8px",
};

const statText = {
  color: "#475569",
  lineHeight: "1.5",
};

/* HERO IMAGE */

const heroImageWrapper = {
  position: "relative" as const,
  borderRadius: "28px",
  overflow: "hidden",
};

const heroImage = {
  width: "100%",
  height: "640px",
  objectFit: "cover" as const,
};

const overlayCard = {
  position: "absolute" as const,
  left: "30px",
  right: "30px",
  bottom: "110px",
  background: "#ffffff",
  borderRadius: "22px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  overflow: "hidden",
};

const timeBox = {
  padding: "24px",
  borderRight: "1px solid #e5e7eb",
};

const timeValueNY = {
  display: "block",
  fontSize: "34px",
  fontWeight: 900,
  color: "#f97316",
};

const timeValueLondon = {
  display: "block",
  fontSize: "34px",
  fontWeight: 900,
  color: "#7c3aed",
};

const timeValueTokyo = {
  display: "block",
  fontSize: "34px",
  fontWeight: 900,
  color: "#2563eb",
};

const timeValueSydney = {
  display: "block",
  fontSize: "34px",
  fontWeight: 900,
  color: "#16a34a",
};

const timeCity = {
  display: "block",
  marginTop: "8px",
  color: "#334155",
  fontSize: "18px",
};

const heroBottomBanner = {
  position: "absolute" as const,
  left: "30px",
  right: "30px",
  bottom: "30px",
  background: "rgba(76, 29, 149, 0.95)",
  color: "#ffffff",
  padding: "20px",
  borderRadius: "18px",
  fontWeight: 800,
  fontSize: "22px",
  textAlign: "center" as const,
};

/* INTRO */

const guideIntroSection = {
  textAlign: "center" as const,
  marginBottom: "50px",
};

const smallPill = {
  display: "inline-block",
  background: "#ede9fe",
  color: "#5b21b6",
  padding: "10px 18px",
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "14px",
  marginBottom: "20px",
};

const sectionTitle = {
  fontSize: "52px",
  fontWeight: 900,
  color: "#0f172a",
  marginBottom: "18px",
};

const sectionText = {
  maxWidth: "760px",
  margin: "0 auto",
  fontSize: "22px",
  lineHeight: "1.6",
  color: "#475569",
};

/* GUIDE GRID */

const guideGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "28px",
  marginBottom: "80px",
};

const guideCard = {
  background: "#ffffff",
  border: "1px solid #ddd6fe",
  borderRadius: "28px",
  overflow: "hidden",
  textDecoration: "none",
  boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
};

const cardImage = {
  width: "100%",
  height: "260px",
  objectFit: "cover" as const,
};

const cardBody = {
  padding: "28px",
};

const cardTitle = {
  fontSize: "38px",
  lineHeight: "1.15",
  fontWeight: 900,
  color: "#0f172a",
  marginBottom: "22px",
};

const bulletList = {
  color: "#334155",
  fontSize: "22px",
  lineHeight: "1.8",
  paddingLeft: "22px",
  marginBottom: "26px",
};

const cardLink = {
  color: "#5b21b6",
  fontWeight: 800,
  fontSize: "22px",
};

const cardNumberPurple = {
  width: "52px",
  height: "52px",
  borderRadius: "999px",
  background: "#7c3aed",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  marginBottom: "20px",
};

const cardNumberGold = {
  width: "52px",
  height: "52px",
  borderRadius: "999px",
  background: "#facc15",
  color: "#111827",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  marginBottom: "20px",
};

const cardNumberGreen = {
  width: "52px",
  height: "52px",
  borderRadius: "999px",
  background: "#22c55e",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  marginBottom: "20px",
};

/* WHY SECTION */

const whySection = {
  textAlign: "center" as const,
  marginBottom: "80px",
};

const whyTitle = {
  fontSize: "52px",
  fontWeight: 900,
  color: "#0f172a",
  marginBottom: "50px",
};

const iconGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "30px",
};

const iconItem = {};

const emoji = {
  fontSize: "48px",
  marginBottom: "14px",
};

const iconHeading = {
  fontSize: "28px",
  fontWeight: 800,
  color: "#111827",
  marginBottom: "12px",
};

const iconText = {
  fontSize: "18px",
  lineHeight: "1.6",
  color: "#475569",
};

/* CTA */

const ctaSection = {
  background: "linear-gradient(135deg, #312e81 0%, #6d28d9 100%)",
  borderRadius: "30px",
  padding: "40px",
  display: "grid",
  gridTemplateColumns: "260px 1fr 320px",
  gap: "30px",
  alignItems: "center",
};

const ctaLeft = {};

const ctaImage = {
  width: "100%",
  borderRadius: "18px",
};

const ctaCenter = {};

const ctaTitle = {
  fontSize: "48px",
  lineHeight: "1.1",
  color: "#ffffff",
  fontWeight: 900,
  marginBottom: "18px",
};

const ctaText = {
  fontSize: "22px",
  lineHeight: "1.6",
  color: "#e9d5ff",
};

const ctaRight = {
  textAlign: "center" as const,
};

const ctaButton = {
  display: "block",
  background: "#facc15",
  color: "#111827",
  padding: "24px",
  borderRadius: "18px",
  textDecoration: "none",
  fontWeight: 900,
  fontSize: "24px",
};

const ctaSmallText = {
  color: "#ffffff",
  marginTop: "16px",
  fontSize: "16px",
};
