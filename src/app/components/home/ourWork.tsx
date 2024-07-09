'use client'

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import dynamic from "next/dynamic";

import { SeeImageIcon } from "../../../../public/assets/icons/seeImageIcon";
import styles from '../../styles/home/ourWork.module.scss';

import ClothingSketch1 from '../../../../public/assets/images/home/ClothingSketch1.webp';
import ClothingSketch2 from '../../../../public/assets/images/home/ClothingSketch2.webp';
import ClothingSketch3 from '../../../../public/assets/images/home/ClothingSketch3.webp';
import ClothingSketch4 from '../../../../public/assets/images/home/ClothingSketch4.webp';
import ClothingSketch5 from '../../../../public/assets/images/home/ClothingSketch5.webp';

import ClothingDrafts from '../../../../public/assets/images/home/ClothingDrafts.webp';

import { useLanguage } from '@/app/contexts/languageContext';

const OurWorkModal = dynamic(() => import("./ourWorkModal").then(mod => mod.OurWorkModal), {
    ssr: false
});

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
                            alt={`Desenho ${index + 1}`}
                            width={500}
                            height={722}
                            sizes={index > 1 ?
                                "(max-width: 480px) 55vw, (max-width: 1000px) 57vw, (max-width: 1280px) 27vw, 27.5vw" :
                                "(max-width: 1000px) 27.7vw, (max-width: 1280px) 13.8vw, 13.2vw"
                            }
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
                            alt={`Desenho ${index + 4}`}
                            width={500}
                            height={722}
                            sizes={index < 1 ?
                                "(max-width: 480px) 55vw, (max-width: 1000px) 57vw, (max-width: 1280px) 27vw, 27.5vw" :
                                "(max-width: 1000px) 27.7vw, (max-width: 1280px) 13.8vw, 13.2vw"
                            }
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