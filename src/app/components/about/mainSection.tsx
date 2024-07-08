'use client'

import React, { Suspense, lazy } from 'react';
import styles from '../../styles/about/mainSection.module.scss';

import LadiesPhoto from '../../../../public/assets/images/about/LadiesPhotographyAbout.webp';

import { useLanguage } from '@/app/contexts/languageContext';
import { AnimatedComponent } from '../animations/animatedComponent';

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
                <Suspense fallback={<div className={styles.loader}><span /></div>}>
                    <AnimatedComponent opacity={0} transitionDuration={2}>
                        <Image
                            src={LadiesPhoto}
                            alt='Fotografia das membras do Lony'
                            width={600}
                            height={400}
                            sizes='(max-width: 1000px) 90vw, 46.5vw'
                            priority
                        />
                    </AnimatedComponent>
                </Suspense>
            </div>
        </section>
    )
}