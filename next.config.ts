import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/ko',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/ko/:path*',
        destination: '/en/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
