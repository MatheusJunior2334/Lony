import Link from "next/link"
import styles from './styles/layout/loading.module.scss'

export default function Error404() {
    return (
        <>
            <h2>Página errada, volte para a tela inicial:</h2>
            <Link href="/home"><button>clique aqui</button></Link>
        </>
    )
}