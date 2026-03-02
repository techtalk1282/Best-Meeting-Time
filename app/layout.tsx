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
      <body>{children}</body>
    </html>
  );
}
