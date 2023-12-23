import { getLocalStorage, setLocalStorage } from './localStorage';

export type WordType = {
    wordIdx: string;
    word: string;
    definition: string[];
    count: number;
    isHighlighted: false;
    isMemorized: false;
};

export type DataType = {
    wordListIdx: string;
    wordListName: string;
    wordListDate: number;
    status: string;
    category: string;
    words: WordType[];
};

export type DataListType = DataType[];

export function getWords(): DataListType {
    return getLocalStorage('words') || [];
}

export function getWord(idx: string) {
    const wordList: DataListType = getWords();
    return wordList.filter((word) => word.wordListIdx.toString() === idx)?.[0];
}

export function addWord(newWord: DataType) {
    const prevList = getWords();
    setLocalStorage('words', [...prevList, newWord]);
}
