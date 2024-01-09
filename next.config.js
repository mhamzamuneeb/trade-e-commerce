/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
    "rc-tree",
    "rc-table",
  ],
  images: {
    domains: ["fakestoreapi.com", "cdn.builder.io"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // distDir: "build",
};

module.exports = nextConfig;
