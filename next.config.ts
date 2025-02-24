import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
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