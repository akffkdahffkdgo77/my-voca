import styled from '@emotion/styled';
import tw, { TwStyle } from 'twin.macro';

import { ButtonShapeType, ButtonSizeType, ButtonVariantType, StyleThemes, buttonShape, buttonSize, getBackgroundColor, getBorderColor } from 'utils/theme';

type StylesType = {
    theme?: StyleThemes;
    variant?: ButtonVariantType;
    shape?: ButtonShapeType;
    size?: ButtonSizeType;
    width?: string | number;
    height?: string | number;
    borderRadius?: string;
    twStyle?: TwStyle;
};

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> &
    StylesType & {
        children: React.ReactNode;
    };

const TwButton = styled.button(({ variant, shape, size, theme, width, height, borderRadius, twStyle }: StylesType) => [
    tw`bg-inherit`,
    shape && buttonShape[shape],
    variant !== 'icon' && size && buttonSize[size],
    theme && variant === 'icon' && [getBackgroundColor(theme), tw`w-6 h-6`],
    theme && variant === 'outlined' && [tw`border`, getBorderColor(theme)],
    theme && variant === 'contained' && [getBackgroundColor(theme), theme === StyleThemes.Gray && tw`bg-gray-950 text-white`],
    width && { width },
    height && { height },
    borderRadius && { borderRadius },
    twStyle && twStyle
]);

/**
 *  TODO LIST
 *  - state:
 *      - disabled
 *      - focus
 *      - hover
 *      - active
 *  - variant - circle일 경우 width, height
 */
export default function CustomizedButton(props: ButtonType) {
    const { children, theme = StyleThemes.Gray, type = 'button', variant = 'outlined', shape = 'rounded', size = 'medium', onClick, ...rest } = props;
    return (
        <TwButton
            {...rest}
            theme={theme}
            variant={variant}
            shape={shape}
            size={size}
            type={type}
            onClick={(e) => {
                e.stopPropagation();
                if (onClick) {
                    onClick(e);
                }
            }}
        >
            {children}
        </TwButton>
    );
}
