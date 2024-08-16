'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import styles from '../../styles/auth/registerForm.module.scss';
import { GoogleLoginButton, FacebookLoginIcon } from "../common/loginFGButton";
import { LoginRegisterFormLayout } from "./loginRegisterFormLayout";
import { MutableInput } from "../common/mutableInput";
import { signIn } from "next-auth/react";

export const RegisterForm = () => {
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    const validatePassword = (password: string): boolean => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !lastName || !email || !password || !confirmPassword) {
            setError('Por favor, preencha todos os campos.');
            return;
        }
        if (password !== confirmPassword) {
            setError('As senhas não coincidem. Por favor, tente novamente.');
            return;
        }
        if (!validatePassword(password)) {
            setError('A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.')
            return
        }

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, lastName, email, password })
            })

            if (response.ok) {
                await signIn('credentials', {
                    redirect: false,
                    email,
                    password
                })
                router.push('/loja')
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Erro ao registrar')
            }
        } catch (error) {
            setError('Erro ao registrar. Tente novamente.')
        }
    }

    useEffect(() => {
        if (error) {
            setError(null)
        }
    }, [name, lastName, email, password, confirmPassword])

    return (
        <LoginRegisterFormLayout
            pageStyles={styles.registerPage}
            backgroundImage={styles.backgroundImage}
            invertRow
            formOnSubmit={handleRegister}
            leftChildren={
                <fieldset>
                    <legend>REGISTRAR</legend>

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
                            <p>OU REGISTRE-SE COM SEU E-MAIL</p>
                            <div><hr /></div>
                        </div>
                    }

                    <div className={styles.nameLastName}>
                        <MutableInput
                            type="text"
                            label="Nome:"
                            placeholder="Nome:"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                       <MutableInput
                            type="text"
                            label="Sobrenome:"
                            placeholder="Sobrenome:"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

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

                    <MutableInput
                        type="password"
                        label="Confirmar senha:"
                        placeholder="Digite sua senha novamente:"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <p>
                        Ao prosseguir, você concorda com nossos <Link href="/auth/registrar" aria-label="Termos de Serviço" className={styles.decoratedLink}>Termos de Serviço</Link> &
                        <Link href="/" aria-label="Política de Privacidade" className={styles.decoratedLink}>Política de Privacidade</Link>
                    </p>

                    <div className={styles.login}>
                        <button type="submit" aria-label="Registrar-se" title="Registrar">REGISTRAR</button>
                    </div>

                    <p>Já é usuário Lony? <Link href="/auth/login" aria-label="Criar conta Lony" className={styles.decoratedLink}>Faça Login</Link></p>
                </fieldset>
            }
            rightChildren={
                error && <div className={styles.errorDivRight}><p>{error}</p></div>
            }
        />
    )
}