'use client';

import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

import { MESSAGES, useModal } from '@components/modal';

import { AddType, DEFAULT_VALUES } from './types';
import Word from './word';

import { WordType, addWord } from '@utils/data';

export default function Add() {
    const navigate = useRouter();
    const methods = useForm<AddType>({ ...DEFAULT_VALUES, mode: 'onBlur' });
    const {
        handleSubmit,
        formState: { isValid }
    } = methods;
    const handleModal = useModal();

    const handleSubmission = ({ words, title }: AddType) => {
        // TODO: toast
        handleModal(MESSAGES.DATA_SUBMISSION).then((isConfirmed) => {
            if (isConfirmed) {
                const filtered = words.map((d, index) => ({ ...d, wordIdx: index + 1, successCount: 0, failCount: 0 }));
                const data: WordType = { idx: new Date().getTime(), title, createdAt: new Date().getTime(), words: filtered };
                addWord(data);
                handleModal(MESSAGES.SUBMISSION_COMPLETE).then((hasConfirmed) => {
                    if (hasConfirmed) {
                        navigate.replace('/list');
                    }
                });
            }
        });
    };

    return (
        <div className="relative flex w-full items-center justify-center bg-slate-50 dark:bg-slate-900">
            <FormProvider {...methods}>
                <form autoComplete="off" onSubmit={handleSubmit(handleSubmission)} className="flex w-full flex-col items-center justify-center gap-2.5">
                    <Word />
                    <button
                        type="submit"
                        disabled={!isValid}
                        className="fixed bottom-0 z-10 h-14 w-full max-w-md cursor-pointer rounded-md border bg-slate-900 p-2.5 text-lg font-semibold text-slate-50 enabled:active:scale-95 disabled:pointer-events-none disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-400 dark:bg-slate-50 dark:text-slate-900 dark:disabled:border-gray-500 dark:disabled:bg-gray-500 dark:disabled:text-gray-600 max-sm:max-w-full"
                    >
                        단어장 생성하기
                    </button>
                </form>
            </FormProvider>
        </div>
    );
}
