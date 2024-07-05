import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import styles from '../../styles/common/carousel.module.scss';

import { ArrowCarouselIcon } from "../../../../public/assets/icons/arrowCarouselIcon";
import { PauseIcon } from "../../../../public/assets/icons/pauseIcon";
import { PlayIcon } from "../../../../public/assets/icons/playIcon";

const Image = lazy(() => import('next/image'));

const images = [
    '/assets/images/home/BiankaPrimary.jpg',
    '/assets/images/home/EstefanyPrimary.jpg',
    '/assets/images/home/EsterPrimary.jpg',
    '/assets/images/home/IsabelaPrimary.jpg',
    '/assets/images/home/LarissaPrimary.jpg'
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
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const [isPaused, setisPaused] = useState<boolean>(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        startCarousel();

        return () => {
            stopCarousel()
        }
    }, [isPaused]);

    const startCarousel = () => {
        intervalRef.current = setInterval(() => {
            if (!isPaused) goToNextImage();
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
            });
            resetCarouselTimer();
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
            resetCarouselTimer();
        }
    }

    const resetCarouselTimer = () => {
        stopCarousel();
        startCarousel();
    }

    const handlePause = () => {
        setisPaused(!isPaused);
    }

    const handleDotClick = (index: number) => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentImageIndex(index);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 500)
        }
        resetCarouselTimer();
    }

    return (
        <div id={styles.carousel}>
            <Suspense fallback={<div className={styles.loading} />}>
                <figure className={styles.imageWrapper}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`${styles.image} ${index === currentImageIndex ? styles.active : ''}`}
                            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                        >
                            <Image src={image} alt={`${girlNames[index]}`} title={`${girlNames[index]}`} width={970} height={1080} priority />
                        </div>
                    ))}

                    <button className={styles.leftBtn} onClick={goToPrevImage} aria-label="Voltar slide">
                        <ArrowCarouselIcon />
                    </button>

                    <button className={styles.rightBtn} onClick={goToNextImage} aria-label="Próximo slide">
                        <ArrowCarouselIcon />
                    </button>

                    <button className={styles.pauseBtn} onClick={handlePause} aria-label="Pausar carrossel">
                        {isPaused ? <PlayIcon /> : <PauseIcon />}
                    </button>

                    <div className={styles.dots}>
                        {images.map((_, index) => (
                            <input
                                type="button"
                                key={index}
                                className={`${styles.dot} ${index === currentImageIndex ? styles.active : ''}`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>
                </figure>
            </Suspense>
        </div>
    )
}

export default Carousel