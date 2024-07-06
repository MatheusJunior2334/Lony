'use client'

import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from '../../styles/about/projectMembers.module.scss';

import BiankaDay from '../../../../public/assets/images/about/BiankaDay.jpg';
import BiankaNight from '../../../../public/assets/images/about/BiankaNight.jpg';

const membersData: MembersProps[] = [
    { name: 'Bianka Araújo', dayImage: BiankaDay, nightImage: BiankaNight }
]

const getImageForTimeOfDay = (dayImage: StaticImageData, nightImage: StaticImageData) => {
    const currentHour = new Date().getHours();

    return currentHour >= 7 && currentHour < 18 ? dayImage : nightImage;
}

export const ProjectMembers = () => {
    return (
        <section id={styles.projectMembers}>
            <h2>Integrantes do projeto</h2>
            <div className={styles.membersDiv}>
                <div className={styles.imageSide}>
                    {membersData.map((member, index) => (
                        <Members
                            key={index}
                            {...member}
                        />
                    ))}
                </div>
                <div className={styles.infoSide}>
                    
                </div>
            </div>
        </section>
    )
}

interface MembersProps {
    dayImage: StaticImageData;
    nightImage: StaticImageData;
    name: string;
}

const Members = ({ dayImage, nightImage, name }: MembersProps) => {
    const [imageSrc, setImageSrc] = useState<StaticImageData>(getImageForTimeOfDay(dayImage, nightImage))

    useEffect(() => {
        setImageSrc(getImageForTimeOfDay(dayImage, nightImage));
    }, [])

    return (
        <figure>
            <Image
                src={imageSrc}
                alt={`Imagem de ${name}`}
                width={465}
                height={631}
                priority
            />
            <figcaption>{name}</figcaption>
        </figure>
    )
}