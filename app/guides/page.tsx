/**
 * File: app/guides/page.tsx
 * Version: v3.3 (MOCKUP-CLOSER VISUAL GUIDE HUB)
 * Date: 2026-05-06
 *
 * PURPOSE:
 * - Replicate the approved colorful Guides mockup more closely
 * - Fix invisible/washed-out guide card headings caused by global heading styles
 * - Improve hero image, card image styling, guide card spacing, and CTA polish
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to app/guides/page.tsx v3.2 if this layout does not test cleanly
 */

export default function GuidesPage() {
  return (
    <main className="guides-page">
      <section className="guides-shell">
        <header className="guides-header">
          <a href="/" className="brand">
            <span className="brand-icon">⌘</span>
            <span>Best Meeting Time</span>
          </a>

          <nav className="nav" aria-label="Guides navigation">
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
              src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1600&auto=format&fit=crop"
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

            <div className="time-panel">
              <div><strong>9:00 AM</strong><span>New York</span></div>
              <div><strong>2:00 PM</strong><span>London</span></div>
              <div><strong>11:00 PM</strong><span>Tokyo</span></div>
              <div><strong>6:00 AM</strong><span>Sydney</span></div>
            </div>

            <div className="hero-caption">
              Different places. Different times. One connected world.
            </div>
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

        <section className="guide-grid">
          <a href="/how-to-schedule-meetings-across-time-zones" className="guide-card guide-blue">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=1200&auto=format&fit=crop"
              alt="Blue world map for learning time zone basics"
            />
            <div className="guide-body">
              <span className="guide-number purple">1</span>
              <h3>Time Zone Basics</h3>
              <ul>
                <li>How many time zones are there?</li>
                <li>Why do time zones exist?</li>
                <li>Why do clocks change?</li>
              </ul>
              <strong>Read more on this guide →</strong>
            </div>
          </a>

          <a href="/best-meeting-times-remote-teams" className="guide-card guide-gold">
            <img
              src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1200&auto=format&fit=crop"
              alt="Japan and cultural timing guide"
            />
            <div className="guide-body">
              <span className="guide-number gold">2</span>
              <h3>Cultural Timing Guides</h3>
              <ul>
                <li>Best time to contact Japan</li>
                <li>Work hours around the world</li>
                <li>Weekend differences globally</li>
              </ul>
              <strong>Read more on this guide →</strong>
            </div>
          </a>

          <a href="/time-zone-meeting-planner-guide" className="guide-card guide-green">
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
              alt="Entertainment timing for gaming and live events"
            />
            <div className="guide-body">
              <span className="guide-number green">3</span>
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
            <div><span className="why-icon">Work</span><strong>Work & Business</strong><p>Plan fair meetings and respect work hours around the world.</p></div>
            <div><span className="why-icon">Travel</span><strong>Travel & Lifestyle</strong><p>Avoid missed flights, confusion, and scheduling surprises.</p></div>
            <div><span className="why-icon">Family</span><strong>Family & Friends</strong><p>Stay connected with loved ones across different time zones.</p></div>
            <div><span className="why-icon">Play</span><strong>Entertainment</strong><p>Catch live events, streams, and games at the right time.</p></div>
            <div><span className="why-icon">World</span><strong>Global Community</strong><p>Join online communities and events happening worldwide.</p></div>
          </div>
        </section>

        <section className="cta">
          <div className="planner-card">
            <div className="planner-screen">
              <span />
              <span />
              <span />
            </div>
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

        .nav-cta span { font-size: 13px; }
        .nav-cta small { font-size: 10px; font-weight: 800; color: #ffffff; }

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
          min-height: clamp(360px, 38vw, 430px);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 24px 55px rgba(30,27,75,0.22);
          background: #0f172a;
        }

        .hero-visual img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          filter: saturate(1.35) contrast(1.08);
        }

        .hero-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(250,204,21,0.55), transparent 28%),
            linear-gradient(90deg, rgba(15,23,42,0.05), rgba(15,23,42,0.25));
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

        .pin-one { left: 28%; top: 33%; background: #8b5cf6; }
        .pin-two { left: 58%; top: 25%; background: #facc15; }
        .pin-three { right: 22%; top: 42%; background: #fb7185; }
        .pin-four { right: 16%; bottom: 32%; background: #22c55e; }

        .line {
          position: absolute;
          border-top: 2px dashed rgba(250,204,21,0.88);
          z-index: 2;
        }

        .line-one { left: 30%; top: 43%; width: 48%; transform: rotate(-13deg); }
        .line-two { left: 32%; top: 49%; width: 53%; transform: rotate(19deg); }
        .line-three { left: 48%; top: 35%; width: 31%; transform: rotate(31deg); }

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

        .guide-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          padding: 0 10px 26px;
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
          filter: saturate(1.14) contrast(1.03);
        }

        .guide-blue { background: linear-gradient(180deg, #ffffff 0%, #f7f5ff 100%); }
        .guide-gold { background: linear-gradient(180deg, #ffffff 0%, #fff7df 100%); }
        .guide-green { background: linear-gradient(180deg, #ffffff 0%, #ecfdf5 100%); }

        .guide-body {
          padding: 22px;
        }

        .guide-number {
          width: 42px;
          height: 42px;
          border-radius: 999px;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 950;
          margin-bottom: 14px;
        }

        .purple { background: #7c3aed; }
        .gold { background: #facc15; color: #111827; }
        .green { background: #22c55e; }

        .guide-card h3 {
          color: #111827 !important;
          font-size: 25px;
          line-height: 1.12;
          letter-spacing: -0.02em;
          font-weight: 950;
          margin: 0 0 14px;
        }

        .guide-card ul {
          color: #374151;
          font-size: 15px;
          line-height: 1.62;
          padding-left: 18px;
          margin: 0 0 18px;
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
        }

        .planner-card {
          min-height: 120px;
          border-radius: 15px;
          background: linear-gradient(135deg, #1e1b4b, #7c3aed);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .planner-screen {
          width: 150px;
          height: 82px;
          border-radius: 10px;
          background: #ede9fe;
          padding: 12px;
          display: grid;
          gap: 8px;
        }

        .planner-screen span {
          display: block;
          height: 10px;
          border-radius: 999px;
          background: #8b5cf6;
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
        }

        .cta small {
          color: #111827;
          font-weight: 800;
          font-size: 11px;
        }

        @media (max-width: 900px) {
          .guides-header {
            flex-wrap: wrap;
            justify-content: center;
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
            min-height: 390px;
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
