/**
 * File: app/terms-of-service/page.tsx
 * Version: v1.4 (PUBLISHER-STYLE TERMS WITH TABLE OF CONTENTS)
 * Purpose:
 * - Expand Terms of Service into a more complete publisher-style legal/trust page
 * - Add table of contents with jump links and back-to-contents links
 * - Strengthen sections for binding agreement, privacy, age, user content, intellectual property, prohibited use, warranties, liability, affiliates, indemnity, copyright, severability, amendments, and contact
 *
 * Rollback:
 * - Revert to v1.3 if this expanded terms page causes any issue
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
          Terms of Service
        </h1>

        <h2 style={{ fontSize: "24px", fontWeight: 900, marginTop: "0" }}>
          Please read these terms before using Best Meeting Time
        </h2>

        <p>
          These Terms of Service act as a binding agreement between you and Best Meeting Time. By
          accessing or using this website, including our meeting planner, time zone tools, guides,
          blog articles, and related resources, you acknowledge that you have read, understood, and
          agreed to these terms.
        </p>

        <p>
          If you do not agree with these Terms of Service, please discontinue use of Best Meeting
          Time. These terms should be read together with our{" "}
          <Link href="/privacy-policy" style={linkStyle}>
            Privacy Policy
          </Link>
          , which explains how cookies, analytics, advertising, and other data-related practices may
          apply.
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
          <p>Click below to jump to any section of these Terms of Service.</p>

          <ol style={{ display: "grid", gap: "8px", paddingLeft: "22px" }}>
            <li><a href="#binding-agreement" style={linkStyle}>Binding Agreement</a></li>
            <li><a href="#privacy-policy" style={linkStyle}>Privacy Policy</a></li>
            <li><a href="#use-of-site" style={linkStyle}>Use of the Website</a></li>
            <li><a href="#age" style={linkStyle}>Age and Eligibility</a></li>
            <li><a href="#user-responsibility" style={linkStyle}>User Responsibility</a></li>
            <li><a href="#user-content" style={linkStyle}>User Content and Submissions</a></li>
            <li><a href="#intellectual-property" style={linkStyle}>Intellectual Property</a></li>
            <li><a href="#inappropriate-content" style={linkStyle}>Inappropriate Content</a></li>
            <li><a href="#prohibited-uses" style={linkStyle}>Prohibited Uses</a></li>
            <li><a href="#third-party-links" style={linkStyle}>Affiliated Sites and Third-Party Links</a></li>
            <li><a href="#advertising" style={linkStyle}>Advertising and Third-Party Services</a></li>
            <li><a href="#no-advice" style={linkStyle}>No Professional Advice</a></li>
            <li><a href="#no-warranties" style={linkStyle}>No Warranties</a></li>
            <li><a href="#limited-liability" style={linkStyle}>Limited Liability</a></li>
            <li><a href="#indemnity" style={linkStyle}>Indemnity</a></li>
            <li><a href="#copyright" style={linkStyle}>Copyright and No License</a></li>
            <li><a href="#severability" style={linkStyle}>Severability and Waiver</a></li>
            <li><a href="#governing-law" style={linkStyle}>Governing Law</a></li>
            <li><a href="#amendments" style={linkStyle}>Amendments</a></li>
            <li><a href="#contact" style={linkStyle}>Contact Information</a></li>
          </ol>
        </section>

        <h2 id="binding-agreement" style={sectionTitleStyle}>1. Binding Agreement</h2>
        <p>
          These Terms of Service form a binding agreement between you and Best Meeting Time. By
          accessing this website, viewing our content, using our scheduling tools, or interacting with
          any page on this site, you agree to be bound by these terms.
        </p>
        <p>
          These terms apply to all visitors, users, readers, and others who access Best Meeting Time.
          If you use this website on behalf of a company, organization, client, or other entity, you
          represent that you have authority to accept these terms on that entity&apos;s behalf.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="privacy-policy" style={sectionTitleStyle}>2. Privacy Policy</h2>
        <p>
          We believe in transparency regarding privacy, cookies, analytics, advertising, and
          information collection practices. Our{" "}
          <Link href="/privacy-policy" style={linkStyle}>
            Privacy Policy
          </Link>{" "}
          explains how information may be collected, used, shared, and protected when you use Best
          Meeting Time.
        </p>
        <p>
          By using this website, you also agree to the practices described in the Privacy Policy.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="use-of-site" style={sectionTitleStyle}>3. Use of the Website</h2>
        <p>
          Best Meeting Time provides educational scheduling resources and tools to help users compare
          time zones, review meeting windows, understand local timing differences, and plan meetings
          across different regions.
        </p>
        <p>
          The website is provided for informational, educational, productivity, and business planning
          purposes. You may use the website for personal, professional, educational, and business
          scheduling activities, provided that you comply with these terms.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="age" style={sectionTitleStyle}>4. Age and Eligibility</h2>
        <p>
          Best Meeting Time is intended for general audiences and business or productivity use. The
          site is not directed to children under the age of 13.
        </p>
        <p>
          If you are under the age of majority in your location, you should use this website only with
          the involvement of a parent, guardian, employer, teacher, or other responsible adult where
          appropriate.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="user-responsibility" style={sectionTitleStyle}>5. User Responsibility</h2>
        <p>
          Best Meeting Time may provide suggested meeting windows, time zone comparisons, scheduling
          examples, country timing guidance, and related educational content. You are responsible for
          verifying all meeting times before relying on them.
        </p>
        <p>You are responsible for:</p>
        <ul>
          <li>Confirming meeting times before sending invitations.</li>
          <li>Checking local holidays, business hours, daylight saving changes, and calendar details.</li>
          <li>Using your own judgment before making scheduling, travel, business, or client decisions.</li>
          <li>Confirming the needs of participants in different cities, countries, or regions.</li>
          <li>Ensuring your use of this website complies with applicable laws and workplace policies.</li>
        </ul>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="user-content" style={sectionTitleStyle}>6. User Content and Submissions</h2>
        <p>
          If Best Meeting Time allows users to submit comments, messages, feedback, suggestions,
          contact forms, or other content, you are responsible for the content you submit.
        </p>
        <p>
          By submitting content to Best Meeting Time, you grant us permission to use, store, review,
          respond to, and process that content for purposes related to operating the website,
          responding to your request, improving our services, protecting site security, or supporting
          other users.
        </p>
        <p>
          You represent that you have the right to submit any content you provide and that your
          submission does not violate the rights of another person or entity.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="intellectual-property" style={sectionTitleStyle}>7. Intellectual Property</h2>
        <p>
          When accessing or using Best Meeting Time, you agree to respect all copyright, trademark,
          and intellectual property laws. The content on this website, including text, layouts,
          designs, guides, articles, branding, graphics, page structure, and related materials, is
          owned by Best Meeting Time or used with permission unless otherwise stated.
        </p>
        <p>
          You may view and use the website for normal personal or business planning purposes. You may
          not copy, republish, sell, redistribute, scrape, reproduce, modify, or create derivative
          works from our content without written permission.
        </p>
        <p>
          The burden of ensuring that your use of any content does not violate applicable laws or
          third-party rights rests with you.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="inappropriate-content" style={sectionTitleStyle}>8. Inappropriate Content</h2>
        <p>
          You agree not to upload, submit, display, transmit, or distribute content through Best
          Meeting Time that is unlawful, abusive, threatening, defamatory, obscene, misleading,
          harassing, discriminatory, spam-like, fraudulent, or otherwise inappropriate.
        </p>
        <p>
          You also agree not to submit content that encourages conduct that could create civil
          liability, violate applicable law, infringe intellectual property rights, or interfere with
          the safe operation of the website.
        </p>
        <p>
          We reserve the right to remove, block, review, or refuse any content or communication that
          violates these terms or creates risk for the website, users, or third parties.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="prohibited-uses" style={sectionTitleStyle}>9. Prohibited Uses</h2>
        <p>You are prohibited from using Best Meeting Time to:</p>
        <ul>
          <li>Access data, systems, accounts, or content not intended for you.</li>
          <li>Probe, scan, test, or attempt to breach website security without authorization.</li>
          <li>Interfere with service to any user, host, system, or network.</li>
          <li>Submit viruses, malware, harmful code, spam, flooding requests, or disruptive traffic.</li>
          <li>Send unsolicited promotions, advertisements, or mass messages through the website.</li>
          <li>Forge headers, manipulate identifiers, or misrepresent the origin of requests.</li>
          <li>Reverse engineer, decompile, disassemble, or attempt to extract source code.</li>
          <li>Use automated scraping, copying, harvesting, or data extraction without permission.</li>
          <li>Use the website for unlawful, harmful, misleading, abusive, or fraudulent purposes.</li>
        </ul>
        <p>
          Any violation of system or network security may result in civil or criminal liability where
          applicable.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="third-party-links" style={sectionTitleStyle}>
          10. Affiliated Sites and Third-Party Links
        </h2>
        <p>
          Best Meeting Time may include links to third-party websites, tools, resources, services, or
          content. These links are provided for convenience, reference, education, or additional user
          support.
        </p>
        <p>
          We do not control third-party websites and make no guarantees regarding their accuracy,
          quality, security, privacy practices, terms, availability, or content. You acknowledge that
          you access third-party websites at your own discretion.
        </p>
        <p>
          Unless expressly stated otherwise, these Terms of Service apply only to Best Meeting Time
          and do not govern third-party websites.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="advertising" style={sectionTitleStyle}>11. Advertising and Third-Party Services</h2>
        <p>
          Best Meeting Time may display advertising through Google AdSense or other advertising
          services. Third-party vendors may use cookies or similar technologies to serve ads, measure
          performance, personalize advertising, or understand ad interactions.
        </p>
        <p>
          Best Meeting Time may also use analytics, hosting, performance, payment, security, or
          monitoring providers to operate and improve the website. Your use of third-party services
          may be subject to their own terms and policies.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="no-advice" style={sectionTitleStyle}>12. No Professional Advice</h2>
        <p>
          The information on Best Meeting Time is provided for general informational purposes. Nothing
          on this website should be treated as legal, financial, business, employment, compliance,
          travel, operational, or professional advice.
        </p>
        <p>
          Scheduling recommendations, time zone examples, country timing guides, and meeting planning
          resources are intended to help users think through scheduling decisions. You remain
          responsible for verifying details and making final decisions.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="no-warranties" style={sectionTitleStyle}>13. No Warranties</h2>
        <p>
          Best Meeting Time is made available on an &quot;as is&quot; and &quot;as available&quot;
          basis without warranties of any kind. You assume the risk of using, or being unable to use,
          the website.
        </p>
        <p>
          To the maximum extent permitted by law, we disclaim all warranties, express or implied,
          including warranties of accuracy, reliability, availability, merchantability, fitness for a
          particular purpose, and non-infringement.
        </p>
        <p>
          We do not warrant that the website will meet your requirements, that tool results will be
          accurate in every situation, or that operation of the website will be uninterrupted,
          error-free, secure, or current.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="limited-liability" style={sectionTitleStyle}>14. Limited Liability</h2>
        <p>
          To the maximum extent permitted by law, Best Meeting Time will not be liable for damages of
          any kind arising from or related to your use of the website, tool results, guides, articles,
          links, advertisements, or third-party services.
        </p>
        <p>
          This includes, but is not limited to, missed meetings, scheduling conflicts, business
          interruptions, lost profits, lost opportunities, travel issues, data loss, reliance on
          incorrect information, or special, incidental, indirect, consequential, or punitive damages.
        </p>
        <p>
          This limitation applies regardless of whether damages arise from contract, tort,
          negligence, strict liability, or any other legal theory.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="indemnity" style={sectionTitleStyle}>15. Indemnity</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Best Meeting Time from claims, losses,
          liabilities, damages, costs, and expenses arising from your access to or use of the website,
          your violation of these Terms of Service, your misuse of the website, or your infringement
          of any rights of another person or entity.
        </p>
        <p>
          We will make reasonable efforts to notify you of claims where appropriate and may cooperate
          in the defense of such claims at your expense.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="copyright" style={sectionTitleStyle}>16. Copyright and No License</h2>
        <p>
          All content on Best Meeting Time is protected by copyright and other intellectual property
          laws unless otherwise stated. All rights are reserved.
        </p>
        <p>
          Nothing on this website should be understood as granting you a license to use any trademark,
          service mark, logo, design, layout, brand element, article, guide, tool interface, or other
          protected material owned by Best Meeting Time or any third party.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="severability" style={sectionTitleStyle}>17. Severability and Waiver</h2>
        <p>
          If any part of these Terms of Service is found to be unenforceable by a court or authority
          of competent jurisdiction, the remaining provisions will remain in full force and effect.
        </p>
        <p>
          No waiver of any breach or provision of these terms will be considered a continuing waiver
          or a waiver of any other provision unless made in writing by an authorized representative.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="governing-law" style={sectionTitleStyle}>18. Governing Law</h2>
        <p>
          These Terms of Service will be interpreted and governed in accordance with applicable laws
          of the United States, without regard to conflict-of-law principles.
        </p>
        <p>
          You agree that disputes arising from or related to use of Best Meeting Time or these terms
          may be handled in a court or forum with appropriate jurisdiction.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="amendments" style={sectionTitleStyle}>19. Amendments</h2>
        <p>
          Best Meeting Time may update or amend these Terms of Service from time to time. Updates
          will be posted on this page with a revised effective date.
        </p>
        <p>
          Continued use of the website after updated terms are posted means you accept the revised
          Terms of Service. We encourage visitors to review this page periodically.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="contact" style={sectionTitleStyle}>20. Contact Information</h2>
        <p>
          If you have questions about these Terms of Service, you may contact Best Meeting Time at:
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

<Link href="/cookie-policy" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
  Cookie Policy
</Link>

<Link href="/refund-policy" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
  Refund Policy
</Link>
        </div>
      </footer>
    </main>
  );
}
