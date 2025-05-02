'use client'

import Image from 'next/image';
import styles from '../../styles/blog/newsletterSection.module.scss';

import girlsNewsletter from '../../../public/assets/images/blog/GirlsNewsletterImage.webp'
import { ArrowIcon } from '../../../public/assets/icons/arrowIcon';

interface NewsletterSectionProps {
    id?: string;
}

export const NewsletterSection = ({ id }: NewsletterSectionProps) => {
    return (
        <section id={id} className={styles.newsletterSection}>
            <div className={styles.leftSide}>
                <span>NEWSLETTER | LONY</span>
                <h2>SAIBA DAS NOVIDADES</h2>
                <p>Receba todas as novidades e notícias do blog em primeira mão, assim que se tornar disponível.</p>

                <form>
                    <input type="email" placeholder='Insira seu e-mail:' />
                    <button>
                        <ArrowIcon />
                    </button>
                </form>
            </div>
            <div className={styles.rightSide}>
                <Image
                    src={girlsNewsletter}
                    alt='Garotas do Lony'
                    width={1600}
                    height={980}
                    sizes='50vw'
                    loading='lazy'
                />
            </div>
        </section>
    )
}