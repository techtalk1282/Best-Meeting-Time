/**
 * File: app/disclaimer/page.tsx
 * Version: v1.0 (PUBLISHER-STYLE DISCLAIMER PAGE)
 * Purpose:
 * - Add a dedicated disclaimer page for AdSense trust/readiness
 * - Clarify general information use, tool accuracy limits, external links, ads, third-party services, and user responsibility
 * - Match the expanded legal-page structure used by Privacy Policy and Terms of Service
 *
 * Rollback:
 * - Delete app/disclaimer/page.tsx if this page causes any issue
 */

import Link from "next/link";

const linkStyle = {
  color: "#ddd6fe",
  fontWeight: 800,
};

const sectionTitleStyle = {
  marginTop: "34px",
  fontSize: "26px",
  fontWeight: 900,
};

const backLinkStyle = {
  display: "inline-block",
  marginTop: "12px",
  color: "#ddd6fe",
  fontWeight: 800,
  textDecoration: "none",
};

export default function DisclaimerPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
        color: "white",
      }}
    >
      <nav
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "24px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ color: "white", fontWeight: 800, textDecoration: "none" }}>
          Best Meeting Time
        </Link>

        <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", alignItems: "center" }}>
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Home
          </Link>
          <Link href="/how-it-works" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Schedule a Meeting
          </Link>
          <Link href="/features" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Features
          </Link>
          <Link href="/guides" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Guides
          </Link>
          <Link href="/blog" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Blog
          </Link>
          <Link href="/about" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            About
          </Link>
          <Link href="/contact" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Contact
          </Link>
        </div>
      </nav>

      <section
        style={{
          maxWidth: "940px",
          margin: "0 auto",
          padding: "40px 20px 80px",
          lineHeight: "1.7",
        }}
      >
        <p style={{ opacity: 0.9, marginBottom: "10px", fontWeight: 700 }}>
          Effective Date: June 3, 2026
        </p>

        <h1 style={{ fontSize: "40px", fontWeight: 900, marginBottom: "18px" }}>
          Disclaimer
        </h1>

        <h2 style={{ fontSize: "24px", fontWeight: 900, marginTop: "0" }}>
          Important information about using Best Meeting Time
        </h2>

        <p>
          The information on Best Meeting Time is published in good faith for general informational,
          educational, and productivity purposes. Best Meeting Time provides scheduling tools, time
          zone guides, meeting planning resources, and related content to help users compare locations
          and think through scheduling decisions.
        </p>

        <p>
          If you have questions about this disclaimer, you may contact us at{" "}
          <strong>support@bestmeetingtimeapp.com</strong>.
        </p>

        <section
          id="contents"
          style={{
            marginTop: "30px",
            padding: "24px",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.08)",
          }}
        >
          <h2 style={{ fontSize: "26px", fontWeight: 900, marginTop: 0 }}>Contents</h2>
          <p>Click below to jump to any section of this Disclaimer.</p>

          <ol style={{ display: "grid", gap: "8px", paddingLeft: "22px" }}>
            <li><a href="#general-information" style={linkStyle}>General Information</a></li>
            <li><a href="#tool-accuracy" style={linkStyle}>Tool Accuracy and Time Zone Information</a></li>
            <li><a href="#no-professional-advice" style={linkStyle}>No Professional Advice</a></li>
            <li><a href="#user-responsibility" style={linkStyle}>User Responsibility</a></li>
            <li><a href="#external-links" style={linkStyle}>External Links</a></li>
            <li><a href="#advertising" style={linkStyle}>Advertising and Third-Party Services</a></li>
            <li><a href="#availability" style={linkStyle}>Website Availability</a></li>
            <li><a href="#consent" style={linkStyle}>Consent</a></li>
            <li><a href="#updates" style={linkStyle}>Updates</a></li>
            <li><a href="#contact" style={linkStyle}>Contact Information</a></li>
          </ol>
        </section>

        <h2 id="general-information" style={sectionTitleStyle}>1. General Information</h2>
        <p>
          All information on this website is provided for general information purposes. While we work
          to make Best Meeting Time useful and clear, we do not make warranties about the
          completeness, reliability, accuracy, timeliness, or suitability of the information provided.
        </p>
        <p>
          Any action you take based on information found on Best Meeting Time is strictly at your own
          risk. Best Meeting Time will not be liable for losses, damages, missed meetings, scheduling
          errors, business interruptions, or other consequences connected with use of this website.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="tool-accuracy" style={sectionTitleStyle}>
          2. Tool Accuracy and Time Zone Information
        </h2>
        <p>
          Best Meeting Time may provide time zone comparisons, suggested meeting windows, local time
          examples, country timing information, and scheduling guidance. Time zones, daylight saving
          rules, regional holidays, work hours, and local expectations can change.
        </p>
        <p>
          You should always verify meeting times, calendar details, daylight saving changes, and local
          availability before sending invitations or making business, travel, or scheduling decisions.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="no-professional-advice" style={sectionTitleStyle}>3. No Professional Advice</h2>
        <p>
          Best Meeting Time does not provide legal, financial, business, employment, compliance,
          travel, operational, or professional advice. Our guides and tools are intended to help users
          plan more thoughtfully, but they should not replace professional judgment or independent
          verification.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="user-responsibility" style={sectionTitleStyle}>4. User Responsibility</h2>
        <p>
          Users are responsible for how they use Best Meeting Time. This includes confirming meeting
          times, reviewing participant availability, checking calendars, validating time zone
          differences, and considering local work expectations before making final decisions.
        </p>
        <p>
          If a meeting is important, time-sensitive, international, client-facing, or tied to travel
          or business commitments, you should confirm the details directly with the people involved.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="external-links" style={sectionTitleStyle}>5. External Links</h2>
        <p>
          From Best Meeting Time, you may visit other websites by following links to external sites.
          While we aim to link to useful and relevant resources, we have no control over the content,
          accuracy, privacy policies, terms, or nature of third-party websites.
        </p>
        <p>
          External links do not imply a recommendation or endorsement of everything found on those
          sites. Website owners and content may change without notice, and a link that was useful at
          one time may later become outdated, inaccurate, or unavailable.
        </p>
        <p>
          When you leave Best Meeting Time, please review the Privacy Policy and Terms of Service of
          any external website before submitting information or engaging in business.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="advertising" style={sectionTitleStyle}>6. Advertising and Third-Party Services</h2>
        <p>
          Best Meeting Time may display advertisements through Google AdSense or other advertising
          services. Ads and third-party services may use cookies or similar technologies according to
          their own policies.
        </p>
        <p>
          We do not control the claims, offers, products, services, or websites promoted by
          third-party advertisers. Any interaction with advertisers or third-party services is between
          you and the third party.
        </p>
        <p>
          For more information about cookies, advertising, analytics, and third-party services, please
          review our{" "}
          <Link href="/privacy-policy" style={linkStyle}>
            Privacy Policy
          </Link>
          .
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="availability" style={sectionTitleStyle}>7. Website Availability</h2>
        <p>
          Best Meeting Time may be updated, changed, paused, or removed at any time. We do not
          guarantee that the website, planner, guides, tools, or resources will always be available,
          uninterrupted, secure, current, or error-free.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="consent" style={sectionTitleStyle}>8. Consent</h2>
        <p>
          By using Best Meeting Time, you consent to this Disclaimer and agree to its terms. You also
          agree to review and follow our{" "}
          <Link href="/terms-of-service" style={linkStyle}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" style={linkStyle}>
            Privacy Policy
          </Link>
          .
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="updates" style={sectionTitleStyle}>9. Updates</h2>
        <p>
          We may update, amend, or make changes to this Disclaimer from time to time. Any updates will
          be posted on this page with a revised effective date. Continued use of the website after
          updates are posted means you accept the updated Disclaimer.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="contact" style={sectionTitleStyle}>10. Contact Information</h2>
        <p>
          If you require more information or have questions about this Disclaimer, please contact us
          at:
        </p>
        <p style={{ fontWeight: 900 }}>support@bestmeetingtimeapp.com</p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <div style={{ marginTop: "40px" }}>
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "white",
              color: "#4c1d95",
              padding: "12px 18px",
              borderRadius: "12px",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Back to Home
          </Link>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          padding: "24px 20px 34px",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "22px", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Home
          </Link>
          <Link href="/guides" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Guides
          </Link>
          <Link href="/blog" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Blog
          </Link>
          <Link href="/contact" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Contact
          </Link>
          <Link href="/privacy-policy" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Terms of Service
          </Link>
          <Link href="/disclaimer" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            Disclaimer
          </Link>
        </div>
      </footer>
    </main>
  );
}
