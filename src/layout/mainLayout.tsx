import { HeaderMain } from "@/components/shared/headerMain";
import { FooterMain } from "@/components/shared/footerMain";
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