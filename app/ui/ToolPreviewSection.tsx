"use client";

// app/ui/ToolPreviewSection.tsx
// PURPOSE: Tool preview section with timeline strip, share link, calendar export.

import { useState } from "react";

export default function ToolPreviewSection() {

  const [cityA, setCityA] = useState({
    name: "New York, USA",
    time: "10:30 AM",
    tz: "America/New_York",
  });

  const [cityB, setCityB] = useState({
    name: "London, UK",
    time: "3:30 PM",
    tz: "Europe/London",
  });

  const [creatingShare, setCreatingShare] = useState(false);

  const [shareLink, setShareLink] = useState<string | null>(null);
  const [copyMessage, setCopyMessage] = useState("");

  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cities: [
            { name: cityA.name, tz: cityA.tz },
            { name: cityB.name, tz: cityB.tz },
          ],
          windows: [
            {
              startUtc: "2026-03-05T18:00:00Z",
              endUtc: "2026-03-05T19:00:00Z",
            },
          ],
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

    const start = "20260305T180000Z";
    const end = "20260305T190000Z";

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

    const start = "2026-03-05T18:00:00Z";
    const end = "2026-03-05T19:00:00Z";

    const subject = encodeURIComponent(
      `Meeting: ${cityA.name} ↔ ${cityB.name}`
    );

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

    const start = "20260305T180000Z";
    const end = "20260305T190000Z";

    const url =
      `/api/calendar?cityA=${encodeURIComponent(cityA.name)}` +
      `&cityB=${encodeURIComponent(cityB.name)}` +
      `&start=${start}&end=${end}`;

    window.open(url, "_blank");

  }

  return (

    <div style={{ maxWidth: 900, margin: "0 auto", padding: 40 }}>

      <h2>Tool Preview</h2>

      <p>
        A realistic preview of how comparing time zones will look — basic
        interaction enabled.
      </p>

      <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>

        <div style={{ border: "1px solid #444", padding: 15, borderRadius: 8 }}>
          <strong>{cityA.name}</strong>
          <p>{cityA.time}</p>
          <small>{cityA.tz}</small>
        </div>

        <button onClick={swapCities}>Swap</button>

        <div style={{ border: "1px solid #444", padding: 15, borderRadius: 8 }}>
          <strong>{cityB.name}</strong>
          <p>{cityB.time}</p>
          <small>{cityB.tz}</small>
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

          <button onClick={openGoogleCalendar}>
            Add to Google Calendar
          </button>

          <button onClick={openOutlookCalendar}>
            Add to Outlook Calendar
          </button>

          <button onClick={downloadICS}>
            Apple / iCal Download
          </button>

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
