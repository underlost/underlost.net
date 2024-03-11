/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [`./src/styles`],
  },
  publicRuntimeConfig: {
    modifiedDate: new Date().toISOString(),
  },
  images: {
    domains: [`images.unsplash.com`, `cdn.underlost.net`, `www.gravatar.com`, `cdn.alifewellplayed.com`],
  },
}

export default nextConfig
