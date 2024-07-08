import dynamic from "next/dynamic";
import { Metadata } from "next";
import { LanguageProvider } from "@/app/contexts/languageContext";
import { MainLayout } from "../layout/mainLayout";

import { MainSectionAbout } from "../components/about/mainSection";
import { TopBackgroundSection } from "../components/about/topBackgroundSection";
import { ProjectMembers } from "../components/about/projectMembers";

const AnaloguePhotography = dynamic(() => import("../components/about/analoguePhotography").then(mod => mod.AnaloguePhotography), { ssr: false })

export const metadata: Metadata = {
    title: 'About'
}

export default function AboutPage() {
    return (
        <LanguageProvider>
            <MainLayout>
                <TopBackgroundSection />
                <MainSectionAbout />
                <AnaloguePhotography />
                <ProjectMembers />
                <h2>Página em Desenvolvimento</h2>
            </MainLayout>
        </LanguageProvider>
    )
}