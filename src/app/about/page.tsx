'use client'

import Head from "next/head";
import { AboutSection } from "../components/sections/about/about";

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>Lony - Quem Somos?</title>
                <meta name="description" content="Conheça mais sobre as integrantes da Lony" />
                <meta property="og:title" content="Lony - Quem Somos?" />
                <meta property="og:description" content="Conheça mais sobre as integrantes da Lony" />
            </Head>
            <AboutSection />
        </>
    )
}