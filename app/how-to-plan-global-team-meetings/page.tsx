/**
 * File: app/how-to-plan-global-team-meetings/page.tsx
 * Version: v1.1 (PREMIUM GLOBAL MEETINGS REDESIGN)
 * Date: 2026-05-13
 *
 * PURPOSE:
 * - Rebuild the global team meetings authority page with a unique premium layout
 * - Remove reused hero image dependency
 * - Fix washed-out typography
 * - Create a stronger Blog-ready SEO article page
 *
 * PROTECTED:
 * - No Stripe changes
 * - No payment logic
 * - No KV changes
 * - No webhook changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v1.0 if this redesign does not test cleanly
 */

import type { Metadata } from "next";
import FooterSection from "../ui/FooterSection";

export const metadata: Metadata = {
  title: "How To Plan Global Team Meetings",
  description:
    "Learn how to plan global team meetings across time zones with fair scheduling strategies, overlap planning, and remote collaboration best practices.",
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

          <nav className="site-nav" aria-label="Global team meeting navigation">
            <a href="/">Home</a>
            <a href="/how-it-works#schedule-tool">Schedule a Meeting</a>
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
            <p className="eyebrow">Global Team Scheduling</p>

            <h1>How To Plan Global Team Meetings</h1>

            <p>
              Global meetings work best when teams compare local times, protect
              working hours, rotate difficult windows, and avoid scheduling
              around one office by default.
            </p>

            <div className="hero-actions">
              <a href="/how-it-works#schedule-tool">Compare Meeting Times</a>
              <span>No sign-up required</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Global meeting planning visual">
            <div className="visual-top">
              <span>New York</span>
              <strong>9:00 AM</strong>
            </div>

            <div className="visual-top">
              <span>London</span>
              <strong>2:00 PM</strong>
            </div>

            <div className="visual-top">
              <span>Dubai</span>
              <strong>5:00 PM</strong>
            </div>

            <div className="visual-map">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="planet">GMT</div>
            </div>

            <div className="overlap-card">
              <strong>Best overlap window</strong>
              <span>2:00 PM – 3:00 PM</span>
              <p>Reasonable for most regions</p>
            </div>
          </div>
        </section>

        <section className="quick-grid">
          <article>
            <span>Core Strategy</span>
            <strong>Plan around shared overlap, not organizer convenience.</strong>
          </article>

          <article>
            <span>Team Habit</span>
            <strong>Rotate difficult meeting times across regions fairly.</strong>
          </article>

          <article>
            <span>Best Fix</span>
            <strong>Use city-based planning before sending the invite.</strong>
          </article>
        </section>

        <section className="section-heading">
          <p className="eyebrow">What Goes Wrong</p>
          <h2>Most global meeting problems come from repeat patterns.</h2>
          <p>
            A single bad meeting time is annoying. A repeated bad meeting pattern
            creates fatigue, missed context, and uneven participation.
          </p>
        </section>

        <section className="problem-grid">
          <article>
            <span>01</span>
            <strong>One office becomes the default</strong>
            <p>
              Headquarters often receives the most convenient meeting times while
              other regions absorb early or late calls.
            </p>
          </article>

          <article>
            <span>02</span>
            <strong>Overlap windows are narrow</strong>
            <p>
              Distributed teams may share just a few practical hours where live
              discussion is realistic.
            </p>
          </article>

          <article>
            <span>03</span>
            <strong>Daylight saving creates surprises</strong>
            <p>
              Regional clock changes can shift meeting comfort without anyone
              noticing until attendance drops.
            </p>
          </article>

          <article>
            <span>04</span>
            <strong>Time zone fatigue builds quietly</strong>
            <p>
              Repeated off-hour meetings reduce energy, participation, and trust
              across remote teams.
            </p>
          </article>
        </section>

        <section className="strategy-section">
          <div className="strategy-copy">
            <p className="eyebrow dark-eyebrow">Better Scheduling System</p>
            <h2>Use a repeatable process before every global meeting.</h2>
            <p>
              The goal is not a perfect time every time. The goal is a fair,
              predictable scheduling habit that respects the full team.
            </p>
          </div>

          <div className="strategy-list">
            <div>Start with each participant’s local city time.</div>
            <div>Check reasonable working-hour overlap.</div>
            <div>Rotate difficult calls when overlap is poor.</div>
            <div>Use async notes when live discussion is unnecessary.</div>
          </div>
        </section>

        <section className="related-reading">
          <p className="eyebrow">Related Reading</p>
          <h2>More guides for better global scheduling</h2>

          <div className="related-grid">
            <a href="/why-remote-teams-struggle-with-scheduling">
              <strong>Why Remote Teams Struggle With Scheduling</strong>
              <span>Understand the patterns that make remote scheduling hard.</span>
            </a>

            <a href="/best-meeting-times-us-and-europe">
              <strong>Best Meeting Times Between the US and Europe</strong>
              <span>Find better overlap windows for transatlantic teams.</span>
            </a>

            <a href="/best-times-to-contact-different-countries">
              <strong>Best Times To Contact Different Countries</strong>
              <span>Plan contact timing across regions with more confidence.</span>
            </a>
          </div>
        </section>

        <section className="bottom-cta">
          <div>
            <p>Plan Better Global Meetings</p>
            <h2>Compare time zones before sending the invite.</h2>
            <span>
              Use Best Meeting Time to compare cities, working hours, and
              overlap windows before scheduling.
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
          grid-template-columns: 0.94fr 1.06fr;
          gap: 18px;
          margin-bottom: 18px;
        }

        .hero-copy {
          border-radius: 28px;
          padding: 34px;
          background: linear-gradient(180deg, #ffffff 0%, #f7f3ff 100%);
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

        .dark-eyebrow {
          background: rgba(255,255,255,0.14);
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.22);
        }

        .hero-copy h1 {
          margin: 0 0 16px;
          color: #111827 !important;
          font-size: clamp(46px, 5vw, 72px);
          line-height: 0.94;
          letter-spacing: -0.06em;
          font-weight: 950;
        }

        .hero-copy p {
          color: #4b5563;
          font-size: 17px;
          line-height: 1.72;
          margin: 0;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
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
          min-height: 430px;
          border-radius: 28px;
          padding: 22px;
          background:
            radial-gradient(circle at 72% 18%, rgba(250,204,21,0.32), transparent 24%),
            radial-gradient(circle at 24% 78%, rgba(255,255,255,0.36), transparent 28%),
            linear-gradient(135deg, #6d28d9 0%, #2563eb 52%, #a78bfa 100%);
          box-shadow: 0 20px 50px rgba(30,27,75,0.22);
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          position: relative;
          overflow: hidden;
        }

        .visual-top,
        .overlap-card {
          background: rgba(255,255,255,0.94);
          border: 1px solid rgba(255,255,255,0.5);
          border-radius: 18px;
          padding: 16px;
          box-shadow: 0 16px 34px rgba(30,27,75,0.16);
          z-index: 2;
        }

        .visual-top span {
          display: block;
          color: #5b21b6;
          font-size: 12px;
          font-weight: 950;
          margin-bottom: 6px;
        }

        .visual-top strong {
          color: #111827;
          font-size: 24px;
          font-weight: 950;
        }

        .visual-map {
          grid-column: 1 / 4;
          min-height: 190px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .planet {
          width: 132px;
          height: 132px;
          border-radius: 999px;
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.34);
          color: #ffffff;
          font-size: 28px;
          font-weight: 950;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 24px 70px rgba(17,24,39,0.22);
          z-index: 2;
        }

        .orbit {
          position: absolute;
          border: 2px dashed rgba(255,255,255,0.48);
          border-radius: 999px;
        }

        .orbit-one {
          width: 360px;
          height: 120px;
          transform: rotate(-13deg);
        }

        .orbit-two {
          width: 440px;
          height: 150px;
          transform: rotate(18deg);
        }

        .overlap-card {
          grid-column: 1 / 4;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 8px 18px;
        }

        .overlap-card strong {
          color: #111827;
          font-size: 18px;
          font-weight: 950;
        }

        .overlap-card span {
          color: #f59e0b;
          font-size: 18px;
          font-weight: 950;
        }

        .overlap-card p {
          grid-column: 1 / 3;
          color: #4b5563;
          margin: 0;
          font-size: 14px;
          font-weight: 700;
        }

        .quick-grid,
        .problem-grid,
        .related-grid {
          display: grid;
          gap: 16px;
          margin-bottom: 24px;
        }

        .quick-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .problem-grid,
        .related-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .quick-grid article,
        .problem-grid article,
        .related-grid a {
          background: linear-gradient(180deg, #ffffff 0%, #faf7ff 100%);
          border: 1px solid #ddd6fe;
          border-radius: 22px;
          padding: 22px;
          text-decoration: none;
          box-shadow: 0 14px 30px rgba(91,33,182,0.08);
        }

        .quick-grid span,
        .problem-grid span {
          display: block;
          color: #6d28d9;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .quick-grid strong,
        .problem-grid strong,
        .related-grid strong {
          color: #111827 !important;
          font-size: 19px;
          line-height: 1.2;
          font-weight: 950;
        }

        .section-heading {
          text-align: center;
          max-width: 850px;
          margin: 34px auto 24px;
        }

        .section-heading h2,
        .strategy-copy h2,
        .related-reading h2,
        .bottom-cta h2 {
          margin: 0 0 12px;
          color: #111827;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.04;
          letter-spacing: -0.04em;
          font-weight: 950;
        }

        .section-heading p,
        .problem-grid p,
        .related-grid span {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.65;
          margin: 10px 0 0;
        }

        .strategy-section {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 18px;
          margin-bottom: 28px;
          border-radius: 28px;
          padding: 24px;
          background: linear-gradient(135deg, #2e1065 0%, #5b21b6 100%);
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
          padding: 17px;
          color: #111827;
          font-size: 15px;
          font-weight: 900;
        }

        .related-reading {
          margin-bottom: 24px;
        }

        .related-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .bottom-cta {
          background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%);
          border-radius: 28px;
          padding: 26px;
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
          padding: 16px 22px;
          border-radius: 14px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
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
