import { blogPosts } from "@/data/blogPosts";
import BlogPost from "@/components/blog/blogPost";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
    params: {
        slug: string;
    }
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
    const post = blogPosts.find((p) => p.slug === params.slug);
    return {
        title: post ? post.title : "Post não encontrado"
    }
}

export default function BlogPostPage({ params }: Props){
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) return notFound();

    return <BlogPost post={post} />
}