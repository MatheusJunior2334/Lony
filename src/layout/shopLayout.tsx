import { HeaderShop } from "@/components/layout/headerShop"
import { FooterShop } from "@/components/layout/footerShop"
import { ScrollToTopButton } from "@/components/common/scrollToTopButton"

export const ShopLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <HeaderShop />
            <main>{children}</main>
            <FooterShop />
            
            <ScrollToTopButton />
        </>
    )
}