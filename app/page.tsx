/**
 * File: app/page.tsx
 * Version: v3.7 (V3 CONTENT-FIRST HOMEPAGE PASS 1)
 * Date: 2026-04-27
 *
 * PURPOSE:
 * - Move the homepage toward the V3 SaaS-style mockup direction
 * - Make the first impression content-first instead of tool-first
 * - Preserve the existing HeroSection/tool behavior without editing ToolPreviewSection
 * - Preserve VerifyPremium, PremiumFeaturesSection, FooterSection, and SiteNav
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
 * - Revert this file to v3.6 if the homepage layout does not test cleanly
 */

import dynamic from "next/dynamic";

import LayoutShell from "./ui/LayoutShell";
import HeroSection from "./ui/HeroSection";
import PremiumFeaturesSection from "./ui/PremiumFeaturesSection";
import FooterSection from "./ui/FooterSection";
import SiteNav from "./ui/SiteNav";

const VerifyPremium = dynamic(() => import("./ui/VerifyPremium"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <VerifyPremium />

      <div style={{ background: "#4c1d95" }}>
        <SiteNav />
      </div>

      <LayoutShell
        hero={
          <section style={homepageHeroSection}>
            <div style={homepageHeroInner}>
              <div style={heroTextColumn}>
                <p style={eyebrow}>Free Time Zone Meeting Planner</p>

                <h1 style={heroHeading}>
                  Find the Best Meeting Time Across Any Time Zone
                </h1>

                <p style={heroSubtext}>
                  Smart scheduling for global teams, remote workers, consultants,
                  freelancers, and anyone planning meetings across countries.
                </p>

                <div style={heroButtonRow}>
                  <a href="#schedule-tool" style={primaryButton}>
                    Try the Free Tool
                  </a>

                  <a href="/guides" style={secondaryButton}>
                    View Scheduling Guides
                  </a>
                </div>

                <div style={trustRow}>
                  <span>No sign-up required</span>
                  <span>Free to use</span>
                  <span>Works worldwide</span>
                </div>
              </div>

              <div style={heroPreviewCard}>
                <div style={previewTopRow}>
                  <span style={previewLabel}>Smart Time Check</span>
                  <span style={previewBadge}>Free</span>
                </div>

                <div style={previewTitle}>New York → London</div>

                <div style={previewTimeGrid}>
                  <div style={previewTimeBox}>
                    <span style={previewCity}>New York</span>
                    <strong>9:00 AM</strong>
                  </div>

                  <div style={previewTimeBox}>
                    <span style={previewCity}>London</span>
                    <strong>2:00 PM</strong>
                  </div>
                </div>

                <div style={previewTimeline}>
                  <div style={previewTimelineFill}>Best Time</div>
                </div>

                <p style={previewResult}>
                  Best meeting window: 9AM – 12PM New York time
                </p>
              </div>
            </div>
          </section>
        }
        toolPreview={
          <>
            <section style={benefitsSection}>
              <div style={benefitsGrid}>
                <div style={benefitCard}>
                  <strong>Accurate Planning</strong>
                  <span>Compare cities and local times clearly.</span>
                </div>

                <div style={benefitCard}>
                  <strong>Save Time</strong>
                  <span>Reduce back-and-forth scheduling messages.</span>
                </div>

                <div style={benefitCard}>
                  <strong>For Global Teams</strong>
                  <span>Built for remote teams and international calls.</span>
                </div>

                <div style={benefitCard}>
                  <strong>Simple to Use</strong>
                  <span>No account required to check meeting windows.</span>
                </div>
              </div>
            </section>

            <section id="schedule-tool" style={toolSectionWrap}>
              <div style={toolSectionHeader}>
                <p style={eyebrow}>Use the Tool</p>

                <h2 style={whiteHeading}>
                  Compare Time Zones and Find Your Best Meeting Window
                </h2>

                <p style={whiteSubtext}>
                  Select two locations, review the overlap, and choose a time
                  that works better for everyone.
                </p>
              </div>

              <HeroSection />
            </section>

            <section style={resourceIntroSection}>
              <h2 style={whiteHeading}>
                Helpful Resources to Schedule Better Meetings
              </h2>

              <p style={whiteSubtext}>
                Learn how to plan across time zones, avoid scheduling mistakes,
                and make global meetings easier for everyone.
              </p>

              <div style={resourceGrid}>
                <a
                  href="/how-to-schedule-meetings-across-time-zones"
                  style={resourceCard}
                >
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
          </>
        }
        premiumFeatures={null}
        bonusFeatures={
          <main style={mainContentWrap}>
            <section style={citySection}>
              <h2 style={whiteHeading}>
                Compare Popular Cities Across Time Zones
              </h2>

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

const homepageHeroSection = {
  background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
  color: "#ffffff",
  padding: "64px 20px 44px",
};

const homepageHeroInner = {
  maxWidth: "1180px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  alignItems: "center",
  gap: "34px",
};

const heroTextColumn = {
  maxWidth: "620px",
};

const eyebrow = {
  display: "inline-block",
  margin: "0 0 12px 0",
  padding: "7px 14px",
  borderRadius: "999px",
  background: "rgba(250,204,21,0.16)",
  color: "#facc15",
  fontSize: "13px",
  fontWeight: 800,
};

const heroHeading = {
  fontSize: "clamp(38px, 6vw, 64px)",
  lineHeight: "1.02",
  margin: "0 0 18px",
  fontWeight: 900,
};

const heroSubtext = {
  color: "rgba(255,255,255,0.86)",
  fontSize: "17px",
  lineHeight: "1.6",
  margin: "0 0 24px",
};

const heroButtonRow = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "12px",
  alignItems: "center",
};

const primaryButton = {
  display: "inline-block",
  background: "#facc15",
  color: "#1e1b4b",
  padding: "12px 18px",
  borderRadius: "999px",
  fontWeight: 900,
  textDecoration: "none",
};

const secondaryButton = {
  display: "inline-block",
  background: "rgba(255,255,255,0.12)",
  color: "#ffffff",
  padding: "12px 18px",
  borderRadius: "999px",
  fontWeight: 800,
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.22)",
};

const trustRow = {
  marginTop: "20px",
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "12px",
  color: "rgba(255,255,255,0.82)",
  fontSize: "13px",
  fontWeight: 700,
};

const heroPreviewCard = {
  background: "#ffffff",
  color: "#1e1b4b",
  borderRadius: "26px",
  padding: "24px",
  boxShadow: "0 24px 70px rgba(0,0,0,0.32)",
  border: "1px solid rgba(196,181,253,0.65)",
};

const previewTopRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  marginBottom: "18px",
};

const previewLabel = {
  fontSize: "13px",
  fontWeight: 900,
  color: "#4c1d95",
};

const previewBadge = {
  background: "#dcfce7",
  color: "#166534",
  padding: "5px 10px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: 900,
};

const previewTitle = {
  fontSize: "24px",
  fontWeight: 900,
  marginBottom: "18px",
};

const previewTimeGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "12px",
  marginBottom: "18px",
};

const previewTimeBox = {
  background: "#f5f3ff",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "16px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "6px",
};

const previewCity = {
  color: "#6b7280",
  fontSize: "13px",
  fontWeight: 800,
};

const previewTimeline = {
  height: "28px",
  background: "#ede9fe",
  borderRadius: "999px",
  overflow: "hidden",
  marginBottom: "14px",
};

const previewTimelineFill = {
  width: "62%",
  height: "100%",
  background: "linear-gradient(90deg, #22c55e, #16a34a)",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  fontWeight: 900,
  borderRadius: "999px",
};

const previewResult = {
  margin: 0,
  color: "#4338ca",
  fontSize: "14px",
  fontWeight: 800,
};

const benefitsSection = {
  maxWidth: "1080px",
  margin: "0 auto",
  padding: "0 20px 20px",
};

const benefitsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "14px",
};

const benefitCard = {
  background: "rgba(255,255,255,0.94)",
  color: "#1e1b4b",
  borderRadius: "16px",
  padding: "18px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "7px",
  boxShadow: "0 8px 22px rgba(0,0,0,0.16)",
  border: "1px solid rgba(196,181,253,0.55)",
};

const toolSectionWrap = {
  maxWidth: "1120px",
  margin: "30px auto 0",
  padding: "0 20px",
};

const toolSectionHeader = {
  textAlign: "center" as const,
  marginBottom: "12px",
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
