import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uqmdwdzmfmvegzpietkc.supabase.co',
        port: '',
        pathname: `/storage/v1/object/public/${process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME}/**`,
        search: '',
      },
      {
        protocol:"https",
        hostname:"lh3.googleusercontent.com",
        port:"",
        pathname:`/a/**`,
        search:"",
      }
    ],
  },
};

export default nextConfig;
