/**
 * File: app/blog/page.tsx
 * Version: v3.3 (BLOG CTA CONTRAST AND ARTICLE ROUTE FIX)
 * Date: 2026-05-12
 *
 * PURPOSE:
 * - Fix bottom CTA small text visibility and spacing
 * - Keep top CTA unchanged
 * - Correct the Time Zones article route so it does not point to the Time Zone Basics guide
 * - Preserve responsive layout and current blog design
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v3.2 if this update does not test cleanly
 */

import FooterSection from "../ui/FooterSection";

export default function BlogPage() {
  return (
    <>
      <main className="blog-page">
        <header className="blog-header">
          <a href="/" className="brand" aria-label="Best Meeting Time home">
            <img
              src="/images/branding/logo.png"
              alt="Best Meeting Time"
              className="brand-logo"
            />
          </a>

          <nav className="nav" aria-label="Blog navigation">
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

        <section className="hero-card">
          <p className="eyebrow">Time Zone Scheduling Insights</p>

          <h1>Better Meeting Times for Remote Teams, Clients, and Global Work</h1>

          <p>
            Practical articles to help you avoid bad meeting times, compare time
            zones faster, and schedule with more confidence.
          </p>
        </section>

        <section className="article-grid" aria-label="Featured scheduling articles">
          <a href="/best-meeting-times-remote-teams" className="article-card">
            <span>Remote Teams</span>
            <h2>Stop Scheduling Remote Meetings at the Worst Possible Time</h2>
            <p>
              Learn how to find fair overlap windows for teams working across
              cities, countries, and different workdays.
            </p>
            <strong>Read the remote team guide →</strong>
          </a>

         <a href="/how-to-schedule-meetings-across-time-zones" className="article-card">
  <span>Time Zone Basics</span>
  <h2>Time Zones Explained: Clocks, Sunlight, and Global Time</h2>
  <p>
    Learn how time zones work, why clocks change, and why checking local
    time matters before scheduling across countries.
  </p>
  <strong>Read the time zone basics guide →</strong>
</a>

          <a href="/time-zone-meeting-planner-guide" className="article-card">
            <span>Planner Guide</span>
            <h2>What a Time Zone Meeting Planner Actually Helps You Do</h2>
            <p>
              See how comparing cities, local times, duration, and recommended
              windows can make scheduling faster.
            </p>
            <strong>Read the planner guide →</strong>
          </a>
        </section>

        <section className="bottom-band">
          <div>
            <p>Start Planning</p>
            <h2>Ready to find a better meeting time?</h2>
            <span>
              Compare cities and review recommended meeting windows before you
              send the invite.
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
        .blog-page {
          width: 100%;
          max-width: 1120px;
          margin: 18px auto 0;
          padding: 18px 18px 42px;
          background: #ffffff;
          color: #111827;
          border: 1px solid rgba(237,233,254,0.9);
          box-shadow: 0 24px 70px rgba(30,27,75,0.18);
          box-sizing: border-box;
          overflow: hidden;
        }

        .blog-header {
          min-height: 66px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border-bottom: 1px solid #ede9fe;
          margin-bottom: 14px;
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

        .hero-card {
          text-align: center;
          padding: 30px 24px 22px;
          border-bottom: 1px solid #ede9fe;
        }

        .eyebrow {
          display: inline-block;
          margin: 0 0 12px;
          padding: 7px 13px;
          border-radius: 999px;
          background: #f3efff;
          color: #5b21b6;
          font-size: 12px;
          font-weight: 900;
        }

        .hero-card h1 {
          max-width: 780px;
          margin: 0 auto 12px;
          color: #111827;
          font-size: clamp(34px, 4vw, 48px);
          line-height: 1.06;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .hero-card p:last-child {
          max-width: 720px;
          margin: 0 auto;
          color: #6b7280;
          font-size: 16px;
          line-height: 1.6;
          font-weight: 500;
        }

        .article-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          padding: 22px 10px 18px;
        }

        .article-card {
          min-height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
          background: #faf9ff;
          border: 1px solid #ddd6fe;
          border-radius: 16px;
          padding: 22px;
          text-decoration: none;
          color: #111827;
          box-shadow: 0 12px 28px rgba(91,33,182,0.08);
        }

        .article-card span {
          color: #6d28d9;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .article-card h2 {
          color: #111827;
          font-size: 22px;
          line-height: 1.15;
          font-weight: 950;
          margin: 0;
        }

        .article-card p {
          color: #4b5563;
          font-size: 15px;
          line-height: 1.55;
          margin: 0;
        }

        .article-card strong {
          color: #5b21b6;
          font-size: 14px;
          font-weight: 900;
        }

        .bottom-band {
          margin: 0 10px;
          padding: 18px 20px;
          border-radius: 14px;
          background: #5b21b6;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .bottom-band p {
          margin: 0 0 4px;
          color: #facc15;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .bottom-band h2 {
          margin: 0 0 4px;
          color: #ffffff;
          font-size: 22px;
          font-weight: 950;
        }

        .bottom-band span {
          display: block;
          color: rgba(255,255,255,0.86);
          font-size: 14px;
          line-height: 1.5;
        }

        .bottom-band a {
          background: #ffffff;
          color: #5b21b6;
          padding: 12px 17px;
          border-radius: 9px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          line-height: 1.18;
          min-width: 170px;
          box-shadow: 0 10px 22px rgba(30,27,75,0.18);
        }

        .bottom-band a strong {
          color: #5b21b6;
          font-size: 13px;
          font-weight: 950;
        }

        .bottom-band a small {
          color: #5b21b6;
          font-size: 10px;
          font-weight: 900;
          opacity: 1;
        }

        @media (max-width: 900px) {
          .blog-page {
            margin: 16px auto 0;
            padding: 16px;
            max-width: calc(100% - 24px);
          }

          .blog-header {
            flex-wrap: wrap;
            justify-content: center;
            gap: 14px;
            text-align: center;
          }

          .brand {
            width: 100%;
            justify-content: center;
          }

          .brand-logo {
            width: 170px;
          }

          .nav {
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px 18px;
          }

          .nav a {
            font-size: 13px;
          }

          .nav-cta {
            width: 100%;
            max-width: 320px;
            min-width: 0;
          }

          .hero-card {
            padding: 28px 10px 20px;
          }

          .hero-card h1 {
            font-size: 38px;
          }

          .article-grid {
            grid-template-columns: 1fr;
            padding: 20px 0 18px;
          }

          .article-card {
            min-height: auto;
          }

          .bottom-band {
            margin: 0;
            flex-direction: column;
            text-align: center;
            align-items: stretch;
          }

          .bottom-band a {
            width: 100%;
            min-width: 0;
            box-sizing: border-box;
          }
        }

        @media (max-width: 560px) {
          .blog-page {
            max-width: calc(100% - 20px);
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

          .hero-card h1 {
            font-size: 34px;
          }

          .hero-card p:last-child {
            font-size: 15px;
          }

          .article-card {
            padding: 20px;
          }

          .article-card h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
}
