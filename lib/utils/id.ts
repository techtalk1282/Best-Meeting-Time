// lib/utils/id.ts

const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";

/**
 * Generates short URL-safe ID for share links
 */
export function generateId(length: number = 6): string {
  let id = "";

  for (let i = 0; i < length; i++) {
    id += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return id;
}
