import NextAuth, { DefaultSession } from 'next-auth';
import { DefaultUser } from 'next-auth/adapters';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      username?: string | null;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    username?: string | null;
  }
}
