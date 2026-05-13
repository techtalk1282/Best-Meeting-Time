/**
 * File: app/how-to-schedule-meetings-across-time-zones/page.tsx
 * Version: v2.4 (GUARANTEED VISIBLE CSS HERO MOTION)
 * Date: 2026-05-09
 *
 * PURPOSE:
 * - Preserve the working premium Time Zone Basics article structure
 * - Remove unsupported/subtle SVG offset-path animation
 * - Add obvious CSS-only hero motion using scan beams, moving glow orbs, UTC label pulses, and callout movement
 * - Keep animation lightweight and accessibility-safe with prefers-reduced-motion
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
 * - Revert to v2.3 if this motion pass does not test cleanly
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time Zone Basics: How Many Time Zones Are There?",
  description:
    "Learn how many time zones there are, why time zones exist, why clocks change, and how to avoid scheduling mistakes across countries.",
};

export default function HowToScheduleMeetingsAcrossTimeZonesPage() {
  return (
    <main className="time-basics-page">
      <section className="article-shell">
        <header className="article-header">
          <a href="/" className="brand">
            <span className="brand-icon">⌘</span>
            <span>Best Meeting Time</span>
          </a>

          <nav className="nav" aria-label="Time zone basics navigation">
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
            <p className="pill">Time Zone Basics Guide</p>
            <h1>Time Zones Explained: Clocks, Sunlight, and Global Time</h1>
            <p className="hero-text">
              Before you schedule across countries, it helps to understand why
              the world uses time zones, why there are about 24 main time zones,
              and why clocks change during the year.
            </p>

            <div className="promise-list">
              <a href="#how-many-time-zones">How many time zones are there?</a>
              <a href="#why-time-zones-exist">Why do time zones exist?</a>
              <a href="#why-clocks-change">Why do clocks change?</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Illustrated world time zone map">
            <img
              src="/images/guides/guides-timezone-basics.png"
              alt="World map divided into time zone regions"
            />

            <div className="wide-scan-beam" />
            <div className="animated-time-band">
              <span>UTC-8</span>
              <span>UTC-5</span>
              <span>UTC+0</span>
              <span>UTC+5:30</span>
              <span>UTC+9</span>
              <span>UTC+10</span>
            </div>

            <span className="moving-glow glow-one" />
            <span className="moving-glow glow-two" />
            <span className="moving-glow glow-three" />

            <span className="pulse-ring ring-one" />
            <span className="pulse-ring ring-two" />
            <span className="pulse-ring ring-three" />

            <div className="zone-strip">
              <span>UTC-8</span>
              <span>UTC-5</span>
              <span>UTC+0</span>
              <span>UTC+5:30</span>
              <span>UTC+9</span>
              <span>UTC+10</span>
            </div>

            <div className="hero-callout">
              <strong>Every hour matters.</strong>
              <span>One planet. Many clocks. Better planning.</span>
            </div>
          </div>
        </section>

        <section className="answer-map">
          <p className="section-pill">What this guide answers</p>
          <h2>Three simple questions explain most time zone confusion.</h2>

          <div className="answer-grid">
            <a href="#how-many-time-zones" className="answer-card">
              <span>01</span>
              <strong>How many time zones are there?</strong>
              <p>Understand the 24-hour rotation system and real-world offsets.</p>
            </a>

            <a href="#why-time-zones-exist" className="answer-card">
              <span>02</span>
              <strong>Why do time zones exist?</strong>
              <p>See how Earth’s rotation creates daylight in different places.</p>
            </a>

            <a href="#why-clocks-change" className="answer-card">
              <span>03</span>
              <strong>Why do clocks change?</strong>
              <p>Learn why daylight saving time causes scheduling surprises.</p>
            </a>
          </div>
        </section>

        <section id="how-many-time-zones" className="feature-section">
          <div className="feature-copy">
           <h2>There are 24 main time zones across the world.</h2>
<p>
  The world is commonly organized around 24 main time zones because
  Earth rotates once every 24 hours. As the planet turns, different
  regions face the sun at different times.
</p>
            <p>
              Each main time zone roughly represents one hour of difference from
              the next region. That is why New York, London, Tokyo, and Sydney
              can all be living in the same day but reading very different local
              clocks.
            </p>
            <p>
              Real life is more detailed than a perfect 24-zone grid. Some
              countries use half-hour or quarter-hour offsets, and some large
              countries use several time zones across their land area.
            </p>
          </div>

          <div className="visual-panel zone-panel">
            <div className="zone-title">A 24-hour planet</div>
            <div className="zone-bars">
              {Array.from({ length: 24 }).map((_, index) => (
                <span key={index}>{index % 6 === 0 ? index : ""}</span>
              ))}
            </div>
            <div className="zone-caption">
              Earth rotates through a full day, so global time is divided into
              hour-based regions.
            </div>
          </div>
        </section>

        <section id="why-time-zones-exist" className="feature-section reverse">
          <div className="visual-panel earth-panel">
            <div className="sun">Sun</div>
            <div className="earth">
              <span className="day-side">Day</span>
              <span className="night-side">Night</span>
            </div>
            <div className="orbit-line" />
            <p>
              When one side of Earth faces the sun, another side is already in
              evening or night.
            </p>
          </div>

          <div className="feature-copy">
           <h2>Why do time zones exist?</h2>
            <p>
              Time zones exist because local sunlight changes as Earth rotates.
              Noon is not the same moment everywhere. When the sun is high over
              one region, another region may be waking up, working late, or
              already asleep.
            </p>
            <p>
              Before standardized time zones, many towns used local solar time.
              That worked for small communities, but it became confusing as
              railroads, travel, business, and global communication expanded.
            </p>
            <p>
              Time zones created a shared system. They make it easier for people
              to plan flights, run businesses, schedule calls, and coordinate
              across countries without calculating every city from scratch.
            </p>
          </div>
        </section>

        <section id="why-clocks-change" className="feature-section">
          <div className="feature-copy">
           <h2>Why do clocks change?</h2>
            <p>
              Clocks change in places that use daylight saving time. During part
              of the year, those regions shift the clock forward or backward to
              move daylight into different parts of the day.
            </p>
            <p>
              This can create confusion for international meetings because not
              every country changes clocks, and the countries that do change may
              not switch on the same date.
            </p>
            <p>
              A meeting that was five hours apart one month may become four
              hours apart temporarily. That is why global scheduling should be
              checked with city-based time rather than memory or abbreviations.
            </p>
          </div>

          <div className="visual-panel clock-panel">
            <div className="clock-card spring">
              <span>Spring</span>
              <strong>Forward</strong>
              <p>Some clocks move ahead by one hour.</p>
            </div>
            <div className="clock-center">DST</div>
            <div className="clock-card fall">
              <span>Fall</span>
              <strong>Back</strong>
              <p>Some clocks move back by one hour.</p>
            </div>
          </div>
        </section>

        <section className="example-section">
          <div>
            <p className="section-pill">Real meeting example</p>
            <h2>One meeting can feel normal in one city and painful in another.</h2>
            <p>
              A 9:00 AM meeting in New York may be convenient for London, but it
              can be late at night in Tokyo. That is why comparing local times
              before sending an invite matters.
            </p>
          </div>

          <div className="meeting-card">
            <div><strong>New York</strong><span>9:00 AM</span></div>
            <div><strong>London</strong><span>2:00 PM</span></div>
            <div><strong>Tokyo</strong><span>11:00 PM</span></div>
            <p>
              This is why the best meeting time is not always the first overlap
              you find. It should also respect how reasonable that time feels
              for each person.
            </p>
          </div>
        </section>

        <section className="mistakes-section">
          <p className="section-pill">Common mistakes</p>
          <h2>Time zone basics prevent expensive scheduling errors.</h2>

          <div className="mistake-grid">
            <div>
              <strong>Using abbreviations</strong>
              <p>EST, CST, GMT, and similar labels can be misunderstood. City names are clearer.</p>
            </div>
            <div>
              <strong>Forgetting seasonal changes</strong>
              <p>Daylight saving time can temporarily change the offset between two cities.</p>
            </div>
            <div>
              <strong>Ignoring local work hours</strong>
              <p>A technically available time may still be too early or too late for a real person.</p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <p className="section-pill">Quick answers</p>
          <h2>Time Zone Basics FAQ</h2>

          <div className="faq-grid">
            <div>
              <h3>Are there exactly 24 time zones?</h3>
              <p>There are 24 main hour-based time zones, but real-world offsets include half-hour and quarter-hour variations.</p>
            </div>
            <div>
              <h3>Why not use one global time?</h3>
              <p>A single global time would make local daily life confusing because sunrise, lunch, work, and evening would happen at very different clock hours around the world.</p>
            </div>
            <div>
              <h3>Why does daylight saving time affect meetings?</h3>
              <p>It changes the time difference between cities, especially when one country changes clocks and another does not.</p>
            </div>
          </div>
        </section>

        <section className="planner-cta">
          <div>
            <p className="section-pill gold-pill">Plan with confidence</p>
            <h2>Ready to compare cities instead of guessing?</h2>
            <p>
              Use Best Meeting Time to compare local times, review overlap
              windows, and choose a better time before sending the invite.
            </p>
          </div>

          <a href="/how-it-works#schedule-tool">
            <span>Open the Meeting Planner</span>
            <small>Free to try — no sign-up</small>
          </a>
        </section>
      </section>

      <style>{`
        .time-basics-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #4c1d95 0%, #312e81 100%);
          padding: 30px 20px 70px;
        }

        .article-shell {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          background: #ffffff;
          color: #111827;
          border: 1px solid rgba(237,233,254,0.9);
          box-shadow: 0 24px 70px rgba(30,27,75,0.18);
          padding: 18px 18px 42px;
        }

        .article-header {
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

        .hero-text {
          color: #4b5563;
          font-size: 16px;
          line-height: 1.7;
          margin: 0 0 24px;
        }

        .promise-list {
          display: grid;
          gap: 10px;
        }

        .promise-list a {
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
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%);
          box-shadow: 0 28px 62px rgba(30,27,75,0.24);
          isolation: isolate;
        }

        .hero-visual img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.32) contrast(1.08) brightness(1.06);
          transform-origin: center center;
          animation: mapZoomPan 6s ease-in-out infinite alternate;
          z-index: 1;
        }

        .wide-scan-beam {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 130px;
          background: linear-gradient(
            90deg,
            rgba(250,204,21,0) 0%,
            rgba(250,204,21,0.32) 28%,
            rgba(255,255,255,0.78) 50%,
            rgba(250,204,21,0.32) 72%,
            rgba(250,204,21,0) 100%
          );
          box-shadow: 0 0 34px rgba(250,204,21,0.9);
          animation: scanBeam 3.2s linear infinite;
          z-index: 2;
        }

        .animated-time-band {
          position: absolute;
          top: 20px;
          left: 0;
          display: flex;
          gap: 10px;
          white-space: nowrap;
          animation: timeBandSlide 9s linear infinite;
          z-index: 3;
          opacity: 0.95;
        }

        .animated-time-band span {
          background: rgba(255,255,255,0.92);
          color: #5b21b6;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 950;
          box-shadow: 0 8px 22px rgba(30,27,75,0.16);
        }

        .moving-glow {
          position: absolute;
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: #facc15;
          box-shadow:
            0 0 0 8px rgba(250,204,21,0.25),
            0 0 30px rgba(250,204,21,0.9);
          z-index: 4;
        }

        .glow-one {
          left: 10%;
          top: 52%;
          animation: glowTravelOne 4.8s ease-in-out infinite;
        }

        .glow-two {
          left: 38%;
          top: 38%;
          animation: glowTravelTwo 5.6s ease-in-out infinite;
        }

        .glow-three {
          right: 18%;
          top: 35%;
          animation: glowTravelThree 6.2s ease-in-out infinite;
        }

        .pulse-ring {
          position: absolute;
          width: 72px;
          height: 72px;
          border-radius: 999px;
          border: 4px solid rgba(250,204,21,0.95);
          box-shadow: 0 0 30px rgba(250,204,21,0.9);
          animation: ringPulse 1.9s ease-out infinite;
          z-index: 4;
          pointer-events: none;
        }

        .ring-one { left: 17%; top: 34%; }
        .ring-two { left: 33%; top: 58%; animation-delay: 0.45s; }
        .ring-three { right: 16%; top: 35%; animation-delay: 0.9s; }

        .zone-strip {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 112px;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          overflow: hidden;
          border-radius: 14px;
          background: rgba(255,255,255,0.94);
          box-shadow: 0 18px 40px rgba(15,23,42,0.2);
          z-index: 5;
        }

        .zone-strip span {
          padding: 16px 8px;
          text-align: center;
          color: #5b21b6;
          font-size: 15px;
          font-weight: 950;
          border-right: 1px solid #ddd6fe;
          animation: utcPulse 2.4s ease-in-out infinite;
        }

        .zone-strip span:nth-child(2) { animation-delay: 0.2s; }
        .zone-strip span:nth-child(3) { animation-delay: 0.4s; }
        .zone-strip span:nth-child(4) { animation-delay: 0.6s; }
        .zone-strip span:nth-child(5) { animation-delay: 0.8s; }
        .zone-strip span:nth-child(6) { animation-delay: 1s; }

        .hero-callout {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 24px;
          border-radius: 16px;
          background: rgba(76,29,149,0.95);
          color: #ffffff;
          padding: 18px;
          display: grid;
          gap: 5px;
          text-align: center;
          animation: calloutLift 2.8s ease-in-out infinite;
          z-index: 6;
        }

        .hero-callout strong {
          font-size: 18px;
          font-weight: 950;
        }

        .hero-callout span {
          font-size: 14px;
          color: #ede9fe;
          font-weight: 800;
        }

        .answer-map {
          border-top: 1px solid #ede9fe;
          padding: 30px 10px 34px;
          text-align: center;
        }

        .answer-map h2,
        .feature-copy h2,
        .example-section h2,
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

        .answer-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 24px;
        }

        .answer-card {
          background: linear-gradient(180deg, #ffffff 0%, #f8f5ff 100%);
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          padding: 22px;
          text-decoration: none;
          color: #111827;
          text-align: left;
          box-shadow: 0 16px 34px rgba(91,33,182,0.08);
        }

        .answer-card span {
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

        .answer-card strong {
          display: block;
          color: #111827;
          font-size: 20px;
          line-height: 1.18;
          font-weight: 950;
          margin-bottom: 10px;
        }

        .answer-card p {
          color: #4b5563;
          font-size: 14px;
          line-height: 1.55;
          margin: 0;
        }

        .feature-section {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 32px;
          align-items: center;
          padding: 34px 10px;
          scroll-margin-top: 30px;
        }

        .feature-copy p,
        .example-section p,
        .planner-cta p {
          color: #4b5563;
          font-size: 16px;
          line-height: 1.72;
          margin: 0 0 14px;
        }

        .visual-panel {
          min-height: 370px;
          border-radius: 22px;
          border: 1px solid #ddd6fe;
          background: linear-gradient(180deg, #ffffff 0%, #f8f5ff 100%);
          box-shadow: 0 20px 42px rgba(91,33,182,0.11);
          padding: 26px;
          position: relative;
          overflow: hidden;
        }

        .zone-panel {
          background:
            radial-gradient(circle at 18% 18%, rgba(250,204,21,0.22), transparent 28%),
            linear-gradient(135deg, #eff6ff 0%, #f5f3ff 55%, #ffffff 100%);
        }

        .zone-title {
          color: #111827;
          font-size: 26px;
          font-weight: 950;
          margin-bottom: 22px;
        }

        .zone-bars {
          display: grid;
          grid-template-columns: repeat(24, 1fr);
          height: 190px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #c4b5fd;
          background: #ffffff;
        }

        .zone-bars span {
          display: flex;
          align-items: end;
          justify-content: center;
          padding-bottom: 10px;
          color: #ffffff;
          font-size: 11px;
          font-weight: 900;
          border-right: 1px solid rgba(255,255,255,0.34);
          background: linear-gradient(180deg, #60a5fa 0%, #2563eb 48%, #4c1d95 100%);
        }

        .zone-bars span:nth-child(2n) {
          background: linear-gradient(180deg, #93c5fd 0%, #7c3aed 100%);
        }

        .zone-caption {
          margin-top: 18px;
          color: #374151;
          font-size: 15px;
          line-height: 1.6;
          font-weight: 700;
        }

        .earth-panel {
          background:
            radial-gradient(circle at 22% 28%, rgba(250,204,21,0.38), transparent 22%),
            linear-gradient(135deg, #fff7ed 0%, #eef2ff 45%, #1e1b4b 100%);
          min-height: 410px;
        }

        .sun {
          position: absolute;
          left: 28px;
          top: 32px;
          width: 88px;
          height: 88px;
          border-radius: 999px;
          background: #facc15;
          color: #111827;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 950;
          box-shadow: 0 0 44px rgba(250,204,21,0.72);
        }

        .earth {
          position: absolute;
          right: 44px;
          top: 82px;
          width: 230px;
          height: 230px;
          border-radius: 999px;
          background:
            linear-gradient(90deg, rgba(59,130,246,0.95) 0%, rgba(37,99,235,0.95) 48%, rgba(15,23,42,0.96) 52%, rgba(15,23,42,0.98) 100%);
          border: 8px solid rgba(255,255,255,0.7);
          box-shadow: 0 24px 48px rgba(15,23,42,0.24);
        }

        .day-side,
        .night-side {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: #ffffff;
          font-size: 17px;
          font-weight: 950;
        }

        .day-side { left: 38px; }
        .night-side { right: 28px; }

        .orbit-line {
          position: absolute;
          left: 105px;
          right: 250px;
          top: 130px;
          height: 4px;
          border-top: 3px dashed rgba(250,204,21,0.88);
        }

        .earth-panel p {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 24px;
          color: #ffffff;
          font-size: 15px;
          line-height: 1.6;
          font-weight: 800;
          margin: 0;
          background: rgba(49,46,129,0.82);
          border-radius: 14px;
          padding: 16px;
        }

        .clock-panel {
          display: grid;
          grid-template-columns: 1fr 120px 1fr;
          gap: 16px;
          align-items: center;
          background:
            radial-gradient(circle at 50% 50%, rgba(250,204,21,0.18), transparent 28%),
            linear-gradient(135deg, #f5f3ff 0%, #ffffff 100%);
        }

        .clock-card {
          border-radius: 18px;
          padding: 24px;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid #ddd6fe;
          background: #ffffff;
          box-shadow: 0 14px 30px rgba(91,33,182,0.08);
        }

        .clock-card span {
          color: #6d28d9;
          font-size: 13px;
          font-weight: 950;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .clock-card strong {
          color: #111827;
          font-size: 30px;
          font-weight: 950;
          margin-bottom: 8px;
        }

        .clock-card p {
          color: #4b5563;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .clock-center {
          width: 116px;
          height: 116px;
          border-radius: 999px;
          background: #facc15;
          color: #111827;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: 950;
          box-shadow: 0 18px 34px rgba(250,204,21,0.34);
        }

        .example-section {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 28px;
          align-items: center;
          padding: 38px 10px;
          border-top: 1px solid #ede9fe;
        }

        .meeting-card {
          background: linear-gradient(180deg, #ffffff 0%, #f8f5ff 100%);
          border: 1px solid #ddd6fe;
          border-radius: 20px;
          padding: 26px;
          box-shadow: 0 18px 38px rgba(91,33,182,0.10);
        }

        .meeting-card div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border-radius: 14px;
          border: 1px solid #ede9fe;
          padding: 15px 16px;
          margin-bottom: 12px;
          background: #ffffff;
        }

        .meeting-card strong {
          color: #111827;
          font-size: 16px;
          font-weight: 950;
        }

        .meeting-card span {
          color: #5b21b6;
          font-size: 18px;
          font-weight: 950;
        }

        .meeting-card p {
          margin: 18px 0 0;
          color: #4b5563;
          font-size: 15px;
          line-height: 1.65;
        }

        .mistakes-section,
        .faq-section {
          padding: 36px 10px;
          border-top: 1px solid #ede9fe;
        }

        .mistake-grid,
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 24px;
        }

        .mistake-grid div,
        .faq-grid div {
          background: #faf9ff;
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 14px 30px rgba(91,33,182,0.07);
        }

        .mistake-grid strong,
        .faq-grid h3 {
          display: block;
          color: #111827;
          font-size: 19px;
          line-height: 1.18;
          font-weight: 950;
          margin: 0 0 10px;
        }

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

        .planner-cta h2 { color: #ffffff; }
        .planner-cta p { color: #ede9fe; margin-bottom: 0; }

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
  min-width: 240px;
  box-shadow: 0 12px 24px rgba(250,204,21,0.24);
}

.planner-cta a span {
  font-size: 15px;
  font-weight: 950;
}

.time-basics-page .planner-cta a small {
  font-size: 11px;
  font-weight: 900;
  color: #111827;
  opacity: 1;
  letter-spacing: 0.01em;
}
        @keyframes mapZoomPan {
          0% { transform: scale(1.02) translate3d(0, 0, 0); }
          100% { transform: scale(1.12) translate3d(-28px, -12px, 0); }
        }

        @keyframes scanBeam {
          0% { transform: translateX(-180px); opacity: 0.15; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { transform: translateX(760px); opacity: 0.15; }
        }

        @keyframes timeBandSlide {
          0% { transform: translateX(-62%); }
          100% { transform: translateX(112%); }
        }

        @keyframes glowTravelOne {
          0%, 100% { transform: translate3d(0, 0, 0) scale(0.9); }
          50% { transform: translate3d(210px, -82px, 0) scale(1.35); }
        }

        @keyframes glowTravelTwo {
          0%, 100% { transform: translate3d(0, 0, 0) scale(0.9); }
          50% { transform: translate3d(160px, 120px, 0) scale(1.35); }
        }

        @keyframes glowTravelThree {
          0%, 100% { transform: translate3d(0, 0, 0) scale(0.9); }
          50% { transform: translate3d(-220px, 95px, 0) scale(1.35); }
        }

        @keyframes ringPulse {
          0% { transform: scale(0.35); opacity: 0.95; }
          100% { transform: scale(1.85); opacity: 0; }
        }

        @keyframes utcPulse {
          0%, 100% {
            background: rgba(255,255,255,0);
            color: #5b21b6;
          }

          50% {
            background: rgba(250,204,21,0.38);
            color: #312e81;
          }
        }

        @keyframes calloutLift {
          0%, 100% {
            transform: translateY(0) scale(1);
            box-shadow: 0 12px 28px rgba(91,33,182,0.22);
          }

          50% {
            transform: translateY(-6px) scale(1.015);
            box-shadow:
              0 0 36px rgba(250,204,21,0.36),
              0 18px 38px rgba(91,33,182,0.36);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-visual img,
          .wide-scan-beam,
          .animated-time-band,
          .moving-glow,
          .pulse-ring,
          .zone-strip span,
          .hero-callout {
            animation: none !important;
          }
        }

        @media (max-width: 900px) {
          .article-header {
            flex-wrap: wrap;
            justify-content: center;
          }

          .nav {
            flex-wrap: wrap;
          }

          .hero,
          .feature-section,
          .example-section,
          .planner-cta {
            grid-template-columns: 1fr;
          }

          .answer-grid,
          .mistake-grid,
          .faq-grid {
            grid-template-columns: 1fr;
          }

          .clock-panel {
            grid-template-columns: 1fr;
          }

          .clock-center {
            margin: 0 auto;
          }
        }

        @media (max-width: 560px) {
          .time-basics-page {
            padding: 16px 10px 50px;
          }

          .article-shell {
            padding: 14px;
          }

          .hero h1 {
            font-size: 38px;
          }

          .hero-visual {
            min-height: 420px;
          }

          .zone-strip {
            grid-template-columns: repeat(3, 1fr);
            bottom: 122px;
          }

          .zone-bars {
            grid-template-columns: repeat(12, 1fr);
            height: 220px;
          }

          .earth {
            right: 22px;
            width: 190px;
            height: 190px;
          }

          .orbit-line {
            display: none;
          }

          .planner-cta a {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
