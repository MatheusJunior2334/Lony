import dynamic from "next/dynamic";
import { HeaderMain } from "../components/layout/headerMain";
import { ScrollToTopButton } from "../components/common/scrollToTopButton";

const FooterMain = dynamic(() => import('../components/layout/footerMain').then(mod => mod.FooterMain), {
    ssr: false
});

export const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <HeaderMain />
            <main>{children}</main>
            <FooterMain />

            <ScrollToTopButton />
        </>
    )
}