        >
          {CITY_OPTIONS.map((c) => (
            <option key={c.tz} value={c.tz}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          border: "1px solid #444",
          padding: 24,
          borderRadius: 10,
          marginBottom: 25,
        }}
      >

        {/* Timeline labels using grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            fontSize: 11,
            marginBottom: 8,
            textAlign: "center"
          }}
        >
          <span>12 AM</span>
          <span>2 AM</span>
          <span>4 AM</span>
          <span>6 AM</span>
          <span>8 AM</span>
          <span>10 AM</span>
          <span>12 PM</span>
          <span>2 PM</span>
          <span>4 PM</span>
          <span>6 PM</span>
          <span>8 PM</span>
          <span>10 PM</span>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              height: 24,
              borderRadius: 12,
              background:
                "linear-gradient(to right,#6d28d9 0%,#8b5cf6 20%,#22c55e 40%,#16a34a 55%,#f59e0b 75%,#ec4899 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 11,
              fontWeight: 600,
              color: "white",
              padding: "0 10px",
              pointerEvents: "none",
            }}
          >
            <span>Early Hours</span>
            <span>Best Meeting Window</span>
            <span>Late Hours</span>
          </div>
        </div>

        <div style={{ position: "relative", height: 18, marginTop: 4 }}>
          <div
            style={{
              position: "absolute",
              left: `${markerPosition}%`,
              transform: "translateX(-50%)",
              fontSize: 16,
              color: "white",
            }}
          >
            ▲
          </div>
        </div>

        <div style={{ marginTop: 6, fontWeight: 600 }}>
          Best Meeting Window: <strong>{startLocal} – {endLocal}</strong>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={createShareLink}>
          {creatingShare ? "Creating..." : "Create Share Link"}
        </button>

        <button onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}>
          Export to Calendar
        </button>
      </div>

      {calendarMenuOpen && (
        <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
          <button onClick={openGoogleCalendar}>Add to Google Calendar</button>
          <button onClick={openOutlookCalendar}>Add to Outlook Calendar</button>
          <button onClick={downloadICS}>Apple / iCal Download</button>
        </div>
      )}

      {shareLink && (
        <div style={{ marginTop: 30 }}>
          <strong>Share or bookmark this meeting setup</strong>

          <p>{shareLink}</p>

          <button onClick={copyLink}>Copy Link</button>

          <p>{copyMessage}</p>

          <small>Links remain active for 45 days.</small>
        </div>
      )}
    </div>
  );
}
