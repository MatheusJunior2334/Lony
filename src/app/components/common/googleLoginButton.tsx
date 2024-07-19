import styles from '../../styles/common/googleLoginButton.module.scss';

import { GoogleIcon } from '../../../../public/assets/icons/googleIcon';
import Link from 'next/link';

export const GoogleLoginButton = () => {
    return (
        <Link href='/auth/' className={styles.googleBtn} aria-label='Fazer login com sua conta google' title='Login com o Google'>
            <span>
                LOGIN COM O GOOGLE <GoogleIcon />
            </span>
        </Link>
    )
}