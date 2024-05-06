'use client'

import React, { useState, useEffect } from "react";

import { Header } from "../components/layout/header/header";
import { MainSection } from "../components/sections/main/mainSection";
import { OurWorkSection } from "../components/sections/our-work/ourWork";
import { AboutSection } from "../components/sections/about/about";
import { Section4 } from "../components/sections/section4/section4";
import { Footer } from "../components/layout/footer/footer";

import { LanguageProvider } from "../contexts/languageContext";
import LoadingPage from "../loading";

export default function HomePage() {
    return (
        <LanguageProvider>
            <main>
                <Header />
                <MainSection />
                <OurWorkSection />
                <AboutSection />
                <Section4 />
                <Footer />
            </main>
        </LanguageProvider>
    )
}