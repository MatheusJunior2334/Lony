'use client'

import React from "react";
import styles from '../../styles/shop/fashionShowcase.module.scss';
import { GalleryItem } from "./galleryItem";

interface FashionShowCaseProps {
    images: {
        image: string;
        clothingType: string;
        orientation: "vertical" | "horizontal"
    }[]
}

export const FashionShowcase = ({ images } : FashionShowCaseProps) => {
    return (
        <section id={styles.fashionShowcase}>
            <h2>Descubra o seu eu interior:</h2>
            <div className={styles.fashionGrid}>
                {images.map((image, index) => (
                    <GalleryItem
                        key={index}
                        image={image.image}
                        clothingType={image.clothingType}
                        orientation={image.orientation}
                    />
                ))}
            </div>
        </section>
    )
}