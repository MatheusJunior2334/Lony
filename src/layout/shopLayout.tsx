import { ScrollToTopButton } from "@/components/common/scrollToTopButton"

export const ShopLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <main>{children}</main>

            <ScrollToTopButton />
        </>
    )
}