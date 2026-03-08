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

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

/*
Expected POST body:

{
  cities: { name: string; tz: string }[],
  windows: { startUtc: string; endUtc: string }[]
}

Preview share is allowed without premium cookie.
*/

export async function POST(req: NextRequest) {
  try {

    const body = await req.json();

    console.log("share_request_body", body);

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

    const id = crypto.randomBytes(4).toString("hex");
    const shareKey = `share:${id}`;

    const payload = {
      id,
      createdAt: new Date().toISOString(),
      cities,
      windows,
    };

    console.log("share_payload", payload);

    await kv.set(shareKey, payload);

    console.log("share_saved", shareKey);

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
