import { useState } from 'react';

import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormValues = {
    voca: { word: string; definition: string }[];
};

export default function Add() {
    const navigate = useNavigate();
    const { control, register, handleSubmit, reset } = useForm<FormValues>({
        defaultValues: {
            voca: Array.from(Array(10)).map(() => ({ word: '', definition: '' }))
        }
    });

    const { fields } = useFieldArray({ control, name: 'voca' });

    const [total, setTotal] = useState(10);

    const onClick = (value: number) => {
        setTotal(value);
        reset({
            voca: Array.from(Array(value)).map(() => ({ word: '', definition: '' }))
        });
    };

    const onSubmit = ({ voca }: FormValues) => {
        const dataset = voca.filter((d) => d.word !== '');
        const filtered = dataset.map((d, index) => (d.word !== dataset?.[index + 1]?.word ? d : null)).filter((d) => d);

        localStorage.setItem('words', JSON.stringify(filtered));
        navigate('/', { replace: true });
    };

    return (
        <div className="relative w-full flex justify-center items-center">
            <form className="m-5 flex flex-col items-center justify-center gap-2.5" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex justify-end items-center gap-2.5">
                    {[10, 30, 50].map((value) => (
                        <button
                            key={value}
                            name={`${value}`}
                            className={
                                total === value
                                    ? 'bg-white text-black border border-black p-[5px] rounded-md text-[14px] font-bold font-mono hover:animate-pulse'
                                    : 'bg-black text-white p-[5px] rounded-md text-[14px] font-bold font-mono hover:animate-pulse'
                            }
                            type="button"
                            onClick={() => onClick(value)}
                        >
                            {value}개
                        </button>
                    ))}
                </div>
                <h1 className="text-[24px] font-bold font-mono mb-2.5">{total}개의 단어를 입력해주세요.</h1>
                {fields.map((field, index) => (
                    <div key={field.id} className="flex items-center justify-between gap-2.5">
                        <input
                            {...register(`voca.${index}.word` as const)}
                            title="단어"
                            placeholder="단어를 입력해주세요"
                            className="border border-black rounded-md p-2.5 w-[250px] text-[16px] font-mono"
                        />
                        <textarea
                            {...register(`voca.${index}.definition` as const)}
                            cols={50}
                            rows={2}
                            title="뜻"
                            placeholder="뜻을 입력해주세요"
                            className="border border-black rounded-md p-2.5 w-full text-[14px] font-mono"
                        />
                    </div>
                ))}
                <input className="border bg-black text-white rounded-md p-2.5 w-full hover:scale-95 active:scale-95 cursor-pointer" type="submit" />
            </form>
            <button
                type="button"
                className="absolute w-[50px] h-[50px] font-mono font-bold right-5 bottom-5 rounded-full bg-black text-white animate-bounce"
                onClick={() => document.documentElement.scrollTo(0, 0)}
            >
                TOP
            </button>
        </div>
    );
}
