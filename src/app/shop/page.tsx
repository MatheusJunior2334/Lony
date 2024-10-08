import Image from "next/image"

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth"

import { ShopLayout } from "@/layout/shopLayout"
import { LogoutBtn } from "@/components/shop/logoutBtn"
import Link from "next/link"

import DefaultUserImage from '../../../public/assets/images/testimonials/UserDefaultImage.webp';

const ShopLonyPage = async () => {
    const session = await getServerSession(authOptions);
    console.log("Session user:", session?.user)
    
    return (
        <ShopLayout>
            {session?.user ? (
                <div>
                    <h2>
                        Loja Lony - Seja bem vindo(a) {session?.user.name || session?.user.lastName}!
                    </h2>
                    <Image
                        src={session.user.image || DefaultUserImage}
                        alt={session.user.name || 'Profile Image'}
                        width={100}
                        height={100}
                        quality={100}
                        priority
                    />
                    <p>A página está em desenvolvimento</p>
                    <LogoutBtn />
                </div>
            ) : (
                <>
                    <h2>Página em desenvolvimento</h2>
                    <h2>Por favor, faça login para ver a página</h2>
                    <p>Usuário: {session ? session.user.toString() : 'Erro'}</p>
                    <Link href='/auth/login' >Ir para tela de login</Link>
                </> 
            )}
        </ShopLayout>
    )
}

export default ShopLonyPage