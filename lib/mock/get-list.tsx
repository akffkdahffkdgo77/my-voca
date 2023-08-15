'use client';

import { WordListType, getWords } from '@utils/localStorage';

export const getList = async (): Promise<WordListType> => {
    return new Promise((resolve) => {
        const list = getWords();
        setTimeout(() => {
            resolve(list);
        }, 100);
    });
};
