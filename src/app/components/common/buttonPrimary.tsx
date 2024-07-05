import Link from 'next/link';
import styles from '../../styles/common/buttonPrimary.module.scss';

interface ButtonPrimaryProps {
    pageUrl: string;
    text: string;
}

export const ButtonPrimary = ({ pageUrl, text }: ButtonPrimaryProps) => {
    return (
        <Link href={pageUrl}>
            <button id={styles.btnPrimary} type='button' aria-label={text}>
                {text}
            </button>
        </Link>
    )
}