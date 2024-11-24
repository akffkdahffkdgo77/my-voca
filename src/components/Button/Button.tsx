import { ButtonHTMLAttributes } from 'react';

import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';

import { COLOR } from '@utils/color';

import { buttonContained, buttonOutlined, buttonText } from './styles';

export type ButtonShapeType = 'rounded' | 'square';
export type ButtonVariantType = 'contained' | 'outlined' | 'text';
export type ButtonSizeType = 'extraLarge' | 'large' | 'medium' | 'mini' | 'small';

type StylesType = {
  color?: COLOR;
  shape?: ButtonShapeType;
  size?: ButtonSizeType;
  twStyle?: TwStyle;
  variant?: ButtonVariantType;
};

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, StylesType {
  text: string;
}

const Button = (props: Props) => {
  const {
    text,
    color = COLOR.Gray,
    type = 'button',
    variant = 'outlined',
    shape = 'rounded',
    size = 'medium',
    onClick,
    ...rest
  } = props;

  return (
    <TWButton
      {...rest}
      color={color}
      shape={shape}
      size={size}
      type={type}
      variant={variant}
      onClick={(e) => {
        e.stopPropagation();
        e.currentTarget.blur();
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {text}
    </TWButton>
  );
};

export default Button;

const buttonShape: Record<ButtonShapeType, TwStyle> = {
  rounded: tw`rounded-lg`,
  square: tw`rounded`,
};

const buttonSize: Record<ButtonSizeType, TwStyle> = {
  mini: tw`h-6 w-6`,
  small: tw`h-7 min-w-12 px-2 text-b12`,
  medium: tw`h-8 min-w-14 px-2 text-b12`,
  large: tw`h-10 min-w-20 px-3 py-2 text-b16`,
  extraLarge: tw`h-12 min-w-30 px-3 py-2 text-b18`,
};

const TWButton = styled.button(
  ({
    variant,
    shape,
    size,
    color,
    twStyle,
  }: {
    color: COLOR;
    shape: ButtonShapeType;
    size: ButtonSizeType;
    variant: ButtonVariantType;
    twStyle?: TwStyle;
  }) => [
    tw`bg-white`,
    shape && buttonShape[shape],
    size && buttonSize[size],
    variant === 'outlined' && buttonOutlined(color),
    variant === 'contained' && buttonContained(color),
    variant === 'text' && [tw`bg-transparent underline`, buttonText(color)],
    twStyle && twStyle,
  ],
);
