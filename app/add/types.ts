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
});

export type AddType = InferType<typeof schema>;
