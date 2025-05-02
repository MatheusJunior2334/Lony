import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import styles from '../../styles/shared/sideMenuMain.module.scss';
import { usePathname, useRouter } from 'next/navigation';

import { useLanguage } from '@/contexts/languageContext';
import { XIcon } from '../../../public/assets/icons/xIcon';

import { HomeIcon } from '../../../public/assets/icons/homeIcon';
import { OurWorkIcon } from '../../../public/assets/icons/ourWorkIcon';
import { AboutUsIcon } from '../../../public/assets/icons/aboutUsIcon';
import { BlogIcon } from '../../../public/assets/icons/blogIcon';
import { LonyLogoHeader } from '../../../public/assets/images/LonyLogoHeader';

import { LanguagesSwitch } from '../common/languagesSwitch';

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
    { pagePath: '/loja', icon: <OurWorkIcon />, textKey: 'works' },
    { pagePath: '/sobre', icon: <AboutUsIcon />, textKey: 'about' },
    { pagePath: '/blog', icon: <BlogIcon />, textKey: 'blog' }
]

export const SideMenuMain: React.FC<SideMenuProps> = ({ closeMenu, translateStyle }) => {
    const path = usePathname();
    const router = useRouter();
    const { translations } = useLanguage();

    const getText = (key: string) => {
        switch (key) {
            case 'home':
                return translations['header.sideMenu.home']
            case 'works':
                return translations['header.sideMenu.ourWorks']
            case 'about':
                return translations['header.sideMenu.about']
            case 'blog':
                return 'Blog'
            default:
                return '';
        }
    }

    const handleLinkClick = (href: string) => {
        closeMenu();

        setTimeout(() => {
            router.push(href);
        }, 300)
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
                                <button onClick={() => handleLinkClick(item.pagePath)} aria-label={`Abrir a página: ${getText(item.textKey)}`}>
                                    {item.icon}
                                    {getText(item.textKey)}
                                </button>
                            </li>
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