import Image from "next/image";
import { BlogPost as BlogPostType } from "@/types/blog";
import DragDropGame from "../games/dragDropGame";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "./blogCard";

import styles from '../../styles/blog/blogPost.module.scss';
import Link from "next/link";

export default function BlogPost({ post }: { post: BlogPostType }) {
    return (
        <article id={styles.blogPostPage}>
            <div className={styles.postMainSide}>
                <div className={styles.leftSide}>
                    <header className={styles.topHeader}>
                        <span className={styles.topLonyName}>Ladies of New York</span>
                        <ul>
                            <li><Link href={"CRIAR PÁGINA AINDA"}>{post.theme}</Link></li>
                        </ul>
                        <h1>{post.title}</h1>
                        <span className={styles.postDateMadeBy}>
                            {post.postDay} de {post.postMonth} de {post.postYear} - Escrito por {post.author}
                        </span>
                    </header>

                    <div className={styles.mainPostImage}>
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            width={500}
                            height={300}
                            priority
                        />
                        <span>Fonte:{" "}<a href={post.coverImageSourceLink} target="_blank" rel="noopener noreferrer">{post.coverImageSource}</a></span>
                    </div>

                    {post.content.map((div, index) => (
                        <div key={index} className={styles.divBlock}>
                            <h2>{div.subtitle}</h2>

                            {div.image && (
                                <div className={styles.divImage}>
                                    <Image
                                        src={div.image}
                                        alt={div.imageAlt || div.subtitle}
                                        width={900}
                                        height={599}
                                        loading="lazy"
                                    />
                                    {div.imageSource && (
                                        <span>Fonte: {" "}<a href={div.imageSourceLink} target="_blank" rel="noopener noreferrer">{div.imageSource}</a></span>
                                    )}
                                </div>
                            )}

                            
                            {div.paragraphsBefore?.map((para, pIndex) => (
                                <p key={`before-${pIndex}`}>{para}</p>
                            ))}

                            {div.listItems && div.listItems.length > 0 && (
                                <div className={styles.listItemsDiv}>
                                    {div.listTitle && <h3>{div.listTitle}</h3>}
                                    <ul>
                                        {div.listItems.map((item, liIndex) => (
                                            <li key={liIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {div.paragraphsAfter?.map((para, pIndex) => (
                                <p key={`after-${pIndex}`}>{para}</p>
                            ))}
                        </div>
                    ))}

                {post.game && (
                    <DragDropGame
                        title={post.game.title}
                        instructions={post.game.instructions}
                        categories={post.game.categories}
                        items={post.game.items}
                    />
                )}
                </div>

                <div className={styles.rightSide}>
                    <HorizontalRowWord text="últimos posts" />
                    <div className={styles.postsDiv}>
                        {blogPosts.filter(p => p.slug !== post.slug).slice(-3).reverse().map(post => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}

const HorizontalRowWord = ({ text }: { text: string }) => {
    return (
        <h3 className={styles.horizontalRowWord}><span>{text}</span></h3>
    )
}