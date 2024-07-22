import Link from "next/link"
import styles from '../styles/layout/not-found.module.scss';

export default function Error404() {
    return (
        <>
            <h2>Página errada, volte para a tela inicial:</h2>
            <Link href="/home"><button aria-label="Tela inicial">clique aqui</button></Link>
        </>
    )
}