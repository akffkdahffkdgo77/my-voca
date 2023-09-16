'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

import { CustomizedButton, TopButton } from '@components';
import { useSnackbar } from '@components/snackbar';
import { ArrowUpOnSquareIcon, CheckCircleIcon, EllipsisVerticalIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

import Skeleton from './skeleton';

import { getList } from '@api/get-list';
import { useClickAway, useFetch, useMobile } from '@hooks';
import { DataListType, addWord, getWords } from '@utils/data';
import { exportFile, importFile } from '@utils/file';
import { formatDate } from '@utils/format';
import { setLocalStorage } from '@utils/localStorage';

// TODO: Infinite Scroll
export default function List() {
    const wordItemRef = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const isMobile = useMobile();
    useClickAway<HTMLDivElement>({
        ref: wordItemRef,
        onClickOutside: () => {
            setShow('');
        }
    });

    const { isLoading, data, refetch } = useFetch<DataListType>(getList);
    const { setMessage } = useSnackbar();

    const handleDelete = (idx: number) => {
        const currentList: DataListType = getWords();
        const filteredList = currentList.filter((d) => d.idx !== idx);
        setLocalStorage('words', filteredList);
        refetch();
        setMessage('단어장이 삭제되었습니다.', { variant: 'error' });
    };

    const handleExport = (idx: number) => {
        const currentList: DataListType = getWords();
        const selectedList = currentList.filter((d) => d.idx === idx)[0];
        const wordList = selectedList.words
            .map(({ word, definition }) => `${word}:${definition}\n`)
            .toString()
            .replace(/,/g, '');
        exportFile(wordList, selectedList.title);
    };

    const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const file = e.currentTarget.files[0];
            if (file.type !== 'text/plain') {
                return;
            }
            importFile(file).then((newWordList) => {
                addWord(newWordList);
                refetch();
            });
        }
    };

    const handleSampleDownload = () => {
        fetch('/sample.txt')
            .then((res) => res.text())
            .then((res) => exportFile(res, 'sample'));
    };

    return (
        <div className="flex min-h-[calc(100vh-80px)] w-full flex-col pb-5 max-sm:min-h-[calc(100vh-64px)]">
            <h2 className="relative my-5 flex items-center pr-[50px] text-2xl font-bold text-slate-900 dark:text-slate-50 max-sm:my-3 max-sm:text-xl">
                단어장 리스트
                <CustomizedButton className="mb-auto animate-pulse" onClick={() => setModalOpen((prev) => !prev)}>
                    <QuestionMarkCircleIcon className="m-auto h-4 w-4 max-sm:h-3 max-sm:w-3" />
                </CustomizedButton>
                <label
                    htmlFor="file-import"
                    className="peer absolute right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border-2 border-red-500 text-red-500 dark:border-red-500 dark:text-red-500 max-sm:h-7 max-sm:w-7"
                >
                    <input
                        hidden
                        id="file-import"
                        type="file"
                        onChange={handleImport}
                        onClick={(e) => {
                            e.currentTarget.value = '';
                        }}
                    />
                    <ArrowUpOnSquareIcon className="m-auto h-4 w-4 max-sm:h-3 max-sm:w-3" />
                </label>
                {modalOpen && (
                    <div className="fixed bottom-0 left-0 right-0 top-0 z-[10000] flex items-center justify-center bg-black/80" role="presentation" onClick={() => setModalOpen((prev) => !prev)}>
                        <div className="relative flex h-[250px] w-[380px] flex-col items-center gap-5 rounded-md border border-slate-50 bg-slate-900 p-2.5 pt-12 text-lg text-slate-50">
                            <h3 className="text-xl text-white">다중 업로드 안내</h3>
                            <p className="mx-5 text-left text-[14px]">
                                <span className="inline-flex items-center gap-1">
                                    <CheckCircleIcon className="h-5 w-5 text-red-500" />
                                    txt 파일만 등록할 수 있습니다.
                                </span>
                                <br />
                                <span className="inline-flex items-center gap-1">
                                    <CheckCircleIcon className="h-5 w-5 text-red-500" />
                                    파일 형식은 반드시 지켜주세요.
                                </span>
                            </p>
                            <CustomizedButton onClick={handleSampleDownload} className="absolute bottom-5 h-10 w-28 rounded-md border border-slate-50 text-center text-sm font-bold">
                                샘플 다운로드
                            </CustomizedButton>
                        </div>
                    </div>
                )}
            </h2>
            <ul className="flex w-full flex-col gap-5 max-sm:gap-2.5">
                {isLoading ? (
                    <Skeleton />
                ) : (
                    data?.map(({ title, createdAt, idx }) =>
                        isMobile ? (
                            <li key={title + idx} className="relative flex h-20 flex-col justify-center gap-2.5 overflow-hidden rounded-md border text-xl text-slate-900 dark:text-slate-50">
                                <div
                                    role="button"
                                    tabIndex={0}
                                    className="h-full w-full p-3"
                                    onKeyDown={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setShow((prev) => (prev === idx.toString() ? '' : idx.toString()));
                                    }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setShow((prev) => (prev === idx.toString() ? '' : idx.toString()));
                                    }}
                                >
                                    <p className="w-full truncate text-left font-bold tracking-wide">{title}</p>
                                    <small className="block text-right text-xs">
                                        <time>{formatDate(createdAt)}</time>
                                    </small>
                                    {show === idx.toString() && (
                                        <div className="absolute bottom-0 left-0 right-0 top-0  flex items-center justify-center gap-2.5 bg-black/30 font-semibold dark:bg-black/80">
                                            <Link
                                                href={`/list/${idx}`}
                                                className="block h-8 rounded-md bg-slate-900 px-2.5 text-right text-sm leading-8 text-slate-50 hover:scale-95 dark:border dark:border-slate-50 dark:bg-transparent"
                                            >
                                                상세
                                            </Link>
                                            <Link
                                                href={`/memorize/${idx}`}
                                                className="block h-8 rounded-md bg-slate-900 px-2.5 text-right text-sm leading-8 text-slate-50 hover:scale-95 dark:border dark:border-slate-50 dark:bg-transparent"
                                            >
                                                외우기
                                            </Link>
                                            <Link
                                                href={`/practice/${idx}`}
                                                className="block h-8 rounded-md bg-slate-900 px-2.5 text-right text-sm leading-8 text-slate-50 hover:scale-95 dark:border dark:border-slate-50 dark:bg-transparent"
                                            >
                                                테스트
                                            </Link>
                                            <CustomizedButton
                                                onClick={() => {
                                                    setShow('');
                                                    handleExport(idx);
                                                }}
                                                className="block h-8 rounded-md bg-slate-900 px-2.5 text-right text-sm leading-8 text-slate-50 hover:scale-95 dark:border dark:border-slate-50 dark:bg-transparent"
                                            >
                                                다운로드
                                            </CustomizedButton>
                                            <CustomizedButton
                                                onClick={() => {
                                                    setShow('');
                                                    handleDelete(idx);
                                                }}
                                                className="h-8 w-auto rounded-md border border-red-500 bg-red-500 px-2.5 text-right text-sm leading-8 text-slate-50 hover:scale-95 dark:bg-transparent dark:text-red-500"
                                            >
                                                삭제
                                            </CustomizedButton>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ) : (
                            <li key={title + idx} className="relative rounded-md border p-5 text-2xl text-slate-900 dark:text-slate-50">
                                <p className="w-full truncate font-semibold tracking-wide">{title}</p>
                                <small className="mt-5 block text-right text-xs">
                                    <time>{formatDate(createdAt)}</time>
                                </small>
                                <div ref={wordItemRef}>
                                    <CustomizedButton onClick={() => setShow((prev) => (prev === idx.toString() ? '' : idx.toString()))} className="absolute right-5 top-6">
                                        <EllipsisVerticalIcon className="h-5 w-5 text-slate-900 dark:text-slate-50" />
                                    </CustomizedButton>
                                    {show === idx.toString() && (
                                        <ul className="absolute right-6 top-11 z-10 w-[100px] overflow-hidden rounded-md border border-slate-900 bg-slate-50 dark:border-slate-50 dark:bg-slate-900">
                                            <li className="w-full border-b border-slate-300 px-2 hover:bg-slate-200 dark:border-slate-50 dark:hover:bg-slate-800">
                                                <Link href={`/list/${idx}`} className="block h-10 text-right text-base leading-10">
                                                    상세
                                                </Link>
                                            </li>
                                            <li className="w-full border-b border-slate-300 px-2 hover:bg-slate-200 dark:border-slate-50 dark:hover:bg-slate-800">
                                                <Link href={`/practice/${idx}`} className="block h-10 text-right text-base leading-10">
                                                    테스트
                                                </Link>
                                            </li>
                                            <li className="w-full border-b border-slate-300 px-2 hover:bg-slate-200 dark:border-slate-50 dark:hover:bg-slate-800">
                                                <CustomizedButton
                                                    onClick={() => {
                                                        setShow('');
                                                        handleExport(idx);
                                                    }}
                                                    className="h-10 w-full text-right text-base leading-10"
                                                >
                                                    다운로드
                                                </CustomizedButton>
                                            </li>
                                            <li className="w-full border-b border-slate-300 px-2 hover:bg-slate-200 dark:border-slate-50 dark:hover:bg-slate-800">
                                                <CustomizedButton
                                                    onClick={() => {
                                                        setShow('');
                                                        handleDelete(idx);
                                                    }}
                                                    className="h-10 w-full text-right text-base leading-10"
                                                >
                                                    삭제
                                                </CustomizedButton>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </li>
                        )
                    )
                )}
            </ul>
            <TopButton />
        </div>
    );
}
