'use client'

import React, { lazy, Suspense } from 'react';
import { StaticImageData } from 'next/image';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../styles/home/testimonials.module.scss';
import { useLanguage } from '@/app/contexts/languageContext';

import { InvertedCommasIcon } from '../../../../public/assets/icons/invertedCommasIcon';
import { DragIcon } from '../../../../public/assets/icons/dragIcon';

import UserDefaultImage from '../../../../public/assets/images/testimonials/UserDefaultImage.webp';
import MatheusImage from '../../../../public/assets/images/testimonials/DunbanImage.webp';

const Image = lazy(() => import('next/image'));

interface TestimonialDesignProps {
    userText: string;
    userImage?: StaticImageData;
    userName: string;
}

const TestimonialDesign = ({ userText, userImage, userName }: TestimonialDesignProps) => {
    return (
        <article>
            <div className={styles.invertedCommas}>
                <InvertedCommasIcon />
            </div>
            <div className={styles.text}>
                <p>{userText}</p>
            </div>
            <div className={styles.userInfo}>
                <figure>
                    <Suspense fallback={<div className={styles.loading} />}>
                        <Image
                            src={userImage || UserDefaultImage}
                            alt={`Imagem de ${userName}`}
                            width={70}
                            height={70}
                            loading='lazy'
                        />
                    </Suspense>
                    <figcaption>{userName}</figcaption>
                </figure>
            </div>

            <div className={styles.stripes} />
        </article>
    )
}

const TestimonialsList = () => {
    const { translations } = useLanguage();

    const testimonialsInfo: TestimonialDesignProps[] = [
        { userText: translations['home.testimonials.matheusText'], userImage: MatheusImage, userName: 'Matheus Júnior' },
        { userText: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', userName: 'Unknown' },
        { userText: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', userName: 'Unknown' },
    ]

    return (
        <Swiper
            className={styles.swiperContent}
            spaceBetween={50}
            slidesPerView='auto'
            grabCursor={true}
            pagination={{ clickable: true }}
            breakpoints={{
                0: {
                    centeredSlides: true
                },
                601: {
                    centeredSlides: false
                }
            }}
        >
            {testimonialsInfo.map((testimonial, index) => (
                <SwiperSlide key={index} className={styles.testimonialElement}>
                    <TestimonialDesign {...testimonial} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export const Testimonials = () => {
    const { translations } = useLanguage();

    return (
        <section id={styles.testimonials}>
            <h2>{translations['home.testimonials.testimonialsTitle']}</h2>
            <div className={styles.swiperContainer}>
                <TestimonialsList />
            </div>
            <div className={styles.dragDiv}>
                <h3>{translations['home.testimonials.dragToTheSide']}</h3>
                <DragIcon />
            </div>
        </section>
    )
}