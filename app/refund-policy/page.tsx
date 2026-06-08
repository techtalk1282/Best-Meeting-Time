/**
 * File: app/refund-policy/page.tsx
 * Version: v1.0 (PUBLISHER-STYLE REFUND + BILLING POLICY)
 * Purpose:
 * - Add a complete refund, billing, premium access, and support policy page
 * - Strengthen trust signals for a paid digital scheduling tool
 * - Clarify one-time purchases, Stripe processing, technical access issues, and refund review standards
 *
 * Rollback:
 * - Remove /refund-policy route if this page does not test cleanly
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

export default function RefundPolicy() {
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
          Effective Date: June 8, 2026
        </p>

        <h1 style={{ fontSize: "40px", fontWeight: 900, marginBottom: "18px" }}>
          Refund Policy
        </h1>

        <h2 style={{ fontSize: "24px", fontWeight: 900, marginTop: "0" }}>
          Refunds, billing, and premium access
        </h2>

        <p>
          Best Meeting Time may offer paid digital features, premium scheduling tools, or optional
          upgrades. This Refund Policy explains how purchases are handled, when refund requests may
          be reviewed, how premium access issues should be reported, and how billing support works.
        </p>

        <p>
          This policy should be read together with our{" "}
          <Link href="/terms-of-service" style={linkStyle}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" style={linkStyle}>
            Privacy Policy
          </Link>
          .
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
          <ol style={{ display: "grid", gap: "8px", paddingLeft: "22px" }}>
            <li><a href="#digital-products" style={linkStyle}>Digital Products and Premium Features</a></li>
            <li><a href="#one-time-payments" style={linkStyle}>One-Time Payments</a></li>
            <li><a href="#refund-window" style={linkStyle}>Refund Request Window</a></li>
            <li><a href="#eligible-refunds" style={linkStyle}>Eligible Refund Situations</a></li>
            <li><a href="#non-refundable" style={linkStyle}>Situations That May Not Qualify</a></li>
            <li><a href="#technical-access" style={linkStyle}>Technical Access Issues</a></li>
            <li><a href="#duplicate-purchases" style={linkStyle}>Duplicate Purchases</a></li>
            <li><a href="#stripe" style={linkStyle}>Payment Processing</a></li>
            <li><a href="#request-refund" style={linkStyle}>How To Request a Refund</a></li>
            <li><a href="#processing-time" style={linkStyle}>Processing Time</a></li>
            <li><a href="#chargebacks" style={linkStyle}>Chargebacks and Payment Disputes</a></li>
            <li><a href="#policy-changes" style={linkStyle}>Policy Changes</a></li>
            <li><a href="#contact" style={linkStyle}>Contact Information</a></li>
          </ol>
        </section>

        <h2 id="digital-products" style={sectionTitleStyle}>1. Digital Products and Premium Features</h2>
        <p>
          Best Meeting Time provides digital scheduling tools, time-zone comparison resources, and
          optional premium functionality. Because these products are delivered digitally, access may
          be granted immediately after a successful payment.
        </p>
        <p>
          Premium features may include scheduling enhancements, sharing tools, calendar-related
          options, or other paid functionality made available through the website.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="one-time-payments" style={sectionTitleStyle}>2. One-Time Payments</h2>
        <p>
          Unless clearly stated otherwise at checkout, Best Meeting Time premium purchases are
          intended to be one-time payments. We do not intend to charge recurring subscription fees
          unless a recurring plan is clearly disclosed before purchase.
        </p>
        <p>
          The checkout page or payment screen should be reviewed carefully before completing a
          purchase.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="refund-window" style={sectionTitleStyle}>3. Refund Request Window</h2>
        <p>
          Refund requests should generally be submitted within 14 days of the original purchase date.
          Requests submitted after this period may still be reviewed, but approval is not guaranteed.
        </p>
        <p>
          The purpose of this window is to allow users reasonable time to report technical problems,
          duplicate purchases, or access issues after payment.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="eligible-refunds" style={sectionTitleStyle}>4. Eligible Refund Situations</h2>
        <p>Refunds may be considered when:</p>
        <ul>
          <li>A successful payment was made but premium access was not delivered.</li>
          <li>A technical issue prevented use of the paid feature after purchase.</li>
          <li>A duplicate charge or duplicate purchase occurred by mistake.</li>
          <li>The wrong payment was processed due to a clear checkout or technical error.</li>
          <li>Best Meeting Time is unable to provide the purchased digital access after review.</li>
        </ul>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="non-refundable" style={sectionTitleStyle}>5. Situations That May Not Qualify</h2>
        <p>Refunds may not be provided for:</p>
        <ul>
          <li>Change of mind after premium access was successfully delivered.</li>
          <li>Failure to use the paid feature after purchase.</li>
          <li>Accidental purchases where access was delivered and used.</li>
          <li>Issues caused by unsupported browsers, disabled cookies, or local device problems.</li>
          <li>Requests that cannot be matched to a valid transaction.</li>
        </ul>
        <p>
          Each request is reviewed individually based on the available payment record, access status,
          technical information, and user-provided details.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="technical-access" style={sectionTitleStyle}>6. Technical Access Issues</h2>
        <p>
          If you purchased a premium feature and cannot access it, please contact us before filing a
          payment dispute. Many access issues can be resolved by confirming the payment, refreshing
          the browser, checking the checkout session, or reviewing the premium unlock status.
        </p>
        <p>
          When contacting support, include the email address used during checkout, the approximate
          purchase date, the issue you experienced, and any screenshot or error message that may help
          us investigate.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="duplicate-purchases" style={sectionTitleStyle}>7. Duplicate Purchases</h2>
        <p>
          If you believe you were charged more than once for the same premium access, contact us with
          the relevant transaction details. Duplicate purchases may be eligible for refund after the
          transactions are verified.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="stripe" style={sectionTitleStyle}>8. Payment Processing</h2>
        <p>
          Payments may be processed by Stripe or another third-party payment provider. Best Meeting
          Time does not store full credit card numbers or complete payment credentials on its own
          servers.
        </p>
        <p>
          Payment processors may have their own processing rules, timelines, fraud checks, bank
          review steps, and payment method requirements.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="request-refund" style={sectionTitleStyle}>9. How To Request a Refund</h2>
        <p>
          To request a refund review, email us at:
        </p>
        <p style={{ fontWeight: 900 }}>support@bestmeetingtimeapp.com</p>
        <p>Please include:</p>
        <ul>
          <li>The email address used for the purchase.</li>
          <li>The approximate purchase date.</li>
          <li>A short explanation of the issue.</li>
          <li>Any screenshot, error message, or payment confirmation available.</li>
        </ul>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="processing-time" style={sectionTitleStyle}>10. Processing Time</h2>
        <p>
          Refund requests are typically reviewed within 3 to 7 business days after we receive enough
          information to identify the transaction and evaluate the issue.
        </p>
        <p>
          If a refund is approved, the time it takes for funds to appear depends on the payment
          processor, card issuer, bank, and payment method.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="chargebacks" style={sectionTitleStyle}>11. Chargebacks and Payment Disputes</h2>
        <p>
          If you experience an issue, please contact Best Meeting Time support first so we can review
          and attempt to resolve it. Filing a chargeback or payment dispute may delay resolution
          because the matter may need to be handled through the payment processor or financial
          institution.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="policy-changes" style={sectionTitleStyle}>12. Policy Changes</h2>
        <p>
          Best Meeting Time may update this Refund Policy from time to time. Updates will be posted
          on this page with a revised effective date. Your continued use of the website after changes
          are posted means you accept the updated policy.
        </p>
        <a href="#contents" style={backLinkStyle}>Back to table of contents</a>

        <h2 id="contact" style={sectionTitleStyle}>13. Contact Information</h2>
        <p>
          For refund, billing, premium access, or payment-related questions, contact:
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
        </div>
      </footer>
    </main>
  );
}
