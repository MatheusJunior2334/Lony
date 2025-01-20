import { HeaderMain } from "@/components/layout/headerMain";
import { FooterMain } from "@/components/layout/footerMain";
import { ScrollToTopButton } from "@/components/common/scrollToTopButton";

export const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <HeaderMain />
            <main>{children}</main>
            <hr style={{ height: '30px', backgroundColor: '#111' }} />
            <FooterMain />

            <ScrollToTopButton />
        </>
    )
}