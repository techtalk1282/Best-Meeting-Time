export default function HeroSection() {
  return (
    <section
      aria-label="Hero Section"
      style={{ paddingTop: "var(--space-12)", paddingBottom: "var(--space-12)" }}
    >
      <div
        aria-label="Hero Container"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          paddingLeft: "var(--space-6)",
          paddingRight: "var(--space-6)",
        }}
      >
        {/* Top Navigation Row */}
        <nav
          aria-label="Primary Navigation"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "var(--space-12)",
          }}
        >
          <div aria-label="Nav Brand">
            <span style={{ fontSize: "var(--text-lg)", fontWeight: 600 }}>
              Best Meeting Time
            </span>
          </div>

          <div
            aria-label="Nav Links"
            style={{ display: "flex", gap: "var(--space-6)" }}
          >
            <span>Features</span>
            <span>Pricing</span>
            <span>Login</span>
          </div>

          <div aria-label="Nav Action">
            <button type="button">Get Started</button>
          </div>
        </nav>

        {/* Hero Main (2-column layout) */}
        <div
          aria-label="Hero Main"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-12)",
            alignItems: "start",
          }}
        >
          {/* Left Column */}
          <div aria-label="Hero Left">
            <div
              aria-label="Hero Headline"
              style={{ marginBottom: "var(--space-8)" }}
            >
              <h1>Find the Best Time to Meet</h1>
              <h2>Across Time Zones.</h2>
              <p style={{ fontSize: "var(--text-lg)", maxWidth: 520 }}>
                Easily schedule meetings with your team or clients around the
                world.
              </p>
            </div>

            <div
              aria-label="Hero Primary CTA"
              style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}
            >
              <button type="button">Compare Times</button>
              <p style={{ fontSize: "var(--text-sm)" }}>
                Helper text placeholder
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div aria-label="Hero Right">
            <div
              aria-label="Hero Demo Card"
              style={{
                padding: "var(--space-6)",
                borderRadius: "var(--radius-md)",
                border: "1px solid currentColor",
              }}
            >
              <p style={{ marginBottom: "var(--space-4)" }}>
                Demo preview (placeholder)
              </p>

              <div
                aria-label="Hero Card"
                style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}
              >
                <div
                  aria-label="City Comparison Row"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>City A</span>
                  <span>Swap</span>
                  <span>City B</span>
                </div>

                <p>Time strip placeholder</p>

                <button type="button">Compare Times</button>

                <p style={{ fontSize: "var(--text-sm)" }}>
                  Helper text placeholder
                </p>
              </div>

              <div
                aria-label="Demo Visual Placeholder"
                style={{
                  marginTop: "var(--space-6)",
                  height: 140,
                  border: "1px dashed currentColor",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span>Right-side visual placeholder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          aria-label="Hero Divider"
          style={{ marginTop: "var(--space-12)" }}
        >
          <hr />
        </div>
      </div>
    </section>
  );
}
