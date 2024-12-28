export function generateStructuredData(pageType: string) {
  switch (pageType) {
    case 'website':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'COC VJTI',
        description: 'Explore tech communities and resources for VJTI students',
        url: 'https://coc-landing.vercel.app',
      };
    case 'organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'COC VJTI',
        url: 'https://coc-landing.vercel.app',
        logo: 'https://coc-landing.vercel.app/logo.png',
      };
  }
} 