import { useState } from 'react';

import { useFieldArray, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal, { SweetAlertIcon } from 'sweetalert2';

type FormValues = {
    voca: { word: string; definition: string }[];
};

export default function Add() {
    const navigate = useNavigate();

    const [total, setTotal] = useState(10);

    const { control, register, handleSubmit, reset } = useForm<FormValues>({
        defaultValues: {
            voca: Array.from(Array(10)).map(() => ({ word: '', definition: '' }))
        }
    });
    const { fields } = useFieldArray({ control, name: 'voca' });

    const handleMessage = ({ text, icon, confirmButtonText, onConfirm }: { text: string; icon?: SweetAlertIcon; confirmButtonText?: string; onConfirm: () => void }) => {
        Swal.fire({
            html: text,
            icon: icon || 'warning',
            showCancelButton: true,
            confirmButtonColor: '#083AA9',
            confirmButtonText: confirmButtonText || '확인',
            cancelButtonColor: '#EB1D36',
            cancelButtonText: '취소'
        }).then((result) => {
            if (result.isConfirmed) {
                onConfirm();
            }
        });
    };

    const handleDelete = () =>
        handleMessage({
            text: `이전 데이터를 삭제하시겠습니까?  <br/>  데이터를 복구할 수 없습니다.`,
            confirmButtonText: '삭제',
            onConfirm: () => {
                localStorage.clear();
                Swal.fire('데이터를 삭제했습니다.', 'success');
            }
        });

    const handlePreviousData = () =>
        handleMessage({
            text: `이전 데이터를 조회하시겠습니까? <br/> 현재 입력된 데이터는 삭제됩니다.`,
            onConfirm: () => {
                const voca = localStorage.getItem('words') ? JSON.parse(localStorage.getItem('words') || '') : [];
                if (voca.length) {
                    const newTotal = voca.length > 30 ? 50 : voca.length > 10 ? 30 : 10;
                    setTotal(newTotal);
                    reset({ voca: [...voca, ...Array.from(Array(newTotal - voca.length)).map(() => ({ word: '', definition: '' }))] });
                } else {
                    Swal.fire({ icon: 'info', confirmButtonColor: '#000000', text: '데이터가 존재하지 않습니다.' });
                }
            }
        });

    const handleTotal = (value: number) => {
        handleMessage({
            text: `수량을 변경하시겠습니까? <br/> 입력된 데이터는 초기화됩니다.`,
            onConfirm: () => {
                setTotal(value);
                reset({
                    voca: Array.from(Array(value)).map(() => ({ word: '', definition: '' }))
                });
            }
        });
    };

    const onSubmit = ({ voca }: FormValues) => {
        handleMessage({
            text: '데이터를 제출하시겠습니까?',
            confirmButtonText: '제출',
            onConfirm: () => {
                const dataset = voca.filter((d) => d.word !== '' || d.definition);
                if (dataset.every((data) => data.word && data.definition)) {
                    const filtered = dataset.map((d, index) => (d.word !== dataset?.[index + 1]?.word ? d : null)).filter((d) => d);
                    localStorage.setItem('words', JSON.stringify(filtered));
                    Swal.fire({ icon: 'success', confirmButtonColor: '#000000', text: '데이터가 저장되었습니다.' }).then(() => navigate('/', { replace: true }));
                } else if (!dataset.length) {
                    Swal.fire({ icon: 'error', confirmButtonColor: '#000000', text: '하나 이상의 단어를 입력해주세요.' });
                } else {
                    Swal.fire({ icon: 'error', confirmButtonColor: '#000000', text: '단어와 뜻을 입력해주세요.' });
                }
            }
        });
    };

    return (
        <main className="w-full p-5">
            <Link to="/">
                <h1 className="w-full text-center text-5xl font-bold underline tracking-tighter mt-[100px] mb-10">My Voca</h1>
            </Link>
            <div className="relative w-full flex justify-center items-center">
                <form className="m-5 flex flex-col items-center justify-center gap-2.5" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
