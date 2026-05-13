/**
 * File: app/robots.ts
 * Version: v1.0 (SEO + ADSENSE ROBOTS CONFIG)
 * Date: 2026-05-13
 *
 * PURPOSE:
 * - Explicitly allow Google and search engine crawling
 * - Provide sitemap location
 * - Improve indexing clarity for AdSense readiness
 * - Use Next.js native robots support
 *
 * NOTES:
 * - No external libraries required
 * - Auto-generates robots.txt
 *
 * PROTECTED:
 * - No payment logic
 * - No Stripe changes
 * - No ToolPreview changes
 */

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.bestmeetingtimeapp.com/sitemap.xml",
  };
}
