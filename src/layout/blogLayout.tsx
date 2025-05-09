import { HeaderBlog } from "@/components/shared/headerBlog";
import { NewsletterSection } from "@/components/blog/newsletterSection";
import { FooterBlog } from "@/components/shared/footerBlog";
import { ScrollToTopButton } from "@/components/common/scrollToTopButton";

export const BlogLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <HeaderBlog />
            <main>
                {children}
                <NewsletterSection id="newsletterSectionId" />
            </main>
            <FooterBlog />

            <ScrollToTopButton />
        </>
    )
}