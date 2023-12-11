import dayjs from 'dayjs';

require('dayjs/locale/ko');

dayjs.locale('ko');

export const formatDate = (date: string | number | Date, format: string) => dayjs(date).format(format);
