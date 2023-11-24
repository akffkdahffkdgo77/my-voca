import { TextareaHTMLAttributes, forwardRef, useEffect, useId } from 'react';

import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';

import Typography from './Typography';

import useForwardRef from 'hooks/useForwardRef';

type StylesType = {
    width?: number;
    height?: number;
    isAutoHeight?: boolean;
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    letterSpacing?: string;
    containerStyle?: TwStyle;
    twStyle?: TwStyle;
};

type TextareaType = TextareaHTMLAttributes<HTMLTextAreaElement> &
    StylesType & {
        labelText?: string;
        hiddenText?: string;
    };

const TwTextareaContainer = styled.div(({ width, height, isAutoHeight, containerStyle }: StylesType) => [
    tw`pl-3 pr-1 py-2 w-full bg-white h-200pxr`,
    width && { width },
    height && { height },
    isAutoHeight && tw`px-3 min-h-120pxr h-full`,
    containerStyle && containerStyle
]);

const TwTextarea = styled.textarea(({ isAutoHeight, color, fontSize, fontWeight, lineHeight, letterSpacing, twStyle }: StylesType) => [
    tw`outline-none min-h-0 placeholder:text-gray-400 pr-2 overflow-y-auto focus:ring-0 ring-0 h-full w-full bg-transparent text-b16 text-gray-950`,
    color && { color },
    fontSize && { fontSize },
    fontWeight && { fontWeight },
    lineHeight && { lineHeight },
    letterSpacing && { letterSpacing },
    isAutoHeight && tw`min-h-inherit`,
    {
        '::-webkit-scrollbar': tw`w-1.5`,
        '::-webkit-scrollbar-track': tw`bg-inherit`,
        '::-webkit-scrollbar-thumb': tw`bg-gray-200 rounded-2.5xl`,
        '::-webkit-scrollbar-thumb:hover': tw`bg-gray-200/70`
    },
    twStyle && twStyle
]);

const Textarea = forwardRef<HTMLTextAreaElement, TextareaType>(function useCreateTextarea({ value, onChange, ...rest }, ref) {
    const { width, height, isAutoHeight, backgroundColor, containerStyle, maxLength, labelText, hiddenText } = rest;
    const id = useId();
    const textareaRef = useForwardRef<HTMLTextAreaElement>(ref);

    useEffect(() => {
        if (isAutoHeight) {
            const textarea = textareaRef.current;
            if (textarea) {
                textarea.style.height = '0px';
                textarea.style.height = `${textarea.scrollHeight}px`;
            }
        }
    }, [isAutoHeight, value, textareaRef]);

    return (
        <>
            <Typography htmlFor={id} component="label" variant="b12" fontWeight="500" className={!labelText ? '!sr-only' : ''} twStyle={tw`flex items-center pl-3`}>
                {hiddenText || labelText}
            </Typography>
            <TwTextareaContainer isAutoHeight={isAutoHeight} width={width} height={height} backgroundColor={backgroundColor} containerStyle={containerStyle}>
                <TwTextarea
                    id={id}
                    {...rest}
                    ref={textareaRef}
                    value={value}
                    maxLength={maxLength}
                    onChange={(e) => {
                        // 한글 글자수 제한
                        if (maxLength && e.currentTarget.value.length > maxLength) {
                            e.currentTarget.value = e.currentTarget.value.slice(0, maxLength);
                        }
                        if (onChange) {
                            onChange(e);
                        }
                    }}
                />
            </TwTextareaContainer>
        </>
    );
});

export default Textarea;
