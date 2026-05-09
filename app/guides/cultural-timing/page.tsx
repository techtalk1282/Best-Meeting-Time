/**
 * File: app/guides/cultural-timing/page.tsx
 * Version: v1.0 (CULTURAL TIMING GUIDE ARTICLE)
 * Date: 2026-05-09
 *
 * PURPOSE:
 * - Create a dedicated Cultural Timing Guides article route
 * - Keep /best-meeting-times-remote-teams protected as its own article
 * - Answer the Guides card promises:
 *   1. Best time to contact Japan
 *   2. Work hours around the world
 *   3. Weekend differences globally
 * - Use vibrant, image-focused, motion-heavy CSS visuals
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
 * - Delete app/guides/cultural-timing/page.tsx if this new route does not test cleanly
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cultural Timing Guide: Best Time to Contact Japan and Global Teams",
  description:
    "Learn the best time to contact Japan, how work hours differ around the world, and how weekend differences affect global scheduling.",
};

export default function CulturalTimingGuidePage() {
  return (
    <main className="cultural-page">
      <section className="cultural-shell">
        <header className="site-header">
          <a href="/" className="brand">
            <span className="brand-icon">⌘</span>
            <span>Best Meeting Time</span>
          </a>

          <nav className="nav" aria-label="Cultural timing guide navigation">
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
            <p className="pill">Cultural Timing Guides</p>

            <h1>Best Times to Contact Japan and Work Across Global Cultures</h1>

            <p className="hero-text">
              Global scheduling is not just about clocks. It is also about work
              habits, local business hours, weekends, holidays, and respecting
              when people are actually available.
            </p>

            <div className="hero-promises">
              <a href="#contact-japan">Best time to contact Japan</a>
              <a href="#work-hours">Work hours around the world</a>
              <a href="#weekends">Weekend differences globally</a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/images/guides/guides-cultural-timing.png"
              alt="Japan and global cultural timing across day and night"
            />

            <div className="sun-sweep" />
            <div className="night-sweep" />

            <span className="culture-pin pin-japan">Japan</span>
            <span className="culture-pin pin-us">US</span>
            <span className="culture-pin pin-europe">Europe</span>
            <span className="culture-pin pin-middle-east">Weekend Shift</span>

            <div className="time-track">
              <span>Tokyo 9 AM</span>
              <span>London 12 AM</span>
              <span>New York 7 PM</span>
              <span>Sydney 10 AM</span>
            </div>

            <div className="hero-caption">
              Respect the clock. Respect the culture.
            </div>
          </div>
        </section>

        <section className="answer-section">
          <p className="section-pill">What this guide answers</p>

          <h2>Better global timing starts with cultural awareness.</h2>

          <div className="answer-grid">
            <a href="#contact-japan" className="answer-card">
              <span>01</span>
              <strong>Best time to contact Japan</strong>
              <p>
                Learn when Japan is most reachable from the US and Europe.
              </p>
            </a>

            <a href="#work-hours" className="answer-card">
              <span>02</span>
              <strong>Work hours around the world</strong>
              <p>
                Compare typical workdays across regions before sending invites.
              </p>
            </a>

            <a href="#weekends" className="answer-card">
              <span>03</span>
              <strong>Weekend differences globally</strong>
              <p>
                Understand why Friday, Saturday, and Sunday do not mean the same
                thing everywhere.
              </p>
            </a>
          </div>
        </section>

        <section id="contact-japan" className="feature-section">
          <div className="feature-copy">
            <p className="section-pill">Question 1</p>

            <h2>What is the best time to contact Japan?</h2>

            <p>
              Japan operates on Japan Standard Time, and business communication
              is usually best during normal weekday working hours in Tokyo.
            </p>

            <p>
              For teams in the United States, that often means Japan’s business
              day may line up with the previous evening in North America. For
              teams in Europe, Japan may be easiest to reach during early
              European morning or late Japan afternoon.
            </p>

            <p>
              The safest rule is simple: compare Tokyo local time first, then
              choose a window that respects normal working hours instead of
              forcing late-night calls.
            </p>
          </div>

          <div className="japan-card">
            <div className="rising-sun" />
            <div className="tokyo-panel">
              <p>Tokyo Business Window</p>
              <strong>9:00 AM – 6:00 PM</strong>
              <span>Best for respectful weekday contact</span>
            </div>

            <div className="comparison-row">
              <div>
                <span>Tokyo</span>
                <strong>10:00 AM</strong>
              </div>
              <div>
                <span>London</span>
                <strong>1:00 AM</strong>
              </div>
              <div>
                <span>New York</span>
                <strong>8:00 PM</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="work-hours" className="feature-section reverse">
          <div className="world-hours-card">
            <div className="hour-lane lane-one">
              <span>United States</span>
              <strong>9 AM – 5 PM</strong>
            </div>

            <div className="hour-lane lane-two">
              <span>United Kingdom</span>
              <strong>9 AM – 5 PM</strong>
            </div>

            <div className="hour-lane lane-three">
              <span>Japan</span>
              <strong>9 AM – 6 PM</strong>
            </div>

            <div className="hour-lane lane-four">
              <span>Australia</span>
              <strong>9 AM – 5 PM</strong>
            </div>

            <div className="moving-window">Overlap</div>
          </div>

          <div className="feature-copy">
            <p className="section-pill">Question 2</p>

            <h2>How do work hours differ around the world?</h2>

            <p>
              Many countries have a standard business day near 9 AM to 5 PM, but
              the practical meeting culture can differ by region, company, and
              industry.
            </p>

            <p>
              Some teams prefer earlier starts, some take longer lunch breaks,
              and some regions avoid scheduling near the end of the workday.
              For global teams, the best meeting time is not always the first
              technical overlap.
            </p>

            <p>
              A respectful meeting window considers both local time and local
              expectations.
            </p>
          </div>
        </section>

        <section id="weekends" className="feature-section">
          <div className="feature-copy">
            <p className="section-pill">Question 3</p>

            <h2>Why do weekend differences matter globally?</h2>

            <p>
              Not every country treats Saturday and Sunday the same way. Some
              regions follow a Friday–Saturday weekend, while others follow
              Saturday–Sunday or different business patterns.
            </p>

            <p>
              This matters when scheduling international meetings, customer
              calls, project reviews, launches, and support handoffs.
            </p>

            <p>
              Before sending a global invite, check whether the date lands on a
              normal workday for every region involved.
            </p>
          </div>

          <div className="weekend-card">
            <div className="week-grid">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span className="shift">Fri</span>
              <span className="weekend">Sat</span>
              <span className="weekend">Sun</span>
            </div>

            <div className="weekend-note">
              <strong>Weekend patterns change by region.</strong>
              <p>
                A “quick Friday meeting” may already be weekend time somewhere
                else.
              </p>
            </div>
          </div>
        </section>

        <section className="mistakes-section">
          <p className="section-pill">Common cultural timing mistakes</p>

          <h2>Small timing mistakes can feel disrespectful across borders.</h2>

          <div className="mistake-grid">
            <div>
              <strong>Assuming everyone works your schedule</strong>
              <p>
                Local business hours are not universal, especially across
                continents.
              </p>
            </div>

            <div>
              <strong>Sending late-night invites</strong>
              <p>
                A meeting may be convenient for you but unreasonable for Japan,
                Australia, or another region.
              </p>
            </div>

            <div>
              <strong>Ignoring weekends and holidays</strong>
              <p>
                Global scheduling should check both clock time and the local
                work calendar.
              </p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <p className="section-pill">Quick answers</p>

          <h2>Cultural Timing FAQ</h2>

          <div className="faq-grid">
            <div>
              <h3>What time is best to contact Japan?</h3>
              <p>
                Aim for Tokyo business hours when possible. For US teams, that
                often means checking evening availability the day before.
              </p>
            </div>

            <div>
              <h3>Should global teams rotate meeting times?</h3>
              <p>
                Yes. If no fair overlap exists, rotating meeting times prevents
                one region from always carrying the inconvenience.
              </p>
            </div>

            <div>
              <h3>Why do weekend differences matter?</h3>
              <p>
                Some regions have different weekend patterns, so a normal
                workday in one country may be time off somewhere else.
              </p>
            </div>
          </div>
        </section>

        <section className="planner-cta">
          <div>
            <p className="section-pill gold-pill">Plan respectfully</p>

            <h2>Compare cities before you contact global teams.</h2>

            <p>
              Use Best Meeting Time to check local times, avoid bad meeting
              windows, and schedule across cultures with more confidence.
            </p>
          </div>

          <a href="/how-it-works#schedule-tool">
            <span>Open the Meeting Planner</span>
            <small>Free to try — no sign-up</small>
          </a>
        </section>
      </section>

      <style>{`
        .cultural-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #4c1d95 0%, #312e81 100%);
          padding: 30px 20px 70px;
        }

        .cultural-shell {
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

        .hero-visual {
          position: relative;
          min-height: 500px;
          border-radius: 20px;
          overflow: hidden;
          background: #111827;
          box-shadow: 0 28px 62px rgba(30,27,75,0.24);
          isolation: isolate;
        }

        .hero-visual img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.18) contrast(1.06) brightness(1.03);
          animation: culturalZoom 7s ease-in-out infinite alternate;
          z-index: 1;
        }

        .sun-sweep,
        .night-sweep {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
        }

        .sun-sweep {
          background:
            linear-gradient(
              90deg,
              rgba(250,204,21,0) 0%,
              rgba(250,204,21,0.18) 38%,
              rgba(255,255,255,0.38) 50%,
              rgba(250,204,21,0.18) 62%,
              rgba(250,204,21,0) 100%
            );
          animation: sunSweep 4.2s linear infinite;
        }

        .night-sweep {
          background:
            linear-gradient(
              90deg,
              rgba(49,46,129,0.55) 0%,
              rgba(49,46,129,0) 42%,
              rgba(49,46,129,0) 100%
            );
          animation: nightSweep 6.2s linear infinite alternate;
        }

        .culture-pin {
          position: absolute;
          z-index: 4;
          background: rgba(255,255,255,0.94);
          color: #4c1d95;
          border: 2px solid #facc15;
          border-radius: 999px;
          padding: 9px 13px;
          font-size: 12px;
          font-weight: 950;
          box-shadow: 0 0 24px rgba(250,204,21,0.7);
          animation: pinPulse 2.2s ease-in-out infinite;
        }

        .pin-japan { right: 12%; top: 38%; }
        .pin-us { left: 12%; top: 43%; animation-delay: 0.35s; }
        .pin-europe { left: 48%; top: 29%; animation-delay: 0.7s; }
        .pin-middle-east { right: 28%; bottom: 33%; animation-delay: 1s; }

        .time-track {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 95px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-radius: 14px;
          overflow: hidden;
          background: rgba(255,255,255,0.94);
          z-index: 5;
          box-shadow: 0 18px 40px rgba(15,23,42,0.22);
        }

        .time-track span {
          text-align: center;
          padding: 15px 8px;
          color: #5b21b6;
          font-size: 13px;
          font-weight: 950;
          border-right: 1px solid #ddd6fe;
          animation: trackPulse 2.8s ease-in-out infinite;
        }

        .time-track span:nth-child(2) { animation-delay: 0.25s; }
        .time-track span:nth-child(3) { animation-delay: 0.5s; }
        .time-track span:nth-child(4) { animation-delay: 0.75s; }

        .hero-caption {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 24px;
          border-radius: 16px;
          background: rgba(76,29,149,0.95);
          color: #ffffff;
          padding: 18px;
          text-align: center;
          font-size: 18px;
          font-weight: 950;
          animation: captionLift 2.8s ease-in-out infinite;
          z-index: 6;
        }

        .answer-section {
          border-top: 1px solid #ede9fe;
          padding: 30px 10px 34px;
          text-align: center;
        }

        .answer-section h2,
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

        .answer-grid,
        .mistake-grid,
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 24px;
        }

        .answer-card,
        .mistake-grid div,
        .faq-grid div {
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

        .answer-card strong,
        .mistake-grid strong,
        .faq-grid h3 {
          display: block;
          color: #111827;
          font-size: 20px;
          line-height: 1.18;
          font-weight: 950;
          margin: 0 0 10px;
        }

        .answer-card p,
        .mistake-grid p,
        .faq-grid p {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.65;
          margin: 0;
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

        .japan-card,
        .world-hours-card,
        .weekend-card {
          min-height: 390px;
          border-radius: 22px;
          border: 1px solid #ddd6fe;
          box-shadow: 0 20px 42px rgba(91,33,182,0.11);
          padding: 26px;
          position: relative;
          overflow: hidden;
        }

        .japan-card {
          background:
            radial-gradient(circle at 25% 28%, rgba(250,204,21,0.55), transparent 28%),
            linear-gradient(135deg, #fff7ed 0%, #f5f3ff 58%, #312e81 100%);
        }

        .rising-sun {
          position: absolute;
          width: 190px;
          height: 190px;
          border-radius: 999px;
          background: #facc15;
          left: 32px;
          top: 40px;
          box-shadow: 0 0 70px rgba(250,204,21,0.88);
          animation: sunRise 3.8s ease-in-out infinite alternate;
        }

        .tokyo-panel {
          position: absolute;
          right: 26px;
          top: 42px;
          width: 240px;
          background: rgba(255,255,255,0.94);
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 18px 38px rgba(30,27,75,0.18);
          z-index: 2;
        }

        .tokyo-panel p,
        .tokyo-panel span {
          color: #4b5563;
          margin: 0;
          font-size: 13px;
          font-weight: 800;
        }

        .tokyo-panel strong {
          display: block;
          color: #111827;
          font-size: 26px;
          font-weight: 950;
          margin: 8px 0;
        }

        .comparison-row {
          position: absolute;
          left: 26px;
          right: 26px;
          bottom: 26px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          z-index: 2;
        }

        .comparison-row div {
          background: rgba(255,255,255,0.93);
          border: 1px solid #ddd6fe;
          border-radius: 14px;
          padding: 16px;
          display: grid;
          gap: 6px;
        }

        .comparison-row span {
          color: #6d28d9;
          font-size: 12px;
          font-weight: 950;
        }

        .comparison-row strong {
          color: #111827;
          font-size: 18px;
          font-weight: 950;
        }

        .world-hours-card {
          background: linear-gradient(135deg, #eff6ff 0%, #f5f3ff 55%, #ffffff 100%);
          display: grid;
          align-content: center;
          gap: 16px;
        }

        .hour-lane {
          background: #ffffff;
          border: 1px solid #ddd6fe;
          border-radius: 16px;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 12px 28px rgba(91,33,182,0.08);
          animation: laneSlide 3.2s ease-in-out infinite alternate;
        }

        .lane-two { animation-delay: 0.25s; }
        .lane-three { animation-delay: 0.5s; }
        .lane-four { animation-delay: 0.75s; }

        .hour-lane span {
          color: #4b5563;
          font-size: 14px;
          font-weight: 900;
        }

        .hour-lane strong {
          color: #5b21b6;
          font-size: 18px;
          font-weight: 950;
        }

        .moving-window {
          position: absolute;
          top: 28px;
          bottom: 28px;
          width: 90px;
          border-radius: 18px;
          background: rgba(250,204,21,0.24);
          border: 2px solid rgba(250,204,21,0.9);
          color: #312e81;
          font-size: 12px;
          font-weight: 950;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: overlapWindow 4s ease-in-out infinite alternate;
        }

        .weekend-card {
          background:
            radial-gradient(circle at 80% 20%, rgba(250,204,21,0.28), transparent 24%),
            linear-gradient(135deg, #f5f3ff 0%, #ffffff 100%);
        }

        .week-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 10px;
        }

        .week-grid span {
          min-height: 82px;
          border-radius: 16px;
          background: #ffffff;
          border: 1px solid #ddd6fe;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111827;
          font-size: 14px;
          font-weight: 950;
          box-shadow: 0 12px 24px rgba(91,33,182,0.08);
          animation: dayPulse 3.2s ease-in-out infinite;
        }

        .week-grid .shift {
          background: #fff7df;
          color: #312e81;
        }

        .week-grid .weekend {
          background: #ede9fe;
          color: #4c1d95;
        }

        .week-grid span:nth-child(5) { animation-delay: 0.25s; }
        .week-grid span:nth-child(6) { animation-delay: 0.5s; }
        .week-grid span:nth-child(7) { animation-delay: 0.75s; }

        .weekend-note {
          margin-top: 24px;
          background: #5b21b6;
          color: #ffffff;
          border-radius: 18px;
          padding: 22px;
        }

        .weekend-note strong {
          display: block;
          font-size: 20px;
          font-weight: 950;
          margin-bottom: 8px;
        }

        .weekend-note p {
          color: #ede9fe;
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
        }

        .mistakes-section,
        .faq-section {
          padding: 36px 10px;
          border-top: 1px solid #ede9fe;
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

        @keyframes culturalZoom {
          0% { transform: scale(1.02) translate3d(0, 0, 0); }
          100% { transform: scale(1.1) translate3d(-18px, -10px, 0); }
        }

        @keyframes sunSweep {
          0% { transform: translateX(-120%); opacity: 0.25; }
          45% { opacity: 1; }
          100% { transform: translateX(120%); opacity: 0.25; }
        }

        @keyframes nightSweep {
          0% { transform: translateX(-35%); }
          100% { transform: translateX(35%); }
        }

        @keyframes pinPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.12); }
        }

        @keyframes trackPulse {
          0%, 100% { background: rgba(255,255,255,0); }
          50% { background: rgba(250,204,21,0.35); }
        }

        @keyframes captionLift {
          0%, 100% {
            transform: translateY(0);
            box-shadow: 0 12px 28px rgba(91,33,182,0.22);
          }
          50% {
            transform: translateY(-6px);
            box-shadow: 0 0 36px rgba(250,204,21,0.34);
          }
        }

        @keyframes sunRise {
          0% { transform: translateY(24px) scale(0.92); }
          100% { transform: translateY(-12px) scale(1.08); }
        }

        @keyframes laneSlide {
          0% { transform: translateX(-8px); }
          100% { transform: translateX(8px); }
        }

        @keyframes overlapWindow {
          0% { left: 20px; }
          100% { left: calc(100% - 120px); }
        }

        @keyframes dayPulse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-visual img,
          .sun-sweep,
          .night-sweep,
          .culture-pin,
          .time-track span,
          .hero-caption,
          .rising-sun,
          .hour-lane,
          .moving-window,
          .week-grid span {
            animation: none !important;
          }
        }

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

          .answer-grid,
          .mistake-grid,
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .cultural-page {
            padding: 16px 10px 50px;
          }

          .cultural-shell {
            padding: 14px;
          }

          .hero h1 {
            font-size: 38px;
          }

          .hero-visual {
            min-height: 430px;
          }

          .time-track {
            grid-template-columns: repeat(2, 1fr);
          }

          .comparison-row,
          .week-grid {
            grid-template-columns: 1fr;
          }

          .planner-cta a {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
