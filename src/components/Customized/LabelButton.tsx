import { useId } from 'react';

import { Button, Typography } from 'components/Core';
import tw, { theme as twinTheme } from 'twin.macro';

import { OptionalThemeType, StyleThemes } from 'utils/theme';

type CustomizedLabelButtonType = OptionalThemeType & {
    buttonText: string;
    onClick?: () => void;
};

const customStyle = {
    label: tw`uppercase`
};

export default function CustomizedLabelButton({ theme = StyleThemes.Gray, buttonText, onClick }: CustomizedLabelButtonType) {
    const id = useId();
    return (
        <div className="flex flex-col">
            <Typography id={id} variant="c11" component="small" color={twinTheme`colors.gray.900`} twStyle={customStyle.label}>
                Layout
            </Typography>
            <Button aria-describedby={id} type="button" shape="rounded" variant="outlined" borderRadius="16px" size="large" backgroundColor={twinTheme`colors.white`} theme={theme} onClick={onClick}>
                <Typography variant="h4" align="center" fontFamily="nanumpenscript" lineHeight="24px">
                    {buttonText}
                </Typography>
            </Button>
        </div>
    );
}
