import { v4 as uuid } from 'uuid';

import { formatDate } from './format';
import { getLocalStorage, setLocalStorage } from './localStorage';

export type WordType = {
  count: number;
  definition: string[];
  isHighlighted: false;
  isMemorized: false;
  word: string;
  wordIdx: string;
};

export type DataType = {
  category: string;
  status: string;
  wordListDate: number;
  wordListIdx: string;
  wordListName: string;
  words: WordType[];
};

export type DataListType = DataType[];

export function createBaseData() {
  const curTime = new Date().getTime();
  const newWordList: DataType = {
    wordListIdx: uuid(),
    wordListName: `단어장 ${formatDate(curTime, 'YYYY.MM.DD HH:mm:ss')}`,
    wordListDate: curTime,
    status: 'TODO',
    category: '영어 단어',
    words: [],
  };

  return newWordList;
}

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

  if (!getLocalStorage('startTime')) {
    const currentTime = `${new Date().getTime()}`;
    setLocalStorage('startTime', currentTime);
  }
}
