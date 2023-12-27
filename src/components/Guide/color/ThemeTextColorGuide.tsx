import styled from '@emotion/styled';
import { Typography } from 'components/Core';
import tw from 'twin.macro';

import Caption from './Caption';

import { StyleThemes, ThemeType, colors, getTextColor } from 'utils/theme';

const TwColor = styled.div(({ theme }: ThemeType) => [tw`h-14 w-28`, theme && getTextColor(theme)]);

export default function ThemeTextColorGuide() {
    return (
        <>
            <Typography variant="b16" fontWeight="700" component="h3">
                Theme - Text
            </Typography>
            <div className="flex items-center gap-x-5">
                <div className="flex items-center gap-x-5">
                    <div className="space-y-1">
                        <Caption text="red" />
                        <div>
                            <TwColor theme={StyleThemes.Red} />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-inherit">500</small>
                                <br />
                                {colors.red['500']}
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Caption text="rust" />
                        <div>
                            <TwColor theme={StyleThemes.Rust} />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-inherit">500</small>
                                <br />
                                {colors.rust['500']}
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Caption text="buttered-rum" />
                        <div>
                            <TwColor theme={StyleThemes.ButteredRum} />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-inherit">500</small>
                                <br />
                                {colors['buttered-rum']['500']}
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Caption text="christi" />
                        <div>
                            <TwColor theme={StyleThemes.Christi} />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-inherit">500</small>
                                <br />
                                {colors.christi['500']}
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Caption text="blue-chill" />
                        <div>
                            <TwColor theme={StyleThemes.BlueChill} />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-inherit">500</small>
                                <br />
                                {colors['blue-chill']['500']}
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Caption text="blue-gem" />
                        <div>
                            <TwColor theme={StyleThemes.BlueGem} />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-inherit">500</small>
                                <br />
                                {colors['blue-gem']['500']}
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Caption text="jazzberry-jam" />
                        <div>
                            <TwColor theme={StyleThemes.JazzberryJam} />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-inherit">500</small>
                                <br />
                                {colors['jazzberry-jam']['500']}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
