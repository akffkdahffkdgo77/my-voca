import { InputHTMLAttributes, useMemo } from 'react';

import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';
import { v4 as uuidv4 } from 'uuid';

import CustomizedTypography from './CustomizedTypography';

import { StyleThemes, getBackgroundColor, getBorderColor, getTextColor } from 'utils/theme';

type StylesType = {
    theme?: StyleThemes;
    variant?: 'contained' | 'outlined' | 'text';
    containerStyle?: TwStyle;
    twStyle?: TwStyle;
};

type CustomizedInputType = InputHTMLAttributes<HTMLInputElement> &
    StylesType & {
        labelText?: string;
        helperText?: string;
    };

const TwContainer = styled.div(({ containerStyle }: StylesType) => [tw`w-full`, containerStyle && containerStyle]);

const TwInput = styled.input(({ theme, variant, twStyle }: StylesType) => [
    tw`h-10 text-b14 font-semibold outline-none ring-0 focus:ring-0 w-full px-3`,
    theme && variant === 'contained' && getBackgroundColor(theme),
    theme && variant === 'text' && getTextColor(theme),
    theme && variant === 'outlined' && tw`border`,
    theme && variant === 'outlined' && getBorderColor(theme),
    twStyle && twStyle
]);

function CustomizedInput({ theme = StyleThemes.BlueChill, containerStyle, labelText, helperText, type, maxLength, min, max, ...props }: CustomizedInputType) {
    const id = useMemo(() => uuidv4(), []);
    return (
        <TwContainer containerStyle={containerStyle}>
            {labelText && (
                <CustomizedTypography htmlFor={id} component="label" variant="b12" fontWeight="500" gutterBottom={4} twStyle={tw`flex items-center`}>
                    {labelText}
                </CustomizedTypography>
            )}
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
                <CustomizedTypography variant="b12" fontWeight="600" twStyle={tw`ml-2`}>
                    {helperText}
                </CustomizedTypography>
            )}
        </TwContainer>
    );
}

export default CustomizedInput;
