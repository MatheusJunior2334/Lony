import React, { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import styles from '../../styles/home/ourWorkModal.module.scss';

import { useLanguage } from '@/app/contexts/languageContext';

import { ArrowCarouselIcon } from '../../../../public/assets/icons/arrowCarouselIcon';
import { XIcon } from '../../../../public/assets/icons/xIcon';

interface OurWorkModalProps {
    images: StaticImageData[];
    addClass: boolean;
    selectedImageIndex: number;
    setSelectedImageIndex: (index: number) => void;
    onClose: () => void;
}

export const OurWorkModal = ({ images, addClass, selectedImageIndex, setSelectedImageIndex, onClose }: OurWorkModalProps) => {
    const { translations } = useLanguage();
    const swiperRef = useRef<any>(null);
    const [isNavigating, setIsNavigating] = useState<boolean>(false);
 
    const handleSlideChange = (swiper: any) => {
        setSelectedImageIndex(swiper.activeIndex);
    }

    const handleNext = () => {
        if (!isNavigating) {
            setIsNavigating(true);
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.slideNext();
            }
        }
    };

    const handlePrev = () => {
        if (!isNavigating) {
            setIsNavigating(true);
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.slidePrev();
            }
        }
    };

    const handleTransitionEnd = () => {
        setIsNavigating(false);
    };

    return (
        <>
            <div className={`${styles.modalBackdrop} ${addClass ? styles.backdropOpen : styles.backdropClose}`} onClick={onClose} />

            <div id={styles.ourWorkModal} className={addClass ? styles.openModal : styles.closeModal}>
                <div className={styles.modalContent}>
                    <button className={styles.exitButton} title={translations['header.sideMenu.closeMenu']} onClick={onClose} aria-label='Fechar o modal'>
                        <XIcon />
                    </button>
                    <Swiper
                        ref={swiperRef}
                        initialSlide={selectedImageIndex}
                        onSlideChange={handleSlideChange}
                        onTransitionEnd={handleTransitionEnd}
                        modules={[Navigation]}
                        className={styles.swiperContainer}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.modalImage}>
                                    <Image
                                        src={image}
                                        alt={`Imagem ${index + 1}`}
                                        width={500}
                                        height={722}
                                        priority
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {selectedImageIndex !== 0 &&
                        <button className={styles.leftButton} aria-label='Imagem anterior' onClick={handlePrev} disabled={isNavigating}>
                            <ArrowCarouselIcon />
                        </button>
                    }
                    {selectedImageIndex !== images.length - 1 &&
                        <button className={styles.rightButton} aria-label='Próxima imagem' onClick={handleNext} disabled={isNavigating}>
                            <ArrowCarouselIcon />
                        </button>
                    }
                </div>
            </div>
        </>
    )
}