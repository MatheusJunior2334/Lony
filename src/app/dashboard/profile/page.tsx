'use client'

import LoadingPage from "@/app/loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Profile() {
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
            <h2>Profile</h2>
            <p>Name: {session?.user?.name}</p>
            <p>Email: {session?.user?.email}</p>
            <a href="/dashboard">Back do Dashboard</a>
        </div>
    )
}