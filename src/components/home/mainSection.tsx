'use client'

import React from 'react';
import Image from 'next/image';
import styles from '../../styles/home/mainSection.module.scss';

import Carousel from '../common/carousel';
import { ButtonPrimary } from '../common/buttonPrimary';
import { HeartDressIcon } from '../../../public/assets/icons/heartDressIcon';
import seatedWoman from '../../../public/assets/images/home/SeatedWoman.webp';

import { useLanguage } from '@/contexts/languageContext';

import { AnimatedComponent } from '../animations/animatedComponent';

export const MainSection = () => {
    const { translations } = useLanguage();

    return (
        <section id={styles.mainSection}>
            <div className={styles.leftSide}>
                <div className={styles.leftSideContent}>
                    <div className={styles.topText}>

                        <span>
                            Ladies of New York
                            <HeartDressIcon />
                        </span>

                        <h1>{translations['home.mainSection.fashionIsOurPassage']} <br /> {translations['home.mainSection.toTheWorldOfDreams']}</h1>

                    </div>

                    <div className={styles.buttonDiv}>
                        <Image
                            src={seatedWoman}
                            alt='Imagem de mulher sentada'
                            width={172}
                            height={380}
                            quality={50}
                            loading='lazy'
                            className={styles.seatedWomanImage}
                        />
                        <ButtonPrimary pageUrl='/loja' text={`${translations['home.mainSection.seeOurWork']}`} />
                    </div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <AnimatedComponent transitionDuration={2} opacity={0}>
                    <Carousel />
                </AnimatedComponent>
            </div>
        </section>
    )
}