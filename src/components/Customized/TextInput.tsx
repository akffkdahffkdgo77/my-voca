import { ChangeEvent } from 'react';

import styled from '@emotion/styled';
import { Input, Checkbox } from 'components';
import tw from 'twin.macro';

import { OptionalThemeType, StyleThemes, getBorderColor } from 'utils/theme';

type CustomizedTextInputType = OptionalThemeType & {
    count?: number;
    word?: string;
    definition?: string[];
    onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    isDouble?: boolean;
    isDisabled?: boolean;
};

const titleStyle = tw`h-full pl-10 bg-transparent font-nanumpenscript text-h4`;

const TwInputContainer = styled.div(({ isDouble, theme }: Omit<CustomizedTextInputType, 'isDisabled'>) => [
    tw`grid grid-cols-single border-t last-of-type:border-b bg-white`,
    isDouble && tw`grid-cols-double`,
    theme && [getBorderColor(theme), tw`divide-x divide-[inherit]`]
]);

function SingleInput({ theme, isDisabled, count = 0, word, definition, onChange, onClick }: Omit<CustomizedTextInputType, 'isDouble'>) {
    return (
        <>
            <div className="relative h-full">
                <div className="absolute bottom-0 left-2 top-0 flex w-5 flex-col items-center justify-evenly">
                    <Checkbox hiddenText="테스트 1회" theme={theme} isChecked={count >= 1} onChange={onClick} />
                    <Checkbox hiddenText="테스트 2회" theme={theme} isChecked={count >= 2} onChange={onClick} />
                    <Checkbox hiddenText="테스트 3회" theme={theme} isChecked={count >= 3} onChange={onClick} />
                </div>
                <Input
                    value={word}
                    onChange={onChange}
                    disabled={isDisabled}
                    hiddenText="단어"
                    placeholder="word"
                    maxLength={30}
                    theme={theme}
                    variant="text"
                    containerStyle={tw`h-full`}
                    twStyle={titleStyle}
                />
            </div>
            <div className="divide-y-2 divide-[inherit] bg-grid">
                {definition?.map((val, index) => (
                    <Input
                        key={index}
                        value={val}
                        onChange={onChange}
                        disabled={isDisabled}
                        hiddenText="뜻"
                        placeholder={index % 2 === 0 ? '단어, 낱말' : '이야기, 말'}
                        maxLength={100}
                        theme={theme}
                        variant="text"
                    />
                ))}
            </div>
        </>
    );
}

function DoubleInput({ theme, isDisabled, ...rest }: Omit<CustomizedTextInputType, 'isDouble'>) {
    return (
        <>
            {Array.from({ length: 2 }).map((_, index) => (
                <SingleInput key={index} theme={theme} isDisabled={isDisabled} {...rest} />
            ))}
        </>
    );
}

export default function CustomizedTextInput({ theme = StyleThemes.Gray, isDouble, ...rest }: CustomizedTextInputType) {
    return (
        <TwInputContainer isDouble={isDouble} theme={theme}>
            {isDouble ? <DoubleInput theme={theme} {...rest} /> : <SingleInput theme={theme} {...rest} />}
        </TwInputContainer>
    );
}
