/**
 * File: app/page.tsx
 * Version: v3.6 (ADSENSE HOMEPAGE RESTRUCTURE)
 * Date: 2026-04-23
 *
 * PURPOSE:
 * - Rebuild homepage into a content-first resource layout for AdSense recovery
 * - Keep existing HeroSection, VerifyPremium, FooterSection, and PremiumFeaturesSection
 * - Preserve tool/payment logic by NOT touching ToolPreviewSection, Stripe, checkout, webhook, or KV
 *
 * ROLLBACK:
 * - Revert to v3.3 if this homepage restructure causes layout issues
 */

import dynamic from "next/dynamic";

import LayoutShell from "./ui/LayoutShell";
import HeroSection from "./ui/HeroSection";
import PremiumFeaturesSection from "./ui/PremiumFeaturesSection";
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
          <>
            <div id="schedule-tool">
              <HeroSection />
            </div>

            {/* HOMEPAGE VALUE SECTION */}
            <section style={valueSection}>
              <p style={eyebrow}>Free Time Zone Meeting Planner</p>

              <h2 style={valueHeading}>
                Plan Meetings Across Time Zones Without Guesswork
              </h2>

              <p style={valueText}>
                Best Meeting Time helps remote teams, consultants, freelancers,
                and global businesses compare cities, visualize overlapping work
                hours, and choose a meeting time that works for everyone.
              </p>

              <div style={trustRow}>
                <span>No sign-up required</span>
                <span>Free to use</span>
                <span>Works worldwide</span>
              </div>
            </section>
          </>
        }

        toolPreview={
          <section style={resourceIntroSection}>
            <h2 style={whiteHeading}>
              Helpful Resources to Schedule Better Meetings
            </h2>

            <p style={whiteSubtext}>
              Learn how to plan across time zones, avoid scheduling mistakes,
              and make global meetings easier for everyone.
            </p>

            <div style={resourceGrid}>
              <a href="/how-to-schedule-meetings-across-time-zones" style={resourceCard}>
                <strong>How to Schedule Across Time Zones</strong>
                <span>Step-by-step guide for global teams</span>
              </a>

              <a href="/best-meeting-times-remote-teams" style={resourceCard}>
                <strong>Best Meeting Times for Remote Teams</strong>
                <span>Practical tips that actually work</span>
              </a>

              <a href="/time-zone-meeting-planner-guide" style={resourceCard}>
                <strong>Time Zone Meeting Planner Guide</strong>
                <span>Understand how to compare locations</span>
              </a>

              <a href="/global-meeting-scheduling-tips" style={resourceCard}>
                <strong>Global Meeting Scheduling Tips</strong>
                <span>Improve planning across countries</span>
              </a>
            </div>

            <div style={toolCallout}>
              <span>Ready to compare cities now?</span>

              <a href="#schedule-tool" style={goldButton}>
                Use the Free Tool
              </a>
            </div>
          </section>
        }

        premiumFeatures={null}

        bonusFeatures={
          <main style={mainContentWrap}>
            {/* INTERNAL CITY LINKS */}
            <section style={citySection}>
              <h2 style={whiteHeading}>Compare Popular Cities Across Time Zones</h2>

              <div style={cityLinks}>
                <a href="/best-meeting-time-new-york">New York</a>
                <a href="/best-meeting-time-london">London</a>
                <a href="/best-meeting-time-tokyo">Tokyo</a>
                <a href="/best-meeting-time-sydney">Sydney</a>
                <a href="/best-meeting-time-dubai">Dubai</a>
                <a href="/best-meeting-time-berlin">Berlin</a>
                <a href="/best-meeting-time-paris">Paris</a>
                <a href="/best-meeting-time-mumbai">Mumbai</a>
                <a href="/best-meeting-time-toronto">Toronto</a>
              </div>
            </section>

            {/* HIGH-VALUE CONTENT BLOCK */}
            <section style={contentPanel}>
              <h2 style={panelHeading}>
                How to Schedule Meetings Across Time Zones Without Mistakes
              </h2>

              <p style={text}>
                Scheduling meetings across time zones is one of the most common
                challenges for remote teams, global businesses, and freelancers.
                A time that looks convenient in one region can fall outside
                working hours in another, leading to missed calls, delays, or
                poor collaboration.
              </p>

              <p style={text}>
                The key to effective scheduling is understanding overlapping
                working hours. Instead of guessing or manually converting time
                zones, the most efficient approach is to compare both locations
                side-by-side and identify a shared window that works for all
                participants.
              </p>

              <h3 style={title}>Best Practices for Global Scheduling</h3>

              <ul style={textList}>
                <li>Prioritize overlapping business hours whenever possible</li>
                <li>Avoid early morning or late-night meetings for any participant</li>
                <li>Rotate meeting times to distribute inconvenience fairly</li>
                <li>Confirm daylight saving changes when scheduling internationally</li>
              </ul>

              <h3 style={title}>Why Time Zone Planning Matters</h3>

              <p style={text}>
                Poorly scheduled meetings reduce productivity and can impact team
                morale. Clear, consistent scheduling improves attendance,
                communication, and overall efficiency — especially for distributed
                teams working across multiple continents.
              </p>
            </section>

            {/* EXAMPLE + USE CASE BLOCK */}
            <section style={contentPanel}>
              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <h2 style={panelHeading}>Find the Best Meeting Time — Instantly</h2>

                <p style={panelIntro}>
                  Compare time zones instantly and find the best meeting time
                  between cities without guesswork. This simple time zone
                  converter and meeting planner helps you schedule across time
                  zones, visualize overlapping working hours, and confidently
                  choose the most productive time for your team.
                </p>
              </div>

              <div style={exampleCard}>
                <h3 style={title}>New York → London Meeting Time Example</h3>

                <p style={text}>New York: 9:00 AM</p>
                <p style={text}>London: 2:00 PM</p>
                <p style={text}>Overlap: 9AM – 12PM New York time</p>

                <p style={gold}>
                  Best meeting window: 9AM – 12PM New York time
                </p>
              </div>

              <div style={infoGrid}>
                <div style={card}>
                  <h3 style={title}>Who Uses This</h3>

                  <ul style={textList}>
                    <li>Remote teams working across multiple time zones</li>
                    <li>Consultants scheduling international client calls</li>
                    <li>Sales teams coordinating global meetings</li>
                    <li>Freelancers managing clients in different regions</li>
                  </ul>
                </div>

                <div style={card}>
                  <h3 style={title}>The Challenge</h3>

                  <p style={text}>
                    Scheduling meetings across time zones is more complex than it
                    seems. A time that works for one participant may fall outside
                    normal working hours for another, leading to delays, missed
                    calls, or inefficient scheduling.
                  </p>
                </div>

                <div style={card}>
                  <h3 style={title}>The Solution</h3>

                  <ul style={textList}>
                    <li>Instantly compare cities and their local times</li>
                    <li>Visualize overlapping working hours clearly</li>
                    <li>Identify the most convenient meeting window</li>
                    <li>Eliminate manual time conversion errors</li>
                  </ul>
                </div>
              </div>

              <div style={trustFooter}>
                Trusted by remote teams and global professionals
              </div>

              <div style={trustFooterSmall}>
                No sign-up required • No subscriptions • Fast and reliable
              </div>
            </section>

            {/* PREMIUM MOVED TO BOTTOM */}
            <section style={premiumWrap}>
              <PremiumFeaturesSection />
            </section>
          </main>
        }

        footer={<FooterSection />}
      />
    </>
  );
}

/* STYLES */

const valueSection = {
  maxWidth: "940px",
  margin: "34px auto 0 auto",
  textAlign: "center" as const,
  color: "white",
  padding: "0 20px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 10px 0",
  padding: "7px 14px",
  borderRadius: "999px",
  background: "rgba(250,204,21,0.16)",
  color: "#facc15",
  fontSize: "13px",
  fontWeight: 700,
};

const valueHeading = {
  fontSize: "28px",
  marginBottom: "12px",
};

const valueText = {
  maxWidth: "760px",
  margin: "0 auto",
  color: "rgba(255,255,255,0.86)",
  lineHeight: "1.55",
  fontSize: "15px",
};

const trustRow = {
  marginTop: "18px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap" as const,
  gap: "14px",
  color: "rgba(255,255,255,0.82)",
  fontSize: "13px",
};

const resourceIntroSection = {
  maxWidth: "1040px",
  margin: "50px auto 0 auto",
  padding: "0 20px",
  textAlign: "center" as const,
};

const whiteHeading = {
  color: "white",
  fontSize: "26px",
  marginBottom: "8px",
};

const whiteSubtext = {
  maxWidth: "700px",
  margin: "0 auto 24px auto",
  color: "rgba(255,255,255,0.78)",
  lineHeight: "1.5",
  fontSize: "14px",
};

const resourceGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
  gap: "14px",
};

const resourceCard = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "8px",
  minHeight: "110px",
  padding: "18px",
  background: "rgba(255,255,255,0.94)",
  color: "#1e1b4b",
  borderRadius: "16px",
  textDecoration: "none",
  boxShadow: "0 8px 22px rgba(0,0,0,0.16)",
  border: "1px solid rgba(196,181,253,0.55)",
};

const toolCallout = {
  marginTop: "24px",
  padding: "18px 22px",
  background: "#5b21b6",
  color: "white",
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap" as const,
  gap: "16px",
  fontWeight: 700,
};

const goldButton = {
  display: "inline-block",
  background: "#facc15",
  color: "#1e1b4b",
  padding: "10px 18px",
  borderRadius: "10px",
  fontWeight: 800,
  textDecoration: "none",
};

const mainContentWrap = {
  marginTop: "60px",
  padding: "0 20px 70px 20px",
};

const citySection = {
  textAlign: "center" as const,
  marginBottom: "36px",
};

const cityLinks = {
  display: "flex",
  flexWrap: "wrap" as const,
  justifyContent: "center",
  gap: "12px",
};

const contentPanel = {
  maxWidth: "980px",
  margin: "0 auto 40px auto",
  background: "rgba(255,255,255,0.94)",
  borderRadius: "22px",
  padding: "30px",
  boxShadow: "0 10px 35px rgba(0,0,0,0.25)",
  border: "1px solid rgba(255,255,255,0.35)",
};

const panelHeading = {
  fontSize: "28px",
  color: "#1e1b4b",
  marginBottom: "15px",
};

const panelIntro = {
  color: "#312e81",
  fontSize: "14px",
  lineHeight: "1.45",
  maxWidth: "720px",
  margin: "0 auto",
};

const exampleCard = {
  background: "#ffffff",
  padding: "14px",
  borderRadius: "14px",
  marginBottom: "16px",
  border: "2px solid #c4b5fd",
  boxShadow: "0 8px 22px rgba(124,58,237,0.15)",
};

const infoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "14px",
};

const card = {
  background: "#ffffff",
  padding: "14px",
  borderRadius: "14px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  border: "1px solid rgba(124,58,237,0.15)",
};

const title = {
  color: "#1e1b4b",
  marginBottom: "6px",
};

const text = {
  color: "#374151",
  lineHeight: "1.5",
  margin: "6px 0",
};

const textList = {
  color: "#374151",
  paddingLeft: "18px",
  lineHeight: "1.55",
  margin: 0,
};

const gold = {
  color: "#f59e0b",
  fontWeight: 700,
};

const trustFooter = {
  marginTop: "22px",
  textAlign: "center" as const,
  color: "#4338ca",
  fontSize: "14px",
  opacity: 0.85,
};

const trustFooterSmall = {
  marginTop: "6px",
  textAlign: "center" as const,
  color: "#5b21b6",
  fontSize: "13px",
  opacity: 0.85,
};

const premiumWrap = {
  maxWidth: "980px",
  margin: "60px auto 0 auto",
};
