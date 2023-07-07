'use client';

import { useRouter } from 'next/navigation';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

import { MESSAGES, useModal } from '@components/customized-modal';

import { yupResolver } from '@hookform/resolvers/yup';

import PreviousData from './previous-data';
import { AddType, schema } from './types';
import Word from './word';

const DEFAULT_VALUES = {
    defaultValues: { words: [{ word: '', definition: '' }] },
    resolver: yupResolver(schema)
};

export default function Add() {
    const navigate = useRouter();
    const methods = useForm<AddType>({ ...DEFAULT_VALUES, mode: 'onBlur' });
    const fields = useWatch({ control: methods.control, name: 'words' });
    const handleModal = useModal();

    const handleSubmission = ({ words }: AddType) => {
        handleModal(MESSAGES.DATA_SUBMISSION).then((isConfirmed) => {
            if (isConfirmed) {
                const filtered = words.map((d, index) => (d.word !== words?.[index + 1]?.word ? d : null)).filter((d) => d);
                localStorage.setItem('words', JSON.stringify(filtered));
                handleModal(MESSAGES.SUBMISSION_COMPLETE).then((hasConfirmed) => {
                    if (hasConfirmed) {
                        navigate.replace('/');
                    }
                });
            }
        });
    };

    return (
        <div className="relative flex w-full items-center justify-center bg-slate-50 dark:bg-slate-900">
            <FormProvider {...methods}>
                <form className="m-5 flex min-w-[800px] flex-col items-center justify-center gap-2.5" autoComplete="off" onSubmit={methods.handleSubmit(handleSubmission)}>
                    <PreviousData />
                    <Word />
                    <button
                        type="submit"
                        disabled={!methods.formState.isValid || !methods.formState.isDirty}
                        className="w-full cursor-pointer rounded-md border bg-slate-900 p-2.5 text-slate-50 enabled:active:scale-95 disabled:bg-gray-300 disabled:text-gray-500 dark:bg-slate-300 dark:text-slate-900 dark:disabled:bg-gray-300 dark:disabled:text-gray-500"
                    >
                        단어 추가하기
                    </button>
                </form>
                {fields.length > 10 && (
                    <button
                        type="button"
                        onClick={() => document.documentElement.scrollTo(0, 0)}
                        className="absolute bottom-5 right-5 h-[50px] w-[50px] animate-bounce rounded-full bg-black font-mono font-bold text-white"
                    >
                        TOP
                    </button>
                )}
            </FormProvider>
        </div>
    );
}
