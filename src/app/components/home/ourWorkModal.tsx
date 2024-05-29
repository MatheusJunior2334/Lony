import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
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
    const [touchStart, setTouchStart] = useState<number>(0);
    const [touchEnd, setTouchEnd] = useState<number>(0);

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        setTouchStart(event.touches[0].clientX);
    }

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(event.changedTouches[0].clientX);
        if (touchEnd - touchStart > 50) {
            handlePrev();
        } else if (touchEnd - touchStart < -50) {
            handleNext();
        }
    }

    const handleNext = () => {
        setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1);
    };

    const handlePrev = () => {
        setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1)
    };

    return (
        <>
            <div className={`${styles.modalBackdrop} ${addClass ? styles.backdropOpen : styles.backdropClose}`} onClick={onClose} />

            <div id={styles.ourWorkModal} className={addClass ? styles.openModal : styles.closeModal}>
                <div className={styles.modalContent}>
                    <button className={styles.exitButton} title={translations['header.sideMenu.closeMenu']} onClick={onClose}>
                        <XIcon />
                    </button>
                    <div className={styles.modalImage} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                        <Image
                            src={images[selectedImageIndex]}
                            alt={`Draw ${selectedImageIndex + 1}`}
                            width={500}
                            height={722}
                            priority
                        />
                    </div>

                    {selectedImageIndex !== 0 &&
                        <button className={styles.leftTopButton} onClick={handlePrev}>
                            <ArrowCarouselIcon />
                        </button>
                    }
                    {selectedImageIndex !== images.length - 1 &&
                        <button className={styles.rightTopButton} onClick={handleNext}>
                            <ArrowCarouselIcon />
                        </button>
                    }
                </div>
            </div>
        </>
    )
}