export default function Skeleton() {
    return (
        <>
            {Array.from({ length: 10 }).map((_, idx) => (
                <div key={idx} className="flex w-full flex-col rounded-md border border-slate-900 p-5 dark:border-slate-50 max-sm:p-2.5">
                    <div className="h-6 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-500 max-sm:h-[18px]" />
                    <div className="ml-auto mt-3 h-3 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-500 max-sm:mt-2.5" />
                </div>
            ))}
        </>
    );
}
