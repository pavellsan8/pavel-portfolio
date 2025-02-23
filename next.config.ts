import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        // Handle dynamic routes but exclude pages directory routes
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'dynamic',
            value: 'true'
          }
        ],
        destination: '/',
      }
    ];
  },
};

export default nextConfig;