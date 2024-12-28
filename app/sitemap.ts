import { MetadataRoute } from 'next'
import { domains } from '@/config/navigation'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://coc-landing.vercel.app'
  
  // Base routes
  const routes = [
    '',
    '/about',
    '/teams',
    '/dashboard',
    '/dev-club',
    '/cp-club',
    '/ai-group',
    '/eth-club',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const resourceRoutes = domains.map((domain) => ({
    url: `${baseUrl}/dashboard/${domain.resources}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...routes, ...resourceRoutes]
} 