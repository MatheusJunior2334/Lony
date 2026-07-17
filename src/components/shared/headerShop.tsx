'use client'

import { useState, useEffect } from 'react';

import { LonyLogoHeader } from '../../../public/assets/images/LonyLogoHeader';
import styles from '../../styles/shared/headerShop.module.scss';

import { SideMenuShop } from './sideMenuShop';
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
            <span>Loja</span>
        </form>
    )
}

export const HeaderShop = () => {
    const [addClassMenu, setAddClassMenu] = useState<boolean>(false);
    const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

    const [isHeaderHidden, setIsHeaderHidden] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    const openMenu = () => {
        setAddClassMenu(true);
        setVisibleMenu(true);
    }

    const closeMenu = () => {
        setAddClassMenu(false);

        setTimeout(() => {
            setVisibleMenu(false)
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
            if (window.scrollY > lastScrollY && window.scrollY > 135) {
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

            { visibleMenu ? <SideMenuShop closeMenu={closeMenu} translateStyle={addClassMenu} /> : null }

            <div className={styles.headerContent}>
                <LonyLogoHeader className={styles.lonyLogo} />
                <SearchComponent />
                <button className={styles.burgerMenu}><BurgerMenuIcon /></button>
                <ul className={styles.userActions}>
                    <li title='Meu perfil'><button><ProfileDefaultIcon /></button></li>
                    <li title='Favoritos'><button><FavoritesIcon /></button></li>
                    <li title='Minhas compras' className={styles.bagIcon}><button onClick={openMenu}><BagIcon /></button></li>
                </ul>

                <nav className={styles.categoriesMenu}>
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
                </nav>
            </div>
        </header>
    )
}