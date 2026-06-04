/**
 * File: app/page.tsx
 * Version: v5.0 (ADSENSE AUTHORITY-FIRST HOMEPAGE)
 * Date: 2026-06-02
 *
 * PURPOSE:
 * - Reposition homepage from tool-first to authority/resource-first for AdSense low-value-content recovery
 * - Lead with global scheduling education, resources, methodology, and expertise signals
 * - Move planner preview and premium tools lower on the page
 * - Preserve navigation, routing, branding, responsive structure, and protected payment/tool boundaries
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
 * - Revert app/page.tsx to v4.9 if this homepage structure does not test cleanly
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

              <a href="/guides" className="nav-cta">
                <span>Explore Guides</span>
                <small>Learn before you schedule</small>
              </a>
            </header>

            <section className="hero authority-hero">
              <div className="hero-copy">
                <p className="pill">Global Scheduling Resource Center</p>

                <h1>Learn How to Schedule Better Meetings Across Time Zones</h1>

                <p className="hero-text">
                  Best Meeting Time helps remote teams, clients, freelancers,
                  and global collaborators understand time zones, compare work
                  hours, avoid daylight-saving confusion, and choose fairer
                  meeting windows.
                </p>

                <div className="hero-bullets">
                  <div>
                    <strong>Understand global scheduling challenges</strong>
                    <span>
                      Learn why time zones, regional work hours, and daylight
                      saving changes make international coordination difficult.
                    </span>
                  </div>

                  <div>
                    <strong>Use practical meeting-time guidance</strong>
                    <span>
                      Review country timing examples, remote team scheduling
                      tips, and global meeting planning resources before sending
                      an invite.
                    </span>
                  </div>

                  <div>
                    <strong>Plan with more confidence</strong>
                    <span>
                      After reviewing the guides, use the planner to compare
                      cities and choose a practical meeting window.
                    </span>
                  </div>
                </div>

                <div className="trust-row">
                  <span>Time Zone Guides</span>
                  <span>Remote Work Scheduling</span>
                  <span>Global Meeting Planning</span>
                </div>
              </div>

             <div className="authority-card video-authority-card">
  <p className="section-eyebrow">Featured Resource</p>

  <h2>What If There Were No Time Zones?</h2>

  <p>
    Watch this quick visual explainer to see why time zones matter
    and why better global scheduling requires more than a simple
    clock conversion.
  </p>

  <div className="hero-video-wrap">
    <iframe
      className="hero-video-frame"
      src="https://www.youtube.com/embed/gvC3O4W8NBI"
      title="What if there were no time zones?"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>

  <div className="video-button-row">
    <a
      href="https://youtube.com/shorts/gvC3O4W8NBI?feature=share"
      target="_blank"
      rel="noopener noreferrer"
      className="authority-button"
    >
      Watch Video
    </a>

    <a href="/guides" className="authority-button secondary-authority-button">
      Start With the Guides
    </a>
  </div>
</div>
            </section>

            <section className="content-section authority-section">
              <div className="section-header">
                <p className="section-eyebrow">Why Timing Matters</p>
                <h2>Scheduling Across Time Zones Is Harder Than It Looks</h2>
                <p>
                  A meeting time that feels normal in one city may be too early,
                  too late, or outside working hours somewhere else. Global
                  scheduling requires more than converting a clock.
                </p>
              </div>

              <div className="feature-grid">
                <article>
                  <strong>Work hours are not universal</strong>
                  <span>
                    Business hours, lunch breaks, weekends, and preferred
                    response times vary by country and region.
                  </span>
                </article>

                <article>
                  <strong>Daylight saving changes create mistakes</strong>
                  <span>
                    Seasonal clock changes can shift meeting overlap windows and
                    cause confusion for recurring meetings.
                  </span>
                </article>

                <article>
                  <strong>Remote teams need fairness</strong>
                  <span>
                    Better scheduling avoids placing the same team members in
                    early-morning or late-night meetings every time.
                  </span>
                </article>

                <article>
                  <strong>Clients expect timing awareness</strong>
                  <span>
                    Checking local time before reaching out helps protect
                    professionalism and reduces missed communication.
                  </span>
                </article>
              </div>
            </section>

            <section id="resources" className="content-section">
              <div className="section-header">
                <p className="section-eyebrow">Resource Library</p>
                <h2>Guides for Better Global Meeting Planning</h2>
                <p>
                  These resources help explain the scheduling decisions behind
                  better meeting windows.
                </p>
              </div>

              <div className="resources-grid">
                <a href="/how-to-schedule-meetings-across-time-zones">
                  <strong>How to Schedule Across Time Zones</strong>
                  <span>
                    Learn the basics of planning meetings when teams are spread
                    across different regions.
                  </span>
                </a>

                <a href="/best-meeting-times-remote-teams">
                  <strong>Best Meeting Times for Remote Teams</strong>
                  <span>
                    Review practical overlap strategies for distributed teams
                    and remote work schedules.
                  </span>
                </a>

                <a href="/best-times-to-contact-different-countries">
                  <strong>Best Times to Contact Different Countries</strong>
                  <span>
                    Understand how work hours, local expectations, and timing
                    etiquette affect global communication.
                  </span>
                </a>

                <a href="/best-meeting-times-us-and-europe">
                  <strong>Best Meeting Times Between the US and Europe</strong>
                  <span>
                    Find practical overlap windows for American and European
                    teams.
                  </span>
                </a>

                <a href="/why-remote-teams-struggle-with-scheduling">
                  <strong>Why Remote Teams Struggle With Scheduling</strong>
                  <span>
                    Learn why global teams miss better meeting windows and how
                    to avoid common scheduling problems.
                  </span>
                </a>

                <a href="/fun-facts-about-time-zones">
                  <strong>Fun Facts About Time Zones</strong>
                  <span>
                    Explore unusual time zone facts, UTC offsets, and the
                    International Date Line.
                  </span>
                </a>
              </div>
            </section>

            <section id="methodology" className="content-section">
              <div className="section-header">
                <p className="section-eyebrow">Scheduling Methodology</p>
                <h2>How Better Meeting Windows Are Chosen</h2>
                <p>
                  Good scheduling considers more than the current time. It
                  balances local time, working-hour overlap, meeting duration,
                  and practical availability.
                </p>
              </div>

              <div className="how-grid">
                <article>
                  <strong>Compare locations</strong>
                  <span>
                    Start by identifying the cities or time zones involved in
                    the meeting.
                  </span>
                </article>

                <article>
                  <strong>Check local working hours</strong>
                  <span>
                    Look for overlap that avoids very early, very late, or
                    impractical meeting windows.
                  </span>
                </article>

                <article>
                  <strong>Choose a practical window</strong>
                  <span>
                    Use the recommended overlap as a starting point, then adjust
                    based on team preference and meeting importance.
                  </span>
                </article>
              </div>
            </section>

            <section className="content-section planner-preview-section">
              <div className="section-header">
                <p className="section-eyebrow">Planning Tool</p>
                <h2>Use the Planner After Reviewing the Timing Context</h2>
                <p>
                  When you are ready to compare cities, the planner helps you
                  review local times side by side and identify a practical
                  meeting window.
                </p>
              </div>

              <div className="planner-card">
                <p className="section-eyebrow">
                  Preview of the Best Meeting Time scheduler
                </p>
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
                  Open Meeting Planner
                </a>

                <p className="free-note">Free to try — no sign-up required.</p>
              </div>
            </section>

            <section id="premium-tools" className="content-section premium-section">
              <div className="section-header">
                <p className="section-eyebrow">Premium Tools</p>
                <h2>Plan, Share, and Add Meetings Faster</h2>
                <p>
                  After choosing a better meeting window, premium planning tools
                  help share the selected time and add it to a calendar workflow.
                </p>
              </div>

              <div className="premium-row">
                <a href="/how-it-works#schedule-tool">Share Link</a>
                <a href="/how-it-works#schedule-tool">Add to Google</a>
                <a href="/how-it-works#schedule-tool">Add to Outlook</a>
                <a href="/how-it-works#schedule-tool">Add to Calendar</a>
              </div>
            </section>

            <section className="content-section">
              <div className="cta-band">
                <div>
                  <strong>Ready to compare meeting times?</strong>
                  <span>
                    Review the guides first, then use the planner when you are
                    ready to schedule.
                  </span>
                </div>

                <a href="/how-it-works#schedule-tool">Open the Planner</a>
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
                grid-template-columns: minmax(0, 0.98fr) minmax(0, 1fr);
                align-items: stretch;
                gap: 28px;
                padding: 18px 10px 12px;
              }

              .hero-copy {
                max-width: 520px;
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
                font-size: clamp(34px, 4vw, 48px);
                line-height: 1.06;
                margin: 0 0 14px;
                font-weight: 950;
                letter-spacing: -0.04em;
              }

              .hero-text {
                color: #4b5563;
                font-size: 15px;
                line-height: 1.65;
                margin: 0 0 14px;
                font-weight: 600;
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
                padding: 10px 12px;
                display: flex;
                flex-direction: column;
                gap: 3px;
                color: #374151;
                font-size: 12px;
                line-height: 1.4;
              }

              .hero-bullets strong,
              .feature-grid strong,
              .how-grid strong,
              .resources-grid strong {
                color: #111827;
                font-weight: 950;
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

              .authority-card {
                background: linear-gradient(135deg, #1e0b4f 0%, #5b21b6 65%, #7c3aed 100%);
                border-radius: 20px;
                padding: 26px;
                color: #ffffff;
                box-shadow: 0 24px 60px rgba(76,29,149,0.28);
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-height: 100%;
              }

              .authority-card .section-eyebrow {
                color: #facc15;
              }

              .authority-card h2 {
  color: #ffffff;
  font-size: 26px;
  line-height: 1.1;
  margin: 0 0 12px;
  font-weight: 950;
  letter-spacing: -0.03em;
  white-space: nowrap;
}

              .authority-card p {
                margin: 0;
                color: rgba(255,255,255,0.88);
                font-size: 14px;
                line-height: 1.65;
                font-weight: 600;
              }

              .authority-list {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 10px;
                margin: 18px 0;
              }

              .authority-list span {
                background: rgba(255,255,255,0.12);
                border: 1px solid rgba(255,255,255,0.18);
                border-radius: 12px;
                padding: 10px;
                font-size: 12px;
                font-weight: 850;
              }

              .authority-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: #facc15;
                color: #111827;
                padding: 12px 16px;
                border-radius: 10px;
                text-decoration: none;
                font-size: 13px;
                font-weight: 950;
                width: fit-content;
              }
.video-authority-card {
  align-items: stretch;
}

.hero-video-wrap {
  width: 100%;
  max-width: 245px;
  margin: 16px auto;
  aspect-ratio: 9 / 16;
  border-radius: 18px;
  overflow: hidden;
  background: #111827;
  border: 1px solid rgba(255,255,255,0.24);
  box-shadow: 0 18px 42px rgba(0,0,0,0.24);
}

.hero-video-frame {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.video-button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.secondary-authority-button {
  background: rgba(255,255,255,0.14);
  color: #ffffff;
  border: 1px solid rgba(255,255,255,0.24);
}
              .content-section {
                margin-top: 14px;
                padding: 22px 16px;
                background: #ffffff;
                border-radius: 14px;
                border: 1px solid #ede9fe;
                scroll-margin-top: 24px;
              }

              .authority-section {
                background: #faf9ff;
              }

              .section-header {
                text-align: center;
                margin-bottom: 16px;
              }

              .section-eyebrow {
                color: #6d28d9;
                font-size: 11px;
                font-weight: 950;
                margin: 0 0 4px;
                text-transform: uppercase;
                letter-spacing: 0.04em;
              }

              .section-header h2 {
                font-size: 24px;
                font-weight: 950;
                color: #111827;
                margin: 0 0 6px;
                letter-spacing: -0.03em;
              }

              .section-header p:last-child {
                color: #6b7280;
                font-size: 13px;
                line-height: 1.65;
                margin: 0 auto;
                max-width: 760px;
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
                grid-template-columns: repeat(3, minmax(0, 1fr));
                gap: 12px;
                margin-top: 10px;
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
                color: #374151;
              }

              .planner-preview-section {
                background: #ffffff;
              }

              .planner-card {
                max-width: 620px;
                margin: 0 auto;
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

              .premium-section {
                background: #fffdf4;
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

              .cta-band {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 14px;
                background: #5b21b6;
                color: #ffffff;
                padding: 16px;
                border-radius: 12px;
                font-weight: 900;
                font-size: 12px;
              }

              .cta-band div {
                display: flex;
                flex-direction: column;
                gap: 3px;
              }

              .cta-band span {
                color: rgba(255,255,255,0.86);
                font-weight: 700;
              }

              .cta-band a {
                background: #facc15;
                color: #111827;
                padding: 10px 14px;
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

                .authority-list,
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

                .authority-card {
                  padding: 20px;
                }

                .authority-card h2 {
                  font-size: 25px;
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
