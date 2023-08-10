import { InferType, array, object, string } from 'yup';

export const schema = object().shape({
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
