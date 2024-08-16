import { useState } from 'react';

import styles from '../../styles/common/loginFGButton.module.scss';

import { GoogleIcon } from '../../../public/assets/icons/googleIcon';
import { FacebookIcon } from '../../../public/assets/icons/facebookIcon';
import { signIn } from 'next-auth/react';

const SpinIcon = () => {
    return (
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
    )
}

export const GoogleLoginButton = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loginWithGoogle = async () => {
        try {
            setIsLoading(true);
            await signIn('google', { callbackUrl: '/loja' })
        } catch (err) {
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <button
            className={styles.loginBtn}
            aria-label='Fazer login com sua conta google'
            title='Login com o Google'
            onClick={loginWithGoogle}
            disabled={isLoading}
        >
            <span>
                GOOGLE
                {isLoading ? (
                   <SpinIcon />
                ) : <GoogleIcon />}
            </span>
        </button>
    )
}

export const FacebookLoginIcon = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loginWithFacebook = async () => {
        try {
            setIsLoading(true);
            await signIn('facebook', { callbackUrl: '/loja' })
        } catch (err) {
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <button
            className={`${styles.loginBtn} ${styles.facebook}`}
            aria-label='Fazer login com sua conta Facebook'
            title='Login com o Facebook'
            onClick={loginWithFacebook}
            disabled={isLoading}
        >
            <span>
                FACEBOOK
                {isLoading ? (
                   <SpinIcon />
                ) : <FacebookIcon />}
            </span>
        </button>
    )
}