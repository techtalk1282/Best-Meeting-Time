// app/api/calendar/route.ts
// PURPOSE: Generate calendar event (.ics) so the browser opens the calendar app directly.

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);

    const cityA = url.searchParams.get("cityA") || "City A";
    const cityB = url.searchParams.get("cityB") || "City B";

    const start = url.searchParams.get("start") || "20260305T180000Z";
    const end = url.searchParams.get("end") || "20260305T190000Z";

    const now =
      new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const uid = `meeting-${Date.now()}@bestmeetingtime`;

    const title = `Meeting: ${cityA} ↔ ${cityB}`;
    const description = `Suggested meeting window between ${cityA} and ${cityB}`;

    const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Best Meeting Time//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${now}
DTSTART:${start}
DTEND:${end}
SUMMARY:${title}
DESCRIPTION:${description}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

    return new NextResponse(ics, {
      headers: {
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition": "inline; filename=meeting.ics",
      },
    });
  } catch (err) {
    console.error("calendar_error", err);

    return NextResponse.json(
      { error: "Unable to generate calendar event" },
      { status: 500 }
    );
  }
}
