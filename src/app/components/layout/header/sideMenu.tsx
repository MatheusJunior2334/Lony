import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../../styles/sideMenu.module.scss';

import { useLanguage } from '../../../../app/contexts/languageContext';
import { XIcon } from '../../../../../public/assets/icons/xIcon';
import { LanguagesSwitch } from '../../UI/languagesSwitch';

import { HomeIcon } from '../../../../../public/assets/icons/homeIcon';
import { OurWorkIcon } from '../../../../../public/assets/icons/ourWorkIcon';
import { AboutUsIcon } from '../../../../../public/assets/icons/aboutUsIcon';
import { LonyLogoHeader } from '../../../../../public/assets/images/LonyLogoHeader';

import SideMenuWoman from '../../../../../public/assets/images/SideMenuWoman.png';

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

export const SideMenu: React.FC<SideMenuProps> = ({ closeMenu, translateStyle }) => {
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
                    <button onClick={closeMenu} title={`${translations['header.sideMenu.closeMenu']}`}>
                        <XIcon />
                    </button>
                    
                    <div>
                        <LonyLogoHeader />
                    </div>

                    <span />
                </div>

                <nav className={styles.navBar}>

                    <ul className={styles.pagePaths}>
                        {lineItemsContent.map((item, index) => (
                            <Link href={item.pagePath} key={index}>
                                <li className={path === item.pagePath ? styles.activeLine : ''}>
                                    {item.icon}
                                    {getText(item.textKey)}
                                </li>
                            </Link>
                        ))}
                    </ul>

                    <div className={styles.sideMenuWoman}>
                        <Image
                            src={SideMenuWoman}
                            alt='Side menu woman draw'
                            width={290}
                            height={600}
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