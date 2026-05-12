/**
 * File: app/how-it-works/page.tsx
 * Version: v1.6 (PREMIUM INTENT BANNER FOR FEATURE CTA TRAFFIC)
 * Date: 2026-05-12
 *
 * PURPOSE:
 * - Preserve Schedule a Meeting mobile/tablet responsive layout
 * - Add a soft premium-intent banner when users arrive from Features page premium buttons
 * - Keep users inside the real planner workflow instead of duplicating premium logic
 * - Preserve ToolPreviewSection logic and all protected payment behavior
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No premium/payment logic changes
 * - No ToolPreviewSection logic changes
 *
 * ROLLBACK:
 * - Revert to v1.5 if the premium intent banner does not test cleanly
 */

import ToolPreviewSection from "../ui/ToolPreviewSection";

type HowItWorksPageProps = {
  searchParams?: {
    premium?: string;
  };
};

export default function HowItWorksPage({ searchParams }: HowItWorksPageProps) {
  const premiumIntent = searchParams?.premium;

  const showPremiumBanner =
    premiumIntent === "share" ||
    premiumIntent === "google" ||
    premiumIntent === "outlook" ||
    premiumIntent === "calendar";

  return (
    <main className="schedule-page">
      <section className="schedule-shell">
        <header className="schedule-header">
          <a href="/" className="brand" aria-label="Best Meeting Time home">
            <img
              src="/images/branding/logo.png"
              alt="Best Meeting Time"
              className="brand-logo"
            />
          </a>

          <nav className="nav" aria-label="How It Works navigation">
            <a href="/">Home</a>
            <a href="/how-it-works" className="active">Schedule a Meeting</a>
            <a href="/features">Features</a>
            <a href="/guides">Guides</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>

          <a href="/how-it-works#schedule-tool" className="nav-cta">
            <span>Schedule a Meeting</span>
            <small>Free to try — no sign-up</small>
          </a>
        </header>

        <section id="schedule-tool" className="tool-section">
          <div className="planner-intro">
            <h1>Find the Best Meeting Times Across Time Zones</h1>
          </div>

          {showPremiumBanner && (
            <div className="premium-intent-banner">
              <strong>Premium sharing and calendar tools</strong>
              <span>
                Start by finding the best meeting time below. After your free
                planning sessions, you can unlock sharing and calendar tools.
              </span>
            </div>
          )}

          <div className="planner-tool-wrap">
            <ToolPreviewSection />
          </div>
        </section>
      </section>

      <footer className="schedule-footer">
        <a href="/">Home</a>
        <a href="/guides">Guides</a>
        <a href="/contact">Contact</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </footer>

      <style>{`
        .schedule-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #4c1d95 0%, #312e81 100%);
          color: #ffffff;
          padding: 22px 20px 58px;
          overflow-x: hidden;
        }

        .schedule-shell {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          background: #ffffff;
          color: #111827;
          border: 1px solid rgba(237,233,254,0.9);
          box-shadow: 0 24px 70px rgba(30,27,75,0.18);
          padding: 14px 18px 22px;
          overflow-x: hidden;
        }

        .schedule-header {
          min-height: 58px;
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
          line-height: 1.16;
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
          opacity: 0.92;
          color: #ffffff;
        }

        .tool-section {
          max-width: 1120px;
          margin: 0 auto;
          padding: 18px 0 0;
          scroll-margin-top: 24px;
        }

        .planner-intro {
          text-align: center;
          margin: 0 auto 44px;
          max-width: 100%;
          position: relative;
          z-index: 2;
        }

        .planner-intro h1 {
          color: #111827;
          font-size: clamp(22px, 2.1vw, 29px);
          line-height: 1.1;
          font-weight: 950;
          letter-spacing: -0.04em;
          margin: 0;
          white-space: nowrap;
        }

        .premium-intent-banner {
          max-width: 880px;
          margin: -24px auto 22px;
          padding: 14px 18px;
          border: 1px solid #ddd6fe;
          border-radius: 14px;
          background: #faf9ff;
          color: #111827;
          display: grid;
          gap: 5px;
          text-align: center;
          box-shadow: 0 12px 28px rgba(91,33,182,0.08);
        }

        .premium-intent-banner strong {
          color: #5b21b6;
          font-size: 14px;
          font-weight: 950;
        }

        .premium-intent-banner span {
          color: #4b5563;
          font-size: 13px;
          line-height: 1.45;
          font-weight: 700;
        }

        .planner-tool-wrap {
          margin-top: 0;
          position: relative;
          z-index: 1;
        }

        .schedule-footer {
          border-top: 1px solid rgba(255,255,255,0.14);
          padding: 22px 20px 30px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 18px;
        }

        .schedule-footer a {
          color: #ddd6fe;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .schedule-page {
            padding: 16px 10px 50px;
          }

          .schedule-shell {
            padding: 14px;
          }

          .schedule-header {
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px 16px;
            margin-bottom: 18px;
          }

          .brand {
            width: 100%;
            justify-content: center;
          }

          .brand-logo {
            width: 155px;
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
            max-width: 330px;
            margin: 0 auto;
          }

          .planner-intro {
            margin-bottom: 24px;
            padding: 0 6px;
          }

          .planner-intro h1 {
            font-size: clamp(24px, 7vw, 34px);
            white-space: normal;
          }

          .premium-intent-banner {
            margin: -8px auto 18px;
            padding: 13px 14px;
          }

          .planner-tool-wrap {
            width: 100%;
            max-width: 100%;
            overflow-x: hidden;
          }
        }

        @media (max-width: 560px) {
          .schedule-page {
            padding: 12px 8px 46px;
          }

          .schedule-shell {
            padding: 12px;
          }

          .brand-logo {
            width: 145px;
          }

          .nav {
            gap: 10px 14px;
          }

          .nav a {
            font-size: 12px;
          }

          .planner-intro h1 {
            font-size: 26px;
            line-height: 1.12;
          }

          .premium-intent-banner strong {
            font-size: 13px;
          }

          .premium-intent-banner span {
            font-size: 12.5px;
          }
        }
      `}</style>
    </main>
  );
}
