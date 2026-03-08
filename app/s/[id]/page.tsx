<main style={{ padding: "2rem", maxWidth: 900, fontFamily: "sans-serif" }}>
  <h1>Best Meeting Time</h1>

  <p><strong>Shared Meeting</strong></p>

  {data.createdAt && (
    <p>Created: {formatInTimeZone(data.createdAt, viewerTz || "UTC")}</p>
  )}

  {viewerTz && (
    <p><strong>Your Timezone:</strong> {viewerTz}</p>
  )}

  <hr />

  <h2>Cities</h2>
  <ul>
    {data.cities.map((city) => (
      <li key={city.name}>
        {city.name} ({city.tz})
      </li>
    ))}
  </ul>

  <hr />

  <h2>Suggested Time Window(s)</h2>

  {data.windows.map((w, idx) => (
    <div key={idx} style={{ marginBottom: "2rem" }}>
      <strong>Option {idx + 1}</strong>

      <table
        style={{
          marginTop: "10px",
          borderCollapse: "collapse",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <tbody>

          {data.cities.map((city) => (
            <tr key={city.name}>
              <td style={{ padding: "6px 10px", fontWeight: "bold" }}>
                {city.name}
              </td>

              <td style={{ padding: "6px 10px" }}>
                {formatInTimeZone(w.startUtc, city.tz)}
              </td>

              <td style={{ padding: "6px 10px" }}>
                {formatInTimeZone(w.endUtc, city.tz)}
              </td>
            </tr>
          ))}

          {viewerTz && (
            <tr>
              <td style={{ padding: "6px 10px", fontWeight: "bold" }}>
                Your Local Time
              </td>

              <td style={{ padding: "6px 10px" }}>
                {formatInTimeZone(w.startUtc, viewerTz)}
              </td>

              <td style={{ padding: "6px 10px" }}>
                {formatInTimeZone(w.endUtc, viewerTz)}
              </td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  ))}
</main>
