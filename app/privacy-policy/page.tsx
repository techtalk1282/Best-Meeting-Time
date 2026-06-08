/**
 * File: app/privacy-policy/page.tsx
 * Version: v1.4 (PUBLISHER-STYLE PRIVACY POLICY WITH TABLE OF CONTENTS)
 * Purpose:
 * - Expand privacy policy into a more complete publisher-style legal/trust page
 * - Add table of contents with jump links
 * - Add stronger privacy introduction, advertising, cookies, analytics, external links, payment, and data protection sections
 * - Improve AdSense trust/readiness signals without copying another site's policy
 *
 * Rollback:
 * - Revert to v1.3 if this expanded privacy policy causes any issue
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
          Privacy Policy
        </h1>

        <h2 style={{ fontSize: "24px", fontWeight: 900, marginTop: "0" }}>
          Your privacy is important to us
        </h2>

        <p>
          Best Meeting Time respects your privacy and is committed to explaining how information may
          be collected, used, protected, and shared when you visit our website. This Privacy Policy
          applies to Best Meeting Time, including our scheduling tools, time zone resources, guides,
          blog articles, and related pages.
        </p>

        <p>
          This Privacy Policy explains what information may be collected through the website, how we
          use that information, how cookies and advertising technologies may work, and what choices
          visitors have. This policy applies to information collected through this website and does
          not apply to information collected by third-party websites that we do not own or control.
        </p>

        <p>
          This Privacy Policy should be read together with our{" "}
          <Link href="/terms-of-service" style={linkStyle}>
            Terms of Service
          </Link>
          . Depending on how you use the website, additional notices, disclosures, or third-party
          policies may also apply.
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
          <p>Click below to jump to any section of this Privacy Policy.</p>

          <ol style={{ display: "grid", gap: "8px", paddingLeft: "22px" }}>
            <li><a href="#website-visitors" style={linkStyle}>Website Visitors</a></li>
            <li><a href="#personally-identifying-information" style={linkStyle}>Personally Identifying Information</a></li>
            <li><a href="#usage-data" style={linkStyle}>Usage Data and Aggregated Statistics</a></li>
            <li><a href="#cookies" style={linkStyle}>Cookies and Similar Technologies</a></li>
            <li><a href="#advertisements" style={linkStyle}>Advertisements and Google AdSense</a></li>
            <li><a href="#google-remarketing" style={linkStyle}>Google Advertising and Remarketing</a></li>
            <li><a href="#analytics" style={linkStyle}>Analytics Services</a></li>
            <li><a href="#external-links" style={linkStyle}>Links to External Sites</a></li>
            <li><a href="#protection" style={linkStyle}>Protection of Information</a></li>
            <li><a href="#payments" style={linkStyle}>Payments and Premium Features</a></li>
            <li><a href="#children" style={linkStyle}>Children&apos;s Privacy</a></li>
            <li><a href="#international-visitors" style={linkStyle}>International Visitors</a></li>
            <li><a href="#your-choices" style={linkStyle}>Your Privacy Choices</a></li>
            <li><a href="#changes" style={linkStyle}>Privacy Policy Changes</a></li>
            <li><a href="#contact" style={linkStyle}>Contact Information</a></li>
          </ol>
        </section>

        <h2 id="website-visitors" style={sectionTitleStyle}>1. Website Visitors</h2>
        <p>
          Like many website operators, Best Meeting Time may collect non-personally identifying
          information that browsers and servers typically make available. This may include browser
          type, device type, operating system, referring website, pages visited, date and time of
          access, general region, and similar technical information.
        </p>
        <p>
          We use this information to better understand how visitors use Best Meeting Time, which
          pages are helpful, where visitors may encounter issues, and how the website can be improved.
          This information helps us operate a better scheduling resource and improve the user
          experience across tools, guides, and articles.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="personally-identifying-information" style={sectionTitleStyle}>
          2. Personally Identifying Information
        </h2>
        <p>
          Certain visitors may choose to interact with Best Meeting Time in ways that require us to
          receive personally identifying information. For example, if you contact us by email or use a
          contact form, you may provide your name, email address, message content, and any other
          details you choose to include.
        </p>
        <p>
          Best Meeting Time does not require users to create an account to access the public meeting
          planner, guides, or blog content. We do not intentionally collect sensitive personal
          information through the public scheduling tool.
        </p>
        <p>
          Please do not submit passwords, financial details, confidential business information,
          private calendar details, or sensitive personal information through general contact forms or
          email messages.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="usage-data" style={sectionTitleStyle}>3. Usage Data and Aggregated Statistics</h2>
        <p>
          Best Meeting Time may collect statistics about visitor behavior on the website. This may
          include which pages are visited, how long visitors stay, which resources are used, and how
          visitors move through the site.
        </p>
        <p>
          We may use aggregated information to understand trends, improve website performance,
          identify popular scheduling topics, and make better decisions about future content. Aggregated
          information does not identify an individual visitor.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="cookies" style={sectionTitleStyle}>4. Cookies and Similar Technologies</h2>
        <p>
          Cookies are small files stored on a visitor&apos;s browser or device. Best Meeting Time may
          use cookies, local storage, pixels, tags, scripts, and similar technologies to support site
          functionality, analytics, advertising, security, and performance.
        </p>
        <p>Cookies and similar technologies may be used to:</p>
        <ul>
          <li>Operate website functionality and improve page performance.</li>
          <li>Measure traffic and understand visitor behavior.</li>
          <li>Support advertising and ad personalization.</li>
          <li>Help prevent spam, abuse, fraud, or technical misuse.</li>
          <li>Remember basic preferences where applicable.</li>
        </ul>
        <p>
          Visitors who do not want cookies placed on their devices can adjust browser settings to
          refuse cookies or alert them when cookies are being used. Some parts of the website may not
          function as intended if cookies are disabled.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="advertisements" style={sectionTitleStyle}>5. Advertisements and Google AdSense</h2>
        <p>
          Ads appearing on Best Meeting Time may be delivered by advertising partners, including
          Google AdSense or related Google advertising services. Advertising partners may use cookies
          or similar technologies to recognize a browser or device and deliver ads that may be more
          relevant to the visitor.
        </p>
        <p>
          Third-party vendors, including Google, may use cookies to serve ads based on a user&apos;s
          prior visits to Best Meeting Time or other websites. Google&apos;s use of advertising cookies
          enables Google and its partners to serve ads based on visits to this site and other sites on
          the Internet.
        </p>
        <p>
          Users may opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Google Ads Settings
          </a>
          .
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="google-remarketing" style={sectionTitleStyle}>
          6. Google Advertising and Remarketing
        </h2>
        <p>
          Best Meeting Time may use Google advertising services to show ads or measure advertising
          performance. These services may allow ads to appear on third-party websites to previous
          visitors of Best Meeting Time, depending on user settings and applicable advertising
          technologies.
        </p>
        <p>
          Third-party vendors, including Google, may use cookies to serve ads based on someone&apos;s
          past visits to this website. Any data collected by Google or other advertising providers is
          governed by their own privacy policies and advertising settings.
        </p>
        <p>
          You can learn more about how Google uses information from sites that use Google services by
          visiting{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Google&apos;s partner sites policy
          </a>
          .
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="analytics" style={sectionTitleStyle}>7. Analytics Services</h2>
        <p>
          Best Meeting Time may use analytics tools, including Google Analytics or similar services,
          to understand how visitors interact with the website. Analytics data may include pages
          visited, time on site, referral source, device type, browser type, approximate region, and
          similar usage information.
        </p>
        <p>
          This information is used to improve website performance, fix errors, identify helpful
          content, and better understand which scheduling resources visitors find useful.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="external-links" style={sectionTitleStyle}>8. Links to External Sites</h2>
        <p>
          Best Meeting Time may contain links to external websites, resources, services, or tools that
          are not operated by us. If you click a third-party link, you will be directed to that
          third-party site.
        </p>
        <p>
          We are not responsible for the content, accuracy, privacy policies, terms, security, or
          practices of third-party websites. We encourage visitors to review the privacy policy and
          terms of every external website they visit.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="protection" style={sectionTitleStyle}>9. Protection of Information</h2>
        <p>
          Best Meeting Time takes reasonable steps to protect information associated with the website
          from unauthorized access, misuse, alteration, or destruction. However, no method of
          transmission over the Internet and no method of electronic storage is completely secure.
        </p>
        <p>
          We do not sell personally identifying information. Information voluntarily submitted may be
          used to respond to requests, provide support, improve the website, or comply with legal or
          security obligations.
        </p>
        <p>
          We may disclose information when required by law, legal process, governmental request, or
          when we believe in good faith that disclosure is reasonably necessary to protect the rights,
          property, security, or safety of Best Meeting Time, visitors, or the public.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="payments" style={sectionTitleStyle}>10. Payments and Premium Features</h2>
        <p>
          Best Meeting Time may offer premium features, paid tools, or optional upgrades. If payments
          are offered, payment processing may be handled by third-party payment providers. Best
          Meeting Time does not store full credit card numbers or complete payment credentials on its
          own servers.
        </p>
        <p>
          Payment providers may collect billing information, transaction details, and other information
          necessary to process payments. Their use of information is governed by their own privacy
          policies and terms.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="children" style={sectionTitleStyle}>11. Children&apos;s Privacy</h2>
        <p>
          Best Meeting Time is intended for general audiences and business or productivity use. The
          website is not directed to children under the age of 13, and we do not knowingly collect
          personal information from children.
        </p>
        <p>
          If you believe a child has submitted personal information through this website, please
          contact us so we can review and remove the information where appropriate.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="international-visitors" style={sectionTitleStyle}>12. International Visitors</h2>
        <p>
          Best Meeting Time may be accessed by visitors from different countries. By using this
          website, you understand that information may be processed in the United States or other
          locations where service providers operate.
        </p>
        <p>
          Privacy rights may vary depending on your country, state, province, or region. Visitors are
          encouraged to review applicable local privacy rights and contact us with privacy-related
          questions.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="your-choices" style={sectionTitleStyle}>13. Your Privacy Choices</h2>
        <p>You may control certain privacy and advertising choices by:</p>
        <ul>
          <li>Changing cookie settings in your browser.</li>
          <li>Using browser privacy or tracking protection tools.</li>
          <li>Visiting Google Ads Settings to manage personalized advertising.</li>
          <li>Using Google Analytics opt-out tools where available.</li>
          <li>Contacting us with questions about information you voluntarily submitted.</li>
        </ul>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="changes" style={sectionTitleStyle}>14. Privacy Policy Changes</h2>
        <p>
          Best Meeting Time may update this Privacy Policy from time to time. Updates will be posted
          on this page with a revised effective date. Your continued use of the website after changes
          are posted means you accept the updated Privacy Policy.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="contact" style={sectionTitleStyle}>15. Contact Information</h2>
        <p>
          If you have questions about this Privacy Policy, cookies, analytics, advertising, or how Best
          Meeting Time handles privacy, you may contact us at:
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
