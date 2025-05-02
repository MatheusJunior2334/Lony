import React from "react";

import { MainBlogSection } from "@/components/blog/mainSection";
import { LatestPostsSection } from "@/components/blog/latestPostsSection";
import { AboutBlogSection } from "@/components/blog/aboutSection";
import { NewsletterSection } from "@/components/blog/newsletterSection";

import { BlogLayout } from "@/layout/blogLayout";

export default function BlogPage() {
    return (
        <BlogLayout>
            <MainBlogSection />
            <LatestPostsSection />
            <AboutBlogSection />
            <NewsletterSection id="newsletterSectionId" />
        </BlogLayout>
    )
}