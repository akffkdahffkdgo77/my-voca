import { Input, Checkbox, Textarea } from 'components';
import tw from 'twin.macro';

import { OptionalThemeType, StyleThemes } from 'utils/theme';

type CustomizedMobileTextInputType = OptionalThemeType & {
    isDisabled?: boolean;
};

export default function CustomizedMobileTextInput({ theme = StyleThemes.Gray, isDisabled }: CustomizedMobileTextInputType) {
    return (
        <div className="relative bg-white">
            <Input disabled={isDisabled} hiddenText="단어" placeholder="word" maxLength={30} theme={theme} variant="contained" twStyle={tw`font-nanumpenscript text-h4 rounded-none pr-72pxr`} />
            <div className="absolute right-2 top-2 flex items-center justify-between gap-x-1">
                <Checkbox hiddenText="테스트 1회" theme={theme} />
                <Checkbox hiddenText="테스트 2회" theme={theme} />
                <Checkbox hiddenText="테스트 3회" theme={theme} />
            </div>
            <Textarea disabled={isDisabled} hiddenText="뜻" placeholder="단어, 낱말" containerStyle={tw`bg-grid`} />
        </div>
    );
}
