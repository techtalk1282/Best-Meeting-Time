// app/api/share/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id || typeof id !== "string") {
      return NextResponse.json(
        { error: "Invalid link" },
        { status: 400 }
      );
    }

    const shareKey = `share:${id}`;
    const data = await kv.get(shareKey);

    if (!data) {
      return NextResponse.json(
        { error: "This meeting link is no longer available." },
        { status: 404 }
      );
    }

    // Return read-only meeting snapshot
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
