import { getLocalStorage, setLocalStorage } from './localStorage';

export type WordsType = {
    wordIdx: number;
    failCount: number;
    successCount: number;
    word: string;
    definition: string;
};

export type DataType = {
    idx: number;
    title: string;
    createdAt: number;
    words: WordsType[];
};

export type DataListType = DataType[];

export function getWords() {
    return getLocalStorage('words') || [];
}

export function getWord(idx: string) {
    const wordList: DataListType = getWords();
    return wordList.filter((word) => word.idx.toString() === idx)?.[0];
}

export function addWord(newWord: DataType) {
    const prevList = getWords();
    setLocalStorage('words', [...prevList, newWord]);
}
