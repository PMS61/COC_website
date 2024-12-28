import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Account } from "next-auth";

interface GoogleProfile {
  email?: string;
  email_verified?: boolean;
  name?: string;
  picture?: string;
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }: { account: Account | null; profile?: GoogleProfile }) {
      if (account?.provider === "google" && profile?.email) {
        return profile.email.endsWith('.vjti.ac.in');
      }
      return false;
    },
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      if (url.startsWith(baseUrl)) return url;
      else if (url.startsWith("/")) return new URL(url, baseUrl).toString();
      return baseUrl + "/dashboard";
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
});

export { handler as GET, handler as POST };