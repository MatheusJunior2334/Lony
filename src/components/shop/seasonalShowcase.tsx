import styles from '../../styles/shop/seasonalShowcase.module.scss';
import Image from "next/image";

import SeasonalImage from '../../../public/assets/images/shop/SeasonalImage.png'
import { ButtonPrimary } from '../common/buttonPrimary';

export const SeasonalShowcase = () => {
    return (
        <section id={styles.seasonalShowcaseSection}>
            <div className={styles.leftSide}>
                <div className={styles.topText}>
                    <h2>Para quem inspira</h2>
                    <h2><span>Beleza</span> todos os dias</h2>
                </div>
                <p>A coleção especial do <strong>Lony</strong> celebra a força, a delicadeza e o estilo de cada mulher</p>

                <ButtonPrimary pageUrl='' text='Confira' textColour='#111111' bgColour='#f0f0f0' />
            </div>
            <div className={styles.rightSide}>
                <Image
                    src={SeasonalImage}
                    alt='SeasonalImage'
                    width={1000}
                    height={727}
                    priority
                />
            </div>
        </section>
    )
}