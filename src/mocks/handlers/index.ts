import { HttpResponse, delay, http } from 'msw';

import { wordList } from 'mocks/dummy/word';

// delay : https://mswjs.io/docs/api/delay/#implicit-delay
export const handlers = [
    // NOTES: 리스트 조회
    http.get('/list', async () => {
        await delay(3000);
        return HttpResponse.json(wordList, { status: 200 });
    }),
    // NOTES: 상세 조회
    http.get('/word/:id', async ({ params: { id } }) => {
        await delay();
        const word = wordList.find((val) => val.wordListIdx === id);
        return HttpResponse.json(word, { status: 200 });
    }),
    // NOTES: 수정
    http.put('/word/:id', async () => {
        await delay();
        // TODO: update
        return HttpResponse.json(null, { status: 200 });
    })
];
