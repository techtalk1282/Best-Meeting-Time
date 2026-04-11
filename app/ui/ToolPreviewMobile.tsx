/**
 * File: app/ui/ToolPreviewMobile.tsx
 * Version: v1.1
 * Date: 2026-04-11
 *
 * Purpose:
 * - Mobile layout with timeline + time display
 *
 * Rollback:
 * - v1.0 = selectors only
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

    // NEW (from parent — already exists there)
    meetingWindow,
    cityATime,
    cityBTime,
    cityATZ,
    cityBTZ,
    startLocal,
    endLocal,
    startPercent,
    widthPercent,
  } = props;

  const labels = [
    { label: "12 AM", hour: 0 },
    { label: "6 AM", hour: 6 },
    { label: "12 PM", hour: 12 },
    { label: "6 PM", hour: 18 },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

      {/* TIME DISPLAY */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontWeight: 600 }}>{cityA.name}</div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>
            {cityATime} {cityATZ}
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div style={{ fontWeight: 600 }}>{cityB.name}</div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>
            {cityBTime} {cityBTZ}
          </div>
        </div>
      </div>

      {/* SELECTORS */}
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

      {/* TIMELINE */}
      <div style={{ marginTop: 10 }}>

        {/* Labels */}
        <div style={{ position: "relative", height: 20 }}>
          {labels.map((l) => (
            <span
              key={l.hour}
              style={{
                position: "absolute",
                left: `${(l.hour / 24) * 100}%`,
                transform: "translateX(-50%)",
                fontSize: 12,
              }}
            >
              {l.label}
            </span>
          ))}
        </div>

        {/* Bar */}
        <div
          style={{
            height: 28,
            borderRadius: 10,
            background: "linear-gradient(90deg,#4c1d95,#6d28d9)",
            position: "relative",
            marginTop: 6,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: `${startPercent}%`,
              width: `${widthPercent}%`,
              height: "100%",
              background: "#22c55e",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Best
          </div>
        </div>

        {/* Window */}
        <div style={{ marginTop: 10, fontWeight: 600 }}>
          {startLocal} – {endLocal}
        </div>

      </div>

    </div>
  );
}
