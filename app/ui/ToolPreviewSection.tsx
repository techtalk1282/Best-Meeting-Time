// app/ui/ToolPreviewSection.tsx
// PURPOSE: Tool preview section — realistic static UI scaffold (no logic).
// NO state, NO behavior, NO API calls.

export default function ToolPreviewSection() {
  return (
    <section
      aria-label="Tool Preview Section"
      style={{
        paddingTop: "var(--space-16)",
        paddingBottom: "var(--space-16)",
      }}
    >
      <div
        aria-label="Tool Preview Container"
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          paddingLeft: "var(--space-6)",
          paddingRight: "var(--space-6)",
        }}
      >
        {/* Section Header */}
        <header
          aria-label="Tool Preview Header"
          style={{
            marginBottom: "var(--space-10)",
            textAlign: "left",
          }}
        >
          <h2 style={{ marginBottom: "var(--space-3)" }}>Tool Preview</h2>
          <p style={{ maxWidth: 760 }}>
            A realistic preview of how comparing time zones will look — this is a
            static UI scaffold. No selections, swapping, or calculations yet.
          </p>
        </header>

        {/* Preview Shell */}
        <div
          aria-label="Tool Preview Shell"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "var(--space-10)",
            alignItems: "start",
          }}
        >
          {/* Left: Main Preview Card */}
          <div
            aria-label="Preview Main Card"
            className="card"
            style={{
              padding: "var(--space-8)",
            }}
          >
            {/* City Row */}
            <div
              aria-label="City Row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                gap: "var(--space-4)",
                alignItems: "center",
                marginBottom: "var(--space-6)",
              }}
            >
              <div
                aria-label="City A Block"
                style={{
                  padding: "var(--space-4)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <p style={{ marginBottom: "var(--space-2)" }}>
                  <strong style={{ color: "var(--text)" }}>New York, USA</strong>
                </p>
                <p style={{ marginBottom: 0 }}>
                  <span style={{ color: "var(--text)" }}>10:30 AM</span>{" "}
                  <small>UTC-4</small>
                </p>
              </div>

              <div aria-label="Swap Block" style={{ textAlign: "center" }}>
                <button type="button" aria-label="Swap cities (static)">
                  Swap
                </button>
              </div>

              <div
                aria-label="City B Block"
                style={{
                  padding: "var(--space-4)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <p style={{ marginBottom: "var(--space-2)" }}>
                  <strong style={{ color: "var(--text)" }}>London, UK</strong>
                </p>
                <p style={{ marginBottom: 0 }}>
                  <span style={{ color: "var(--text)" }}>3:30 PM</span>{" "}
                  <small>UTC+1</small>
                </p>
              </div>
            </div>

            {/* Timeline Strip (static) */}
            <div
              aria-label="Timeline Strip"
              style={{
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)",
                overflow: "hidden",
                marginBottom: "var(--space-6)",
              }}
            >
              <div
                aria-label="Timeline Labels"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "var(--space-3) var(--space-4)",
                  background: "var(--surface)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <small>8 AM</small>
                <small>10 AM</small>
                <small>12 PM</small>
                <small>2 PM</small>
                <small>4 PM</small>
                <small>6 PM</small>
                <small>8 PM</small>
                <small>10 PM</small>
              </div>

              <div
                aria-label="Timeline Bars"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1.6fr 1.2fr",
                  height: 14,
                }}
              >
                <div
                  aria-label="Busy Left"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    borderRight: "1px solid var(--border)",
                  }}
                />
                <div
                  aria-label="Overlap"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(124,58,237,0.55), rgba(251,191,36,0.35))",
                    borderRight: "1px solid var(--border)",
                  }}
                />
                <div
                  aria-label="Busy Right"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                  }}
                />
              </div>

              <div
                aria-label="Timeline Footer"
                style={{
                  padding: "var(--space-3) var(--space-4)",
                  background: "rgba(0,0,0,0.12)",
                }}
              >
                <small>
                  Suggested window:{" "}
                  <span style={{ color: "var(--text)" }}>2:00 PM – 3:00 PM</span>{" "}
                  · Ideal for both
                </small>
              </div>
            </div>

            {/* Actions Row (static) */}
            <div
              aria-label="Tool Actions"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "var(--space-4)",
              }}
            >
              <button type="button" aria-label="Share link (static)">
                Share Link
              </button>
              <button type="button" aria-label="Export calendar (static)">
                Export to Calendar
              </button>
              <button type="button" aria-label="Save setup (static)">
                Save This Setup
              </button>
            </div>

            <p style={{ marginTop: "var(--space-4)", marginBottom: 0 }}>
              <small>Static preview. Interactions will be wired later.</small>
            </p>
          </div>

          {/* Right: Feature + Upgrade Teaser (static) */}
          <aside aria-label="Preview Side Panel">
            <div
              aria-label="Side Card"
              className="card"
              style={{ padding: "var(--space-8)" }}
            >
              <h3 style={{ marginBottom: "var(--space-3)" }}>
                Premium unlock (one-time)
              </h3>
              <p style={{ marginBottom: "var(--space-6)" }}>
                Unlock multiple time windows, calendar export, saved setups, and
                sharing tools — no subscriptions.
              </p>

              <div
                aria-label="Feature List"
                style={{
                  display: "grid",
                  gap: "var(--space-3)",
                  marginBottom: "var(--space-6)",
                }}
              >
                <div
                  style={{
                    padding: "var(--space-4)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    background: "var(--surface)",
                  }}
                >
                  <strong style={{ color: "var(--text)" }}>
                    Multiple Time Windows
                  </strong>
                  <p style={{ marginBottom: 0 }}>
                    See more than one strong option instantly.
                  </p>
                </div>

                <div
                  style={{
                    padding: "var(--space-4)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    background: "var(--surface)",
                  }}
                >
                  <strong style={{ color: "var(--text)" }}>Saved Setups</strong>
                  <p style={{ marginBottom: 0 }}>
                    Reuse your favorite city pairs fast.
                  </p>
                </div>

                <div
                  style={{
                    padding: "var(--space-4)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    background: "var(--surface)",
                  }}
                >
                  <strong style={{ color: "var(--text)" }}>
                    Calendar Export
                  </strong>
                  <p style={{ marginBottom: 0 }}>
                    Send meetings to Google, Outlook, or Apple.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="button-primary"
                aria-label="Unlock premium (static)"
                style={{ width: "100%" }}
              >
                Unlock Premium (Preview)
              </button>

              <p style={{ marginTop: "var(--space-4)", marginBottom: 0 }}>
                <small>UI preview only — payment wiring is handled elsewhere.</small>
              </p>
            </div>
          </aside>
        </div>

        {/* Mobile note (static) */}
        <div style={{ marginTop: "var(--space-10)" }}>
          <small>
            Responsive behavior will be tuned after the preview layout is approved.
          </small>
        </div>
      </div>
    </section>
  );
}
