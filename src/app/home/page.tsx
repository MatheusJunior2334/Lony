'use client'

import React from "react";

import { Header } from "../components/layout/header/header";
import { MainSection } from "../components/sections/main/mainSection";
import { OurWorkSection } from "../components/sections/our-work/ourWork";
import { AboutSection } from "../components/sections/about/about";
import { Section4 } from "../components/sections/section4/section4";
import { FooterHome } from "../components/layout/footer-home/footerHome";

import { LanguageProvider } from "../contexts/languageContext";

export default function HomePage() {
    return (
        <LanguageProvider>
            <main>
                <Header />
                <MainSection />
                <OurWorkSection />
                <AboutSection />
                <Section4 />
                <FooterHome />
            </main>
        </LanguageProvider>
    )
}