'use client';

import Link from 'next/link';
import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';

import { CustomizedButton, TopButton } from '@components';

import { WordListType, getList } from '@api/get-list';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { formatDate } from '@utils/format';

export default function List() {
    const wordItemRef = useRef<HTMLLIElement>(null);
    const [show, setShow] = useState('');

    const [isMobile, setIsMobile] = useState(true);
    const [list, setList] = useState<WordListType[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Mock API
    useEffect(() => {
        setIsLoading(true);
        getList().then((data) => {
            setList(data);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        if (window.innerWidth < 640) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: BaseSyntheticEvent | MouseEvent) => {
            if (wordItemRef && wordItemRef.current && !wordItemRef.current.contains(event.target)) {
                setShow('');
            }
        };
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [wordItemRef]);

    const handleDelete = (idx: number) => {
        // TODO: 삭제
        // eslint-disable-next-line no-console
        console.log('idx', idx);
    };

    return (
        <div className="flex min-h-screen w-full flex-col pb-5">
            <h2 className="my-5 text-2xl font-bold text-slate-900 dark:text-slate-50 max-sm:my-3 max-sm:text-xl">단어장 리스트</h2>
            <ul className="flex w-full flex-col gap-5 max-sm:gap-2.5">
                {isLoading ? (
                    <div className="flex w-full flex-col rounded-md border border-slate-900 p-5 dark:border-slate-50 max-sm:p-2.5">
                        <div className="h-6 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-500 max-sm:h-[18px]" />
                        <div className="ml-auto mt-3 h-3 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-500 max-sm:mt-2.5" />
                    </div>
                ) : (
                    list.map(({ title, createdAt, idx }) =>
                        isMobile ? (
                            <li key={title + idx} className="relative flex h-20 flex-col justify-center gap-2.5 overflow-hidden rounded-md border text-xl text-slate-900 dark:text-slate-50">
                                <button
                                    type="button"
                                    className="h-full w-full p-3"
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
                                                href={`/test/${idx}`}
                                                className="block h-8 rounded-md bg-slate-900 px-2.5 text-right text-sm leading-8 text-slate-50 hover:scale-95 dark:border dark:border-slate-50 dark:bg-transparent"
                                            >
                                                테스트
                                            </Link>
                                            <CustomizedButton
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setShow('');
                                                    handleDelete(idx);
                                                }}
                                                className="h-8 w-auto rounded-md border border-red-500 bg-red-500 px-2.5 text-right text-sm leading-8 text-slate-50 hover:scale-95 dark:bg-transparent dark:text-red-500"
                                            >
                                                삭제
                                            </CustomizedButton>
                                        </div>
                                    )}
                                </button>
                            </li>
                        ) : (
                            <li key={title + idx} ref={wordItemRef} className="relative rounded-md border p-5 text-2xl text-slate-900 dark:text-slate-50">
                                <p className="w-full truncate font-semibold tracking-wide">{title}</p>
                                <small className="block text-right text-xs">
                                    <time>{formatDate(createdAt)}</time>
                                </small>
                                <CustomizedButton
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShow((prev) => (prev === idx.toString() ? '' : idx.toString()));
                                    }}
                                    className="absolute right-5 top-5"
                                >
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
                                            <Link href={`/test/${idx}`} className="block h-10 text-right text-base leading-10">
                                                테스트
                                            </Link>
                                        </li>
                                        <li className="w-full border-b border-slate-300 px-2 hover:bg-slate-200 dark:border-slate-50 dark:hover:bg-slate-800">
                                            <CustomizedButton
                                                onClick={(e) => {
                                                    e.stopPropagation();
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
                            </li>
                        )
                    )
                )}
            </ul>
            <TopButton />
        </div>
    );
}
