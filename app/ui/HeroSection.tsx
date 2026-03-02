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
      </div>
    </section>
  );
}
