import React from 'react';
import styles from './sideMenu.module.scss';

interface SideMenuProps {
    closeMenu: () => void;
    translateStyle: boolean;
    visibleMenu: boolean;
}

export const SideMenu: React.FC<SideMenuProps> = ({ closeMenu, translateStyle, visibleMenu }) => {
    return(
        <div id={styles.sideMenu} className={`${translateStyle ? styles.open : styles.close}`}>
            <span onClick={closeMenu}>close</span>
        </div>
    )
}