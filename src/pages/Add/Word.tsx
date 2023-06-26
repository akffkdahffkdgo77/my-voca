import { useFieldArray, useFormContext } from 'react-hook-form';

import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

import type { AddType } from './types';

export default function Word() {
    const { control, register } = useFormContext<AddType>();
    const { fields, append, remove } = useFieldArray<AddType>({ control, name: 'words' });

    return (
        <div className="mb-2.5 h-full min-h-[500px] w-full">
            <div className="mb-2.5 flex w-full items-center justify-center">
                <h1 className="-mr-[48px] flex-1 text-center font-mono text-[24px] font-bold text-slate-900 dark:text-slate-50">단어를 입력해주세요.</h1>
                <button
                    type="button"
                    onClick={() => append({ word: '', definition: '' })}
                    className="h-[40px] w-[40px] cursor-pointer rounded-md border-2 border-slate-900 font-bold text-slate-900 dark:border-slate-50 dark:text-slate-50"
                >
                    <PlusIcon className="mx-auto h-5 w-5" />
                </button>
            </div>
            <div className="flex flex-col gap-2.5">
                {fields.map((field, index) => (
                    <div key={field.id} className="flex h-full items-center justify-between gap-2.5">
                        <input
                            {...register(`words.${index}.word` as const)}
                            title="단어"
                            placeholder="단어를 입력해주세요"
                            className="w-[250px] rounded-md border border-slate-900 p-2.5 font-mono text-[16px] dark:border-slate-50"
                        />
                        <textarea
                            {...register(`words.${index}.definition` as const)}
                            cols={50}
                            rows={1}
                            title="뜻"
                            placeholder="뜻을 입력해주세요"
                            className="w-full rounded-md border border-slate-900 p-2.5 font-mono text-[14px] dark:border-slate-50"
                        />
                        <button onClick={() => remove(index)} type="button" className="h-[46px] w-[64px] rounded-md border border-red-500">
                            <XMarkIcon className="mx-auto h-5 w-5 text-red-500" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
