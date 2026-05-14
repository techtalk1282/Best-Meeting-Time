// app/layout.tsx
// Version: v2.1 - Google Analytics GA4 added
// Date: 2026-05-14
// Purpose: Add GA4 tracking while preserving existing AdSense and metadata.
// Rollback: Restore previous v2.0 layout.tsx if analytics causes any issue.

import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.bestmeetingtimeapp.com"),

  title: {
    default: "Best Meeting Time",
    template: "%s | Best Meeting Time",
  },

  description:
    "Compare global time zones, find the best meeting windows for remote teams, and schedule international meetings faster with Best Meeting Time.",

  keywords: [
    "best meeting time",
    "time zone meeting planner",
    "world clock meeting planner",
    "remote team scheduling",
    "international meeting planner",
    "meeting across time zones",
    "global scheduling tool",
    "time zone converter",
  ],

  openGraph: {
    title: "Best Meeting Time",
    description:
      "Compare world time zones, schedule meetings faster, and find overlap windows for remote teams and international work.",
    url: "https://www.bestmeetingtimeapp.com",
    siteName: "Best Meeting Time",
    locale: "en_US",
    type: "website",
  },

  verification: {
    google: "Pr1O21EgUV7XrPwBuN7-fa4ZFYi1DYlFffrwlcmfQ_U",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      style={{
        maxWidth: "100%",
        overflowX: "hidden",
      }}
    >
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9246885832557966"
          crossOrigin="anonymous"
        ></script>

        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-08PCH2KJWG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-08PCH2KJWG');
          `}
        </Script>
      </head>

      <body
        style={{
          background: "linear-gradient(180deg, #4c1d95 0%, #312e81 100%)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          overflowX: "hidden",
          margin: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
