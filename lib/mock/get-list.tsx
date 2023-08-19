'use client';

import { WordListType, getWords } from '@utils/data';

export const getList = async (): Promise<WordListType> => {
    return new Promise((resolve) => {
        const list = getWords();
        setTimeout(() => {
            resolve(list);
        }, 100);
    });
};
