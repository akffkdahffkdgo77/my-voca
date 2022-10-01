import { useState } from 'react';

import { useFieldArray, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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

    // TODO: 데이터 초기화 confirm
    const handleReset = () => {
        const voca = localStorage.getItem('words') ? JSON.parse(localStorage.getItem('words') || '') : [];

        if (voca.length) {
            const newTotal = voca.length > 30 ? 50 : voca.length > 10 ? 30 : 10;
            setTotal(newTotal);
            reset({ voca: [...voca, ...Array.from(Array(newTotal - voca.length)).map(() => ({ word: '', definition: '' }))] });
        } else {
            Swal.fire({
                icon: 'info',
                text: '데이터가 존재하지 않습니다.'
            });
        }
    };

    // TODO: 데이터 입력/수정 confirm
    const handleTotal = (value: number) => {
        setTotal(value);
        reset({
            voca: Array.from(Array(value)).map(() => ({ word: '', definition: '' }))
        });
    };

    // TODO: 제출 confirm
    const onSubmit = ({ voca }: FormValues) => {
        const dataset = voca.filter((d) => d.word !== '' || d.definition);
        if (dataset.every((data) => data.word && data.definition)) {
            const filtered = dataset.map((d, index) => (d.word !== dataset?.[index + 1]?.word ? d : null)).filter((d) => d);

            localStorage.setItem('words', JSON.stringify(filtered));
            navigate('/', { replace: true });
        } else if (!dataset.length) {
            Swal.fire({ icon: 'error', text: '하나 이상의 단어를 입력해주세요.' });
        } else {
            Swal.fire({ icon: 'error', text: '단어와 뜻을 입력해주세요.' });
        }
    };

    return (
        <main className="w-full p-5">
            <Link to="/">
                <h1 className="w-full text-center text-5xl font-bold underline tracking-tighter mb-10">My Voca</h1>
            </Link>
            <div className="relative w-full flex justify-center items-center">
                <form className="m-5 flex flex-col items-center justify-center gap-2.5" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full flex justify-between items-center gap-2.5">
                        <div className="flex items-center gap-2.5">
                            <button className="bg-red-500 text-white p-[5px] rounded-md text-[14px] font-bold font-mono hover:animate-pulse" type="button" onClick={() => localStorage.clear()}>
                                삭제
                            </button>
                            <button className="bg-black text-white p-[5px] rounded-md text-[14px] font-bold font-mono hover:animate-pulse" type="button" onClick={handleReset}>
                                수정
                            </button>
                        </div>
                        <div className="flex items-center gap-2.5">
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
                                    onClick={() => handleTotal(value)}
                                >
                                    {value}개
                                </button>
                            ))}
                        </div>
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
        </main>
    );
}
