import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormValues = {
    voca: { word: string; definition: string }[];
};

export default function Add() {
    const navigate = useNavigate();
    const { control, register, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            voca: Array.from(Array(10)).map(() => ({ word: '', definition: '' }))
        }
    });

    const { fields } = useFieldArray({ control, name: 'voca' });

    const onSubmit = (data: FormValues) => {
        const { voca } = data;
        const dataset = voca.filter((d) => d.word !== '');

        const filtered = dataset.map((d, index) => (d.word !== dataset?.[index + 1]?.word ? d : null)).filter((d) => d);
        localStorage.setItem('words', JSON.stringify(filtered));
        navigate('/', { replace: true });
    };

    return (
        <div className="w-full flex justify-center items-center">
            <form className="m-5 flex flex-col items-center justify-center gap-2.5" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-[24px] font-bold font-mono mb-2.5">10개의 단어를 입력해주세요.</h1>
                {fields.map((field, index) => (
                    <div key={field.id} className="flex items-center justify-between gap-2.5">
                        <input
                            className="border border-black rounded-md p-2.5 w-[250px] text-[16px] font-mono"
                            {...register(`voca.${index}.word` as const)}
                            title="단어"
                            placeholder="단어를 입력해주세요"
                        />
                        <textarea
                            cols={50}
                            rows={2}
                            className="border border-black rounded-md p-2.5 w-full text-[14px] font-mono"
                            {...register(`voca.${index}.definition` as const)}
                            title="뜻"
                            placeholder="뜻을 입력해주세요"
                        />
                    </div>
                ))}
                <input className="border bg-black text-white rounded-md p-2.5 w-full hover:scale-95 active:scale-95 cursor-pointer" type="submit" />
            </form>
        </div>
    );
}
