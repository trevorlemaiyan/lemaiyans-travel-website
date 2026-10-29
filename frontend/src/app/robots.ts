import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/.well-known/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://lemaiyanstravels.co.ke/sitemap.xml',
    host: 'https://lemaiyanstravels.co.ke',
  }
}
