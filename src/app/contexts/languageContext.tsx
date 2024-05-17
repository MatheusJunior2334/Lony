'use client'

import React, { createContext, useContext, useState, useEffect } from "react";

import LoadingPage from "../loading";

interface LanguageContextType {
    language: string;
    translations: Record<string, string>;
    changeLanguage: (newLanguage: string) => void;
    isLanguageConfirmed: boolean;
    confirmLanguage: () => void;
    handleChangeLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<string>(() => {
        if (typeof window !== 'undefined') {
            const savedLanguage = localStorage.getItem("language");
            return savedLanguage || "pt"
        }
        return "pt";
    });
    const [isLanguageConfirmed, setIsLanguageConfirmed] = useState<boolean>(false);
    const [translations, setTranslations] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadTranslations = async () => {
            setIsLoading(true);
            let loadedTranslations: Record<string, string> = {};

            if (language === 'pt') {
                const response = await import('../locales/pt.json');
                loadedTranslations = response.default
            } else if (language === 'en') {
                const response = await import('../locales/en.json');
                loadedTranslations = response.default
            } else if (language === 'de') {
                const response = await import('../locales/de.json');
                loadedTranslations = response.default
            }

            setTranslations(loadedTranslations);
            setIsLoading(false);
        }

        loadTranslations()
    }, [language])

    const changeLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
        if (typeof window !== 'undefined') {
            localStorage.setItem("language", newLanguage);
        }
    }

    const confirmLanguage = () => {
        setIsLanguageConfirmed(true);
    }

    const handleChangeLanguage = () => {
        setIsLanguageConfirmed(false);
    }

    return (
        <LanguageContext.Provider value={{ language, translations, changeLanguage, isLanguageConfirmed, confirmLanguage, handleChangeLanguage }}>
            {children}
            {isLoading && <LoadingPage />}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context;
}