/**
 * File: app/blog/page.tsx
 * Version: v3.6 (BALANCED SIX-CARD BLOG GRID)
 * Date: 2026-05-13
 *
 * PURPOSE:
 * - Add the Why Remote Teams Struggle With Scheduling article to Blog
 * - Convert Blog to a balanced 3 x 2 desktop grid
 * - Preserve 100% desktop viewport fit
 * - Keep Blog visually balanced with no hanging wide card
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 *
 * ROLLBACK:
 * - Revert to v3.5 if this update does not test cleanly
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

          <div className="header-actions">
  <div
    className="social-links"
    aria-label="Best Meeting Time social links"
  >
    
  </div>

  <div className="header-actions">
  <div className="social-links" aria-label="Best Meeting Time social links">
    <a
      href="https://youtube.com/shorts/gvC3O4W8NBI?feature=share"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Watch Best Meeting Time on YouTube"
      className="social-link youtube-link"
    >
      ▶
    </a>

    <a
      href="https://www.facebook.com/profile.php?id=61590738985034"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Best Meeting Time on Facebook"
      className="social-link facebook-link"
    >
      f
    </a>
  </div>

  <a href="/how-it-works#schedule-tool" className="nav-cta">
    <span>Schedule a Meeting</span>
    <small>Free to try — no sign-up</small>
  </a>
</div>
</div>
        </header>

        <section className="hero-card">
          <h1>Better Meeting Times for Remote Teams, Clients, and Global Work</h1>
          <p>Practical articles to help teams schedule better across time zones.</p>
        </section>

        <section className="article-grid" aria-label="Featured scheduling articles">
          <a href="/best-meeting-times-remote-teams" className="article-card">
            <span>Remote Teams</span>
            <h2>Stop Scheduling Remote Meetings at the Worst Possible Time</h2>
            <p>Find fair overlap windows for teams across cities and countries.</p>
            <strong>Read the remote guide →</strong>
          </a>

          <a href="/best-times-to-contact-different-countries" className="article-card">
            <span>International Timing</span>
            <h2>Best Times to Contact Different Countries</h2>
            <p>Know when to contact Japan, the UK, Australia, India, and Dubai.</p>
            <strong>Read the country guide →</strong>
          </a>

          <a href="/fun-facts-about-time-zones" className="article-card">
            <span>Fun Facts</span>
            <h2>Fun Facts About Time Zones Around the World</h2>
            <p>Explore strange clocks, UTC offsets, and the International Date Line.</p>
            <strong>Read the fun facts →</strong>
          </a>

          <a href="/how-to-plan-global-team-meetings" className="article-card">
  <span>Global Coordination</span>
  <h2>How To Plan Global Team Meetings</h2>
  <p>Learn how global teams coordinate across regions, schedules, and time zones.</p>
  <strong>Read the global guide →</strong>
</a>

          <a href="/best-meeting-times-us-and-europe" className="article-card">
            <span>US and Europe</span>
            <h2>Best Meeting Times Between the US and Europe</h2>
            <p>Find stronger overlap windows for American and European teams.</p>
            <strong>Read the US Europe guide →</strong>
          </a>

          <a href="/why-remote-teams-struggle-with-scheduling" className="article-card">
            <span>Remote Work</span>
            <h2>Why Remote Teams Struggle With Scheduling</h2>
            <p>Learn why global teams miss better meeting windows and how to fix it.</p>
            <strong>Read the remote work guide →</strong>
          </a>
        </section>

        <section className="bottom-band">
          <div>
            <p>Start Planning</p>
            <h2>Ready to find a better meeting time?</h2>
            <span>Compare cities and review recommended meeting windows before you send the invite.</span>
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
          margin: 8px auto 0;
          padding: 12px 18px 28px;
          background: #ffffff;
          color: #111827;
          border: 1px solid rgba(237,233,254,0.9);
          box-shadow: 0 24px 70px rgba(30,27,75,0.18);
          box-sizing: border-box;
          overflow: hidden;
        }

        .blog-header {
          min-height: 54px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border-bottom: 1px solid #ede9fe;
          margin-bottom: 8px;
        }

        .brand {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .brand-logo {
          display: block;
          width: 145px;
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
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.social-link {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 950;
  box-shadow: 0 8px 18px rgba(30,27,75,0.16);
}

.youtube-link {
  background: #dc2626;
}

.facebook-link {
  background: #2563eb;
  font-family: Arial, sans-serif;
}
        .nav-cta {
          background: #5b21b6;
          color: #ffffff;
          padding: 8px 15px;
          border-radius: 8px;
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
        }

        .hero-card {
          text-align: center;
          padding: 12px 24px 10px;
          border-bottom: 1px solid #ede9fe;
        }

        .hero-card h1 {
          max-width: 760px;
          margin: 0 auto 4px;
          color: #111827;
          font-size: clamp(28px, 3.2vw, 40px);
          line-height: 1.03;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .hero-card p {
          max-width: 700px;
          margin: 0 auto;
          color: #6b7280;
          font-size: 14px;
          line-height: 1.35;
          font-weight: 500;
        }

        .article-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          padding: 14px 10px 12px;
          align-items: stretch;
        }

        .article-card {
          min-height: 158px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 7px;
          background: #faf9ff;
          border: 1px solid #ddd6fe;
          border-radius: 16px;
          padding: 15px;
          text-decoration: none;
          color: #111827;
          box-shadow: 0 12px 28px rgba(91,33,182,0.08);
        }

        .article-card span {
          color: #6d28d9;
          font-size: 10px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .article-card h2 {
          color: #111827;
          font-size: 17px;
          line-height: 1.08;
          font-weight: 950;
          margin: 0;
        }

        .article-card p {
          color: #4b5563;
          font-size: 13px;
          line-height: 1.36;
          margin: 0;
        }

        .article-card strong {
          color: #5b21b6;
          font-size: 13px;
          font-weight: 900;
        }

        .bottom-band {
          margin: 0 10px;
          padding: 14px 16px;
          border-radius: 14px;
          background: #5b21b6;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .bottom-band p {
          margin: 0 0 3px;
          color: #facc15;
          font-size: 11px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .bottom-band h2 {
          margin: 0 0 3px;
          color: #ffffff;
          font-size: 20px;
          font-weight: 950;
        }

        .bottom-band span {
          display: block;
          color: rgba(255,255,255,0.86);
          font-size: 13px;
          line-height: 1.35;
        }

        .bottom-band a {
          background: #ffffff;
          color: #5b21b6;
          padding: 10px 15px;
          border-radius: 9px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          line-height: 1.16;
          min-width: 162px;
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
        }

        @media (max-width: 1000px) {
          .article-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
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

         .header-actions {
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
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

          .hero-card p {
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
