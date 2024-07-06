'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/layout/footerMain.module.scss';

import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/contexts/languageContext';

import LonyLogo from '../../../../public/assets/images/LonyFooterLogo.png';

import { ArrowIcon } from '../../../../public/assets/icons/arrowIcon';
import { FaInstagram } from "react-icons/fa";
import { SiLinktree } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import { IoLogoTiktok } from 'react-icons/io5';

export const FooterMain = () => {
    const { translations } = useLanguage();
    const path = usePathname();

    let footerHome = false;
    let footerOurWorks = false;
    let footerAbout = false;

    let activeClass = '';

    if(path === '/home') {
        footerOurWorks = true;
        footerAbout = true;
        activeClass = styles.pageHomeClass;
    } else if (path === '/works') {
        footerHome = true;
        footerAbout = true;
        activeClass = styles.pageWorksClass;
    } else if (path === '/about') {
        footerHome = true;
        footerOurWorks = true;
        activeClass = styles.pageAboutClass;
    }

    return (
        <footer id={styles.footer}>
            <div className={styles.topFooter}>
                <nav className={activeClass}>
                    <div className={styles.footerLogoDiv}>
                        <Image src={LonyLogo} alt='Logo do Lony' width={469} height={314} priority />
                    </div>

                    {footerHome && (
                        <div className={styles.footerHomeDiv}>
                            <Link href='/home'>
                                <div className={styles.topArrow}>
                                    <h3>{translations['home.footer.homeTitle']}</h3>
                                    <ArrowIcon />
                                </div>
                            </Link>

                            <span>{translations['home.footer.homeText']}</span>
                        </div>
                    )}

                    {footerOurWorks && (
                        <div className={styles.footerOurWorksDiv}>
                            <Link href='/shop'>
                                <div className={styles.topArrow}>
                                    <h3>{translations['home.footer.ourWorksTitle']}</h3>
                                    <ArrowIcon />
                                </div>
                            </Link>

                            <span>{translations['home.footer.ourWorksText']}</span>
                        </div>
                    )}

                    {footerAbout && (
                        <div className={styles.footerAboutDiv}>
                            <Link href='/about'>
                                <div className={styles.topArrow}>
                                    <h3>{translations['home.footer.aboutTitle']}</h3>
                                    <ArrowIcon />
                                </div>
                            </Link>
                        
                            <span>{translations['home.footer.aboutText']}</span>
                        </div>
                    )}

                    <div className={styles.footerSocialMediaDiv}>
                        <h3>{translations['home.footer.socialMediaTitle']}</h3>
                        <span>{translations['home.footer.socialMediaText']}</span>

                        <div>
                            <a href="https://instagram.com/lony.ladies/" target="_blank" rel="noopener noreferrer" title='Instagram'><FaInstagram /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" title='Linktree'><SiLinktree /></a>
                            <a href="https://www.linkedin.com/company/lony-ladies-of-new-york" target="_blank" rel="noopener noreferrer" title='LinkedIn'><BsLinkedin /></a>
                            <a href="https://www.tiktok.com/@ladies.of.new.york" target="_blank" rel="noopener noreferrer" title='TikTok'><IoLogoTiktok /></a>
                        </div>
                    </div>
                </nav>
            </div>

            <hr />

            <div className={styles.bottomFooter}>
                <h4>© Lony 2024 - {translations['home.footer.developedByMatheus']} Matheus Júnior {translations['home.footer.andBianka']} Bianka Araújo</h4>
            </div>

            <span className={styles.sideLane}></span>
        </footer>
    )
}