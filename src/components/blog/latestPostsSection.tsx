import styles from '../../styles/blog/latestPostsSection.module.scss';

import { blogPosts } from '@/data/blogPosts';

import { HighHeelIcon } from '../../../public/assets/icons/highHeelIcon';
import BlogCard from './blogCard';

export const LatestPostsSection = () => {
    return (
        <section id={styles.latestPostsSection}>
            <h3>&quot;Somos um grupo de garotas comprometidas com a moda e o bem-estar&quot;</h3>

            <HighHeelIcon />

            <div className={styles.midDiv}>
                <span className={styles.latestText}>Últimos posts:</span>

                <div className={styles.postsDiv}>
                    {blogPosts.slice(0, 3).map(post => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
            
            <HighHeelIcon />

        </section>
    )
}