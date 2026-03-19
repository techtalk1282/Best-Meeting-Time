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
          minHeight: "100vh",
          background: `
            radial-gradient(circle at top, #6d28d9 0%, #4c1d95 40%, #2e1065 75%, #0b0a14 100%)
          `,
        }}
      >
        {children}
      </body>
    </html>
  );
}
