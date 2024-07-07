import React, { lazy, Suspense } from 'react';

import styles from '../../styles/home/about.module.scss'

import LadiesPhoto from '../../../../public/assets/images/home/LadiesPhotography.webp';
import { AnimatedComponent } from '../animations/animatedComponent';
import { LadiesAboutLogo } from '../../../../public/assets/images/LadiesAboutLogo';
import { ButtonPrimary } from '../common/buttonPrimary';
import { useLanguage } from '@/app/contexts/languageContext';

const Image = lazy(() => import('next/image'));

export const AboutSection = () => {
    const { translations } = useLanguage();

    return(
        <section id={styles.aboutSection}>
            <div className={styles.leftSide}>
                <AnimatedComponent opacity={0} transitionDuration={2}>
                    <Suspense fallback={<div className={styles.loading} />}>
                        <Image
                            src={LadiesPhoto}
                            alt='Fotografia das membras do Lony'
                            width={0}
                            height={0}
                            sizes='(max-width: 1000px) 90vw, 48vw'
                            loading='lazy'
                        />
                    </Suspense>
                </AnimatedComponent>
            </div>

            <div className={styles.rightSide}>
                <h2>{translations['home.about.whoWeAreTitle']}</h2>

                <LadiesAboutLogo />

                <div className={styles.aboutText}>
                    <p>{translations['home.about.aboutFirstLine']}</p>
                    <p>{translations['home.about.aboutSecondLine']}</p>
                </div>

                <ButtonPrimary pageUrl='/about' text={`${translations['home.about.learnMore']}`} />
            </div>
        </section>
    )
}