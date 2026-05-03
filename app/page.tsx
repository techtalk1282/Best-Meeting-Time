/**
 * File: app/page.tsx
 * Version: v4.0 (V3 WHITE SAAS HOMEPAGE REBUILD)
 * Date: 2026-05-03
 *
 * PURPOSE:
 * - Full homepage redesign toward white SaaS-style layout
 * - Preserve ALL tool + premium + Stripe logic
 * - Improve first impression and AdSense readiness
 *
 * PROTECTED:
 * - NO Stripe changes
 * - NO ToolPreviewSection changes
 * - NO premium logic changes
 *
 * ROLLBACK:
 * - Revert to v3.7 if layout issues occur
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

      {/* NEW WHITE HEADER */}
      <div style={headerWrap}>
        <SiteNav />
      </div>

      <LayoutShell
        hero={
          <section style={heroSectionWhite}>
            <div style={heroInnerWhite}>

              {/* LEFT SIDE */}
              <div style={heroTextColumnWhite}>
                <p style={eyebrowDark}>Free Time Zone Meeting Planner</p>

                <h1 style={heroHeadingDark}>
                  Find the Best Meeting Time Across Any Time Zone
                </h1>

                <p style={heroSubtextDark}>
                  Smart scheduling for global teams, remote workers,
                  consultants, freelancers, and anyone planning meetings
                  across countries.
                </p>

                <div style={heroButtonRow}>
                  <a href="#schedule-tool" style={primaryButton}>
                    Try the Free Tool
                  </a>

                  <a href="/guides" style={secondaryButtonDark}>
                    View Scheduling Guides
                  </a>
                </div>

                <div style={trustRowDark}>
                  <span>No sign-up required</span>
                  <span>Free to use</span>
                  <span>Works worldwide</span>
                </div>
              </div>

              {/* RIGHT SIDE MOCK CARD */}
              <div style={heroPreviewCardWhite}>
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
            {/* BENEFITS STRIP */}
            <section style={benefitsSectionWhite}>
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

            {/* REAL TOOL SECTION (UNCHANGED LOGIC) */}
            <section id="schedule-tool" style={toolSectionWrapWhite}>
              <div style={toolSectionHeaderDark}>
                <p style={eyebrowDark}>Use the Tool</p>

                <h2 style={sectionHeadingDark}>
                  Compare Time Zones and Find Your Best Meeting Window
                </h2>

                <p style={sectionSubtextDark}>
                  Select two locations, review the overlap, and choose a time
                  that works better for everyone.
                </p>
              </div>

              {/* PROTECTED COMPONENT — DO NOT TOUCH */}
              <HeroSection />
            </section>

            {/* RESOURCES SECTION */}
            <section style={resourceSectionWhite}>
              <div style={resourceInner}>
                <h2 style={sectionHeadingDark}>
                  Helpful Resources to Schedule Better Meetings
                </h2>

                <p style={sectionSubtextDark}>
                  Learn how to plan across time zones, avoid scheduling mistakes,
                  and make global meetings easier for everyone.
                </p>

                <div style={resourceGrid}>
                  <a
                    href="/how-to-schedule-meetings-across-time-zones"
                    style={resourceCardWhite}
                  >
                    <strong>How to Schedule Across Time Zones</strong>
                    <span>Step-by-step guide for global teams</span>
                  </a>

                  <a
                    href="/best-meeting-times-remote-teams"
                    style={resourceCardWhite}
                  >
                    <strong>Best Meeting Times for Remote Teams</strong>
                    <span>Practical tips that actually work</span>
                  </a>

                  <a
                    href="/time-zone-meeting-planner-guide"
                    style={resourceCardWhite}
                  >
                    <strong>Time Zone Meeting Planner Guide</strong>
                    <span>Understand how to compare locations</span>
                  </a>

                  <a
                    href="/global-meeting-scheduling-tips"
                    style={resourceCardWhite}
                  >
                    <strong>Global Meeting Scheduling Tips</strong>
                    <span>Improve planning across countries</span>
                  </a>
                </div>

                {/* CTA BAND */}
                <div style={ctaBand}>
                  <span>Ready to compare cities now?</span>

                  <a href="#schedule-tool" style={primaryButton}>
                    Use the Free Tool
                  </a>
                </div>
              </div>
            </section>


          </>
        }
        premiumFeatures={null}
        bonusFeatures={
          <main style={mainContentWrapWhite}>
            {/* POPULAR CITY LINKS */}
            <section style={citySectionWhite}>
              <h2 style={sectionHeadingDark}>
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

            {/* CONTENT PANEL 1 */}
            <section style={contentPanelWhite}>
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

            {/* CONTENT PANEL 2 */}
            <section style={contentPanelWhite}>
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

            {/* PREMIUM SECTION — PROTECTED */}
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

const headerWrap = {
  background: "#ffffff",
  borderBottom: "1px solid #ede9fe",
};

const heroSectionWhite = {
  background:
    "linear-gradient(180deg, #ffffff 0%, #f8f7ff 58%, #ede9fe 100%)",
  color: "#1e1b4b",
  padding: "72px 20px 54px",
};

const heroInnerWhite = {
  maxWidth: "1180px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  alignItems: "center",
  gap: "38px",
};

const heroTextColumnWhite = {
  maxWidth: "620px",
};

const eyebrowDark = {
  display: "inline-block",
  margin: "0 0 12px 0",
  padding: "7px 14px",
  borderRadius: "999px",
  background: "#ede9fe",
  color: "#4c1d95",
  fontSize: "13px",
  fontWeight: 900,
};

const heroHeadingDark = {
  fontSize: "clamp(38px, 6vw, 64px)",
  lineHeight: "1.02",
  margin: "0 0 18px",
  fontWeight: 900,
  letterSpacing: "-0.04em",
};

const heroSubtextDark = {
  color: "#4b5563",
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
  boxShadow: "0 10px 24px rgba(250,204,21,0.25)",
};

const secondaryButtonDark = {
  display: "inline-block",
  background: "#ffffff",
  color: "#4c1d95",
  padding: "12px 18px",
  borderRadius: "999px",
  fontWeight: 900,
  textDecoration: "none",
  border: "1px solid #c4b5fd",
};

const trustRowDark = {
  marginTop: "20px",
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "12px",
  color: "#5b21b6",
  fontSize: "13px",
  fontWeight: 800,
};

const heroPreviewCardWhite = {
  background: "#ffffff",
  color: "#1e1b4b",
  borderRadius: "28px",
  padding: "26px",
  boxShadow: "0 28px 80px rgba(76,29,149,0.18)",
  border: "1px solid #ddd6fe",
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

// ===== app/page.tsx CHUNK 5 OF 6 END =====
// ===== app/page.tsx CHUNK 6 OF 6 START =====

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

const benefitsSectionWhite = {
  background: "#ffffff",
  padding: "28px 20px",
};

const benefitsGrid = {
  maxWidth: "1080px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "14px",
};

const benefitCard = {
  background: "#ffffff",
  color: "#1e1b4b",
  borderRadius: "18px",
  padding: "18px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "7px",
  boxShadow: "0 12px 30px rgba(76,29,149,0.10)",
  border: "1px solid #ede9fe",
};

const toolSectionWrapWhite = {
  background: "#4c1d95",
  padding: "54px 20px",
};

const toolSectionHeaderDark = {
  maxWidth: "760px",
  margin: "0 auto 18px",
  textAlign: "center" as const,
};

const sectionHeadingDark = {
  color: "#1e1b4b",
  fontSize: "clamp(28px, 4vw, 42px)",
  lineHeight: "1.12",
  margin: "0 0 10px",
  fontWeight: 900,
  letterSpacing: "-0.03em",
};

const sectionSubtextDark = {
  maxWidth: "720px",
  margin: "0 auto 26px",
  color: "#4b5563",
  lineHeight: "1.6",
  fontSize: "15px",
};

const resourceSectionWhite = {
  background: "#f8f7ff",
  padding: "64px 20px",
};

const resourceInner = {
  maxWidth: "1080px",
  margin: "0 auto",
  textAlign: "center" as const,
};

const resourceGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "16px",
};

const resourceCardWhite = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "8px",
  minHeight: "118px",
  padding: "20px",
  background: "#ffffff",
  color: "#1e1b4b",
  borderRadius: "18px",
  textDecoration: "none",
  boxShadow: "0 12px 30px rgba(76,29,149,0.10)",
  border: "1px solid #ede9fe",
  textAlign: "left" as const,
};

const ctaBand = {
  marginTop: "28px",
  padding: "20px 24px",
  background: "#4c1d95",
  color: "#ffffff",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap" as const,
  gap: "16px",
  fontWeight: 800,
};

const mainContentWrapWhite = {
  background: "#ffffff",
  padding: "64px 20px 78px",
};

const citySectionWhite = {
  maxWidth: "980px",
  margin: "0 auto 42px",
  textAlign: "center" as const,
};

const cityLinks = {
  display: "flex",
  flexWrap: "wrap" as const,
  justifyContent: "center",
  gap: "12px",
};

const contentPanelWhite = {
  maxWidth: "980px",
  margin: "0 auto 40px",
  background: "#ffffff",
  borderRadius: "24px",
  padding: "32px",
  boxShadow: "0 14px 38px rgba(76,29,149,0.10)",
  border: "1px solid #ede9fe",
};

const panelHeading = {
  fontSize: "28px",
  color: "#1e1b4b",
  marginBottom: "15px",
};

const panelIntro = {
  color: "#312e81",
  fontSize: "14px",
  lineHeight: "1.5",
  maxWidth: "720px",
  margin: "0 auto",
};

const exampleCard = {
  background: "#f8f7ff",
  padding: "16px",
  borderRadius: "16px",
  marginBottom: "18px",
  border: "1px solid #c4b5fd",
};

const infoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "14px",
};

const card = {
  background: "#ffffff",
  padding: "16px",
  borderRadius: "16px",
  boxShadow: "0 8px 20px rgba(76,29,149,0.08)",
  border: "1px solid #ede9fe",
};

const title = {
  color: "#1e1b4b",
  marginBottom: "6px",
};

const text = {
  color: "#374151",
  lineHeight: "1.55",
  margin: "6px 0",
};

const textList = {
  color: "#374151",
  paddingLeft: "18px",
  lineHeight: "1.6",
  margin: 0,
};

const gold = {
  color: "#b45309",
  fontWeight: 800,
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
  margin: "60px auto 0",
};


