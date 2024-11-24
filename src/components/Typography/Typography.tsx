import { createElement, HTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';

import { COLOR, getTextColor } from '@utils/color';

export type TypographyAlignType = 'center' | 'justify' | 'left' | 'right';
export type TypographyFontFamily = 'nanumpenscript' | 'sans';
export type TypographyWhiteSpaceType = 'break-spaces' | 'normal' | 'nowrap' | 'pre-wrap' | 'pre';
export type TypographyWordBreakType = 'all' | 'keep' | 'normal' | 'words';
export type TypographyTransformType = 'capitalize' | 'lowercase' | 'uppercase';
export type TypographyVariantType =
  | 'b12'
  | 'b14'
  | 'b16'
  | 'b18'
  | 'b24'
  | 'c11'
  | 'c8'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type HTMLTypes = HTMLAttributes<HTMLElement> & LabelHTMLAttributes<HTMLLabelElement>;

type StylesType = {
  align?: TypographyAlignType;
  color?: 'inherit' | COLOR;
  fontFamily?: TypographyFontFamily;
  fontWeight?: string;
  gutterBottom?: number;
  transform?: TypographyTransformType;
  twStyle?: TwStyle;
  variant?: TypographyVariantType;
  whiteSpace?: TypographyWhiteSpaceType;
  wordBreak?: TypographyWordBreakType;
};

interface Props extends Omit<HTMLTypes, 'color'>, StylesType {
  children: ReactNode;
  component?: string;
}

const DefaultTypography = ({ component = 'p', children, ...rest }: Props) => {
  return createElement(component, { ...rest }, children);
};

const typographyFontFamily: Record<TypographyFontFamily, TwStyle> = {
  sans: tw`font-sans`,
  nanumpenscript: tw`font-nanumpenscript`,
};

const typographyAligns: Record<TypographyAlignType, TwStyle> = {
  left: tw`text-left`,
  right: tw`text-right`,
  center: tw`text-center`,
  justify: tw`text-justify`,
};

const typographyTransform: Record<TypographyTransformType, TwStyle> = {
  lowercase: tw`lowercase`,
  uppercase: tw`uppercase`,
  capitalize: tw`capitalize`,
};

const typographyWhiteSpace: Record<TypographyWhiteSpaceType, TwStyle> = {
  normal: tw`whitespace-normal`,
  nowrap: tw`whitespace-nowrap`,
  pre: tw`whitespace-pre`,
  'pre-wrap': tw`whitespace-pre-wrap`,
  'break-spaces': tw`whitespace-break-spaces`,
};

const typographyWordBreak: Record<TypographyWordBreakType, TwStyle> = {
  all: tw`break-all`,
  keep: tw`break-keep`,
  normal: tw`break-normal`,
  words: tw`break-words`,
};

const typographyVariant: Record<TypographyVariantType, TwStyle> = {
  h1: tw`font-sans text-h1`,
  h2: tw`font-sans text-h2`,
  h3: tw`font-sans text-h3`,
  h4: tw`font-sans text-h4`,
  h5: tw`font-sans text-h5`,
  h6: tw`font-sans text-h6`,
  b24: tw`font-sans text-b24`,
  b18: tw`font-sans text-b18`,
  b16: tw`font-sans text-b16`,
  b14: tw`font-sans text-b14`,
  b12: tw`font-sans text-b12`,
  c11: tw`font-sans text-c11`,
  c8: tw`font-sans text-c8`,
};

const Typography = styled(DefaultTypography, {
  shouldForwardProp: (prop) =>
    ![
      'align',
      'color',
      'color',
      'fontFamily',
      'fontWeight',
      'gutterBottom',
      'transform',
      'twStyle',
      'variant',
      'whiteSpace',
      'wordBreak',
    ].includes(prop),
})(
  ({
    variant,
    align,
    gutterBottom,
    fontWeight,
    fontFamily,
    color,
    twStyle,
    whiteSpace,
    wordBreak,
    transform,
  }: StylesType) => [
    tw`text-b16 text-gray-950`,
    color && (color === 'inherit' ? { color } : getTextColor(color)),
    align && typographyAligns[align],
    variant && typographyVariant[variant],
    fontFamily && typographyFontFamily[fontFamily],
    fontWeight && { fontWeight },
    gutterBottom && { marginBottom: gutterBottom },
    whiteSpace && typographyWhiteSpace[whiteSpace],
    wordBreak && typographyWordBreak[wordBreak],
    transform && typographyTransform[transform],
    twStyle && twStyle,
  ],
);

export default Typography;
