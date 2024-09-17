import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

export const formatDate = (date: number | string | Date, format: string) => dayjs(date).format(format);
