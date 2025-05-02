'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/shared/footerShop.module.scss';

import LonyLogo from '../../../public/assets/images/LonyFooterLogo.webp';

import { FaInstagram } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import { IoLogoTiktok } from 'react-icons/io5';

export const FooterShop = () => {
    return (
        <footer id={styles.footerShop}>
            <nav>
                <div className={styles.topFooter}>
                    <div className={styles.footerLogoMedia}>
                        <Image
                            src={LonyLogo}
                            alt='Logo do Lony'
                            width={250}
                            height={167.31}
                            sizes='(max-width: 1280px) 240px, 250px'
                            loading='lazy'
                        />

                        <div className={styles.socialMedia}>
                            <h3>Siga o Lony</h3>
                            <div>
                                <a href="https://instagram.com/ladies.of.newyork/" target="_blank" rel="noopener noreferrer" title='Instagram'><FaInstagram /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer" title='Linktree'><SiLinktree /></a>
                                <a href="https://www.linkedin.com/company/lony-ladies-of-new-york" target="_blank" rel="noopener noreferrer" title='LinkedIn'><BsLinkedin /></a>
                                <a href="https://www.tiktok.com/@ladies.of.new.york" target="_blank" rel="noopener noreferrer" title='TikTok'><IoLogoTiktok /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.midFooter}>
                    <div className={styles.about}>
                        <h3>Sobre o Lony</h3>
                        <ul>
                            <li><a href="">Quem somos</a></li>
                            <li><a href="">Contato</a></li>
                        </ul>
                    </div>
                    <div className={styles.help}>
                        <h3>Ajuda e suporte</h3>
                        <ul>
                            <li><a href="">Central de atendimento</a></li>
                            <li><a href="">Perguntas frequentes</a></li>
                        </ul>
                    </div>

                    <div className={styles.account}>
                        <h3>Minha conta</h3>
                        <ul>
                            <li><a href="">Meu perfil</a></li>
                            <li><a href="">Histórico de compras</a></li>
                            <li><a href="">Produtos favoritos</a></li>
                            <li><a href="">Criar conta</a></li>
                        </ul>
                    </div>
                    
                    <div className={styles.payment}>
                        <h3>Informações de pagamento</h3>
                        <ul>
                            
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomFooter}>
                    <h4>© Lony - Ladies of New York. 2023 - 2025. Todos os direitos reservados.</h4>

                    <div>
                        <a href="">Termos de Serviço</a>
                        <a href="">Política de Privacidade</a>
                    </div>
                </div>
            </nav>
        </footer>
    )
}