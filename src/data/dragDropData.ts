import { DragDropGameProps } from "@/types/dragDrop"

export const dragDropGames: Record<string, DragDropGameProps> = {
    "moda-sustentavel": {
        title: "Classifique os itens do armário",
        instructions: "Arraste os itens para a categoria correta",
        categories: ["Sustentável", "Poluente"],
        items: [
          { id: "1", name: "Vestido de linho", category: "Sustentável" },
          { id: "2", name: "Calça de poliéster", category: "Poluente" },
        ],
    
    }
}