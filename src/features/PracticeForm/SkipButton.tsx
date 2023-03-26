import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';

import MESSAGES from 'components/Modal/messages';
import useModal from 'components/Modal/useModal';

import { getWords } from 'utils/localStorage';

export default function SkipButton() {
    const wordList = getWords();

    const { control, getValues, resetField, setValue, trigger } = useFormContext();
    const fields = useWatch({ control, name: ['list', 'random'] });
    const { append } = useFieldArray({ control, name: 'list' });

    const handleModal = useModal();

    const handleWordSkip = () => {
        const [list, random] = fields;
        if (list.length === wordList.length - 1) {
            handleModal(MESSAGES.LAST_WORD);
        } else {
            resetField('word');
            let nextRandom = random;
            while (random === nextRandom) {
                nextRandom = Math.floor(Math.random() * (wordList.length - 0) + 0);
                if (!list.includes(nextRandom)) {
                    setValue('random', nextRandom);
                    trigger('random');
                }
            }
            append(random);
            setValue('failCount', getValues('failCount') + 1);
            trigger('failCount');
        }
    };

    return (
        <div className="flex justify-end w-[700px] mt-5">
            <button
                type="button"
                onClick={handleWordSkip}
                className="bg-slate-900 text-slate-50 dark:bg-slate-300 dark:text-slate-900 rounded-md font-bold text-[12px] p-2.5 hover:scale-95 active:scale-95"
            >
                다른 단어 연습하기
            </button>
        </div>
    );
}
