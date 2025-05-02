import { blogPosts } from "@/data/blogPosts";
import BlogPost from "@/components/blog/blogPost";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        slug: string;
    }
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }))
}

export default function BlogPostPage({ params }: PageProps){
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) return notFound();

    return <BlogPost post={post} />
}