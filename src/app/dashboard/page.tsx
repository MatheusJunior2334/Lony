'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LoadingPage from '../loading';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <LoadingPage />
  }

  if (status === 'unauthenticated') {
    router.push('/auth/login');
    return null;
  }

  return (
    <div>
      <h1>Welcome to your dashboard, {session?.user?.name}</h1>
      <ul>
        <li><a href="/dashboard/profile">Profile</a></li>
      </ul>
    </div>
  );
}
