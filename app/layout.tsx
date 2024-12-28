import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import { PostHogProvider } from '@/components/providers/PostHogProvider'
import { PostHogPageview } from '@/components/PostHogPageview'
import { NextAuthProvider } from '@/components/providers/NextAuthProvider'

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
    default: "VJTI Resources & Communities",
    template: "%s | VJTI Resources"
  },
  description: "Access curated educational resources, join tech communities, and connect with VJTI's developer ecosystem. Features AI, Web Dev, CP, and academic materials.",
  keywords: ["VJTI", "education", "resources", "developer communities", "engineering", "tech clubs", "Mumbai","AI","Web Dev","CP","academic materials","coc","coding"],
  authors: [{ name: "VJTI Resources Team" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://coc-landing.vercel.app",
    siteName: "VJTI Resources",
    images: [{
      url: "/coc_vjti.jpeg",
      width: 1200,
      height: 630,
      alt: "VJTI Resources & Communities Logo"
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vjti_resources",
    images: "/coc_vjti.jpeg",
  },
  icons: {
    icon: "/coc_vjti.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
