'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import styles from '../../styles/auth/loginForm.module.scss';
import { GoogleLoginButton, FacebookLoginIcon } from "../common/loginFGButton";
import { LoginRegisterFormLayout } from "./loginRegisterFormLayout";
import { MutableInput } from "../common/mutableInput";
import { signIn } from "next-auth/react";

export const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError('E-mail e senha são obrigatórios.')
            return;
        }
        
        try {
            const response = await signIn('credentials', {
                redirect: false,
                email,
                password
            });
    
            if (response?.ok) {
                router.push('/loja')
            } else {
                setError('E-mail ou senha inválidos. \n Por favor, tente novamente.')
            }
        } catch (error) {
            setError('Erro ao fazer login')
        }
    }

    useEffect(() => {
        if (error) {
            setError(null)
        }
    }, [email, password])

    return (
        <LoginRegisterFormLayout
            pageStyles={styles.loginPage}
            backgroundImage={styles.backgroundImage}
            formOnSubmit={handleLogin}
            leftChildren={
                <fieldset>
                    <legend>LOGIN</legend>

                    <div className={styles.googleFaceBtn}>
                        <GoogleLoginButton />
                        <FacebookLoginIcon />
                    </div>               

                    {error
                        ?
                        <div className={styles.errorDivLeft}>
                            <p>{error}</p>
                        </div>
                        :
                        <div className={styles.enterEmailText}>
                            <div><hr /></div>
                            <p>OU ENTRE COM SEU E-MAIL</p>
                            <div><hr /></div>
                        </div>
                    }

                    <MutableInput
                        type="email"
                        label="E-mail:"
                        placeholder="exemplo@email.com"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <MutableInput
                        type="password"
                        label="Senha:"
                        placeholder="Digite sua senha aqui:"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Link href="/auth/login" aria-label="Recuperar sua senha" className={styles.decoratedLink}>Esqueceu sua senha?</Link>

                    <div className={styles.login}>
                        <button type="submit" aria-label="Fazer login" title="Fazer login">FAZER LOGIN</button>
                    </div>

                    <p>Não tem sua conta Lony? <Link href="/auth/registrar" aria-label="Criar conta Lony" className={styles.decoratedLink}>Cadastre-se</Link></p>
                </fieldset>
            }
            rightChildren={
                error && <div className={styles.errorDivRight}><p>{error}</p></div>
            }
        />
    )
}