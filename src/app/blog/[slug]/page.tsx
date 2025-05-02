import { blogPosts } from "@/data/blogPosts";
import BlogPost from "@/components/blog/blogPost";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    return {
        title: post ? post.title : "Post não encontrado"
    }
}

export default async function BlogPostPage({ params }: { params: Params }){
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) return notFound();

    return <BlogPost post={post} />
}