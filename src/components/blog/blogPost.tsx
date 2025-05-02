import Image from "next/image";
import { BlogPost as BlogPostType } from "@/types/blog";
import DragDropGame from "../games/dragDropGame";

export default function BlogPost({ post }: { post: BlogPostType }) {
    return (
        <article>
            <h1>{post.title}</h1>
            <Image
                src={post.coverImage}
                alt={post.title}
                width={500}
                height={300}
                priority
            />
            {post.content.map((item, index) =>
                typeof item === "string" ? (
                    <p key={index}>{item}</p>
                ) : (
                    <Image
                        key={index}
                        src={item.image}
                        alt={item.alt}
                        width={200}
                        height={200}
                        loading="lazy"
                    />
                )
            )}

            {post.game && (
                <section>
                    <h2>{post.game.title}</h2>
                    <p>{post.game.instructions}</p>
                    <DragDropGame
                        title={post.game.title}
                        instructions={post.game.instructions}
                        categories={post.game.categories}
                        items={post.game.items}
                    />
                </section>
            )}
        </article>
    )
}