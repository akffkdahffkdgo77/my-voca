import { Typography } from 'components/Core';

import { colors } from 'utils/theme';

export default function ThemeColorGuide() {
    return (
        <>
            <Typography variant="b16" fontWeight="700" component="h3">
                General
            </Typography>
            <ul className="space-y-5">
                {Object.keys(colors).map((color) => (
                    <li key={color} className="w-full">
                        <ul className="flex w-full items-center gap-x-5 rounded">
                            {Object.keys(colors[color]).map((key) => (
                                <li key={key} className="w-full">
                                    <div style={{ backgroundColor: colors[color][Number(key)] }} className="h-14 w-full" />
                                    <Typography variant="b18" fontFamily="nanumpenscript">
                                        <small className="font-inherit">{key}</small>
                                        <br />
                                        {colors[color][Number(key)]}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    );
}
