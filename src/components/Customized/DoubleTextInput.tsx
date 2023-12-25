import { ChangeEvent, Fragment, KeyboardEvent } from 'react';

import styled from '@emotion/styled';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import tw from 'twin.macro';

import { CustomizedInput } from './Input';

import { WordType } from 'utils/data';
import { OptionalThemeType, StyleThemes, getBackgroundColor, getBorderColor } from 'utils/theme';

type CustomizedDoubleTextInputType = OptionalThemeType & {
    words?: WordType[];
    onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index?: number) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isDisabled?: boolean;
    isHidden?: boolean[];
    onHiddenClick?: (idx?: string) => void;
};

const TwBlocker = styled.div(({ theme, isEven, isHidden }: OptionalThemeType & { isHidden?: boolean; isEven?: boolean }) => [
    tw`absolute bottom-0 left-px right-0 top-0 flex items-center !border-0 hover:cursor-pointer`,
    isHidden && theme && getBackgroundColor(theme),
    !isHidden && tw`hover:bg-gray-50/50 bg-transparent animate-pulse`,
    isEven && tw`[grid-column:4/-1]`,
    isEven === false && tw`[grid-column:2/2]`
]);

const TwInputContainer = styled.div(({ theme }: Omit<CustomizedDoubleTextInputType, 'isDisabled'>) => [
    tw`relative grid grid-cols-double border-t last-of-type:border-b bg-white`,
    theme && [getBorderColor(theme), tw`divide-x divide-[inherit]`]
]);

export default function CustomizedDoubleTextInput({ theme = StyleThemes.Gray, isDisabled, words = [], isHidden = [], onHiddenClick, ...rest }: CustomizedDoubleTextInputType) {
    return (
        <TwInputContainer theme={theme}>
            {words.map((word, index) => (
                <Fragment key={index}>
                    <CustomizedInput theme={theme} isDisabled={isDisabled} {...word} {...rest} />
                    {isHidden.length > 0 && (
                        <TwBlocker
                            role="presentation"
                            className="group"
                            onClick={() => {
                                if (onHiddenClick) {
                                    onHiddenClick(word.wordIdx);
                                }
                            }}
                            isEven={(index + 1) % 2 === 0}
                            isHidden={isHidden[index]}
                            theme={theme}
                        >
                            {isHidden[index] ? (
                                <ArrowRightIcon className="ml-5 hidden h-10 w-10 animate-pulse group-hover:block" />
                            ) : (
                                <ArrowLeftIcon className="ml-auto mr-5 hidden h-10 w-10 animate-pulse group-hover:block" />
                            )}
                        </TwBlocker>
                    )}
                </Fragment>
            ))}
        </TwInputContainer>
    );
}
