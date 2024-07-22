'use client'

import { signOut } from "next-auth/react"

export const LogoutBtn = () => {
    return (
        <button onClick={() => signOut()}>Sair da conta</button>
    )
}