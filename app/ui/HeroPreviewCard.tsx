export default function HeroPreviewCard() {
  return (
    <div className="hero-preview-card">

      <div className="hero-preview-cities">

        <div className="hero-city">
          <span className="flag">🇺🇸</span>
          <div>
            <div className="city-name">New York, USA</div>
            <div className="city-time">10:30 AM</div>
            <div className="city-zone">UTC-4</div>
          </div>
        </div>

        <div className="swap-circle">
          ↔
        </div>

        <div className="hero-city">
          <span className="flag">🇬🇧</span>
          <div>
            <div className="city-name">London, UK</div>
            <div className="city-time">3:30 PM</div>
            <div className="city-zone">UTC+1</div>
          </div>
        </div>

      </div>

      <div className="hero-preview-timeline">
        <div className="timeline-bar">
          <div className="best-window"></div>
        </div>
      </div>

      <div className="hero-preview-result">
        Best Meeting Window: 2:00 PM – 3:00 PM
      </div>

    </div>
  );
}
