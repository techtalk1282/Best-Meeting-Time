"use client";

import { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    try {
      setError(null);
      setLoading(true);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // If your API expects a body later, you can add it here.
        body: JSON.stringify({}),
      });

      // Try to read JSON either way (helps debugging)
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data?.error ||
            data?.message ||
            `Checkout request failed (${res.status})`
        );
      }

      const url = data?.url;
      if (!url || typeof url !== "string") {
        throw new Error("Checkout API did not return a valid 'url'.");
      }

      // Redirect to Stripe Checkout
      window.location.href = url;
    } catch (e: any) {
      setError(e?.message || "Something went wrong starting checkout.");
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: 32, fontFamily: "system-ui, Arial, sans-serif" }}>
      <h1 style={{ fontSize: 44, margin: 0 }}>Best Meeting Time</h1>

      <p style={{ marginTop: 14, marginBottom: 22, fontSize: 16 }}>
        Premium: OFF
      </p>

      <button
        onClick={startCheckout}
        disabled={loading}
        style={{
          padding: "12px 18px",
          fontSize: 16,
          fontWeight: 700,
          cursor: loading ? "not-allowed" : "pointer",
          borderRadius: 10,
          border: "1px solid #111",
          background: loading ? "#ddd" : "#111",
          color: loading ? "#555" : "#fff",
        }}
      >
        {loading ? "Opening Checkout..." : "Unlock Premium ($1)"}
      </button>

      {error && (
        <p style={{ marginTop: 14, color: "crimson", fontSize: 14 }}>
          {error}
        </p>
      )}

      <p style={{ marginTop: 22, color: "#555", fontSize: 14 }}>
        If Checkout does not open, the error above tells us exactly what your
        /api/checkout route returned.
      </p>
    </main>
  );
}
