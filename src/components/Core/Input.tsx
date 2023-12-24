import { InputHTMLAttributes, forwardRef, useId } from 'react';

import styled from '@emotion/styled';
import tw, { TwStyle, theme as TwinTheme } from 'twin.macro';

import Typography from './Typography';

import { InputVariantType, StyleThemes, getBackgroundColor, getBorderColor } from 'utils/theme';

type StylesType = {
    isError?: boolean;
    width?: number | string;
    height?: number | string;
    theme?: StyleThemes;
    variant?: InputVariantType;
    containerStyle?: TwStyle;
    twStyle?: TwStyle;
};

type InputType = InputHTMLAttributes<HTMLInputElement> &
    StylesType & {
        labelText?: string;
        helperText?: string;
        hiddenText?: string;
    };

const TwContainer = styled.div(({ containerStyle }: StylesType) => [tw`w-full`, containerStyle && containerStyle]);

const TwInput = styled.input(({ isError, theme, width, height, variant, twStyle }: StylesType) => [
    [tw`h-12 text-b16 placeholder:text-gray-400 outline-none bg-inherit text-ellipsis rounded-lg ring-0 focus:ring-0 w-full px-3`],
    theme && variant === 'contained' && getBackgroundColor(theme),
    theme && variant === 'text' && tw`rounded-none text-gray-950`,
    theme && variant === 'outlined' && [tw`border`, getBorderColor(theme)],
    width && { width },
    height && { height },
    isError && tw`border border-red-500`,
    twStyle && twStyle
]);

const Input = forwardRef<HTMLInputElement, InputType>(function useCreateInput(
    { theme = StyleThemes.Gray, containerStyle, isError, hiddenText, labelText, helperText, type, maxLength, min, max, ...props },
    ref
) {
    const id = useId();
    return (
        <TwContainer containerStyle={containerStyle}>
            <Typography htmlFor={id} component="label" variant="b12" fontWeight="500" gutterBottom={4} className={!labelText ? '!sr-only' : ''} twStyle={tw`flex items-center`}>
                {hiddenText || labelText}
            </Typography>
            <TwInput
                ref={ref}
                {...props}
                theme={theme}
                id={id}
                type={type}
                maxLength={maxLength}
                isError={isError}
                onKeyDown={(e) => {
                    if (type === 'number' && ['e', 'E', '+', '-'].includes(e.key)) {
                        e.preventDefault();
                    }
                    if (props.onKeyDown) {
                        props.onKeyDown(e);
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
                    if (props.onChange) {
                        props.onChange(e);
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
});

export default Input;
