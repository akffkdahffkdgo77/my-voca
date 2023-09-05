'use client';

import { useFormContext } from 'react-hook-form';

import CustomizedButton from '@components/customized-button';
import { MESSAGES, useModal } from '@components/modal';
import { ArrowDownOnSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

import { getWords } from '@utils/data';

import type { AddType } from './types';

export default function PreviousData() {
    const wordList = getWords() as { word: string; definition: string }[];

    const handleModal = useModal();
    const { reset } = useFormContext<AddType>();

    const handleDelete = () =>
        handleModal(MESSAGES.DELETE_DATA).then((isConfirmed) => {
            if (isConfirmed) {
                localStorage.clear();
                handleModal(MESSAGES.DELETE_COMPLETE);
            }
        });

    const handlePreviousData = () =>
        handleModal(MESSAGES.GET_PREVIOUS_DATA).then((isConfirmed) => {
            if (isConfirmed) {
                if (wordList.length) {
                    reset({ words: wordList });
                } else {
                    handleModal(MESSAGES.NO_PREVIOUS_DATA);
                }
            }
        });

    return (
        <div className="w-full">
            <div className="flex items-center gap-2.5">
                <CustomizedButton onClick={handleDelete} className="rounded-md border border-red-500 p-[5px] font-mono text-[14px] font-bold text-slate-900 hover:animate-pulse dark:text-slate-50">
                    <TrashIcon className="h-5 w-5 text-red-500" />
                </CustomizedButton>
                <CustomizedButton
                    onClick={handlePreviousData}
                    className="rounded-md bg-slate-900 p-[5px] font-mono text-[14px] font-bold text-slate-50 hover:animate-pulse dark:bg-slate-50 dark:text-slate-900"
                >
                    <ArrowDownOnSquareIcon className="h-5 w-5" />
                </CustomizedButton>
            </div>
        </div>
    );
}
