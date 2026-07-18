/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      // Redirect apex domain to www (existing rule — keep first)
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'slstudio.pro',
          },
        ],
        destination: 'https://www.slstudio.pro/$1',
        permanent: true,
      },
      // Old English slug -> clean canonical slug
      {
        source: '/blog/suno-studio-guide-en-2026',
        destination: '/blog/suno-studio-guide-2026',
        permanent: true,
      },
      // Old Polish slug -> clean Polish slug
      {
        source: '/pl/blog/suno-studio-guide-en-2026',
        destination: '/pl/blog/suno-studio-guide-2026',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
