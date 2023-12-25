import { ChangeEvent, KeyboardEvent } from 'react';

import styled from '@emotion/styled';
import { Checkbox, Input, Typography } from 'components/Core';
import tw from 'twin.macro';

import { OptionalThemeType, getLightBorderColor, getBackgroundColor, StyleThemes } from 'utils/theme';

type CustomizedInputType = OptionalThemeType & {
    count?: number;
    word?: string;
    definition?: string[];
    onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index?: number) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isDisabled?: boolean;
};

const customStyle = {
    title: tw`h-full pl-10 bg-transparent font-nanumpenscript text-h4`,
    tooltip: tw`absolute whitespace-nowrap min-w-4/5 z-200 -bottom-9 -right-5 bg-gray-100 rounded shadow-xl h-auto p-5`
};

const TwTriangle = styled.div(({ theme }: CustomizedInputType) => [
    tw`border-16 absolute right-1/2 bottom-4 h-4`,
    theme && [getLightBorderColor(theme), tw`border-x-transparent border-t-transparent`]
]);

export function CustomizedInput({ theme = StyleThemes.Gray, isDisabled, count = 0, word, definition = ['', ''], onChange, onKeyDown, onClick }: CustomizedInputType) {
    return (
        <>
            <div className="group relative h-full">
                <div className="absolute bottom-0 left-2 top-0 flex w-5 flex-col items-center justify-evenly">
                    <Checkbox hiddenText="테스트 1회" theme={theme} isChecked={count >= 1} onChange={onClick} />
                    <Checkbox hiddenText="테스트 2회" theme={theme} isChecked={count >= 2} onChange={onClick} />
                    <Checkbox hiddenText="테스트 3회" theme={theme} isChecked={count >= 3} onChange={onClick} />
                </div>
                <Input
                    maxLength={30}
                    placeholder="word"
                    value={word}
                    onChange={(e) => {
                        if (onChange) {
                            onChange(e, 0);
                        }
                    }}
                    onKeyDown={onKeyDown}
                    isDisabled={isDisabled}
                    variant="text"
                    hiddenText="단어"
                    theme={theme}
                    containerStyle={tw`h-full`}
                    twStyle={customStyle.title}
                />
                {word && word.length > 8 && (
                    <div className="hidden group-hover:block">
                        <TwTriangle theme={theme} />
                        <Typography variant="b14" fontWeight="600" twStyle={{ ...customStyle.tooltip, ...getBackgroundColor(theme) }}>
                            {word}
                        </Typography>
                    </div>
                )}
            </div>
            <div className="divide-y-2 divide-[inherit] bg-grid">
                {definition?.map((val, index) => (
                    <Input
                        key={index}
                        maxLength={100}
                        placeholder={index % 2 === 0 ? '단어, 낱말' : '이야기, 말'}
                        value={val}
                        onChange={(e) => {
                            if (onChange) {
                                onChange(e, index + 1);
                            }
                        }}
                        onKeyDown={onKeyDown}
                        variant="text"
                        hiddenText="뜻"
                        isDisabled={isDisabled}
                        height={definition.length < 2 ? 98 : 48}
                        theme={theme}
                    />
                ))}
            </div>
        </>
    );
}
