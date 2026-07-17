import { XIcon } from '../../../public/assets/icons/xIcon';
import styles from '../../styles/shared/sideMenuShop.module.scss';

interface SideMenuProps {
    closeMenu: () => void;
    translateStyle: boolean;
}

export const SideMenuShop: React.FC<SideMenuProps> = ({ closeMenu, translateStyle }) => {
    return (
        <div id={styles.sideMenu}>
            <div className={`${styles.leftSide} ${translateStyle ? styles.open : styles.close}`} onClick={closeMenu} />
            <div className={`${styles.rightSide} ${translateStyle ? styles.open : styles.close}`}>
                <div className={styles.exitButtonDiv}>
                    <button onClick={closeMenu} aria-label='Fechar menu'>
                        <XIcon />
                    </button>
                    
                    <div>
                        <p>Meu Carrinho</p>
                    </div>
                </div>
            </div>
        </div>
    )
}