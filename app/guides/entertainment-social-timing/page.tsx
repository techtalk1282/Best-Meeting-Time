/* 
File: app/guides/entertainment-social-timing/page.tsx
Version: 3.0
Purpose: Rebuild entertainment & social timing guide using the SAME
working layout structure/style approach as the Cultural Timing page.

Rollback:
- Restore previous version if needed.

Commit Message:
fix(guides): rebuild entertainment timing page with embedded css layout
*/

import Image from "next/image";
import Link from "next/link";

export default function EntertainmentSocialTimingPage() {
  return (
    <main className="page-shell">
      <div className="page-container">
        {/* NAVIGATION */}
        <header className="top-nav">
          <Link href="/" className="brand">
            Best Meeting Time
          </Link>

          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/features">Features</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <Link href="/" className="cta-button">
            Schedule a Meeting
            <span>Free to try — no sign-up</span>
          </Link>
        </header>

        {/* HERO */}
        <section className="hero-section">
          <div className="hero-copy">
            <div className="guide-pill">
              ENTERTAINMENT & SOCIAL TIMING GUIDE
            </div>

            <h1>
              Entertainment & Social Timing Across the World
            </h1>

            <p>
              From live streams and global gaming events to sports,
              movies, and social hangouts — timing makes every
              experience better. Find the best times to play,
              watch, and connect across every time zone.
            </p>

            <div className="hero-feature-grid">
              <div className="hero-feature">
                <div className="feature-icon">🎮</div>
                <h3>Global Gaming</h3>
                <p>Find the best times for events and raids</p>
              </div>

              <div className="hero-feature">
                <div className="feature-icon">📺</div>
                <h3>Streaming</h3>
                <p>Catch premieres and releases worldwide</p>
              </div>

              <div className="hero-feature">
                <div className="feature-icon">⚽</div>
                <h3>Sports Timing</h3>
                <p>Never miss a global event again</p>
              </div>
            </div>
          </div>

          <div className="hero-image-card">
            <Image
              src="/images/guides/entertainment_social_hero.png"
              alt="Entertainment and social timing worldwide"
              width={1400}
              height={900}
              className="guide-image"
              priority
            />
          </div>
        </section>

        {/* INTRO */}
        <section className="intro-section">
          <h2>
            Timing shapes the entertainment experience.
          </h2>

          <p>
            A live sports match at the perfect local hour creates
            excitement. A poorly timed gaming event can exclude
            half your community. Understanding time zones helps
            people connect socially without burnout, spoilers,
            or missed moments.
          </p>
        </section>

        {/* QUESTION 1 */}
        <section className="question-section">
          <div className="question-copy">
            <div className="question-pill">
              QUESTION 1
            </div>

            <h2>
              When is the best time for global gaming events?
            </h2>

            <p>
              Online gaming communities often include players from
              North America, Europe, Asia, Australia, and South
              America all at the same time.
            </p>

            <p>
              Weekend afternoons in North America usually overlap
              reasonably well with evening hours in Europe.
              However, those same times may become extremely late
              in Asia or very early in Australia.
            </p>

            <p>
              Rotating schedules for raids, tournaments, and
              community events helps prevent one region from
              always being excluded.
            </p>
          </div>

          <div className="question-image-card">
            <Image
              src="/images/guides/global_gaming_events.png"
              alt="Best times for global gaming events"
              width={1400}
              height={900}
              className="guide-image"
            />
          </div>
        </section>

        {/* QUESTION 2 */}
        <section className="question-section reverse-layout">
          <div className="question-image-card">
            <Image
              src="/images/guides/streaming_sports_timing.png"
              alt="Streaming and sports timing worldwide"
              width={1400}
              height={900}
              className="guide-image"
            />
          </div>

          <div className="question-copy">
            <div className="question-pill">
              QUESTION 2
            </div>

            <h2>
              Why does timing matter for streaming and live sports?
            </h2>

            <p>
              Streaming platforms release shows globally, but
              audiences often experience premieres at completely
              different local times.
            </p>

            <p>
              Sports fans also deal with difficult schedules.
              International tournaments may air late at night
              or early in the morning depending on where the
              event takes place.
            </p>

            <p>
              Understanding local time differences helps viewers
              avoid missed events, spoilers, and scheduling
              confusion.
            </p>
          </div>
        </section>
      </div>

      <style>{`
        .page-shell {
          background: linear-gradient(
            180deg,
            #4c1d95 0%,
            #312e81 100%
          );
          min-height: 100vh;
          padding: 32px 20px 80px;
        }

        .page-container {
          max-width: 1180px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 28px;
          padding: 24px 32px 48px;
        }

        .top-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid #e9ddff;
          margin-bottom: 48px;
          gap: 24px;
        }

        .brand {
          font-size: 2rem;
          font-weight: 800;
          color: #5b21b6;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .nav-links a {
          color: #111827;
          text-decoration: none;
          font-weight: 700;
        }

        .cta-button {
          background: #6d28d9;
          color: white;
          text-decoration: none;
          padding: 14px 20px;
          border-radius: 14px;
          font-weight: 800;
          display: flex;
          flex-direction: column;
          line-height: 1.1;
          text-align: center;
          min-width: 190px;
        }

        .cta-button span {
          font-size: 0.78rem;
          opacity: 0.9;
        }

        .hero-section,
        .question-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 72px;
        }

        .reverse-layout {
          grid-template-columns: 1fr 1fr;
        }

        .guide-pill,
        .question-pill {
          display: inline-block;
          background: #efe7ff;
          color: #6d28d9;
          padding: 10px 18px;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .hero-copy h1,
        .question-copy h2 {
          font-size: 4rem;
          line-height: 0.95;
          color: #0f172a;
          margin-bottom: 24px;
          font-weight: 900;
        }

        .hero-copy p,
        .question-copy p,
        .intro-section p {
          font-size: 1.2rem;
          line-height: 1.9;
          color: #475569;
          margin-bottom: 24px;
        }

        .hero-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 32px;
        }

        .hero-feature {
          border: 1px solid #e9ddff;
          border-radius: 20px;
          padding: 20px;
          text-align: center;
        }

        .feature-icon {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .hero-feature h3 {
          font-size: 1.1rem;
          margin-bottom: 8px;
          color: #111827;
        }

        .hero-feature p {
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
        }

        .hero-image-card,
        .question-image-card {
          border: 1px solid #e9ddff;
          border-radius: 28px;
          overflow: hidden;
          background: #ffffff;
        }

        .guide-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .intro-section {
          text-align: center;
          margin-bottom: 72px;
        }

        .intro-section h2 {
          font-size: 3rem;
          line-height: 1.1;
          margin-bottom: 20px;
          color: #0f172a;
        }

        @media (max-width: 980px) {
          .hero-section,
          .question-section,
          .reverse-layout {
            grid-template-columns: 1fr;
          }

          .hero-copy h1,
          .question-copy h2 {
            font-size: 3rem;
          }

          .hero-feature-grid {
            grid-template-columns: 1fr;
          }

          .top-nav {
            flex-direction: column;
            align-items: flex-start;
          }

          .nav-links {
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .page-container {
            padding: 20px;
          }

          .hero-copy h1,
          .question-copy h2 {
            font-size: 2.4rem;
          }

          .intro-section h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </main>
  );
}
