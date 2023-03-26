import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import MESSAGES from 'components/Modal/messages';
import useModal from 'components/Modal/useModal';

import Header from 'features/PracticeForm/Header';
import ResetButton from 'features/PracticeForm/ResetButton';
import SkipButton from 'features/PracticeForm/SkipButton';
import SubmitButton from 'features/PracticeForm/SubmitButton';
import TextInput from 'features/PracticeForm/TextInput';
import { getWords } from 'utils/localStorage';

interface IFormValues {
    word: string;
    random: number;
    list: Array<number>;
    successCount: number;
    failCount: number;
}

const schema = yup.object().shape({
    word: yup.string().required(),
    list: yup.array().required(),
    random: yup.number().required(),
    successCount: yup.number().required(),
    failCount: yup.number().required()
});

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

export default function PracticeForm() {
    const wordList = getWords() as { word: string; definition: string }[];
    const navigate = useNavigate();
    const handleModal = useModal();

    const methods = useForm<IFormValues>({ ...DEFAULT_VALUES, mode: 'onChange' });
    const { control, setValue, resetField, trigger, handleSubmit, getValues } = methods;
    const { append } = useFieldArray({ name: 'list' as never, control });

    // TODO: Refactoring
    const handleSubmission = (data: IFormValues) => {
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
        <div className="w-full [height:calc(100vh-100px)] flex justify-center items-center flex-col">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(handleSubmission)} className="border border-slate-900 rounded-md min-w-[700px] text-slate-900 dark:text-slate-50 dark:border-slate-300">
                    <Header />
                    <TextInput />
                    <div className="flex justify-end items-center gap-x-2.5 mb-2.5 mx-2.5">
                        <ResetButton />
                        <SubmitButton />
                    </div>
                </form>
                <SkipButton />
            </FormProvider>
        </div>
    );
}
