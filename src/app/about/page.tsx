import { Metadata } from "next";
import { LanguageProvider } from "@/app/contexts/languageContext";
import { MainLayout } from "../layout/mainLayout";

import { TopBackgroundSection } from "../components/about/topBackgroundSection";
import { MainSectionAbout } from "../components/about/mainSection";
import { AnaloguePhotography } from "../components/about/analoguePhotography";

import { ProjectMembers } from "../components/about/projectMembers";


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