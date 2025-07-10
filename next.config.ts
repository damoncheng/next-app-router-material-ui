import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  async rewrites() {
    return {
      // 开发环境代理
      fallback: [
        {
          source: `${process.env.PROXY_SOURCE_PATH}/:params/`,
          destination: `${process.env.PROXY_DESTINATION_PATH}/:params/`, // 后端地址
        },
      ]
    }
  }
};

export default nextConfig;
