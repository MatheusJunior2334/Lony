import { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "@/app/contexts/languageContext";
import { MainLayout } from "../layout/mainLayout";

export const metadata: Metadata = {
    title: 'About'
}

export default function AboutPage() {
    return (
        <LanguageProvider>
            <MainLayout>
                <h2>Página em Desenvolvimento</h2>
                <p>Volte mais tarde :)</p>
                <Link href="/home"><button>Clique aqui para voltar para a tela inicial</button></Link>
            </MainLayout>
        </LanguageProvider>
    )
}