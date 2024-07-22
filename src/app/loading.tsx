import { Suspense } from 'react';
import Image from 'next/image';
import styles from '../styles/layout/loading.module.scss';

export default function LoadingPage() {
    const dots = '...';

    const spans = dots.split('').map((char, index) => (
        <span key={index}>
            {char}
        </span>
    ))

    return (
        <div id={styles.loadingPage}>
            <Suspense fallback={<ModelFrame />}>
                <video
                    src={'/assets/videos/FashionModelWalking.mp4'}
                    autoPlay
                    loop
                    muted
                    playsInline
                    width={400}
                    height={400}
                />
            </Suspense>
            <p>
                {spans}
            </p>
        </div>
    )
}


const ModelFrame = () => {
    return <Image src={'/assets/videos/FashionModelWalkingFrame.png'} alt='Model Walking' width={400} height={400} sizes='(max-width: 480px) 90vw, 400px' priority />
}