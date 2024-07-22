import NextAuth, { NextAuthOptions, Session, User } from 'next-auth';
import { JWT as NextAuthJWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/lib/prisma';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      username: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    username: string;
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt' as 'jwt', // Ensure correct typing for session strategy
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: NextAuthJWT }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.username = token.username;
      }
      return session;
    },
    async jwt({ token, user }: { token: NextAuthJWT; user?: User }) {
      if (user) {
        token.id = user.id;
        token.username = user.username as string;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };