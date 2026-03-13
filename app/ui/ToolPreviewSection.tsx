"use client";

import { useState, useEffect } from "react";

type City = {
  name: string;
  time: string;
  tz: string;
};

type Window = {
  startUtc: string;
  endUtc: string;
};

const CITY_OPTIONS: City[] = [

  { name: "New York, USA", time: "", tz: "America/New_York" },
  { name: "Miami, USA", time: "", tz: "America/New_York" },
  { name: "Chicago, USA", time: "", tz: "America/Chicago" },
  { name: "Dallas, USA", time: "", tz: "America/Chicago" },
  { name: "Denver, USA", time: "", tz: "America/Denver" },
  { name: "Los Angeles, USA", time: "", tz: "America/Los_Angeles" },
  { name: "San Francisco, USA", time: "", tz: "America/Los_Angeles" },
  { name: "Seattle, USA", time: "", tz: "America/Los_Angeles" },

  { name: "Toronto, Canada", time: "", tz: "America/Toronto" },
  { name: "Vancouver, Canada", time: "", tz: "America/Vancouver" },

  { name: "São Paulo, Brazil", time: "", tz: "America/Sao_Paulo" },
  { name: "Buenos Aires, Argentina", time: "", tz: "America/Argentina/Buenos_Aires" },

  { name: "London, UK", time: "", tz: "Europe/London" },
  { name: "Paris, France", time: "", tz: "Europe/Paris" },
  { name: "Berlin, Germany", time: "", tz: "Europe/Berlin" },
  { name: "Madrid, Spain", time: "", tz: "Europe/Madrid" },
  { name: "Rome, Italy", time: "", tz: "Europe/Rome" },
  { name: "Amsterdam, Netherlands", time: "", tz: "Europe/Amsterdam" },
  { name: "Zurich, Switzerland", time: "", tz: "Europe/Zurich" },
  { name: "Stockholm, Sweden", time: "", tz: "Europe/Stockholm" },

  { name: "Dubai, UAE", time: "", tz: "Asia/Dubai" },
  { name: "Tel Aviv, Israel", time: "", tz: "Asia/Jerusalem" },
  { name: "Riyadh, Saudi Arabia", time: "", tz: "Asia/Riyadh" },

  { name: "Cape Town, South Africa", time: "", tz: "Africa/Johannesburg" },
  { name: "Nairobi, Kenya", time: "", tz: "Africa/Nairobi" },

  { name: "Mumbai, India", time: "", tz: "Asia/Kolkata" },
  { name: "Delhi, India", time: "", tz: "Asia/Kolkata" },

  { name: "Singapore", time: "", tz: "Asia/Singapore" },
  { name: "Hong Kong", time: "", tz: "Asia/Hong_Kong" },
  { name: "Shanghai, China", time: "", tz: "Asia/Shanghai" },
  { name: "Beijing, China", time: "", tz: "Asia/Shanghai" },
  { name: "Tokyo, Japan", time: "", tz: "Asia/Tokyo" },
  { name: "Seoul, South Korea", time: "", tz: "Asia/Seoul" },
  { name: "Bangkok, Thailand", time: "", tz: "Asia/Bangkok" },
  { name: "Jakarta, Indonesia", time: "", tz: "Asia/Jakarta" },

  { name: "Sydney, Australia", time: "", tz: "Australia/Sydney" },
  { name: "Melbourne, Australia", time: "", tz: "Australia/Melbourne" },
  { name: "Brisbane, Australia", time: "", tz: "Australia/Brisbane" },
  { name: "Perth, Australia", time: "", tz: "Australia/Perth" },
  { name: "Auckland, New Zealand", time: "", tz: "Pacific/Auckland" }

];

function getTimeZoneOffsetMinutes(date: Date, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const tzPart =
    parts.find((part) => part.type === "timeZoneName")?.value ?? "GMT+0";

  const match = tzPart.match(/GMT([+-])(\d{1,2})(?::?(\d{2}))?/);

  if (!match) return 0;

  const sign = match[1] === "-" ? -1 : 1;
  const hours = Number(match[2]);
  const minutes = Number(match[3] ?? "0");

  return sign * (hours * 60 + minutes);
}

function calculateOverlap(cityA: City, cityB: City): Window {

  const now = new Date();

  const offsetA = getTimeZoneOffsetMinutes(now, cityA.tz);
  const offsetB = getTimeZoneOffsetMinutes(now, cityB.tz);

  const workStart = 9 * 60;
  const workEnd = 17 * 60;

  const startA = workStart - offsetA;
  const endA = workEnd - offsetA;

  const startB = workStart - offsetB;
  const endB = workEnd - offsetB;

  let overlapStart = Math.max(startA, startB);
  let overlapEnd = Math.min(endA, endB);

  if (overlapStart >= overlapEnd) {
    overlapEnd = overlapStart + 120;
  }

  const base = new Date();
  base.setUTCHours(0, 0, 0, 0);

  const start = new Date(base.getTime() + overlapStart * 60000);
  const end = new Date(base.getTime() + overlapEnd * 60000);

  return {
    startUtc: start.toISOString(),
    endUtc: end.toISOString(),
  };
}

export default function ToolPreviewSection() {

  const [viewerTZ, setViewerTZ] = useState<string | null>(null);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setViewerTZ(tz);
  }, []);

  const [cityA, setCityA] = useState<City>(CITY_OPTIONS[0]);
  const [cityB, setCityB] = useState<City>(CITY_OPTIONS[1]);

  const meetingWindow = calculateOverlap(cityA, cityB);

  const startDate = new Date(meetingWindow.startUtc);
  const endDate = new Date(meetingWindow.endUtc);

  const startHour = startDate.getHours() + startDate.getMinutes() / 60;
  const endHour = endDate.getHours() + endDate.getMinutes() / 60;

  const startPercent = (startHour / 24) * 100;
  const widthPercent = ((endHour - startHour) / 24) * 100;

  const startLocal = startDate.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const endLocal = endDate.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  const labels = [
    { label: "12 AM", hour: 0 },
    { label: "2 AM", hour: 2 },
    { label: "4 AM", hour: 4 },
    { label: "6 AM", hour: 6 },
    { label: "8 AM", hour: 8 },
    { label: "10 AM", hour: 10 },
    { label: "12 PM", hour: 12 },
    { label: "2 PM", hour: 14 },
    { label: "4 PM", hour: 16 },
    { label: "6 PM", hour: 18 },
    { label: "8 PM", hour: 20 },
    { label: "10 PM", hour: 22 }
  ];

  const showInsideLabel = widthPercent > 12;

  return (

    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 40 }}>

      <h2>Tool Preview</h2>

      <p>
        A realistic preview of how comparing time zones will look — basic interaction enabled.
      </p>

      {viewerTZ && (
        <div style={{ marginBottom: 20, fontWeight: 600 }}>
          Your Time Zone: {viewerTZ}
        </div>
      )}

      <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>

        <select
          value={cityA.name}
          onChange={(e) => {
            const city = CITY_OPTIONS.find(c => c.name === e.target.value)!;
            setCityA(city);
          }}
        >
          {CITY_OPTIONS.map(city => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>

        <button onClick={() => {
          const temp = cityA;
          setCityA(cityB);
          setCityB(temp);
        }}>
          Swap
        </button>

        <select
          value={cityB.name}
          onChange={(e) => {
            const city = CITY_OPTIONS.find(c => c.name === e.target.value)!;
            setCityB(city);
          }}
        >
          {CITY_OPTIONS.map(city => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>

      </div>

      <div style={{ border: "1px solid #444", padding: 20, borderRadius: 10 }}>

        <div style={{ position: "relative", height: 20, marginBottom: 10 }}>

          {labels.map((l) => (
            <span
              key={l.hour}
              style={{
                position: "absolute",
                left: `${(l.hour / 24) * 100}%`,
                transform: "translateX(-50%)",
                fontSize: 13
              }}
            >
              {l.label}
            </span>
          ))}

        </div>

        <div style={{ position: "relative" }}>

          <div
            style={{
              height: 24,
              borderRadius: 12,
              background: "linear-gradient(90deg, #4c1d95, #6d28d9, #7c3aed)",
              position: "relative",
            }}
          >

            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${(i / 24) * 100}%`,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 1,
                  height: i % 2 === 0 ? 20 : 12,
                  background: "#ffffff66",
                  pointerEvents: "none"
                }}
              />
            ))}

            <div
              style={{
                position: "absolute",
                left: `${startPercent}%`,
                width: `${widthPercent}%`,
                height: "100%",
                background: "#22c55e",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                color: "#fff",
                fontSize: 12
              }}
            >
              {showInsideLabel && "Best Time"}
            </div>

          </div>

        </div>

        <div style={{ marginTop: 8, fontWeight: 600 }}>
          Best Meeting Window: <strong>{startLocal} – {endLocal}</strong>
        </div>

      </div>

    </div>
  );
}
