import { useFormContext } from 'react-hook-form';

export default function TextInput() {
    const { register } = useFormContext();

    return <textarea {...register('word')} rows={5} className="w-full p-5 outline-none text-[16px] dark:bg-slate-900" placeholder="답을 입력해주세요." />;
}
