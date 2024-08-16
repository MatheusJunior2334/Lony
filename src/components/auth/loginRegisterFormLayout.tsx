import styles from '../../styles/auth/loginRegisterFormLayout.module.scss';

import { AnimatedComponent } from '../animations/animatedComponent';

interface LoginRegisterFormLayoutProps {
    leftChildren: React.ReactNode;
    rightChildren: React.ReactNode;
    pageStyles: string;
    backgroundImage: string;
    invertRow?: boolean;
    formOnSubmit: (e: React.FormEvent) => void;
}

export const LoginRegisterFormLayout: React.FC<LoginRegisterFormLayoutProps> = ({ leftChildren, rightChildren, pageStyles, backgroundImage, invertRow = false, formOnSubmit }) => {
    return (
        <div className={`${styles.formContainer} ${pageStyles} ${invertRow ? styles.invertRow : ''}`}>
            <div className={styles.formLeft}>
               <form onSubmit={formOnSubmit}>
                    {leftChildren}
               </form>
            </div>

            <AnimatedComponent className={`${styles.formRight} ${backgroundImage}`} opacity={0} transitionDuration={1}>
                {rightChildren}
            </AnimatedComponent>
        </div>
    )
}