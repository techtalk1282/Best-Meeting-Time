/**
 * File: app/about/page.tsx
 * Version: v7.3 (RESPONSIVE MOBILE FIT CONVERSION)
 * Date: 2026-05-11
 *
 * PURPOSE:
 * - Fix Samsung/iPhone mobile right-side cutoff
 * - Match the successful Features/Blog responsive page pattern
 * - Preserve desktop white-shell layout and branded scheduling visual
 * - Keep all payment, premium, KV, Stripe, and planner logic untouched
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v7.2 if this responsive pass does not test cleanly
 */

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-header">
        <a href="/" className="brand" aria-label="Best Meeting Time home">
          <img
            src="/images/branding/logo.png"
            alt="Best Meeting Time"
            className="brand-logo"
          />
        </a>

        <nav className="nav" aria-label="About page navigation">
          <a href="/">Home</a>
          <a href="/how-it-works">Schedule a Meeting</a>
          <a href="/features">Features</a>
          <a href="/guides">Guides</a>
          <a href="/blog">Blog</a>
          <a href="/about" className="active">About</a>
          <a href="/contact">Contact</a>
        </nav>

        <a href="/how-it-works#schedule-tool" className="nav-cta">
          <span>Schedule a Meeting</span>
          <small>Free to try — no sign-up</small>
        </a>
      </header>

      <section className="hero">
        <p className="pill">About Best Meeting Time</p>

        <h1>Smarter Scheduling for Remote Teams, Clients, and Global Work</h1>

        <p>
          Best Meeting Time helps people compare time zones faster, find fair
          overlap windows, and schedule meetings with more confidence before the
          invite goes out.
        </p>
      </section>

      <section className="visual-panel">
        <div className="mock-visual">
          <div className="mock-header">
            <span className="mock-dot" />
            <strong>Best Overlap Window</strong>
            <span className="mock-badge">Recommended</span>
          </div>

          <div className="city-grid">
            <div>
              <span>New York</span>
              <strong>9:00 AM</strong>
            </div>

            <div>
              <span>London</span>
              <strong>2:00 PM</strong>
            </div>

            <div>
              <span>Tokyo</span>
              <strong>11:00 PM</strong>
            </div>
          </div>

          <div className="window-bar">
            <span>Best meeting window</span>
            <strong>9:00 AM — 11:00 AM ET</strong>
          </div>
        </div>

        <div className="visual-text">
          <strong>Built for practical scheduling decisions.</strong>
          <span>
            Compare cities, local times, working hours, and meeting windows
            before sending a remote team or client invite.
          </span>
        </div>
      </section>

      <section className="card-grid">
        <article className="info-card">
          <p>Our Mission</p>
          <h2>Make time zone planning easier.</h2>
          <span>
            Scheduling across locations should not depend on guesswork,
            repeated conversions, or long message threads.
          </span>
        </article>

        <article className="info-card">
          <p>Why It Matters</p>
          <h2>Better meetings start with better timing.</h2>
          <span>
            Good timing helps reduce missed calls, late-night meetings,
            daylight-saving mistakes, and team confusion.
          </span>
        </article>

        <article className="info-card">
          <p>Who It Helps</p>
          <h2>Remote teams, clients, and consultants.</h2>
          <span>
            Useful for distributed teams, freelancers, agencies, sales calls,
            interviews, and global client scheduling.
          </span>
        </article>
      </section>

      <section className="cta">
        <div>
          <p>Start Planning</p>
          <h2>Ready to find a better meeting time?</h2>
          <span>
            Compare cities and review recommended meeting windows before you
            send the invite.
          </span>
        </div>

        <a href="/how-it-works#schedule-tool">
          <strong>Schedule a Meeting</strong>
          <small>Free to try — no sign-up</small>
        </a>
      </section>

      <style>{`
        .about-page {
          width: 100%;
          max-width: 1120px;
          margin: 14px auto;
          padding: 14px;
          background: #ffffff;
          color: #111827;
          border: 1px solid rgba(237,233,254,0.95);
          box-shadow: 0 18px 50px rgba(30,27,75,0.16);
          box-sizing: border-box;
        }

        .about-header {
          min-height: 58px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-bottom: 1px solid #ede9fe;
          margin-bottom: 26px;
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
          gap: 17px;
        }

        .nav a {
          color: #111827;
          font-size: 13px;
          font-weight: 900;
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
          padding: 9px 17px;
          border-radius: 9px;
          font-weight: 950;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          line-height: 1.1;
          min-width: 158px;
          box-shadow: 0 10px 22px rgba(91,33,182,0.24);
        }

        .nav-cta span {
          font-size: 13px;
          font-weight: 950;
        }

        .nav-cta small {
          font-size: 10px;
          font-weight: 850;
          color: #ffffff;
          opacity: 0.94;
        }

        .hero {
          max-width: 820px;
          margin: 0 auto 18px;
          text-align: center;
        }

        .pill {
          display: inline-block;
          margin: 0 0 12px;
          padding: 7px 15px;
          border-radius: 999px;
          background: #f3efff;
          color: #5b21b6;
          font-size: 13px;
          font-weight: 950;
        }

        .hero h1 {
          color: #111827;
          font-size: clamp(34px, 4vw, 48px);
          line-height: 1.04;
          margin: 0 0 10px;
          font-weight: 950;
          letter-spacing: -0.045em;
        }

        .hero p:last-child {
          max-width: 780px;
          margin: 0 auto;
          color: #4b5563;
          font-size: 16px;
          line-height: 1.45;
        }

        .visual-panel {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 16px;
          align-items: center;
          margin-bottom: 14px;
          padding: 12px;
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          background: #faf9ff;
        }

        .mock-visual {
          min-height: 92px;
          border-radius: 14px;
          padding: 10px;
          background: linear-gradient(135deg, #4c1d95 0%, #6d28d9 55%, #7c3aed 100%);
          color: #ffffff;
          display: grid;
          gap: 7px;
          box-shadow: 0 10px 22px rgba(91,33,182,0.18);
        }

        .mock-header {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          line-height: 1;
        }

        .mock-dot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #facc15;
        }

        .mock-badge {
          margin-left: auto;
          padding: 4px 7px;
          border-radius: 999px;
          background: rgba(255,255,255,0.16);
          color: #ffffff;
          font-size: 9px;
          font-weight: 900;
        }

        .city-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
        }

        .city-grid div {
          display: grid;
          gap: 2px;
          padding: 6px 7px;
          border-radius: 10px;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.18);
          font-size: 10px;
        }

        .window-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 5px 8px;
          border-radius: 10px;
          background: #ffffff;
          color: #4c1d95;
          font-size: 10px;
          font-weight: 850;
        }

        .visual-text {
          display: grid;
          gap: 5px;
          color: #4b5563;
          font-size: 14px;
          line-height: 1.42;
        }

        .visual-text strong {
          color: #111827;
          font-size: 18px;
          font-weight: 950;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 14px;
        }

        .info-card {
          background: #faf9ff;
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          padding: 18px;
        }

        .info-card p {
          color: #6d28d9;
          font-size: 12px;
          font-weight: 950;
          margin: 0 0 9px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-card h2 {
          color: #111827;
          font-size: 21px;
          line-height: 1.14;
          font-weight: 950;
          margin: 0 0 8px;
        }

        .info-card span {
          color: #4b5563;
          font-size: 14px;
          line-height: 1.42;
        }

        .cta {
          padding: 15px 20px;
          border-radius: 16px;
          background: #5b21b6;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .cta p {
          margin: 0 0 3px;
          color: #facc15;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .cta h2 {
          margin: 0 0 3px;
          color: #ffffff;
          font-size: 22px;
          font-weight: 950;
          letter-spacing: -0.02em;
        }

        .cta span {
          margin: 0;
          color: rgba(255,255,255,0.88);
          font-size: 13.5px;
          line-height: 1.35;
        }

        .cta a {
          background: #ffffff;
          color: #5b21b6;
          padding: 10px 17px;
          border-radius: 9px;
          font-weight: 950;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          line-height: 1.1;
          min-width: 158px;
          box-shadow: 0 9px 20px rgba(30,27,75,0.18);
        }

        .cta a strong {
          font-size: 13px;
          font-weight: 950;
        }

        .cta a small {
  font-size: 10px;
  font-weight: 900;
  color: #5b21b6;
  opacity: 1;
  margin-top: 2px;
}

        @media (max-width: 900px) {
          .about-page {
            max-width: min(100%, 520px);
            margin: 14px auto;
            padding: 14px;
          }

          .about-header {
            flex-wrap: wrap;
            justify-content: center;
            gap: 14px;
            margin-bottom: 22px;
          }

          .brand {
            width: 100%;
            justify-content: center;
          }

          .brand-logo {
            width: 155px;
          }

          .nav {
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px 18px;
          }

          .nav a {
            font-size: 13px;
          }

          .nav-cta {
            width: 100%;
            max-width: 320px;
            min-width: unset;
          }

          .hero {
            text-align: left;
            margin-bottom: 20px;
          }

          .hero h1 {
            font-size: 34px;
            line-height: 1.08;
          }

          .hero p:last-child {
            font-size: 15px;
            line-height: 1.55;
          }

          .visual-panel {
            grid-template-columns: 1fr;
          }

          .card-grid {
            grid-template-columns: 1fr;
          }

          .cta {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
          }

          .cta a {
            width: 100%;
            min-width: unset;
            box-sizing: border-box;
          }
        }

        @media (max-width: 560px) {
          .about-page {
            max-width: calc(100% - 20px);
            margin: 10px auto;
            padding: 14px;
          }

          .hero h1 {
            font-size: 31px;
          }

          .pill {
            font-size: 12px;
          }

          .city-grid {
            grid-template-columns: 1fr;
          }

          .window-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  );
}
