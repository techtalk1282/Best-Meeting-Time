/**
 * File: app/sitemap.ts
 * Version: v2.2 (ADSENSE READINESS SITEMAP EXPANSION)
 * Date: 2026-06-04
 *
 * PURPOSE:
 * - Include homepage, main pages, trust/legal pages, guide hubs, blog articles, authority pages, and city SEO pages
 * - Add missing AdSense trust pages to sitemap
 * - Add missing linked authority pages used by Blog and Guides
 * - Preserve existing city SEO pages
 *
 * PROTECTED:
 * - No payment logic
 * - No Stripe changes
 * - No ToolPreview changes
 *
 * ROLLBACK:
 * - Revert to v2.1 if sitemap generation fails
 */

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bestmeetingtimeapp.com";

  return [
    { url: `${baseUrl}`, lastModified: new Date() },

    // Main Pages
    { url: `${baseUrl}/how-it-works`, lastModified: new Date() },
    { url: `${baseUrl}/features`, lastModified: new Date() },
    { url: `${baseUrl}/guides`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },

    // Trust / Legal Pages
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date() },
    { url: `${baseUrl}/disclaimer`, lastModified: new Date() },
    { url: `${baseUrl}/cookie-policy`, lastModified: new Date() },

    // Authority / Guide / Blog Pages
    { url: `${baseUrl}/global-meeting-scheduling-playbook`, lastModified: new Date() },
    { url: `${baseUrl}/how-to-plan-global-team-meetings`, lastModified: new Date() },
    { url: `${baseUrl}/fun-facts-about-time-zones`, lastModified: new Date() },
    { url: `${baseUrl}/best-meeting-times-remote-teams`, lastModified: new Date() },
    { url: `${baseUrl}/time-zone-meeting-planner-guide`, lastModified: new Date() },
    { url: `${baseUrl}/how-to-schedule-meetings-across-time-zones`, lastModified: new Date() },
    { url: `${baseUrl}/best-times-to-contact-different-countries`, lastModified: new Date() },
    { url: `${baseUrl}/best-meeting-times-us-and-europe`, lastModified: new Date() },
    { url: `${baseUrl}/why-remote-teams-struggle-with-scheduling`, lastModified: new Date() },

    // City SEO Pages
    { url: `${baseUrl}/best-meeting-time-new-york`, lastModified: new Date() },
    { url: `${baseUrl}/best-meeting-time-london`, lastModified: new Date() },
    { url: `${baseUrl}/best-meeting-time-tokyo`, lastModified: new Date() },
    { url: `${baseUrl}/best-meeting-time-sydney`, lastModified: new Date() },
    { url: `${baseUrl}/best-meeting-time-dubai`, lastModified: new Date() },
    { url: `${baseUrl}/best-meeting-time-berlin`, lastModified: new Date() },
    { url: `${baseUrl}/best-meeting-time-paris`, lastModified: new Date() },
    { url: `${baseUrl}/best-meeting-time-mumbai`, lastModified: new Date() },
    { url: `${baseUrl}/best-meeting-time-toronto`, lastModified: new Date() },
  ];
}
