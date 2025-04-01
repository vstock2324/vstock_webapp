import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uqmdwdzmfmvegzpietkc.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/vstock.bucket.1/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
