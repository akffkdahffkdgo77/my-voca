import { useMemo, useState } from 'react';

import { Link } from 'react-router-dom';

import { randomize } from 'utils';

export default function Memorize() {
    const dataset = useMemo(() => {
        const voca = localStorage.getItem('words') ? JSON.parse(localStorage.getItem('words') || '') : [];
        return randomize(voca);
    }, []);

    const [index, setIndex] = useState(0);
    const [isWord, setIsWord] = useState(true);

    return (
        <main className="w-full h-screen p-5 flex items-center justify-center flex-col gap-10">
            <Link to="/">
                <h1 className="w-full text-center text-5xl font-bold underline tracking-tighter mb-10">My Voca</h1>
            </Link>
            <div className="w-full flex items-center justify-center flex-col">
                <div className={`relative border border-black rounded-md p-5 w-[500px] h-[300px] flex items-center justify-center font-medium ${isWord ? 'text-[52px]' : 'text-[24px]'}`}>
                    <div className="absolute top-2.5 left-2.5 border rounded-full w-8 h-8 [line-height:32px] bg-black text-white border-black text-[14px] text-center font-bold font-mono">
                        {index + 1}
                    </div>
                    <button className="absolute top-2.5 right-2.5 text-[12px] font-bold" type="button" onClick={() => window.location.reload()}>
                        Shuffle
                    </button>
                    {dataset[index][isWord ? 'word' : 'definition']}
                    <button className="absolute right-2.5 bottom-2.5 text-[12px] animate-pulse font-bold" type="button" onClick={() => setIsWord((prev) => !prev)}>
                        {isWord ? 'Definition' : 'Word'}
                    </button>
                </div>
                <div className="w-[500px] mt-2.5 flex justify-end items-center gap-x-[5px]">
                    <button
                        className="bg-black rounded-md py-[5px] px-2.5 text-white text-[12px] font-bold"
                        type="button"
                        onClick={() => setIndex((prev) => (prev > 0 ? prev - 1 : dataset.length - 1))}
                    >
                        이전
                    </button>
                    <button
                        className="bg-black rounded-md py-[5px] px-2.5 text-white text-[12px] font-bold"
                        type="button"
                        onClick={() => setIndex((prev) => (prev < dataset.length - 1 ? prev + 1 : 0))}
                    >
                        다음
                    </button>
                </div>
            </div>
        </main>
    );
}
