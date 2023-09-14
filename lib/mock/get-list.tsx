'use client';

import { DataListType, getWords } from '@utils/data';

export const getList = async (): Promise<DataListType> => {
    return new Promise((resolve) => {
        const list = getWords();
        setTimeout(() => {
            resolve(list);
        }, 100);
    });
};
