import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback, Suspense } from "react";
import styles from '../../styles/common/carousel.module.scss';

import { ArrowCarouselIcon } from "../../../public/assets/icons/arrowCarouselIcon";
import { PauseIcon } from "../../../public/assets/icons/pauseIcon";
import { PlayIcon } from "../../../public/assets/icons/playIcon";

const images = [
    '/assets/images/home/BiankaPrimary.webp',
    '/assets/images/home/EstefanyPrimary.webp',
    '/assets/images/home/EsterPrimary.webp',
    '/assets/images/home/IsabelaPrimary.webp',
    '/assets/images/home/LarissaPrimary.webp'
]

const girlNames = [
    'Bianka',
    'Estefany',
    'Ester',
    'Isabela',
    'Larissa'
]

const Carousel: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [isPaused, setisPaused] = useState<boolean>(false);

    const intervalRef = useRef<number | null>(null);
    const isTransitioningRef = useRef<boolean>(false);

    const resetCarouselTimer = () => {
        stopCarousel();
        startCarousel();
    }

    const startCarousel = useCallback(() => {
        if (intervalRef.current === null) {
            intervalRef.current = window.setInterval(() => {
                if (!isPaused) goToNextImage();
            }, 5000)
        }
    }, [isPaused])

    const stopCarousel = useCallback(() => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, [])

    useEffect(() => {
        startCarousel();

        return () => stopCarousel()
    }, [isPaused, startCarousel, stopCarousel]);

    const goToNextImage = useCallback(() => {
        if (!isTransitioningRef.current) {
            isTransitioningRef.current = true;
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            window.setTimeout(() => {
                isTransitioningRef.current = false;
            }, 500)

            resetCarouselTimer();
        }
    }, [resetCarouselTimer])

    const goToPrevImage = useCallback(() => {
        if (!isTransitioningRef.current) {
            isTransitioningRef.current = true;
            setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
            window.setTimeout(() => {
                isTransitioningRef.current = false;
            }, 500)

            resetCarouselTimer();
        }
    }, [resetCarouselTimer])

    const handleDotClick = useCallback((index: number) => {
        if (!isTransitioningRef.current) {
            isTransitioningRef.current = true;
            setCurrentImageIndex(index);
            window.setTimeout(() => {
                isTransitioningRef.current = false;
            }, 500)

            resetCarouselTimer();
        }
    }, [resetCarouselTimer])

    const handlePause = useCallback(() => {
        setisPaused((prev) => !prev);
    }, [])

    return (
        <div id={styles.carousel}>
            <figure className={styles.imageWrapper}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${styles.image} ${index === currentImageIndex ? styles.active : ''}`}
                        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >
                        <Suspense fallback={<div className={styles.loader}><span /></div>}>
                            <Image
                                src={image}
                                alt={girlNames[index]}
                                title={girlNames[index]}
                                width={480}
                                height={534.43}
                                sizes="(max-width: 768px) 90vw, (max-width: 1000px) 370px, (max-width: 1280px) 400px, 480px"
                                priority={index === 0}
                                loading={index === 0 ? 'eager' : 'lazy'}
                            />
                        </Suspense>
                    </div>
                ))}

                <button className={styles.leftBtn} onClick={goToPrevImage} aria-label="Voltar slide">
                    <ArrowCarouselIcon />
                </button>

                <button className={styles.rightBtn} onClick={goToNextImage} aria-label="Próximo slide">
                    <ArrowCarouselIcon />
                </button>

                <button className={styles.pauseBtn} onClick={handlePause} aria-label={isPaused ? 'Reproduzir carrossel' : 'Pausar carrosel'} aria-pressed={!isPaused}>
                    {isPaused ? <PlayIcon /> : <PauseIcon />}
                </button>

                <div className={styles.dots}>
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${index === currentImageIndex ? styles.active : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </figure>
        </div>
    )
}

export default Carousel