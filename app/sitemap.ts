import type { MetadataRoute } from 'next'
import { niches } from '@/lib/data'

const base = 'https://catals.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages = ['', '/solutions', '/niches', '/about', '/contact', '/privacy', '/terms', '/refund']
  return [
    ...pages.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.7,
    })),
    ...niches.map((n) => ({
      url: `${base}/niches/${n.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]
}
