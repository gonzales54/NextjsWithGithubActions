/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  /**
   * If you don't use Auth0 for authentication, delete the line below.
   */

  images: {
    domains: [
      'lh3.googleusercontent.com',
      's.gravatar.com',
      'images.unsplash.com'
    ]
  }
}

module.exports = nextConfig
