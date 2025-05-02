import { BlogPost } from "@/types/blog"

const rawPosts = [
    {
        slug: "moda-sustentavel",
        title: "Moda sustentável: O que você precisa saber",
        postDay: "28",
        postMonth: "Abril",
        postYear: "2025",
        author: "Matheus Júnior",
        theme: "Adaptação",
        content: [
            "Aqui vai o conteúdo completo da matéria...",
            {
                image: "/assets/images/auth/RegisterImage.jpg",
                alt: "Isabela"
            },
            "Aqui descobrimos tudo de bem e do melhor"
        ],
        game: {
            title: "Classifique os itens do guarda-roupa",
            instructions: "Arraste os itens para a categoria correta.",
            categories: ["Ecológico", "Poluente"],
            items: [
              { id: "1", name: "Camisa de algodão orgânico", category: "Ecológico" },
              { id: "2", name: "Calça de poliéster", category: "Poluente" },
              { id: "3", name: "Jaqueta de couro vegano", category: "Ecológico" },
              { id: "4", name: "Vestido de nylon", category: "Poluente" }
            ]
        }
    },
    {
        slug: "estilo-de-moda",
        title: "Como descobrir e desenvolver o seu próprio estilo de moda",
        postDay: "28",
        postMonth: "Abril",
        postYear: "2025",
        author: "Bianka Araújo",
        theme: "Identidade",
        content: [
            "Aqui vai o conteúdo completo da matéria...",
            {
                image: "/assets/images/auth/RegisterImage.jpg",
                alt: "Isabela"
            },
            "Aqui descobrimos tudo de bem e do melhor"
        ]
    },
    {
        slug: "novas-tendencias",
        title: "Como incorporar as últimas tendências sem gastar muito",
        postDay: "28",
        postMonth: "Abril",
        postYear: "2025",
        author: "Ester Melo",
        theme: "Adaptação",
        content: [
            "Aqui vai o conteúdo completo da matéria...",
            {
                image: "/assets/images/auth/RegisterImage.jpg",
                alt: "Isabela"
            },
            "Aqui descobrimos tudo de bem e do melhor"
        ]
    },
]

export const blogPosts: BlogPost[] = rawPosts.map(post => ({
    ...post,
    coverImage: `/assets/images/blog/${post.slug}/thumbnail.webp`
}))