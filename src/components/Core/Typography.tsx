import React from 'react';

import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';

import { TypographyAlignType, TypographyVariantType, typographyAligns, typographyVariants } from 'utils/theme';

type Props = React.HTMLAttributes<HTMLElement> & React.LabelHTMLAttributes<HTMLLabelElement>;

type StylesType = {
    variant?: TypographyVariantType;
    component?: string;
    children: React.ReactNode;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    gutterBottom?: number;
    align?: TypographyAlignType;
    twStyle?: TwStyle;
};

type TypographyType = Props & StylesType;

function Typography({ component = 'p', children, ...rest }: TypographyType) {
    return React.createElement(component, { ...rest }, children);
}

const TwTypography = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'twStyle' && prop !== 'gutterBottom'
})(({ variant, color, align, gutterBottom, fontWeight, fontSize, twStyle }: StylesType) => [
    tw`text-gray-950 text-b16 w-full h-full`,
    variant && typographyVariants[variant],
    fontSize && { fontSize },
    fontWeight && { fontWeight },
    color && { color },
    align && typographyAligns[align],
    gutterBottom && { marginBottom: gutterBottom },
    twStyle && twStyle
]);

export default TwTypography;
