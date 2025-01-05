import { MetadataRoute } from 'next'
import { domains } from '@/config/navigation'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://communityofcoders.in'

  // Main routes
  const mainRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/teams`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Club routes
  const clubRoutes = [
    'ai-group',
    'cp-club',
    'dev-club',
    'eth-club',
    'proj-x',
  ].map((club) => ({
    url: `${baseUrl}/${club}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Resource routes from domains
  const resourceRoutes = domains.map((domain) => ({
    url: `${baseUrl}/dashboard/${domain.resources}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...mainRoutes, ...clubRoutes, ...resourceRoutes]
}