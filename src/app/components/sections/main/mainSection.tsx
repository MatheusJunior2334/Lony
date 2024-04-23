import Image from 'next/image';
import { LonyLogo } from '../../../../../public/assets/images/LonyLogo';
import styles from './mainSection.module.scss';
import { Carousel } from '../../UI/carousel';
import { ButtonPrimary } from '../../UI/buttonPrimary';
import { DressIcon } from '../../../../../public/assets/icons/DressIcon';

export const MainSection = () => {
    return (
        <section id={styles.mainSection}>
            <div className={styles.leftSide}>
                <div className={styles.leftSideContent}>
                    <div className={styles.topText}>
                        <span>
                            Ladies of New York
                            <DressIcon />
                        </span>

                        <h1>A moda é nossa passagem <br /> para o mundo dos sonhos.</h1>

                    </div>

                    <ButtonPrimary pageUrl='/' text='Conheça o nosso trabalho' />
                </div>
            </div>
            <div className={styles.rightSide}>
                <Carousel />
            </div>
        </section>
    )
}