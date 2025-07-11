import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  trailingSlash: true,
  async rewrites() {
    return {
      // 开发环境代理
      fallback: [
        {
          source: `${process.env.NEXT_PUBLIC_PROXY_SOURCE_PATH}/:params/`,
          destination: `${process.env.NEXT_PUBLIC_PROXY_DESTINATION_PATH}/:params/`, // 后端地址
        },
      ]
    }
  }
};

export default nextConfig;
