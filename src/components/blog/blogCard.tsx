'use client'

import Image from "next/image";
import styles from '../../styles/blog/blogCard.module.scss';

import Link from "next/link"
import { BlogPost } from "@/types/blog"

interface Props {
    post: BlogPost;
}

export default function BlogCard({ post }: Props) {
    return (
        <Link href={`/blog/${post.slug}`} className={styles.blogCard}>
            <article>
                <time dateTime={`${post.postYear}-${post.postMonth}`}>
                    <span>{post.postMonth.substring(0, 3)}</span>
                    <span>{post.postYear}</span>
                </time>

                <Image src={post.coverImage} alt={post.title} width={500} height={350} priority />
                <div className={styles.textDiv}>
                    <h4>{post.title}</h4>
                    <span>{post.author} - {post.theme}</span>
                </div>
            </article>
        </Link>
    )
}