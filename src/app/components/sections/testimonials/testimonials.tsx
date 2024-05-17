'use client'

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from '../../../styles/testimonials.module.scss';
import { useLanguage } from '../../../../app/contexts/languageContext';

import { InvertedCommasIcon } from '../../../../../public/assets/icons/invertedCommasIcon';
import { DragIcon } from '../../../../../public/assets/icons/dragIcon';

import UserDefaultImage from '../../../../../public/assets/images/UserDefaultImage.png';
import BiankaImage from '../../../../../public/assets/images/BiankaImage.png';
import MatheusImage from '../../../../../public/assets/images/DunbanImage.png';

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
                <div>
                    <Image
                        src={userImage || UserDefaultImage}
                        alt={`${userName} image`}
                        width={140}
                        height={140}
                        priority
                    />
                    <h5>{userName}</h5>
                </div>
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
                <h4>{translations['home.testimonials.dragToTheSide']}</h4>
                <DragIcon />
            </div>
        </section>
    )
}