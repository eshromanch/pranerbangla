/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pranerbangla.com.bd'],
    staticPageGenerationTimeout: 1000,
  },
}

module.exports = nextConfig
