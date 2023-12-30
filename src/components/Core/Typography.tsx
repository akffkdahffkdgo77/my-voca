import React from 'react';

import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';

import { OptionalThemeType, TypographyAlignType, TypographyFontFamily, TypographyVariantType, getTextColor, typographyAligns, typographyFontFamily, typographyVariants } from 'utils/theme';

type Props = React.HTMLAttributes<HTMLElement> & React.LabelHTMLAttributes<HTMLLabelElement>;

type StylesType = OptionalThemeType & {
    variant?: TypographyVariantType;
    color?: string;
    backgroundColor?: string;
    fontFamily?: TypographyFontFamily;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    gutterBottom?: number;
    align?: TypographyAlignType;
    twStyle?: TwStyle;
};

type TypographyType = Props &
    StylesType & {
        children: React.ReactNode;
        component?: string;
    };

function Typography({ component = 'p', children, ...rest }: TypographyType) {
    return React.createElement(component, { ...rest }, children);
}

const TwTypography = styled(Typography, {
    shouldForwardProp: (prop) => !['twStyle', 'gutterBottom', 'lineHeight', 'backgroundColor'].includes(prop)
})(({ variant, color, align, gutterBottom, fontWeight, fontSize, fontFamily, lineHeight, backgroundColor, theme, twStyle }: StylesType) => [
    tw`text-gray-950 text-b16`,
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
    twStyle && twStyle
]);

export default TwTypography;
