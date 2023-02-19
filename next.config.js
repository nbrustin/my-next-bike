/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // domains: ["image.tmdb.org"],
    domains: ["d2yn9m4p3q9iyv.cloudfront.net"],
  },
};

module.exports = nextConfig;
