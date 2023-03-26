import { useState } from 'react';

import { ArrowPathIcon } from '@heroicons/react/24/outline';

type ContentProps = {
    index: number;
    dataset: { word: string; definition: string }[];
};

export default function Content({ index, dataset }: ContentProps) {
    const [isWord, setIsWord] = useState(true);

    return (
        <div
            className={`relative border border-slate-900 dark:border-slate-300 rounded-md p-5 w-[500px] h-[300px] flex items-center justify-center font-medium ${
                isWord ? 'text-[52px]' : 'text-[24px]'
            }`}
        >
            <div className="absolute top-2.5 left-2.5 border rounded-full w-8 h-8 [line-height:32px] bg-slate-900 text-slate-50 border-slate-900 dark:bg-slate-300 dark:border-slate-300 dark:text-slate-900 text-[14px] text-center font-bold font-mono">
                {index + 1}
            </div>
            <button className="absolute top-2.5 right-2.5 text-[12px] font-bold" type="button" onClick={() => window.location.reload()}>
                Shuffle
            </button>
            {dataset[index][isWord ? 'word' : 'definition']}
            <button className="absolute right-2.5 bottom-2.5 text-[12px] animate-pulse font-bold" type="button" onClick={() => setIsWord((prev) => !prev)}>
                <ArrowPathIcon className="w-5 h-5" />
            </button>
        </div>
    );
}
