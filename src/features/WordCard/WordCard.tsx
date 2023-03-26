import { useMemo, useState } from 'react';

import Button from 'features/WordCard/Button';
import Content from 'features/WordCard/Content';
import { getWords } from 'utils/localStorage';

type VocaListType = {
    word: string;
    definition: string;
};

export function randomize(data: VocaListType[]) {
    const arr: VocaListType[] = [];
    const max = data.length;

    while (arr.length !== data.length) {
        const random = Math.floor(Math.random() * (max - 0) + 0);
        const index = arr.findIndex((d) => d.word === data[random]?.word && d.definition === data[random]?.definition);
        if (index === -1) {
            const randomData = data[random] as VocaListType;
            arr.push(randomData);
        }
    }

    return arr;
}

export default function WordCard() {
    const dataset = useMemo(() => randomize(getWords() as VocaListType[]), []);

    const [index, setIndex] = useState(0);

    return (
        <div className="w-full [height:calc(100vh-100px)] flex items-center justify-center flex-col dark:text-slate-50 text-slate-900">
            <Content index={index} dataset={dataset} />
            <Button setIndex={setIndex} dataset={dataset} />
        </div>
    );
}
