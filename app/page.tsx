/**
 * File: app/page.tsx
 * Version: v4.9 (FINAL HOMEPAGE RESPONSIVE MOBILE FIT)
 * Date: 2026-05-11
 *
 * PURPOSE:
 * - Fix homepage mobile and tablet cutoff using the same successful pattern as Features, Blog, About, Contact, and Schedule pages
 * - Replace fragile inline mobile overrides with scoped class-based responsive CSS
 * - Preserve homepage marketing content, routing, premium preview, and desktop presentation
 * - Keep homepage as marketing preview
 *
 * PROTECTED:
 * - No Stripe changes
 * - No checkout changes
 * - No webhook changes
 * - No KV changes
 * - No ToolPreviewSection changes
 * - No ToolPreviewMobile changes
 *
 * ROLLBACK:
 * - Revert app/page.tsx to v4.8 if this layout does not test cleanly
 */

import dynamic from "next/dynamic";

import LayoutShell from "./ui/LayoutShell";
import FooterSection from "./ui/FooterSection";

const VerifyPremium = dynamic(() => import("./ui/VerifyPremium"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <VerifyPremium />

      <LayoutShell
        hero={
          <main className="home-page">
            <header className="home-header">
              <a href="/" className="brand" aria-label="Best Meeting Time home">
                <img
                  src="/images/branding/logo.png"
                  alt="Best Meeting Time"
                  className="brand-logo"
                />
              </a>

              <nav className="nav" aria-label="Homepage navigation">
                <a href="/">Home</a>
                <a href="/how-it-works">Schedule a Meeting</a>
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

            <section className="hero">
              <div className="hero-copy">
                <p className="pill">Trusted Time Zone Meeting Planner</p>

                <h1>Schedule the Best Meeting Times Worldwide</h1>

                <p className="hero-text">
                  Smarter scheduling across time zones — fast, simple, and
                  accurate.
                </p>

                <div className="hero-bullets">
                  <div>
                    <strong>Compare cities and time zones instantly</strong>
                    <span>
                      View local times side by side for teams, clients,
                      freelancers, and remote meetings across different regions.
                    </span>
                  </div>

                  <div>
                    <strong>Find recommended meeting windows faster</strong>
                    <span>
                      Avoid manual time zone conversion and quickly choose a
                      practical meeting time that works for both locations.
                    </span>
                  </div>

                  <div>
                    <strong>Start planning without an account</strong>
                    <span>
                      Use the meeting time planner first, then unlock more
                      scheduling options if you need premium planning tools.
                    </span>
                  </div>
                </div>

                <div className="trust-row">
                  <span>Free to Try</span>
                  <span>No Sign-up</span>
                  <span>Works Worldwide</span>
                </div>
              </div>

              <div className="planner-card">
              <p className="section-eyebrow">Preview of the Best Meeting Time scheduler</p>
                <h2>Recommended meeting window</h2>

                <div className="city-grid">
                  <div className="city-card">
                    <div className="city-header">
                      <strong>New York, USA</strong>
                      <img
                        src="https://flagcdn.com/w40/us.png"
                        alt="United States flag"
                      />
                    </div>

                    <span className="label">Current Time</span>
                    <strong className="time">9:00 AM EDT</strong>
                    <span className="muted">Local time</span>
                  </div>

                  <div className="city-card">
                    <div className="city-header">
                      <strong>London, UK</strong>
                      <img
                        src="https://flagcdn.com/w40/gb.png"
                        alt="United Kingdom flag"
                      />
                    </div>

                    <span className="label">Current Time</span>
                    <strong className="time">2:00 PM BST</strong>
                    <span className="muted">Same meeting time</span>
                  </div>
                </div>

                <div className="duration-row">
                  <span>Meeting Duration</span>
                  <strong>60 minutes</strong>
                </div>

                <div className="best-time-card">
                  <span>Best Meeting Time</span>
                  <strong>New York: 9:00 AM – 10:00 AM</strong>
                  <strong>London: 2:00 PM – 3:00 PM</strong>
                </div>

                <a href="/how-it-works#schedule-tool" className="planner-button">
                  Schedule a Meeting
                </a>

                <p className="free-note">Free to try — no sign-up required.</p>
              </div>
            </section>

            <section id="premium-tools" className="content-section">
              <div className="section-header">
                <p className="section-eyebrow">Premium Tools</p>
                <h2>Plan, Share, and Add Meetings Faster</h2>
                <p>
                  After finding the best meeting time, unlock planning tools to
                  share your selected window and add it to your calendar
                  workflow.
                </p>
              </div>

              <div className="premium-row">
                <a href="/how-it-works#schedule-tool">Share Link</a>
                <a href="/how-it-works#schedule-tool">Add to Google</a>
                <a href="/how-it-works#schedule-tool">Add to Outlook</a>
                <a href="/how-it-works#schedule-tool">Add to Calendar</a>
              </div>
            </section>

            <section id="features" className="content-section">
              <div className="section-header">
                <p className="section-eyebrow">Features</p>
                <h2>Plan Meetings Across Time Zones Faster</h2>
                <p>
                  Best Meeting Time helps you compare cities, review local
                  times, and choose better meeting windows without guesswork.
                </p>
              </div>

              <div className="feature-grid">
                <article>
                  <strong>Live Time Comparison</strong>
                  <span>Check both locations before choosing a meeting time.</span>
                </article>

                <article>
                  <strong>Recommended Meeting Windows</strong>
                  <span>See practical time options for both cities.</span>
                </article>

                <article>
                  <strong>Remote Team Scheduling</strong>
                  <span>Useful for teams, consultants, clients, and partners.</span>
                </article>

                <article>
                  <strong>Free Planning Start</strong>
                  <span>Begin without creating an account or signing in.</span>
                </article>
              </div>
            </section>

            <section id="how-it-works" className="content-section">
              <div className="section-header">
                <p className="section-eyebrow">How It Works</p>
                <h2>How Best Meeting Time Works</h2>
                <p>A simple three-step flow for scheduling across time zones.</p>
              </div>

              <div className="how-grid">
                <article>
                  <strong>Select locations</strong>
                  <span>Choose the cities or time zones for your meeting.</span>
                </article>

                <article>
                  <strong>Compare local times</strong>
                  <span>View both locations side by side before scheduling.</span>
                </article>

                <article>
                  <strong>Pick the best window</strong>
                  <span>Use recommended times to schedule with confidence.</span>
                </article>
              </div>
            </section>

            <section id="resources" className="content-section">
              <div className="section-header">
                <p className="section-eyebrow">Resources</p>
                <h2>Helpful Resources to Schedule Better Meetings</h2>
                <p>Guides and tips to help you collaborate across time zones.</p>
              </div>

              <div className="resources-grid">
                <a href="/how-to-schedule-meetings-across-time-zones">
                  <strong>How to Schedule Across Time Zones</strong>
                  <span>Step-by-step guide for global teams.</span>
                </a>

                <a href="/best-meeting-times-remote-teams">
                  <strong>Best Meeting Times for Remote Teams</strong>
                  <span>Practical tips that actually work.</span>
                </a>

                <a href="/time-zone-meeting-planner-guide">
                  <strong>Time Zone Meeting Planner Guide</strong>
                  <span>Master your zone planning.</span>
                </a>

                <a href="/global-meeting-scheduling-tips">
                  <strong>Global Meeting Scheduling Tips</strong>
                  <span>Expert tips for faster scheduling.</span>
                </a>

                <a href="/guides">
                  <strong>Meeting Time Zone Converter Guide</strong>
                  <span>Understand time zones easily.</span>
                </a>
              </div>

              <div className="cta-band">
                <div>
                  <strong>Ready to find the best time for your next meeting?</strong>
                  <span>Start free — no sign-up required.</span>
                </div>

                <a href="/how-it-works#schedule-tool">
                  Schedule a Free Meeting
                </a>
              </div>
            </section>

            <style>{`
              .home-page {
                width: 100%;
                max-width: 1120px;
                margin: 18px auto 0;
                padding: 18px 18px 28px;
                background: #ffffff;
                color: #111827;
                border: 1px solid rgba(237,233,254,0.9);
                box-shadow: 0 24px 70px rgba(30,27,75,0.18);
                box-sizing: border-box;
                overflow: hidden;
              }

              .home-header {
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
                width: 210px;
                height: 54px;
                object-fit: contain;
                object-position: left center;
              }

              .nav {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 16px;
              }

              .nav a {
                color: #374151;
                font-size: 13px;
                font-weight: 700;
                text-decoration: none;
                white-space: nowrap;
              }

              .nav-cta {
  background: #5b21b6;
  color: #ffffff;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 900;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  line-height: 1.18;
  min-width: 146px;
  box-shadow: 0 10px 22px rgba(91,33,182,0.22);
}

              .nav-cta span {
                color: #ffffff;
                font-size: 13px;
                font-weight: 900;
              }

              .nav-cta small {
                color: #ffffff;
                font-size: 10px;
                font-weight: 800;
                opacity: 0.9;
              }

              .hero {
                display: grid;
                grid-template-columns: minmax(0, 0.95fr) minmax(0, 1fr);
                align-items: start;
                gap: 36px;
                padding: 18px 10px 12px;
              }

              .hero-copy {
                max-width: 500px;
              }

              .pill {
                display: inline-block;
                margin: 0 0 13px;
                padding: 7px 13px;
                border-radius: 999px;
                background: #f3efff;
                color: #5b21b6;
                font-size: 12px;
                font-weight: 900;
              }

              .hero h1 {
                color: #111827;
                font-size: clamp(36px, 4vw, 48px);
                line-height: 1.06;
                margin: 0 0 14px;
                font-weight: 950;
                letter-spacing: -0.04em;
              }

              .hero-text {
                color: #6b7280;
                font-size: 15px;
                line-height: 1.6;
                margin: 0 0 14px;
                font-weight: 500;
              }

              .hero-bullets {
                display: grid;
                gap: 8px;
                margin-top: 8px;
              }

              .hero-bullets div {
                background: #faf9ff;
                border: 1px solid #ede9fe;
                border-radius: 10px;
                padding: 9px 11px;
                display: flex;
                flex-direction: column;
                gap: 2px;
                color: #374151;
                font-size: 12px;
                line-height: 1.35;
              }

              .trust-row {
                display: flex;
                flex-wrap: wrap;
                gap: 14px;
                color: #4c1d95;
                font-size: 12px;
                font-weight: 850;
                margin-top: 14px;
              }

              .planner-card {
                background: #ffffff;
                border: 1px solid #ddd6fe;
                border-radius: 18px;
                padding: 18px;
                box-shadow: 0 22px 55px rgba(76,29,149,0.16);
                box-sizing: border-box;
              }

              .planner-card h2 {
                color: #111827;
                font-size: 18px;
                font-weight: 950;
                margin: 0 0 14px;
              }

              .section-eyebrow {
                color: #6d28d9;
                font-size: 11px;
                font-weight: 950;
                margin: 0 0 4px;
                text-transform: uppercase;
                letter-spacing: 0.04em;
              }

              .city-grid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 12px;
                margin-bottom: 12px;
              }

              .city-card {
                background: #f8f7ff;
                border: 1px solid #ddd6fe;
                border-radius: 12px;
                padding: 13px;
                display: flex;
                flex-direction: column;
                gap: 5px;
              }

              .city-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                color: #111827;
                font-size: 13px;
                font-weight: 900;
              }

              .city-header img {
                width: 32px;
                height: 22px;
                object-fit: cover;
                border-radius: 3px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.15);
              }

              .label {
                color: #6b7280;
                font-size: 10px;
                font-weight: 900;
                text-transform: uppercase;
              }

              .time {
                color: #111827;
                font-size: 22px;
                font-weight: 950;
                letter-spacing: -0.02em;
              }

              .muted {
                color: #6b7280;
                font-size: 11px;
              }

              .duration-row {
                background: #ffffff;
                border: 1px solid #ddd6fe;
                border-radius: 10px;
                padding: 11px 12px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #374151;
                font-size: 12px;
                font-weight: 900;
                margin-bottom: 12px;
              }

              .best-time-card {
                background: #ede9fe;
                color: #5b21b6;
                border: 1px solid #c4b5fd;
                border-radius: 12px;
                padding: 13px;
                display: flex;
                flex-direction: column;
                gap: 5px;
                font-size: 12px;
                font-weight: 900;
                margin-bottom: 12px;
              }

              .planner-button {
                display: block;
                width: 100%;
                background: #5b21b6;
                color: #ffffff;
                text-align: center;
                padding: 12px;
                border-radius: 9px;
                font-size: 13px;
                font-weight: 900;
                text-decoration: none;
                box-sizing: border-box;
              }

              .free-note {
                margin: 9px 0 0;
                color: #5b21b6;
                font-size: 11px;
                font-weight: 900;
                text-align: center;
              }

              .content-section {
                margin-top: 14px;
                padding: 20px 16px;
                background: #ffffff;
                border-radius: 14px;
                border: 1px solid #ede9fe;
                scroll-margin-top: 24px;
              }

              .section-header {
                text-align: center;
                margin-bottom: 14px;
              }

              .section-header h2 {
                font-size: 22px;
                font-weight: 950;
                color: #111827;
                margin: 0 0 6px;
              }

              .section-header p:last-child {
                color: #6b7280;
                font-size: 13px;
                margin: 0;
              }

              .premium-row {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px;
              }

              .premium-row a {
                background: #facc15;
                color: #111827;
                padding: 10px 16px;
                border-radius: 999px;
                font-size: 12px;
                font-weight: 900;
                text-decoration: none;
                box-shadow: 0 8px 18px rgba(250,204,21,0.22);
              }

              .feature-grid {
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
                gap: 12px;
              }

              .how-grid {
                display: grid;
                grid-template-columns: repeat(3, minmax(0, 1fr));
                gap: 12px;
                margin-top: 10px;
              }

              .resources-grid {
                display: grid;
                grid-template-columns: repeat(5, minmax(0, 1fr));
                gap: 12px;
                margin-top: 10px;
                margin-bottom: 14px;
              }

              .feature-grid article,
              .how-grid article,
              .resources-grid a {
                background: #ffffff;
                border: 1px solid #ddd6fe;
                border-radius: 14px;
                padding: 18px;
                display: flex;
                flex-direction: column;
                gap: 8px;
                font-size: 13px;
                line-height: 1.5;
                box-shadow: 0 10px 25px rgba(91,33,182,0.08);
                text-decoration: none;
                color: #111827;
              }

              .cta-band {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 14px;
                background: #5b21b6;
                color: #ffffff;
                padding: 14px 16px;
                border-radius: 12px;
                font-weight: 900;
                font-size: 12px;
              }

              .cta-band div {
                display: flex;
                flex-direction: column;
                gap: 3px;
              }

              .cta-band a {
                background: #facc15;
                color: #111827;
                padding: 9px 13px;
                border-radius: 8px;
                font-size: 11px;
                font-weight: 900;
                text-decoration: none;
                white-space: nowrap;
              }

              @media (max-width: 900px) {
                .home-page {
                  width: calc(100% - 20px);
                  margin: 12px auto 0;
                  padding: 14px;
                }

                .home-header {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  gap: 14px;
                  padding-bottom: 14px;
                }

                .brand-logo {
                  width: 165px;
                  height: auto;
                }

                .nav {
                  width: 100%;
                  flex-wrap: wrap;
                  justify-content: center;
                  gap: 12px 18px;
                }

                .nav a {
                  font-size: 13px;
                  font-weight: 850;
                }

                .nav-cta {
                  width: 100%;
                  max-width: 320px;
                  min-width: 0;
                }

                .hero {
                  grid-template-columns: 1fr;
                  gap: 16px;
                  padding: 16px 0 8px;
                }

                .hero-copy {
                  max-width: 100%;
                }

                .hero h1 {
                  font-size: 34px;
                }

                .city-grid,
                .feature-grid,
                .how-grid,
                .resources-grid {
                  grid-template-columns: 1fr;
                }

                .premium-row {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                }

                .premium-row a {
                  text-align: center;
                }

                .cta-band {
                  display: grid;
                  grid-template-columns: 1fr;
                  text-align: center;
                }

                .cta-band a {
                  white-space: normal;
                }
              }

              @media (max-width: 520px) {
                .home-page {
                  width: calc(100% - 18px);
                  padding: 12px;
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
                  font-size: 32px;
                }

                .premium-row {
                  grid-template-columns: 1fr;
                }

                .content-section {
                  padding: 18px 12px;
                }
              }
            `}</style>
          </main>
        }
        toolPreview={null}
        premiumFeatures={null}
        bonusFeatures={null}
        footer={<FooterSection />}
      />
    </>
  );
}
