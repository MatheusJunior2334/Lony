import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import styles from '../../styles/shared/sideMenuBlog.module.scss';
import { usePathname, useRouter } from 'next/navigation';

import { XIcon } from '../../../public/assets/icons/xIcon';
import { FaInstagram, FaPinterestP, FaTiktok, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

import { HomeIcon } from '../../../public/assets/icons/homeIcon';
import { LonyLogoHeader } from '../../../public/assets/images/LonyLogoHeader';

const Image = dynamic(() => import('next/image'), { ssr: false });

interface SideMenuProps {
    closeMenu: () => void;
    translateStyle: boolean;
}
interface LineItem {
    pagePath: string;
    icon?: React.ReactNode;
    textKey: string;
}

const lineItemsContent: LineItem[] = [
    { pagePath: '/blog', textKey: 'home' },
    { pagePath: '/loja', textKey: 'works' },
    { pagePath: '/sobre', textKey: 'about' },
    { pagePath: '/home', icon: <HomeIcon />, textKey: 'mainHome' }
]

export const SideMenuBlog: React.FC<SideMenuProps> = ({ closeMenu, translateStyle }) => {
    const path = usePathname();
    const router = useRouter();

    const getText = (key: string) => {
        switch (key) {
            case 'home':
                return 'Home | Blog'
            case 'works':
                return 'Loja'
            case 'about':
                return 'Sobre Nós'
            case 'mainHome':
                return 'Tela Principal'
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
                    <button onClick={closeMenu} title={'Fechar menu'} aria-label='Fechar menu'>
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

                    <div className={styles.socialMedia}>
                        <a href="https://instagram.com/ladies.of.newyork/" target="_blank" rel="noopener noreferrer" title='Instagram'><FaInstagram /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" title='Pinterest'><FaPinterestP /></a>
                        <a href="https://www.tiktok.com/@ladies.of.new.york" target="_blank" rel="noopener noreferrer" title='TikTok'><FaTiktok /></a>
                        <a href="https://www.linkedin.com/company/lony-ladies-of-new-york" target="_blank" rel="noopener noreferrer" title='LinkedIn'><FaLinkedinIn /></a>
                        <a href="https://www.youtube.com/@LadiesOfNewYork" target="_blank" rel="noopener noreferrer" title='Youtube'><FaYoutube /></a>
                    </div>
                </nav>
            </div>

            <div className={`${styles.rightSide} ${translateStyle ? styles.open : styles.close}`} onClick={closeMenu}></div>
        </div>
    )
}