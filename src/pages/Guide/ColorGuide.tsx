import { Typography } from 'components';

import {
    GeneralBackgroundColorGuide,
    GeneralBorderColorGuide,
    GeneralTextColorGuide,
    ThemeBackgroundColorGuide,
    ThemeBorderColorGuide,
    ThemeColorGuide,
    ThemeLightBackgroundColorGuide,
    ThemeTextColorGuide
} from 'pages/Guide/components';

export default function ColorGuide() {
    return (
        <>
            <Typography id="color" variant="h3" component="h2">
                Color
            </Typography>
            <div className="space-y-5 rounded bg-white p-5 shadow-md">
                <ThemeColorGuide />
                <ThemeTextColorGuide />
                <GeneralTextColorGuide />
                <ThemeBorderColorGuide />
                <GeneralBorderColorGuide />
                <ThemeBackgroundColorGuide />
                <ThemeLightBackgroundColorGuide />
                <GeneralBackgroundColorGuide />
            </div>
        </>
    );
}
