import React, { useState, useEffect, useRef } from "react";
import styles from './carousel.module.scss';
import Image from "next/image";

import { CarouselArrowIcon } from "../../../../public/assets/icons/CarouselArrowIcon";

const images = [
    '/assets/images/BiankaPrimary.jpg',
    '/assets/images/EstefanyPrimary.jpg',
    '/assets/images/EsterPrimary.jpg',
    '/assets/images/IsabelaPrimary.jpg',
    '/assets/images/LarissaPrimary.jpg'
]

export const Carousel: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        startCarousel();

        return () => {
            stopCarousel()
        }
    }, []);

    const startCarousel = () => {
        intervalRef.current = setInterval(() => {
            goToNextImage();
        }, 5000)
    }

    const stopCarousel = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    const goToNextImage = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentImageIndex((prevIndex) => {
                const nextIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
                setTimeout(() => {
                    setIsTransitioning(false);
                }, 500)
                return nextIndex;
            })
        }
    }

    const goToPrevImage = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentImageIndex((prevIndex) => {
                const nextIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
                setTimeout(() => {
                    setIsTransitioning(false);
                }, 500)
                return nextIndex;
            })
        }
    }

    return (
        <div id={styles.carousel}>
            <div className={styles.imageWrapper}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${styles.image} ${index === currentImageIndex ? styles.active : ''}`}
                        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >
                        <Image src={image} alt={`Image ${index}`} width={970} height={1080} priority />
                    </div>
                ))}

                <button className={styles.leftBtn} onClick={goToPrevImage}>
                    <CarouselArrowIcon />
                </button>

                <button className={styles.rightBtn} onClick={goToNextImage}>
                    <CarouselArrowIcon />
                </button>
            </div>
        </div>
    )
}