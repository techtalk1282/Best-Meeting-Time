// app/api/share/route.ts
// Version: v1.1-SHARE-ROUTE-CLEANUP
// Date: 2026-05-10
//
// PURPOSE:
// - Generate a secure share link for selected meeting windows
// - Store share payload in Vercel KV
// - Return /s/[id] URL to frontend Share Link button
//
// ROLLBACK:
// - Restore previous app/api/share/route.ts if share links fail

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

const SHARE_TTL_SECONDS = 60 * 60 * 24 * 45;

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

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

    const id = crypto.randomBytes(5).toString("hex");
    const shareKey = `share:${id}`;

    const payload = {
      id,
      createdAt: new Date().toISOString(),
      cities,
      windows,
    };

    await kv.set(shareKey, payload, {
      ex: SHARE_TTL_SECONDS,
    });

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
