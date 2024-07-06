'use client'

import React, { useState, useEffect } from "react"
import styles from '../../styles/common/scrollToTopButton.module.scss';
import { ArrowUpIcon } from "../../../../public/assets/icons/arrowUpIcon";

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            id={styles.scrollToTopButton}
            className={isVisible ? styles.show : ''}
            onClick={scrollToTop}
            aria-label="Ir para o topo"
        >
            <ArrowUpIcon />
        </button>
    )
}