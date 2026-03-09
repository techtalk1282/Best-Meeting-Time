"use client";

// app/ui/ToolPreviewSection.tsx
// PURPOSE: Tool preview section with timeline strip, share link, calendar export.

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

  const [cityA, setCityA] = useState<City>({
    name: "New York, USA",
    time: "10:30 AM",
    tz: "America/New_York",
  });

  const [cityB, setCityB] = useState<City>({
    name: "London, UK",
    time: "3:30 PM",
    tz: "Europe/London",
  });

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

  const markerPosition = 50;

  return (
    <div style={{ width: "100%", margin: "0 auto", padding: 20 }}>

      <h2>Tool Preview</h2>

      <p>
        A realistic preview of how comparing time zones will look — basic interaction enabled.
      </p>

      {viewerTZ && (
        <div style={{ marginBottom: 20, fontWeight: 600 }}>
          ⭐ Your Time Zone: {viewerTZ}
        </div>
      )}

      <div style={{ display: "flex", gap: 20, marginBottom: 25, flexWrap: "wrap" }}>

        <div style={{ border: "1px solid #444", padding: 16, borderRadius: 10 }}>
          <strong>{cityA.name}</strong>
          <p>{cityA.time}</p>
          <small>{cityA.tz}</small>
        </div>

        <button onClick={swapCities}>Swap</button>

        <div style={{ border: "1px solid #444", padding: 16, borderRadius: 10 }}>
          <strong>{cityB.name}</strong>
          <p>{cityB.time}</p>
          <small>{cityB.tz}</small>
        </div>

      </div>

      {/* Timeline */}

      <div
        style={{
          border: "1px solid #444",
          padding: 25,
          borderRadius: 14,
          marginBottom: 30,
          width: "100%"
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
            marginBottom: 10,
            opacity: 0.9,
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
              height: 28,
              borderRadius: 14,
              background:
                "linear-gradient(to right,#6d28d9 0%,#8b5cf6 20%,#22c55e 40%,#16a34a 55%,#f59e0b 75%,#ec4899 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 12px",
              fontSize: 11,
              color: "white",
              pointerEvents: "none",
            }}
          >
            <span>Early</span>
            <span>Best Window</span>
            <span>Late</span>
          </div>

        </div>

        <div style={{ position: "relative", height: 20, marginTop: 6 }}>
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

        <div style={{ marginTop: 8, fontWeight: 600 }}>
          Best Meeting Window: <strong>2:00 PM – 3:00 PM</strong>
        </div>

        <div style={{ marginTop: 4, fontSize: 12, opacity: 0.7 }}>
          Calculated using typical working hours (9 AM – 5 PM)
        </div>

      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
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
