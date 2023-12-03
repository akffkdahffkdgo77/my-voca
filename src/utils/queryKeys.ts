// Reference : https://tkdodo.eu/blog/effective-react-query-keys
export const wordKeys = {
    all: ['word'] as const,
    lists: () => [...wordKeys.all, 'list'] as const,
    list: (filters: string) => [...wordKeys.lists(), { filters }] as const,
    details: () => [...wordKeys.all, 'detail'] as const,
    detail: (id: string) => [...wordKeys.details(), id] as const
};
