import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  allowedDevOrigins: ['*.replit.dev', '*.riker.replit.dev', '*.replit.app', '127.0.0.1'],
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/en',
      },
      {
        source: '/employers',
        destination: '/en/employers',
      },
      {
        source: '/job-seekers',
        destination: '/en/job-seekers',
      },
      {
        source: '/how-it-works',
        destination: '/en/how-it-works',
      },
      {
        source: '/blog',
        destination: '/en/blog',
      },
      {
        source: '/blog/:slug',
        destination: '/en/blog/:slug',
      },
      {
        source: '/faq',
        destination: '/en/faq',
      },
      {
        source: '/contact',
        destination: '/en/contact',
      },
      {
        source: '/security',
        destination: '/en/security',
      },
      {
        source: '/privacy',
        destination: '/en/privacy',
      },
      {
        source: '/terms',
        destination: '/en/terms',
      },
      {
        source: '/pricing',
        destination: '/en/pricing',
      },
      {
        source: '/login',
        destination: '/en/login',
      },
      {
        source: '/signup',
        destination: '/en/signup',
      },
      {
        source: '/testimonials',
        destination: '/en/testimonials',
      },
      {
        source: '/book-demo',
        destination: '/en/book-demo',
      },
    ];
  },
  turbopack: {
    resolveAlias: {
      '@shared': resolve(__dirname, 'shared'),
      '@assets': resolve(__dirname, 'attached_assets'),
    },
  },
};

export default nextConfig;
