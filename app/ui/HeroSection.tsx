export default function HeroSection() {
  return (
    <section aria-label="Hero Section">
      <div aria-label="Hero Container">
        {/* Top Navigation Row */}
        <nav aria-label="Primary Navigation">
          <div aria-label="Nav Brand">
            <span>Best Meeting Time</span>
          </div>

          <div aria-label="Nav Links">
            <span>Features</span>
            <span>Pricing</span>
            <span>Login</span>
          </div>

          <div aria-label="Nav Action">
            <button type="button">Get Started</button>
          </div>
        </nav>

        {/* Hero Main (2-column layout) */}
        <div aria-label="Hero Main" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* Left Column: Copy + Primary CTA */}
          <div aria-label="Hero Left">
            {/* Hero Headline Block */}
            <div aria-label="Hero Headline">
              <h1>Find the Best Time to Meet</h1>
              <h2>Across Time Zones.</h2>
              <p>
                Easily schedule meetings with your team or clients around the world.
              </p>
            </div>

            {/* Primary CTA Row (visual priority) */}
            <div aria-label="Hero Primary CTA" style={{ marginTop: 16 }}>
              <button type="button">Compare Times</button>
              <div aria-label="Hero Helper" style={{ marginTop: 8 }}>
                <p>Helper text placeholder</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual / Demo Card */}
          <div aria-label="Hero Right">
            <div aria-label="Hero Demo Card">
              {/* Demo Header */}
              <div aria-label="Demo Header">
                <p>Demo preview (placeholder)</p>
              </div>

              {/* Hero Card (tool preview scaffold) */}
              <div aria-label="Hero Card">
                {/* City Comparison Row */}
                <div aria-label="City Comparison Row">
                  <div aria-label="City Left">
                    <span>City A</span>
                  </div>

                  <div aria-label="City Swap">
                    <span>Swap</span>
                  </div>

                  <div aria-label="City Right">
                    <span>City B</span>
                  </div>
                </div>

                {/* Time Strip */}
                <div aria-label="Time Strip Row">
                  <p>Time strip placeholder</p>
                </div>

                {/* Action Row (kept inside card for future wiring) */}
                <div aria-label="Hero Actions">
                  <button type="button">Compare Times</button>
                </div>

                {/* Helper Text (kept for future locked/premium messaging) */}
                <div aria-label="Hero Helper">
                  <p>Helper text placeholder</p>
                </div>
              </div>

              {/* Visual Block Placeholder (for later polish / screenshot-like UI) */}
              <div
                aria-label="Demo Visual Placeholder"
                style={{
                  marginTop: 16,
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
        <div aria-label="Hero Divider" style={{ marginTop: 24 }}>
          <hr />
        </div>
      </div>
    </section>
  );
}
