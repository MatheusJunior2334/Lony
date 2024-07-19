'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatedComponent } from "../animations/animatedComponent";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

import styles from '../../styles/auth/loginForm.module.scss';
import { GoogleLoginButton } from "../common/googleLoginButton";

export const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    const mockLogin = (email: string, password: string): boolean => {
        return email === 'user@example.com' && password === 'password123';
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (mockLogin(email, password)) {
            router.push('/shop');
        } else {
            setError('E-mail ou senha inválidos. \n Por favor, tente novamente.')
        }
    }

    useEffect(() => {
        if (error) {
            setError(null)
        }
    }, [email, password])

    const togglePasswordVisibility = () => 
        setShowPassword(!showPassword);

    return (
        <div className={styles.loginForm}>
            <div className={styles.formLeft}>
                <form onSubmit={handleLogin}>
                    <fieldset>
                        <legend>LOGIN</legend>

                        <GoogleLoginButton />

                        {error ? <div className={styles.errorDivLeft}><p>{error}</p></div>
                        : <p className={styles.enterEmailText}>— OU ENTRE COM O SEU E-MAIL —</p>
                        }

                        <div className={styles.email}>
                            <label htmlFor="email">E-mail:</label>
                            <input
                                aria-label="Digite seu e-mail"
                                type="email"
                                placeholder="exemplo@email.com"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className={styles.password}>
                            <label htmlFor="password">Senha:</label>
                            <div className={styles.passwordContent}>
                                <input
                                    aria-label="Digite sua senha"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Digite sua senha aqui:"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                    required
                                />
                                <span
                                    className={styles.passwordToggleIcon}
                                    onClick={togglePasswordVisibility}
                                    aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                                >
                                    {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                                </span>
                            </div>
                        </div>

                        <Link href="/auth/login" aria-label="Recuperar sua senha" className={styles.decoratedLink}>Esqueceu sua senha?</Link>

                        <div className={styles.login}>
                            <button type="submit" aria-label="Fazer login" title="Fazer login">FAZER LOGIN</button>
                        </div>

                        <p>Não tem sua conta Lony? <Link href="/auth/register" aria-label="Criar conta Lony" className={styles.decoratedLink}>Cadastre-se</Link></p>
                    </fieldset>
                </form>
            </div>

            <AnimatedComponent className={styles.formRight} opacity={0} transitionDuration={1}>
                {error && <div className={styles.errorDivRight}><p>{error}</p></div>}
            </AnimatedComponent>
        </div>
    )
}