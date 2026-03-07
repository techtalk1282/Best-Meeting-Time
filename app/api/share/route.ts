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

NOTE:
Preview share is allowed without premium cookie.
Premium gating remains for other features.
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

    // Generate short non-predictable ID
    const id = crypto.randomBytes(4).toString("hex"); // 8 characters
    const shareKey = `share:${id}`;

    const payload = {
      id,
      createdAt: new Date().toISOString(),
      cities,
      windows,
    };

    // Store payload in KV
    await kv.set(shareKey, payload);

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


