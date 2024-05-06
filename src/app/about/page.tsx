'use client'

import Link from "next/link";
import { AboutSection } from "../components/sections/about/about";
import { LanguageProvider } from "../contexts/languageContext";

export default function AboutPage() {
    return (
        <LanguageProvider>
            <main>
                <h2>Página em Desenvolvimento</h2>
                <p>Volte mais tarde :)</p>
                <Link href="/home"><button>Clique aqui para voltar para a tela inicial</button></Link>
            </main>
        </LanguageProvider>
    )
}