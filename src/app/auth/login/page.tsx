import styles from '../../../styles/auth/loginPage.module.scss';
import { Metadata } from 'next';

import { LoginRegisterLayout } from '@/layout/loginRegisterLayout';
import { LoginForm } from '@/components/auth/loginForm';
import { LonyLogoHeader } from '../../../../public/assets/images/LonyLogoHeader';

export const metadata: Metadata = {
    title: 'Login'
}

export default function LoginPage() {
    return (
        <LoginRegisterLayout>
            <span className={styles.lony}>
                <LonyLogoHeader />
            </span>
            <LoginForm />
            <span className={styles.ladies}>
                Ladies of New York
            </span>
        </LoginRegisterLayout>
    )
}