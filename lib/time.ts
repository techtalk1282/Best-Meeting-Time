// lib/time.ts

/**
 * Converts a UTC ISO timestamp into a localized, human-readable time string
 * based on the viewer's browser locale and timezone.
 *
 * IMPORTANT:
 * - Input MUST be UTC
 * - Output is LOCAL TIME ONLY
 * - UTC is never shown to users
 */
export function formatUtcToLocal(
  utcIso: string,
  options?: Intl.DateTimeFormatOptions
): string {
  const date = new Date(utcIso);

  if (isNaN(date.getTime())) {
    throw new Error(`Invalid UTC timestamp: ${utcIso}`);
  }

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
    ...options,
  }).format(date);
}
