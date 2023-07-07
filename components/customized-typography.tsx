'use client';

import React from 'react';

type Props = React.HTMLAttributes<HTMLElement> & React.LabelHTMLAttributes<HTMLLabelElement>;

type TypographyType = Props & {
    component: string;
    children: React.ReactNode;
};

export default function CustomizedTypography({ component, children, ...rest }: TypographyType) {
    return React.createElement(component, { ...rest }, children);
}
