/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    parentDomain: process.env.NODE_ENV === 'production' ? 'https://dane.gov.co/index.php/estadisticas-por-tema/ambientales/economia-circular' : null
  },
  trailingSlash: true
}

module.exports = nextConfig
