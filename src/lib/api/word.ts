import axios from 'axios';

import { WordList } from 'mocks/dummy/word';

export const getWordList = async (): Promise<WordList[]> => {
    const { data } = await axios.get('/list');

    return data;
};

export const getWord = async (id: string): Promise<WordList> => {
    const { data } = await axios.get(`/word/${id}`);

    return data;
};

// TODO: success 메시지
// TODO: 데이터 저장
export const updateInfo = async (id: string, body: WordList) => {
    const { data } = await axios.put(`/word/${id}`, { body });

    return data;
};
