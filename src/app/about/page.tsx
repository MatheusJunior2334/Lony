import dynamic from "next/dynamic";
import { Metadata } from "next";
import { LanguageProvider } from "@/contexts/languageContext";
import { MainLayout } from "@/layout/mainLayout";

import { MainSectionAbout } from "@/components/about/mainSection";
import { ProjectMembers } from "@/components/about/projectMembers";

const TopBackgroundSection = dynamic(() => import("@/components/about/topBackgroundSection").then(mod => mod.TopBackgroundSection), {
    ssr: true
})
const AnaloguePhotography = dynamic(() => import("@/components/about/analoguePhotography").then(mod => mod.AnaloguePhotography), { 
    ssr: false 
})

export const metadata: Metadata = {
    title: 'About',
    icons: {
        icon: '/icon.ico'
    }
}

export default function AboutPage() {
    return (
        <LanguageProvider>
            <MainLayout>
                <TopBackgroundSection />
                <MainSectionAbout />
                <AnaloguePhotography />
                <h2>Página em Desenvolvimento</h2>
            </MainLayout>
        </LanguageProvider>
    )
}