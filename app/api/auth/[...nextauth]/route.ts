import { type NextRequest } from 'next/server';
import { Auth, type AuthConfig } from '@auth/core';
import Google from '@auth/core/providers/google';

export const runtime = 'edge';

const config: AuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google" && profile?.email) {
        return profile.email.endsWith('.vjti.ac.in');
      }
      return false;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      else if (url.startsWith("/")) return new URL(url, baseUrl).toString();
      return baseUrl + "/dashboard";
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export async function GET(request: NextRequest) {
  return await Auth(request, config);
}

export async function POST(request: NextRequest) {
  return await Auth(request, config);
} 