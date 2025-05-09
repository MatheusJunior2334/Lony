import { DragDropGameProps } from "./dragDrop";

export interface BlogContentDiv {
    subtitle: string;
    image?: string;
    imageAlt?: string;
    imageSource?: string;
    imageSourceLink?: string;
    paragraphsBefore?: string[];
    paragraphsAfter?: string[];
    listTitle?: string;
    listItems?: string[];
}

export interface BlogPost {
    slug: string;
    title: string;
    postDay?: string;
    postMonth: string;
    postYear: string;
    author: string;
    theme: string;
    coverImage: string;
    coverImageSource?: string;
    coverImageSourceLink?: string;
    content: BlogContentDiv[];
    game?: DragDropGameProps;
}