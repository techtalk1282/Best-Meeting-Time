/**
 * File: app/sitemap.ts
 * Version: v1.0
 * Date: 2026-04-04
 *
 * PURPOSE:
 * - Generate sitemap.xml for Google indexing
 * - Includes all city pages + homepage
 *
 * NOTES:
 * - Uses Next.js native sitemap support
 * - No external libraries required
 * - Auto-updates when redeployed
 */

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bestmeetingtimeapp.com";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
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
