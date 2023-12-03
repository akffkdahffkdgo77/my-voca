import { QueryKey, useSuspenseQuery } from '@tanstack/react-query';

const useFetch = <T>(key: QueryKey, getData: () => Promise<T>) => {
    const { isLoading, data, refetch } = useSuspenseQuery({ queryKey: key, queryFn: getData });

    return { isLoading, data, refetch };
};

export default useFetch;
