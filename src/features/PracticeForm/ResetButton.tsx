import { useFormContext } from 'react-hook-form';

export default function ResetButton() {
    const { resetField } = useFormContext();
    const handleReset = () => resetField('word');

    return (
        <button
            type="button"
            onClick={handleReset}
            className="p-2.5 bg-slate-50 text-slate-900 dark:bg-slate-40 border border-slate-900 font-medium rounded-md text-[14px] hover:scale-95 active:scale-95"
        >
            입력 초기화
        </button>
    );
}
