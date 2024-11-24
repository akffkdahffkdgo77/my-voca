import Typography from '@components/Typography';

import { COLOR, getDarkTextColor, OptionalColorType } from '@utils/color';

const TODAY = new Date();
const TODAY_STRING = TODAY.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });

// TODO: date picker
const DatePicker = ({ color = COLOR.Gray }: OptionalColorType) => {
  return (
    <time dateTime={TODAY_STRING}>
      <Typography color={color} component="span" fontFamily="nanumpenscript" variant="h2">
        {TODAY.getDate()}
      </Typography>
      <Typography component="span" fontFamily="nanumpenscript" twStyle={getDarkTextColor(color)} variant="h3">
        /
      </Typography>
      <Typography color={color} component="span" fontFamily="nanumpenscript" variant="h5">
        {TODAY.getMonth() + 1}
      </Typography>
    </time>
  );
};

export default DatePicker;
