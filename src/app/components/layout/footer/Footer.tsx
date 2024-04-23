import styles from './Footer.module.scss';
import { LonyLogo } from "../../../../../public/assets/images/LonyLogo"

export const Footer = () => {
    return (
        <footer id={styles.footer}>
            <LonyLogo />
        </footer>
    )
}