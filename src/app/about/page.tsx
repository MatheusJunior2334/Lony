import dynamic from "next/dynamic";
import { Metadata } from "next";
import { LanguageProvider } from "@/contexts/languageContext";
import { MainLayout } from "@/layout/mainLayout";

import { TopBackgroundSection } from "@/components/about/topBackgroundSection";
import { MainSectionAbout } from "@/components/about/mainSection";
import { AnaloguePhotography } from "@/components/about/analoguePhotography";
import { ProjectMembers } from "@/components/about/projectMembers";
import { CorePrinciples } from "@/components/home/corePrinciples";

export const metadata: Metadata = {
    title: 'Sobre',
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
                <ProjectMembers />
                <CorePrinciples />
            </MainLayout>
        </LanguageProvider>
    )
}