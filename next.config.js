/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    server_uri: process.env.SERVER_URI,
  },
}

module.exports = nextConfig
