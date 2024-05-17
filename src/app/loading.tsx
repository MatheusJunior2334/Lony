import Image from 'next/image';
import styles from './styles/loading.module.scss';
import model from '../../public/assets/gifs/FashionModelWalking.gif';

export default function LoadingPage() {
    const dots = '...';

    const spans = dots.split('').map((char, index) => (
        <span key={index}>
            {char}
        </span>
    ))

    return (
        <div id={styles.loadingPage}>
            <Image src={model} alt='Model Gif' width={480} height={480} unoptimized priority />
            <p>
                {spans}
            </p>
        </div>
    )
}