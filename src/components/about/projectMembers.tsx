'use client'

import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from '../../styles/about/projectMembers.module.scss';
import { Dancing_Script } from 'next/font/google';

import BiankaDay from '../../../public/assets/images/about/BiankaDay.webp';
import BiankaNight from '../../../public/assets/images/about/BiankaNight.webp';

import EstefanyDay from '../../../public/assets/images/about/EstefanyDay.png';
import EstefanyNight from '../../../public/assets/images/about/EstefanyNight.png';

import EsterDay from '../../../public/assets/images/about/EsterDay.png';
import EsterNight from '../../../public/assets/images/about/EsterNight.png';

import IsabelaDay from '../../../public/assets/images/about/IsabelaDay.png';
import IsabelaNight from '../../../public/assets/images/about/IsabelaNight.png';

import { GermanyFlag } from '../../../public/assets/icons/germanyFlag';
import { SouthKoreaFlag } from '../../../public/assets/icons/southKoreaFlag';
import { JapanFlag } from '../../../public/assets/icons/japanFlag';

const dancingScript = Dancing_Script({ subsets: ['latin'], style: 'normal', weight: ['700'] })

const membersData: MembersProps[] = [
    {
        name: 'Bianka Araújo | Designer e Modelo',
        dayImage: BiankaDay,
        nightImage: BiankaNight,
        countryFlag: <GermanyFlag />,
        countryName: 'Deutschland',
        countryHearts: '❤️🖤💛'
    },
    // {
    //     name: 'Estefany Loureano | Modelo',
    //     dayImage: EstefanyDay,
    //     nightImage: EstefanyNight,
    //     countryFlag: <GermanyFlag />,
    //     countryName: 'Deutschland',
    //     countryHearts: '❤️🖤💛'
    // },
    {
        name: 'Ester Melo | Designer',
        dayImage: EsterDay,
        nightImage: EsterNight,
        countryFlag: <SouthKoreaFlag />,
        countryName: '대한민국',
        countryHearts: '❤️💙'
    },
    {
        name: 'Isabela Lima | Maquiadora e Cabeleireira',
        dayImage: IsabelaDay,
        nightImage: IsabelaNight,
        countryFlag: <JapanFlag />,
        countryName: '日本',
        countryHearts: '❤️🤍'
    }
]

const getImageForTimeOfDay = (dayImage: StaticImageData, nightImage: StaticImageData) => {
    const currentHour = new Date().getHours();

    return currentHour >= 7 && currentHour < 18 ? dayImage : nightImage;
}

const getFourthElementOnwards = (input: string, delimiter: string = ' '): string => {
    const words = input.split(delimiter);
    return words.slice(3).join(delimiter)
}

export const ProjectMembers = () => {
    return (
        <section id={styles.projectMembers}>
            <h2>Integrantes do projeto</h2>
            <div className={styles.membersDiv}>
                {membersData.map((member, index) => (
                    <Members
                        key={index}
                        {...member}
                    />
                ))}
            </div>
        </section>
    )
}

interface MembersProps {
    dayImage: StaticImageData;
    nightImage: StaticImageData;
    name: string;
    countryFlag: React.ReactNode;
    countryName: string;
    countryHearts: string;
}

const Members = ({ dayImage, nightImage, name, countryFlag, countryName, countryHearts }: MembersProps) => {
    const [imageSrc, setImageSrc] = useState<StaticImageData>(getImageForTimeOfDay(dayImage, nightImage))

    useEffect(() => {
        setImageSrc(getImageForTimeOfDay(dayImage, nightImage));
    }, [dayImage, nightImage])

    return (
        <div className={styles.membersContent}>
            <div className={styles.imageSide}>
                <figure>
                    <Image
                        src={imageSrc}
                        alt={`Imagem de ${name}`}
                        width={465}
                        height={631}
                        priority
                        quality={100}
                        sizes='27.35vw'
                    />
                    <figcaption>{name}</figcaption>
                </figure>
            </div>
            <div className={`${styles.infoSide} ${styles[name.split(" ")[0]]}`}>
                <div className={styles.title}>
                    <h3 className={dancingScript.className}>{name.split(" ")[0] + ' ' + name.split(" ")[1]}</h3>
                    <h4 className={dancingScript.className}>{getFourthElementOnwards(name)}</h4>
                </div>
                <div className={styles.pairCards}>
                    {[0, 1].map((_, index) => (
                        <Image
                            key={index}
                            src={`/assets/images/about/${name.split(" ")[0]}Card${index + 1}.png`}
                            alt={`${name.split(" ")[0]} Card${index + 1}`}
                            width={150}
                            height={201}
                            loading='lazy'
                            sizes='12.18vw'
                            className={styles[`image${index + 1}`]}
                        />
                    ))}
                    <Image
                        src={imageSrc}
                        alt={`Imagem de ${name}`}
                        width={465}
                        height={631}
                        priority
                        quality={100}
                        sizes='32vw'
                        className={styles.image3}
                    />
                </div>
                <div className={styles.flagArea}>
                    { countryFlag }
                    <span>{countryName} <br /> {countryHearts}</span>
                </div>
            </div>
        </div>
    )
}