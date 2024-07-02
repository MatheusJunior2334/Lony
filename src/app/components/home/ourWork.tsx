'use client'

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import { SeeImageIcon } from "../../../../public/assets/icons/seeImageIcon";
import { OurWorkModal } from "./ourWorkModal";
import styles from '../../styles/home/ourWork.module.scss';

import ClothingSketch1 from '../../../../public/assets/images/home/ClothingSketch1.jpg';
import ClothingSketch2 from '../../../../public/assets/images/home/ClothingSketch2.jpg';
import ClothingSketch3 from '../../../../public/assets/images/home/ClothingSketch3.jpg';
import ClothingSketch4 from '../../../../public/assets/images/home/ClothingSketch4.jpg';
import ClothingSketch5 from '../../../../public/assets/images/home/ClothingSketch5.jpg';

import ClothingDrafts from '../../../../public/assets/images/home/ClothingDrafts.jpg';

import { useLanguage } from '@/app/contexts/languageContext';

export const OurWorkSection = () => {
    const { translations } = useLanguage();

    return (
        <section id={styles.ourWorkSection}>
            <h2>{translations['home.ourWorks.designsTitle']}</h2>
            <div className={styles.container}>
                <DesignImages images={[ClothingSketch3, ClothingSketch2, ClothingSketch1, ClothingDrafts, ClothingSketch4, ClothingSketch5]} />
            </div>
        </section>
    )
}
interface DesignImagesProps {
    images: StaticImageData[];
}

const DesignImages = ({ images } : DesignImagesProps) => {
    const [addClass, setAddClass] = useState<boolean>(false);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

    const handleImageClick = (index: number) => {
        setAddClass(true);
        setModalOpen(true);
        setSelectedImageIndex(index);
    }

    const handleCloseModal = () => {
        setAddClass(false);

        setTimeout(() => {
            setModalOpen(false);
        }, 300)
    }

    const firstImages = images.slice(0, 3);
    const secondImages = images.slice(3);

    return (
        <>
            <div className={styles.images}>
                {firstImages.map((image, index) => (
                    <div key={index} className={`${styles[`image${index + 1}`]} ${styles.imagesDiv}`} onClick={() => handleImageClick(index)}>
                        <Image
                            src={image}
                            alt={`Draw ${index + 1}`}
                            width={500}
                            height={722}
                            priority
                        />
                        
                        <div className={styles.seeImageIconDiv}>
                            <SeeImageIcon />
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.images}>
                {secondImages.map((image, index) => (
                    <div key={index + 3} className={`${styles[`image${index + 4}`]} ${styles.imagesDiv}`} onClick={() => handleImageClick(index + 3)}>
                        <Image
                            src={image}
                            alt={`Draw ${index + 4}`}
                            width={500}
                            height={722}
                            priority
                        />
                        
                        <div className={styles.seeImageIconDiv}>
                            <SeeImageIcon />
                        </div>
                    </div>
                ))}
            </div>
            {modalOpen && (
                <OurWorkModal
                    images={images}
                    addClass={addClass}
                    selectedImageIndex={selectedImageIndex}
                    setSelectedImageIndex={setSelectedImageIndex}
                    onClose={handleCloseModal}
                />
            )}
        </>
    )
}