/**
 * File: app/fun-facts-about-time-zones/page.tsx
 * Version: v1.0 (FUN TIME ZONE FACTS BLOG ARTICLE)
 * Date: 2026-05-13
 *
 * PURPOSE:
 * - Create a lively, visually engaging blog article about unusual time zone facts
 * - Diversify blog content beyond meeting/planner overlap articles
 * - Add fun, educational, AdSense-friendly content depth
 * - Preserve the premium Best Meeting Time white/purple design ecosystem
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Delete this page route if it does not test cleanly
 */

import type { Metadata } from "next";
import FooterSection from "../ui/FooterSection";

export const metadata: Metadata = {
  title: "Fun Facts About Time Zones Around the World | Best Meeting Time",
  description:
    "Discover fun facts about time zones, unusual UTC offsets, the International Date Line, China’s single time zone, Samoa skipping a day, and more surprising global time stories.",
};

export default function FunFactsAboutTimeZonesPage() {
  return (
    <>
      <main className="facts-page">
        <section className="facts-shell">
          <header className="site-header">
            <a href="/" className="brand" aria-label="Best Meeting Time home">
              <img
                src="/images/branding/logo.png"
                alt="Best Meeting Time"
                className="brand-logo"
              />
            </a>

            <nav className="nav" aria-label="Fun facts article navigation">
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

          <section className="hero">
            <div className="hero-copy">
              <p className="pill">Time Zone Curiosities</p>

              <h1>Fun Facts About Time Zones Around the World</h1>

              <p className="hero-text">
                Time zones are not as simple as adding or subtracting hours.
                Around the world, some places use 30-minute clocks, some use
                45-minute offsets, and a few locations can feel like they are
                living almost a full day apart.
              </p>

              <div className="hero-jump-grid">
                <a href="#weird-offsets">Weird UTC offsets</a>
                <a href="#date-line">The Date Line</a>
                <a href="#single-time-zone">One-zone countries</a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="orbit-card main-orbit">
                <span>UTC+5:45</span>
                <strong>Nepal</strong>
                <p>A clock offset that surprises many travelers.</p>
              </div>

              <div className="orbit-card second-orbit">
                <span>UTC+12:45</span>
                <strong>Chatham Islands</strong>
                <p>A 45-minute offset in the Pacific.</p>
              </div>

              <div className="orbit-card third-orbit">
                <span>One Zone</span>
                <strong>China</strong>
                <p>A huge country using one official time zone.</p>
              </div>

              <div className="world-orb">
                <div className="orb-line one" />
                <div className="orb-line two" />
                <div className="orb-line three" />
                <div className="orb-core">World Time</div>
              </div>
            </div>
          </section>

          <section className="quick-facts">
            <p className="section-pill">Quick surprises</p>

            <h2>Time zones can be strange, clever, and sometimes confusing.</h2>

            <div className="quick-grid">
              <div>
                <strong>Not every time zone changes by one hour.</strong>
                <p>
                  Some places use 30-minute or 45-minute offsets instead of neat
                  whole-hour differences.
                </p>
              </div>

              <div>
                <strong>The date can change in the middle of the ocean.</strong>
                <p>
                  The International Date Line helps separate one calendar day
                  from the next.
                </p>
              </div>

              <div>
                <strong>Large countries do not always use many time zones.</strong>
                <p>
                  Some countries choose one official time zone for simplicity,
                  even across wide land areas.
                </p>
              </div>
            </div>
          </section>

          <section id="weird-offsets" className="feature-section">
            <div className="feature-copy">
              <p className="section-pill">Unusual clocks</p>

              <h2>Some places do not follow neat one-hour time zone jumps.</h2>

              <p>
                Most people expect time zones to move in one-hour steps, but
                global time is not that tidy. Some countries and regions use
                half-hour or quarter-hour offsets because of geography, history,
                politics, or local preference.
              </p>

              <p>
                Nepal is one of the most famous examples because it uses
                UTC+5:45. That means it is offset by five hours and forty-five
                minutes from Coordinated Universal Time.
              </p>

              <p>
                The Chatham Islands use UTC+12:45, making them another memorable
                example of a time zone that does not land on a standard hour.
              </p>
            </div>

            <div className="fact-stack">
              <div>
                <span>UTC+5:45</span>
                <strong>Nepal</strong>
                <p>A 45-minute difference that makes global scheduling more interesting.</p>
              </div>

              <div>
                <span>UTC+9:30</span>
                <strong>Central Australia</strong>
                <p>Some parts of Australia use a half-hour offset.</p>
              </div>

              <div>
                <span>UTC+12:45</span>
                <strong>Chatham Islands</strong>
                <p>A rare 45-minute offset far out in the Pacific.</p>
              </div>
            </div>
          </section>

          <section id="date-line" className="date-line-section">
            <div>
              <p className="section-pill">Calendar twist</p>

              <h2>The International Date Line can make nearby places live on different dates.</h2>

              <p>
                The International Date Line is an imaginary line in the Pacific
                Ocean. Cross it in one direction and the calendar moves forward.
                Cross it the other direction and the calendar moves back.
              </p>

              <p>
                One of the most interesting examples is the Diomede Islands:
                Big Diomede and Little Diomede sit close to each other, but the
                Date Line separates them. They are often described as being
                almost a day apart.
              </p>
            </div>

            <div className="date-card">
              <span>Yesterday</span>
              <strong>International Date Line</strong>
              <span>Tomorrow</span>
            </div>
          </section>

          <section id="single-time-zone" className="feature-section reverse">
            <div className="country-card">
              <p className="section-pill">One official clock</p>

              <h2>China uses one official time zone across the entire country.</h2>

              <p>
                China is geographically wide enough that several time zones
                could make sense, but the country uses one official time zone:
                Beijing Time.
              </p>

              <p>
                That means sunrise, work schedules, and local daily rhythms can
                feel very different depending on where someone lives within the
                country.
              </p>
            </div>

            <div className="timeline-card">
              <div>
                <strong>West</strong>
                <span>Sunrise can feel later</span>
              </div>

              <div>
                <strong>Beijing Time</strong>
                <span>One official national standard</span>
              </div>

              <div>
                <strong>East</strong>
                <span>Daily rhythms feel different</span>
              </div>
            </div>
          </section>

          <section className="story-section">
            <p className="section-pill">Strange time story</p>

            <h2>Samoa skipped an entire calendar day.</h2>

            <p>
              In 2011, Samoa shifted west of the International Date Line. As a
              result, the country skipped Friday, December 30, 2011, and moved
              directly to Saturday, December 31.
            </p>

            <p>
              The change helped Samoa align its calendar more closely with key
              trading partners in Australia and New Zealand. It is one of the
              most memorable examples of how time zones can affect business,
              travel, and daily life.
            </p>
          </section>

          <section className="more-facts">
            <p className="section-pill">More fun facts</p>

            <h2>Other time zone details that surprise people</h2>

            <div className="more-grid">
              <div>
                <strong>UTC keeps global systems organized.</strong>
                <p>
                  Aviation, software systems, weather data, and international
                  coordination often rely on UTC as a shared reference.
                </p>
              </div>

              <div>
                <strong>Daylight saving dates are not universal.</strong>
                <p>
                  Some places change clocks, some do not, and the change dates
                  can vary by country.
                </p>
              </div>

              <div>
                <strong>City names are clearer than abbreviations.</strong>
                <p>
                  Time zone abbreviations can be confusing. City-based scheduling
                  is usually easier for real people.
                </p>
              </div>

              <div>
                <strong>Remote teams feel time zones every week.</strong>
                <p>
                  A fun fact becomes a real problem when one person gets a
                  perfect meeting time and another gets midnight.
                </p>
              </div>
            </div>
          </section>

          <section className="planner-cta">
            <div>
              <p className="section-pill gold-pill">Turn trivia into better planning</p>

              <h2>Time zones are fun until they break your meeting schedule.</h2>

              <p>
                Use Best Meeting Time to compare cities, review local times, and
                choose better meeting windows before the invite goes out.
              </p>
            </div>

            <a href="/how-it-works#schedule-tool">
              <span>Schedule a Meeting</span>
              <small>Free to try — no sign-up</small>
            </a>
          </section>
        </section>
      </main>

      <FooterSection />

      <style>{`
        .facts-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #4c1d95 0%, #312e81 100%);
          padding: 30px 20px 70px;
        }

        .facts-shell {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          background: #ffffff;
          color: #111827;
          border: 1px solid rgba(237,233,254,0.9);
          box-shadow: 0 24px 70px rgba(30,27,75,0.18);
          padding: 18px 18px 42px;
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
          width: 170px;
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
          justify-content: center;
          line-height: 1.18;
          min-width: 154px;
          box-shadow: 0 10px 22px rgba(91,33,182,0.22);
        }

        .nav-cta span {
          font-size: 13px;
          font-weight: 900;
        }

        .nav-cta small {
          font-size: 10px;
          font-weight: 800;
          color: #ffffff;
          opacity: 0.92;
        }

        .hero {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
          gap: 30px;
          align-items: center;
          padding: 24px 10px 38px;
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
          letter-spacing: 0.03em;
        }

        .hero h1 {
          color: #111827;
          font-size: clamp(42px, 5vw, 62px);
          line-height: 1.02;
          letter-spacing: -0.055em;
          font-weight: 950;
          margin: 0 0 18px;
        }

        .hero-text,
        .feature-copy p,
        .date-line-section p,
        .country-card p,
        .story-section p,
        .planner-cta p {
          color: #4b5563;
          font-size: 16px;
          line-height: 1.72;
          margin: 0 0 14px;
        }

        .hero-jump-grid {
          display: grid;
          gap: 10px;
          margin-top: 22px;
        }

        .hero-jump-grid a {
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

        .hero-visual {
          position: relative;
          min-height: 470px;
          border-radius: 24px;
          overflow: hidden;
          background:
            radial-gradient(circle at 30% 28%, rgba(250,204,21,0.28), transparent 18%),
            radial-gradient(circle at 70% 40%, rgba(59,130,246,0.42), transparent 26%),
            linear-gradient(135deg, #1e1b4b 0%, #5b21b6 48%, #111827 100%);
          box-shadow: 0 28px 62px rgba(30,27,75,0.24);
          padding: 22px;
        }

        .world-orb {
          position: absolute;
          right: -70px;
          bottom: -70px;
          width: 340px;
          height: 340px;
          border-radius: 999px;
          border: 3px solid rgba(255,255,255,0.32);
          background:
            radial-gradient(circle at 34% 30%, rgba(250,204,21,0.38), transparent 14%),
            radial-gradient(circle at 62% 42%, rgba(34,211,238,0.32), transparent 18%),
            linear-gradient(135deg, #2563eb 0%, #7c3aed 55%, #111827 100%);
          box-shadow:
            inset 0 0 60px rgba(255,255,255,0.12),
            0 0 60px rgba(124,58,237,0.5);
        }

        .orb-core {
          position: absolute;
          left: 78px;
          top: 120px;
          width: 150px;
          height: 150px;
          border-radius: 999px;
          background: rgba(17,24,39,0.72);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 24px;
          line-height: 1.08;
          font-weight: 950;
          border: 1px solid rgba(255,255,255,0.22);
        }

        .orb-line {
          position: absolute;
          left: 20px;
          right: 20px;
          top: 50%;
          height: 2px;
          background: rgba(255,255,255,0.38);
        }

        .orb-line.two {
          transform: rotate(42deg);
        }

        .orb-line.three {
          transform: rotate(-38deg);
        }

        .orbit-card {
          position: absolute;
          width: 210px;
          border-radius: 20px;
          background: rgba(255,255,255,0.92);
          border: 1px solid rgba(255,255,255,0.5);
          padding: 18px;
          box-shadow: 0 18px 36px rgba(15,23,42,0.22);
        }

        .orbit-card span {
          color: #6d28d9;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
        }

        .orbit-card strong {
          display: block;
          color: #111827;
          font-size: 22px;
          font-weight: 950;
          margin: 8px 0;
        }

        .orbit-card p {
          color: #4b5563;
          font-size: 13px;
          line-height: 1.45;
          margin: 0;
        }

        .main-orbit {
          top: 30px;
          left: 26px;
        }

        .second-orbit {
          top: 164px;
          right: 34px;
        }

        .third-orbit {
          left: 44px;
          bottom: 38px;
        }

        .quick-facts,
        .story-section,
        .more-facts {
          border-top: 1px solid #ede9fe;
          padding: 34px 10px;
          text-align: center;
        }

        .quick-facts h2,
        .feature-copy h2,
        .date-line-section h2,
        .country-card h2,
        .story-section h2,
        .more-facts h2,
        .planner-cta h2 {
          color: #111827;
          font-size: clamp(30px, 3vw, 42px);
          line-height: 1.08;
          letter-spacing: -0.04em;
          font-weight: 950;
          margin: 0 0 16px;
        }

        .quick-grid,
        .more-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 24px;
          text-align: left;
        }

        .more-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .quick-grid div,
        .more-grid div,
        .fact-stack div {
          background: linear-gradient(180deg, #ffffff 0%, #f8f5ff 100%);
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          padding: 22px;
          color: #111827;
          box-shadow: 0 16px 34px rgba(91,33,182,0.08);
        }

        .quick-grid strong,
        .more-grid strong,
        .fact-stack strong {
          display: block;
          color: #111827;
          font-size: 19px;
          line-height: 1.18;
          font-weight: 950;
          margin-bottom: 10px;
        }

        .quick-grid p,
        .more-grid p,
        .fact-stack p {
          color: #4b5563;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .feature-section,
        .date-line-section {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 32px;
          align-items: center;
          padding: 38px 10px;
          border-top: 1px solid #ede9fe;
          scroll-margin-top: 30px;
        }

        .fact-stack {
          display: grid;
          gap: 16px;
        }

        .fact-stack span {
          display: inline-block;
          color: #5b21b6;
          font-size: 13px;
          font-weight: 950;
          margin-bottom: 8px;
        }

        .date-line-section {
          background: #faf9ff;
          border: 1px solid #ddd6fe;
          border-radius: 26px;
          padding: 32px;
          margin: 18px 10px 0;
        }

        .date-card {
          min-height: 250px;
          border-radius: 24px;
          background:
            linear-gradient(90deg, #2563eb 0%, #2563eb 46%, #facc15 47%, #facc15 53%, #7c3aed 54%, #7c3aed 100%);
          display: grid;
          grid-template-columns: 1fr 1.2fr 1fr;
          align-items: center;
          text-align: center;
          color: #ffffff;
          box-shadow: 0 22px 46px rgba(49,46,129,0.20);
          overflow: hidden;
        }

        .date-card span {
          font-size: 28px;
          font-weight: 950;
        }

        .date-card strong {
          background: rgba(17,24,39,0.78);
          padding: 22px;
          font-size: 20px;
          line-height: 1.15;
          font-weight: 950;
        }

        .reverse {
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        }

        .country-card {
          background: #ffffff;
          border: 1px solid #ddd6fe;
          border-radius: 22px;
          padding: 28px;
          box-shadow: 0 16px 34px rgba(91,33,182,0.08);
        }

        .timeline-card {
          display: grid;
          gap: 14px;
          background: linear-gradient(135deg, #312e81 0%, #7c3aed 100%);
          border-radius: 24px;
          padding: 28px;
          color: #ffffff;
          box-shadow: 0 22px 48px rgba(49,46,129,0.22);
        }

        .timeline-card div {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 16px;
          padding: 18px;
        }

        .timeline-card strong {
          display: block;
          font-size: 20px;
          font-weight: 950;
          margin-bottom: 6px;
        }

        .timeline-card span {
          color: rgba(255,255,255,0.86);
          font-size: 14px;
          line-height: 1.55;
        }

        .story-section p {
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
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

        .planner-cta h2 {
          color: #ffffff;
        }

        .planner-cta p {
          color: #ede9fe;
          margin-bottom: 0;
        }

        .planner-cta a {
          background: #facc15;
          color: #111827;
          padding: 18px 22px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 950;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          line-height: 1.2;
          min-width: 220px;
          box-shadow: 0 12px 24px rgba(250,204,21,0.24);
        }

        .planner-cta a span {
          color: #111827;
          font-size: 15px;
          font-weight: 950;
        }

        .planner-cta a small {
          color: #111827;
          font-size: 11px;
          font-weight: 900;
          opacity: 1;
        }

        @media (max-width: 900px) {
          .site-header {
            flex-wrap: wrap;
            justify-content: center;
            text-align: center;
          }

          .brand {
            width: 100%;
            justify-content: center;
          }

          .nav {
            width: 100%;
            flex-wrap: wrap;
            gap: 12px 18px;
          }

          .nav-cta {
            width: 100%;
            max-width: 320px;
            min-width: 0;
          }

          .hero,
          .feature-section,
          .date-line-section,
          .planner-cta {
            grid-template-columns: 1fr;
          }

          .quick-grid,
          .more-grid {
            grid-template-columns: 1fr;
          }

          .date-card {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .facts-page {
            padding: 16px 10px 50px;
          }

          .facts-shell {
            padding: 14px;
          }

          .brand-logo {
            width: 155px;
          }

          .nav {
            gap: 10px 14px;
          }

          .nav a {
            font-size: 12px;
          }

          .hero h1 {
            font-size: 38px;
          }

          .hero-visual {
            min-height: 560px;
          }

          .orbit-card {
            position: relative;
            width: auto;
            left: auto;
            right: auto;
            top: auto;
            bottom: auto;
            margin-bottom: 14px;
            z-index: 2;
          }

          .world-orb {
            width: 280px;
            height: 280px;
            right: -90px;
            bottom: -90px;
          }

          .orb-core {
            width: 120px;
            height: 120px;
            left: 70px;
            top: 92px;
            font-size: 20px;
          }

          .planner-cta a {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>
    </>
  );
}
