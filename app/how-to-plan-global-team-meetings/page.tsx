/**
 * File: app/how-to-plan-global-team-meetings/page.tsx
 * Version: v3.0 (GLOBAL RESPONSE COORDINATION HERO REDESIGN)
 * Date: 2026-05-13
 *
 * PURPOSE:
 * - Replace repetitive time-zone dashboard visuals with a unique global response coordination theme
 * - Use the uploaded daylight emergency-response coordination image as the hero visual
 * - Make the page feel more dynamic, human, global, and story-driven
 * - Preserve SEO authority content and scheduling-tool CTA behavior
 *
 * IMAGE REQUIRED:
 * /public/images/guides/global-response-coordination-hero.png
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 * - No premium/payment logic changes
 *
 * ROLLBACK:
 * - Revert to v2.0 if this redesign does not test cleanly
 */

import type { Metadata } from "next";
import FooterSection from "../ui/FooterSection";

export const metadata: Metadata = {
  title: "How To Plan Global Team Meetings",
  description:
    "Learn how to plan global team meetings across time zones, working hours, regions, and remote collaboration schedules.",
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
            <p className="eyebrow">Global Coordination Guide</p>

            <h1>Global Coordination Starts With Better Timing</h1>

            <p className="hero-description">
              Whether a team is planning a product launch, a client meeting, a
              live event, or an urgent response, global coordination depends on
              knowing when people are actually available across regions.
            </p>

            <div className="hero-actions">
              <a href="/how-it-works#schedule-tool">Compare Meeting Times</a>
              <span>No sign-up required</span>
            </div>
          </div>

          <div className="hero-image-card">
            <img
              src="/images/guides/global-response-coordination-hero.png"
              alt="Global response teams coordinating across regions with a shared information board"
            />
          </div>
        </section>

        <section className="status-grid">
          <article>
            <span>Active Regions</span>
            <strong>North America • Europe • Asia-Pacific</strong>
          </article>

          <article>
            <span>Coordination Goal</span>
            <strong>Keep teams aligned before delays begin.</strong>
          </article>

          <article>
            <span>Planning Rule</span>
            <strong>Choose overlap windows that are fair, not just convenient.</strong>
          </article>
        </section>

        <section className="section-heading">
          <p className="eyebrow centered-eyebrow">What Goes Wrong</p>

          <h2>Most global meeting problems come from repeat patterns.</h2>

          <p>
            Teams usually do not struggle because people are careless. They
            struggle because working hours, daylight saving changes, regional
            habits, and communication expectations are not aligned.
          </p>
        </section>

        <section className="problem-grid">
          <article>
            <span>01</span>
            <strong>One region becomes the default</strong>
            <p>
              Teams often schedule around headquarters, even when other regions
              absorb the early or late meeting burden.
            </p>
          </article>

          <article>
            <span>02</span>
            <strong>Overlap windows are smaller than they look</strong>
            <p>
              A calendar may show availability, but the time may still be too
              early, too late, or unreasonable for part of the team.
            </p>
          </article>

          <article>
            <span>03</span>
            <strong>Daylight saving changes create confusion</strong>
            <p>
              Time differences can shift temporarily when regions change clocks
              on different dates.
            </p>
          </article>

          <article>
            <span>04</span>
            <strong>Meeting fatigue builds quietly</strong>
            <p>
              Repeated off-hour meetings slowly reduce energy, participation,
              and trust across global teams.
            </p>
          </article>
        </section>

        <section className="feature-band">
          <div className="feature-copy">
            <p className="eyebrow dark-eyebrow">Better Scheduling System</p>

            <h2>Use a repeatable process before every global meeting.</h2>

            <p>
              The goal is not to find a perfect meeting time every time. The
              goal is to make fair, predictable scheduling decisions that reduce
              confusion and protect participation.
            </p>
          </div>

          <div className="feature-list">
            <div>
              <strong>Start with local time</strong>
              <span>Check every participant’s city before sending the invite.</span>
            </div>

            <div>
              <strong>Confirm the burden</strong>
              <span>Look for who gets the early or late meeting slot.</span>
            </div>

            <div>
              <strong>Rotate tough windows</strong>
              <span>Share difficult meeting times when overlap is limited.</span>
            </div>

            <div>
              <strong>Use async when possible</strong>
              <span>Save live meetings for decisions that truly need discussion.</span>
            </div>
          </div>
        </section>

        <section className="checklist-section">
          <p className="eyebrow">Quick Checklist</p>

          <h2>Before sending a global meeting invite, check these items.</h2>

          <div className="checklist-grid">
            <div>Check each participant’s local city time.</div>
            <div>Confirm the meeting is not extremely early or late.</div>
            <div>Review daylight saving differences between regions.</div>
            <div>Rotate difficult time slots across regions when needed.</div>
            <div>Use notes or async updates when live discussion is unnecessary.</div>
          </div>
        </section>

        <section className="related-reading">
          <p className="eyebrow">Related Reading</p>

          <h2>More guides for better global scheduling</h2>

          <div className="related-grid">
            <a href="/why-remote-teams-struggle-with-scheduling">
              <strong>Why Remote Teams Struggle With Scheduling</strong>
              <span>Understand the patterns behind remote scheduling problems.</span>
            </a>

            <a href="/best-meeting-times-us-and-europe">
              <strong>Best Meeting Times Between the US and Europe</strong>
              <span>See practical overlap windows for transatlantic teams.</span>
            </a>

            <a href="/best-times-to-contact-different-countries">
              <strong>Best Times To Contact Different Countries</strong>
              <span>Understand timing etiquette across regions.</span>
            </a>
          </div>
        </section>

        <section className="bottom-cta">
          <div>
            <p>Plan Better Global Meetings</p>

            <h2>Compare time zones before your next team meeting.</h2>

            <span>
              Use Best Meeting Time to review local times, overlap windows, and
              better meeting options before sending the invite.
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
          grid-template-columns: 0.9fr 1.1fr;
          gap: 18px;
          margin-bottom: 18px;
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
          background: rgba(255,255,255,0.14);
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.24);
        }

        .hero-copy h1 {
          margin: 0 0 18px;
          color: #111827;
          font-size: clamp(50px, 5vw, 76px);
          line-height: 0.96;
          letter-spacing: -0.06em;
          font-weight: 950;
        }

        .hero-description {
          color: #4b5563;
          font-size: 18px;
          line-height: 1.72;
          margin: 0;
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

        .hero-image-card {
          min-height: 500px;
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid #ddd6fe;
          box-shadow: 0 24px 60px rgba(30,27,75,0.20);
          background: #f5f3ff;
        }

        .hero-image-card img {
          width: 100%;
          height: 100%;
          min-height: 500px;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .status-grid,
        .problem-grid,
        .related-grid {
          display: grid;
          gap: 16px;
          margin-bottom: 28px;
        }

        .status-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .problem-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .related-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .status-grid article,
        .problem-grid article,
        .related-grid a {
          background: linear-gradient(180deg, #ffffff 0%, #faf7ff 100%);
          border: 1px solid #ddd6fe;
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 14px 30px rgba(91,33,182,0.08);
          text-decoration: none;
        }

        .status-grid span,
        .problem-grid span {
          display: block;
          color: #6d28d9;
          font-size: 12px;
          font-weight: 950;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .status-grid strong,
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
          margin: 34px auto 26px;
        }

        .section-heading h2,
        .checklist-section h2,
        .related-reading h2,
        .bottom-cta h2 {
          margin: 0 0 12px;
          color: #111827;
          font-size: clamp(36px, 4vw, 56px);
          line-height: 1.04;
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

        .feature-band {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 20px;
          margin-bottom: 30px;
          border-radius: 28px;
          padding: 26px;
          background: linear-gradient(135deg, #2e1065 0%, #5b21b6 100%);
        }

        .feature-copy h2 {
          margin: 0 0 14px;
          color: #ffffff;
          font-size: clamp(38px, 4vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.05em;
          font-weight: 950;
        }

        .feature-copy p:last-child {
          color: rgba(255,255,255,0.88);
          font-size: 16px;
          line-height: 1.7;
          margin: 0;
        }

        .feature-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .feature-list div {
          background: rgba(255,255,255,0.96);
          border-radius: 18px;
          padding: 18px;
        }

        .feature-list strong {
          display: block;
          color: #111827;
          font-size: 18px;
          font-weight: 950;
          margin-bottom: 8px;
        }

        .feature-list span {
          color: #4b5563;
          font-size: 14px;
          line-height: 1.55;
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
          background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%);
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
          .status-grid,
          .problem-grid,
          .feature-band,
          .related-grid {
            grid-template-columns: 1fr;
          }

          .hero-copy h1 {
            font-size: 48px;
          }

          .hero-image-card,
          .hero-image-card img {
            min-height: 420px;
          }

          .feature-list {
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

        @media (max-width: 560px) {
          .global-page {
            max-width: calc(100% - 20px);
            padding: 14px;
          }

          .brand-logo {
            width: 155px;
          }

          .site-nav {
            gap: 10px 14px;
          }

          .site-nav a {
            font-size: 12px;
          }

          .hero-copy {
            padding: 26px;
          }

          .hero-copy h1,
          .section-heading h2,
          .feature-copy h2,
          .checklist-section h2,
          .related-reading h2,
          .bottom-cta h2 {
            font-size: 34px;
          }

          .hero-description {
            font-size: 16px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-actions a {
            text-align: center;
          }

          .hero-image-card,
          .hero-image-card img {
            min-height: 320px;
          }
        }
      `}</style>
    </>
  );
}
