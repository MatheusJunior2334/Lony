import React from "react";
import Image from "next/image";
import styles from '../../styles/shop/galleryItem.module.scss';

interface GalleryItemProps {
    image: string;
    clothingType: string;
    orientation: 'vertical' | 'horizontal';
}

export const GalleryItem = ({ image, clothingType, orientation } : GalleryItemProps) => {
    return (
        <div
            className={`
                ${styles.galleryItem}
                ${orientation === 'horizontal' ? styles.horizontal : styles.vertical}
            `}
        >
            <Image
                src={image}
                alt={clothingType}
                width={orientation === 'horizontal' ? 940 : 422}
                height={613}
                loading="lazy"
            />

            <div className={styles.clothingType}>
                <span>{clothingType}</span>
            </div>
        </div>
    )
}