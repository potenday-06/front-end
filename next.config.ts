import type { NextConfig } from 'next'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  scope: '/app',
  sw: 'sw.js',
  disable:
    process.env.NODE_ENV === 'development' ||
    process.env.NEXT_DISABLE_PWA === 'true',
})

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  reactStrictMode: true,
}

module.exports = withPWA(nextConfig)

export default nextConfig
