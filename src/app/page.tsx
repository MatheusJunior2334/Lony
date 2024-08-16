'use client'

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (path === '/') {
      router.push('/home')
    } else if (path === '/sobre') {
      router.push('/sobre');
    }
  }, [path, router])
}
