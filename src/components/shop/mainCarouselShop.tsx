'use client'

import React, { useEffect, useRef, useState, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  }, []);

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
    center: { x: '0rem', opacity: 1, scale: 1, zIndex: 5, boxShadow: "0px 10px 10px)", transition: { type: "spring", duration: 1 } },
    left: { x: "-50%", opacity: 1, scale: 0.6, zIndex: 4, transition: { type: "spring", duration: 1 } },
    right: { x: "50%", opacity: 1, scale: 0.6, zIndex: 3, transition: { type: "spring", duration: 1 } },
    hidden: { x: flowDirection ? "70%" : "-70%", scale: 0, opacity: 0 },
  };

  return (
    <motion.div className={styles.carouselWrapper}>
      <div className={styles.ladiesOfNY}>
        <span>Ladies of New York</span>
        <span>Shop</span>
      </div>
      <motion.div className={styles.carouselContent}>
        <AnimatePresence initial={false}>
          {(['left', 'center', 'right'] as const).map((pos) => (
            <motion.div
              key={indexes[pos]}
              variants={variants}
              initial={pos === 'center' ? (flowDirection ? 'right' : 'left') : 'hidden'}
              animate={pos}
              exit='hidden'
              className={`${styles.carouselItem} ${pos !== 'center' && styles.sideItems}`}
              onClick={pos === 'left' ? () => updateIndexes(-1) : pos === 'right' ? () => updateIndexes(1) : undefined}
              onMouseEnter={stopAutoSlide}
              onMouseLeave={startAutoSlide}
            >
              <Suspense fallback={<div className={styles.loadingDiv} />}>
                <Image
                  src={data[indexes[pos]].image}
                  alt={`Image ${data[indexes[pos]].id}`}
                  width={958}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 56vw"
                  loading="lazy"
                />
              </Suspense>
            </motion.div>
          ))}
        </AnimatePresence>

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
