'use client'

import Link from "next/link"
import { AboutSection } from "./components/sections/about/about"

export default function Error404() {

    return (
        <>
            <h2>Página errada, volte para a tela inicial:</h2>
            <Link href="/home"><button>clique aqui</button></Link>
        </>
    )
}