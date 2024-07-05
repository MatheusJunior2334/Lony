import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../styles/layout/sideMenuMain.module.scss';

import { useLanguage } from '../../../app/contexts/languageContext';
import { XIcon } from '../../../../public/assets/icons/xIcon';
import { LanguagesSwitch } from '../common/languagesSwitch';

import { HomeIcon } from '../../../../public/assets/icons/homeIcon';
import { OurWorkIcon } from '../../../../public/assets/icons/ourWorkIcon';
import { AboutUsIcon } from '../../../../public/assets/icons/aboutUsIcon';
import { LonyLogoHeader } from '../../../../public/assets/images/LonyLogoHeader';

import SideMenuWoman from '../../../../public/assets/images/home/SideMenuWoman.png';

interface SideMenuProps {
    closeMenu: () => void;
    translateStyle: boolean;
}
interface LineItem {
    pagePath: string;
    icon: React.ReactNode;
    textKey: string;
}

const lineItemsContent: LineItem[] = [
    { pagePath: '/home', icon: <HomeIcon />, textKey: 'home' },
    { pagePath: '/', icon: <OurWorkIcon />, textKey: 'works' },
    { pagePath: '/about', icon: <AboutUsIcon />, textKey: 'about' },
]

export const SideMenuMain: React.FC<SideMenuProps> = ({ closeMenu, translateStyle }) => {
    const path = usePathname();
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
                    <button tabIndex={1} onClick={closeMenu} title={`${translations['header.sideMenu.closeMenu']}`}>
                        <XIcon />
                    </button>
                    
                    <button tabIndex={2}>
                        <LonyLogoHeader />
                    </button>

                    <span />
                </div>

                <nav className={styles.navBar}>

                    <ul className={styles.pagePaths}>
                        {lineItemsContent.map((item, index) => (
                            <li key={index} className={path === item.pagePath ? styles.activeLine : ''}>
                                <Link href={item.pagePath} tabIndex={index + 2} >
                                    {item.icon}
                                    {getText(item.textKey)}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.sideMenuWoman}>
                        <Image
                            src={SideMenuWoman}
                            alt='Side menu woman draw'
                            width={192}
                            height={400}
                            priority
                        />
                    </div>

                    <div>
                        <LanguagesSwitch />
                    </div>
                </nav>
            </div>

            <div className={`${styles.rightSide} ${translateStyle ? styles.open : styles.close}`} onClick={closeMenu}></div>
        </div>
    )
}