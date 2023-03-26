type SubmitButtonProps = {
    isDisabled: boolean;
};

export default function SubmitButton({ isDisabled }: SubmitButtonProps) {
    return (
        <input
            type="submit"
            disabled={isDisabled}
            className="border bg-slate-900 dark:bg-slate-300 text-slate-50 dark:text-slate-900 disabled:bg-gray-300 disabled:text-gray-500 dark:disabled:bg-gray-300 dark:disabled:text-gray-500 rounded-md p-2.5 w-full enabled:active:scale-95 cursor-pointer"
        />
    );
}
