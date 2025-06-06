'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/shared/footerMain.module.scss';

import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/languageContext';

import LonyLogo from '../../../public/assets/images/LonyFooterLogo.webp';

import { ArrowIcon } from '../../../public/assets/icons/arrowIcon';
import { FaInstagram, FaPinterestP, FaYoutube, FaTiktok } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

export const FooterMain = () => {
    const { translations } = useLanguage();
    const path = usePathname();

    let footerHome = false;
    let footerOurWorks = false;
    let footerAbout = false;

    let activeClass = '';

    if (path === '/home') {
        footerOurWorks = true;
        footerAbout = true;
        activeClass = styles.pageHomeClass;
    } else if (path === '/loja') {
        footerHome = true;
        footerAbout = true;
        activeClass = styles.pageWorksClass;
    } else if (path === '/sobre') {
        footerHome = true;
        footerOurWorks = true;
        activeClass = styles.pageAboutClass;
    }

    return (
        <footer id={styles.footer}>
            <div className={styles.topFooter}>
                <nav className={activeClass}>
                    <div className={styles.footerLogoDiv}>
                        <Image
                            src={LonyLogo}
                            alt='Logo do Lony'
                            width={250}
                            height={167.31}
                            sizes='(max-width: 1280px) 240px, 250px'
                            loading='lazy'
                        />
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
                            <Link href='/loja'>
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
                            <Link href='/sobre'>
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
                            <a href="https://instagram.com/ladies.of.newyork/" target="_blank" rel="noopener noreferrer" title='Instagram'><FaInstagram /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" title='Pinterest'><FaPinterestP /></a>
                            <a href="https://www.tiktok.com/@ladies.of.new.york" target="_blank" rel="noopener noreferrer" title='TikTok'><FaTiktok /></a>
                            <a href="https://www.linkedin.com/company/lony-ladies-of-new-york" target="_blank" rel="noopener noreferrer" title='LinkedIn'><BsLinkedin /></a>
                            <a href="https://www.youtube.com/@LadiesOfNewYork" target="_blank" rel="noopener noreferrer" title='Youtube'><FaYoutube /></a>
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