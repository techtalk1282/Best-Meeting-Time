/**
 * File: next.config.js
 * Version: v1.1
 * Fix:
 * - Correct wildcard path handling (:path*)
 */

module.exports = {
  async redirects() {
    return [
      {
        source: '/((?!ads.txt).*)',
        has: [
          {
            type: 'host',
            value: 'bestmeetingtimeapp.com',
          },
        ],
        destination: 'https://www.bestmeetingtimeapp.com/:path*',
        permanent: true,
      },
    ];
  },
};
