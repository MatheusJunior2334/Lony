'use client'

import React, { useEffect, useState } from 'react';

import styles from '../../styles/shared/headerBlog.module.scss';

import { SideMenuBlog } from './sideMenuBlog';
import { LonyLogoHeader } from '../../../public/assets/images/LonyLogoHeader';
import { BurgerMenuIcon } from '../../../public/assets/icons/burgerMenuIcon';

import { FaInstagram, FaPinterestP, FaTiktok, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export const HeaderBlog = () => {
    const [addClassMenu, setAddClassMenu] = useState<boolean>(false);
    const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

    const [isHeaderHidden, setIsHeaderHidden] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

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
        const body = document.body;

        if (visibleMenu) {
            const scrollPosition = document.documentElement.scrollTop;

            body.style.top = `-${scrollPosition}px`;
            body.classList.add(styles.noscroll);
        } else {
            const scrollPosition = -parseInt(body.style.top);
            body.style.top = '';
            body.classList.remove(styles.noscroll);
            window.scrollTo(0, scrollPosition);
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


    const handleNewsletterClick = () => {
        const newsletterSection = document.getElementById('newsletterSectionId');
        if (newsletterSection) {
            newsletterSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header id={styles.headerBlog} className={isHeaderHidden ? styles.hidden : ''}>

            { visibleMenu ? <SideMenuBlog closeMenu={closeMenu} translateStyle={addClassMenu} /> : null }

            <div className={styles.leftHeader}>
                <button className={styles.burgerMenu} onClick={openMenu} aria-label='Abrir menu lateral'>
                    <BurgerMenuIcon />
                    <span>MENU</span>
                </button>
            </div>

            <div className={styles.middleHeader}>
                <LonyLogoHeader />
            </div>

            <div className={styles.rightHeader}>
                <button onClick={handleNewsletterClick} aria-label='Ir até a seção de Newsletter'>NEWSLETTER</button>
                <div className={styles.socialMedia}>
                    <a href="https://instagram.com/ladies.of.newyork/" target="_blank" rel="noopener noreferrer" title='Instagram'><FaInstagram /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" title='Pinterest'><FaPinterestP /></a>
                    <a href="https://www.tiktok.com/@ladies.of.new.york" target="_blank" rel="noopener noreferrer" title='TikTok'><FaTiktok /></a>
                    <a href="https://www.linkedin.com/company/lony-ladies-of-new-york" target="_blank" rel="noopener noreferrer" title='LinkedIn'><FaLinkedinIn /></a>
                </div>
            </div>
        </header>
    )
}