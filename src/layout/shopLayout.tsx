import { HeaderShop } from "@/components/shared/headerShop"
import { FooterShop } from "@/components/shared/footerShop"
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