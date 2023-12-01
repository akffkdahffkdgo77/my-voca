import dayjs from 'dayjs';

export const formatDate = (date: string | number | Date, format: string) => dayjs(date).format(format);
