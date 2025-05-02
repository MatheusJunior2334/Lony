import { HeaderBlog } from "@/components/shared/headerBlog";
import { FooterBlog } from "@/components/shared/footerBlog";
import { ScrollToTopButton } from "@/components/common/scrollToTopButton";

export const BlogLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <HeaderBlog />
            <main>{children}</main>
            <FooterBlog />

            <ScrollToTopButton />
        </>
    )
}