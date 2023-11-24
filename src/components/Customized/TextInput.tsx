import styled from '@emotion/styled';
import { Input, Checkbox } from 'components';
import tw from 'twin.macro';

import { OptionalThemeType, StyleThemes, getBorderColor } from 'utils/theme';

type CustomizedTextInputType = OptionalThemeType & {
    isDouble?: boolean;
    isDisabled?: boolean;
};

const titleStyle = tw`h-full pl-10 bg-transparent font-nanumpenscript text-h4`;

const TwInputContainer = styled.div(({ isDouble, theme }: Omit<CustomizedTextInputType, 'isDisabled'>) => [
    tw`grid grid-cols-single border-t last-of-type:border-b bg-white`,
    isDouble && tw`grid-cols-double`,
    theme && [getBorderColor(theme), tw`divide-x divide-[inherit]`]
]);

function SingleInput({ theme, isDisabled }: Omit<CustomizedTextInputType, 'isDouble'>) {
    return (
        <>
            <div className="relative h-full">
                <div className="absolute bottom-0 left-2 top-0 flex w-5 flex-col items-center justify-evenly">
                    <Checkbox hiddenText="테스트 1회" theme={theme} />
                    <Checkbox hiddenText="테스트 2회" theme={theme} />
                    <Checkbox hiddenText="테스트 3회" theme={theme} />
                </div>
                <Input disabled={isDisabled} hiddenText="단어" placeholder="word" maxLength={30} theme={theme} variant="text" containerStyle={tw`h-full`} twStyle={titleStyle} />
            </div>
            <div className="divide-y-2 divide-[inherit] bg-grid">
                <Input disabled={isDisabled} hiddenText="뜻" placeholder="단어, 낱말" maxLength={100} theme={theme} variant="text" />
                <Input disabled={isDisabled} hiddenText="뜻" placeholder="이야기, 말" maxLength={100} theme={theme} variant="text" />
            </div>
        </>
    );
}

function DoubleInput({ theme, isDisabled }: Omit<CustomizedTextInputType, 'isDouble'>) {
    return (
        <>
            {Array.from({ length: 2 }).map((_, index) => (
                <SingleInput key={index} theme={theme} isDisabled={isDisabled} />
            ))}
        </>
    );
}

export default function CustomizedTextInput({ theme = StyleThemes.Gray, isDouble, isDisabled }: CustomizedTextInputType) {
    return (
        <TwInputContainer isDouble={isDouble} theme={theme}>
            {isDouble ? <DoubleInput theme={theme} isDisabled={isDisabled} /> : <SingleInput theme={theme} isDisabled={isDisabled} />}
        </TwInputContainer>
    );
}
