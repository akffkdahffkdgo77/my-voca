import axios from 'axios';

import { WordList } from 'mocks/dummy/word';

export const getWordList = async (): Promise<WordList[]> => {
    const { data } = await axios.get('/list');

    return data;
};

export const getWord = async (id: string): Promise<WordList> => {
    const { data } = await axios.get(`/${id}`);

    return data;
};
