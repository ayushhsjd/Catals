import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://catals.in/sitemap.xml',
    host: 'https://catals.in',
  }
}
