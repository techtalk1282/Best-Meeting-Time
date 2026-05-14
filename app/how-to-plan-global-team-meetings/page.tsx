/**
 * File: app/how-to-plan-global-team-meetings/page.tsx
 * Version: v2.0 (GET IN THE ZONE PREMIUM HERO REDESIGN)
 * Date: 2026-05-13
 *
 * PURPOSE:
 * - Replace repetitive city-card hero layout
 * - Introduce unique “Get In The Zone” collaboration branding
 * - Create a premium global collaboration visual experience
 * - Improve authority-page uniqueness and perceived product value
 *
 * PROTECTED:
 * - No Stripe changes
 * - No KV changes
 * - No ToolPreview changes
 * - No payment logic changes
 *
 * ROLLBACK:
 * - Revert to v1.1 if layout fails testing
 */

import type { Metadata } from "next";
import FooterSection from "../ui/FooterSection";

export const metadata: Metadata = {
  title: "How To Plan Global Team Meetings",
  description:
    "Learn how remote teams coordinate across time zones using smarter collaboration habits, overlap planning, and global scheduling strategies.",
};

export default function HowToPlanGlobalTeamMeetingsPage() {
  return (
    <>
      <main className="global-page">
        <header className="site-header">
          <a href="/" className="brand-link">
            <img
              src="/images/branding/logo.png"
              alt="Best Meeting Time"
              className="brand-logo"
            />
          </a>

          <nav className="site-nav">
            <a href="/">Home</a>
            <a href="/how-it-works#schedule-tool">
              Schedule a Meeting
            </a>
            <a href="/features">Features</a>
            <a href="/guides">Guides</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          <a
            href="/how-it-works#schedule-tool"
            className="header-cta"
          >
            <span>Schedule a Meeting</span>
            <small>Free to try — no sign-up</small>
          </a>
        </header>

        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">GLOBAL COLLABORATION</p>

            <h1>
              Get In
              <br />
              The Zone
            </h1>

            <p className="hero-description">
              Build stronger global collaboration across teams,
              time zones, and work styles without creating
              burnout, unfair schedules, or communication chaos.
            </p>

            <div className="hero-actions">
              <a href="/how-it-works#schedule-tool">
                Compare Meeting Times
              </a>

              <span>No sign-up required</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow glow-one" />
            <div className="glow glow-two" />

            <div className="sync-center">
              <span>TEAM</span>
              <strong>SYNC</strong>
            </div>

            <div className="connection-ring ring-one" />
            <div className="connection-ring ring-two" />
            <div className="connection-ring ring-three" />

            <div className="team-node node-one">
              <strong>New York</strong>
              <span>Active overlap</span>
            </div>

            <div className="team-node node-two">
              <strong>London</strong>
              <span>Team aligned</span>
            </div>

            <div className="team-node node-three">
              <strong>Berlin</strong>
              <span>High collaboration</span>
            </div>

            <div className="team-node node-four">
              <strong>Tokyo</strong>
              <span>Schedule optimized</span>
            </div>

            <div className="pulse-bar">
              <div className="pulse-fill" />
            </div>

            <div className="hero-bottom-card">
              <div>
                <small>GLOBAL TEAM STATUS</small>
                <strong>Collaboration Zone Achieved</strong>
              </div>

              <span>92% overlap quality</span>
            </div>
          </div>
        </section>

        <section className="quick-grid">
          <article>
            <span>Core Strategy</span>

            <strong>
              Plan around shared overlap instead of organizer convenience.
            </strong>
          </article>

          <article>
            <span>Remote Team Habit</span>

            <strong>
              Rotate difficult meeting windows across regions fairly.
            </strong>
          </article>

          <article>
            <span>Scheduling Goal</span>

            <strong>
              Protect productivity while improving collaboration quality.
            </strong>
          </article>
        </section>

        <section className="section-heading">
          <p className="eyebrow centered-eyebrow">
            WHAT MAKES GLOBAL MEETINGS DIFFICULT
          </p>

          <h2>
            Remote teams struggle because different regions
            experience different working hours at the same time.
          </h2>

          <p>
            Scheduling issues usually come from repeated patterns:
            unfair overlap windows, timezone fatigue, and one
            office unintentionally becoming the default.
          </p>
        </section>

        <section className="problem-grid">
          <article>
            <span>01</span>

            <strong>
              Headquarters often dominate scheduling
            </strong>

            <p>
              Many organizations unintentionally prioritize one office
              while other regions absorb the difficult meeting times.
            </p>
          </article>

          <article>
            <span>02</span>

            <strong>
              Overlap windows are limited
            </strong>

            <p>
              Global teams may only share a few practical hours
              where everyone can reasonably participate.
            </p>
          </article>

          <article>
            <span>03</span>

            <strong>
              Daylight saving changes create confusion
            </strong>

            <p>
              Time differences shift temporarily throughout the year,
              creating unexpected meeting conflicts.
            </p>
          </article>

          <article>
            <span>04</span>

            <strong>
              Time zone fatigue reduces engagement
            </strong>

            <p>
              Repeated early or late-night calls eventually reduce
              participation and morale.
            </p>
          </article>
        </section>

        <section className="strategy-section">
          <div className="strategy-copy">
            <p className="eyebrow dark-eyebrow">
              BETTER SCHEDULING HABITS
            </p>

            <h2>
              Remote teams improve collaboration when scheduling
              becomes predictable.
            </h2>

            <p>
              Teams that compare local times before scheduling meetings
              reduce conflict, missed attendance, and unfair timing patterns.
            </p>
          </div>

          <div className="strategy-list">
            <div>
              Compare local city times
            </div>

            <div>
              Protect deep work hours
            </div>

            <div>
              Rotate difficult meetings
            </div>

            <div>
              Use async updates
            </div>
          </div>
        </section>

        <section className="checklist-section">
          <p className="eyebrow">
            QUICK CHECKLIST
          </p>

          <div className="checklist-grid">
            <div>Check each participant’s local time.</div>
            <div>Confirm the meeting does not land too early or too late.</div>
            <div>Watch for daylight saving changes between countries.</div>
            <div>Rotate difficult time slots across regions when needed.</div>
            <div>Use notes or async updates when live discussion is not necessary.</div>
          </div>
        </section>

        <section className="related-reading">
          <p className="eyebrow">
            RELATED READING
          </p>

          <h2>
            More guides for better global scheduling
          </h2>

          <div className="related-grid">
            <a href="/why-remote-teams-struggle-with-scheduling">
              <strong>
                Why Remote Teams Struggle With Scheduling
              </strong>

              <span>
                Learn how time fatigue becomes a collaboration problem.
              </span>
            </a>

            <a href="/best-meeting-times-us-and-europe">
              <strong>
                Best Meeting Times Between the US and Europe
              </strong>

              <span>
                See practical overlap windows for transatlantic teams.
              </span>
            </a>

            <a href="/best-times-to-contact-different-countries">
              <strong>
                Best Times To Contact Different Countries
              </strong>

              <span>
                Understand global communication timing and etiquette.
              </span>
            </a>
          </div>
        </section>

        <section className="bottom-cta">
          <div>
            <p>PLAN BETTER GLOBAL MEETINGS</p>

            <h2>
              Compare time zones before your next team meeting.
            </h2>

            <span>
              Use Best Meeting Time to compare local working hours,
              overlap windows, and better meeting options before
              sending the invite.
            </span>
          </div>

          <a href="/how-it-works#schedule-tool">
            <strong>Schedule a Meeting</strong>

            <small>
              Free to try — no sign-up
            </small>
          </a>
        </section>
      </main>

      <FooterSection />

      <style>{`
        .global-page {
          width: 100%;
          max-width: 1240px;
          margin: 10px auto 0;
          padding: 14px 18px 42px;
          background: #ffffff;
          color: #111827;
          border: 1px solid rgba(237,233,254,0.9);
          box-shadow: 0 24px 70px rgba(30,27,75,0.18);
          box-sizing: border-box;
          overflow: hidden;
        }

        .site-header {
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border-bottom: 1px solid #ede9fe;
          margin-bottom: 18px;
        }

        .brand-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .brand-logo {
          width: 150px;
          height: auto;
          display: block;
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
          padding: 8px 15px;
          border-radius: 8px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.16;
          min-width: 150px;
          box-shadow: 0 10px 22px rgba(91,33,182,0.22);
        }

        .header-cta span {
          font-size: 13px;
          font-weight: 900;
        }

        .header-cta small {
          font-size: 10px;
          font-weight: 800;
        }

        .hero-section {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 18px;
          margin-bottom: 20px;
        }

        .hero-copy {
          border-radius: 30px;
          padding: 38px;
          background: linear-gradient(180deg, #ffffff 0%, #f8f5ff 100%);
          border: 1px solid #ddd6fe;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .eyebrow {
          width: fit-content;
          margin: 0 0 14px;
          padding: 8px 14px;
          border-radius: 999px;
          background: #ede9fe;
          color: #5b21b6;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .centered-eyebrow {
          margin-left: auto;
          margin-right: auto;
        }

        .dark-eyebrow {
          background: rgba(255,255,255,0.12);
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.20);
        }

        .hero-copy h1 {
          margin: 0 0 18px;
          color: #111827;
          font-size: clamp(64px, 6vw, 96px);
          line-height: 0.9;
          letter-spacing: -0.07em;
          font-weight: 950;
        }

        .hero-description {
          color: #4b5563;
          font-size: 18px;
          line-height: 1.78;
          margin: 0;
          max-width: 560px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 28px;
        }

        .hero-actions a {
          background: #5b21b6;
          color: #ffffff;
          padding: 16px 24px;
          border-radius: 14px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 950;
          box-shadow: 0 14px 28px rgba(91,33,182,0.22);
        }

        .hero-actions span {
          color: #6b7280;
          font-size: 14px;
          font-weight: 900;
        }

        .hero-visual {
          position: relative;
          overflow: hidden;
          min-height: 520px;
          border-radius: 32px;
          background:
            radial-gradient(circle at top right, rgba(250,204,21,0.22), transparent 28%),
            linear-gradient(135deg, #4c1d95 0%, #5b21b6 38%, #2563eb 100%);
          box-shadow: 0 30px 80px rgba(30,27,75,0.30);
        }

        .glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(30px);
        }

        .glow-one {
          width: 220px;
          height: 220px;
          background: rgba(168,85,247,0.40);
          top: -40px;
          right: -30px;
        }

        .glow-two {
          width: 180px;
          height: 180px;
          background: rgba(250,204,21,0.24);
          bottom: -20px;
          left: -20px;
        }

        .sync-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 170px;
          height: 170px;
          border-radius: 999px;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.22);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 24px 60px rgba(17,24,39,0.22);
          z-index: 3;
        }

        .sync-center span {
          color: rgba(255,255,255,0.80);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.18em;
        }

        .sync-center strong {
          color: #ffffff;
          font-size: 42px;
          font-weight: 950;
          letter-spacing: -0.05em;
        }

        .connection-ring {
          position: absolute;
          border-radius: 999px;
          border: 2px dashed rgba(255,255,255,0.20);
        }

        .ring-one {
          width: 420px;
          height: 160px;
          top: 160px;
          left: 70px;
          transform: rotate(10deg);
        }

        .ring-two {
          width: 500px;
          height: 220px;
          top: 120px;
          left: 20px;
          transform: rotate(-12deg);
        }

        .ring-three {
          width: 360px;
          height: 280px;
          top: 110px;
          left: 110px;
          transform: rotate(18deg);
        }

        .team-node {
          position: absolute;
          padding: 16px 18px;
          border-radius: 18px;
          background: rgba(255,255,255,0.94);
          border: 1px solid rgba(255,255,255,0.32);
          box-shadow: 0 18px 40px rgba(17,24,39,0.20);
          z-index: 4;
        }

        .team-node strong {
          display: block;
          color: #111827;
          font-size: 16px;
          font-weight: 950;
          margin-bottom: 6px;
        }

        .team-node span {
          color: #6b7280;
          font-size: 12px;
          font-weight: 800;
        }

        .node-one {
          top: 34px;
          left: 28px;
        }

        .node-two {
          top: 60px;
          right: 36px;
        }

        .node-three {
          bottom: 130px;
          left: 42px;
        }

        .node-four {
          bottom: 100px;
          right: 50px;
        }

        .pulse-bar {
          position: absolute;
          left: 50%;
          bottom: 118px;
          transform: translateX(-50%);
          width: 72%;
          height: 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.12);
          overflow: hidden;
        }

        .pulse-fill {
          width: 92%;
          height: 100%;
          background: linear-gradient(
            90deg,
            #facc15 0%,
            #ffffff 50%,
            #a855f7 100%
          );
        }

        .hero-bottom-card {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 28px;
          padding: 18px 20px;
          border-radius: 22px;
          background: rgba(255,255,255,0.94);
          border: 1px solid rgba(255,255,255,0.28);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          z-index: 5;
        }

        .hero-bottom-card small {
          display: block;
          color: #6d28d9;
          font-size: 11px;
          font-weight: 950;
          margin-bottom: 4px;
        }

        .hero-bottom-card strong {
          color: #111827;
          font-size: 20px;
          font-weight: 950;
        }

        .hero-bottom-card span {
          color: #059669;
          font-size: 16px;
          font-weight: 950;
        }

        .quick-grid,
        .problem-grid,
        .related-grid {
          display: grid;
          gap: 16px;
          margin-bottom: 26px;
        }

        .quick-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .problem-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .related-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .quick-grid article,
        .problem-grid article,
        .related-grid a {
          background: linear-gradient(180deg, #ffffff 0%, #faf7ff 100%);
          border: 1px solid #ddd6fe;
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 14px 30px rgba(91,33,182,0.08);
          text-decoration: none;
        }

        .quick-grid span,
        .problem-grid span {
          display: block;
          color: #6d28d9;
          font-size: 12px;
          font-weight: 950;
          margin-bottom: 10px;
        }

        .quick-grid strong,
        .problem-grid strong,
        .related-grid strong {
          color: #111827;
          font-size: 20px;
          line-height: 1.2;
          font-weight: 950;
        }

        .section-heading {
          text-align: center;
          max-width: 900px;
          margin: 36px auto 26px;
        }

        .section-heading h2,
        .strategy-copy h2,
        .related-reading h2,
        .bottom-cta h2 {
          margin: 0 0 12px;
          color: #111827;
          font-size: clamp(38px, 4vw, 60px);
          line-height: 1.02;
          letter-spacing: -0.05em;
          font-weight: 950;
        }

        .section-heading p,
        .problem-grid p,
        .related-grid span {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.7;
          margin-top: 10px;
        }

        .strategy-section {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 20px;
          margin-bottom: 30px;
          border-radius: 28px;
          padding: 26px;
          background: linear-gradient(
            135deg,
            #2e1065 0%,
            #5b21b6 100%
          );
        }

        .strategy-copy h2,
        .strategy-copy p {
          color: #ffffff;
        }

        .strategy-copy p:last-child {
          color: rgba(255,255,255,0.86);
          font-size: 16px;
          line-height: 1.7;
        }

        .strategy-list {
          display: grid;
          gap: 12px;
        }

        .strategy-list div {
          background: rgba(255,255,255,0.96);
          border-radius: 16px;
          padding: 18px;
          color: #111827;
          font-size: 15px;
          font-weight: 900;
        }

        .checklist-section {
          margin-bottom: 32px;
        }

        .checklist-grid {
          display: grid;
          gap: 12px;
        }

        .checklist-grid div {
          background: #ffffff;
          border: 1px solid #ddd6fe;
          border-radius: 14px;
          padding: 16px 18px;
          color: #111827;
          font-size: 15px;
          font-weight: 800;
        }

        .related-reading {
          margin-bottom: 28px;
        }

        .bottom-cta {
          background: linear-gradient(
            135deg,
            #5b21b6 0%,
            #7c3aed 100%
          );
          border-radius: 28px;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .bottom-cta p {
          color: #facc15;
          font-size: 12px;
          font-weight: 950;
          margin: 0 0 8px;
          text-transform: uppercase;
        }

        .bottom-cta h2 {
          color: #ffffff;
        }

        .bottom-cta span {
          color: rgba(255,255,255,0.88);
          font-size: 15px;
          line-height: 1.6;
        }

        .bottom-cta a {
          background: #facc15;
          color: #111827;
          padding: 18px 22px;
          border-radius: 16px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 220px;
          box-shadow: 0 14px 28px rgba(0,0,0,0.22);
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
        }

        @media (max-width: 900px) {
          .global-page {
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
            justify-content: center;
          }

          .header-cta {
            width: 100%;
            max-width: 340px;
          }

          .hero-section,
          .quick-grid,
          .problem-grid,
          .strategy-section,
          .related-grid {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            min-height: 620px;
          }

          .hero-copy h1 {
            font-size: 54px;
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
      `}</style>
    </>
  );
}
