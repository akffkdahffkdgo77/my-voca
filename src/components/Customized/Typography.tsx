import React from 'react';

type Props = React.HTMLAttributes<HTMLElement> & React.LabelHTMLAttributes<HTMLLabelElement>;

type TypographyType = Props & {
    component: string;
    children: React.ReactNode;
};

/**
 *  TODO LIST
 *  - variant : h1 ~ h6, b24 ~ b12, c11 ~ c8
 *  - customizable properties:
 *      - font-size
 *      - font-weight
 *      - text-align
 *      - color
 *      - gutterBottom
 */
export default function CustomizedTypography({ component, children, ...rest }: TypographyType) {
    return React.createElement(component, { ...rest }, children);
}
