import React, { useState } from 'react';

import styles from './about.module.scss'
import Image from 'next/image';

import LadiesPhoto from '../../../../../public/assets/images/LadiesPhotograph.jpg';
import Link from 'next/link';
import { LadiesAboutLogo } from '../../../../../public/assets/images/LadiesAboutLogo';
import { Butterfly_Kids } from 'next/font/google';
import { ButtonPrimary } from '../../UI/buttonPrimary';

export const AboutSection = () => {
    return(
        <section id={styles.aboutSection}>
            <div className={styles.leftSide}>
                <Image
                    src={LadiesPhoto}
                    alt='Ladies Photograph'
                    width={1300}
                    height={900}
                    priority
                />
            </div>

            <div className={styles.rightSide}>
                <h2>Quem Somos?</h2>

                <LadiesAboutLogo />

                <div className={styles.aboutText}>
                    <p>"Lony", pronunciado "Luni", é o resultado de um sonho compartilhado por Estefany, Isabela, Ester, Larissa e Bianka. Somos um grupo de garotas apaixonadas pela moda, unidas por um propósito ousado: criar nossa própria marca e conquistar o coração do Brasil.</p>
                    <p>Com visão internacional, almejamos levar nosso estilo único e inovador para além das fronteiras, com o objetivo final de brilhar nos palcos globais, quem sabe até mesmo nas ruas movimentadas de Nova Iorque. Juntas, estamos determinadas a deixar nossa marca no mundo da moda, e a jornada rumo ao sucesso é apenas o começo da nossa emocionante história.</p>
                </div>

                <ButtonPrimary pageUrl='/about' text='Saiba Mais' />
            </div>
        </section>
    )
}