import styles from '../../styles/auth/registerPage.module.scss';
import { LoginRegisterLayout } from "@/app/layout/loginRegisterLayout";

import { LonyLogoHeader } from '../../../../public/assets/images/LonyLogoHeader';

export default function RegisterPage() {
    return (
        <LoginRegisterLayout flipBackground={true}>
             <span className={styles.lony}>
                <LonyLogoHeader />
            </span>
            <span className={styles.ladies}>
                Ladies of New York
            </span>
        </LoginRegisterLayout>
    )
}