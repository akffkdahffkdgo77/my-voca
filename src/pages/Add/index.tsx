import { useState } from 'react';

import { useFieldArray, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import MESSAGES from 'constants/messages';
import useModal from 'contexts/modal/useModal';

import type { FormValuesType } from 'pages/Add/types';

const DEFAULT_VALUES = {
    defaultValues: {
        voca: Array.from(Array(10)).map(() => ({ word: '', definition: '' }))
    }
};

const VOCA = localStorage.getItem('words') ? JSON.parse(localStorage.getItem('words') || '') : [];

export default function Add() {
    const navigate = useNavigate();

    const [total, setTotal] = useState(10);

    const { control, register, handleSubmit, reset } = useForm<FormValuesType>(DEFAULT_VALUES);
    const { fields } = useFieldArray({ control, name: 'voca' });

    const handleModal = useModal();

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
                if (VOCA.length) {
                    const newTotal = VOCA.length > 30 ? 50 : VOCA.length > 10 ? 30 : 10;
                    setTotal(newTotal);
                    reset({ voca: [...VOCA, ...Array.from(Array(newTotal - VOCA.length)).map(() => ({ word: '', definition: '' }))] });
                } else {
                    handleModal(MESSAGES.NO_PREVIOUS_DATA);
                }
            }
        });

    const handleTotal = (value: number) =>
        handleModal(MESSAGES.CHANGE_QUANTITY).then((isConfirmed) => {
            if (isConfirmed) {
                setTotal(value);
                reset({
                    voca: Array.from(Array(value)).map(() => ({ word: '', definition: '' }))
                });
            }
        });

    const handleSubmission = ({ voca }: FormValuesType) => {
        const dataset = voca.filter((d) => d.word !== '' || d.definition);

        if (!dataset.length) {
            handleModal(MESSAGES.REQUIRE_AT_LEAST_ONE_WORD);
        } else if (!dataset.every((data) => data.word && data.definition)) {
            handleModal(MESSAGES.REQUIRE_WORD_AND_DEFINITION);
        } else {
            handleModal(MESSAGES.DATA_SUBMISSION).then((isConfirmed) => {
                if (isConfirmed) {
                    const filtered = dataset.map((d, index) => (d.word !== dataset?.[index + 1]?.word ? d : null)).filter((d) => d);
                    localStorage.setItem('words', JSON.stringify(filtered));
                    handleModal(MESSAGES.SUBMISSION_COMPLETE).then((hasConfirmed) => {
                        if (hasConfirmed) {
                            navigate('/', { replace: true });
                        }
                    });
                }
            });
        }
    };

    return (
        <main className="w-full p-5">
            <Link to="/">
                <h1 className="w-full text-center text-5xl font-bold underline tracking-tighter mt-[100px] mb-10">My Voca</h1>
            </Link>
            <div className="relative w-full flex justify-center items-center">
                <form className="m-5 flex flex-col items-center justify-center gap-2.5" autoComplete="off" onSubmit={handleSubmit(handleSubmission)}>
                    <div className="w-full flex justify-between items-center gap-2.5">
                        <div className="flex items-center gap-2.5">
                            <button className="bg-red-500 text-white p-[5px] rounded-md text-[14px] font-bold font-mono hover:animate-pulse" type="button" onClick={handleDelete}>
                                이전 데이터 삭제
                            </button>
                            <button className="bg-black text-white p-[5px] rounded-md text-[14px] font-bold font-mono hover:animate-pulse" type="button" onClick={handlePreviousData}>
                                이전 데이터 불러오기
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
