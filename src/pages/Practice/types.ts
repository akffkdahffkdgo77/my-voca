import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, array, number, InferType } from 'yup';

const schema = object().shape({
    word: string().required(),
    list: array().required(),
    random: number().required(),
    successCount: number().required(),
    failCount: number().required()
});

export type PracticeType = InferType<typeof schema>;

export const DEFAULT_VALUES = {
    defaultValues: {
        word: '',
        random: 0,
        list: [],
        successCount: 0,
        failCount: 0
    },
    resolver: yupResolver(schema)
};
