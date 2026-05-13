/**
 * File: app/sitemap.ts
 * Version: v2.0 (EXPANDED CONTENT + AUTHORITY SITEMAP)
 * Date: 2026-05-13
 *
 * PURPOSE:
 * - Expand sitemap coverage for AdSense readiness
 * - Include trust pages, blog pages, guide pages, and authority content
 * - Improve Google crawl discovery and indexing depth
 * - Preserve existing city SEO pages
 *
 * NOTES:
 * - Uses Next.js native sitemap support
 * - No external libraries required
 * - Auto-updates on deployment
 *
 * PROTECTED:
 * - No payment logic
 * - No Stripe changes
 * - No ToolPreview changes
 *
 * ROLLBACK:
 * - Revert to v1.0 if sitemap generation fails
 */

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bestmeetingtimeapp.com";

  return [
    // Homepage
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },

    // Main Site Pages
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },

    // Authority / Article Pages
    {
      url: `${baseUrl}/fun-facts-about-time-zones`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/best-meeting-times-remote-teams`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/time-zone-meeting-planner-guide`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/how-to-schedule-meetings-across-time-zones`,
      lastModified: new Date(),
    },

    // City SEO Pages
    {
      url: `${baseUrl}/best-meeting-time-new-york`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/best-meeting-time-london`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/best-meeting-time-tokyo`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/best-meeting-time-sydney`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/best-meeting-time-dubai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/best-meeting-time-berlin`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/best-meeting-time-paris`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/best-meeting-time-mumbai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/best-meeting-time-toronto`,
      lastModified: new Date(),
    },
  ];
}
