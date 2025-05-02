import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

type Word = {
    id: number;
    name: string;
    category: string | null;
}

interface WordItemProps {
    word: Word;
    index: number;
    moveWord: (dragIndex: number, hoverIndex: number, category: string | null) => void;
    onDropCategory: (id: number, category: string) => void;
    onReturn: (id: number) => void;
    isDraggable?: boolean;
    category?: string | null;
    completed: boolean;
    isCorrect: boolean;
}

export default function WordItem({
    word,
    index,
    moveWord,
    onDropCategory,
    onReturn,
    isDraggable = false,
    category = null
}: WordItemProps) {
    const ref = useRef<HTMLDivElement>(null);

    const [{ handleId }, drop] = useDrop({
        accept: 'word',
        collect: monitor => ({
            handleId: monitor.getHandlerId()
        }),
        hover(item: any, monitor) {
            if (!ref.current || item.id === word.id || item.category !== word.category) return

            const dragIndex = item.index;
            const hoverIndex = index;

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

            moveWord(dragIndex, hoverIndex, category);
            item.index = hoverIndex;
        }
    })

    const [{ isDragging }, drag] = useDrag({
        type: 'word',
        item: () => ({ id: word.id, index, category }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    drag(drop(ref));

    return (
        <div
            ref={ref}
            data-handler-id={handleId}
            style={{ opacity: `${isDragging ? '0.3' : '1'}` }}
        >
            {word.name}
        </div>
    )
}