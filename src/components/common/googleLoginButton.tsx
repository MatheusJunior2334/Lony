import { useState } from 'react';

import styles from '../../styles/common/googleLoginButton.module.scss';

import { GoogleIcon } from '../../../public/assets/icons/googleIcon';
import { signIn } from 'next-auth/react';

export const GoogleLoginButton = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loginWithGoogle = async () => {
        try {
            setIsLoading(true);
            await signIn('google', { callbackUrl: '/shop' })
        } catch (err) {
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <button
            className={styles.googleBtn}
            aria-label='Fazer login com sua conta google'
            title='Login com o Google'
            onClick={loginWithGoogle}
            disabled={isLoading}
        >
            <span>
                LOGIN COM O GOOGLE
                
                {isLoading ? (
                    <svg
                        className={styles.spinIcon}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <path d='M21 12a9 9 0 1 1-6.219-8.56' />
                    </svg>
                ) : <GoogleIcon />}
            </span>
        </button>
    )
}