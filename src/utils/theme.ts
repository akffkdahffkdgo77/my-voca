import tw, { TwStyle } from 'twin.macro';

export type TypographyAlignType = 'left' | 'right' | 'center' | 'justify';
export type TypographyVariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b24' | 'b18' | 'b16' | 'b14' | 'b12' | 'c11' | 'c8';

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

export enum StyleThemes {
    'Rust' = 'rust',
    'ButteredRum' = 'buttered-rum',
    'Christi' = 'christi',
    'BlueChill' = 'blue-chill',
    'BlueGem' = 'blue-gem',
    'JazzberryJam' = 'jazzberry-jam'
}

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
        default:
            return tw`bg-blue-chill-100`;
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
        default:
            return tw`bg-blue-chill-50/20`;
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
        default:
            return tw`border-blue-chill-300`;
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
        default:
            return tw`text-blue-chill-500`;
    }
};
