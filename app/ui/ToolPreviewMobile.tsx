/**
 * File: app/ui/ToolPreviewMobile.tsx
 * Version: v2.0
 * Date: 2026-04-11
 *
 * Purpose:
 * - Mobile timeline now matches desktop visual system
 * - Fixes visibility issues across all screen sizes
 * - Adds structure (track + ticks + strong contrast)
 *
 * Strategy:
 * - Replace weak gray bar with purple timeline
 * - Add tick system for readability
 * - Keep logic simple and safe
 */

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

  // ✅ SAFE STATIC WINDOW (placeholder until real logic sync)
  const startHour = 9;
  const endHour = 17;

  const startPercent = (startHour / 24) * 100;
  const widthPercent = ((endHour - startHour) / 24) * 100;

  // ✅ SIMPLE TICKS (every 2 hours)
  const ticks = Array.from({ length: 12 }, (_, i) => i * 2);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

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
      <div style={{ marginTop: "12px" }}>

        {/* TRACK */}
        <div
          style={{
            position: "relative",
            height: "32px",
            borderRadius: "999px",
            background: "linear-gradient(90deg, #5b21b6, #4c1d95)",
            overflow: "hidden",
          }}
        >

          {/* TICKS */}
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

          {/* BEST TIME WINDOW */}
          <div
            style={{
              position: "absolute",
              left: `${startPercent}%`,
              width: `${widthPercent}%`,
              height: "100%",
              background: "linear-gradient(90deg, #22c55e, #16a34a)",
              borderRadius: "999px",
              boxShadow: "0 0 16px rgba(34,197,94,1)",
            }}
          />
        </div>
      </div>

      {/* City A */}
      <select
        style={{ width: "100%" }}
        value={cityA.name}
        onChange={(e) => {
          if (handlePlannerInteraction()) return;
          const city = CITY_OPTIONS.find((c: any) => c.name === e.target.value);
          setCityA(city);
        }}
      >
        {CITY_OPTIONS.map((c: any) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      {/* Swap */}
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

      {/* City B */}
      <select
        style={{ width: "100%" }}
        value={cityB.name}
        onChange={(e) => {
          if (handlePlannerInteraction()) return;
          const city = CITY_OPTIONS.find((c: any) => c.name === e.target.value);
          setCityB(city);
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
