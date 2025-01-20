'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../../styles/shop/mainCategoriesShop.module.scss';
import { ArrowCarouselIcon } from '../../../public/assets/icons/arrowCarouselIcon';

interface MainCategoriesShopProps {
  icon: string;
  text: string;
  colour: string;
  pageLink?: string;
}

const categoriesItems: MainCategoriesShopProps[] = [
  { icon: '/assets/images/shop/categories/dressImage.png', text: 'Vestidos', colour: '242, 87, 116' },
  { icon: '/assets/images/shop/categories/hatImage.png', text: 'Chapéus', colour: '23, 113, 191' },
  { icon: '/assets/images/shop/categories/trouserImage.png', text: 'Calças', colour: '153, 119, 48' },
  { icon: '/assets/images/shop/categories/skirtImage.png', text: 'Saias', colour: '140, 3, 3' },
  { icon: '/assets/images/shop/categories/blouseImage.png', text: 'Blusas', colour: '5, 89, 2' },
  { icon: '/assets/images/shop/categories/shirtImage.png', text: 'Camisas', colour: '105, 174, 203' },
];

export const MainCategoriesShop: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.carouselContainer}>
      <button ref={prevRef} className={styles.leftBtn}>
        <ArrowCarouselIcon />
      </button>

      <button ref={nextRef} className={styles.rightBtn}>
        <ArrowCarouselIcon />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView="auto"
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        onSwiper={(swiper) => {
          if (swiper.params.navigation) {
            if (typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }
        }}
        breakpoints={{
          1: { slidesPerView: 2 },
          390: { slidesPerView: 3 },
          670: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 }
        }}
        className={styles.carouselSwiper}
      >
        {categoriesItems.map((category, index) => (
          <SwiperSlide key={index} className={styles.carouselSlide}>
            <div
              className={styles.categoryBtn}
              style={{ background: `linear-gradient(270deg, rgba(${category.colour}, 1) 0%, rgba(${category.colour}, 0.5) 100%)` }}
            >
              <Image
                src={category.icon}
                alt={`${category.text} Icon`}
                width={240}
                height={240}
                priority
              />
              <span>{category.text}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
