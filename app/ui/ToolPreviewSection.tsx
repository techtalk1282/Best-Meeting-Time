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
  { name: "New York, USA", time: "10:30 AM", tz: "America/New_York" },
  { name: "London, UK", time: "3:30 PM", tz: "Europe/London" },
  { name: "Los Angeles, USA", time: "7:30 AM", tz: "America/Los_Angeles" },
  { name: "Chicago, USA", time: "9:30 AM", tz: "America/Chicago" },
  { name: "Berlin, Germany", time: "4:30 PM", tz: "Europe/Berlin" },
  { name: "Dubai, UAE", time: "6:30 PM", tz: "Asia/Dubai" },
  { name: "Tokyo, Japan", time: "11:30 PM", tz: "Asia/Tokyo" },
  { name: "Sydney, Australia", time: "1:30 AM", tz: "Australia/Sydney" },
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

function getZonedDateParts(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);

  return { year, month, day };
}

function zonedLocalToUtc(timeZone: string, hour: number, minute = 0): Date {
  const now = new Date();
  const { year, month, day } = getZonedDateParts(now, timeZone);

  const firstGuessUtc = Date.UTC(year, month - 1, day, hour, minute, 0);
  const firstOffset = getTimeZoneOffsetMinutes(new Date(firstGuessUtc), timeZone);
  const secondGuessUtc = firstGuessUtc - firstOffset * 60 * 1000;
  const secondOffset = getTimeZoneOffsetMinutes(new Date(secondGuessUtc), timeZone);

  return new Date(firstGuessUtc - secondOffset * 60 * 1000);
}

function calculateMeetingWindow(cityA: City, cityB: City): Window {
  const cityAMidUtc = zonedLocalToUtc(cityA.tz, 13, 0).getTime();
  const cityBMidUtc = zonedLocalToUtc(cityB.tz, 13, 0).getTime();

  const startMs = Math.round((cityAMidUtc + cityBMidUtc) / 2);
  const endMs = startMs + 60 * 60 * 1000;

  return {
    startUtc: new Date(startMs).toISOString(),
    endUtc: new Date(endMs).toISOString(),
  };
}

function formatLocalWindow(iso: string) {
  return new Date(iso).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

function getMarkerPosition(iso: string) {
  const date = new Date(iso);
  const hourDecimal = date.getHours() + date.getMinutes() / 60;

  const timelineStart = 0;
  const timelineEnd = 22;

  const clampedHour = Math.max(timelineStart, Math.min(hourDecimal, timelineEnd));
  return ((clampedHour - timelineStart) / (timelineEnd - timelineStart)) * 100;
}

export default function ToolPreviewSection() {
  const [viewerTZ, setViewerTZ] = useState<string | null>(null);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setViewerTZ(tz);
  }, []);

  const [cityA, setCityA] = useState<City>(CITY_OPTIONS[0]);
  const [cityB, setCityB] = useState<City>(CITY_OPTIONS[1]);

  const meetingWindow = calculateMeetingWindow(cityA, cityB);
  const markerPosition = getMarkerPosition(
    new Date(
      (new Date(meetingWindow.startUtc).getTime() +
        new Date(meetingWindow.endUtc).getTime()) /
        2
    ).toISOString()
  );

  const startLocal = formatLocalWindow(meetingWindow.startUtc);
  const endLocal = formatLocalWindow(meetingWindow.endUtc);

  function swapCities() {
    const temp = cityA;
    setCityA(cityB);
    setCityB(temp);
  }

  return (
    <div style={{ width: "100%" }}>

      {viewerTZ && (
        <div style={{ marginBottom: 16, fontWeight: 600 }}>
          Your Time Zone: {viewerTZ}
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>

        <select
          value={cityA.tz}
          onChange={(e) =>
            setCityA(CITY_OPTIONS.find((c) => c.tz === e.target.value)!)
          }
        >
          {CITY_OPTIONS.map((c) => (
            <option key={c.tz} value={c.tz}>
              {c.name}
            </option>
          ))}
        </select>

        <button onClick={swapCities}>Swap</button>

        <select
          value={cityB.tz}
          onChange={(e) =>
            setCityB(CITY_OPTIONS.find((c) => c.tz === e.target.value)!)
          }
        >
          {CITY_OPTIONS.map((c) => (
            <option key={c.tz} value={c.tz}>
              {c.name}
            </option>
          ))}
        </select>

      </div>

      <div style={{ border: "1px solid #444", borderRadius: 10, padding: 20 }}>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          marginBottom: 8
        }}>
          {["12 AM","2 AM","4 AM","6 AM","8 AM","10 AM","12 PM","2 PM","4 PM","6 PM","8 PM","10 PM"].map((t)=>(
            <span key={t}>{t}</span>
          ))}
        </div>

        <div style={{ position: "relative" }}>

          <div style={{
            height: 28,
            borderRadius: 12,
            background: "#5b21b6"
          }}/>

          <div style={{
            position:"absolute",
            left:"30%",
            width:"40%",
            height:28,
            borderRadius:12,
            background:"#22c55e"
          }}/>

          <div style={{
            position:"absolute",
            left:`${markerPosition}%`,
            transform:"translateX(-50%)",
            top:32
          }}>
            ▲
          </div>

        </div>

        <div style={{ marginTop: 10, fontWeight: 600 }}>
          Best Meeting Window: <strong>{startLocal} – {endLocal}</strong>
        </div>

      </div>

    </div>
  );
}
