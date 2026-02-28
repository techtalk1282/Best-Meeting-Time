// app/page.tsx

import { cookies } from "next/headers";
import UnlockPremiumButton from "./UnlockPremiumButton";

export default function HomePage() {
  const premium = cookies().get("premium")?.value === "1";

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Best Meeting Time</h1>

      <p>Premium: {premium ? "ON" : "OFF"}</p>

      {!premium && <UnlockPremiumButton />}

      {premium && (
        <button
          style={{
            marginTop: 16,
            padding: "10px 16px",
            borderRadius: 6,
            border: "none",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            cursor: "pointer",
            fontSize: 14,
          }}
          onClick={() => {
            alert("Create Share Link UI placeholder");
          }}
        >
          Create Share Link
        </button>
      )}
    </main>
  );
}
