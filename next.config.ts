import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        ppr: "incremental",
    },
    eslint: {
        // ESLintを無効化
        ignoreDuringBuilds: true, // ビルド時に ESLint のチェックを無視
    },
};

export default nextConfig;
