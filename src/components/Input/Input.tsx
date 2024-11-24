import { forwardRef, InputHTMLAttributes, useId } from 'react';

import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';

import { ErrorCircleFilled } from '@fluentui/react-icons';

import Typography from '@components/Typography';

import { COLOR, getBackgroundColor, getBorderColor, OptionalColorType } from '@utils/color';

export type InputVariantType = 'contained' | 'outlined' | 'text';

type StylesType = {
  containerStyle?: TwStyle;
  isError?: boolean;
  isFullWidth?: boolean;
  twStyle?: TwStyle;
  variant?: InputVariantType;
} & OptionalColorType;

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color'>, StylesType {
  helperText?: string;
  hiddenText?: string;
  isDisabled?: boolean;
  labelText?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(function Input(props, ref) {
  const {
    color = COLOR.Gray,
    containerStyle,
    isDisabled,
    isError,
    hiddenText,
    labelText,
    helperText,
    type = 'text',
    variant = 'outlined',
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
        color={color}
        disabled={isDisabled}
        id={id}
        maxLength={maxLength}
        type={type}
        variant={variant}
        onInput={(e) => {
          if (type === 'text') {
            // 한글 글자수 제한
            if (maxLength && e.currentTarget.value.length > maxLength) {
              e.currentTarget.value = e.currentTarget.value.slice(0, maxLength);
            }
          } else if (type === 'number') {
            if (min && Number(min) > 0 && e.currentTarget.value === '0') {
              // 최소 값
              e.currentTarget.value = '';
            } else if (
              max &&
              e.currentTarget.value.length >= max.toString().length &&
              Number(e.currentTarget.value) > Number(max)
            ) {
              // 최대 값
              if (Number(e.currentTarget.value) > Number(max)) {
                e.currentTarget.value = max.toString();
              } else {
                e.currentTarget.value = e.currentTarget.value.slice(0, max.toString().length);
              }
            }
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
        <div className="mt-1 flex items-center gap-x-1 pl-2">
          <ErrorCircleFilled className={`${isError ? 'text-red-600' : 'text-gray-950'} size-4`} />
          <Typography color={isError ? COLOR.Red : COLOR.Gray} fontWeight="400" variant="b12">
            {helperText}
          </Typography>
        </div>
      )}
    </TWContainer>
  );
});

export default Input;

const TWContainer = styled.div(({ containerStyle }: StylesType) => [tw`w-full`, containerStyle && containerStyle]);

const TWInput = styled.input(
  ({
    color,
    isFullWidth,
    variant,
    twStyle,
  }: {
    color: COLOR;
    variant: InputVariantType;
    isFullWidth?: boolean;
    twStyle?: TwStyle;
  }) => [
    tw`h-12 w-full text-ellipsis rounded-lg bg-inherit px-3 text-b16 placeholder:text-gray-400`,
    color && variant === 'contained' && getBackgroundColor(color),
    color && variant === 'text' && tw`rounded-none text-gray-950`,
    color && variant === 'outlined' && [tw`border`, getBorderColor(color)],
    isFullWidth && tw`w-full`,
    twStyle && twStyle,
  ],
);
