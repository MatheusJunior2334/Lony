'use client'

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import styles from '../../styles/blog/mainSection.module.scss';

import mainBlogImage from '../../../public/assets/images/blog/GirlsMainBlogImage.webp';
import lonyBlogLogo from '../../../public/assets/images/blog/LonyMainBlogLogo.webp';

export const MainBlogSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let direction = 1;
        let rafId: number;

        const scrollImage = () => {
            if (!container) return;

            const maxScroll = container.scrollWidth - container.clientWidth;

            container.scrollLeft += direction * 0.5; // Velocidade

            if (container.scrollLeft >= maxScroll || container.scrollLeft <= 0) {
                direction *= -1;
            }

            rafId = requestAnimationFrame(scrollImage);
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    rafId = requestAnimationFrame(scrollImage);
                } else {
                    cancelAnimationFrame(rafId);
                }
            },
            { threshold: 0.1 }
        )

        observer.observe(container);

        return () => {
            cancelAnimationFrame(rafId);
            observer.disconnect();
        }
    }, [])

    return (
        <section id={styles.mainBlogSection}>
            <div className={styles.imageDiv}>
                <div className={styles.imageScrollContainer} ref={scrollRef}>
                    <Image
                        className={styles.blogImage}
                        src={mainBlogImage}
                        alt='Imagem de todas as membras do Lony separadamente'
                        width={3048}
                        height={1244}
                        sizes='(max-width: 480px) 295vw, (max-width: 768px) 195vw, 95vw'
                        priority
                    />
                </div>
                

                <div className={styles.blogTitle}>
                    <h2>Blog</h2>
                    <Image
                        className={styles.logoBlogImage}
                        src={lonyBlogLogo}
                        alt='Logo do Lony'
                        width={469}
                        height={314}
                        loading='lazy'
                    />
                </div>
                
            </div>
        </section>
    )
}