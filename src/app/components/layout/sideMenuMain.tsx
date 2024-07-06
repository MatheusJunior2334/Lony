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
                    <button onClick={closeMenu} title={`${translations['header.sideMenu.closeMenu']}`} aria-label='Fechar menu'>
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
                            <li key={index} className={path === item.pagePath ? styles.activeLine : ''}>
                                <Link href={item.pagePath} >
                                    {item.icon}
                                    {getText(item.textKey)}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.sideMenuWoman}>
                        <Image
                            src={SideMenuWoman}
                            alt='Desenho de Mulher em pé'
                            width={381.75}
                            height={792}
                            quality={50}
                            loading='lazy'
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