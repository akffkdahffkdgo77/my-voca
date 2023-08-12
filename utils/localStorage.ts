'use client';

export type WordType = {
    idx: number;
    title: string;
    createdAt: string;
    words: {
        wordIdx: number;
        failCount: number;
        successCount: number;
        word: string;
        definition: string;
    }[];
};

export type WordListType = WordType[];

export function getLocalStorage(name: string) {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem(name)) {
            return JSON.parse(localStorage.getItem(name) as string);
        }
    }

    return '';
}

export function setLocalStorage(name: string, value: unknown[]) {
    if (typeof window !== 'undefined') {
        localStorage.setItem(name, JSON.stringify(value));
    }
}

export function getWords() {
    return getLocalStorage('words') || [];
}

export function getWord(idx: string) {
    const wordList: WordListType = getWords();
    return wordList.filter((word) => word.idx.toString() === idx)?.[0];
}
