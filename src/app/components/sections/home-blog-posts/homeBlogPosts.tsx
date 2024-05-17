import Image, { StaticImageData } from 'next/image';
import styles from '../../../styles/homeBlogPosts.module.scss';
import Link from 'next/link';

import FashionStyleThumbnail from '../../../../../public/assets/images/blog/FashionStyleThumbnail.jpg'
import NewTendenciesThumbnail from '../../../../../public/assets/images/blog/NewTendenciesThumbnail.jpg';
import AssembleWardrobeThumbnail  from '../../../../../public/assets/images/blog/AssembleWardrobeThumbnail.jpg';
import { useLanguage } from '../../../../app/contexts/languageContext';

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
            <Image
                src={thumbnail}
                width={600}
                height={400}
                alt={`${postTitle}`}
                className={styles.imagePlace}
                priority
            />
            <div className={styles.postInfo}>
                <h5>{translations['home.homeBlogPosts.article.by']} {creator}</h5>
                <div className={styles.postDate}>
                    <span>{postMonth}</span>
                    <span>{postYear}</span>
                </div>
                <h4 className={styles.postTitle} title={postTitle}>{postTitle}</h4>
                <div className={`${styles.postTheme} ${postTheme ? styles[postTheme] : ''}`}>
                    <p>{getText(postTheme)}</p>
                </div>

                <hr />

                <Link href={postUrl}>
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
            creator: 'Ester',
            postMonth: translations['home.homeBlogPosts.article.postMonth.may'],
            postYear: '2024',
            postTitle: translations['home.homeBlogPosts.article2.postTitle'],
            postTheme: 'adaptation',
            postUrl: ''
        },
        {
            thumbnail: AssembleWardrobeThumbnail,
            creator: 'Larissa',
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