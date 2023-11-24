import { useCallback, useEffect, useState } from 'react';

// Mock API

const useFetch = <T>(getData: () => Promise<T>) => {
    const [data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState(false);

    const handleFetch = useCallback(() => {
        setIsLoading(true);
        getData().then((response) => {
            setData(response);
            setIsLoading(false);
        });
    }, [getData]);

    useEffect(() => {
        handleFetch();
    }, [handleFetch]);

    return { isLoading, data, refetch: handleFetch };
};

export default useFetch;
