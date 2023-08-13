'use client';

import { WordType, getWords } from '@utils/localStorage';

export const getWord = async (idx: string): Promise<WordType> => {
    return new Promise((resolve) => {
        const list: WordType[] = getWords();
        const data = list.filter((val) => val.idx.toString() === idx)[0];
        setTimeout(() => {
            resolve(data);
        }, 100);
    });
};
