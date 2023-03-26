import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import Fab from 'components/Fab';
import MESSAGES from 'components/Modal/messages';
import useModal from 'components/Modal/useModal';

import PreviousData from 'features/WordForm/PreviousData';
import SubmitButton from 'features/WordForm/SubmitButton';
import Word from 'features/WordForm/Word';

interface IFormValues {
    words: { word: string; definition: string }[];
}

const schema = yup.object().shape({
    words: yup
        .array()
        .of(
            yup.object({
                word: yup.string().required(),
                definition: yup.string().required()
            })
        )
        .required()
});

const DEFAULT_VALUES = {
    defaultValues: {
        words: [{ word: '', definition: '' }]
    },
    resolver: yupResolver(schema)
};

export default function WordForm() {
    const navigate = useNavigate();
    const methods = useForm<IFormValues>({ ...DEFAULT_VALUES, mode: 'onChange' });
    const fields = useWatch({ control: methods.control, name: 'words' });
    const handleModal = useModal();

    const handleSubmission = ({ words }: IFormValues) => {
        handleModal(MESSAGES.DATA_SUBMISSION).then((isConfirmed) => {
            if (isConfirmed) {
                const filtered = words.map((d, index) => (d.word !== words?.[index + 1]?.word ? d : null)).filter((d) => d);
                localStorage.setItem('words', JSON.stringify(filtered));
                handleModal(MESSAGES.SUBMISSION_COMPLETE).then((hasConfirmed) => {
                    if (hasConfirmed) {
                        navigate('/', { replace: true });
                    }
                });
            }
        });
    };

    return (
        <div className="relative bg-slate-50 dark:bg-slate-900 w-full flex justify-center items-center">
            <FormProvider {...methods}>
                <form className="min-w-[800px] m-5 flex flex-col items-center justify-center gap-2.5" autoComplete="off" onSubmit={methods.handleSubmit(handleSubmission)}>
                    <PreviousData />
                    <Word />
                    <SubmitButton isDisabled={!methods.formState.isValid || !methods.formState.isDirty} />
                </form>
                {fields.length > 10 && <Fab />}
            </FormProvider>
        </div>
    );
}
