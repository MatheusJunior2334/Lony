import React from 'react';

import styles from '../../../styles/about.module.scss'
import Image from 'next/image';

import LadiesPhoto from '../../../../../public/assets/images/LadiesPhotograph.jpg';
import { AnimatedComponent } from '../../animations/animatedComponent';
import { LadiesAboutLogo } from '../../../../../public/assets/images/LadiesAboutLogo';
import { ButtonPrimary } from '../../UI/buttonPrimary';
import { useLanguage } from '../../../../app/contexts/languageContext';

export const AboutSection = () => {
    const { translations } = useLanguage();

    return(
        <section id={styles.aboutSection}>
            <div className={styles.leftSide}>
                <AnimatedComponent opacity={0} transitionDuration={2}>
                    <Image
                        src={LadiesPhoto}
                        alt='Lony members photograph'
                        width={1300}
                        height={900}
                        priority
                    />
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