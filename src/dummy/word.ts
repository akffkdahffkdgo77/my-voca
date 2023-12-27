import { v4 as uuid } from 'uuid';

import { formatDate } from 'utils/format';

export enum STATUS {
    TODO = 'todo',
    PROGRESS = 'progress',
    DONE = 'done'
}

export const STATUS_OPTIONS = [
    { label: 'TODO', value: STATUS.TODO },
    { label: 'PROGRESS', value: STATUS.PROGRESS },
    { label: 'DONE', value: STATUS.DONE }
];

export type WordList = {
    wordListIdx: string;
    wordListName: string;
    wordListDate: number;
    status: STATUS;
    category: string;
    words: {
        wordIdx: string;
        word: string;
        definition: string[];
        count: number;
        isHighlighted: boolean;
        isMemorized: boolean;
    }[];
};

const CURRENT_DATE = new Date();

export const wordList = [
    {
        wordListIdx: '11254b3b-0543-4763-9474-d64a6026570d',
        wordListName: `단어장#${formatDate(CURRENT_DATE, 'YYMMDDHHmmss')}`,
        wordListDate: CURRENT_DATE.getTime(),
        status: STATUS.TODO,
        category: '영어 단어',
        words: [
            {
                wordIdx: uuid(),
                word: 'word',
                definition: ['단어', '단어2'],
                count: 0,
                isHighlighted: false,
                isMemorized: false
            },
            {
                wordIdx: uuid(),
                word: 'word',
                definition: ['단어', '단어2'],
                count: 0,
                isHighlighted: false,
                isMemorized: false
            }
        ]
    },
    {
        wordListIdx: 'ba7b6df5-998f-48d5-a30a-467a2eca31f3',
        wordListName: `단어장#${formatDate(new Date(CURRENT_DATE).setDate(CURRENT_DATE.getDate() - 1), 'YYMMDDHHmmss')}`,
        wordListDate: CURRENT_DATE.getTime(),
        status: STATUS.DONE,
        category: '영어 단어',
        words: [
            {
                wordIdx: uuid(),
                word: 'word',
                definition: ['단어', '단어2'],
                count: 0,
                isHighlighted: false,
                isMemorized: false
            },
            {
                wordIdx: uuid(),
                word: 'word',
                definition: ['단어', '단어2'],
                count: 0,
                isHighlighted: false,
                isMemorized: false
            }
        ]
    },
    {
        wordListIdx: '13b4e3df-4088-4298-b16e-9ee37ebe6442',
        wordListName: `단어장#${formatDate(new Date(CURRENT_DATE).setDate(CURRENT_DATE.getDate() - 2), 'YYMMDDHHmmss')}`,
        wordListDate: CURRENT_DATE.getTime(),
        status: STATUS.PROGRESS,
        category: '영어 단어',
        words: [
            {
                wordIdx: uuid(),
                word: 'word',
                definition: ['단어', '단어2'],
                count: 0,
                isHighlighted: false,
                isMemorized: false
            },
            {
                wordIdx: uuid(),
                word: 'word',
                definition: ['단어', '단어2'],
                count: 0,
                isHighlighted: false,
                isMemorized: false
            }
        ]
    }
];
