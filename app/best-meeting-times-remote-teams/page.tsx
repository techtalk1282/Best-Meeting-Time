/**
 * File: app/best-meeting-times-remote-teams/page.tsx
 * Version: v4.2 (FINAL CLEAN CINEMATIC HERO REBUILD)
 * Date: 2026-05-12
 *
 * PURPOSE:
 * - Replace duplicated hero mockup image with clean cinematic remote-team visual
 * - Preserve real HTML headline, CTA, SEO copy, and navigation
 * - Remove fake headline/button duplication from hero image area
 * - Keep the premium visual style while improving first viewport fit
 * - Preserve all protected payment/planner logic boundaries
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * REQUIRED IMAGE:
 * - public/images/remote-teams/hero_remote_team_visual.png
 *
 * ROLLBACK:
 * - Revert to v4.1 if this version does not test cleanly
 */

import FooterSection from "../ui/FooterSection";

export default function BestMeetingTimesRemoteTeamsPage() {
  return (
    <>
      <main className="remote-page">
        <header className="site-header">
          <a href="/" className="brand-link">
            <span className="brand-mark">⌘</span>
            <span>Best Meeting Time</span>
          </a>

          <nav className="site-nav" aria-label="Remote team article navigation">
            <a href="/">Home</a>
            <a href="/how-it-works">How It Works</a>
            <a href="/features">Features</a>
            <a href="/guides">Guides</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          <a href="/how-it-works#schedule-tool" className="header-cta">
            <span>Schedule a Meeting</span>
            <small>Free to try — no sign-up</small>
          </a>
        </header>

        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">Remote Team Scheduling Guide</p>

            <h1>Better Meeting Times for Global Remote Teams</h1>

            <p className="hero-text">
              Coordinate meetings across cities, countries, and continents
              without frustrating your team. Compare local times, find fair
              overlap windows, and improve collaboration everywhere.
            </p>

            <div className="hero-points">
              <div>
                <strong>Global Coverage</strong>
                <span>Compare major cities and time zones before sending invites.</span>
              </div>

              <div>
                <strong>Team Friendly</strong>
                <span>Protect working hours and reduce scheduling frustration.</span>
              </div>

              <div>
                <strong>Smart Overlap</strong>
                <span>Find better windows for distributed teams and clients.</span>
              </div>
            </div>

            <a href="/how-it-works#schedule-tool" className="primary-cta">
              <span>Schedule a Meeting</span>
              <small>Free to try — no sign-up</small>
            </a>
          </div>

          <div className="hero-visual">
            <img
              src="/images/remote-teams/hero_remote_team_visual.png"
              alt="Global remote team collaborating across time zones"
              className="hero-image"
            />

            <div className="hero-time-overlay" aria-label="Example local meeting times">
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
                <strong>10:00 PM</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="strategy-grid">
          <article className="strategy-card purple">
            <p>Remote Teams</p>
            <h2>Protect Working Hours</h2>
            <span>
              Repeated late-night or early-morning meetings eventually reduce
              participation and create long-term frustration for distributed teams.
            </span>
          </article>

          <article className="strategy-card blue">
            <p>Scheduling Strategy</p>
            <h2>Find Better Overlap Windows</h2>
            <span>
              Compare local times before scheduling so every region has a
              realistic chance to participate comfortably.
            </span>
          </article>

          <article className="strategy-card gold">
            <p>Global Collaboration</p>
            <h2>Rotate Inconvenient Meetings</h2>
            <span>
              When no perfect overlap exists, rotate difficult meeting windows
              fairly across teams and regions.
            </span>
          </article>
        </section>

        <section className="fair-section">
          <div className="fair-copy">
            <p className="eyebrow">Why This Matters</p>

            <h2>Remote teams work better when scheduling feels balanced.</h2>

            <p>
              One poorly scheduled meeting may not matter, but repeated time zone
              frustration eventually reduces collaboration, attendance, and focus.
              Teams that respect local working hours build healthier global
              communication habits.
            </p>
          </div>

          <div className="fair-grid">
            <div>
              <strong>Avoid burnout</strong>
              <span>Prevent repeated after-hours meetings for the same region.</span>
            </div>

            <div>
              <strong>Improve attendance</strong>
              <span>Better overlap windows usually increase participation.</span>
            </div>

            <div>
              <strong>Reduce confusion</strong>
              <span>Compare cities before sending the calendar invite.</span>
            </div>

            <div>
              <strong>Respect global teams</strong>
              <span>Fair scheduling creates stronger collaboration habits.</span>
            </div>
          </div>
        </section>

        <section className="workflow-section">
          <p className="eyebrow">Remote Team Workflow</p>

          <h2>A better process for scheduling across time zones</h2>

          <div className="workflow-grid">
            <article>
              <strong>Compare Cities</strong>
              <p>
                Start by identifying each participant’s city or time zone before
                proposing a meeting. Visibility across regions creates better
                planning decisions.
              </p>
            </article>

            <article>
              <strong>Review Overlap</strong>
              <p>
                Focus on realistic working-hour overlap instead of convenience
                for a single office, manager, or department.
              </p>
            </article>

            <article>
              <strong>Rotate Fairly</strong>
              <p>
                Share difficult meeting windows fairly between global regions
                when no perfect overlap exists.
              </p>
            </article>
          </div>
        </section>

        <section className="examples-section">
          <p className="eyebrow">Team Timing Examples</p>

          <h2>Good meeting windows by team type</h2>

          <div className="examples-grid">
            <div>
              <strong>US-only team</strong>
              <span>Midday Eastern Time often creates the best overlap.</span>
            </div>

            <div>
              <strong>US + Europe</strong>
              <span>US mornings and Europe afternoons usually work best.</span>
            </div>

            <div>
              <strong>US + Asia</strong>
              <span>Rotate meeting times and reduce unnecessary live meetings.</span>
            </div>

            <div>
              <strong>Global organization</strong>
              <span>Use rotating schedules with strong async documentation.</span>
            </div>
          </div>
        </section>

        <section className="bottom-cta">
          <div>
            <p>Ready to Schedule Better?</p>
            <h2>Compare cities before you send the invite.</h2>
            <span>
              Review overlap windows, compare local times, and choose a meeting
              schedule that works better for everyone.
            </span>
          </div>

          <a href="/how-it-works#schedule-tool">
            <strong>Schedule a Meeting</strong>
            <small>Free to try — no sign-up</small>
          </a>
        </section>
      </main>

      <FooterSection />

      <style>{`
        .remote-page {
          width: 100%;
          max-width: 1240px;
          margin: 18px auto 0;
          padding: 20px 20px 48px;
          background: #ffffff;
          color: #111827;
          border: 1px solid rgba(237,233,254,0.9);
          box-shadow: 0 24px 70px rgba(30,27,75,0.18);
          box-sizing: border-box;
          overflow: hidden;
        }

        .site-header {
          min-height: 66px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border-bottom: 1px solid #ede9fe;
          margin-bottom: 20px;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #5b21b6;
          font-size: 18px;
          font-weight: 900;
          text-decoration: none;
          white-space: nowrap;
        }

        .brand-mark {
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

        .site-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
        }

        .site-nav a {
          color: #374151;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
        }

        .header-cta {
          background: #5b21b6;
          color: #ffffff;
          padding: 9px 16px;
          border-radius: 8px;
          font-weight: 900;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          line-height: 1.18;
          min-width: 154px;
          box-shadow: 0 10px 22px rgba(91,33,182,0.22);
        }

        .header-cta span {
          font-size: 13px;
          font-weight: 900;
        }

        .header-cta small {
          font-size: 10px;
          font-weight: 800;
          opacity: 0.92;
        }

        .hero-section {
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: 22px;
          align-items: stretch;
          margin-bottom: 20px;
        }

        .hero-copy {
          background: linear-gradient(180deg, #180041 0%, #2e1065 100%);
          color: #ffffff;
          border-radius: 28px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .eyebrow {
          display: inline-flex;
          width: fit-content;
          margin: 0 0 14px;
          padding: 7px 13px;
          border-radius: 999px;
          background: #ede9fe;
          color: #5b21b6;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .hero-eyebrow {
          background: rgba(250,204,21,0.14);
          color: #facc15;
          border: 1px solid rgba(250,204,21,0.42);
        }

        .hero-copy h1 {
          margin: 0 0 16px;
          color: #ffffff;
          font-size: clamp(40px, 5vw, 58px);
          line-height: 0.99;
          font-weight: 950;
          letter-spacing: -0.055em;
        }

        .hero-text {
          color: rgba(255,255,255,0.88);
          font-size: 16px;
          line-height: 1.65;
          margin: 0 0 18px;
        }

        .hero-points {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          margin-bottom: 18px;
        }

        .hero-points div {
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 16px;
          padding: 13px;
        }

        .hero-points strong {
          display: block;
          color: #ffffff;
          font-size: 15px;
          font-weight: 950;
          margin-bottom: 5px;
        }

        .hero-points span {
          color: rgba(255,255,255,0.82);
          font-size: 13px;
          line-height: 1.45;
        }

        .primary-cta {
          width: fit-content;
          background: #facc15;
          color: #111827;
          padding: 13px 18px;
          border-radius: 14px;
          text-decoration: none;
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 16px 30px rgba(0,0,0,0.22);
        }

        .primary-cta span {
          color: #111827;
          font-size: 18px;
          font-weight: 950;
        }

        .primary-cta small {
          color: #111827;
          font-size: 12px;
          font-weight: 900;
          opacity: 1;
        }

        .hero-visual {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          background: #050816;
          height: 520px;
          box-shadow: 0 20px 50px rgba(30,27,75,0.22);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center center;
          background: #050816;
        }

        .hero-time-overlay {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .hero-time-overlay div {
          background: rgba(17,24,39,0.80);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 14px;
          padding: 12px;
          backdrop-filter: blur(10px);
        }

        .hero-time-overlay span {
          display: block;
          color: rgba(255,255,255,0.78);
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 5px;
        }

        .hero-time-overlay strong {
          color: #ffffff;
          font-size: 20px;
          font-weight: 950;
        }

        .strategy-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 20px;
        }

        .strategy-card {
          border-radius: 22px;
          padding: 22px;
          min-height: 190px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .strategy-card p {
          width: fit-content;
          margin: 0 0 12px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.16);
          font-size: 11px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .strategy-card h2 {
          margin: 0 0 10px;
          font-size: 26px;
          line-height: 1.05;
          font-weight: 950;
        }

        .strategy-card span {
          font-size: 15px;
          line-height: 1.6;
        }

        .purple {
          background: linear-gradient(180deg, #5b21b6 0%, #4c1d95 100%);
          color: #ffffff;
        }

        .blue {
          background: linear-gradient(180deg, #2563eb 0%, #1d4ed8 100%);
          color: #ffffff;
        }

        .gold {
          background: linear-gradient(180deg, #facc15 0%, #eab308 100%);
          color: #111827;
        }

        .gold p {
          background: rgba(17,24,39,0.10);
        }

        .fair-section {
          background: #faf9ff;
          border: 1px solid #ddd6fe;
          border-radius: 28px;
          padding: 30px;
          margin-bottom: 20px;
        }

        .fair-copy h2,
        .workflow-section h2,
        .examples-section h2 {
          margin: 0 0 14px;
          color: #111827;
          font-size: clamp(34px, 4vw, 46px);
          line-height: 1.08;
          font-weight: 950;
          letter-spacing: -0.04em;
          max-width: 980px;
        }

        .fair-copy p:last-child {
          color: #4b5563;
          font-size: 16px;
          line-height: 1.7;
          max-width: 900px;
          margin: 0 0 22px;
        }

        .fair-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .fair-grid div {
          background: #ffffff;
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 12px 28px rgba(91,33,182,0.06);
        }

        .fair-grid strong {
          display: block;
          color: #111827;
          font-size: 19px;
          font-weight: 950;
          margin-bottom: 8px;
        }

        .fair-grid span {
          color: #4b5563;
          font-size: 14px;
          line-height: 1.6;
        }

        .workflow-section {
          margin-bottom: 20px;
        }

        .workflow-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .workflow-grid article {
          background: linear-gradient(180deg, #ffffff 0%, #faf7ff 100%);
          border: 1px solid #ddd6fe;
          border-radius: 22px;
          padding: 24px;
          box-shadow: 0 14px 30px rgba(91,33,182,0.08);
          min-height: 190px;
        }

        .workflow-grid strong {
          display: block;
          color: #111827;
          font-size: 26px;
          line-height: 1.08;
          font-weight: 950;
          margin-bottom: 12px;
        }

        .workflow-grid p {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.7;
          margin: 0;
        }

        .examples-section {
          background: #f5f3ff;
          border: 1px solid #ddd6fe;
          border-radius: 28px;
          padding: 30px;
          margin-bottom: 20px;
        }

        .examples-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .examples-grid div {
          background: #ffffff;
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 10px 24px rgba(91,33,182,0.06);
        }

        .examples-grid strong {
          display: block;
          color: #111827;
          font-size: 18px;
          font-weight: 950;
          margin-bottom: 8px;
        }

        .examples-grid span {
          color: #4b5563;
          font-size: 14px;
          line-height: 1.6;
        }

        .bottom-cta {
          background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%);
          border-radius: 28px;
          padding: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .bottom-cta p {
          color: #facc15;
          font-size: 12px;
          font-weight: 950;
          margin: 0 0 10px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .bottom-cta h2 {
          color: #ffffff;
          font-size: clamp(32px, 4vw, 44px);
          line-height: 1.06;
          font-weight: 950;
          letter-spacing: -0.04em;
          margin: 0 0 10px;
        }

        .bottom-cta span {
          color: rgba(255,255,255,0.88);
          font-size: 15px;
          line-height: 1.7;
        }

        .bottom-cta a {
          background: #facc15;
          color: #111827;
          padding: 16px 22px;
          border-radius: 14px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 220px;
          box-shadow: 0 14px 28px rgba(0,0,0,0.20);
        }

        .bottom-cta a strong {
          color: #111827;
          font-size: 18px;
          font-weight: 950;
        }

        .bottom-cta a small {
          color: #111827;
          font-size: 12px;
          font-weight: 900;
          opacity: 1;
        }

        @media (max-width: 1100px) {
          .hero-section,
          .strategy-grid,
          .workflow-grid,
          .examples-grid {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            height: 520px;
          }

          .examples-grid,
          .fair-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .bottom-cta {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
          }

          .bottom-cta a {
            width: 100%;
            min-width: 0;
            box-sizing: border-box;
          }
        }

        @media (max-width: 900px) {
          .remote-page {
            margin: 16px auto 0;
            max-width: calc(100% - 24px);
            padding: 16px;
          }

          .site-header {
            flex-wrap: wrap;
            justify-content: center;
            text-align: center;
          }

          .brand-link {
            width: 100%;
            justify-content: center;
          }

          .site-nav {
            width: 100%;
            flex-wrap: wrap;
            gap: 12px 18px;
          }

          .header-cta {
            width: 100%;
            max-width: 340px;
          }

          .hero-copy,
          .fair-section,
          .examples-section,
          .bottom-cta {
            padding: 24px;
          }

          .hero-copy h1 {
            font-size: 42px;
          }

          .hero-time-overlay {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .remote-page {
            max-width: calc(100% - 20px);
            padding: 14px;
          }

          .site-nav {
            gap: 10px 14px;
          }

          .site-nav a {
            font-size: 12px;
          }

          .hero-copy h1,
          .fair-copy h2,
          .workflow-section h2,
          .examples-section h2,
          .bottom-cta h2 {
            font-size: 34px;
          }

          .hero-text,
          .fair-copy p:last-child,
          .workflow-grid p {
            font-size: 15px;
          }

          .hero-visual {
            height: 340px;
          }

          .fair-grid,
          .examples-grid {
            grid-template-columns: 1fr;
          }

          .strategy-card,
          .workflow-grid article {
            min-height: auto;
          }
        }
      `}</style>
    </>
  );
}
