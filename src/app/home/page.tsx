'use client'

import React from "react";
import dynamic from "next/dynamic";

import { MainSection } from "../components/home/mainSection";
import { OurWorkSection } from "../components/home/ourWork";
import { HomeBlogPosts } from "../components/home/homeBlogPosts";
import { Section4 } from "../components/home/section4";
import { AboutSection } from "../components/home/about";
import { CorePrinciples } from "../components/home/corePrinciples";

import { LanguageProvider } from "../contexts/languageContext";
import { MainLayout } from "../layout/mainLayout";

const Testimonials = dynamic(() => import('../components/home/testimonials').then(mod => mod.Testimonials), {
    ssr: false
})

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