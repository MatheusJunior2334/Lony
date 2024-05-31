'use client'

import Image from 'next/image';
import styles from '../../styles/about/mainSection.module.scss';

import LadiesPhoto from '../../../../public/assets/images/about/LadiesPhotographAbout.png';

import { AnimatedComponent } from '../animations/animatedComponent';
import { useLanguage } from '@/app/contexts/languageContext';

export const MainSectionAbout = () => {
    const { translations } = useLanguage();

    return (
        <section id={styles.mainSectionAbout}>
             <div className={styles.leftSide}>
                <div className={styles.aboutTitle}>
                    <h2>Sobre nós</h2>
                    <hr />
                </div>

                <div className={styles.aboutText}>
                    <p>{translations['home.about.aboutFirstLine']}</p>
                    <p>{translations['home.about.aboutSecondLine']}</p>
                </div>
            </div>

            <div className={styles.rightSide}>
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
        </section>
    )
}