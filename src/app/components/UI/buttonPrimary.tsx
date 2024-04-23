import Link from 'next/link';
import styles from './buttonPrimary.module.scss';

interface ButtonPrimaryProps {
    pageUrl: string;
    text: string
}

export const ButtonPrimary = ({ pageUrl, text }: ButtonPrimaryProps) => {
    return (
        <Link href={pageUrl}>
            <button id={styles.btnPrimary} type='button'>
                {text}
            </button>
        </Link>
    )
}