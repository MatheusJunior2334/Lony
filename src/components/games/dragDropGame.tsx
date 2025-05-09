'use client'

import React, { useEffect, useState } from "react";
import styles from '../../styles/games/dragDropGame.module.scss';
import { DragDropGameProps, Item } from "@/types/dragDrop";
import { useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";
import WordItem from "./wordItem";

const MAX_ITEMS = 8;

type GameItem = {
    id: string;
    name: string;
    category: string | null;
    correctCategory: string;
}

export default function DragDropGame({ title, instructions, categories, items }: DragDropGameProps) {
    const [words, setWords] = useState<GameItem[]>([]);
    const [completed, setCompleted] = useState<boolean>(false);
    const [result, setResult] = useState<{ correct: number; incorrect: number }>({ correct: 0, incorrect: 0 })

    const moveWord = (dragIndex: number, hoverIndex: number, category: string | null) => {
        const updatedWords = [...words];
        const categoryWords = updatedWords.filter(w => w.category === category);
        const fromWord = categoryWords[dragIndex];
        const toWord = categoryWords[hoverIndex];

        const allSameCategoryIndexes = updatedWords.reduce((acc, w, idx) => {
            if (w.category === category) acc.push(idx)
            return acc
        }, [] as number[])

        if (!fromWord || !toWord) return;

        const dragIdxInGlobal = allSameCategoryIndexes[dragIndex];
        const hoverIdxInGlobal = allSameCategoryIndexes[hoverIndex];

        updatedWords.splice(dragIdxInGlobal, 1);
        updatedWords.splice(hoverIdxInGlobal, 0, fromWord);
        setWords(updatedWords);
    }

    const handleDrop = (wordId: string, category: string) => {
        setWords(prev =>
            prev.map(w => (w.id === wordId ? { ...w, category } : w))
        )
    }

    const unassignedWords = words.filter(w => w.category === null)

    const initializeGame = () => {
        const shuffled = [...items]
            .sort(() => 0.5 - Math.random())
            .slice(0, MAX_ITEMS)
            .map(item => ({
                ...item,
                category: null,
                correctCategory: item.category
            }))
        setWords(shuffled);
        setCompleted(false);
        setResult({ correct: 0, incorrect: 0 })
    }

    const checkAnswers = () => {
        let correct = 0;
        let incorrect = 0;

        words.forEach(word => {
            if (word.category === word.correctCategory) {
                correct++;
            } else {
                incorrect++;
            }
        });

        setCompleted(true);
        setResult({ correct, incorrect });
    }

    useEffect(() => {
        initializeGame()
    }, [])

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.container}>
                <h2>{title}</h2>

                {instructions.map((instruction, index) => (
                    <p key={index}>{instruction}</p>
                ))}

                <CategoryColumn
                    title="Palavras"
                    words={unassignedWords}
                    onDrop={handleDrop}
                    onMove={moveWord}
                    category={null}
                />

                {categories.map((category) => {
                    const categoryWords = words.filter(w => w.category === category)
                    return (
                        <CategoryColumn
                            key={category}
                            title={category}
                            words={categoryWords}
                            onDrop={handleDrop}
                            onMove={moveWord}
                            category={category}
                            completed={completed}
                        />
                    )
                })}
                

                {!completed ? (
                    <button className={styles.confirmBtn} onClick={checkAnswers}>Finalizar</button>
                ) : (
                    <>
                        <div>
                            <p>✅ Acertos: {result.correct}</p>
                            <p>❌ Erros: {result.incorrect}</p>
                        </div>
                        <button className={styles.confirmBtn} onClick={initializeGame}>Reiniciar</button>
                    </>
                )}
            </div>
        </DndProvider>
    )
}

function CategoryColumn({ title, words, onDrop, onMove, category, completed }: any) {
    const [, dropRef] = useDrop({
        accept: 'word',
        drop: (item: any) => {
            onDrop(item.id, category)
        }
    })

    return (
        <div className={styles.categoryColumn} ref={dropRef as unknown as React.Ref<HTMLDivElement>}>
            <h3>{title}</h3>
            {words.map((word: any, index: number) => (
                <WordItem
                    key={word.id}
                    word={word}
                    index={index}
                    moveWord={onMove}
                    onDropCategory={onDrop}
                    onReturn={() => onDrop(word.id, null)}
                    isDraggable={!completed}
                    category={category}
                    completed={completed}
                    isCorrect={word.category === word.correctCategory}
                />
            ))}
        </div>
    )
}