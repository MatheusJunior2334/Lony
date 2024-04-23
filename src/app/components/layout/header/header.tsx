import React, { useEffect, useState } from 'react';

import styles from './header.module.scss';
import { LonyLogoHeader } from '../../../../../public/assets/images/LonyLogoHeader';
import { HamburgerMenuIcon } from '../../../../../public/assets/icons/HamburgerMenuIcon';
import { SideMenu } from './sideMenu';

export const Header = () => {
    const [addClassMenu, setAddClassMenu] = useState<boolean>(false);
    const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

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

    return (
        <header id={styles.header}>

            { visibleMenu ? <SideMenu closeMenu={closeMenu} translateStyle={addClassMenu} visibleMenu={visibleMenu} /> : null }

            <div className={styles.leftHeader}>
                <div className={styles.burgerMenu} onClick={openMenu}>
                    <HamburgerMenuIcon />
                    <span>Menu</span>
                </div>
            </div>

            <div className={styles.middleHeader}>
                <LonyLogoHeader />
            </div>

            <div className={styles.rightHeader}></div>

        </header>
    )
}