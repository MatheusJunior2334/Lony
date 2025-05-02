export interface Item {
    id: string;
    name: string;
    category: string;
}

export interface DragDropGameProps {
    title: string;
    instructions: string;
    categories: string[];
    items: Item[];
}