/**
 * File: app/guides/page.tsx
 * Version: v3.5 (ADD COUNTRY CONTACT TIMING GUIDE CARD)
 * Date: 2026-05-13
 *
 * PURPOSE:
 * - Add the new Best Times to Contact Different Countries authority page to the Guides hub
 * - Convert the guide card layout from 3 cards to a balanced 2 x 2 premium grid
 * - Preserve the existing hero, CTA, visual style, navigation, and responsive behavior
 * - Improve internal linking and AdSense crawl depth without disrupting protected logic
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to app/guides/page.tsx v3.4 if this update does not test cleanly
 */

export default function GuidesPage() {
  return (
    <main className="guides-page">
      <section className="guides-shell">
        <header className="guides-header">
          <a href="/" className="brand" aria-label="Best Meeting Time home">
            <img
              src="/images/branding/logo.png"
              alt="Best Meeting Time"
              className="brand-logo"
            />
          </a>

          <nav className="nav" aria-label="Guides navigation">
            <a href="/">Home</a>
            <a href="/how-it-works">Schedule a Meeting</a>
            <a href="/features">Features</a>
            <a href="/guides" className="active">Guides</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="header-actions">
  <div className="social-links" aria-label="Best Meeting Time social links">
    <a
      href="https://youtube.com/shorts/gvC3O4W8NBI?feature=share"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Watch Best Meeting Time on YouTube"
      className="social-link youtube-link"
    >
      ▶
    </a>

    <a
      href="https://www.facebook.com/profile.php?id=61590738985034"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Best Meeting Time on Facebook"
      className="social-link facebook-link"
    >
      f
    </a>
  </div>

  <a href="/how-it-works#schedule-tool" className="nav-cta">
    <span>Schedule a Meeting</span>
    <small>Free to try — no sign-up</small>
  </a>
</div>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <p className="pill">Global Time Guides & Resources</p>

            <h1>Understand Time Zones. Connect Across the World.</h1>

            <p className="hero-text">
              Learn how time zones affect meetings, work, travel,
              entertainment, and daily life. Explore guides, cultural insights,
              and practical planning tips for a world that never stops.
            </p>

            <div className="stats">
              <div>
                <strong>24</strong>
                <span>Primary time zones</span>
              </div>

              <div>
                <strong>195+</strong>
                <span>Countries with different times</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>The world never stops moving</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/images/guides/guides-hero-world.png"
              alt="Glowing earth showing global connection across time zones"
            />

            <div className="hero-glow" />
            <span className="pin pin-one" />
            <span className="pin pin-two" />
            <span className="pin pin-three" />
            <span className="pin pin-four" />
            <span className="line line-one" />
            <span className="line line-two" />
            <span className="line line-three" />
          </div>
        </section>

        <section className="guide-intro">
  <p className="pill">Explore Our Guides</p>

  <h2>Choose a Guide to Start Learning</h2>

  <p>
    From time zone basics to cultural tips and entertainment timing,
    these guides help you understand the world and plan with confidence.
  </p>
</section>

<section className="playbook-feature">
  <div className="playbook-copy">
    <p className="pill">Start Here</p>

    <h2>Global Meeting Scheduling Playbook</h2>

    <p>
      Learn how international teams coordinate meetings across time zones,
      understand work-hour overlap windows, avoid daylight-saving confusion,
      and schedule global meetings with greater confidence.
    </p>

    <a
      href="/global-meeting-scheduling-playbook"
      className="playbook-button"
    >
      Read the Complete Playbook
    </a>
  </div>
</section>

<section className="guide-grid">
          <a
            href="/how-to-schedule-meetings-across-time-zones"
            className="guide-card guide-blue"
          >
            <img
              src="/images/guides/guides-timezone-basics.png"
              alt="Blue world map for learning time zone basics"
            />

            <div className="guide-body">
              <h3>Time Zone Basics</h3>

              <ul>
                <li>How many time zones are there?</li>
                <li>Why do time zones exist?</li>
                <li>Why do clocks change?</li>
              </ul>

              <strong>Read more on this guide →</strong>
            </div>
          </a>

          <a href="/guides/cultural-timing" className="guide-card guide-gold">
            <img
              src="/images/guides/guides-cultural-timing.png"
              alt="Japan and cultural timing guide"
            />

            <div className="guide-body">
              <h3>Cultural Timing Guides</h3>

              <ul>
                <li>Best time to contact Japan</li>
                <li>Work hours around the world</li>
                <li>Weekend differences globally</li>
              </ul>

              <strong>Read more on this guide →</strong>
            </div>
          </a>

          <a
            href="/best-times-to-contact-different-countries"
            className="guide-card guide-purple"
          >
            <img
              src="/images/guides/guides-hero-world.png"
              alt="Best times to contact different countries around the world"
            />

            <div className="guide-body">
              <h3>Best Times to Contact Different Countries</h3>

              <ul>
                <li>Best hours to contact Japan, the UK, Australia, and more</li>
                <li>Understand global workday overlap windows</li>
                <li>Avoid contacting regions during off-hours</li>
              </ul>

              <strong>Read more on this guide →</strong>
            </div>
          </a>

          <a
            href="/guides/entertainment-social-timing"
            className="guide-card guide-green"
          >
            <img
              src="/images/guides/guides-entertainment-social.png"
              alt="Entertainment timing for gaming and live events"
            />

            <div className="guide-body">
              <h3>Entertainment & Social Timing</h3>

              <ul>
                <li>Best time for global gaming events</li>
                <li>Streaming across time zones</li>
                <li>International sports viewing times</li>
              </ul>

              <strong>Read more on this guide →</strong>
            </div>
          </a>
        </section>

        <section className="why">
          <p className="pill">Why Learning Matters</p>

          <h2>Time zones affect more than just meetings.</h2>

          <div className="why-grid">
            <div>
              <span className="why-icon">Work</span>
              <strong>Work & Business</strong>
              <p>Plan fair meetings and respect work hours around the world.</p>
            </div>

            <div>
              <span className="why-icon">Travel</span>
              <strong>Travel & Lifestyle</strong>
              <p>Avoid missed flights, confusion, and scheduling surprises.</p>
            </div>

            <div>
              <span className="why-icon">Family</span>
              <strong>Family & Friends</strong>
              <p>Stay connected with loved ones across different time zones.</p>
            </div>

            <div>
              <span className="why-icon">Play</span>
              <strong>Entertainment</strong>
              <p>Catch live events, streams, and games at the right time.</p>
            </div>

            <div>
              <span className="why-icon">World</span>
              <strong>Global Community</strong>
              <p>Join online communities and events happening worldwide.</p>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="planner-card">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop"
              alt="Laptop showing meeting planning workflow"
            />
          </div>

          <div>
            <h2>Ready to find the best time to connect?</h2>

            <p>
              Use our planner to compare cities, find overlap windows, and
              schedule with confidence.
            </p>
          </div>

          <a href="/how-it-works#schedule-tool">
            <span>Open the Meeting Planner</span>
            <small>Free to try — no sign-up</small>
          </a>
        </section>

        <footer className="guides-footer">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/cookie-policy">Cookie Policy</a>
          <a href="/contact">Contact</a>
        </footer>
      </section>

      <style>{`
        .guides-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #4c1d95 0%, #312e81 100%);
          padding: 30px 20px 70px;
        }

        .guides-shell {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          background: #ffffff;
          color: #111827;
          border: 1px solid rgba(237,233,254,0.9);
          box-shadow: 0 24px 70px rgba(30,27,75,0.18);
          padding: 18px 18px 28px;
        }

        .guides-header {
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
          text-decoration: none;
          flex-shrink: 0;
        }

        .brand-logo {
          display: block;
          width: 160px;
          height: auto;
          object-fit: contain;
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

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.social-link {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 950;
  box-shadow: 0 8px 18px rgba(30,27,75,0.16);
}

.youtube-link {
  background: #dc2626;
}

.facebook-link {
  background: #2563eb;
  font-family: Arial, sans-serif;
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
          color: #ffffff;
        }

        .hero {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 38px;
          align-items: center;
          padding: 22px 10px 34px;
        }

        .pill {
          display: inline-block;
          margin: 0 0 14px;
          padding: 7px 13px;
          border-radius: 999px;
          background: #f3efff;
          color: #5b21b6;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
        }

        .hero h1 {
          font-size: clamp(42px, 5vw, 62px);
          line-height: 1.02;
          letter-spacing: -0.05em;
          font-weight: 950;
          color: #111827;
          margin: 0 0 16px;
        }

        .hero-text {
          color: #4b5563;
          font-size: 16px;
          line-height: 1.65;
          margin: 0 0 24px;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .stats div {
          border-right: 1px solid #ddd6fe;
          padding-right: 12px;
          display: grid;
          gap: 5px;
        }

        .stats strong {
          color: #5b21b6;
          font-size: 25px;
          font-weight: 950;
        }

        .stats span {
          color: #111827;
          font-size: 12px;
          font-weight: 800;
          line-height: 1.35;
        }

        .hero-visual {
          position: relative;
          min-height: clamp(390px, 41vw, 465px);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 28px 62px rgba(30,27,75,0.26);
          background: #0f172a;
        }

        .hero-visual img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          object-position: center center;
          filter: saturate(1.08) contrast(1.02) brightness(1);
        }

        .hero-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 14% 18%, rgba(250,204,21,0.72), transparent 31%),
            radial-gradient(circle at 72% 28%, rgba(59,130,246,0.34), transparent 34%),
            linear-gradient(90deg, rgba(251,191,36,0.16), rgba(15,23,42,0.12) 45%, rgba(15,23,42,0.25));
          z-index: 1;
        }

        .pin {
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 999px;
          box-shadow: 0 0 0 7px rgba(255,255,255,0.24);
          z-index: 2;
        }

        .pin-one { left: 25%; top: 34%; background: #8b5cf6; }
        .pin-two { left: 63%; top: 23%; background: #facc15; }
        .pin-three { right: 20%; top: 43%; background: #fb7185; }
        .pin-four { right: 14%; bottom: 32%; background: #22c55e; }

        .line {
          position: absolute;
          border-top: 2px dashed rgba(250,204,21,0.9);
          z-index: 2;
        }

        .line-one { left: 28%; top: 43%; width: 52%; transform: rotate(-13deg); }
        .line-two { left: 29%; top: 51%; width: 58%; transform: rotate(20deg); }
        .line-three { left: 47%; top: 34%; width: 35%; transform: rotate(32deg); }

        .time-panel {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 86px;
          background: #ffffff;
          border-radius: 14px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          overflow: hidden;
          z-index: 3;
          box-shadow: 0 18px 40px rgba(15,23,42,0.2);
        }

        .time-panel div {
          padding: 14px;
          display: grid;
          gap: 5px;
          border-right: 1px solid #ede9fe;
        }

        .time-panel div:nth-child(1) strong { color: #f97316; }
        .time-panel div:nth-child(2) strong { color: #6d28d9; }
        .time-panel div:nth-child(3) strong { color: #2563eb; }
        .time-panel div:nth-child(4) strong { color: #16a34a; }

        .time-panel strong { font-size: 17px; font-weight: 950; }
        .time-panel span { font-size: 13px; color: #111827; }

        .hero-caption {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 24px;
          background: rgba(76,29,149,0.94);
          color: #ffffff;
          padding: 13px 16px;
          border-radius: 14px;
          text-align: center;
          font-weight: 950;
          z-index: 3;
        }

        .guide-intro {
          text-align: center;
          padding: 18px 10px 24px;
        }

        .guide-intro h2,
        .why h2 {
          color: #111827;
          font-size: clamp(30px, 3vw, 40px);
          line-height: 1.08;
          font-weight: 950;
          letter-spacing: -0.035em;
          margin: 0 0 10px;
        }

        .guide-intro p:last-child {
          max-width: 680px;
          margin: 0 auto;
          color: #4b5563;
          font-size: 15px;
          line-height: 1.55;
        }

        .playbook-feature {
  margin: 0 10px 28px;
  padding: 32px;
  border-radius: 18px;
  background: linear-gradient(
    135deg,
    #312e81 0%,
    #5b21b6 100%
  );
  color: #ffffff;
  text-align: center;
  box-shadow: 0 20px 48px rgba(49,46,129,0.22);
}

.playbook-copy {
  max-width: 760px;
  margin: 0 auto;
}

.playbook-feature h2 {
  color: #ffffff;
  font-size: clamp(32px, 4vw, 46px);
  line-height: 1.08;
  font-weight: 950;
  letter-spacing: -0.03em;
  margin: 0 0 12px;
}

.playbook-feature p:last-of-type {
  color: #ede9fe;
  font-size: 16px;
  line-height: 1.7;
  margin: 0 auto 22px;
}

.playbook-button {
  display: inline-block;
  background: #facc15;
  color: #111827;
  padding: 14px 24px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 950;
  font-size: 14px;
  box-shadow: 0 12px 24px rgba(250,204,21,0.24);
}

        .guide-card {
          background: #ffffff;
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          overflow: hidden;
          text-decoration: none;
          color: #111827;
          box-shadow: 0 16px 36px rgba(91,33,182,0.10);
        }

        .guide-card img {
          width: 100%;
          height: 198px;
          object-fit: cover;
          display: block;
          filter: saturate(1.16) contrast(1.04) brightness(1.04);
        }

        .guide-blue img {
          object-position: center center;
          filter: saturate(1.28) contrast(1.08) brightness(1.08);
        }

        .guide-gold img {
          object-position: center center;
        }

        .guide-purple img {
          object-position: center center;
          filter: saturate(1.2) contrast(1.08) brightness(1.04);
        }

        .guide-green img {
          object-position: center center;
        }

        .guide-blue {
          background: linear-gradient(180deg, #ffffff 0%, #f7f5ff 100%);
        }

        .guide-gold {
          background: linear-gradient(180deg, #ffffff 0%, #fff7df 100%);
        }

        .guide-purple {
          background: linear-gradient(180deg, #ffffff 0%, #f5f3ff 100%);
        }

        .guide-green {
          background: linear-gradient(180deg, #ffffff 0%, #ecfdf5 100%);
        }

        .guide-body {
          padding: 20px 22px 21px;
        }

        .guide-card h3 {
          color: #111827 !important;
          font-size: 25px;
          line-height: 1.12;
          letter-spacing: -0.02em;
          font-weight: 950;
          margin: 0 0 12px;
        }

        .guide-card ul {
          color: #374151;
          font-size: 15px;
          line-height: 1.56;
          padding-left: 18px;
          margin: 0 0 16px;
        }

        .guide-card strong:last-child {
          color: #5b21b6;
          font-size: 15px;
          font-weight: 950;
        }

        .why {
          border-top: 1px solid #ede9fe;
          text-align: center;
          padding: 26px 10px 28px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .why-grid div {
          border-right: 1px solid #ede9fe;
          padding: 0 12px;
          display: grid;
          gap: 8px;
          color: #374151;
          font-size: 13px;
          line-height: 1.45;
        }

        .why-icon {
          color: #5b21b6;
          font-weight: 950;
          font-size: 13px;
          text-transform: uppercase;
        }

        .why-grid strong {
          color: #111827;
          font-size: 14px;
          font-weight: 950;
        }

        .why-grid p {
          color: #4b5563;
          margin: 0;
          font-size: 13px;
          line-height: 1.45;
        }

        .cta {
          background: linear-gradient(135deg, #312e81 0%, #6d28d9 100%);
          border-radius: 18px;
          padding: 22px 26px;
          display: grid;
          grid-template-columns: 210px 1fr auto;
          gap: 24px;
          align-items: center;
          color: #ffffff;
          box-shadow: 0 20px 48px rgba(49,46,129,0.22);
        }

        .planner-card {
          height: 120px;
          border-radius: 15px;
          overflow: hidden;
          background: #1e1b4b;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.18);
        }

        .planner-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.16) contrast(1.06) brightness(0.96);
        }

        .cta h2 {
          color: #ffffff;
          font-size: clamp(26px, 3vw, 34px);
          line-height: 1.08;
          font-weight: 950;
          margin: 0 0 8px;
        }

        .cta p {
          color: #ede9fe;
          font-size: 15px;
          line-height: 1.55;
          margin: 0;
        }

        .cta a {
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

        .cta small {
          color: #111827;
          font-weight: 800;
          font-size: 11px;
        }
.guides-footer {
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid #ede9fe;
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          text-align: center;
        }

        .guides-footer a {
          color: #5b21b6;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
        }
        @media (max-width: 900px) {
          .guides-header {
  flex-wrap: wrap;
  justify-content: center;
}

.header-actions {
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-cta {
  width: 100%;
  max-width: 320px;
  min-width: unset;
}

          .nav {
            flex-wrap: wrap;
          }

          .hero {
            grid-template-columns: 1fr;
          }

          .guide-grid {
            grid-template-columns: 1fr;
          }

          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cta {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .planner-card {
            display: none;
          }
        }

        @media (max-width: 560px) {
          .guides-page {
            padding: 16px 10px 50px;
          }

          .guides-shell {
            padding: 14px;
          }

          .hero h1 {
            font-size: 38px;
          }

          .stats,
          .time-panel {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-visual {
            min-height: 410px;
          }

          .time-panel {
            bottom: 95px;
          }

          .why-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
