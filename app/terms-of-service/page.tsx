/**
 * File: app/terms-of-service/page.tsx
 * Version: v1.3 (EXPANDED ADSENSE TRUST TERMS OF SERVICE)
 * Purpose:
 * - Replace short placeholder terms with a fuller publisher-style Terms of Service page
 * - Add stronger sections for acceptable use, intellectual property, third-party links, ads, disclaimers, liability, and updates
 * - Keep integrated site navigation and footer
 *
 * Rollback:
 * - Revert to v1.2 if this expanded terms page causes any visual or content issue
 */

import Link from "next/link";

export default function TermsOfService() {
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
          maxWidth: "920px",
          margin: "0 auto",
          padding: "40px 20px 70px",
          lineHeight: "1.7",
        }}
      >
        <p style={{ opacity: 0.85, marginBottom: "10px", fontWeight: 700 }}>
          Effective Date: June 3, 2026
        </p>

        <h1 style={{ fontSize: "38px", fontWeight: 900, marginBottom: "20px" }}>
          Terms of Service
        </h1>

        <p>
          These Terms of Service govern your use of Best Meeting Time, including our meeting
          planner, time zone tools, guides, articles, resources, and related website pages. By using
          this website, you agree to these terms.
        </p>

        <p>
          If you do not agree with these Terms of Service, please discontinue use of Best Meeting
          Time.
        </p>

        <h2 style={{ marginTop: "30px" }}>1. Use of the Website</h2>
        <p>
          Best Meeting Time provides educational scheduling resources and tools to help users compare
          time zones, review meeting windows, and plan meetings across different regions. The website
          is provided for informational and productivity purposes.
        </p>

        <p>
          You may use this website for personal, professional, educational, and business planning
          purposes, provided that you comply with these terms and do not misuse the service.
        </p>

        <h2 style={{ marginTop: "30px" }}>2. No Professional Advice</h2>
        <p>
          The information on Best Meeting Time is provided for general informational purposes only.
          Nothing on this website should be treated as legal, financial, business, employment,
          compliance, or professional advice.
        </p>

        <p>
          Meeting recommendations, scheduling examples, country timing guides, and time zone content
          are intended to help users make better planning decisions, but users remain responsible for
          verifying details before relying on any information.
        </p>

        <h2 style={{ marginTop: "30px" }}>3. Accuracy of Information</h2>
        <p>
          We make reasonable efforts to provide useful and accurate scheduling information. However,
          time zones, daylight saving rules, regional holidays, business hours, and local customs may
          change.
        </p>

        <p>
          We do not guarantee that all time zone information, meeting recommendations, guide content,
          or tool results will always be accurate, complete, current, or suitable for your specific
          situation.
        </p>

        <h2 style={{ marginTop: "30px" }}>4. User Responsibility</h2>
        <p>You are responsible for:</p>

        <ul>
          <li>Verifying meeting times before sending invitations.</li>
          <li>Confirming local work hours, holidays, and daylight saving changes.</li>
          <li>Reviewing calendar details before relying on a suggested meeting window.</li>
          <li>Using your own judgment when scheduling business, client, or team meetings.</li>
          <li>Ensuring that your use of the website complies with applicable laws and policies.</li>
        </ul>

        <h2 style={{ marginTop: "30px" }}>5. Acceptable Use</h2>
        <p>You agree not to:</p>

        <ul>
          <li>Use the website for unlawful, harmful, abusive, or fraudulent activity.</li>
          <li>Attempt to disrupt, damage, overload, or interfere with the website.</li>
          <li>Attempt to gain unauthorized access to systems, accounts, or data.</li>
          <li>Copy, scrape, harvest, or reproduce site content in a way that violates these terms.</li>
          <li>Use automated tools in a way that harms site performance or availability.</li>
          <li>Misrepresent your relationship with Best Meeting Time.</li>
        </ul>

        <h2 style={{ marginTop: "30px" }}>6. Intellectual Property</h2>
        <p>
          The content on Best Meeting Time, including text, layouts, page designs, guides, articles,
          branding, graphics, and related materials, is owned by Best Meeting Time or used with
          permission unless otherwise stated.
        </p>

        <p>
          You may view and use the website for normal personal or business planning purposes. You may
          not copy, republish, sell, redistribute, or create derivative works from our content without
          permission.
        </p>

        <h2 style={{ marginTop: "30px" }}>7. Third-Party Links and Resources</h2>
        <p>
          Best Meeting Time may link to third-party websites, resources, tools, or services. These
          links are provided for convenience and informational purposes.
        </p>

        <p>
          We do not control third-party websites and are not responsible for their content, accuracy,
          privacy practices, terms, availability, or security. Visiting external websites is done at
          your own discretion.
        </p>

        <h2 style={{ marginTop: "30px" }}>8. Advertising and Third-Party Services</h2>
        <p>
          Best Meeting Time may display advertising through Google AdSense or other advertising
          services. Third-party vendors may use cookies or similar technologies to serve ads, measure
          performance, or personalize advertising.
        </p>

        <p>
          Your use of the website is also subject to our Privacy Policy, which explains cookies,
          analytics, advertising, and third-party services in more detail.
        </p>

        <h2 style={{ marginTop: "30px" }}>9. Service Availability</h2>
        <p>
          We try to keep Best Meeting Time available and functional, but we do not guarantee that the
          website will always be available, uninterrupted, secure, or error-free.
        </p>

        <p>
          We may update, modify, pause, remove, or discontinue any part of the website at any time
          without prior notice.
        </p>

        <h2 style={{ marginTop: "30px" }}>10. No Warranties</h2>
        <p>
          Best Meeting Time is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
          We make no warranties, express or implied, regarding the website, tool results, guides,
          articles, availability, accuracy, or suitability for any specific purpose.
        </p>

        <h2 style={{ marginTop: "30px" }}>11. Limitation of Liability</h2>
        <p>
          Best Meeting Time is not responsible for losses, damages, missed meetings, scheduling
          conflicts, business interruptions, travel issues, lost opportunities, or other consequences
          arising from use of the website or reliance on its information.
        </p>

        <p>
          You agree that your use of Best Meeting Time is at your own discretion and risk.
        </p>

        <h2 style={{ marginTop: "30px" }}>12. Indemnification</h2>
        <p>
          You agree to hold Best Meeting Time harmless from claims, damages, losses, liabilities, and
          expenses arising from your misuse of the website, violation of these terms, or reliance on
          the website in a way that causes harm to yourself or others.
        </p>

        <h2 style={{ marginTop: "30px" }}>13. Privacy Policy</h2>
        <p>
          Your use of Best Meeting Time is also governed by our{" "}
          <Link href="/privacy-policy" style={{ color: "#ddd6fe", fontWeight: 800 }}>
            Privacy Policy
          </Link>
          . Please review it to understand how cookies, analytics, advertising, and other data-related
          practices may apply.
        </p>

        <h2 style={{ marginTop: "30px" }}>14. Changes to These Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Updates will be posted on this page
          with a revised effective date. Continued use of the website after changes are posted means
          you accept the updated terms.
        </p>

        <h2 style={{ marginTop: "30px" }}>15. Contact Information</h2>
        <p>
          If you have questions about these Terms of Service, you may contact us at:
        </p>

        <p style={{ fontWeight: 800 }}>support@bestmeetingtimeapp.com</p>

        <div style={{ marginTop: "36px" }}>
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
        </div>
      </footer>
    </main>
  );
}
