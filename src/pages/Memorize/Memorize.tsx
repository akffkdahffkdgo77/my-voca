import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { CustomizedButton } from 'components';

import { useFetch } from 'hooks';
import { getWord } from 'lib/api/getWord';
import { DataType, WordsType } from 'utils/data';

export function randomize(data: WordsType[]) {
    const arr: WordsType[] = [];
    const max = data.length;

    while (arr.length !== data.length) {
        const random = Math.floor(Math.random() * (max - 0) + 0);
        const index = arr.findIndex((d) => d.word === data[random]?.word && d.definition === data[random]?.definition);
        if (index === -1) {
            const randomData = data[random] as WordsType;
            arr.push(randomData);
        }
    }

    return arr;
}

export default function Memorize() {
    const { id } = useParams();
    const { data } = useFetch<DataType>(() => getWord(id!));

    const dataset = useMemo(() => {
        if (data?.words) {
            return randomize(data.words);
        }
    }, [data]);
    const [index, setIndex] = useState(0);
    const [isWord, setIsWord] = useState(true);

    const handleClick = (type: 'next' | 'prev') => {
        if (dataset) {
            if (type === 'prev') {
                setIndex((prev) => (prev > 0 ? prev - 1 : dataset.length - 1));
            } else {
                setIndex((prev) => (prev < dataset.length - 1 ? prev + 1 : 0));
            }
        }
    };

    return (
        <div className="flex w-full flex-col items-center justify-center text-slate-900 [height:calc(100vh-100px)] dark:text-slate-50">
            <div
                className={`relative mx-10 flex h-[300px] w-[calc(100%-40px)] max-w-[500px] items-center justify-center rounded-md border border-slate-900 p-5 font-medium dark:border-slate-300 ${
                    isWord ? 'text-[52px]' : 'text-[24px]'
                }`}
            >
                <div className="absolute left-2.5 top-2.5 h-8 w-8 rounded-full border border-slate-900 bg-slate-900 text-center font-mono text-[14px] font-bold text-slate-50 [line-height:32px] dark:border-slate-300 dark:bg-slate-300 dark:text-slate-900">
                    {index + 1}
                </div>
                <CustomizedButton onClick={() => window.location.reload()} className="absolute right-2.5 top-2.5 text-[12px] font-bold">
                    Shuffle
                </CustomizedButton>
                {data?.words?.[index]?.[isWord ? 'word' : 'definition']}
                <CustomizedButton onClick={() => setIsWord((prev) => !prev)} className="absolute bottom-2.5 right-2.5 animate-pulse text-[12px] font-bold">
                    <ArrowPathIcon className="h-5 w-5" />
                </CustomizedButton>
            </div>
            <div className="mt-2.5 flex w-[calc(100%-40px)] max-w-[500px] items-center justify-end gap-x-[5px]">
                <CustomizedButton
                    onClick={() => handleClick('prev')}
                    className="rounded-md border border-slate-900 bg-slate-50 px-2.5 py-[5px] text-[12px] font-bold text-slate-900 dark:border-slate-300 dark:bg-slate-900 dark:text-slate-50"
                >
                    이전
                </CustomizedButton>
                <CustomizedButton onClick={() => handleClick('next')} className="rounded-md bg-slate-900 px-2.5 py-[5px] text-[12px] font-bold text-slate-50 dark:bg-slate-500 dark:text-slate-900">
                    다음
                </CustomizedButton>
            </div>
        </div>
    );
}