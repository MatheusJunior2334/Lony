import Image from 'next/image';

import styles from './Header.module.scss';
import LonyLogoHeader from '../../../../public/assets/images/LonyLogo2.png';

export const Header = () => {
    return (
        <header id={styles.header}>
            <div className={styles.leftHeader}></div>
            <div className={styles.middleHeader}>
                <Image src={LonyLogoHeader} width={200} height={200} alt='Lony logo' priority />
            </div>
            <div className={styles.rightHeader}></div>
        </header>
    )
}