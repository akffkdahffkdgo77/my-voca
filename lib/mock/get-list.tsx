'use client';

import { getWords } from '@utils/localStorage';

export type WordListType = {
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

export const getList = async (): Promise<WordListType[]> => {
    return new Promise((resolve) => {
        const list = getWords();
        setTimeout(() => {
            resolve(list);
        }, 100);
    });
};
