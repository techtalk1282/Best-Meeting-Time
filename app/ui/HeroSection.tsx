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

        {/* Hero Headline Block */}
        <div aria-label="Hero Headline">
          <h1>Find the Best Time to Meet</h1>
          <h2>Across Time Zones.</h2>
          <p>
            Easily schedule meetings with your team or clients around the world.
          </p>
        </div>

        {/* Hero Card */}
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

          {/* Action Row */}
          <div aria-label="Hero Actions">
            <button type="button">Compare Times</button>
          </div>

          {/* Helper Text */}
          <div aria-label="Hero Helper">
            <p>Helper text placeholder</p>
          </div>
        </div>

        {/* Divider */}
        <div aria-label="Hero Divider">
          <hr />
        </div>
      </div>
    </section>
  );
}
