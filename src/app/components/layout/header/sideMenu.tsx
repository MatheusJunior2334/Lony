import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/sideMenu.module.scss';
import { XIcon } from '../../../../../public/assets/icons/xIcon';
import { LanguagesSwitch } from '../../UI/languagesSwitch';

import { useLanguage } from '../../../../app/contexts/languageContext';

interface SideMenuProps {
    closeMenu: () => void;
    translateStyle: boolean;
}

interface LineItem {
    pagePath: string;
    textKey: string;
}

const lineItemsContent: LineItem[] = [
    { pagePath: '/home', textKey: 'home' },
    { pagePath: '/', textKey: 'works' },
    { pagePath: '/about', textKey: 'about' },
]

export const SideMenu: React.FC<SideMenuProps> = ({ closeMenu, translateStyle }) => {
    const { translations } = useLanguage();

    const getText = (key: string) => {
        switch (key) {
            case 'home':
                return translations['header.sideMenu.home']
            case 'works':
                return translations['header.sideMenu.ourWorks'];
            case 'about':
                return translations['header.sideMenu.about']
            default:
                return '';
        }
    }

    return(
        <div id={styles.sideMenu}>
            <div className={`${styles.leftSide} ${translateStyle ? styles.open : styles.close}`}>

                <div className={styles.exitButtonDiv}>
                    <button onClick={closeMenu} title={`${translations['header.sideMenu.closeMenu']}`}>
                        <XIcon />
                    </button>
                </div>

                <nav className={styles.navBar}>

                    <ul className={styles.pagePaths}>
                        {lineItemsContent.map((item, index) => (
                            <Link href={item.pagePath} key={index}>
                                <li>{getText(item.textKey)}</li>
                            </Link>
                        ))}
                    </ul>

                    <div>
                        <LanguagesSwitch />
                    </div>
                </nav>
            </div>

            <div className={`${styles.rightSide} ${translateStyle ? styles.open : styles.close}`} onClick={closeMenu}></div>
        </div>
    )
}