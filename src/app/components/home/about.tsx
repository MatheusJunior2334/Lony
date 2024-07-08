import React, { lazy, Suspense } from 'react';

import styles from '../../styles/home/about.module.scss'

import LadiesPhoto from '../../../../public/assets/images/home/LadiesPhotography.webp';
import { LadiesAboutLogo } from '../../../../public/assets/images/LadiesAboutLogo';
import { ButtonPrimary } from '../common/buttonPrimary';
import { useLanguage } from '@/app/contexts/languageContext';
import dynamic from 'next/dynamic';
import { AnimatedComponent } from '../animations/animatedComponent';

const Image = lazy(() => import('next/image'));

export const AboutSection = () => {
    const { translations } = useLanguage();

    return(
        <section id={styles.aboutSection}>
            <div className={styles.leftSide}>
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