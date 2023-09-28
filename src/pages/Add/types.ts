import { yupResolver } from '@hookform/resolvers/yup';
import { InferType, array, object, string } from 'yup';

export const schema = object().shape({
    title: string().max(20).required(),
    words: array()
        .of(
            object({
                word: string().required(),
                definition: string().required()
            })
        )
        .required()
        .min(1)
        .max(10)
});

export type AddType = InferType<typeof schema>;

export const DEFAULT_VALUES = {
    defaultValues: { title: '', words: [{ word: '', definition: '' }] },
    resolver: yupResolver(schema)
};