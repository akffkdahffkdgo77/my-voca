import { ChangeEvent, KeyboardEvent } from 'react';

import styled from '@emotion/styled';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import { Input, Checkbox, Textarea } from 'components';
import tw from 'twin.macro';

import { OptionalThemeType, StyleThemes, getBackgroundColor } from 'utils/theme';

type CustomizedMobileTextInputType = OptionalThemeType & {
    isDisabled?: boolean;
    count?: number;
    word?: string;
    definition?: string;
    isHidden?: boolean;
    onHiddenClick?: () => void;
    onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index?: number) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const customStyle = {
    input: tw`font-nanumpenscript text-h4 rounded-none pr-72pxr shadow-md`,
    textareaContainer: tw`bg-grid`
};

const TwBlocker = styled.div(({ theme, isHidden }: Omit<CustomizedMobileTextInputType, 'isDisabled'>) => [
    tw`absolute -bottom-px right-0 left-0 h-200pxr flex items-center hover:cursor-pointer`,
    isHidden && theme && getBackgroundColor(theme),
    !isHidden && tw`hover:bg-gray-50/50 bg-transparent animate-pulse`
]);

export default function CustomizedMobileTextInput(props: CustomizedMobileTextInputType) {
    const { theme = StyleThemes.Gray, isHidden, onHiddenClick, isDisabled, count = 0, word, definition, onChange, onKeyDown, onClick } = props;

    return (
        <div className="relative bg-white shadow-md">
            <Input
                value={word}
                onChange={(e) => {
                    if (onChange) {
                        onChange(e, 0);
                    }
                }}
                onKeyDown={onKeyDown}
                isDisabled={isDisabled}
                hiddenText="단어"
                placeholder="word"
                maxLength={30}
                theme={theme}
                variant="contained"
                twStyle={customStyle.input}
            />
            <div className="absolute right-2 top-2 flex items-center justify-between gap-x-1">
                <Checkbox hiddenText="테스트 1회" theme={theme} isChecked={count >= 1} onChange={onClick} />
                <Checkbox hiddenText="테스트 2회" theme={theme} isChecked={count >= 2} onChange={onClick} />
                <Checkbox hiddenText="테스트 3회" theme={theme} isChecked={count >= 3} onChange={onClick} />
            </div>
            <Textarea
                value={definition}
                onChange={(e) => {
                    if (onChange) {
                        onChange(e, 1);
                    }
                }}
                onKeyDown={onKeyDown}
                isDisabled={isDisabled}
                hiddenText="뜻"
                placeholder="단어, 낱말"
                containerStyle={customStyle.textareaContainer}
            />
            {isHidden !== undefined && (
                <TwBlocker
                    isHidden={isHidden}
                    theme={theme}
                    className="group"
                    role="presentation"
                    onClick={() => {
                        if (onHiddenClick) {
                            onHiddenClick();
                        }
                    }}
                >
                    {isHidden ? (
                        <ArrowDownIcon className="mx-auto mt-5 hidden h-10 w-10 animate-pulse group-hover:block" />
                    ) : (
                        <ArrowUpIcon className="mx-auto mb-5 hidden h-10 w-10 animate-pulse group-hover:block" />
                    )}
                </TwBlocker>
            )}
        </div>
    );
}
