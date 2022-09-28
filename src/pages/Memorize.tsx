import { useState } from 'react';

interface IVocaList {
    word: string;
    definition: string;
}

function randomize(data: IVocaList[]) {
    const arr: IVocaList[] = [];
    const max = data.length;

    while (arr.length !== data.length) {
        const random = Math.floor(Math.random() * (max - 0) + 0);
        const index = arr.findIndex((d) => d.word === data[random]?.word && d.definition === data[random]?.definition);
        if (index === -1) {
            const randomData = data[random] as IVocaList;
            arr.push(randomData);
        }
    }

    return arr;
}

export default function Memorize() {
    const voca = JSON.parse(localStorage.getItem('words') || '');
    const dataset = voca.length && randomize(voca);
    const [index, setIndex] = useState(0);

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="border border-black rounded-md p-5 w-[400px] h-[300px] flex items-center justify-center text-[24px] font-medium">{dataset[index].word}</div>
        </div>
    );
}
