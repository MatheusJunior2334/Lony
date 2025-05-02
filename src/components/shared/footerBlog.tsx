'use client'

import styles from '../../styles/shared/footerBlog.module.scss';

import { FaInstagram, FaPinterestP, FaTiktok, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export const FooterBlog = () => {
    return (
        <footer id={styles.footerBlog}>
            <div className={styles.lonyBlog}>
                <h3>LONY - LADIES OF NEW YORK | BLOG</h3>
            </div>
            <div className={styles.pageRights}>
                <h4>© 2025 - Todos os Direitos Reservados</h4>
            </div>
            <div className={styles.socialMedia}>
                <nav>
                    <h3>NOSSAS REDES</h3>
                    <div className={styles.socialIcons}>
                        <a href="https://instagram.com/ladies.of.newyork/" target="_blank" rel="noopener noreferrer" title='Instagram'><FaInstagram /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" title='Pinterest'><FaPinterestP /></a>
                        <a href="https://www.tiktok.com/@ladies.of.new.york" target="_blank" rel="noopener noreferrer" title='TikTok'><FaTiktok /></a>
                        <a href="https://www.linkedin.com/company/lony-ladies-of-new-york" target="_blank" rel="noopener noreferrer" title='LinkedIn'><FaLinkedinIn /></a>
                        <a href="https://www.youtube.com/@LadiesOfNewYork" target="_blank" rel="noopener noreferrer" title='Youtube'><FaYoutube /></a>
                    </div>
                </nav>
            </div>

        </footer>
    )
}