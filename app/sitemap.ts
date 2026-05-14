/**
 * File: app/sitemap.ts
 * Version: v2.1 (FIX AUTHORITY SITEMAP ARRAY PLACEMENT)
 * Date: 2026-05-13
 *
 * PURPOSE:
 * - Fix sitemap build failure caused by article entries placed outside the return array
 * - Include trust pages, blog pages, guide pages, authority content, and city SEO pages
 * - Preserve existing city SEO pages
 *
 * PROTECTED:
 * - No payment logic
 * - No Stripe changes
 * - No ToolPreview changes
 *
 * ROLLBACK:
 * - Revert to v2.0 if sitemap generation fails
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
    {
      url: `${baseUrl}/best-times-to-contact-different-countries`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/best-meeting-times-us-and-europe`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/why-remote-teams-struggle-with-scheduling`,
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
