import { ChangeEvent, KeyboardEvent } from 'react';

import styled from '@emotion/styled';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import tw from 'twin.macro';

import { CustomizedInput } from './Input';

import { OptionalThemeType, StyleThemes, getBackgroundColor, getBorderColor } from 'utils/theme';

type CustomizedSingleTextInputType = OptionalThemeType & {
    count?: number;
    word?: string;
    definition?: string[];
    onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, index?: number) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isDisabled?: boolean;
    isHidden?: boolean;
    onHiddenClick?: () => void;
};

const TwBlocker = styled.div(({ theme, isHidden }: Omit<CustomizedSingleTextInputType, 'isDisabled'>) => [
    tw`absolute bottom-0 left-px right-0 top-0 col-start-2 flex items-center !border-0 hover:cursor-pointer`,
    isHidden && theme && getBackgroundColor(theme),
    !isHidden && tw`hover:bg-gray-50/50 bg-transparent animate-pulse`
]);

const TwInputContainer = styled.div(({ theme }: Omit<CustomizedSingleTextInputType, 'isDisabled'>) => [
    tw`relative grid grid-cols-single border-t last-of-type:border-b bg-white`,
    theme && [getBorderColor(theme), tw`divide-x divide-[inherit]`]
]);

export default function CustomizedSingleTextInput({ theme = StyleThemes.Gray, isHidden, onHiddenClick, ...rest }: CustomizedSingleTextInputType) {
    return (
        <TwInputContainer theme={theme}>
            <CustomizedInput theme={theme} {...rest} />
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
                        <ArrowRightIcon className="ml-5 hidden h-10 w-10 animate-pulse group-hover:block" />
                    ) : (
                        <ArrowLeftIcon className="ml-auto mr-5 hidden h-10 w-10 animate-pulse group-hover:block" />
                    )}
                </TwBlocker>
            )}
        </TwInputContainer>
    );
}
