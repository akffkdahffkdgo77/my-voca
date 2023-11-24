import { Typography } from 'components/Core';

import { OptionalThemeType, StyleThemes, getDarkTextColor } from 'utils/theme';

const TODAY = new Date();
const TODAY_STRING = TODAY.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });

type CustomizedDatePickerType = OptionalThemeType;

// TODO: date picker
export default function CustomizedDatePicker({ theme = StyleThemes.Gray }: CustomizedDatePickerType) {
    return (
        <time dateTime={TODAY_STRING}>
            <Typography component="span" theme={theme} fontFamily="nanumpenscript" variant="h2">
                {TODAY.getDate()}
            </Typography>
            <Typography component="span" fontFamily="nanumpenscript" variant="h3" twStyle={getDarkTextColor(theme)}>
                /
            </Typography>
            <Typography component="span" theme={theme} fontFamily="nanumpenscript" variant="h5">
                {TODAY.getMonth() + 1}
            </Typography>
        </time>
    );
}
