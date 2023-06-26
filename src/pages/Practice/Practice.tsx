import { FormProvider, useFieldArray, useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { MESSAGES, useModal } from '@components/Modal';

import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, array, number, InferType } from 'yup';

import { getWords } from '@utils/localStorage';

const schema = object().shape({
    word: string().required(),
    list: array().required(),
    random: number().required(),
    successCount: number().required(),
    failCount: number().required()
});

type PracticeType = InferType<typeof schema>;

const DEFAULT_VALUES = {
    defaultValues: {
        word: '',
        random: 0,
        list: [],
        successCount: 0,
        failCount: 0
    },
    resolver: yupResolver(schema)
};

export default function Practice() {
    const wordList = getWords() as { word: string; definition: string }[];
    const navigate = useNavigate();
    const handleModal = useModal();

    const methods = useForm<PracticeType>({ ...DEFAULT_VALUES, mode: 'onBlur' });
    const { control, setValue, register, resetField, trigger, handleSubmit, getValues } = methods;
    const fields = useWatch<PracticeType>({ control, name: ['list', 'random'] });
    const { append } = useFieldArray({ name: 'list' as never, control });

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

    // TODO: Refactoring
    const handleSubmission = (data: PracticeType) => {
        const { list, word, random, successCount, failCount } = data;
        if (word && wordList[random].definition === word) {
            setValue('successCount', successCount + 1);
            trigger('successCount');
            handleModal({
                ...MESSAGES.CURRENT_RESULT,
                message: `단어: ${wordList[random].word} \n뜻: ${wordList[random].definition}`
            }).then(() => {
                if (getValues('list').length === wordList.length - 1) {
                    handleModal({
                        ...MESSAGES.FINAL_RESULT,
                        message: `테스트를 완료했습니다!! \n맞춘 단어 : ${successCount + 1} \n틀린 / 스킵한 단어 : ${failCount} \n홈 화면으로 돌아가시겠습니까?`
                    }).then((hasConfirmed) => {
                        if (hasConfirmed) {
                            navigate('/', { replace: true });
                        } else {
                            window.location.reload();
                        }
                    });
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
                    append(nextRandom);
                }
            });
        } else {
            handleModal(MESSAGES.RETRY);
        }
    };

    return (
        <div className="flex w-full flex-col items-center justify-center [height:calc(100vh-100px)]">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(handleSubmission)} className="min-w-[700px] rounded-md border border-slate-900 text-slate-900 dark:border-slate-300 dark:text-slate-50">
                    <h2 className="mb-2.5 border-b border-slate-900 p-5 font-mono text-[16px] font-bold dark:border-slate-300">
                        <span className="text-[20px]">{wordList?.[fields[1]]?.word}</span>의 뜻을 입력해주세요.
                    </h2>
                    <textarea {...register('word')} rows={5} className="w-full p-5 text-[16px] outline-none dark:bg-slate-900" placeholder="답을 입력해주세요." />
                    <div className="mx-2.5 mb-2.5 flex items-center justify-end gap-x-2.5">
                        <button
                            type="button"
                            onClick={() => resetField('word')}
                            className="dark:bg-slate-40 rounded-md border border-slate-900 bg-slate-50 p-2.5 text-[14px] font-medium text-slate-900 hover:scale-95 active:scale-95"
                        >
                            입력 초기화
                        </button>
                        <button type="submit" className="rounded-md bg-slate-900 p-2.5 text-[14px] font-medium text-slate-50 hover:scale-95 active:scale-95 dark:bg-slate-300 dark:text-slate-900">
                            제출하기
                        </button>
                    </div>
                </form>
                <div className="mt-5 flex w-[700px] justify-end">
                    <button
                        type="button"
                        onClick={handleWordSkip}
                        className="rounded-md bg-slate-900 p-2.5 text-[12px] font-bold text-slate-50 hover:scale-95 active:scale-95 dark:bg-slate-300 dark:text-slate-900"
                    >
                        다른 단어 연습하기
                    </button>
                </div>
            </FormProvider>
        </div>
    );
}
