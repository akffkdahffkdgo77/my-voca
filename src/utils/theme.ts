import tw, { TwStyle } from 'twin.macro';

export type TypographyFontFamily = 'sans' | 'nanumpenscript';
export type TypographyAlignType = 'left' | 'right' | 'center' | 'justify';
export type TypographyVariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b24' | 'b18' | 'b16' | 'b14' | 'b12' | 'c11' | 'c8';

export const typographyFontFamily: Record<TypographyFontFamily, TwStyle> = {
    sans: tw`font-sans`,
    nanumpenscript: tw`font-nanumpenscript`
};

export const typographyAligns: Record<TypographyAlignType, TwStyle> = {
    left: tw`text-left`,
    right: tw`text-left`,
    center: tw`text-center`,
    justify: tw`text-justify`
};

export const typographyVariants: Record<TypographyVariantType, TwStyle> = {
    h1: tw`text-h1 font-sans`,
    h2: tw`text-h2 font-sans`,
    h3: tw`text-h3 font-sans`,
    h4: tw`text-h4 font-sans`,
    h5: tw`text-h5 font-sans`,
    h6: tw`text-h6 font-sans`,
    b24: tw`text-b24 font-sans`,
    b18: tw`text-b18 font-sans`,
    b16: tw`text-b16 font-sans`,
    b14: tw`text-b14 font-sans`,
    b12: tw`text-b12 font-sans`,
    c11: tw`text-c11 font-sans`,
    c8: tw`text-c8 font-sans`
};

export type ButtonShapeType = 'circle' | 'rounded' | 'square';
export type ButtonVariantType = 'icon' | 'outlined' | 'contained' | 'text';
export type ButtonSizeType = 'small' | 'medium' | 'large' | 'extraLarge';

export const buttonShape: Record<ButtonShapeType, TwStyle> = {
    circle: tw`rounded-full`,
    rounded: tw`rounded-lg`,
    square: tw`rounded`
};

export const buttonSize: Record<ButtonSizeType, TwStyle> = {
    small: tw`min-w-48pxr px-2 h-7 text-b12`,
    medium: tw`min-w-56pxr px-2 h-8 text-b12`,
    large: tw`h-10 min-w-80pxr  px-3 py-2 text-b14`,
    extraLarge: tw`h-12 min-w-120pxr px-3 py-2 text-b14`
};

export enum StyleThemes {
    'Rust' = 'rust',
    'ButteredRum' = 'buttered-rum',
    'Christi' = 'christi',
    'BlueChill' = 'blue-chill',
    'BlueGem' = 'blue-gem',
    'JazzberryJam' = 'jazzberry-jam',
    'Gray' = 'gray'
}

export type OptionalThemeType = {
    theme?: StyleThemes;
};

export type ThemeType = {
    theme: StyleThemes;
};

export const getBackgroundColor = (theme: StyleThemes) => {
    switch (theme) {
        case StyleThemes.Rust:
            return tw`bg-rust-100`;
        case StyleThemes.ButteredRum:
            return tw`bg-buttered-rum-100`;
        case StyleThemes.Christi:
            return tw`bg-christi-100`;
        case StyleThemes.BlueGem:
            return tw`bg-blue-gem-100`;
        case StyleThemes.JazzberryJam:
            return tw`bg-jazzberry-jam-100`;
        case StyleThemes.BlueChill:
            return tw`bg-blue-chill-100`;
        default:
            return tw`bg-gray-100`;
    }
};

export const getLightBackgroundColor = (theme: StyleThemes) => {
    switch (theme) {
        case StyleThemes.Rust:
            return tw`bg-rust-50/20`;
        case StyleThemes.ButteredRum:
            return tw`bg-buttered-rum-50/20`;
        case StyleThemes.Christi:
            return tw`bg-christi-50/20`;
        case StyleThemes.BlueGem:
            return tw`bg-blue-gem-50/20`;
        case StyleThemes.JazzberryJam:
            return tw`bg-jazzberry-jam-50/20`;
        case StyleThemes.BlueChill:
            return tw`bg-blue-chill-50/20`;
        default:
            return tw`bg-gray-50/20`;
    }
};

export const getBorderColor = (theme: StyleThemes) => {
    switch (theme) {
        case StyleThemes.Rust:
            return tw`border-rust-300`;
        case StyleThemes.ButteredRum:
            return tw`border-buttered-rum-300`;
        case StyleThemes.Christi:
            return tw`border-christi-300`;
        case StyleThemes.BlueGem:
            return tw`border-blue-gem-300`;
        case StyleThemes.JazzberryJam:
            return tw`border-jazzberry-jam-300`;
        case StyleThemes.BlueChill:
            return tw`border-blue-chill-300`;
        default:
            return tw`border-gray-950`;
    }
};

export const getTextColor = (theme: StyleThemes) => {
    switch (theme) {
        case StyleThemes.Rust:
            return tw`text-rust-500`;
        case StyleThemes.ButteredRum:
            return tw`text-buttered-rum-500`;
        case StyleThemes.Christi:
            return tw`text-christi-500`;
        case StyleThemes.BlueGem:
            return tw`text-blue-gem-500`;
        case StyleThemes.JazzberryJam:
            return tw`text-jazzberry-jam-500`;
        case StyleThemes.BlueChill:
            return tw`text-blue-chill-500`;
        default:
            return tw`text-gray-950`;
    }
};

export const getDarkTextColor = (theme: StyleThemes) => {
    switch (theme) {
        case StyleThemes.Rust:
            return tw`text-rust-900`;
        case StyleThemes.ButteredRum:
            return tw`text-buttered-rum-900`;
        case StyleThemes.Christi:
            return tw`text-christi-900`;
        case StyleThemes.BlueGem:
            return tw`text-blue-gem-900`;
        case StyleThemes.JazzberryJam:
            return tw`text-jazzberry-jam-900`;
        case StyleThemes.BlueChill:
            return tw`text-blue-chill-900`;
        default:
            return tw`text-gray-900`;
    }
};

export const colors: Record<string, Record<number, string>> = {
    rust: {
        50: '#fff8ec',
        100: '#ffeed4',
        200: '#ffdaa8',
        300: '#ffbe70',
        400: '#ff9736',
        500: '#ff790f',
        600: '#f05d06',
        700: '#c74507',
        800: '#a93a0f',
        900: '#7f2e0f',
        950: '#451505'
    },
    'buttered-rum': {
        50: '#fdfde9',
        100: '#fafbc6',
        200: '#f9f68f',
        300: '#f5ea4f',
        400: '#f0d91f',
        500: '#e0c112',
        600: '#c1970d',
        700: '#a9780f',
        800: '#805713',
        900: '#6d4716',
        950: '#3f2509'
    },
    christi: {
        50: '#f0fee7',
        100: '#ddfccb',
        200: '#bdf89e',
        300: '#93f165',
        400: '#6ee437',
        500: '#4dca18',
        600: '#3aa90f',
        700: '#2c7b10',
        800: '#276113',
        900: '#235215',
        950: '#0d2e05'
    },
    'blue-chill': {
        50: '#f0fdfc',
        100: '#cbfcf9',
        200: '#97f8f3',
        300: '#5bedeb',
        400: '#2ad3d7',
        500: '#0fa4a9',
        600: '#0a9097',
        700: '#0d7178',
        800: '#0f5a60',
        900: '#124a4f',
        950: '#032b30'
    },
    'blue-gem': {
        50: '#f5f2ff',
        100: '#ede6ff',
        200: '#ddd1ff',
        300: '#c5acff',
        400: '#aa7eff',
        500: '#9249ff',
        600: '#8724ff',
        700: '#7913ee',
        800: '#650fc8',
        900: '#570fa9',
        950: '#33066f'
    },
    'jazzberry-jam': {
        50: '#fef1fa',
        100: '#fde6f6',
        200: '#feccef',
        300: '#fea3e2',
        400: '#fc6acc',
        500: '#f63eb4',
        600: '#e61c94',
        700: '#c80e77',
        800: '#a90f64',
        900: '#8a1154',
        950: '#55022f'
    },
    gray: {
        50: '#fafafa',
        100: '#efefef',
        200: '#dcdcdc',
        300: '#bdbdbd',
        400: '#989898',
        500: '#7c7c7c',
        600: '#656565',
        700: '#525252',
        800: '#464646',
        900: '#3d3d3d',
        950: '#292929'
    }
};
