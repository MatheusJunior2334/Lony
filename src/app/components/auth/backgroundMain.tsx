import styles from '../../styles/auth/backgroundMain.module.scss';

interface BackgroundMainProps {
    children: React.ReactNode;
    flipBackground?: boolean;
}

export const BackgroundMain = ({ children, flipBackground = false }: Readonly<BackgroundMainProps>) => {
    return (
        <div className={`${styles.background} ${flipBackground ? styles.flipBackground : ''}`}>
            {children}
        </div>
    )
}