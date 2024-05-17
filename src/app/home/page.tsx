'use client'

import React from "react";

import { Header } from "../components/layout/header/header";
import { MainSection } from "../components/sections/main/mainSection";
import { OurWorkSection } from "../components/sections/our-work/ourWork";
import { HomeBlogPosts } from "../components/sections/home-blog-posts/homeBlogPosts";
import { Section4 } from "../components/sections/section4/section4";
import { AboutSection } from "../components/sections/about/about";
import { CorePrinciples } from "../components/sections/core-principles/corePrinciples";
import { Testimonials } from "../components/sections/testimonials/testimonials";
import { FooterHome } from "../components/layout/footer-home/footerHome";

import { ScrollToTopButton } from "../components/UI/scrollToTopButton";

import { LanguageProvider } from "../contexts/languageContext";

export default function HomePage() {
    return (
        <LanguageProvider>
            <main>
                <Header />
                <MainSection />
                <OurWorkSection />
                <HomeBlogPosts />
                <Section4 />
                <AboutSection />
                <CorePrinciples />
                <Testimonials />
                <FooterHome />

                <ScrollToTopButton />
            </main>
        </LanguageProvider>
    )
}