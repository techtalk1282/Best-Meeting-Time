/**
 * File: app/blog/page.tsx
 * Version: v3.5 (COMPACT FOUR-CARD BLOG VIEWPORT FIX)
 * Date: 2026-05-13
 *
 * PURPOSE:
 * - Remove low-value hero eyebrow to move content higher
 * - Preserve the new 2 x 2 blog article grid
 * - Keep the country contact article linked from Blog
 * - Tighten vertical spacing so the Blog page fits better at 100% desktop zoom
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v3.4 if this update does not test cleanly
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
            <a href="/blog" className="active">
              Blog
            </a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          <a href="/how-it-works#schedule-tool" className="nav-cta">
            <span>Schedule a Meeting</span>
            <small>Free to try — no sign-up</small>
          </a>
        </header>

        <section className="hero-card">
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

          <a
            href="/best-times-to-contact-different-countries"
            className="article-card"
          >
            <span>International Timing</span>
            <h2>Best Times to Contact Different Countries</h2>
            <p>
              Learn when to contact Japan, the UK, Australia, India, Dubai, and
              other regions without awkward off-hour requests.
            </p>
            <strong>Read the country timing guide →</strong>
          </a>

          <a href="/fun-facts-about-time-zones" className="article-card">
            <span>Fun Time Zone Facts</span>
            <h2>Fun Facts About Time Zones Around the World</h2>
            <p>
              Discover unusual UTC offsets, countries with surprising clocks,
              the International Date Line, and strange time zone stories.
            </p>
            <strong>Read the fun facts article →</strong>
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
          margin: 10px auto 0;
          padding: 14px 18px 32px;
          background: #ffffff;
          color: #111827;
          border: 1px solid rgba(237,233,254,0.9);
          box-shadow: 0 24px 70px rgba(30,27,75,0.18);
          box-sizing: border-box;
          overflow: hidden;
        }

        .blog-header {
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border-bottom: 1px solid #ede9fe;
          margin-bottom: 10px;
        }

        .brand {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .brand-logo {
          display: block;
          width: 150px;
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
          padding: 8px 15px;
          border-radius: 8px;
          font-weight: 900;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          line-height: 1.16;
          min-width: 150px;
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
          padding: 18px 24px 16px;
          border-bottom: 1px solid #ede9fe;
        }

        .hero-card h1 {
          max-width: 760px;
          margin: 0 auto 8px;
          color: #111827;
          font-size: clamp(30px, 3.4vw, 42px);
          line-height: 1.04;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .hero-card p:last-child {
          max-width: 700px;
          margin: 0 auto;
          color: #6b7280;
          font-size: 15px;
          line-height: 1.45;
          font-weight: 500;
        }

        .article-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          padding: 16px 10px 14px;
        }

        .article-card {
          min-height: 205px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 9px;
          background: #faf9ff;
          border: 1px solid #ddd6fe;
          border-radius: 16px;
          padding: 17px;
          text-decoration: none;
          color: #111827;
          box-shadow: 0 12px 28px rgba(91,33,182,0.08);
        }

        .article-card span {
          color: #6d28d9;
          font-size: 11px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .article-card h2 {
          color: #111827;
          font-size: 20px;
          line-height: 1.1;
          font-weight: 950;
          margin: 0;
        }

        .article-card p {
          color: #4b5563;
          font-size: 14px;
          line-height: 1.42;
          margin: 0;
        }

        .article-card strong {
          color: #5b21b6;
          font-size: 14px;
          font-weight: 900;
        }

        .bottom-band {
          margin: 0 10px;
          padding: 16px 18px;
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
          font-size: 21px;
          font-weight: 950;
        }

        .bottom-band span {
          display: block;
          color: rgba(255,255,255,0.86);
          font-size: 14px;
          line-height: 1.45;
        }

        .bottom-band a {
          background: #ffffff;
          color: #5b21b6;
          padding: 11px 16px;
          border-radius: 9px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          line-height: 1.18;
          min-width: 166px;
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
