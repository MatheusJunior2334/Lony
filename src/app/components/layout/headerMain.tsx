'use client'

import React, { useEffect, useState } from 'react';

import styles from '../../styles/layout/headerMain.module.scss';
import { LonyLogoHeader } from '../../../../public/assets/images/LonyLogoHeader';
import { BurgerMenuIcon } from '../../../../public/assets/icons/burgerMenuIcon';
import { SideMenuMain } from './sideMenuMain';

import { useLanguage } from '@/app/contexts/languageContext';

export const HeaderMain = () => {
    const [addClassMenu, setAddClassMenu] = useState<boolean>(false);
    const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

    const [isHeaderHidden, setIsHeaderHidden] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const { translations } = useLanguage();

    const openMenu = () => {
        setAddClassMenu(true);
        setVisibleMenu(true);
    } 

    const closeMenu = () => {
        setAddClassMenu(false)

        setTimeout(() => {
            setVisibleMenu(false);
        }, 300)
    }

    useEffect(() => {
        if (visibleMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [visibleMenu])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 200) {
                setIsHeaderHidden(true);
            } else {
                setIsHeaderHidden(false);
            }
            setLastScrollY(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [lastScrollY])

    return (
        <header id={styles.header} className={isHeaderHidden ? styles.hidden : ''}>

            { visibleMenu ? <SideMenuMain closeMenu={closeMenu} translateStyle={addClassMenu} /> : null }

            <div className={styles.leftHeader}>
                <div className={styles.burgerMenu} onClick={openMenu}>
                    <BurgerMenuIcon />
                    <span>{translations['header.menu']}</span>
                </div>
            </div>

            <div className={styles.middleHeader}>
                <LonyLogoHeader />
            </div>

            <div className={styles.rightHeader}></div>
        </header>
    )
}