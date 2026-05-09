/**
 * File: app/guides/cultural-timing/page.tsx
 * Version: v1.3 (APPROVED CULTURAL IMAGE SYSTEM)
 * Date: 2026-05-09
 *
 * PURPOSE:
 * - Replace weak CSS-drawn visuals with approved image-based cultural visuals
 * - Use people-first cultural collaboration imagery
 * - Keep SEO-focused guide content for:
 *   1. Best time to contact Japan
 *   2. Work hours around the world
 *   3. Weekend differences globally
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
 * - Revert to v1.2 if this visual image pass does not test cleanly
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cultural Timing Guide: Best Time to Contact Japan and Global Teams",
  description:
    "Learn the best time to contact Japan, how global work hours differ, and how weekend differences affect international meetings and cultural timing.",
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

            <h1>Best Time to Contact Japan and Plan Across Global Cultures</h1>

            <p className="hero-text">
              International scheduling is not just time conversion. It is about
              respecting business hours, local customs, weekends, holidays, and
              the people behind every meeting invite.
            </p>

            <div className="hero-promises">
              <a href="#contact-japan">Best time to contact Japan</a>
              <a href="#work-hours">Work hours around the world</a>
              <a href="#weekends">Weekend differences globally</a>
            </div>
          </div>

          <div className="hero-image-card">
            <img
  src="/images/guides/cultural-timing-hero.png"
  alt="Global team collaborating with Japan timing, Tokyo scenery, and meeting time labels"
/>
          </div>
        </section>

        <section className="answer-section">
          <p className="section-pill">What this guide answers</p>

          <h2>Good global scheduling respects people, not just clocks.</h2>

          <div className="answer-grid">
            <a href="#contact-japan" className="answer-card">
              <span>01</span>
              <strong>Best time to contact Japan</strong>
              <p>See practical Tokyo-friendly contact windows for US and European teams.</p>
            </a>

            <a href="#work-hours" className="answer-card">
              <span>02</span>
              <strong>Work hours around the world</strong>
              <p>Compare normal business rhythms across major regions.</p>
            </a>

            <a href="#weekends" className="answer-card">
              <span>03</span>
              <strong>Weekend differences globally</strong>
              <p>Understand why Friday, Saturday, and Sunday can mean different things globally.</p>
            </a>
          </div>
        </section>

        <section id="contact-japan" className="feature-section">
          <div className="feature-copy">
            <p className="section-pill">Question 1</p>

            <h2>What is the best time to contact Japan?</h2>

            <p>
              The best time to contact Japan is usually during Tokyo business
              hours, especially mid-morning through late afternoon on a Japanese
              weekday. For most professional communication, aim for a window
              that lands somewhere between 9:00 AM and 6:00 PM in Japan.
            </p>

            <p>
              The challenge is that Tokyo is far ahead of North America and
              several hours ahead of Europe. That means a good time in Japan may
              be late evening in the United States or very early in Europe.
            </p>

            <p>
              For US teams, the most realistic Japan-friendly window is often
              evening in the US, which becomes the next business morning in
              Tokyo. For European teams, early morning in Europe may connect
              with late afternoon in Japan.
            </p>
          </div>

          <div className="section-image-card">
            <img
  src="/images/guides/contact_japan_business_hours.png"
  alt="Laptop meeting with Japan garden view showing best time to contact Japan across Tokyo, New York, and London"
/>
          </div>
        </section>

        <section className="culture-strip">
          <div>
            <strong>Professional courtesy</strong>
            <span>Do not assume late-night availability.</span>
          </div>

          <div>
            <strong>Local context</strong>
            <span>Respect lunch, commute, holidays, and business hours.</span>
          </div>

          <div>
            <strong>Fair rotation</strong>
            <span>When no perfect time exists, rotate the inconvenience.</span>
          </div>
        </section>

        <section id="work-hours" className="feature-section reverse">
          <div className="world-hours-card">
            <h3>Global workday rhythm</h3>

            <div className="region-card">
              <strong>Japan</strong>
              <span>9:00 AM – 6:00 PM</span>
              <small>Formal scheduling and punctuality matter.</small>
            </div>

            <div className="region-card">
              <strong>United States</strong>
              <span>9:00 AM – 5:00 PM</span>
              <small>Meetings often cluster mid-morning to afternoon.</small>
            </div>

            <div className="region-card">
              <strong>Europe</strong>
              <span>9:00 AM – 5:00 PM</span>
              <small>Late afternoon can work for Asia overlap.</small>
            </div>

            <div className="region-card">
              <strong>Middle East</strong>
              <span>Varies by country</span>
              <small>Weekend and workweek patterns may differ.</small>
            </div>
          </div>

          <div className="feature-copy">
            <p className="section-pill">Question 2</p>

            <h2>How do work hours differ around the world?</h2>

            <p>
              Many countries use a familiar weekday business rhythm, but the
              expectations around meetings can be very different. Some cultures
              value punctual starts, some prefer planned agendas, and some avoid
              end-of-day meetings because they interfere with family or commute time.
            </p>

            <p>
              A meeting that is technically inside working hours may still be a
              poor choice if it lands during lunch, local commute time, Friday
              afternoon, or the end of a regional workweek.
            </p>

            <p>
              Strong global scheduling means looking at the human schedule:
              when people are working, when they are focused, and when a meeting
              would feel respectful.
            </p>
          </div>
        </section>

        <section id="weekends" className="feature-section">
          <div className="feature-copy">
            <p className="section-pill">Question 3</p>

            <h2>Why do weekend differences matter globally?</h2>

            <p>
              Weekend timing is one of the easiest global scheduling mistakes to
              miss. Many teams think of Saturday and Sunday as the weekend, but
              some regions have different workweek patterns or reduced business
              activity on Friday.
            </p>

            <p>
              A Friday morning meeting in one country can land late Friday night
              somewhere else, or fall close to the start of a local weekend.
              For global launches, customer calls, or support handoffs, that can
              create missed responses and poor attendance.
            </p>

            <p>
              Before scheduling international work, check both the clock and the
              local calendar.
            </p>
          </div>

          <div className="section-image-card">
            <img
  src="/images/guides/weekend_differences_global.png"
  alt="Global weekend differences map with people relaxing and time labels across New York, London, Tokyo, Mumbai, Sydney, and São Paulo"
/>
          </div>
        </section>

        <section className="mistakes-section">
          <p className="section-pill">Common cultural timing mistakes</p>

          <h2>Small timing mistakes can feel disrespectful across borders.</h2>

          <div className="mistake-grid">
            <div>
              <strong>Scheduling Japan too late</strong>
              <p>
                A US-friendly afternoon meeting can become early morning or late
                night in Japan depending on the cities involved.
              </p>
            </div>

            <div>
              <strong>Ignoring local business habits</strong>
              <p>
                Work hours, lunch breaks, commute patterns, and preferred meeting
                windows can differ by region.
              </p>
            </div>

            <div>
              <strong>Forgetting weekend patterns</strong>
              <p>
                A normal Friday meeting can be inconvenient or near-weekend
                timing for another country.
              </p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <p className="section-pill">Quick answers</p>

          <h2>Cultural Timing FAQ</h2>

          <div className="faq-grid">
            <div>
              <h3>What time is best to contact Japan from the US?</h3>
              <p>
                For many US teams, evening in the United States can align with
                the next business morning in Tokyo. Always confirm the exact city
                and date.
              </p>
            </div>

            <div>
              <h3>What time is best to contact Japan from Europe?</h3>
              <p>
                Early morning in Europe may overlap with late afternoon in Japan,
                but the exact window depends on the countries and daylight saving time.
              </p>
            </div>

            <div>
              <h3>Why should global teams consider culture?</h3>
              <p>
                Because time zones tell you the clock time, but culture helps you
                understand whether that meeting time feels respectful and practical.
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

        .hero-image-card,
        .section-image-card {
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid #ddd6fe;
          box-shadow: 0 24px 60px rgba(30,27,75,0.18);
          background: #ffffff;
        }

        .hero-image-card img,
        .section-image-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-image-card {
          min-height: 470px;
        }

        .hero-image-card img {
          min-height: 470px;
        }

        .section-image-card {
          min-height: 390px;
        }

        .section-image-card img {
          min-height: 390px;
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

        .culture-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          padding: 24px 10px 36px;
        }

        .culture-strip div {
          background: #faf9ff;
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          padding: 22px;
          display: grid;
          gap: 8px;
          box-shadow: 0 14px 30px rgba(91,33,182,0.07);
        }

        .culture-strip strong {
          color: #111827;
          font-size: 19px;
          font-weight: 950;
        }

        .culture-strip span {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.55;
        }

        .world-hours-card {
          min-height: 390px;
          border-radius: 22px;
          border: 1px solid #ddd6fe;
          box-shadow: 0 20px 42px rgba(91,33,182,0.11);
          padding: 26px;
          background: linear-gradient(135deg, #fff7ed 0%, #f5f3ff 55%, #ffffff 100%);
        }

        .world-hours-card h3 {
          color: #111827;
          font-size: 26px;
          font-weight: 950;
          margin: 0 0 18px;
        }

        .region-card {
          background: #ffffff;
          border: 1px solid #ddd6fe;
          border-radius: 16px;
          padding: 16px;
          display: grid;
          gap: 5px;
          margin-bottom: 12px;
          box-shadow: 0 12px 28px rgba(91,33,182,0.08);
        }

        .region-card strong {
          color: #111827;
          font-size: 17px;
          font-weight: 950;
        }

        .region-card span {
          color: #5b21b6;
          font-size: 18px;
          font-weight: 950;
        }

        .region-card small {
          color: #4b5563;
          font-size: 13px;
          line-height: 1.45;
          font-weight: 800;
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
          .faq-grid,
          .culture-strip {
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

          .planner-cta a {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
