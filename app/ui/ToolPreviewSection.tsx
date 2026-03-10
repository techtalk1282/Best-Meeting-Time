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

  function swapCities() {
    const temp = cityA;
    setCityA(cityB);
    setCityB(temp);
  }

  function formatLocal(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  }

  const startLocal = formatLocal(meetingWindow.startUtc);
  const endLocal = formatLocal(meetingWindow.endUtc);

  const startHour = new Date(meetingWindow.startUtc).getHours();
  const endHour = new Date(meetingWindow.endUtc).getHours();

  const timelineStart = 0;
  const timelineEnd = 22;

  const startPercent =
    ((startHour - timelineStart) / (timelineEnd - timelineStart)) * 100;

  const widthPercent =
    ((endHour - startHour) / (timelineEnd - timelineStart)) * 100;

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

      if (!res.ok) throw new Error("Share creation failed");

      const data = await res.json();
      const fullUrl = `${window.location.origin}${data.url}`;

      setShareLink(fullUrl);

    } catch (err) {

      console.error("share_link_error", err);
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

    const details = encodeURIComponent(
      `Suggested meeting window between ${cityA.name} and ${cityB.name}`
    );

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${text}` +
      `&dates=${start}/${end}` +
      `&details=${details}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function openOutlookCalendar() {

    const start = meetingWindow.startUtc;
    const end = meetingWindow.endUtc;

    const subject = encodeURIComponent(`Meeting: ${cityA.name} ↔ ${cityB.name}`);

    const body = encodeURIComponent(
      `Suggested meeting window between ${cityA.name} and ${cityB.name}`
    );

    const url =
      `https://outlook.office.com/calendar/deeplink/compose?` +
      `subject=${subject}` +
      `&startdt=${start}` +
      `&enddt=${end}` +
      `&body=${body}`;

    window.open(url, "_blank", "noopener,noreferrer");
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
      `&start=${start}&end=${end}`;

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

        <button onClick={swapCities}>Swap</button>

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

        <div style={{ position: "relative" }}>

          <div
            style={{
              height: 24,
              borderRadius: 12,
              background: "#5b21b6",
              position: "relative",
            }}
          >

            <div
              style={{
                position: "absolute",
                left: `${startPercent}%`,
                width: `${widthPercent}%`,
                height: "100%",
                background: "#22c55e",
                borderRadius: 12,
              }}
            />

          </div>

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

        <div style={{ marginTop: 6, fontWeight: 600 }}>
          Best Meeting Window: <strong>{startLocal} – {endLocal}</strong>
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
