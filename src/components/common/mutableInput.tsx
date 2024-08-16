import React, { useState } from "react"
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"
import styles from '@/styles/common/mutableInput.module.scss'

interface MutableInputProps {
    type: 'text' | 'email' | 'password';
    label: string;
    placeholder: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MutableInput: React.FC<MutableInputProps> = ({ type, label, placeholder, id, value, onChange }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <div className={styles.inputContainer}>
            <label htmlFor={id}>{label}</label>
            {type === 'password' ? (
                <div className={styles.passwordContent}>
                    <input
                        aria-label={placeholder}
                        type={showPassword ? 'text' : 'password'}
                        placeholder={placeholder}
                        id={id}
                        value={value}
                        onChange={onChange}
                        autoComplete="current-password"
                    />
                    <button
                        type="button"
                        className={styles.passwordToggleIcon}
                        onClick={togglePasswordVisibility}
                        aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                    >
                        {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    </button>
                </div>
            ) : (
                <input
                    aria-label={placeholder}
                    type={type}
                    placeholder={placeholder}
                    id={id}
                    value={value}
                    onChange={onChange}
                    autoComplete={type}
                />
            )}
        </div>
    )
}