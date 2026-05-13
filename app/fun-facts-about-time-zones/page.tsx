/**
 * File: app/fun-facts-about-time-zones/page.tsx
 * Version: v2.0 (FUN COLORFUL TIME ZONE EXPERIENCE)
 * Date: 2026-05-13
 *
 * PURPOSE:
 * - Rebuild the Fun Facts page into a vibrant, exciting, highly visual experience
 * - Use uploaded custom image assets for premium visual presentation
 * - Create a fun educational page that feels unique from Guides and Blog
 * - Improve engagement, SEO depth, and overall AdSense content quality
 *
 * IMAGE ASSETS REQUIRED:
 * - /public/images/fun-facts/fun_facts_hero.png
 * - /public/images/fun-facts/fun_facts_cards.png
 * - /public/images/fun-facts/fun_facts_cta.png
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
 * - Revert to previous version if visual redesign does not test cleanly
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fun Facts About Time Zones | Best Meeting Time",
  description:
    "Discover strange, funny, and surprising facts about time zones around the world including skipped days, half-hour clocks, and countries using unusual time systems.",
};

export default function FunFactsAboutTimeZonesPage() {
  return (
    <main className="fun-page">
      <section className="fun-shell">
        <header className="site-header">
          <a href="/" className="brand">
            <img
              src="/images/branding/logo.png"
              alt="Best Meeting Time"
              className="brand-logo"
            />
          </a>

          <nav className="nav" aria-label="Fun facts navigation">
            <a href="/">Home</a>
            <a href="/how-it-works">Schedule a Meeting</a>
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

        <section className="hero-section">
          <div className="hero-copy">
            <p className="pill">Fun Time Zone Facts</p>

            <h1>
              Fun Facts About
              <span> Time Zones </span>
              Around the World
            </h1>

            <p>
              Time zones can be weird, surprising, and honestly pretty funny.
              From countries using 30-minute clocks to places that skipped an
              entire day, the world keeps time in some very unusual ways.
            </p>

            <div className="hero-links">
              <a href="#crazy-facts">Wild UTC offsets</a>
              <a href="#international-date-line">The Date Line</a>
              <a href="#one-country-time">One country, one clock</a>
            </div>
          </div>

          <div className="hero-image-card">
            <img
              src="/images/fun-facts/fun_facts_hero.png"
              alt="Fun cartoon world time zones illustration"
            />
          </div>
        </section>

        <section className="intro-band">
          <p className="section-pill">Buckle Up</p>

          <h2>
            Time zones can be strange, clever, and sometimes confusing...
          </h2>

          <div className="intro-grid">
            <div>
              <span>📅</span>
              <strong>Some places skip entire days!</strong>
              <p>
                Thanks to the International Date Line, traveling across the
                Pacific can literally move you forward or backward in time.
              </p>
            </div>

            <div>
              <span>🕒</span>
              <strong>The same time doesn’t mean same daylight.</strong>
              <p>
                Two cities can share the same clock time while having completely
                different sunrises and sunsets.
              </p>
            </div>

            <div>
              <span>😎</span>
              <strong>Some countries use half-hour offsets.</strong>
              <p>
                Not every place follows perfect one-hour time zone spacing.
              </p>
            </div>
          </div>
        </section>

        <section id="crazy-facts" className="cards-section">
          <div className="cards-header">
            <p className="section-pill">Fun Fact Spotlight</p>

            <h2>Wild, Weird & Wonderful Time Zone Facts</h2>

            <p>
              Some time zone rules make perfect sense. Others are completely
              unexpected.
            </p>
          </div>

          <div className="cards-image">
            <img
              src="/images/fun-facts/fun_facts_cards.png"
              alt="Colorful time zone fun facts infographic"
            />
          </div>
        </section>

        <section
          id="international-date-line"
          className="fact-highlight"
        >
          <div className="highlight-copy">
            <p className="section-pill">International Date Line</p>

            <h2>
              You can technically travel into “tomorrow” or “yesterday.”
            </h2>

            <p>
              Crossing the International Date Line changes the calendar day.
              Depending on which direction you travel, you either gain a day or
              lose one.
            </p>

            <p>
              That means two nearby islands can actually live on completely
              different dates at the same moment.
            </p>
          </div>

          <div className="date-card">
            <div>
              <strong>Yesterday</strong>
              <span>UTC-12</span>
            </div>

            <div className="center-line">
              <span>Date Line</span>
            </div>

            <div>
              <strong>Tomorrow</strong>
              <span>UTC+12</span>
            </div>
          </div>
        </section>

        <section id="one-country-time" className="fact-grid-section">
          <div className="fact-card">
            <h3>China uses one official clock.</h3>

            <p>
              Even though China spans huge geographic distances, the entire
              country follows one official national time zone.
            </p>
          </div>

          <div className="fact-card">
            <h3>India uses UTC+5:30.</h3>

            <p>
              India does not use a full-hour time zone offset. Its national time
              sits exactly 30 minutes between major UTC offsets.
            </p>
          </div>

          <div className="fact-card">
            <h3>Some places never change clocks.</h3>

            <p>
              Many countries near the equator avoid daylight saving time because
              sunrise and sunset stay more consistent year-round.
            </p>
          </div>
        </section>

        <section className="trivia-band">
          <div className="trivia-item">
            <strong>24+</strong>
            <span>Primary global time zones</span>
          </div>

          <div className="trivia-item">
            <strong>15 Min</strong>
            <span>Some unusual UTC offsets exist</span>
          </div>

          <div className="trivia-item">
            <strong>1 Day</strong>
            <span>Maximum date difference worldwide</span>
          </div>

          <div className="trivia-item">
            <strong>UTC</strong>
            <span>Global time coordination standard</span>
          </div>
        </section>
<section className="related-reading">
  <p className="section-pill">Keep Exploring</p>

  <h2>Related Scheduling & Time Zone Guides</h2>

  <div className="related-grid">
    <a href="/best-meeting-times-remote-teams">
      <strong>Remote Team Scheduling</strong>
      <span>
        Learn how global teams create fair meeting windows across countries
        and time zones.
      </span>
    </a>

    <a href="/time-zone-meeting-planner-guide">
      <strong>Meeting Planner Guide</strong>
      <span>
        See how comparing local times and overlap windows helps reduce
        scheduling confusion.
      </span>
    </a>

    <a href="/how-to-schedule-meetings-across-time-zones">
      <strong>Time Zone Basics</strong>
      <span>
        Understand UTC offsets, daylight saving time, and how world clocks
        actually work.
      </span>
    </a>
  </div>
</section>
        <section className="cta-section">
          <img
            src="/images/fun-facts/fun_facts_cta.png"
            alt="Fun colorful meeting planner call to action"
          />

          <div className="cta-overlay">
            <a href="/how-it-works#schedule-tool">
              Open the Meeting Planner
            </a>
          </div>
        </section>
      </section>

      <style>{`
        .fun-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #4c1d95 0%, #312e81 100%);
          padding: 28px 20px 70px;
        }

        .fun-shell {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          background: #ffffff;
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
          margin-bottom: 24px;
        }

        .brand-logo {
          width: 170px;
          height: auto;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .nav a {
          color: #374151;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }

        .nav .active {
          color: #5b21b6;
          border-bottom: 2px solid #5b21b6;
          padding-bottom: 6px;
        }

        .nav-cta {
          background: #5b21b6;
          color: #ffffff;
          padding: 10px 16px;
          border-radius: 10px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.15;
          box-shadow: 0 12px 24px rgba(91,33,182,0.22);
        }

        .nav-cta span {
          font-size: 13px;
          font-weight: 900;
        }

        .nav-cta small {
          font-size: 10px;
          font-weight: 800;
        }

        .hero-section {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 34px;
          align-items: center;
          padding: 22px 8px 42px;
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
        }

        .hero-copy h1 {
          color: #111827;
          font-size: clamp(46px, 5vw, 72px);
          line-height: 0.98;
          letter-spacing: -0.06em;
          font-weight: 950;
          margin: 0 0 18px;
        }

        .hero-copy h1 span {
          color: #f59e0b;
        }

        .hero-copy p {
          color: #4b5563;
          font-size: 17px;
          line-height: 1.75;
          margin: 0 0 18px;
        }

        .hero-links {
          display: grid;
          gap: 10px;
          margin-top: 28px;
        }

        .hero-links a {
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

        .hero-image-card img,
        .cards-image img,
        .cta-section img {
          width: 100%;
          display: block;
          border-radius: 24px;
        }

        .intro-band,
        .cards-section {
          border-top: 1px solid #ede9fe;
          padding: 36px 10px;
          text-align: center;
        }

        .intro-band h2,
        .cards-header h2,
        .fact-highlight h2 {
          color: #111827;
          font-size: clamp(32px, 4vw, 50px);
          line-height: 1.05;
          font-weight: 950;
          margin: 0 0 14px;
          letter-spacing: -0.04em;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 28px;
        }

        .intro-grid div,
        .fact-card {
          background: linear-gradient(180deg, #ffffff 0%, #faf5ff 100%);
          border: 1px solid #ddd6fe;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 16px 34px rgba(91,33,182,0.08);
        }

        .intro-grid span {
          font-size: 38px;
          display: block;
          margin-bottom: 12px;
        }

        .intro-grid strong,
        .fact-card h3 {
          display: block;
          color: #111827;
          font-size: 24px;
          line-height: 1.15;
          font-weight: 950;
          margin-bottom: 12px;
        }

        .intro-grid p,
        .fact-card p,
        .cards-header p,
        .highlight-copy p {
          color: #4b5563;
          font-size: 16px;
          line-height: 1.7;
        }

        .cards-image {
          margin-top: 26px;
        }

        .fact-highlight {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
          gap: 26px;
          align-items: center;
          padding: 42px 10px;
          border-top: 1px solid #ede9fe;
        }

        .date-card {
          border-radius: 24px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 140px 1fr;
          min-height: 220px;
          box-shadow: 0 18px 38px rgba(91,33,182,0.12);
        }

        .date-card div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 22px;
          text-align: center;
        }

        .date-card div:first-child {
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
          color: #ffffff;
        }

        .date-card div:last-child {
          background: linear-gradient(135deg, #7c3aed 0%, #9333ea 100%);
          color: #ffffff;
        }

        .center-line {
          background: #111827;
          color: #facc15;
        }

        .date-card strong {
          font-size: 28px;
          font-weight: 950;
        }

        .date-card span {
          font-size: 16px;
          font-weight: 900;
        }

        .fact-grid-section {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          padding: 10px 10px 40px;
        }

        .trivia-band {
          margin: 10px;
          border-radius: 24px;
          background: linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%);
          padding: 26px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          color: #ffffff;
        }

        .trivia-item {
          text-align: center;
        }

        .trivia-item strong {
          display: block;
          font-size: 34px;
          font-weight: 950;
          margin-bottom: 8px;
          color: #facc15;
        }

        .trivia-item span {
          font-size: 14px;
          line-height: 1.5;
          color: #ede9fe;
          font-weight: 700;
        }
.related-reading {
  border-top: 1px solid #ede9fe;
  padding: 46px 10px 18px;
  text-align: center;
}

.related-reading h2 {
  color: #111827;
  font-size: clamp(30px, 4vw, 46px);
  line-height: 1.08;
  font-weight: 950;
  letter-spacing: -0.04em;
  margin: 0 0 24px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.related-grid a {
  background: linear-gradient(180deg, #ffffff 0%, #faf5ff 100%);
  border: 1px solid #ddd6fe;
  border-radius: 20px;
  padding: 24px;
  text-decoration: none;
  box-shadow: 0 16px 34px rgba(91,33,182,0.08);
  text-align: left;
}

.related-grid strong {
  display: block;
  color: #111827;
  font-size: 22px;
  line-height: 1.15;
  font-weight: 950;
  margin-bottom: 12px;
}

.related-grid span {
  color: #4b5563;
  font-size: 15px;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .related-grid {
    grid-template-columns: 1fr;
  }
}
        .cta-section {
          position: relative;
          margin: 34px 10px 0;
        }

        .cta-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 34px;
          display: flex;
          justify-content: center;
        }

        .cta-overlay a {
          background: #facc15;
          color: #111827;
          text-decoration: none;
          font-size: 16px;
          font-weight: 950;
          padding: 18px 26px;
          border-radius: 14px;
          box-shadow: 0 16px 36px rgba(250,204,21,0.28);
        }

        @media (max-width: 900px) {
          .site-header {
            flex-wrap: wrap;
            justify-content: center;
          }

          .nav {
            flex-wrap: wrap;
            justify-content: center;
          }

          .hero-section,
          .fact-highlight,
          .fact-grid-section,
          .intro-grid,
          .trivia-band {
            grid-template-columns: 1fr;
          }

          .date-card {
            grid-template-columns: 1fr;
          }

          .center-line {
            min-height: 100px;
          }
        }

        @media (max-width: 560px) {
          .fun-page {
            padding: 16px 10px 50px;
          }

          .fun-shell {
            padding: 14px;
          }

          .hero-copy h1 {
            font-size: 42px;
          }

          .cta-overlay {
            position: static;
            margin-top: 18px;
          }

          .cta-overlay a {
            width: 100%;
            text-align: center;
            box-sizing: border-box;
          }
        }
      `}</style>
    </main>
  );
}
