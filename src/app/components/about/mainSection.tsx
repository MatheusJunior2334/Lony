'use client'

import React, { lazy, Suspense } from 'react';
import styles from '../../styles/about/mainSection.module.scss';

import LadiesPhoto from '../../../../public/assets/images/about/LadiesPhotographyAbout.jpg';

import { AnimatedComponent } from '../animations/animatedComponent';
import { useLanguage } from '@/app/contexts/languageContext';

const Image = lazy(() => import('next/image'))

export const MainSectionAbout = () => {
    const { translations } = useLanguage();

    return (
        <section id={styles.mainSectionAbout}>
             <div className={styles.leftSide}>
                <div className={styles.aboutTitle}>
                    <h2>{translations['about.mainSection.aboutTitle']}</h2>
                    <hr />
                </div>

                <div className={styles.aboutText}>
                    <p>{translations['home.about.aboutFirstLine']}</p>
                    <p>{translations['home.about.aboutSecondLine']}</p>
                </div>
            </div>

            <div className={styles.rightSide}>
                <AnimatedComponent opacity={0} transitionDuration={2}>
                    <Suspense fallback={<div className={styles.loading} />}>
                        <Image
                            src={LadiesPhoto}
                            alt='Lony members photography'
                            width={1300}
                            height={900}
                            priority
                        /> 
                    </Suspense>
                </AnimatedComponent>
            </div>
        </section>
    )
}