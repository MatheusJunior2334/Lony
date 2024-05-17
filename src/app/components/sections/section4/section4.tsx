import styles from '../../../styles/section4.module.scss';

export const Section4 = () => {
    return (
        <section id={styles.section4}>
            <div>
                <video src='/assets/videos/Lony Video.mp4' autoPlay={true} muted={true} loop={true} />
            </div>

            <h2>Seção 4</h2>
            <p>Em desenvolvimento</p>
        </section>
    )
}