/**
 * File: app/ui/ToolPreviewMobile.tsx
 * Version: v1.0
 * Date: 2026-04-11
 *
 * Purpose:
 * - Dedicated mobile layout for ToolPreviewSection
 * - Fully isolated from desktop + city layouts
 * - Prevents cross-breaking UI issues
 *
 * Notes:
 * - Layout ONLY (no logic changes)
 * - Logic will be passed from parent
 * - Safe foundation for mobile-specific design
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

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      
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
