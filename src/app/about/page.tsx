import { Metadata } from "next";
import Link from "next/link";
import { LanguageProvider } from "../contexts/languageContext";
import { Header } from "../components/layout/header/header";
import { FooterHome } from "../components/layout/footer-home/footerHome";

export const metadata: Metadata = {
    title: 'About'
}

export default function AboutPage() {
    return (
        <LanguageProvider>
            <main>
                <Header />
                <h2>Página em Desenvolvimento</h2>
                <p>Volte mais tarde :)</p>
                <Link href="/home"><button>Clique aqui para voltar para a tela inicial</button></Link>
                <FooterHome />
            </main>
        </LanguageProvider>
    )
}