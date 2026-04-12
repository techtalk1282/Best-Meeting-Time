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

  return (
    <div
      style={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "420px",
        padding: "0 12px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* TIME DISPLAY */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontWeight: 600 }}>{cityA.name}</div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{cityATime}</div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div style={{ fontWeight: 600 }}>{cityB.name}</div>
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
            overflow: "hidden",
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

          <div
            style={{
              position: "absolute",
              left: `${startPercent}%`,
              width: `${widthPercent}%`,
              height: "100%",
              background: "linear-gradient(90deg, #34d399, #22c55e, #16a34a)",
              borderRadius: "999px",
              boxShadow: "0 4px 20px rgba(34,197,94,0.9)",
            }}
          />
        </div>
      </div>

      {/* CITY A */}
      <select
        style={{ width: "100%" }}
        value={cityA.name}
        onChange={(e) => {
          if (handlePlannerInteraction()) return;
          const city = CITY_OPTIONS.find((c: any) => c.name === e.target.value);
          if (city) setCityA(city);
        }}
      >
        {CITY_OPTIONS.map((c: any) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
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
          width: "100%",
          padding: "12px",
          fontWeight: 700,
          borderRadius: 10,
          cursor: "pointer",
          color: "#fff",
          background: "#6d28d9",
          border: "1px solid #6d28d9",
        }}
      >
        SWAP
      </button>

      {/* CITY B */}
      <select
        style={{ width: "100%" }}
        value={cityB.name}
        onChange={(e) => {
          if (handlePlannerInteraction()) return;
          const city = CITY_OPTIONS.find((c: any) => c.name === e.target.value);
          if (city) setCityB(city);
        }}
      >
        {CITY_OPTIONS.map((c: any) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
