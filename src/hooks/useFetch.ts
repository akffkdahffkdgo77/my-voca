import { useSuspenseQuery } from '@tanstack/react-query';

import { getWord, getWordList } from 'lib/api/word';
import { wordKeys } from 'utils/queryKeys';

export const useGetList = () => {
    const { isLoading, data, refetch } = useSuspenseQuery({ queryKey: wordKeys.all, queryFn: getWordList });

    return { isLoading, data, refetch };
};

export const useGetOne = (id: string) => {
    const { isLoading, data, refetch } = useSuspenseQuery({ queryKey: wordKeys.detail(id), queryFn: ({ queryKey }) => getWord(queryKey[2]) });

    return { isLoading, data, refetch };
};
