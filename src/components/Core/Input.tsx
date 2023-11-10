import { InputHTMLAttributes, useId } from 'react';

import styled from '@emotion/styled';
import tw, { TwStyle, theme as TwinTheme } from 'twin.macro';

import Typography from './Typography';

import { StyleThemes, getBackgroundColor, getBorderColor, getTextColor } from 'utils/theme';

type StylesType = {
    theme?: StyleThemes;
    variant?: 'contained' | 'outlined' | 'text';
    containerStyle?: TwStyle;
    twStyle?: TwStyle;
    hiddenText?: string;
};

type InputType = InputHTMLAttributes<HTMLInputElement> &
    StylesType & {
        isError?: boolean;
        labelText?: string;
        helperText?: string;
    };

const TwContainer = styled.div(({ containerStyle }: StylesType) => [tw`w-full`, containerStyle && containerStyle]);

const TwInput = styled.input(({ theme, variant, twStyle }: StylesType) => [
    [tw`h-12 text-b16 outline-none rounded-lg ring-0 focus:ring-0 w-full px-3`, tw`font-semibold`],
    theme && variant === 'contained' && getBackgroundColor(theme),
    theme && variant === 'text' && [getTextColor(theme), tw`rounded-none`],
    theme && variant === 'outlined' && [tw`border`, getBorderColor(theme)],
    twStyle && twStyle
]);

function Input({ theme = StyleThemes.BlueChill, containerStyle, isError, hiddenText, labelText, helperText, type, maxLength, min, max, ...props }: InputType) {
    const id = useId();
    return (
        <TwContainer containerStyle={containerStyle}>
            <Typography htmlFor={id} component="label" variant="b12" fontWeight="500" gutterBottom={4} className={!labelText ? '!sr-only' : ''} twStyle={tw`flex items-center`}>
                {hiddenText || labelText}
            </Typography>
            <TwInput
                {...props}
                theme={theme}
                id={id}
                type={type}
                maxLength={maxLength}
                onKeyDown={(e) => {
                    if (type === 'number' && ['e', 'E', '+', '-'].includes(e.key)) {
                        e.preventDefault();
                    }
                }}
                onChange={(e) => {
                    if (type === 'text') {
                        // 한글 글자수 제한
                        if (maxLength && e.currentTarget.value.length > maxLength) {
                            e.currentTarget.value = e.currentTarget.value.slice(0, maxLength);
                        }
                    }
                    if (type === 'number') {
                        // 최소 값
                        if (min && Number(min) > 0 && e.currentTarget.value === '0') {
                            e.currentTarget.value = '';
                        }
                        // 최대 값
                        if (max && e.currentTarget.value.length >= max.toString().length && Number(e.currentTarget.value) > Number(max)) {
                            if (Number(e.currentTarget.value) > Number(max)) {
                                e.currentTarget.value = max.toString();
                            } else {
                                e.currentTarget.value = e.currentTarget.value.slice(0, max.toString().length);
                            }
                        }
                    }
                }}
            />
            {helperText && (
                <Typography variant="b12" fontWeight="600" color={isError ? TwinTheme`colors.red.600` : ''} twStyle={tw`ml-2`}>
                    {helperText}
                </Typography>
            )}
        </TwContainer>
    );
}

export default Input;
