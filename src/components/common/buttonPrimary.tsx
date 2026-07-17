import Link from 'next/link';
import styles from '../../styles/common/buttonPrimary.module.scss';

interface ButtonPrimaryProps {
    pageUrl: string;
    text: string;
    bgColour?: string;
    textColour?: string;
}

export const ButtonPrimary = ({ pageUrl, text, bgColour, textColour }: ButtonPrimaryProps) => {
    return (
        <Link href={pageUrl}>
            <button id={styles.btnPrimary} type='button' aria-label={text} style={{ backgroundColor: bgColour, color: textColour }}>
                {text}
            </button>
        </Link>
    )
}