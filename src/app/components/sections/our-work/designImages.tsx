import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from '../../../styles/ourWork.module.scss';

import { SeeImageIcon } from "../../../../../public/assets/icons/seeImageIcon";

interface DesignImagesProps {
    images: StaticImageData[];
}

export const DesignImages = ({ images } : DesignImagesProps) => {

    return (
        <div className={styles.images}>
            {images.map((image, index) => (
                <div key={index} className={`${styles[`image${index + 1}`]} ${styles.imagesDiv}`}>
                    <Image
                        src={image}
                        alt={`Draw ${index + 1}`}
                        width={500}
                        height={722}
                        priority
                    />
                    
                    <div className={styles.seeImageIconDiv}>
                        <SeeImageIcon />
                    </div>
                </div>
            ))}
        </div>
    )
}