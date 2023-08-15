'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { CustomizedButton, TopButton } from '@components';
import { ArrowLeftIcon, TrashIcon } from '@heroicons/react/24/outline';

import { getWord } from '@api/get-word';
import { useFetch } from '@hooks';
import { WordListType, WordType, getWords, setLocalStorage } from '@utils/localStorage';

// TODO: infinite scroll
export default function DetailPage({ params }: { params: { id: string } }) {
    const { isLoading, data } = useFetch<WordType>(() => getWord(params.id));
    const navigate = useRouter();

    // TODO: confirm modal
    const handleDelete = () => {
        const currentList: WordListType = getWords();
        const filteredList = currentList.filter((d) => d.idx.toString() !== params.id);
        setLocalStorage('words', filteredList);
        navigate.replace('/list');
    };
    return (
        <div className="text-slate-900 dark:text-slate-50">
            <div className="sticky top-20 z-10 flex h-16 w-full flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 max-sm:top-16">
                <div className="relative flex w-full items-center">
                    <Link
                        href="/list"
                        title="이전 페이지로 돌아가기"
                        className="absolute left-0 flex h-8 w-8 cursor-pointer rounded-md border-2 border-slate-900 leading-10 text-slate-900 dark:border-slate-50 dark:text-slate-50 max-sm:h-7 max-sm:w-7 max-sm:leading-8"
                    >
                        <ArrowLeftIcon className="m-auto h-4 w-4 max-sm:h-3 max-sm:w-3" />
                    </Link>
                    <h2 className="h-14 w-full truncate rounded-md bg-inherit px-[50px] py-2.5 text-center font-mono text-[24px] font-semibold leading-10 text-slate-900 dark:text-slate-50 max-sm:text-[18px] max-sm:font-bold">
                        {data?.title}
                    </h2>
                    <CustomizedButton
                        onClick={handleDelete}
                        className="absolute right-0 h-8 w-8 cursor-pointer rounded-md border-2 border-red-500 text-red-500 dark:border-red-500 dark:text-red-500 max-sm:h-7 max-sm:w-7"
                    >
                        <TrashIcon className="m-auto h-4 w-4 max-sm:h-3 max-sm:w-3" />
                    </CustomizedButton>
                </div>
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul className="mt-5 space-y-2.5 max-sm:mt-2.5">
                    {data?.words.map((word) => (
                        <li key={word.wordIdx}>
                            <p className="h-10 w-full break-all rounded-md rounded-b-none border border-slate-300 p-2.5 font-mono text-[14px]">{word.word}</p>
                            <p className="min-h-[80px] w-full break-all rounded-md rounded-t-none border border-t-0 border-slate-300 p-2.5 font-mono text-[14px]">{word.definition}</p>
                        </li>
                    ))}
                </ul>
            )}
            <TopButton />
        </div>
    );
}
