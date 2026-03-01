"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleShare() {
    setLoading(true);
    setError(null);

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

      const { id } = await res.json();
      router.push(`/s/${id}`);
    } catch {
      setError("Unable to create share link");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button onClick={handleShare} disabled={loading}>
        {loading ? "Creating link…" : "Share meeting"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
