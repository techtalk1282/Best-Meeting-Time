"use client";

import React from "react";

export default function UnlockPremiumButton() {
  const handleUnlock = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
    });

    if (!res.ok) {
      alert("Checkout failed");
      return;
    }

    const data = await res.json();

    if (!data?.url) {
      alert("Missing checkout URL");
      return;
    }

    window.location.href = data.url;
  };

  return (
    <button
      onClick={handleUnlock}
      style={{
        background: "black",
        color: "white",
        padding: "10px 16px",
        borderRadius: "6px",
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      Unlock Premium ($1)
    </button>
  );
}
