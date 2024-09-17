import { forwardRef, Fragment, TextareaHTMLAttributes, useEffect, useId } from 'react';

import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';

import { useForwardRef } from '@hooks/utils';

import Typography from '../Typography';

type StylesType = {
  backgroundColor?: string;
  color?: string;
  containerStyle?: TwStyle;
  fontSize?: string;
  fontWeight?: string;
  height?: number;
  isAutoHeight?: boolean;
  isError?: boolean;
  letterSpacing?: string;
  lineHeight?: string;
  twStyle?: TwStyle;
  width?: number;
};

interface Props extends StylesType, TextareaHTMLAttributes<HTMLTextAreaElement> {
  hiddenText?: string;
  isDisabled?: boolean;
  labelText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(function Textarea({ value, onChange, ...rest }, ref) {
  const {
    width,
    height,
    isError,
    isDisabled,
    isAutoHeight,
    backgroundColor,
    containerStyle,
    maxLength,
    labelText,
    hiddenText,
  } = rest;
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
  }, [isAutoHeight, value]);

  return (
    <Fragment>
      <Typography
        component="label"
        fontWeight="500"
        htmlFor={id}
        twStyle={{ ...tw`pl-3`, ...(!labelText && tw`!sr-only`) }}
        variant="b12"
      >
        {hiddenText || labelText}
      </Typography>
      <TWTextareaContainer
        backgroundColor={backgroundColor}
        containerStyle={containerStyle}
        height={height}
        isAutoHeight={isAutoHeight}
        isError={isError}
        width={width}
      >
        <TWTextarea
          {...rest}
          ref={textareaRef}
          disabled={isDisabled}
          id={id}
          maxLength={maxLength}
          value={value}
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
      </TWTextareaContainer>
    </Fragment>
  );
});

export default Textarea;

const TWTextareaContainer = styled.div(({ isError, width, height, isAutoHeight, containerStyle }: StylesType) => [
  tw`h-50 w-full bg-white py-2 pl-3 pr-1`,
  width && { width },
  height && { height },
  isAutoHeight && tw`h-full min-h-30 px-3`,
  isError && tw`border border-red-500`,
  containerStyle && containerStyle,
]);

const TWTextarea = styled.textarea(
  ({ isAutoHeight, color, fontSize, fontWeight, lineHeight, letterSpacing, twStyle }: StylesType) => [
    tw`h-full min-h-0 w-full overflow-y-auto bg-transparent pr-2 text-b18 text-gray-950 outline-none ring-0 placeholder:text-gray-400 focus:ring-0`,
    color && { color },
    fontSize && { fontSize },
    fontWeight && { fontWeight },
    lineHeight && { lineHeight },
    letterSpacing && { letterSpacing },
    isAutoHeight && tw`min-h-inherit`,
    {
      '::-webkit-scrollbar': tw`w-1.5`,
      '::-webkit-scrollbar-track': tw`bg-inherit`,
      '::-webkit-scrollbar-thumb': tw`rounded-2.5xl bg-gray-200`,
      '::-webkit-scrollbar-thumb:hover': tw`bg-gray-200/70`,
    },
    twStyle && twStyle,
  ],
);
