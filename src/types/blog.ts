import { DragDropGameProps } from "./dragDrop";

export interface BlogPost {
    slug: string;
    title: string;
    postDay?: string;
    postMonth: string;
    postYear: string;
    author: string;
    theme: string;
    coverImage: string;
    content: (string | { image: string; alt: string })[];
    game?: DragDropGameProps;
}