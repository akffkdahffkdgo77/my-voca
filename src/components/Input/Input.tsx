import { forwardRef, InputHTMLAttributes, useId } from 'react';

import styled from '@emotion/styled';
import tw, { theme as twinTheme, TwStyle } from 'twin.macro';

import Typography from '@components/Typography';

import { getBackgroundColor, getBorderColor, InputVariantType, OptionalThemeType, StyleThemes } from '@utils/theme';

type StylesType = {
  containerStyle?: TwStyle;
  height?: number | string;
  isError?: boolean;
  twStyle?: TwStyle;
  variant?: InputVariantType;
  width?: number | string;
} & OptionalThemeType;

interface Props extends InputHTMLAttributes<HTMLInputElement>, StylesType {
  helperText?: string;
  hiddenText?: string;
  isDisabled?: boolean;
  labelText?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(function Input(props, ref) {
  const {
    theme = StyleThemes.Gray,
    containerStyle,
    isDisabled,
    isError,
    hiddenText,
    labelText,
    helperText,
    type = 'text',
    maxLength,
    min,
    max,
    ...rest
  } = props;
  const id = useId();

  return (
    <TWContainer containerStyle={containerStyle}>
      <Typography
        component="label"
        fontWeight="500"
        gutterBottom={4}
        htmlFor={id}
        twStyle={{ ...tw`flex items-center`, ...(!labelText && tw`!sr-only`) }}
        variant="b12"
      >
        {hiddenText || labelText}
      </Typography>
      <TWInput
        {...rest}
        ref={ref}
        disabled={isDisabled}
        id={id}
        isError={isError}
        maxLength={maxLength}
        theme={theme}
        type={type}
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
            if (
              max &&
              e.currentTarget.value.length >= max.toString().length &&
              Number(e.currentTarget.value) > Number(max)
            ) {
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
        onKeyDown={(e) => {
          if (type === 'number' && ['-', '+', 'e', 'E'].includes(e.key)) {
            e.preventDefault();
          }
          if (props.onKeyDown) {
            props.onKeyDown(e);
          }
        }}
      />
      {helperText && (
        <Typography
          color={isError ? twinTheme`colors.red.600` : ''}
          fontWeight="600"
          twStyle={customStyle.helperText}
          variant="b12"
        >
          {helperText}
        </Typography>
      )}
    </TWContainer>
  );
});

export default Input;

const customStyle = {
  helperText: tw`ml-2`,
};

const TWContainer = styled.div(({ containerStyle }: StylesType) => [tw`w-full`, containerStyle && containerStyle]);

const TWInput = styled.input(({ isError, theme, width, height, variant, twStyle }: StylesType) => [
  tw`h-12 w-full text-ellipsis rounded-lg bg-inherit px-3 text-b16 outline-none ring-0 placeholder:text-gray-400 focus:ring-0`,
  theme && variant === 'contained' && getBackgroundColor(theme),
  theme && variant === 'text' && tw`rounded-none text-gray-950`,
  theme && variant === 'outlined' && [tw`border`, getBorderColor(theme)],
  width && { width },
  height && { height },
  isError && tw`border border-red-500`,
  twStyle && twStyle,
]);
