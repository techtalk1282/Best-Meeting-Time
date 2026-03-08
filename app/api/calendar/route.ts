import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {

  try {

    const { searchParams } = new URL(req.url);

    const cityA = searchParams.get("cityA") || "City A";
    const cityB = searchParams.get("cityB") || "City B";
    const start = searchParams.get("start");
    const end = searchParams.get("end");

    if (!start || !end) {

      return NextResponse.json(
        { error: "Missing start or end time" },
        { status: 400 }
      );

    }

    const title = `Meeting: ${cityA} ↔ ${cityB}`;
    const description = `Suggested meeting window between ${cityA} and ${cityB}`;

    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//BestMeetingTime//EN",
      "BEGIN:VEVENT",
      `UID:${Date.now()}@bestmeetingtime`,
      `DTSTAMP:${start}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    return new NextResponse(ics, {
      status: 200,
      headers: {
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition": 'attachment; filename="meeting.ics"',
        "Cache-Control": "no-store",
      },
    });

  } catch (err) {

    console.error("calendar_api_error", err);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );

  }

}
