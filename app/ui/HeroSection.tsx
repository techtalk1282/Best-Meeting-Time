export default function HeroSection() {
  return (
    <section aria-label="Hero Section">
      <div>
        {/* Top Navigation Row */}
        <nav aria-label="Primary">
          <div>
            <span>Best Meeting Time</span>
          </div>

          <div>
            <span>Features</span>
            <span>Pricing</span>
            <span>Login</span>
          </div>

          <div>
            <button type="button">Get Started</button>
          </div>
        </nav>

        {/* Hero Headline Block */}
        <div>
          <h1>Find the Best Time to Meet</h1>
          <h2>Across Time Zones.</h2>
          <p>
            Easily schedule meetings with your team or clients around the world.
          </p>
        </div>

        {/* Hero Card Wrapper */}
        <div aria-label="Hero Comparison Card">
          {/* City Comparison Header Row */}
          <div aria-label="City Comparison Header">
            <div>
              <span>City A</span>
            </div>

            <div>
              <span>Swap</span>
            </div>

            <div>
              <span>City B</span>
            </div>
          </div>

          {/* Time Strip / Timeline Placeholder */}
          <div aria-label="Time Strip Placeholder">
            <p>Time strip placeholder</p>
          </div>

          {/* Action Row */}
          <div aria-label="Hero Action Row">
            <button type="button">Compare Times</button>
          </div>
        </div>
      </div>
    </section>
  );
}
