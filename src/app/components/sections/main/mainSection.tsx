import Image from 'next/image';
import styles from '../../../styles/mainSection.module.scss';
import { Carousel } from '../../UI/carousel';
import { ButtonPrimary } from '../../UI/buttonPrimary';
import { DressIcon } from '../../../../../public/assets/icons/dressIcon';
import seatedWoman from '../../../../../public/assets/images/SeatedWoman.png';
import { useLanguage } from '../../../../app/contexts/languageContext';

import { AnimatedComponent } from '../../animations/animatedComponent';

export const MainSection = () => {
    const { translations } = useLanguage();

    return (
        <section id={styles.mainSection}>
            <div className={styles.leftSide}>
                <div className={styles.leftSideContent}>
                    <div className={styles.topText}>

                        <span>
                            Ladies of New York
                            <DressIcon />
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
                            priority
                            className={styles.seatedWomanImage}
                        />
                        <ButtonPrimary pageUrl='/' text={`${translations['home.mainSection.seeOurWork']}`} />
                    </div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <AnimatedComponent initialTranslateX={50} transitionDuration={2} opacity={0} animateOnce>
                    <Carousel />
                </AnimatedComponent>
            </div>
        </section>
    )
}