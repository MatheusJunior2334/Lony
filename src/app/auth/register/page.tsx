import styles from '../../../styles/auth/registerPage.module.scss';
import { Metadata } from 'next';

import { LoginRegisterLayout } from "@/layout/loginRegisterLayout";
import { RegisterForm } from '@/components/auth/registerForm';
import { LonyLogoHeader } from '../../../../public/assets/images/LonyLogoHeader';

export const metadata: Metadata = {
    title: 'Registrar'
}

export default function RegisterPage() {
    return (
        <LoginRegisterLayout flipBackground={true}>
             <span className={styles.lony}>
                <LonyLogoHeader />
            </span>
            <RegisterForm />
            <span className={styles.ladies}>
                Ladies of New York
            </span>
        </LoginRegisterLayout>
    )
}