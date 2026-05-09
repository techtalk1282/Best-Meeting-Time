// FILE: app/time-zone-meeting-planner-guide/page.tsx
// VERSION: v2.0
// PURPOSE: Rebuild planner guide into premium white/purple guide ecosystem
// ROLLBACK: Revert to v1.0 if needed. No Stripe/payment/protected logic touched.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time Zone Meeting Planner Guide | Best Meeting Time",
  description:
    "Learn how a time zone meeting planner helps compare cities, find overlapping working hours, avoid bad meeting times, and schedule across global teams.",
};

export default function TimeZoneMeetingPlannerGuidePage() {
  return (
    <main className="planner-page">
      <section className="planner-shell">
        <header className="site-header">
          <a href="/" className="brand">
            <span className="brand-icon">⌘</span>
            <span>Best Meeting Time</span>
          </a>

          <nav className="nav" aria-label="Meeting planner guide navigation">
            <a href="/">Home</a>
            <a href="/how-it-works">How It Works</a>
            <a href="/features">Features</a>
            <a href="/guides">Guides</a>
            <a href="/blog" className="active">Blog</a>
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
            <p className="pill">Meeting Planner Guide</p>

            <h1>Time Zone Meeting Planner Guide</h1>

            <p className="hero-text">
              A time zone meeting planner helps you compare cities, find
              overlapping working hours, and choose a meeting time that works
              for people in different locations.
            </p>

            <div className="hero-promises">
              <a href="#what-it-does">What a meeting planner does</a>
              <a href="#how-to-use">How to use it effectively</a>
              <a href="#overlap-example">How overlap windows work</a>
            </div>
          </div>

          <div className="hero-image-card">
            <img
              src="/images/guides/meeting_planner_hero.png"
              alt="Time zone meeting planner with global city times and best meeting window"
            />
          </div>
        </section>

        <section className="intro-section">
          <p className="section-pill">Why it matters</p>

          <h2>A meeting planner turns time zone confusion into clear choices.</h2>

          <p>
            Global scheduling gets difficult when every participant is looking at
            a different clock. A planner makes the comparison visible so teams
            can avoid late-night meetings, protect work hours, and send invites
            with more confidence.
          </p>
        </section>

        <section id="what-it-does" className="feature-section">
          <div className="feature-copy">
            <p className="section-pill">Question 1</p>

            <h2>What is a time zone meeting planner?</h2>

            <p>
              A time zone meeting planner is a scheduling tool that compares
              local times across multiple cities or time zones. Instead of
              manually converting hours, you can quickly see which meeting
              windows are convenient, difficult, or unfair for each person.
            </p>

            <p>
              The best planners show more than a clock conversion. They help
              reveal overlap windows, business-hour conflicts, daylight saving
              changes, and local-time details that make scheduling easier.
            </p>

            <p>
              For remote teams, clients, freelancers, and global partners, this
              prevents confusion before the meeting invite is sent.
            </p>
          </div>

          <div className="section-image-card">
            <img
              src="/images/guides/meeting_planner_features.png"
              alt="Meeting planner features showing global awareness, collaboration, time savings, and planning workflow"
            />
          </div>
        </section>

        <section id="how-to-use" className="steps-section">
          <p className="section-pill">How to use it</p>

          <h2>Use a planner before the invite goes out.</h2>

          <div className="steps-grid">
            <div>
              <span>01</span>
              <strong>Add each location</strong>
              <p>Enter each participant’s city or time zone before choosing a time.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Compare local hours</strong>
              <p>Check whether the proposed time lands inside normal working hours.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Find overlap</strong>
              <p>Look for a window that works reasonably well for everyone.</p>
            </div>

            <div>
              <span>04</span>
              <strong>Confirm local time</strong>
              <p>Send the invite with the correct time zone details included.</p>
            </div>
          </div>
        </section>

        <section id="overlap-example" className="feature-section reverse">
          <div className="section-image-card">
            <img
              src="/images/guides/meeting_overlap_dashboard.png"
              alt="Dashboard showing recommended meeting overlap windows across New York, London, Tokyo, and Sydney"
            />
          </div>

          <div className="feature-copy">
            <p className="section-pill">Example overlap</p>

            <h2>How do recommended meeting windows work?</h2>

            <p>
              A good meeting window balances the local time for each participant.
              For example, a New York morning meeting may work well for London,
              but it may be late evening in Tokyo or Sydney.
            </p>

            <p>
              A planner helps you spot that tradeoff before someone receives a
              bad invite. Instead of guessing, you can compare the cities side by
              side and choose the least disruptive option.
            </p>

            <p>
              When no perfect time exists, rotate meeting times so the same
              region does not always carry the inconvenience.
            </p>
          </div>
        </section>

        <section className="mistakes-section">
          <p className="section-pill">Common planning mistakes</p>

          <h2>Most bad meeting times happen before anyone checks the overlap.</h2>

          <div className="mistake-grid">
            <div>
              <strong>Guessing from memory</strong>
              <p>Time differences change with daylight saving time and location.</p>
            </div>

            <div>
              <strong>Using one city only</strong>
              <p>A meeting that works for one person may be terrible for another.</p>
            </div>

            <div>
              <strong>Forgetting local context</strong>
              <p>Work hours, weekends, holidays, and commute times can matter.</p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <p className="section-pill">Quick answers</p>

          <h2>Time Zone Meeting Planner FAQ</h2>

          <div className="faq-grid">
            <div>
              <h3>What does a meeting planner compare?</h3>
              <p>
                It compares cities, local times, time zones, and overlapping
                working windows so you can choose a better meeting time.
              </p>
            </div>

            <div>
              <h3>Why not just convert the time manually?</h3>
              <p>
                Manual conversion is easy to get wrong when multiple cities,
                daylight saving time, or changing schedules are involved.
              </p>
            </div>

            <div>
              <h3>What is a good global meeting time?</h3>
              <p>
                A good time usually lands inside normal working hours for most
                participants and avoids very early or very late local times.
              </p>
            </div>
          </div>
        </section>

        <section className="planner-cta">
          <div>
            <p className="section-pill gold-pill">Plan faster</p>

            <h2>Find a better meeting time before you send the invite.</h2>

            <p>
              Use Best Meeting Time to compare cities, review overlap windows,
              and schedule global meetings with less confusion.
            </p>
          </div>

          <a href="/how-it-works#schedule-tool">
            <span>Open the Meeting Planner</span>
            <small>Free to try — no sign-up</small>
          </a>
        </section>
      </section>

      <style>{`
        .planner-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #4c1d95 0%, #312e81 100%);
          padding: 30px 20px 70px;
        }

        .planner-shell {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          background: #ffffff;
          color: #111827;
          border: 1px solid rgba(237,233,254,0.9);
          box-shadow: 0 24px 70px rgba(30,27,75,0.18);
          padding: 18px 18px 42px;
        }

        .site-header {
          min-height: 66px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border-bottom: 1px solid #ede9fe;
          margin-bottom: 26px;
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
        .nav-cta small { font-size: 10px; font-weight: 800; }

        .hero {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 38px;
          align-items: center;
          padding: 22px 10px 40px;
        }

        .pill,
        .section-pill {
          display: inline-block;
          margin: 0 0 14px;
          padding: 7px 13px;
          border-radius: 999px;
          background: #f3efff;
          color: #5b21b6;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .hero h1 {
          color: #111827;
          font-size: clamp(44px, 5vw, 64px);
          line-height: 1.02;
          letter-spacing: -0.055em;
          font-weight: 950;
          margin: 0 0 18px;
        }

        .hero-text,
        .feature-copy p,
        .intro-section p,
        .planner-cta p {
          color: #4b5563;
          font-size: 16px;
          line-height: 1.72;
          margin: 0 0 14px;
        }

        .hero-promises {
          display: grid;
          gap: 10px;
          margin-top: 24px;
        }

        .hero-promises a {
          background: #faf9ff;
          border: 1px solid #ddd6fe;
          border-radius: 14px;
          padding: 13px 15px;
          color: #4c1d95;
          font-size: 15px;
          font-weight: 900;
          text-decoration: none;
          box-shadow: 0 10px 24px rgba(91,33,182,0.08);
        }

        .hero-image-card,
        .section-image-card {
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid #ddd6fe;
          box-shadow: 0 24px 60px rgba(30,27,75,0.14);
          background: #ffffff;
        }

        .hero-image-card img,
        .section-image-card img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .intro-section,
        .steps-section,
        .mistakes-section,
        .faq-section {
          border-top: 1px solid #ede9fe;
          padding: 34px 10px;
          text-align: center;
        }

        .intro-section h2,
        .steps-section h2,
        .feature-copy h2,
        .mistakes-section h2,
        .faq-section h2,
        .planner-cta h2 {
          color: #111827;
          font-size: clamp(30px, 3vw, 42px);
          line-height: 1.08;
          letter-spacing: -0.04em;
          font-weight: 950;
          margin: 0 0 16px;
        }

        .intro-section p {
          max-width: 780px;
          margin-left: auto;
          margin-right: auto;
        }

        .feature-section {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 32px;
          align-items: center;
          padding: 38px 10px;
          scroll-margin-top: 30px;
          border-top: 1px solid #ede9fe;
        }

        .steps-grid,
        .mistake-grid,
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 24px;
          text-align: left;
        }

        .steps-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .steps-grid div,
        .mistake-grid div,
        .faq-grid div {
          background: linear-gradient(180deg, #ffffff 0%, #f8f5ff 100%);
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          padding: 22px;
          color: #111827;
          box-shadow: 0 16px 34px rgba(91,33,182,0.08);
        }

        .steps-grid span {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: #7c3aed;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 950;
          margin-bottom: 14px;
        }

        .steps-grid strong,
        .mistake-grid strong,
        .faq-grid h3 {
          display: block;
          color: #111827;
          font-size: 20px;
          line-height: 1.18;
          font-weight: 950;
          margin: 0 0 10px;
        }

        .steps-grid p,
        .mistake-grid p,
        .faq-grid p {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.65;
          margin: 0;
        }

        .planner-cta {
          margin: 28px 10px 0;
          border-radius: 20px;
          background: linear-gradient(135deg, #312e81 0%, #6d28d9 100%);
          padding: 30px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: center;
          color: #ffffff;
          box-shadow: 0 20px 48px rgba(49,46,129,0.22);
        }

        .gold-pill {
          background: rgba(250,204,21,0.16);
          color: #facc15;
        }

        .planner-cta h2,
        .planner-cta p {
          color: #ffffff;
        }

        .planner-cta a {
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

        .planner-cta a span { font-size: 14px; }
        .planner-cta a small { font-size: 11px; font-weight: 800; }

        @media (max-width: 900px) {
          .site-header {
            flex-wrap: wrap;
            justify-content: center;
          }

          .nav {
            flex-wrap: wrap;
          }

          .hero,
          .feature-section,
          .planner-cta {
            grid-template-columns: 1fr;
          }

          .steps-grid,
          .mistake-grid,
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .planner-page {
            padding: 16px 10px 50px;
          }

          .planner-shell {
            padding: 14px;
          }

          .hero h1 {
            font-size: 38px;
          }

          .planner-cta a {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
