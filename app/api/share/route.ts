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

jobId is resolved SERVER-SIDE from cookies.
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

    // 🔐 Resolve jobId from HTTP-only cookies (authoritative)
    const jobId = req.cookies.get("jobId")?.value;

    if (!jobId) {
      return NextResponse.json(
        { error: "Missing jobId" },
        { status: 401, headers: CORS_HEADERS }
      );
    }

    // 🔐 AUTHORITATIVE PREMIUM CHECK (Upstash KV)
    const premiumKey = `premium:${jobId}`;
    const isPremium = await kv.get<boolean>(premiumKey);

    if (!isPremium) {
      return NextResponse.json(
        { error: "Premium required" },
        { status: 403, headers: CORS_HEADERS }
      );
    }

    // 🔗 Generate short, non-predictable ID
    const id = crypto.randomBytes(4).toString("hex"); // 8 chars
    const shareKey = `share:${id}`;

    const payload = {
      id,
      createdAt: new Date().toISOString(),
      cities,
      windows, // stored as UTC only
    };

    // 🗄 Store read-only share payload
    await kv.set(shareKey, payload);

    return NextResponse.json(
      { id, url: `/s/${id}` },
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
