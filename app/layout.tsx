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
  metadataBase: new URL('https://communityofcoders.in'),
  title: {
    default: "Community of Coders VJTI | COC",
    template: "%s | Community of Coders VJTI"
  },
  description: "Community of Coders (COC) is a student-driven community at VJTI, Mumbai, fostering coding culture through workshops, hackathons, and collaborative learning.",
  keywords: [
    "COC VJTI",
    "Community of Coders",
    "VJTI coding club",
    "Mumbai tech community",
    "student developers",
    "coding workshops",
    "hackathons",
    "programming community",
    "tech education",
    "web development",
    "AI/ML",
    "blockchain",
    "competitive programming"
  ],
  authors: [{ name: "Community of Coders VJTI" }],
  creator: "Community of Coders VJTI",
  publisher: "VJTI",
  robots: {
    index: true,
    follow: true,
    nocache: true,
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
    locale: 'en_IN',
    url: 'https://communityofcoders.in',
    title: 'Community of Coders VJTI | COC',
    description: 'Community of Coders (COC) is a student-driven community at VJTI, Mumbai, fostering coding culture through workshops, hackathons, and collaborative learning.',
    siteName: 'Community of Coders VJTI',
    images: [
      {
        url: '/coc_vjti.jpeg',
        width: 1200,
        height: 630,
        alt: 'Community of Coders VJTI Logo',
        type: 'image/jpeg',
      }
    ],
    countryName: 'India',
    emails: ['communityofcoders@vjti.ac.in'],
    phoneNumbers: ['+91-9833553251'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community of Coders VJTI',
    description: 'Join VJTI\'s premier coding community. Learn, build, and grow with workshops, hackathons, and collaborative projects.',
    creator: '@COC_VJTI',
    images: ['/coc_vjti.jpeg'],
    site: '@COC_VJTI',
  },
  alternates: {
    canonical: 'https://communityofcoders.in',
  },
  verification: {
    google: 'google4bec5d0570054012.html',
  },
  category: 'technology',
  classification: 'Education & Technology',
  other: {
    'google-site-verification': 'google4bec5d0570054012.html',
    'msvalidate.01': 'add-your-bing-site-verification-here',
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
