/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['cms.njwebdeveloper.codes']
  }
}

module.exports = nextConfig
