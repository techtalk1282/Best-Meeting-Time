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

  const year = Number(parts.find((p) => p.type === "year")?.value);
  const month = Number(parts.find((p) => p.type === "month")?.value);
  const day = Number(parts.find((p) => p.type === "day")?.value);

  return { year, month, day };
}

function zonedLocalToUtc(timeZone: string, hour: number, minute = 0): Date {
  const now = new Date();
  const { year, month, day } = getZonedDateParts(now, timeZone);

  const firstGuessUtc = Date.UTC(year, month - 1, day, hour, minute, 0);

  const firstOffset = getTimeZoneOffsetMinutes(
    new Date(firstGuessUtc),
    timeZone
  );

  const secondGuessUtc = firstGuessUtc - firstOffset * 60000;

  const secondOffset = getTimeZoneOffsetMinutes(
    new Date(secondGuessUtc),
    timeZone
  );

  return new Date(firstGuessUtc - secondOffset * 60000);
}

function calculateMeetingWindow(cityA: City, cityB: City): Window {
  const cityAMidUtc = zonedLocalToUtc(cityA.tz, 13).getTime();
  const cityBMidUtc = zonedLocalToUtc(cityB.tz, 13).getTime();

  const startMs = Math.round((cityAMidUtc + cityBMidUtc) / 2);
  const endMs = startMs + 3600000;

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
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setViewerTZ(tz);
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
    setCityA(cityB);
    setCityB(cityA);
  }

  async function createShareLink() {
    if (creatingShare) return;

    setCreatingShare(true);

    try {
      const res = await fetch("/api/share", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cities: [
            { name: cityA.name, tz: cityA.tz },
            { name: cityB.name, tz: cityB.tz },
          ],
          windows: [meetingWindow],
        }),
      });

      const data = await res.json();

      const fullUrl = `${window.location.origin}${data.url}`;

      setShareLink(fullUrl);
    } catch {
      setCopyMessage("Unable to create share link");
    } finally {
      setCreatingShare(false);
    }
  }

  async function copyLink() {
    if (!shareLink) return;

    await navigator.clipboard.writeText(shareLink);
    setCopyMessage("Link copied");
  }

  function openGoogleCalendar() {
    const start =
      new Date(meetingWindow.startUtc)
        .toISOString()
        .replace(/[-:]/g, "")
        .split(".")[0] + "Z";

    const end =
      new Date(meetingWindow.endUtc)
        .toISOString()
        .replace(/[-:]/g, "")
        .split(".")[0] + "Z";

    const text = encodeURIComponent(
      `Meeting: ${cityA.name} ↔ ${cityB.name}`
    );

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${text}` +
      `&dates=${start}/${end}`;

    window.open(url, "_blank");
  }

  function openOutlookCalendar() {
    const subject = encodeURIComponent(
      `Meeting: ${cityA.name} ↔ ${cityB.name}`
    );

    const url =
      `https://outlook.office.com/calendar/deeplink/compose?` +
      `subject=${subject}` +
      `&startdt=${meetingWindow.startUtc}` +
      `&enddt=${meetingWindow.endUtc}`;

    window.open(url, "_blank");
  }

  function downloadICS() {
    const start =
      new Date(meetingWindow.startUtc)
        .toISOString()
        .replace(/[-:]/g, "")
        .split(".")[0] + "Z";

    const end =
      new Date(meetingWindow.endUtc)
        .toISOString()
        .replace(/[-:]/g, "")
        .split(".")[0] + "Z";

    const url =
      `/api/calendar?cityA=${encodeURIComponent(cityA.name)}` +
      `&cityB=${encodeURIComponent(cityB.name)}` +
      `&start=${start}` +
      `&end=${end}`;

    window.open(url, "_blank");
  }

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 40 }}>
      <h2>Tool Preview</h2>

      {viewerTZ && (
        <div style={{ marginBottom: 20, fontWeight: 600 }}>
          Your Time Zone: {viewerTZ}
        </div>
      )}

      <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
        <select
          value={cityA.tz}
          onChange={(e) =>
            setCityA(
              CITY_OPTIONS.find((c) => c.tz === e.target.value)!
            )
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
            setCityB(
              CITY_OPTIONS.find((c) => c.tz === e.target.value)!
            )
          }
        >
          {CITY_OPTIONS.map((c) => (
            <option key={c.tz} value={c.tz}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ border: "1px solid #444", padding: 20, borderRadius: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>12 AM</span>
          <span>3 AM</span>
          <span>6 AM</span>
          <span>9 AM</span>
          <span>12 PM</span>
          <span>3 PM</span>
          <span>6 PM</span>
          <span>9 PM</span>
        </div>

        <div style={{ position: "relative", marginTop: 10 }}>
          <div
            style={{
              height: 24,
              borderRadius: 12,
              background:
                "linear-gradient(to right,#6d28d9,#22c55e,#f59e0b,#ec4899)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: `${markerPosition}%`,
              transform: "translateX(-50%)",
              top: -8,
              color: "white",
            }}
          >
            ▲
          </div>
        </div>

        <div style={{ marginTop: 10, fontWeight: 600 }}>
          Best Meeting Window: {startLocal} – {endLocal}
        </div>
      </div>
    </div>
  );
}
