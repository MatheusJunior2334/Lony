import dynamic from 'next/dynamic';
import styles from './styles/layout/loading.module.scss';

export default function LoadingPage() {
    const dots = '...';

    const spans = dots.split('').map((char, index) => (
        <span key={index}>
            {char}
        </span>
    ))

    return (
        <div id={styles.loadingPage}>
            <video
                src={'/assets/videos/FashionModelWalking.mp4'}
                autoPlay
                loop
                muted
                playsInline
                width={400}
                height={400}
            />
            <p>
                {spans}
            </p>
        </div>
    )
}