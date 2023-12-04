import { ChangeEvent } from 'react';

import { Input, Checkbox, Textarea } from 'components';
import tw from 'twin.macro';

import { OptionalThemeType, StyleThemes } from 'utils/theme';

type CustomizedMobileTextInputType = OptionalThemeType & {
    isDisabled?: boolean;
    count?: number;
    word?: string;
    definition?: string;
    onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
};

export default function CustomizedMobileTextInput({ theme = StyleThemes.Gray, isDisabled, count = 0, word, definition, onChange, onClick }: CustomizedMobileTextInputType) {
    return (
        <div className="relative bg-white">
            <Input
                value={word}
                onChange={onChange}
                disabled={isDisabled}
                hiddenText="단어"
                placeholder="word"
                maxLength={30}
                theme={theme}
                variant="contained"
                twStyle={tw`font-nanumpenscript text-h4 rounded-none pr-72pxr`}
            />
            <div className="absolute right-2 top-2 flex items-center justify-between gap-x-1">
                <Checkbox hiddenText="테스트 1회" theme={theme} isChecked={count >= 1} onChange={onClick} />
                <Checkbox hiddenText="테스트 2회" theme={theme} isChecked={count >= 2} onChange={onClick} />
                <Checkbox hiddenText="테스트 3회" theme={theme} isChecked={count >= 3} onChange={onClick} />
            </div>
            <Textarea value={definition} onChange={onChange} disabled={isDisabled} hiddenText="뜻" placeholder="단어, 낱말" containerStyle={tw`bg-grid`} />
        </div>
    );
}
