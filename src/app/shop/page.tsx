import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth"

import { ShopLayout } from "@/layout/shopLayout"

import { MainCarouselShop } from "@/components/shop/mainCarouselShop";
import { MainCategoriesShop } from "@/components/shop/mainCategoriesShop";
import { FashionShowcase } from "@/components/shop/fashionShowcase";
import { OurWorkSection } from "@/components/home/ourWork";
import { LanguageProvider } from "@/contexts/languageContext";

const slides = [
    { id: 1, image: '/assets/images/shop/CarouselImage1.png', background: '/assets/images/shop/backgroundExample.jpg' },
    { id: 2, image: '/assets/images/shop/CarouselImage2.png', background: '/assets/images/shop/backgroundExample2.jpg' },
    { id: 3, image: '/assets/images/shop/CarouselImage3.png', background: '/assets/images/shop/backgroundExample.jpg' },
]

const images: { image: string; clothingType: string; orientation: "vertical" | "horizontal" }[] = [
    { image: '/assets/images/shop/VestimentaAzul.png', clothingType: 'Vestidos', orientation: 'vertical' },
    { image: '/assets/images/shop/JaquetaJeans.png', clothingType: 'Jaquetas Jeans', orientation: 'vertical' },
    { image: '/assets/images/shop/VestimentaPreta2.png', clothingType: 'Vestimenta Preta', orientation: 'vertical' },
    { image: '/assets/images/shop/ImagemMaior.png', clothingType: 'A definir...', orientation: 'horizontal' },
    { image: '/assets/images/shop/VestimentaPreta.png', clothingType: 'Vestimenta Preta', orientation: 'vertical' },
]

const ShopLonyPage = async () => {
    // const session = await getServerSession(authOptions);
    // console.log("Session user:", session?.user)
    
    return (
        <LanguageProvider>
            <ShopLayout>
                <MainCarouselShop data={slides} />
                <MainCategoriesShop />
                <FashionShowcase images={images} /> 
                <OurWorkSection />
            </ShopLayout>
        </LanguageProvider>
    )
}

export default ShopLonyPage