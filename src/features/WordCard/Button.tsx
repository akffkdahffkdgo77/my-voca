type ButtonProps = {
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    dataset: { word: string; definition: string }[];
};

export default function Button({ setIndex, dataset }: ButtonProps) {
    return (
        <div className="w-[500px] mt-2.5 flex justify-end items-center gap-x-[5px]">
            <button
                className="bg-slate-50 border border-slate-900 dark:bg-slate-900 dark:border-slate-300 dark:text-slate-50 rounded-md py-[5px] px-2.5 text-slate-900 text-[12px] font-bold"
                type="button"
                onClick={() => setIndex((prev) => (prev > 0 ? prev - 1 : dataset.length - 1))}
            >
                이전
            </button>
            <button
                className="bg-slate-900 dark:bg-slate-500 dark:text-slate-900 rounded-md py-[5px] px-2.5 text-slate-50 text-[12px] font-bold"
                type="button"
                onClick={() => setIndex((prev) => (prev < dataset.length - 1 ? prev + 1 : 0))}
            >
                다음
            </button>
        </div>
    );
}
