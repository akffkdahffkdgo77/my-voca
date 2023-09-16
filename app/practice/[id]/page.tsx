'use client';

import { redirect, useRouter } from 'next/navigation';
import { FormProvider, useFieldArray, useForm, useWatch } from 'react-hook-form';

import { CustomizedButton, CustomizedTypography } from '@components';
import { MESSAGES, useModal } from '@components/modal';

import { DEFAULT_VALUES, PracticeType } from '../types';

import { getWord } from '@api/get-word';
import { useFetch } from '@hooks';
import { DataType } from '@utils/data';

export default function Practice({ params }: { params: { id: string } }) {
    const { data } = useFetch<DataType>(() => getWord(params.id));

    if (data?.words && data.words.length === 0) {
        redirect('/add');
    }

    const wordList = data?.words ?? [];

    const navigate = useRouter();
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
    const handleSubmission = (formData: PracticeType) => {
        const { list, word, random, successCount, failCount } = formData;
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
                            navigate.replace('/');
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
                <form onSubmit={handleSubmit(handleSubmission)} className="mx-5 w-full rounded-md border border-slate-900 text-slate-900 dark:border-slate-300 dark:text-slate-50 max-sm:mx-10">
                    <CustomizedTypography component="h2" className="mb-2.5 border-b border-slate-900 p-5 font-mono text-[16px] font-bold dark:border-slate-300">
                        <CustomizedTypography component="span" className="text-[20px]">
                            {wordList?.[fields[1]]?.word}
                        </CustomizedTypography>
                        의 뜻을 입력해주세요.
                    </CustomizedTypography>
                    <textarea rows={5} placeholder="답을 입력해주세요." {...register('word')} className="w-full p-5 text-[16px] outline-none dark:bg-slate-900" />
                    <div className="mx-2.5 mb-2.5 flex items-center justify-end gap-x-2.5">
                        <CustomizedButton
                            onClick={() => resetField('word')}
                            className="dark:bg-slate-40 rounded-md border border-slate-900 bg-slate-50 p-2.5 text-[14px] font-medium text-slate-900 hover:scale-95 active:scale-95"
                        >
                            입력 초기화
                        </CustomizedButton>
                        <CustomizedButton
                            type="submit"
                            className="rounded-md bg-slate-900 p-2.5 text-[14px] font-medium text-slate-50 hover:scale-95 active:scale-95 dark:bg-slate-300 dark:text-slate-900"
                        >
                            제출하기
                        </CustomizedButton>
                    </div>
                </form>
                <div className="mx-5 mt-5 flex w-full justify-end max-sm:mx-10">
                    <CustomizedButton
                        type="button"
                        onClick={handleWordSkip}
                        className="rounded-md bg-slate-900 p-2.5 text-[12px] font-bold text-slate-50 hover:scale-95 active:scale-95 dark:bg-slate-300 dark:text-slate-900"
                    >
                        다른 단어 연습하기
                    </CustomizedButton>
                </div>
            </FormProvider>
        </div>
    );
}
