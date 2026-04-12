"use client";

export default function ToolPreviewMobile(props: any) {
  const {
    cityA,
    cityB,
    setCityA,
    setCityB,
    CITY_OPTIONS,
    handlePlannerInteraction,
  } = props;

  const now = new Date();

  const cityATime = new Intl.DateTimeFormat("en-US", {
    timeZone: cityA.tz,
    hour: "numeric",
    minute: "2-digit",
  }).format(now);

  const cityBTime = new Intl.DateTimeFormat("en-US", {
    timeZone: cityB.tz,
    hour: "numeric",
    minute: "2-digit",
  }).format(now);

  const startHour = 9;
  const endHour = 17;

  const startPercent = (startHour / 24) * 100;
  const widthPercent = ((endHour - startHour) / 24) * 100;

  const ticks = Array.from({ length: 12 }, (_, i) => i * 2);

  function getFlag(city: string) {
    if (city.includes("USA")) return "us";
    return "un";
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "420px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* TIME DISPLAY WITH FLAGS */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {cityA.name}
            <img
              src={`https://flagcdn.com/w20/${getFlag(cityA.name)}.png`}
              style={{ width: 20 }}
            />
          </div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{cityATime}</div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "flex-end" }}>
            {cityB.name}
            <img
              src={`https://flagcdn.com/w20/${getFlag(cityB.name)}.png`}
              style={{ width: 20 }}
            />
          </div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{cityBTime}</div>
        </div>
      </div>

      {/* TIMELINE */}
      <div>
        <div
          style={{
            position: "relative",
            height: "32px",
            borderRadius: "999px",
            background: "linear-gradient(90deg, #5b21b6, #4c1d95)",
          }}
        >
          {ticks.map((hour) => (
            <div
              key={hour}
              style={{
                position: "absolute",
                left: `${(hour / 24) * 100}%`,
                top: 0,
                bottom: 0,
                width: "1px",
                background: "rgba(255,255,255,0.25)",
              }}
            />
          ))}

          {/* BEST TIME BAR */}
          <div
            style={{
              position: "absolute",
              left: `${startPercent}%`,
              width: `${widthPercent}%`,
              height: "100%",
              background: "#22c55e",
              borderRadius: "999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            Best Time
          </div>
        </div>
      </div>

      {/* CITY A */}
      <select value={cityA.name} onChange={(e) => {
        if (handlePlannerInteraction()) return;
        const city = CITY_OPTIONS.find((c: any) => c.name === e.target.value);
        if (city) setCityA(city);
      }}>
        {CITY_OPTIONS.map((c: any) => (
          <option key={c.name}>{c.name}</option>
        ))}
      </select>

      {/* SWAP */}
      <button
        onClick={() => {
          const temp = cityA;
          setCityA(cityB);
          setCityB(temp);
        }}
        style={{
          padding: "12px",
          fontWeight: 700,
          borderRadius: 10,
          color: "#fff",
          background: "#6d28d9",
        }}
      >
        SWAP
      </button>

      {/* CITY B */}
      <select value={cityB.name} onChange={(e) => {
        if (handlePlannerInteraction()) return;
        const city = CITY_OPTIONS.find((c: any) => c.name === e.target.value);
        if (city) setCityB(city);
      }}>
        {CITY_OPTIONS.map((c: any) => (
          <option key={c.name}>{c.name}</option>
        ))}
      </select>
    </div>
  );
}
