import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useFieldArray, useFormContext } from 'react-hook-form';

export default function Word() {
    const { control, register } = useFormContext();
    const { fields, append, remove } = useFieldArray({ control, name: 'words' });

    return (
        <div className="w-full h-full min-h-[500px] mb-2.5">
            <div className="w-full flex items-center justify-center mb-2.5">
                <h1 className="flex-1 text-center -mr-[48px] text-[24px] font-bold font-mono dark:text-slate-50 text-slate-900">단어를 입력해주세요.</h1>
                <button
                    type="button"
                    onClick={() => append({ word: '', definition: '' })}
                    className="cursor-pointer w-[40px] h-[40px] font-bold border-slate-900 dark:border-slate-50 dark:text-slate-50 text-slate-900 border-2 rounded-md"
                >
                    <PlusIcon className="w-5 h-5 mx-auto" />
                </button>
            </div>
            <div className="flex gap-2.5 flex-col">
                {fields.map((field, index) => (
                    <div key={field.id} className="h-full flex items-center justify-between gap-2.5">
                        <input
                            {...register(`words.${index}.word` as const)}
                            title="단어"
                            placeholder="단어를 입력해주세요"
                            className="border border-slate-900 dark:border-slate-50 rounded-md p-2.5 w-[250px] text-[16px] font-mono"
                        />
                        <textarea
                            {...register(`words.${index}.definition` as const)}
                            cols={50}
                            rows={1}
                            title="뜻"
                            placeholder="뜻을 입력해주세요"
                            className="border border-slate-900 dark:border-slate-50 rounded-md p-2.5 w-full text-[14px] font-mono"
                        />
                        <button onClick={() => remove(index)} type="button" className="w-[64px] h-[46px] border border-red-500 rounded-md">
                            <XMarkIcon className="w-5 h-5 mx-auto text-red-500" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
