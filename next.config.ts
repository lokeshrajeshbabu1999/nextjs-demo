import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore TypeScript errors during build (not recommended for local development)
    ignoreBuildErrors: true,
  },
  /* config options here */
};

export default nextConfig;
