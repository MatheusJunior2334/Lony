'use client'

import React, { useEffect, useRef, useState, Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/shop/mainCarouselShop.module.scss";
import { ArrowCarouselIcon } from "../../../public/assets/icons/arrowCarouselIcon";

interface Slide {
  id: number;
  image: string;
  background: string;
}

interface CarouselProps {
  data: Slide[];
}

export const MainCarouselShop: React.FC<CarouselProps> = ({ data }) => {
  const [indexes, setIndexes] = useState<{ left: number; center: number; right: number }>({
    left: data.length - 1,
    center: 0,
    right: 1,
  });
  const [flowDirection, setFlowDirection] = useState(true);
  const [zoomReadyIndex, setZoomReadyIndex] = useState<number | null>(null);
  const internalRef = useRef<NodeJS.Timeout | null>(null);

  const updateIndexes = (increment: number) => {
    setIndexes(({ left, center, right }) => ({
      left: (left + increment + data.length) % data.length,
      center: (center + increment + data.length) % data.length,
      right: (right + increment + data.length) % data.length,
    }));
    setFlowDirection(increment > 0);
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    internalRef.current = setInterval(() => updateIndexes(1), 5000);
  };

  const stopAutoSlide = () => {
    if (internalRef.current) clearInterval(internalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [startAutoSlide]);

  const handleDotClick = (index: number) => {
    setIndexes({
      left: (index - 1 + data.length) % data.length,
      center: index,
      right: (index + 1) % data.length
    })
    stopAutoSlide();
    startAutoSlide();
  }

  const variants = {
    position: (pos: 'left' | 'center' | 'right') => {
      switch (pos) {
        case 'left':
          return { x: "-50%", opacity: 1, scale: 0.6, zIndex: 4, transition: { type: "spring", duration: 1 } };
        case 'center':
          return { x: "0%", opacity: 1, scale: 1, zIndex: 5, boxShadow: "0px 6px 10px", transition: { type: "spring", duration: 1 } };
        case 'right':
          return { x: "50%", opacity: 1, scale: 0.6, zIndex: 4, transition: { type: "spring", duration: 1 } };
        default:
          return { x: "0%", opacity: 0, scale: 0, zIndex: 0 };
      }
    }
  };

  return (
    <motion.div className={styles.carouselWrapper}>
      <div className={styles.ladiesOfNY}>
        <span>Ladies of New York</span>
        <span>Shop</span>
      </div>
      <motion.div className={styles.carouselContent}>
        {(['left', 'center', 'right'] as const).map((pos) => {
          const isCenter = pos === 'center';
          const currentIndex = indexes[pos];

          const handleMouseEnter = () => {
            if (isCenter) setZoomReadyIndex(currentIndex);
            stopAutoSlide();
          }

          const handleMouseLeave = () => {
            setZoomReadyIndex(null);
            startAutoSlide();
          }
          
          return (
            <motion.div
              key={indexes[pos]}
              variants={variants}
              initial={pos === 'center' ? (flowDirection ? 'right' : 'left') : 'hidden'}
              custom={pos}
              animate='position'
              exit='hidden'
              className={`
                ${styles.carouselItem}
                ${isCenter ? styles.centerItem : styles.sideItems}
                ${isCenter && zoomReadyIndex === currentIndex ? styles.zoomActive : ''}
              `}
              onClick={pos === 'left' ? () => updateIndexes(-1) : pos === 'right' ? () => updateIndexes(1) : undefined}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.imageZoomWrapper}>
                <Suspense fallback={<div className={styles.loadingDiv} />}>
                  <Image
                    src={data[indexes[pos]].image}
                    alt={`Image ${data[indexes[pos]].id}`}
                    width={958}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 56vw"
                    loading="lazy"
                    className={styles.imageZoom}
                  />
                </Suspense>
              </div>
            </motion.div>
          )
        })}
        <button
          className={styles.leftBtn}
          onClick={() => updateIndexes(-1)}
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <ArrowCarouselIcon />
        </button>
        <button
          className={styles.rightBtn}
          onClick={() => updateIndexes(1)}
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <ArrowCarouselIcon />
        </button>
      </motion.div>
      <div className={styles.backgroundImage} style={{ backgroundImage: `url(${data[indexes.center].background})` }} />

      <div className={styles.dotsWrapper}>
        {data.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === indexes.center ? styles.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </motion.div>
  );
};
