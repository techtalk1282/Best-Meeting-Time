/**
 * File: app/global-meeting-scheduling-playbook/page.tsx
 * Version: v1.0 (ADSENSE FLAGSHIP AUTHORITY PLAYBOOK)
 * Date: 2026-06-02
 *
 * PURPOSE:
 * - Add flagship long-form authority resource for AdSense low-value-content recovery
 * - Support homepage authority-first strategy
 * - Provide substantial educational content before directing users to the planner
 *
 * ROLLBACK:
 * - Delete app/global-meeting-scheduling-playbook/page.tsx if this route does not test cleanly
 */

import LayoutShell from "../ui/LayoutShell";
import FooterSection from "../ui/FooterSection";

export const metadata = {
  title:
    "Global Meeting Scheduling Playbook | Best Meeting Time",
  description:
    "A practical guide to scheduling meetings across time zones, work hours, daylight saving changes, remote teams, clients, and international business calendars.",
};

export default function GlobalMeetingSchedulingPlaybookPage() {
  return (
    <LayoutShell
      hero={
        <main className="playbook-page">
          <header className="playbook-header">
            <a href="/" className="brand" aria-label="Best Meeting Time home">
              <img
                src="/images/branding/logo.png"
                alt="Best Meeting Time"
                className="brand-logo"
              />
            </a>

            <nav className="nav" aria-label="Playbook navigation">
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

          <section className="hero-section">
            <p className="pill">Global Scheduling Playbook</p>
            <h1>The Complete Guide to Scheduling Meetings Across Time Zones</h1>
            <p className="hero-text">
              Scheduling across countries is not just a clock conversion
              problem. Good global scheduling considers work hours, daylight
              saving changes, meeting fairness, cultural expectations, team
              fatigue, client professionalism, and the real human cost of poorly
              timed meetings.
            </p>
          </section>

          <section className="content-section">
            <h2>Why Global Meeting Scheduling Is So Difficult</h2>
            <p>
              A meeting that feels perfectly reasonable in one city can be
              inconvenient, disruptive, or completely outside working hours in
              another. A 9:00 AM meeting in New York may place London in the
              early afternoon, Los Angeles before normal work hours, Tokyo late
              at night, and Sydney on a different calendar day. That is why
              scheduling across time zones requires more than checking the
              current time.
            </p>
            <p>
              Remote teams, international clients, agencies, consultants,
              freelancers, sales teams, recruiters, and global partners all face
              the same challenge: how do you choose a meeting time that is useful
              without making one location carry all the inconvenience? The best
              answer is to treat meeting scheduling as a planning decision, not
              a quick administrative task.
            </p>
          </section>

          <section className="content-section">
            <h2>The Core Principles of Better Global Scheduling</h2>

            <div className="principle-grid">
              <article>
                <h3>Respect local work hours</h3>
                <p>
                  Start by understanding when people are normally available in
                  their own location. A meeting may technically be possible but
                  still be unreasonable if it falls too early, too late, or
                  during local personal time.
                </p>
              </article>

              <article>
                <h3>Look for fair overlap windows</h3>
                <p>
                  The best meeting time is usually found where working hours
                  overlap between locations. When overlap is limited, rotate
                  inconvenient times across the team instead of forcing one
                  region to absorb the burden every time.
                </p>
              </article>

              <article>
                <h3>Account for daylight saving time</h3>
                <p>
                  Daylight saving changes can shift recurring meetings by an
                  hour and create confusion between countries that change clocks
                  on different dates or do not observe daylight saving at all.
                </p>
              </article>

              <article>
                <h3>Match urgency to format</h3>
                <p>
                  Not every global update needs a live call. When overlap is
                  poor, consider whether the topic can be handled with notes,
                  recordings, shared documents, or asynchronous review.
                </p>
              </article>
            </div>
          </section>

          <section className="content-section">
            <h2>How to Evaluate a Meeting Time</h2>
            <p>
              Before sending a calendar invite, review the meeting through four
              questions:
            </p>

            <ol className="ordered-list">
              <li>
                <strong>Is the time inside normal working hours for every key participant?</strong>
                <span>
                  If not, decide whether the meeting is important enough to
                  justify the exception.
                </span>
              </li>

              <li>
                <strong>Does the time repeatedly inconvenience the same region?</strong>
                <span>
                  Recurring meetings should not always favor headquarters or the
                  loudest team.
                </span>
              </li>

              <li>
                <strong>Will daylight saving time change the meeting later?</strong>
                <span>
                  Check recurring meetings carefully during March, October, and
                  November.
                </span>
              </li>

              <li>
                <strong>Could the meeting be handled asynchronously?</strong>
                <span>
                  If the goal is a status update, a shared written update may be
                  better than forcing a difficult time.
                </span>
              </li>
            </ol>
          </section>

          <section className="content-section">
            <h2>Common Global Scheduling Mistakes</h2>

            <div className="mistake-list">
              <div>
                <strong>Assuming everyone works the same hours</strong>
                <span>
                  Workdays, weekends, lunch breaks, and communication norms vary
                  by country and company.
                </span>
              </div>

              <div>
                <strong>Ignoring the International Date Line</strong>
                <span>
                  A meeting may fall on Tuesday for one person and Wednesday for
                  another, especially across Asia-Pacific and the Americas.
                </span>
              </div>

              <div>
                <strong>Forgetting daylight saving changes</strong>
                <span>
                  Countries change clocks on different dates. Some do not change
                  clocks at all.
                </span>
              </div>

              <div>
                <strong>Letting headquarters dominate every meeting time</strong>
                <span>
                  Global teams work better when scheduling is fair and
                  intentional.
                </span>
              </div>
            </div>
          </section>

          <section className="content-section">
            <h2>Recommended Scheduling Framework</h2>
            <p>
              Use this simple framework before sending a meeting invitation:
            </p>

            <div className="framework-grid">
              <article>
                <span>Step 1</span>
                <h3>Identify required locations</h3>
                <p>
                  List the cities or time zones for the people who must attend.
                  Separate required participants from optional viewers.
                </p>
              </article>

              <article>
                <span>Step 2</span>
                <h3>Find the working-hour overlap</h3>
                <p>
                  Compare local times and find the window where the meeting is
                  most reasonable for the most important participants.
                </p>
              </article>

              <article>
                <span>Step 3</span>
                <h3>Check fairness and frequency</h3>
                <p>
                  For recurring meetings, rotate inconvenience when perfect
                  overlap is impossible.
                </p>
              </article>

              <article>
                <span>Step 4</span>
                <h3>Choose the format</h3>
                <p>
                  Decide whether the meeting should be live, recorded,
                  asynchronous, or split by region.
                </p>
              </article>
            </div>
          </section>
<section className="content-section">
            <h2>Practical Meeting Time Examples</h2>
            <p>
              The easiest way to understand global scheduling is to compare real
              city pairs. These examples show why a meeting time can feel normal
              in one place but difficult somewhere else.
            </p>

            <div className="example-grid">
              <article>
                <strong>New York ↔ London</strong>
                <span>
                  A strong overlap is usually New York morning and London
                  afternoon. For example, 9:00 AM in New York is 2:00 PM in
                  London during many parts of the year.
                </span>
              </article>

              <article>
                <strong>New York ↔ Tokyo</strong>
                <span>
                  This is a difficult pairing because normal work hours rarely
                  overlap well. Teams often need rotating meeting times or async
                  updates.
                </span>
              </article>

              <article>
                <strong>London ↔ Singapore</strong>
                <span>
                  London morning can align with Singapore late afternoon, which
                  can work well for planning calls if the meeting is not too
                  late in Singapore.
                </span>
              </article>

              <article>
                <strong>Los Angeles ↔ Sydney</strong>
                <span>
                  This pairing often crosses the International Date Line. Teams
                  should confirm both the day and the time before sending an
                  invite.
                </span>
              </article>
            </div>
          </section>
          <section className="content-section">
            <h2>When to Use the Planner</h2>
            <p>
              After you understand the scheduling context, use the meeting
              planner to compare cities side by side. The planner is most useful
              when you already know who needs to attend and want to quickly
              review practical overlap windows before sending the invite.
            </p>

            <div className="cta-band">
              <div>
                <strong>Ready to compare locations?</strong>
                <span>
                  Use the planner after reviewing the scheduling context.
                </span>
              </div>

              <a href="/how-it-works#schedule-tool">Open the Planner</a>
            </div>
          </section>

          <section className="content-section">
            <h2>Continue Learning</h2>

            <div className="resource-grid">
              <a href="/best-meeting-times-remote-teams">
                <strong>Best Meeting Times for Remote Teams</strong>
                <span>Learn fair scheduling strategies for distributed teams.</span>
              </a>

              <a href="/best-times-to-contact-different-countries">
                <strong>Best Times to Contact Different Countries</strong>
                <span>Review work-hour and timing expectations by region.</span>
              </a>

              <a href="/why-remote-teams-struggle-with-scheduling">
                <strong>Why Remote Teams Struggle With Scheduling</strong>
                <span>Understand the common causes of global timing problems.</span>
              </a>

              <a href="/guides">
                <strong>Explore All Guides</strong>
                <span>Browse the full scheduling resource library.</span>
              </a>
            </div>
          </section>

          <style>{`
            .playbook-page {
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

            .playbook-header {
              min-height: 66px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 18px;
              border-bottom: 1px solid #ede9fe;
              margin-bottom: 22px;
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

            .hero-section {
              background: linear-gradient(135deg, #1e0b4f 0%, #5b21b6 62%, #7c3aed 100%);
              color: #ffffff;
              border-radius: 24px;
              padding: 46px 42px;
              margin-bottom: 16px;
              box-shadow: 0 24px 60px rgba(76,29,149,0.25);
            }

            .pill {
              display: inline-block;
              margin: 0 0 14px;
              padding: 8px 14px;
              border-radius: 999px;
              background: rgba(250,204,21,0.14);
              border: 1px solid rgba(250,204,21,0.45);
              color: #facc15;
              font-size: 12px;
              font-weight: 950;
              text-transform: uppercase;
              letter-spacing: 0.04em;
            }

            .hero-section h1 {
              max-width: 850px;
              color: #ffffff;
              font-size: clamp(38px, 5vw, 62px);
              line-height: 1.02;
              margin: 0 0 18px;
              font-weight: 950;
              letter-spacing: -0.05em;
            }

            .hero-text {
              max-width: 860px;
              color: rgba(255,255,255,0.9);
              font-size: 18px;
              line-height: 1.7;
              margin: 0;
              font-weight: 600;
            }

            .content-section {
              margin-top: 16px;
              padding: 30px;
              background: #ffffff;
              border-radius: 18px;
              border: 1px solid #ede9fe;
              box-shadow: 0 10px 26px rgba(91,33,182,0.07);
            }

            .content-section h2 {
              color: #111827;
              font-size: 30px;
              line-height: 1.15;
              margin: 0 0 14px;
              font-weight: 950;
              letter-spacing: -0.03em;
            }

            .content-section p {
              color: #4b5563;
              font-size: 16px;
              line-height: 1.8;
              margin: 0 0 16px;
              font-weight: 500;
            }

            .principle-grid,
            .framework-grid,
            .resource-grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 14px;
              margin-top: 18px;
            }

            .principle-grid article,
            .framework-grid article,
            .resource-grid a {
              background: #faf9ff;
              border: 1px solid #ddd6fe;
              border-radius: 16px;
              padding: 20px;
              text-decoration: none;
              color: #374151;
            }

            .principle-grid h3,
            .framework-grid h3 {
              color: #111827;
              font-size: 18px;
              margin: 0 0 8px;
              font-weight: 950;
            }

            .principle-grid p,
            .framework-grid p {
              font-size: 14px;
              line-height: 1.7;
              margin: 0;
            }

            .ordered-list {
              display: grid;
              gap: 12px;
              margin: 18px 0 0;
              padding: 0;
              list-style: none;
              counter-reset: playbook-counter;
            }

            .ordered-list li {
              counter-increment: playbook-counter;
              background: #faf9ff;
              border: 1px solid #ddd6fe;
              border-radius: 16px;
              padding: 18px;
              display: grid;
              gap: 6px;
              position: relative;
            }

            .ordered-list li::before {
              content: counter(playbook-counter);
              width: 28px;
              height: 28px;
              border-radius: 999px;
              background: #5b21b6;
              color: #ffffff;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-size: 13px;
              font-weight: 950;
              margin-bottom: 4px;
            }

            .ordered-list strong,
            .mistake-list strong,
            .resource-grid strong {
              color: #111827;
              font-weight: 950;
            }

            .ordered-list span,
            .mistake-list span,
            .resource-grid span {
              color: #4b5563;
              font-size: 14px;
              line-height: 1.7;
            }
 .example-grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 14px;
              margin-top: 18px;
            }

            .example-grid article {
              background: #faf9ff;
              border: 1px solid #ddd6fe;
              border-radius: 16px;
              padding: 20px;
            }

            .example-grid strong {
              display: block;
              color: #111827;
              font-size: 20px;
              font-weight: 950;
              margin-bottom: 8px;
            }

            .example-grid span {
              color: #4b5563;
              font-size: 14px;
              line-height: 1.7;
            }
            .mistake-list {
              display: grid;
              gap: 12px;
              margin-top: 18px;
            }

            .mistake-list div {
              background: #fffdf4;
              border: 1px solid #fde68a;
              border-radius: 16px;
              padding: 18px;
              display: flex;
              flex-direction: column;
              gap: 6px;
            }

            .framework-grid article span {
              display: inline-block;
              color: #6d28d9;
              font-size: 11px;
              font-weight: 950;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              margin-bottom: 8px;
            }

            .cta-band {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 14px;
              background: #5b21b6;
              color: #ffffff;
              padding: 18px;
              border-radius: 14px;
              margin-top: 20px;
            }

            .cta-band div {
              display: flex;
              flex-direction: column;
              gap: 4px;
            }

            .cta-band strong {
              color: #ffffff;
              font-size: 18px;
              font-weight: 950;
            }

            .cta-band span {
              color: rgba(255,255,255,0.86);
              font-size: 13px;
              font-weight: 700;
            }

            .cta-band a {
              background: #facc15;
              color: #111827;
              padding: 12px 16px;
              border-radius: 10px;
              font-size: 13px;
              font-weight: 950;
              text-decoration: none;
              white-space: nowrap;
            }

            .resource-grid a {
              display: flex;
              flex-direction: column;
              gap: 8px;
            }

            @media (max-width: 900px) {
              .playbook-page {
                width: calc(100% - 20px);
                margin: 12px auto 0;
                padding: 14px;
              }

              .playbook-header {
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

              .hero-section {
                padding: 34px 22px;
              }

              .hero-section h1 {
                font-size: 38px;
              }

              .hero-text {
                font-size: 16px;
              }

               .principle-grid,
              .framework-grid,
              .resource-grid,
              .example-grid {
                grid-template-columns: 1fr;
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
              .playbook-page {
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

              .hero-section {
                padding: 28px 18px;
                border-radius: 18px;
              }

              .hero-section h1 {
                font-size: 32px;
              }

              .content-section {
                padding: 22px 16px;
              }

              .content-section h2 {
                font-size: 25px;
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
  );
}
