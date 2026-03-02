export default function HeroSection() {
  return (
    <section aria-label="Hero Section" style={{ padding: "40px 24px" }}>
      <div
        aria-label="Hero Container"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Top Navigation Row */}
        <nav
          aria-label="Primary Navigation"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "48px",
          }}
        >
          <div aria-label="Nav Brand">
            <span>Best Meeting Time</span>
          </div>

          <div aria-label="Nav Links">
            <span style={{ marginRight: "16px" }}>Features</span>
            <span style={{ marginRight: "16px" }}>Pricing</span>
            <span>Login</span>
          </div>

          <div aria-label="Nav Action">
            <button type="button">Get Started</button>
          </div>
        </nav>

        {/* Hero Headline Block */}
        <div aria-label="Hero Headline" style={{ marginBottom: "32px" }}>
          <h1>Find the Best Time to Meet</h1>
          <h2>Across Time Zones.</h2>
          <p>
            Easily schedule meetings with your team or clients around the world.
          </p>
        </div>

        {/* Hero Card */}
        <div
          aria-label="Hero Card"
          style={{ marginBottom: "24px" }}
        >
          <div aria-label="City Comparison Row" style={{ marginBottom: "12px" }}>
            <div>City A</div>
            <div>Swap</div>
            <div>City B</div>
          </div>

          <div aria-label="Time Strip Row" style={{ marginBottom: "12px" }}>
            <p>Time strip placeholder</p>
          </div>

          <div aria-label="Hero Actions" style={{ marginBottom: "8px" }}>
            <button type="button">Compare Times</button>
          </div>

          <div aria-label="Hero Helper">
            <p>Helper text placeholder</p>
          </div>
        </div>

        {/* Divider */}
        <hr />
      </div>
    </section>
  );
}
