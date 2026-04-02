// app/layout.tsx

import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Best Meeting Time",
  description: "Find the best meeting time across time zones",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9246885832557966"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
  style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  }}
>
  {children}
</body>
    </html>
  );
}
