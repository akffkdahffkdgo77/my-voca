import { createElement, HTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';

import {
  getTextColor,
  OptionalThemeType,
  typographyAligns,
  TypographyAlignType,
  TypographyFontFamily,
  typographyFontFamily,
  typographyVariants,
  TypographyVariantType,
} from '@utils/theme';

type HTMLTypes = HTMLAttributes<HTMLElement> & LabelHTMLAttributes<HTMLLabelElement>;

type StylesType = {
  align?: TypographyAlignType;
  backgroundColor?: string;
  color?: string;
  fontFamily?: TypographyFontFamily;
  fontSize?: string;
  fontWeight?: string;
  gutterBottom?: number;
  lineHeight?: string;
  twStyle?: TwStyle;
  variant?: TypographyVariantType;
} & OptionalThemeType;

interface Props extends HTMLTypes, StylesType {
  children: ReactNode;
  component?: string;
}

const DefaultTypography = ({ component = 'p', children, ...rest }: Props) => {
  return createElement(component, { ...rest }, children);
};

const Typography = styled(DefaultTypography, {
  shouldForwardProp: (prop) => !['backgroundColor', 'gutterBottom', 'lineHeight', 'twStyle'].includes(prop),
})(
  ({
    variant,
    color,
    align,
    gutterBottom,
    fontWeight,
    fontSize,
    fontFamily,
    lineHeight,
    backgroundColor,
    theme,
    twStyle,
  }: StylesType) => [
    tw`text-b16 text-gray-950`,
    theme && getTextColor(theme),
    variant && typographyVariants[variant],
    fontFamily && typographyFontFamily[fontFamily],
    fontSize && { fontSize },
    fontWeight && { fontWeight },
    lineHeight && { lineHeight },
    color && { color },
    backgroundColor && { backgroundColor },
    align && typographyAligns[align],
    gutterBottom && { marginBottom: gutterBottom },
    twStyle && twStyle,
  ],
);

export default Typography;
