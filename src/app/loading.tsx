import { lazy } from 'react';
import styles from './styles/layout/loading.module.scss';
import model from '../../public/assets/gifs/FashionModelWalking.gif';

const Image = lazy(() => import('next/image'))

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