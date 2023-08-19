'use client';

import { getLocalStorage, setLocalStorage } from './localStorage';

export type WordType = {
    idx: number;
    title: string;
    createdAt: number;
    words: {
        wordIdx: number;
        failCount: number;
        successCount: number;
        word: string;
        definition: string;
    }[];
};

export type WordListType = WordType[];

export function getWords() {
    return getLocalStorage('words') || [];
}

export function getWord(idx: string) {
    const wordList: WordListType = getWords();
    return wordList.filter((word) => word.idx.toString() === idx)?.[0];
}

export function addWord(newWord: WordType) {
    const prevList = getWords();
    setLocalStorage('words', [...prevList, newWord]);
}
