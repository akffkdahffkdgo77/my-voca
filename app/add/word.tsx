'use client';

import { Controller, useFieldArray, useFormContext } from 'react-hook-form';

import { CustomizedButton, CustomizedTextarea } from '@components';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

import type { AddType } from './types';

export default function Word() {
    const { control, register } = useFormContext<AddType>();
    const { fields, append, remove } = useFieldArray<AddType>({ control, name: 'words' });

    return (
        <div className="h-full w-full">
            <div className="sticky top-20 z-10 flex h-16 w-full flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 max-sm:top-16">
                <div className="relative flex w-full items-center">
                    <input
                        {...register('title')}
                        maxLength={20}
                        title="단어장"
                        placeholder="단어장 이름을 입력해주세요"
                        className="h-14 w-full truncate rounded-md bg-inherit p-2.5 pr-[50px] text-center font-mono text-[24px] text-slate-900 focus:outline-none focus:ring-0 dark:text-slate-50 max-sm:text-lg"
                    />
                    <CustomizedButton
                        disabled={Boolean(fields.length > 10)}
                        onClick={() => append({ word: '', definition: '' })}
                        className="absolute right-0 h-10 w-10 cursor-pointer rounded-md border-2 border-slate-900 font-bold text-slate-900 disabled:pointer-events-none disabled:border-gray-300 disabled:text-gray-300 dark:border-slate-50 dark:text-slate-50 dark:disabled:border-gray-500 dark:disabled:text-gray-500 max-sm:h-8 max-sm:w-8"
                    >
                        <PlusIcon className="mx-auto h-5 w-5 max-sm:h-4 max-sm:w-4" />
                    </CustomizedButton>
                </div>
            </div>
            <div className="w-full space-y-2.5 pb-16">
                {fields.map((field, index) => (
                    <div key={field.id} className="group relative flex h-full w-full items-center justify-between gap-2.5">
                        <div className="w-full space-y-px">
                            <input
                                {...register(`words.${index}.word` as const)}
                                title="단어"
                                placeholder="단어를 입력해주세요"
                                className="h-10 w-full truncate rounded-md rounded-b-none p-2.5 font-mono text-[14px] focus:outline-none focus:ring-0"
                            />
                            <Controller
                                control={control}
                                name={`words.${index}.definition`}
                                render={({ field: { onChange, value } }) => (
                                    <CustomizedTextarea
                                        value={value}
                                        onChange={onChange}
                                        title="뜻"
                                        placeholder="뜻을 입력해주세요"
                                        className="min-h-[80px] w-full truncate rounded-md rounded-t-none p-2.5 font-mono text-[14px] ring-0 focus:outline-none focus:ring-0"
                                    />
                                )}
                            />
                        </div>
                        {fields.length > 1 && (
                            <CustomizedButton onClick={() => remove(index)} className="hidden h-10 w-10 flex-none rounded-md bg-red-500 group-hover:block">
                                <XMarkIcon className="mx-auto h-5 w-5 text-white" />
                            </CustomizedButton>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
