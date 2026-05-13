/**
 * File: app/why-remote-teams-struggle-with-scheduling/page.tsx
 * Version: v1.1 (PREMIUM HERO IMAGE INTEGRATION)
 * Date: 2026-05-13
 *
 * PURPOSE:
 * - Replace the right-side hero dashboard HTML with premium uploaded image
 * - Preserve current article structure and SEO content
 * - Improve premium visual feel and reduce repetitive dark dashboard styling
 * - Keep responsive layout and current spacing behavior
 *
 * IMAGE REQUIRED:
 * /public/images/blog/blog-premium-hero-light-purple.png
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
 * - Revert to v1.0 if image integration does not test cleanly
 */

import type { Metadata } from "next";
import FooterSection from "../ui/FooterSection";

export const metadata: Metadata = {
  title: "Why Remote Teams Struggle With Scheduling",
  description:
    "Learn why remote teams struggle with scheduling across time zones, work hours, daylight saving changes, and global collaboration habits.",
};

export default function WhyRemoteTeamsStruggleWithSchedulingPage() {
  return (
    <>
      <main className="remote-struggle-page">
        <header className="site-header">
          <a href="/" className="brand-link">
            <img
              src="/images/branding/logo.png"
              alt="Best Meeting Time"
              className="brand-logo"
            />
          </a>

          <nav
            className="site-nav"
            aria-label="Remote scheduling struggles navigation"
          >
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
            <p className="eyebrow hero-eyebrow">
              Remote Work Scheduling
            </p>

            <h1>Why Remote Teams Struggle With Scheduling</h1>

            <p className="hero-text">
              Remote teams often struggle with meetings because time zones,
              work hours, daylight saving changes, and regional habits do not
              line up neatly. Better scheduling starts with understanding where
              the friction comes from.
            </p>

            <div className="hero-points">
              <div>
                <strong>Different Work Hours</strong>

                <span>
                  Remote teams may share a company, but not the same day.
                </span>
              </div>

              <div>
                <strong>Time Zone Fatigue</strong>

                <span>
                  Repeated early or late meetings reduce participation.
                </span>
              </div>

              <div>
                <strong>Poor Overlap Planning</strong>

                <span>
                  Guessing creates unfair meeting patterns over time.
                </span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/images/blog/blog-premium-hero-light-purple.png"
              alt="Remote team scheduling dashboard showing time zone planning"
            />
          </div>
        </section>

        <section className="section-block">
          <p className="eyebrow">Core Problem</p>

          <h2>
            Remote teams are distributed, but meetings often are not.
          </h2>

          <div className="content-grid">
            <article>
              <strong>One office still dominates</strong>

              <p>
                Many teams accidentally schedule around headquarters instead of
                the full distributed team.
              </p>
            </article>

            <article>
              <strong>Overlap windows are narrow</strong>

              <p>
                A global team may only have a few practical hours where everyone
                is reasonably available.
              </p>
            </article>

            <article>
              <strong>
                Daylight saving shifts create confusion
              </strong>

              <p>
                Time differences can change temporarily when regions change
                clocks on different dates.
              </p>
            </article>

            <article>
              <strong>Meeting burden is not shared</strong>

              <p>
                The same people often absorb early morning or late evening calls
                again and again.
              </p>
            </article>
          </div>
        </section>

        <section className="split-section">
          <div className="split-copy">
            <p className="eyebrow hero-eyebrow">
              Better Team Habits
            </p>

            <h2>
              Fair scheduling is a remote-work operating habit.
            </h2>

            <p>
              The goal is not to find a perfect meeting time every time. The
              goal is to avoid repeating unfair scheduling patterns that slowly
              wear down the same region, department, or teammate.
            </p>

            <p>
              Better remote teams compare local times, rotate difficult windows,
              and use async updates when live discussion is not required.
            </p>
          </div>

          <div className="habit-grid">
            <div>
              <strong>Compare cities first</strong>

              <span>
                Use local city times instead of guessing by abbreviation.
              </span>
            </div>

            <div>
              <strong>Rotate difficult calls</strong>

              <span>
                Share inconvenient timing across regions when needed.
              </span>
            </div>

            <div>
              <strong>Protect deep work</strong>

              <span>
                Avoid unnecessary meetings during early or late hours.
              </span>
            </div>

            <div>
              <strong>Use async updates</strong>

              <span>
                Not every status update needs a live meeting.
              </span>
            </div>
          </div>
        </section>

        <section className="section-block">
          <p className="eyebrow">Remote Scheduling Fixes</p>

          <h2>How remote teams can schedule better meetings</h2>

          <div className="content-grid">
            <article>
              <strong>Use city-based planning</strong>

              <p>
                Cities are clearer than time zone abbreviations and reduce
                mistakes during daylight saving changes.
              </p>
            </article>

            <article>
              <strong>
                Choose overlap, not convenience
              </strong>

              <p>
                A good meeting window should be reasonable for both sides, not
                just easy for one organizer.
              </p>
            </article>

            <article>
              <strong>Document meeting decisions</strong>

              <p>
                Clear notes help teammates who could not attend because of time
                zone limits.
              </p>
            </article>

            <article>
              <strong>Review patterns monthly</strong>

              <p>
                If one region always gets bad meeting times, adjust the team
                rhythm before frustration builds.
              </p>
            </article>
          </div>
        </section>

        <section className="related-reading">
          <p className="eyebrow">Related Reading</p>

          <h2>More guides for better global scheduling</h2>

          <div className="related-grid">
            <a href="/best-meeting-times-remote-teams">
              <strong>Remote Team Scheduling</strong>

              <span>
                Learn how to find fair overlap windows for global teams.
              </span>
            </a>

            <a href="/best-meeting-times-us-and-europe">
              <strong>US and Europe Meeting Times</strong>

              <span>
                See practical overlap windows for transatlantic teams.
              </span>
            </a>

            <a href="/best-times-to-contact-different-countries">
              <strong>Best Times to Contact Countries</strong>

              <span>
                Understand local timing etiquette across regions.
              </span>
            </a>
          </div>
        </section>

        <section className="bottom-cta">
          <div>
            <p>Plan Better Meetings</p>

            <h2>
              Compare time zones before your next remote team meeting.
            </h2>

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
        .remote-struggle-page {
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
          margin-bottom: 14px;
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
          background: linear-gradient(180deg, #180041 0%, #2e1065 100%);
          color: #ffffff;
          border-radius: 28px;
          padding: 24px;
        }

        .eyebrow {
          display: inline-flex;
          width: fit-content;
          margin: 0 0 12px;
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

        .hero-copy h1,
        .section-block h2,
        .split-copy h2,
        .related-reading h2,
        .bottom-cta h2 {
          margin: 0 0 12px;
          font-size: clamp(34px, 4vw, 52px);
          line-height: 1.04;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .hero-text {
          color: rgba(255,255,255,0.88);
          font-size: 15px;
          line-height: 1.6;
          margin: 0 0 14px;
        }

        .hero-points {
          display: grid;
          gap: 10px;
        }

        .hero-points div {
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 16px;
          padding: 13px;
        }

        .hero-points strong {
          display: block;
          font-size: 15px;
          font-weight: 950;
          margin-bottom: 5px;
        }

        .hero-points span {
          color: rgba(255,255,255,0.82);
          font-size: 13px;
          line-height: 1.45;
        }

        .hero-visual {
          border-radius: 28px;
          overflow: hidden;
          min-height: 380px;
          box-shadow: 0 20px 50px rgba(30,27,75,0.22);
        }

        .hero-visual img {
          width: 100%;
          height: 100%;
          min-height: 380px;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .section-block,
        .split-section,
        .related-reading {
          margin-bottom: 20px;
        }

        .content-grid,
        .habit-grid,
        .related-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .content-grid article,
        .habit-grid div,
        .related-grid a {
          background: linear-gradient(180deg, #ffffff 0%, #faf7ff 100%);
          border: 1px solid #ddd6fe;
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 14px 30px rgba(91,33,182,0.08);
          text-decoration: none;
          color: #111827;
        }

        .content-grid strong,
        .habit-grid strong,
        .related-grid strong {
          display: block;
          color: #111827;
          font-size: 22px;
          line-height: 1.12;
          font-weight: 950;
          margin-bottom: 10px;
        }

        .content-grid p,
        .habit-grid span,
        .related-grid span {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.65;
          margin: 0;
        }

        .split-section {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 18px;
        }

        .split-copy {
          background: linear-gradient(180deg, #312e81 0%, #5b21b6 100%);
          color: #ffffff;
          border-radius: 28px;
          padding: 24px;
        }

        .split-copy p {
          color: rgba(255,255,255,0.86);
          font-size: 15px;
          line-height: 1.7;
        }

        .bottom-cta {
          background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%);
          border-radius: 28px;
          padding: 24px;
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
          .remote-struggle-page {
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
          .split-section,
          .content-grid,
          .habit-grid,
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

        @media (max-width: 560px) {
          .remote-struggle-page {
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

          .hero-copy h1,
          .section-block h2,
          .split-copy h2,
          .related-reading h2,
          .bottom-cta h2 {
            font-size: 34px;
          }
        }
      `}</style>
    </>
  );
}
