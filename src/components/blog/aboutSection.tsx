'use client'

import Image from 'next/image';
import styles from '../../styles/blog/aboutSection.module.scss';

import AboutBlogImage from '../../../public/assets/images/blog/GirlsAboutBlogImage.webp';
import { ButtonPrimary } from '../common/buttonPrimary';

export const AboutBlogSection = () => {
    return (
        <section id={styles.aboutBlogSection}>
            <div className={styles.leftSide}>
                <Image
                    src={AboutBlogImage}
                    alt='Imagem das Garotas do Lony em formato de figurinha'
                    width={1018}
                    height={1085}
                    sizes='(max-width: 768px) 95vw, (max-width: 1000px) 44.65vw, 38vw'
                    loading='lazy'
                />
            </div>
            <div className={styles.rightSide}>
                <div className={styles.upperText}>
                    <h2>VENHA CONHECER AS</h2>
                    <h3>Ladies of New York</h3>
                </div>

                <div className={styles.infoText}>
                    <p>&quot;Lony&quot;, pronunciado &quot;Luni&quot;, é o resultado de um sonho compartilhado por Ester, Bianka, Larissa, Estefany, Bruna e Isabela. Somos um grupo de garotas apaixonadas pela moda, unidas por um propósito ousado: criar nossa própria marca e conquistar o coração do Brasil.</p>
                </div>

                <ButtonPrimary pageUrl='/sobre' text={'Saiba Mais'} />
            </div>
        </section>
    )
}