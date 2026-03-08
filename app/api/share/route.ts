// app/api/share/route.ts

import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const SHARE_TTL_SECONDS = 60 * 60 * 24 * 45; // 45 days

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

/*
Expected POST body:

{
  cities: { name: string; tz: string }[],
  windows: { startUtc: string; endUtc: string }[]
}

Preview share allowed without premium cookie.
Premium gating remains for other systems.
*/

export async function POST(req: NextRequest) {

  try {

    const body = await req.json();
    const { cities, windows } = body || {};

    if (!Array.isArray(cities) || !Array.isArray(windows)) {
      return NextResponse.json(
        { error: "Invalid payload" },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    if (windows.length === 0 || windows.length > 3) {
      return NextResponse.json(
        { error: "Max 3 windows allowed" },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    /*
    Generate secure 10 character ID
    */

    const id = crypto.randomBytes(5).toString("hex");

    const shareKey = `share:${id}`;

    const payload = {
      id,
      createdAt: new Date().toISOString(),
      cities,
      windows,
    };

    /*
    Store payload with expiration
    */

    await kv.set(shareKey, payload, {
      ex: SHARE_TTL_SECONDS,
    });

    /*
    Analytics: track share creation
    */

    await kv.incr("analytics:share_created");
    await kv.incr(`analytics:share_created:${id}`);

    return NextResponse.json(
      { id, url: `/s/${id}` },
      { status: 200, headers: CORS_HEADERS }
    );

  } catch (err) {

    console.error("share_api_error", err);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500, headers: CORS_HEADERS }
    );

  }
}
