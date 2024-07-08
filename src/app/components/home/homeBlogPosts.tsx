import React, { lazy, Suspense } from 'react';
import { StaticImageData } from 'next/image';
import styles from '../../styles/home/homeBlogPosts.module.scss';
import Link from 'next/link';

import FashionStyleThumbnail from '../../../../public/assets/images/blog/FashionStyleThumbnail.webp'
import NewTendenciesThumbnail from '../../../../public/assets/images/blog/NewTendenciesThumbnail.webp';
import AssembleWardrobeThumbnail  from '../../../../public/assets/images/blog/AssembleWardrobeThumbnail.webp';
import { useLanguage } from '@/app/contexts/languageContext';

const Image = lazy(() => import('next/image'));

interface PostsDesignProps {
    thumbnail: StaticImageData;
    creator: string;
    postMonth: string;
    postYear: string;
    postTitle: string;
    postTheme: string;
    postUrl: string;
}

const PostsDesign = ({
    thumbnail,
    creator,
    postMonth,
    postYear,
    postTitle,
    postTheme,
    postUrl
}: PostsDesignProps) => {
    const { translations } = useLanguage();

    const getText = (key: string) => {
        switch (key) {
            case 'identity':
                return translations['home.homeBlogPosts.article.postTheme.identity'];
            case 'adaptation':
                return translations['home.homeBlogPosts.article.postTheme.adaptation'];
            case 'practicality':
                return translations['home.homeBlogPosts.article.postTheme.practicality'];
            default:
                return '';
        }
    }

    return (
        <article>
            <Suspense fallback={<div className={styles.loader}><span /></div>}>
                <Image
                    src={thumbnail}
                    alt={postTitle}
                    width={350}
                    height={180}
                    sizes='(max-width: 768px) 340px, (max-width: 1000px) 330px, (min-width: 1280px) 290px, 350px'
                    className={styles.imagePlace}
                    loading='lazy'
                />
            </Suspense>
            <div className={styles.postInfo}>
                <em>{translations['home.homeBlogPosts.article.by']} {creator}</em>
                <time className={styles.postDate} dateTime={`${postYear}-${postMonth}`}>
                    <span>{postMonth}</span>
                    <span>{postYear}</span>
                </time>
                <strong className={styles.postTitle} title={postTitle}>{postTitle}</strong>
                <div className={`${styles.postTheme} ${postTheme ? styles[postTheme] : ''}`}>
                    <span>{getText(postTheme)}</span>
                </div>

                <hr />

                <Link href={postUrl} aria-label={`Leia mais sobre ${postTitle}`}>
                    <span>{translations['home.homeBlogPosts.article.readMore']}</span>
                </Link>
            </div>
        </article>
    )
}

const PostsList = () => {
    const { translations } = useLanguage();

    const postsInfo: PostsDesignProps[] = [
        {
            thumbnail: FashionStyleThumbnail,
            creator: 'Bianka Araújo',
            postMonth: translations['home.homeBlogPosts.article.postMonth.may'],
            postYear: '2024',
            postTitle: translations['home.homeBlogPosts.article1.postTitle'],
            postTheme: 'identity',
            postUrl: ''
        },
        {
            thumbnail: NewTendenciesThumbnail,
            creator: 'Ester Melo',
            postMonth: translations['home.homeBlogPosts.article.postMonth.may'],
            postYear: '2024',
            postTitle: translations['home.homeBlogPosts.article2.postTitle'],
            postTheme: 'adaptation',
            postUrl: ''
        },
        {
            thumbnail: AssembleWardrobeThumbnail,
            creator: 'Larissa Ferreira',
            postMonth: translations['home.homeBlogPosts.article.postMonth.may'],
            postYear: '2024',
            postTitle: translations['home.homeBlogPosts.article3.postTitle'],
            postTheme: 'practicality',
            postUrl: ''
        }
    ]

    return (
        <>
            {postsInfo.map((post, index) => (
                <PostsDesign key={index} {...post} />
            ))}
        </>
    )
}

export const HomeBlogPosts = () => {
    const { translations } = useLanguage();

    return (
        <section id={styles.homeBlogPosts}>
            <h2>{translations['home.homeBlogPosts.ourPostsTitle']}</h2>

            <div className={styles.blogPosts}>
                <PostsList />
            </div>
        </section>
    )
}