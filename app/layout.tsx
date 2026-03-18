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
          background: "linear-gradient(180deg,#4c1d95,#3b0764)",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
