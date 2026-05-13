/**
 * File: app/best-times-to-contact-different-countries/page.tsx
 * Version: v1.0 (COUNTRY CONTACT TIMING AUTHORITY PAGE)
 * Date: 2026-05-13
 *
 * PURPOSE:
 * - Create a high-value SEO authority page for international contact timing
 * - Help users understand the best times to contact different countries
 * - Add practical global scheduling, culture, and business-hour guidance
 * - Strengthen AdSense readiness through useful evergreen content
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
 * - Remove this route folder if the page does not test cleanly
 */

import type { Metadata } from "next";
import FooterSection from "../ui/FooterSection";

export const metadata: Metadata = {
  title: "Best Times to Contact Different Countries",
  description:
    "Learn the best times to contact different countries for business, remote work, clients, and international meetings across time zones.",
};

export default function BestTimesToContactDifferentCountriesPage() {
  return (
    <>
      <main className="country-page">
        <header className="site-header">
          <a href="/" className="brand-link">
            <img
              src="/images/branding/logo.png"
              alt="Best Meeting Time"
              className="brand-logo"
            />
          </a>

          <nav className="site-nav" aria-label="Country contact timing navigation">
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
            <p className="eyebrow hero-eyebrow">International Timing Guide</p>

            <h1>Best Times to Contact Different Countries</h1>

            <p className="hero-text">
              Reaching someone in another country is not just about converting
              the clock. Workdays, lunch hours, weekends, culture, and local
              expectations all affect when your message or meeting request is
              most likely to land well.
            </p>

            <div className="hero-points">
              <div>
                <strong>Respect Local Work Hours</strong>
                <span>Contact people when they are most likely to be working.</span>
              </div>

              <div>
                <strong>Avoid Late-Night Requests</strong>
                <span>Prevent accidental messages during sleep or family time.</span>
              </div>

              <div>
                <strong>Schedule With More Confidence</strong>
                <span>Use timing windows before sending global meeting invites.</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="globe-card">
              <div className="globe">🌍</div>

              <div className="time-chip chip-ny">
                <span>New York</span>
                <strong>9:00 AM</strong>
              </div>

              <div className="time-chip chip-london">
                <span>London</span>
                <strong>2:00 PM</strong>
              </div>

              <div className="time-chip chip-dubai">
                <span>Dubai</span>
                <strong>5:00 PM</strong>
              </div>

              <div className="time-chip chip-tokyo">
                <span>Tokyo</span>
                <strong>10:00 PM</strong>
              </div>
            </div>

            <div className="hero-action-panel">
              <div>
                <strong>Before you contact someone globally, compare the time.</strong>
                <span>
                  Check local times, working-hour overlap, and better meeting
                  windows before reaching out.
                </span>
              </div>

              <a href="/how-it-works#schedule-tool" className="primary-cta">
                <span>Open Planner</span>
                <small>Free to try — no sign-up</small>
              </a>
            </div>
          </div>
        </section>

        <section className="country-grid-section">
          <p className="eyebrow">Country Timing Examples</p>

          <h2>Practical contact windows for global work</h2>

          <div className="country-grid">
            <article>
              <strong>Japan</strong>
              <span>
                Best contact window: late afternoon in Japan for Asia-based
                work, or carefully planned evening overlap for US teams.
              </span>
            </article>

            <article>
              <strong>United Kingdom</strong>
              <span>
                Best contact window: UK morning through mid-afternoon. US East
                Coast teams often overlap well during their morning.
              </span>
            </article>

            <article>
              <strong>Australia</strong>
              <span>
                Best contact window: local morning or early afternoon. US teams
                often need rotating schedules because overlap can be difficult.
              </span>
            </article>

            <article>
              <strong>India</strong>
              <span>
                Best contact window: late India morning through early evening.
                Remember India uses a 30-minute UTC offset.
              </span>
            </article>

            <article>
              <strong>United Arab Emirates</strong>
              <span>
                Best contact window: Sunday through Thursday business hours,
                with early planning for Europe or Asia overlap.
              </span>
            </article>

            <article>
              <strong>Germany & France</strong>
              <span>
                Best contact window: Central European business hours. US teams
                usually get the strongest overlap in the morning.
              </span>
            </article>
          </div>
        </section>

        <section className="culture-section">
          <div className="culture-copy">
            <p className="eyebrow">Timing Etiquette</p>

            <h2>Good international timing is partly cultural.</h2>

            <p>
              A technically correct time zone conversion can still be a poor
              time to contact someone. Lunch breaks, regional weekends, national
              holidays, commuting patterns, and local work expectations can all
              affect whether your message feels respectful.
            </p>
          </div>

          <div className="culture-grid">
            <div>
              <strong>Check the workweek</strong>
              <span>
                Some countries and regions may not follow the same Monday to
                Friday business rhythm.
              </span>
            </div>

            <div>
              <strong>Avoid lunch-hour assumptions</strong>
              <span>
                Midday breaks vary widely and may be longer or more protected in
                some cultures.
              </span>
            </div>

            <div>
              <strong>Watch daylight saving changes</strong>
              <span>
                Seasonal clock changes do not happen everywhere or on the same
                date.
              </span>
            </div>

            <div>
              <strong>Use async when overlap is poor</strong>
              <span>
                If live timing is unfair, send clear notes and use meetings
                only when they are truly needed.
              </span>
            </div>
          </div>
        </section>

        <section className="workflow-section">
          <p className="eyebrow">Better Global Contact Process</p>

          <h2>How to choose a better time before reaching out</h2>

          <div className="workflow-grid">
            <article>
              <strong>Start with the recipient</strong>
              <p>
                Look at the other person’s local time first. The most respectful
                global communication starts from their working day, not yours.
              </p>
            </article>

            <article>
              <strong>Find realistic overlap</strong>
              <p>
                Compare both locations and identify the narrow window where both
                sides are reasonably available and alert.
              </p>
            </article>

            <article>
              <strong>Send with context</strong>
              <p>
                If the timing is difficult, explain why you selected that window
                and offer another option when possible.
              </p>
            </article>
          </div>
        </section>

        <section className="related-reading">
          <p className="eyebrow">Related Reading</p>

          <h2>More time zone and meeting planning guides</h2>

          <div className="related-grid">
            <a href="/best-meeting-times-remote-teams">
              <strong>Remote Team Scheduling</strong>
              <span>
                Learn how global teams create fair meeting windows across
                regions.
              </span>
            </a>

            <a href="/time-zone-meeting-planner-guide">
              <strong>Meeting Planner Guide</strong>
              <span>
                See how comparing cities and overlap windows makes planning
                faster.
              </span>
            </a>

            <a href="/fun-facts-about-time-zones">
              <strong>Fun Time Zone Facts</strong>
              <span>
                Explore unusual time zones, skipped days, and surprising global
                clock rules.
              </span>
            </a>
          </div>
        </section>

        <section className="bottom-cta">
          <div>
            <p>Ready to Plan Smarter?</p>
            <h2>Compare local times before you contact someone globally.</h2>
            <span>
              Use Best Meeting Time to review cities, overlap windows, and
              better international meeting times before sending the invite.
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
        .country-page {
          width: 100%;
          max-width: 1240px;
          margin: 18px auto 0;
          padding: 20px 20px 48px;
          background: #ffffff;
          color: #111827;
          border: 1px solid rgba(237,233,254,0.9);
          box-shadow: 0 24px 70px rgba(30,27,75,0.18);
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
          margin-bottom: 20px;
        }

        .brand-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .brand-logo {
          width: 170px;
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

        .header-cta span {
          font-size: 13px;
          font-weight: 900;
        }

        .header-cta small {
          font-size: 10px;
          font-weight: 800;
          opacity: 0.92;
        }

        .hero-section {
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: 22px;
          align-items: stretch;
          margin-bottom: 20px;
        }

        .hero-copy {
          background: linear-gradient(180deg, #180041 0%, #2e1065 100%);
          color: #ffffff;
          border-radius: 28px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .eyebrow {
          display: inline-flex;
          width: fit-content;
          margin: 0 0 14px;
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

        .hero-copy h1 {
          margin: 0 0 16px;
          color: #ffffff;
          font-size: clamp(40px, 5vw, 58px);
          line-height: 0.99;
          font-weight: 950;
          letter-spacing: -0.055em;
        }

        .hero-text {
          color: rgba(255,255,255,0.88);
          font-size: 16px;
          line-height: 1.65;
          margin: 0 0 18px;
        }

        .hero-points {
          display: grid;
          grid-template-columns: 1fr;
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
          color: #ffffff;
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
          display: grid;
          gap: 14px;
        }

        .globe-card {
          position: relative;
          min-height: 430px;
          border-radius: 28px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 45%, rgba(250,204,21,0.34) 0%, rgba(250,204,21,0) 34%),
            radial-gradient(circle at 30% 25%, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0) 32%),
            linear-gradient(135deg, #4c1d95 0%, #2563eb 48%, #7c3aed 100%);
          box-shadow: 0 20px 50px rgba(30,27,75,0.22);
        }

        .globe {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 220px;
          height: 220px;
          border-radius: 999px;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.24);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 118px;
          box-shadow: 0 24px 70px rgba(17,24,39,0.24);
        }

        .time-chip {
          position: absolute;
          background: rgba(255,255,255,0.94);
          border: 1px solid rgba(221,214,254,0.9);
          border-radius: 18px;
          padding: 13px 16px;
          min-width: 150px;
          box-shadow: 0 16px 34px rgba(30,27,75,0.18);
        }

        .time-chip span {
          display: block;
          color: #5b21b6;
          font-size: 12px;
          font-weight: 950;
          margin-bottom: 4px;
        }

        .time-chip strong {
          color: #111827;
          font-size: 22px;
          font-weight: 950;
        }

        .chip-ny {
          left: 30px;
          top: 34px;
        }

        .chip-london {
          right: 34px;
          top: 62px;
        }

        .chip-dubai {
          left: 42px;
          bottom: 54px;
        }

        .chip-tokyo {
          right: 42px;
          bottom: 36px;
        }

        .hero-action-panel {
          background: #f5f3ff;
          border: 1px solid #ddd6fe;
          border-radius: 22px;
          padding: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          box-shadow: 0 12px 28px rgba(91,33,182,0.08);
        }

        .hero-action-panel strong {
          display: block;
          color: #111827;
          font-size: 20px;
          font-weight: 950;
          margin-bottom: 6px;
        }

        .hero-action-panel span {
          display: block;
          color: #4b5563;
          font-size: 14px;
          line-height: 1.55;
        }

        .primary-cta {
          width: fit-content;
          background: #facc15;
          color: #111827;
          padding: 13px 18px;
          border-radius: 14px;
          text-decoration: none;
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 16px 30px rgba(0,0,0,0.14);
          white-space: nowrap;
        }

        .primary-cta span {
          color: #111827;
          font-size: 18px;
          font-weight: 950;
        }

        .primary-cta small {
          color: #111827;
          font-size: 12px;
          font-weight: 900;
        }

        .country-grid-section,
        .workflow-section,
        .related-reading {
          margin-bottom: 20px;
        }

        .country-grid-section h2,
        .culture-copy h2,
        .workflow-section h2,
        .related-reading h2 {
          margin: 0 0 18px;
          color: #111827;
          font-size: clamp(34px, 4vw, 46px);
          line-height: 1.08;
          font-weight: 950;
          letter-spacing: -0.04em;
          max-width: 980px;
        }

        .country-grid,
        .workflow-grid,
        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .country-grid article,
        .workflow-grid article,
        .related-grid a {
          background: linear-gradient(180deg, #ffffff 0%, #faf7ff 100%);
          border: 1px solid #ddd6fe;
          border-radius: 22px;
          padding: 24px;
          box-shadow: 0 14px 30px rgba(91,33,182,0.08);
          text-decoration: none;
        }

        .country-grid strong,
        .workflow-grid strong,
        .related-grid strong {
          display: block;
          color: #111827;
          font-size: 24px;
          line-height: 1.1;
          font-weight: 950;
          margin-bottom: 12px;
        }

        .country-grid span,
        .related-grid span {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.7;
        }

        .workflow-grid p {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.7;
          margin: 0;
        }

        .culture-section {
          background: #faf9ff;
          border: 1px solid #ddd6fe;
          border-radius: 28px;
          padding: 30px;
          margin-bottom: 20px;
        }

        .culture-copy p:last-child {
          color: #4b5563;
          font-size: 16px;
          line-height: 1.7;
          max-width: 900px;
          margin: 0 0 22px;
        }

        .culture-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .culture-grid div {
          background: #ffffff;
          border: 1px solid #ddd6fe;
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 12px 28px rgba(91,33,182,0.06);
        }

        .culture-grid strong {
          display: block;
          color: #111827;
          font-size: 19px;
          font-weight: 950;
          margin-bottom: 8px;
        }

        .culture-grid span {
          color: #4b5563;
          font-size: 14px;
          line-height: 1.6;
        }

        .bottom-cta {
          background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%);
          border-radius: 28px;
          padding: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .bottom-cta p {
          color: #facc15;
          font-size: 12px;
          font-weight: 950;
          margin: 0 0 10px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .bottom-cta h2 {
          color: #ffffff;
          font-size: clamp(32px, 4vw, 44px);
          line-height: 1.06;
          font-weight: 950;
          letter-spacing: -0.04em;
          margin: 0 0 10px;
        }

        .bottom-cta span {
          color: rgba(255,255,255,0.88);
          font-size: 15px;
          line-height: 1.7;
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
          justify-content: center;
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

        @media (max-width: 1100px) {
          .hero-section,
          .country-grid,
          .workflow-grid,
          .related-grid {
            grid-template-columns: 1fr;
          }

          .culture-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
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

        @media (max-width: 900px) {
          .country-page {
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
            gap: 12px 18px;
          }

          .header-cta {
            width: 100%;
            max-width: 340px;
          }

          .hero-copy,
          .culture-section,
          .bottom-cta {
            padding: 24px;
          }

          .hero-copy h1 {
            font-size: 42px;
          }

          .globe-card {
            min-height: 500px;
          }

          .hero-action-panel {
            flex-direction: column;
            align-items: stretch;
          }

          .primary-cta {
            width: 100%;
            box-sizing: border-box;
            align-items: center;
          }
        }

        @media (max-width: 560px) {
          .country-page {
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
          .country-grid-section h2,
          .culture-copy h2,
          .workflow-section h2,
          .related-reading h2,
          .bottom-cta h2 {
            font-size: 34px;
          }

          .hero-text,
          .culture-copy p:last-child,
          .workflow-grid p {
            font-size: 15px;
          }

          .globe-card {
            min-height: 520px;
          }

          .globe {
            width: 170px;
            height: 170px;
            font-size: 90px;
          }

          .time-chip {
            min-width: 132px;
            padding: 11px 13px;
          }

          .time-chip strong {
            font-size: 18px;
          }

          .chip-ny {
            left: 14px;
            top: 22px;
          }

          .chip-london {
            right: 14px;
            top: 112px;
          }

          .chip-dubai {
            left: 14px;
            bottom: 112px;
          }

          .chip-tokyo {
            right: 14px;
            bottom: 22px;
          }

          .culture-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
