import { ArrowDownOnSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useFormContext } from 'react-hook-form';

import MESSAGES from 'components/Modal/messages';
import useModal from 'components/Modal/useModal';

import { getWords } from 'utils/localStorage';

export default function PreviousData() {
    const wordList = getWords() as { word: string; definition: string }[];

    const handleModal = useModal();
    const { reset } = useFormContext();

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
                if (wordList.length) {
                    reset({ words: wordList });
                } else {
                    handleModal(MESSAGES.NO_PREVIOUS_DATA);
                }
            }
        });

    return (
        <div className="w-full">
            <div className="flex items-center gap-2.5">
                <button className="dark:text-slate-50 border-red-500 border text-slate-900 p-[5px] rounded-md text-[14px] font-bold font-mono hover:animate-pulse" type="button" onClick={handleDelete}>
                    <TrashIcon className="w-5 h-5 text-red-500" />
                </button>
                <button
                    className="dark:bg-slate-50 bg-slate-900 dark:text-slate-900 text-slate-50 p-[5px] rounded-md text-[14px] font-bold font-mono hover:animate-pulse"
                    type="button"
                    onClick={handlePreviousData}
                >
                    <ArrowDownOnSquareIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
