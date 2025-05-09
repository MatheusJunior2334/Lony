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
        coverImageSource: "Freepik",
        coverImageSourceLink: "https://br.freepik.com/",
        content: [
            {
                subtitle: "🌱 O que é moda sustentável?",
                paragraphsBefore: [
                    "Moda sustentável é um movimento dentro da indústria da moda que busca reduzir o impacto ambiental e social da produção de roupas. Isso envolve usar materiais menos poluentes, reduzir o consumo de água, reaproveitar tecidos e garantir condições de trabalho justas para quem faz nossas roupas.",
                    "Mais do que uma tendência, a moda sustentável é uma necessidade urgente diante das mudanças climáticas e da poluição causada por grandes produções de roupas descartáveis."
                ],
            },
            {
                subtitle: "🧵 Tecidos que ajudam o planeta",
                image: "/assets/images/blog/moda-sustentavel/tecidos-ajudam-planeta.jpg",
                imageAlt: "Imagem de tecidos sustentáveis sobre uma cadeira de madeira",
                imageSource: "Freepik",
                imageSourceLink: "https://br.freepik.com/",
                paragraphsBefore: [
                    "A escolha do tecido faz toda a diferença. Alguns materiais naturais e recicláveis exigem menos recursos naturais e se decompõem mais facilmente, diminuindo o acúmulo de lixo têxtil.",
                ],
                listTitle: "Tecidos sustentáveis:",
                listItems: [
                    "Algodão orgânico – cultivado sem agrotóxicos, com menor uso de água.",
                    "Linho – fibra natural durável e biodegradável.",
                    "Cânhamo – resistente, de rápido crescimento e pouca necessidade de pesticidas.",
                    "Tencel (lyocell) – feito a partir de celulose de árvores com baixo uso de químicos.",
                    "Fibra de bambu – renovável e antibacteriana (quando processada corretamente).",
                    "Tecidos reciclados, como poliéster reciclado (rPET) – reaproveita garrafas PET."
                ]
            },
            {
                subtitle: "❌ Tecidos que poluem e prejudicam",
                image: "/assets/images/blog/moda-sustentavel/tecidos-poluem-planeta.jpg",
                imageAlt: "Imagem de um lixão com roupas descartadas",
                imageSource: "Freepik",
                imageSourceLink: "https://br.freepik.com/",
                paragraphsBefore: [
                    "Nem todos os tecidos são amigos do meio ambiente. Muitos são derivados do petróleo ou processados com produtos tóxicos. Eles liberam microplásticos quando lavados e demoram centenas de anos para se decompor.",
                ],
                listTitle: "Tecidos poluentes:",
                listItems: [
                    "Poliéster virgem – feito de petróleo, libera microplásticos",
                    "Nylon – outro derivado do petróleo, altamente poluente.",
                    "Acrílico – sua produção emite gases tóxicos.",
                    "Viscose (comuns não ecológicas) – embora seja feita de celulose, exige muito químico para o processamento.",
                    "PVC – usado em roupas impermeáveis, altamente tóxico.",
                ]
            },
            {
                subtitle: "♻️ O papel do consumidor consciente",
                image: "/assets/images/blog/moda-sustentavel/consumidor-papel-consciente.jpg",
                imageAlt: "Imagem de uma mulher comprando roupas no brechó",
                imageSource: "Freepik",
                imageSourceLink: "https://br.freepik.com/",
                listTitle: "Além de escolher bem os tecidos, o consumidor pode fazer a diferença com atitudes sustentáveis:",
                listItems: [
                    "Priorizar marcas que sejam transparentes e éticas",
                    "Comprar menos, mas com mais qualidade",
                    "Reutilizar, reformar e doar roupas",
                    "Preferir brechós e roupas de segunda mão",
                    "Lavar com menos frequência e usar sabão biodegradável",
                ],
                paragraphsAfter: [
                    "Cada pequena decisão conta na hora de construir uma moda que respeita o meio ambiente e as pessoas, e o Lony segue comprometido com essas iniciativas."
                ]
            }
        ],
        game: {
            title: "🎮 Pronto para jogar?",
            instructions: [
                "Agora que você sabe o essencial sobre moda sustentável, que tal testar seus conhecimentos?",
                "Acesse o minijogo abaixo e arraste os tecidos para a categoria correta!",
                "Vamos juntos aprender e fazer escolhas mais conscientes 🌎"
            ],
            categories: ["Ecológico", "Poluente"],
            items: [
              { id: "1", name: "Algodão orgânico", category: "Ecológico" },
              { id: "2", name: "Linho", category: "Ecológico" },
              { id: "3", name: "Cânhamo", category: "Ecológico" },
              { id: "4", name: "Tencel (lyocell)", category: "Ecológico" },
              { id: "5", name: "Fibra de bambu", category: "Ecológico" },
              { id: "6", name: "Poliéster reciclado", category: "Ecológico" },

              { id: "7", name: "Poliéster virgem", category: "Poluente" },
              { id: "8", name: "Nylon", category: "Poluente" },
              { id: "9", name: "Acrílico", category: "Poluente" },
              { id: "10", name: "Viscose comum", category: "Poluente" },
              { id: "11", name: "PVC", category: "Poluente" },
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
        coverImageSource: "Freepik",
        coverImageSourceLink: "https://br.freepik.com/",
        content: [
           
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
        coverImageSource: "Freepik",
        coverImageSourceLink: "https://br.freepik.com/",
        content: []
    },
]

export const blogPosts: BlogPost[] = rawPosts.map(post => ({
    ...post,
    coverImage: `/assets/images/blog/${post.slug}/thumbnail.webp`
}))