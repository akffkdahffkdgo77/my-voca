import { v4 as uuid } from 'uuid';

import { formatDate } from 'utils/format';

export enum STATUS {
    TODO = 'todo',
    PROGRESS = 'progress',
    DONE = 'done'
}

export type WordList = {
    wordListIdx: string;
    wordListName: string;
    wordListDate: number;
    status: STATUS;
    category: string;
    words: {
        wordIdx: string;
        word: string;
        definition: string;
        count: number;
        isHighlighted: boolean;
        isMemorized: boolean;
    }[];
};

const CURRENT_DATE = new Date();

export const wordList = [
    {
        wordListIdx: uuid(),
        wordListName: `단어장#${formatDate(CURRENT_DATE, 'YYMMDDHHmmss')}`,
        wordListDate: CURRENT_DATE.getTime(),
        status: STATUS.TODO,
        category: '영어 단어',
        words: [
            {
                wordIdx: uuid(),
                word: 'word',
                definition: '단어',
                count: 0,
                isHighlighted: false,
                isMemorized: false
            },
            {
                wordIdx: uuid(),
                word: 'word',
                definition: '단어',
                count: 0,
                isHighlighted: false,
                isMemorized: false
            }
        ]
    }
];
