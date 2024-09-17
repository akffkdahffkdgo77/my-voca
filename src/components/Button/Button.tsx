import { ButtonHTMLAttributes, ReactNode } from 'react';

import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';

import {
  buttonShape,
  ButtonShapeType,
  buttonSize,
  ButtonSizeType,
  ButtonVariantType,
  getBackgroundColor,
  getBorderColor,
  StyleThemes,
} from '@utils/theme';

type StylesType = {
  backgroundColor?: string;
  borderRadius?: string;
  circleSize?: number;
  height?: number | string;
  shape?: ButtonShapeType;
  size?: ButtonSizeType;
  theme?: StyleThemes;
  twStyle?: TwStyle;
  variant?: ButtonVariantType;
  width?: number | string;
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, StylesType {
  children: ReactNode;
}

const Button = (props: Props) => {
  const {
    children,
    theme = StyleThemes.Gray,
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
      shape={shape}
      size={size}
      theme={theme}
      type={type}
      variant={variant}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {children}
    </TWButton>
  );
};

export default Button;

const TWButton = styled.button(
  ({ variant, shape, circleSize, size, theme, width, height, borderRadius, backgroundColor, twStyle }: StylesType) => [
    tw`bg-inherit`,
    shape && buttonShape[shape],
    variant !== 'icon' && size && buttonSize[size],
    theme && variant === 'icon' && [getBackgroundColor(theme), tw`h-6 w-6`],
    theme && variant === 'outlined' && [tw`border`, getBorderColor(theme)],
    theme &&
      variant === 'contained' && [getBackgroundColor(theme), theme === StyleThemes.Gray && tw`bg-gray-950 text-white`],
    width && { width, minWidth: width },
    height && { height, minHeight: height },
    shape === 'circle' && { width: circleSize, height: circleSize },
    borderRadius && { borderRadius },
    backgroundColor && { backgroundColor },
    twStyle && twStyle,
  ],
);
