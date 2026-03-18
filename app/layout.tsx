import "./globals.css";

export const metadata = {
  title: "Best Meeting Time",
  description: "Find the best meeting time across time zones",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#0b0a14", // solid base (REMOVED gradient conflict)
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
