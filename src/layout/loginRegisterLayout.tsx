import { BackgroundMain } from "@/components/auth/backgroundMain"

interface LoginRegisterLayoutProps {
    children: React.ReactNode;
    flipBackground?: boolean;
}

export const LoginRegisterLayout = ({ children, flipBackground = false }: Readonly<LoginRegisterLayoutProps>) => {
    return (
        <main>
            <BackgroundMain flipBackground={flipBackground}>
                {children}
            </BackgroundMain>
        </main>
    )
}