import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import { PostHogProvider } from '@/components/providers/PostHogProvider'
import { PostHogPageview } from '@/components/PostHogPageview'
import { NextAuthProvider } from '@/components/providers/NextAuthProvider'
import { websiteSchema, organizationSchema } from './schema'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://coc-landing.vercel.app'),
  title: {
    default: "Community of Coders VJTI | COC Landing",
    template: "%s | Community of Coders VJTI"
  },
  description: "Access curated educational resources, join tech communities, and explore learning paths for Web Development, AI/ML, Competitive Programming at VJTI.",
  keywords: ["VJTI", "COC", "tech communities", "educational resources", "web development", "AI/ML", "competitive programming", "student clubs"],
  authors: [{ name: "Community of Coders" }],
  creator: "Community of Coders VJTI",
  publisher: "VJTI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://coc-landing.vercel.app',
    title: 'Community of Coders VJTI',
    description: 'Access curated educational resources and join tech communities at VJTI.',
    siteName: 'Community of Coders VJTI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community of Coders VJTI',
    description: 'Access curated educational resources and join tech communities at VJTI.',
    creator: '@COC_VJTI',
  },
  alternates: {
    canonical: 'https://coc-landing.vercel.app',
  },
  verification: {
    google: 'your-google-verification-code',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <NextAuthProvider>
          <PostHogProvider>
            <PostHogPageview />
            {children}
          </PostHogProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
