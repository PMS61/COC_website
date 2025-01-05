export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Community of Coders VJTI",
  "url": "https://communityofcoders.in",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://communityofcoders.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Community of Coders VJTI",
  "url": "https://communityofcoders.in",
  "logo": "https://communityofcoders.in/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/community-of-coders-vjti",
    "https://github.com/Community-Of-Coders"
  ]
}; 