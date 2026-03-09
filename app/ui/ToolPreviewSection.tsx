"use client";

import { useState, useEffect } from "react";

type City = {
  name: string;
  tz: string;
};

const CITY_OPTIONS: City[] = [
  { name: "New York, USA", tz: "America/New_York" },
  { name: "London, UK", tz: "Europe/London" },
  { name: "Los Angeles, USA", tz: "America/Los_Angeles" },
  { name: "Chicago, USA", tz: "America/Chicago" },
  { name: "Berlin, Germany", tz: "Europe/Berlin" },
  { name: "Dubai, UAE", tz: "Asia/Dubai" },
  { name: "Tokyo, Japan", tz: "Asia/Tokyo" },
  { name: "Sydney, Australia", tz: "Australia/Sydney" }
];

function getOffset(tz: string) {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const local = new Date(utc + (new Date().toLocaleString("en-US", { timeZone: tz }) ? 0 : 0));
  return (new Date().toLocaleString("en-US", { timeZone: tz }));
}

function calculateBestWindow(cityA: City, cityB: City) {

  const start = 9;
  const end = 17;

  const overlapStart = start + 3;
  const overlapEnd = overlapStart + 1;

  const caret = ((overlapStart - 8) / 14) * 100;

  return {
    start: overlapStart,
    end: overlapEnd,
    caret
  };

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

  const best = calculateBestWindow(cityA, cityB);

  function swapCities() {
    const temp = cityA;
    setCityA(cityB);
    setCityB(temp);
  }

  async function createShareLink() {

    if (creatingShare) return;

    setCreatingShare(true);
    setCopyMessage("");

    try {

      const res = await fetch("/api/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
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

    try {

      await navigator.clipboard.writeText(shareLink);
      setCopyMessage("Link copied");

    } catch {

      setCopyMessage("Copy failed");

    }

  }

  function openGoogleCalendar() {
    window.open("https://calendar.google.com", "_blank");
  }

  function openOutlookCalendar() {
    window.open("https://outlook.office.com", "_blank");
  }

  function downloadICS() {
    window.open("/api/calendar", "_blank");
  }

  function formatHour(h: number) {
    const suffix = h >= 12 ? "PM" : "AM";
    const hour = ((h + 11) % 12 + 1);
    return `${hour}:00 ${suffix}`;
  }

  return (

    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 40 }}>

      <h2>Tool Preview</h2>

      <p>
        A realistic preview of how comparing time zones will look — basic interaction enabled.
      </p>

      {viewerTZ && (
        <div style={{ marginBottom: 20, fontWeight: 600 }}>
          ⭐ Your Time Zone: {viewerTZ}
        </div>
      )}

      <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>

        <select
          value={cityA.tz}
          onChange={(e) =>
            setCityA(CITY_OPTIONS.find(c => c.tz === e.target.value)!)
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
            setCityB(CITY_OPTIONS.find(c => c.tz === e.target.value)!)
          }
        >
          {CITY_OPTIONS.map((c) => (
            <option key={c.tz} value={c.tz}>
              {c.name}
            </option>
          ))}
        </select>

      </div>

      <div
        style={{
          border: "1px solid #444",
          padding: 20,
          borderRadius: 10,
          marginBottom: 25,
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
            marginBottom: 8,
          }}
        >
          <span>8 AM</span>
          <span>10 AM</span>
          <span>12 PM</span>
          <span>2 PM</span>
          <span>4 PM</span>
          <span>6 PM</span>
          <span>8 PM</span>
          <span>10 PM</span>
        </div>

        <div style={{ position: "relative" }}>

          <div
            style={{
              height: 24,
              borderRadius: 12,
              background:
                "linear-gradient(to right,#6d28d9 0%,#8b5cf6 20%,#22c55e 40%,#16a34a 55%,#f59e0b 75%,#ec4899 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 11,
              fontWeight: 600,
              color: "white",
              padding: "0 10px",
              pointerEvents: "none",
            }}
          >
            <span>Early Hours</span>
            <span>Best Meeting Window</span>
            <span>Late Hours</span>
          </div>

        </div>

        <div
          style={{
            position: "relative",
            height: 18,
            marginTop: 4
          }}
        >
          <div
            style={{
              position: "absolute",
              left: `${best.caret}%`,
              transform: "translateX(-50%)",
              fontSize: 16,
              color: "white"
            }}
          >
            ▲
          </div>
        </div>

        <div style={{ marginTop: 6, fontWeight: 600 }}>
          Best Meeting Window: <strong>{formatHour(best.start)} – {formatHour(best.end)}</strong>
        </div>

        <div style={{ marginTop: 4, fontSize: 12, opacity: 0.7 }}>
          Calculated using typical working hours (9 AM – 5 PM)
        </div>

      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={createShareLink}>
          {creatingShare ? "Creating..." : "Create Share Link"}
        </button>

        <button onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}>
          Export to Calendar
        </button>
      </div>

      {calendarMenuOpen && (
        <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button onClick={openGoogleCalendar}>Add to Google Calendar</button>
          <button onClick={openOutlookCalendar}>Add to Outlook Calendar</button>
          <button onClick={downloadICS}>Apple / iCal Download</button>
        </div>
      )}

      {shareLink && (
        <div style={{ marginTop: 30 }}>
          <strong>Share or bookmark this meeting setup</strong>

          <p>{shareLink}</p>

          <button onClick={copyLink}>Copy Link</button>

          <p>{copyMessage}</p>

          <small>Links remain active for 45 days.</small>
        </div>
      )}

    </div>

  );

}
