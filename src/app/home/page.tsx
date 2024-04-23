'use client'

import React, { useState, useEffect } from "react";

import { Header } from "../components/layout/header/header";
import { MainSection } from "../components/sections/main/mainSection";
import { OurWorkSection } from "../components/sections/our-work/ourWork";
import { AboutSection } from "../components/sections/about/about";
import { Footer } from "../components/layout/footer/Footer";

export default function HomePage() {
    return (
        <main>
            <Header />
            <MainSection />
            <OurWorkSection />
            <AboutSection />
        </main>
    )
}