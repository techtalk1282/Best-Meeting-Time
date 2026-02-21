import { cookies } from "next/headers";

export default function HomePage() {
  const premium = cookies().get("premium")?.value === "1";

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Best Meeting Time</h1>
      <p>Premium: {premium ? "ON" : "OFF"}</p>

      {!premium && (
        <>
          <button
            style={{
              marginTop: 16,
              padding: "12px 18px",
              borderRadius: 10,
              border: "none",
              background: "black",
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
            }}
            onClick={async () => {
              try {
                const res = await fetch("/api/checkout", { method: "POST" });
                const data = await res.json();
                if (!res.ok) throw new Error(data?.error || "Checkout failed");
                window.location.href = data.url;
              } catch (e: any) {
                alert(e?.message || "Checkout request failed");
              }
            }}
          >
            Unlock Premium ($1)
          </button>

          <p style={{ marginTop: 12 }}>
            If Checkout does not open, the error above tells us exactly what your
            /api/checkout route returned.
          </p>
        </>
      )}
    </main>
  );
}
