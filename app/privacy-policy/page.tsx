/**
 * File: app/privacy-policy/page.tsx
 * Version: v1.3 (EXPANDED ADSENSE TRUST PRIVACY POLICY)
 * Purpose:
 * - Replace short placeholder privacy policy with a more complete publisher-style policy
 * - Add stronger sections for cookies, analytics, advertising, third-party vendors, external links, data security, children, and updates
 * - Keep site navigation and footer intact
 *
 * Rollback:
 * - Revert to v1.2 if this expanded privacy policy causes any visual or content issue
 */

import Link from "next/link";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>

        <p>
          Best Meeting Time provides scheduling tools, time zone guides, meeting planning resources,
          and educational content to help users compare locations, understand time differences, and
          plan meetings across regions. This Privacy Policy explains how information may be collected,
          used, shared, and protected when you visit or use this website.
        </p>

        <p>
          By using Best Meeting Time, you agree to the practices described in this Privacy Policy. If
          you do not agree with this policy, please discontinue use of the website.
        </p>

        <h2 style={{ marginTop: "30px" }}>1. Information We Collect</h2>
        <p>
          Best Meeting Time does not require users to create an account to use the public scheduling
          resources. We do not intentionally collect sensitive personal information through the meeting
          time planner.
        </p>

        <p>Information that may be collected includes:</p>

        <ul>
          <li>Basic usage information, such as pages visited and general site activity.</li>
          <li>Device and browser information, such as browser type, operating system, and screen size.</li>
          <li>Approximate location information, such as country or region derived from technical data.</li>
          <li>Information voluntarily submitted through contact forms or direct email communication.</li>
          <li>Cookie and advertising data used by third-party services, including Google services.</li>
        </ul>

        <h2 style={{ marginTop: "30px" }}>2. How We Use Information</h2>
        <p>Information may be used to:</p>

        <ul>
          <li>Operate and improve the Best Meeting Time website.</li>
          <li>Understand how visitors use scheduling tools, guides, and articles.</li>
          <li>Improve page performance, usability, and content quality.</li>
          <li>Respond to user questions, feedback, or support requests.</li>
          <li>Display advertising, where applicable.</li>
          <li>Protect the website from abuse, spam, technical errors, or misuse.</li>
        </ul>

        <h2 style={{ marginTop: "30px" }}>3. Cookies and Similar Technologies</h2>
        <p>
          Cookies are small files placed on a browser or device that help websites remember activity,
          measure traffic, improve functionality, and support advertising. Best Meeting Time may use
          cookies, local storage, pixels, tags, and similar technologies.
        </p>

        <p>Cookies may be used for:</p>

        <ul>
          <li>Site functionality and performance.</li>
          <li>Analytics and traffic measurement.</li>
          <li>Advertising and ad personalization.</li>
          <li>Security, fraud prevention, and abuse detection.</li>
          <li>Remembering basic site preferences where applicable.</li>
        </ul>

        <h2 style={{ marginTop: "30px" }}>4. Google AdSense and Advertising</h2>
        <p>
          Best Meeting Time may display ads through Google AdSense or related Google advertising
          services. Third-party vendors, including Google, may use cookies to serve ads based on a
          user&apos;s prior visits to this website or other websites.
        </p>

        <p>
          Google&apos;s use of advertising cookies enables Google and its partners to serve ads to
          users based on visits to Best Meeting Time and other sites on the Internet. Users may opt
          out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ddd6fe", fontWeight: 800 }}
          >
            Google Ads Settings
          </a>
          .
        </p>

        <p>
          Users may also learn more about how Google uses information from sites or apps that use
          Google services by visiting{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ddd6fe", fontWeight: 800 }}
          >
            Google&apos;s partner sites policy
          </a>
          .
        </p>

        <h2 style={{ marginTop: "30px" }}>5. Google Analytics and Usage Data</h2>
        <p>
          Best Meeting Time may use analytics tools, including Google Analytics, to understand how
          visitors interact with the website. Analytics data may include pages visited, session
          duration, browser type, device type, general location, and referral source.
        </p>

        <p>
          This information is used to improve site performance, identify helpful content, fix
          technical issues, and better understand which scheduling resources are most useful to
          visitors.
        </p>

        <h2 style={{ marginTop: "30px" }}>6. Third-Party Services</h2>
        <p>
          Best Meeting Time may use third-party services for analytics, advertising, hosting,
          performance monitoring, security, and website functionality. These third-party services may
          collect information according to their own privacy policies.
        </p>

        <p>Third-party services may include:</p>

        <ul>
          <li>Google AdSense or other advertising services.</li>
          <li>Google Analytics or other analytics providers.</li>
          <li>Hosting and deployment platforms.</li>
          <li>Security, performance, or monitoring tools.</li>
          <li>External links to educational resources or related websites.</li>
        </ul>

        <h2 style={{ marginTop: "30px" }}>7. External Links</h2>
        <p>
          Best Meeting Time may include links to external websites, services, articles, resources, or
          third-party tools. We are not responsible for the privacy practices, content, accuracy, or
          policies of external websites.
        </p>

        <p>
          When you leave Best Meeting Time, you should review the privacy policy and terms of the
          external website you are visiting.
        </p>

        <h2 style={{ marginTop: "30px" }}>8. Information You Voluntarily Provide</h2>
        <p>
          If you contact Best Meeting Time by email or through a contact form, we may receive your
          name, email address, message content, and any other information you choose to provide. This
          information is used to respond to your request and provide support.
        </p>

        <p>
          Please do not submit sensitive personal information, financial information, passwords, or
          confidential business information through public forms or general email requests.
        </p>

        <h2 style={{ marginTop: "30px" }}>9. Data Security</h2>
        <p>
          We take reasonable steps to protect information associated with the website. However, no
          website, internet transmission, hosting platform, or electronic storage method can be
          guaranteed to be completely secure.
        </p>

        <p>
          Users are responsible for using secure devices, updated browsers, and safe browsing
          practices when accessing online tools and resources.
        </p>

        <h2 style={{ marginTop: "30px" }}>10. Data Retention</h2>
        <p>
          Best Meeting Time retains information only as long as reasonably needed for website
          operation, analytics, security, support, compliance, or legitimate business purposes.
          Third-party services may retain data according to their own retention policies.
        </p>

        <h2 style={{ marginTop: "30px" }}>11. Children&apos;s Privacy</h2>
        <p>
          Best Meeting Time is intended for general audiences and business or productivity use. The
          website is not directed toward children under the age of 13, and we do not knowingly collect
          personal information from children.
        </p>

        <p>
          If you believe a child has provided personal information through this website, please contact
          us so we can review and remove the information where appropriate.
        </p>

        <h2 style={{ marginTop: "30px" }}>12. International Visitors</h2>
        <p>
          Best Meeting Time may be accessed by users from different countries. By using this website,
          you understand that information may be processed in the United States or other locations
          where service providers operate.
        </p>

        <p>
          Privacy rights may vary depending on your country, state, province, or region. Users are
          encouraged to review local privacy rights and contact us with privacy-related questions.
        </p>

        <h2 style={{ marginTop: "30px" }}>13. Your Choices</h2>
        <p>You may control certain privacy and advertising choices by:</p>

        <ul>
          <li>Changing cookie settings in your browser.</li>
          <li>Using browser privacy or tracking protection tools.</li>
          <li>Visiting Google Ads Settings to manage personalized advertising.</li>
          <li>Using Google Analytics opt-out tools where available.</li>
          <li>Contacting us with questions about information you voluntarily submitted.</li>
        </ul>

        <h2 style={{ marginTop: "30px" }}>14. Do Not Track Signals</h2>
        <p>
          Some browsers provide Do Not Track signals. Because there is no consistent industry standard
          for responding to these signals, Best Meeting Time may not respond to Do Not Track requests
          in a uniform way.
        </p>

        <h2 style={{ marginTop: "30px" }}>15. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Updates will be posted on this page
          with a revised effective date. Continued use of the website after a policy update means you
          accept the updated policy.
        </p>

        <h2 style={{ marginTop: "30px" }}>16. Contact Information</h2>
        <p>
          If you have questions about this Privacy Policy or how Best Meeting Time handles privacy,
          cookies, analytics, or advertising, you may contact us at:
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
