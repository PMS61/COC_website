import { MetadataRoute } from 'next'
import { domains } from '@/config/navigation'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://coc-landing.vercel.app'
  
  // Main routes with external resources
  const routes = [
    {
      route: '',
      externalResources: ['https://vjti.ac.in', 'https://github.com/communityofcoders']
    },
    {
      route: '/about',
      externalResources: ['https://www.linkedin.com/company/community-of-coders-vjti/posts/?feedView=all']
    },
    {
      route: '/teams',
      externalResources: ['https://github.com/communityofcoders']
    },
    {
      route: '/dashboard',
      externalResources: ['https://docs.github.com/en']
    },
    {
      route: '/dev-club',
      externalResources: ['https://developer.mozilla.org', 'https://reactjs.org']
    },
    {
      route: '/cp-club',
      externalResources: ['https://codeforces.com', 'https://leetcode.com']
    },
    {
      route: '/ai-group',
      externalResources: ['https://pytorch.org', 'https://tensorflow.org']
    },
    {
      route: '/eth-club',
      externalResources: ['https://ethereum.org', 'https://web3.foundation']
    },
  ].map(({ route }) => ({
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