import { NextResponse } from 'next/server'

function generateSitemapXML() {
  const baseUrl = 'https://communityofcoders.in'
  const lastMod = new Date().toISOString()

  const routes = [
    { url: '', priority: 1.0, freq: 'daily' },
    { url: 'about', priority: 0.8, freq: 'weekly' },
    { url: 'teams', priority: 0.8, freq: 'weekly' },
    { url: 'dashboard', priority: 0.9, freq: 'daily' },
    { url: 'ai-group', priority: 0.7, freq: 'weekly' },
    { url: 'cp-club', priority: 0.7, freq: 'weekly' },
    { url: 'dev-club', priority: 0.7, freq: 'weekly' },
    { url: 'eth-club', priority: 0.7, freq: 'weekly' },
    { url: 'proj-x', priority: 0.7, freq: 'weekly' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${baseUrl}${route.url ? `/${route.url}` : ''}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${route.freq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('')}
</urlset>`

  return xml.trim()
}

export async function GET() {
  const xml = generateSitemapXML()
  
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
