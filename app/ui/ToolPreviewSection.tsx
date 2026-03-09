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

function calculateOverlap(cityA: City, cityB: City): Window {

  const now = new Date();
  const dateStr = now.toISOString().split("T")[0];

  const aStart = new Date(`${dateStr}T09:00:00`);
  const aEnd = new Date(`${dateStr}T17:00:00`);

  const bStart = new Date(`${dateStr}T09:00:00`);
  const bEnd = new Date(`${dateStr}T17:00:00`);

  const start = new Date(Math.max(aStart.getTime(), bStart.getTime()));
  const end = new Date(Math.min(aEnd.getTime(), bEnd.getTime()));

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

  const [creatingShare, setCreatingShare] = useState(false);
  const [shareLink, setShareLink] = useState<string | null>(null);
  const [copyMessage, setCopyMessage] = useState("");
  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);

  const meetingWindow = calculateOverlap(cityA, cityB);

  const markerPosition = 50;

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
        headers: { "Content-Type": "application/json" },
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

    try {

      await navigator.clipboard.writeText(shareLink);
      setCopyMessage("Link copied");

    } catch {

      setCopyMessage("Copy failed");

    }

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

    const text = encodeURIComponent(`Meeting: ${cityA.name} ↔ ${cityB.name}`);

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${text}` +
      `&dates=${start}/${end}`;

    window.open(url, "_blank");

  }

  function openOutlookCalendar() {

    const start = meetingWindow.startUtc;
    const end = meetingWindow.endUtc;

    const subject = encodeURIComponent(`Meeting: ${cityA.name} ↔ ${cityB.name}`);

    const url =
      `https://outlook.office.com/calendar/deeplink/compose?` +
      `subject=${subject}` +
      `&startdt=${start}` +
      `&enddt=${end}`;

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

      <div style={{ border: "1px solid #444", padding: 20, borderRadius: 10, marginBottom: 25 }}>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 8 }}>
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

        </div>

        <div style={{ position: "relative", height: 18, marginTop: 4 }}>
          <div
            style={{
              position: "absolute",
              left: `${markerPosition}%`,
              transform: "translateX(-50%)",
              fontSize: 16,
              color: "white"
            }}
          >
            ▲
          </div>
        </div>

        <div style={{ marginTop: 6, fontWeight: 600 }}>
          Best Meeting Window: <strong>2:00 PM – 3:00 PM</strong>
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
        <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
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
