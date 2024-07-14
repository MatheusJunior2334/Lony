import React from "react";

import { MainSection } from "../components/home/mainSection";
import { OurWorkSection } from "../components/home/ourWork";
import { HomeBlogPosts } from "../components/home/homeBlogPosts";
import { Section4 } from "../components/home/section4";
import { AboutSection } from "../components/home/about";
import { CorePrinciples } from "../components/home/corePrinciples";
import { Testimonials } from "../components/home/testimonials";

import { LanguageProvider } from "../contexts/languageContext";
import { MainLayout } from "../layout/mainLayout";

export default function HomePage() {
    return (
        <LanguageProvider>
            <MainLayout>
                <MainSection />
                <OurWorkSection />
                <HomeBlogPosts />
                <Section4 />
                <AboutSection />
                <CorePrinciples />
                <Testimonials />
            </MainLayout>
        </LanguageProvider>
    )
}