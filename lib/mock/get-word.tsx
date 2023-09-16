'use client';

import { DataType, getWords } from '@utils/data';

export const getWord = async (idx: string): Promise<DataType> => {
    return new Promise((resolve) => {
        const list: DataType[] = getWords();
        const data = list.filter((val) => val.idx.toString() === idx)[0];
        setTimeout(() => {
            resolve(data);
        }, 100);
    });
};
