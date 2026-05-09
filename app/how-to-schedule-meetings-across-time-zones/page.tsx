/**
 * File: app/how-to-schedule-meetings-across-time-zones/page.tsx
 * Version: v2.0 (PREMIUM GUIDES ECOSYSTEM MIGRATION)
 * Date: 2026-05-09
 *
 * PURPOSE:
 * - Fully migrate legacy article into premium Guides ecosystem
 * - Preserve SEO value and existing article topic
 * - Create visually rich educational experience
 * - Match integrated white-shell architecture used by Guides
 * - Strengthen AdSense-quality educational content
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 * - No premium logic changes
 *
 * ROLLBACK:
 * - Revert to v1.0 if needed
 */

export default function TimeZoneBasicsPage() {
  return (
    <main className="page-wrap">
      <section className="page-shell">
        <header className="header">
          <a href="/" className="brand">
            <span className="brand-icon">⌘</span>
            <span>Best Meeting Time</span>
          </a>

          <nav className="nav">
            <a href="/">Home</a>
            <a href="/how-it-works">How It Works</a>
            <a href="/features">Features</a>
            <a href="/guides" className="active">Guides</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          <a href="/how-it-works#schedule-tool" className="nav-cta">
            <span>Schedule a Meeting</span>
            <small>Free to try — no sign-up</small>
          </a>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <p className="pill">Time Zone Basics</p>

            <h1>
              How Time Zones Work — And Why the World Doesn’t Share One Clock
            </h1>

            <p className="hero-text">
              Learn why time zones exist, why clocks change, how daylight
              saving time works, and how global teams avoid scheduling chaos
              across cities, countries, and continents.
            </p>

            <div className="hero-stats">
              <div>
                <strong>24</strong>
                <span>Main world time zones</span>
              </div>

              <div>
                <strong>195+</strong>
                <span>Countries using different local times</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>The world is always awake somewhere</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/images/guides/guides-hero-world.png"
              alt="Global world map showing time zone connections"
            />

            <div className="hero-overlay" />

            <div className="time-row">
              <div>
                <strong>9:00 AM</strong>
                <span>New York</span>
              </div>

              <div>
                <strong>2:00 PM</strong>
                <span>London</span>
              </div>

              <div>
                <strong>11:00 PM</strong>
                <span>Tokyo</span>
              </div>

              <div>
                <strong>6:00 AM</strong>
                <span>Sydney</span>
              </div>
            </div>

            <div className="visual-caption">
              Different places. Different clocks. One connected world.
            </div>
          </div>
        </section>

        <section className="intro-section">
          <p className="section-pill">Understanding Global Time</p>

          <h2>
            Why Does The World Use Different Time Zones?
          </h2>

          <p>
            Time zones exist because the Earth rotates. As the planet turns,
            sunlight reaches different regions at different times. Without
            time zones, sunrise in one city could happen at midnight in
            another.
          </p>

          <p>
            Modern time zones help businesses, airlines, governments,
            travelers, and remote teams coordinate daily life using a shared
            system of local time.
          </p>
        </section>

        <section className="card-grid">
          <div className="info-card">
            <img
              src="/images/guides/guides-timezone-basics.png"
              alt="World map showing global time zones"
            />

            <div className="card-body">
              <h3>How Many Time Zones Are There?</h3>

              <p>
                The world is commonly divided into 24 major time zones,
                roughly matching the Earth’s 24-hour rotation cycle.
              </p>

              <p>
                In reality, some countries use partial-hour offsets, creating
                additional regional variations around the globe.
              </p>
            </div>
          </div>

          <div className="info-card">
            <img
              src="/images/guides/guides-cultural-timing.png"
              alt="Daylight and nighttime around the Earth"
            />

            <div className="card-body">
              <h3>Why Do Clocks Change?</h3>

              <p>
                Some countries use daylight saving time to shift daylight
                hours during different seasons of the year.
              </p>

              <p>
                This means meeting times can suddenly change between cities
                even if both locations normally share the same offset pattern.
              </p>
            </div>
          </div>
        </section>

        <section className="example-section">
          <div className="example-copy">
            <p className="section-pill">Real Scheduling Example</p>

            <h2>
              Why Scheduling Across Time Zones Gets Confusing
            </h2>

            <p>
              A meeting that feels perfectly normal in New York may happen
              late at night in Tokyo or before sunrise in Sydney.
            </p>

            <p>
              Global teams often struggle with:
            </p>

            <ul>
              <li>Daylight saving time changes</li>
              <li>Incorrect manual time conversions</li>
              <li>Weekend differences between countries</li>
              <li>Late-night recurring meetings</li>
              <li>Calendar invite confusion</li>
            </ul>
          </div>

          <div className="example-card">
            <div className="meeting-box">
              <h3>Example Meeting Window</h3>

              <div className="meeting-times">
                <div>
                  <strong>New York</strong>
                  <span>9:00 AM</span>
                </div>

                <div>
                  <strong>London</strong>
                  <span>2:00 PM</span>
                </div>

                <div>
                  <strong>Tokyo</strong>
                  <span>11:00 PM</span>
                </div>
              </div>

              <p>
                Notice how one reasonable workday meeting can become very late
                for another participant depending on location.
              </p>
            </div>
          </div>
        </section>

        <section className="mistakes-section">
          <p className="section-pill">Common Mistakes</p>

          <h2>
            Scheduling Problems That Cause Global Meeting Frustration
          </h2>

          <div className="mistakes-grid">
            <div className="mistake-card">
              <h3>Ignoring Daylight Saving Time</h3>
              <p>
                Offsets change seasonally in many countries, creating hidden
                scheduling problems.
              </p>
            </div>

            <div className="mistake-card">
              <h3>Using Time Zone Abbreviations</h3>
              <p>
                EST, CST, and GMT can create confusion. Cities are usually
                more reliable than abbreviations.
              </p>
            </div>

            <div className="mistake-card">
              <h3>Scheduling Around One Country Only</h3>
              <p>
                Fair global scheduling means balancing inconvenience across
                teams instead of forcing one region into late-night meetings.
              </p>
            </div>
          </div>
        </section>

        <section className="planner-section">
          <div className="planner-content">
            <p className="section-pill gold-pill">
              Better Global Scheduling
            </p>

            <h2>
              Stop Guessing Meeting Times Across Countries
            </h2>

            <p>
              Compare cities instantly, view overlap windows, and find better
              meeting times without manually converting time zones.
            </p>
          </div>

          <a
            href="/how-it-works#schedule-tool"
            className="planner-button"
          >
            <span>Open the Meeting Planner</span>
            <small>Free to try — no sign-up</small>
          </a>
        </section>
      </section>

      <style>{`
        .page-wrap {
          min-height: 100vh;
          background: linear-gradient(180deg, #4c1d95 0%, #312e81 100%);
          padding: 30px 20px 70px;
        }

        .page-shell {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          background: #ffffff;
          border: 1px solid rgba(237,233,254,0.9);
          box-shadow: 0 24px 70px rgba(30,27,75,0.18);
          padding: 18px 18px 42px;
        }

        .header {
          min-height: 66px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border-bottom: 1px solid #ede9fe;
          margin-bottom: 24px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #5b21b6;
          font-size: 18px;
          font-weight: 900;
          text-decoration: none;
          white-space: nowrap;
        }

        .brand-icon {
          width: 24px;
          height: 24px;
          border-radius: 7px;
          background: #ede9fe;
          color: #5b21b6;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
        }

        .nav a {
          color: #374151;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav .active {
          color: #5b21b6;
          border-bottom: 2px solid #5b21b6;
          padding-bottom: 6px;
        }

        .nav-cta {
          background: #5b21b6;
          color: #ffffff;
          padding: 9px 16px;
          border-radius: 8px;
          font-weight: 900;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.16;
          min-width: 154px;
          box-shadow: 0 10px 22px rgba(91,33,182,0.22);
        }

        .nav-cta span {
          font-size: 13px;
        }

        .nav-cta small {
          font-size: 10px;
          font-weight: 800;
        }

        .hero {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 38px;
          align-items: center;
          padding: 20px 8px 42px;
        }

        .pill,
        .section-pill {
          display: inline-block;
          padding: 7px 13px;
          border-radius: 999px;
          background: #f3efff;
          color: #5b21b6;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
        }

        .hero h1,
        .intro-section h2,
        .example-copy h2,
        .mistakes-section h2,
        .planner-content h2 {
          color: #111827;
          font-size: clamp(38px, 4vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.05em;
          font-weight: 950;
          margin: 16px 0;
        }

        .hero-text,
        .intro-section p,
        .example-copy p,
        .planner-content p {
          color: #4b5563;
          font-size: 16px;
          line-height: 1.7;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 28px;
        }

        .hero-stats div {
          border-right: 1px solid #ddd6fe;
          padding-right: 12px;
        }

        .hero-stats strong {
          display: block;
          color: #5b21b6;
          font-size: 28px;
          font-weight: 950;
          margin-bottom: 6px;
        }

        .hero-stats span {
          color: #111827;
          font-size: 13px;
          font-weight: 800;
          line-height: 1.4;
        }

        .hero-visual {
          position: relative;
          min-height: 520px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 28px 60px rgba(30,27,75,0.24);
        }

        .hero-visual img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(17,24,39,0.72), transparent 40%);
        }

        .time-row {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 82px;
          background: #ffffff;
          border-radius: 14px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          overflow: hidden;
          z-index: 2;
        }

        .time-row div {
          padding: 14px;
          border-right: 1px solid #ede9fe;
        }

        .time-row strong {
          display: block;
          font-size: 18px;
          font-weight: 950;
          color: #5b21b6;
          margin-bottom: 4px;
        }

        .time-row span {
          color: #111827;
          font-size: 13px;
          font-weight: 800;
        }

        .visual-caption {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 22px;
          background: rgba(76,29,149,0.95);
          color: #ffffff;
          padding: 14px;
          border-radius: 12px;
          text-align: center;
          font-weight: 900;
          z-index: 2;
        }

        .intro-section,
        .mistakes-section {
          padding: 24px 10px 12px;
        }

        .intro-section h2,
        .example-copy h2,
        .mistakes-section h2,
        .planner-content h2 {
          font-size: clamp(30px, 3vw, 42px);
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          padding: 22px 10px 34px;
        }

        .info-card {
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #ddd6fe;
          box-shadow: 0 18px 36px rgba(91,33,182,0.10);
        }

        .info-card img {
          width: 100%;
          height: 240px;
          object-fit: cover;
        }

        .card-body {
          padding: 24px;
        }

        .card-body h3,
        .meeting-box h3,
        .mistake-card h3 {
          color: #111827;
          font-size: 28px;
          line-height: 1.1;
          font-weight: 950;
          margin: 0 0 14px;
        }

        .card-body p,
        .meeting-box p,
        .mistake-card p {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.7;
        }

        .example-section {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
          align-items: center;
          padding: 10px 10px 40px;
        }

        .example-copy ul {
          color: #374151;
          font-size: 15px;
          line-height: 1.7;
          padding-left: 20px;
        }

        .meeting-box {
          background: linear-gradient(180deg, #ffffff 0%, #f8f5ff 100%);
          border: 1px solid #ddd6fe;
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 18px 38px rgba(91,33,182,0.10);
        }

        .meeting-times {
          display: grid;
          gap: 14px;
          margin: 24px 0;
        }

        .meeting-times div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          border: 1px solid #ede9fe;
          border-radius: 12px;
          padding: 14px 16px;
        }

        .meeting-times strong {
          color: #111827;
          font-size: 16px;
          font-weight: 900;
        }

        .meeting-times span {
          color: #5b21b6;
          font-size: 18px;
          font-weight: 950;
        }

        .mistakes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 24px;
        }

        .mistake-card {
          background: linear-gradient(180deg, #ffffff 0%, #faf7ff 100%);
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 16px 34px rgba(91,33,182,0.08);
        }

        .planner-section {
          margin-top: 36px;
          border-radius: 20px;
          background: linear-gradient(135deg, #312e81 0%, #6d28d9 100%);
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .gold-pill {
          background: rgba(250,204,21,0.16);
          color: #facc15;
        }

        .planner-content h2,
        .planner-content p {
          color: #ffffff;
        }

        .planner-button {
          background: #facc15;
          color: #111827;
          padding: 16px 18px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 950;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.15;
          min-width: 220px;
          box-shadow: 0 12px 24px rgba(250,204,21,0.24);
        }

        .planner-button small {
          font-size: 11px;
          font-weight: 800;
        }

        @media (max-width: 900px) {
          .header,
          .hero,
          .example-section,
          .planner-section {
            grid-template-columns: 1fr;
            flex-direction: column;
          }

          .nav {
            flex-wrap: wrap;
          }

          .card-grid,
          .mistakes-grid {
            grid-template-columns: 1fr;
          }

          .time-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .page-wrap {
            padding: 16px 10px 50px;
          }

          .page-shell {
            padding: 14px;
          }

          .hero h1 {
            font-size: 38px;
          }

          .hero-stats {
            grid-template-columns: 1fr;
          }

          .time-row {
            bottom: 92px;
          }

          .hero-visual {
            min-height: 420px;
          }
        }
      `}</style>
    </main>
  );
}
