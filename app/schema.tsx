export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Community of Coders VJTI",
  "url": "https://coc-landing.vercel.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://coc-landing.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Community of Coders VJTI",
  "url": "https://coc-landing.vercel.app",
  "logo": "https://coc-landing.vercel.app/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/community-of-coders-vjti",
    "https://github.com/Community-Of-Coders"
  ]
}; 