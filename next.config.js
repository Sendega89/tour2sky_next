/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  presets: ["next/babel"],
  images: {
    domains: ['t2sb.rcnwd.com'],
  },

}

module.exports = nextConfig
