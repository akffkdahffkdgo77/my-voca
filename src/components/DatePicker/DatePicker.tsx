import Typography from '@components/Typography';

import { getDarkTextColor, OptionalThemeType, StyleThemes } from '@utils/theme';

const TODAY = new Date();
const TODAY_STRING = TODAY.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });

// TODO: date picker
const DatePicker = ({ theme = StyleThemes.Gray }: OptionalThemeType) => {
  return (
    <time dateTime={TODAY_STRING}>
      <Typography component="span" fontFamily="nanumpenscript" theme={theme} variant="h2">
        {TODAY.getDate()}
      </Typography>
      <Typography component="span" fontFamily="nanumpenscript" twStyle={getDarkTextColor(theme)} variant="h3">
        /
      </Typography>
      <Typography component="span" fontFamily="nanumpenscript" theme={theme} variant="h5">
        {TODAY.getMonth() + 1}
      </Typography>
    </time>
  );
};

export default DatePicker;
