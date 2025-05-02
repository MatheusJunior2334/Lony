'use client'

import { useState, useEffect } from 'react';

import { LonyLogoHeader } from '../../../public/assets/images/LonyLogoHeader';
import styles from '../../styles/shared/headerShop.module.scss';

import { BurgerMenuIcon } from '../../../public/assets/icons/burgerMenuIcon';
import { ProfileDefaultIcon } from '../../../public/assets/icons/profileDefaultIcon';
import { FavoritesIcon } from '../../../public/assets/icons/favoritesIcon';
import { BagIcon } from '../../../public/assets/icons/bagIcon';
import { SearchIcon } from '../../../public/assets/icons/searchIcon';

const SearchComponent = () => {
    const [addClass, setAddClass] = useState<boolean>(false);

    return (
        <form action="" className={`${styles.search} ${addClass ? styles.focused : ''}`}>
            <div>
                <SearchIcon />
                <input
                    type="search"
                    placeholder='O que está procurando?'
                    onFocus={() => setAddClass(true)}
                    onBlur={() => setAddClass(false)}
                />
            </div>
            <span>Shop</span>
        </form>
    )
}

export const HeaderShop = () => {
    const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

    const [isHeaderHidden, setIsHeaderHidden] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

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

    return (
        <header id={styles.headerShop} className={isHeaderHidden ? styles.headerHidden : ''}>
            <div className={styles.topSide}>
                <div className={styles.leftHeader}>
                    <SearchComponent />
                    <button className={styles.burgerMenu}><BurgerMenuIcon /></button>
                </div>
                <div className={styles.midHeader}>
                    <LonyLogoHeader />
                </div>
                <div className={styles.rightHeader}>
                    <ul>
                        <li className={styles.burgerMenu}><button><BurgerMenuIcon /></button></li>
                        <li title='Meu perfil'><button><ProfileDefaultIcon /></button></li>
                        <li title='Favoritos'><button><FavoritesIcon /></button></li>
                        <li title='Minhas compras' className={styles.bagIcon}><button><BagIcon /></button></li>
                    </ul>
                </div>
            </div>
            <nav className={styles.bottomSide}>
                <ul>
                    <li>Ofertas</li>
                    <li>Novidades</li>
                    <li>Moda feminina</li>
                    <li>Calçados</li>
                    <li>Acessórios</li>
                    <li>Moda Íntima</li>
                    <li>Casa</li>
                    <li>Esportivo</li>
                </ul>

                <SearchComponent />
            </nav>
        </header>
    )
}