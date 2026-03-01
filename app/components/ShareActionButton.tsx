"use client";

import { useState } from "react";

type City = {
  name: string;
  tz: string;
};

type Window = {
  startUtc: string;
  endUtc: string;
};

export default function ShareActionButton({
  cities,
  windows,
}: {
  cities: City[];
  windows: Window[];
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    setLoading(true);
    setError(null);
    setShareUrl(null);
    setCopied(false);

    try {
      const res = await fetch("/api/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cities, windows }),
      });

      if (res.status === 403) {
        setError("Premium required to share");
        return;
      }

      if (!res.ok) {
        throw new Error("Share failed");
      }

      const { url } = await res.json();
      const fullUrl = `${window.location.origin}${url}`;
      setShareUrl(fullUrl);
    } catch {
      setError("Unable to create share link");
    } finally {
      setLoading(false);
    }
  }

  function handleCopy() {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div style={{ marginTop: "12px" }}>
      <button onClick={handleShare} disabled={loading}>
        {loading ? "Creating link…" : "Share meeting"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {shareUrl && (
        <div style={{ marginTop: "10px" }}>
          <input
            type="text"
            value={shareUrl}
            readOnly
            style={{ width: "100%", padding: "6px" }}
          />
          <button onClick={handleCopy} style={{ marginTop: "6px" }}>
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
      )}
    </div>
  );
}
