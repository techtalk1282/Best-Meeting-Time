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
  { name: "Sydney, Australia", time: "1:30 AM", tz: "Australia/Sydney" }
];

function getTimeZoneOffsetMinutes(date: Date, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const tzPart = parts.find((part) => part.type === "timeZoneName")?.value ?? "GMT+0";
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
  const localHour = date.getHours() + date.getMinutes() / 60;
  return (localHour / 24) * 100;
}

export default function ToolPreviewSection() {

  const [viewerTZ, setViewerTZ] = useState<string | null>(null);

  useEffect(() => {
    setViewerTZ(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  const [cityA, setCityA] = useState(CITY_OPTIONS[0]);
  const [cityB, setCityB] = useState(CITY_OPTIONS[1]);

  const [creatingShare, setCreatingShare] = useState(false);
  const [shareLink, setShareLink] = useState<string | null>(null);
  const [copyMessage, setCopyMessage] = useState("");
  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);

  const meetingWindow = calculateMeetingWindow(cityA, cityB);
  const markerPosition = getMarkerPosition(meetingWindow.startUtc);

  const startLocal = formatLocalWindow(meetingWindow.startUtc);
  const endLocal = formatLocalWindow(meetingWindow.endUtc);

  function swapCities() {
    const temp = cityA;
    setCityA(cityB);
    setCityB(temp);
  }

  return (
    <div style={{maxWidth:1400, margin:"0 auto", padding:"40px"}}>

      <h2>Tool Preview</h2>

      {viewerTZ && (
        <div style={{marginBottom:20,fontWeight:600}}>
          Your Time Zone: {viewerTZ}
        </div>
      )}

      <div style={{display:"flex",gap:20,marginBottom:40}}>
        <select
          value={cityA.tz}
          onChange={(e)=>setCityA(CITY_OPTIONS.find(c=>c.tz===e.target.value)!)}
        >
          {CITY_OPTIONS.map(c=>(
            <option key={c.tz} value={c.tz}>{c.name}</option>
          ))}
        </select>

        <button onClick={swapCities}>Swap</button>

        <select
          value={cityB.tz}
          onChange={(e)=>setCityB(CITY_OPTIONS.find(c=>c.tz===e.target.value)!)}
        >
          {CITY_OPTIONS.map(c=>(
            <option key={c.tz} value={c.tz}>{c.name}</option>
          ))}
        </select>
      </div>

      {/* TIMELINE */}

      <div style={{width:"100%",marginBottom:30}}>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(12,1fr)",
            textAlign:"center",
            marginBottom:8,
            fontWeight:600
          }}
        >
          <span>12 AM</span>
          <span>2 AM</span>
          <span>4 AM</span>
          <span>6 AM</span>
          <span>8 AM</span>
          <span>10 AM</span>
          <span>12 PM</span>
          <span>2 PM</span>
          <span>4 PM</span>
          <span>6 PM</span>
          <span>8 PM</span>
          <span>10 PM</span>
        </div>

        <div style={{position:"relative"}}>

          <div
            style={{
              height:36,
              borderRadius:18,
              background:
                "linear-gradient(to right,#6d28d9 0%,#8b5cf6 30%,#22c55e 45%,#16a34a 55%,#f59e0b 75%,#ec4899 100%)"
            }}
          />

          <div
            style={{
              position:"absolute",
              width:"100%",
              height:"100%",
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center",
              color:"white",
              fontWeight:700,
              padding:"0 20px"
            }}
          >
            <span>Early Hours</span>
            <span>Best Meeting Window</span>
            <span>Late Hours</span>
          </div>

        </div>

        <div style={{position:"relative",height:30}}>

          <div
            style={{
              position:"absolute",
              left:`${markerPosition}%`,
              transform:"translateX(-50%)",
              fontSize:22
            }}
          >
            ▲
          </div>

        </div>

        <div style={{fontWeight:700,fontSize:18}}>
          Best Meeting Window: {startLocal} – {endLocal}
        </div>

      </div>

    </div>
  );
}
