import styled from '@emotion/styled';
import { Typography } from 'components/Core';
import tw from 'twin.macro';

import Caption from './Caption';

import { StyleThemes, ThemeType, colors, getLightBackgroundColor } from 'utils/theme';

const TwColor = styled.div(({ theme }: ThemeType) => [tw`h-14 w-28 border border-gray-950`, theme && getLightBackgroundColor(theme)]);

export default function ThemeLightBackgroundColorGuide() {
    return (
        <>
            <Typography variant="b16" fontWeight="700" component="h3">
                Theme - Light Background
            </Typography>
            <div className="flex items-center gap-x-5">
                <div className="flex items-center gap-x-5">
                    <div className="space-y-1">
                        <Caption text="red" />
                        <div>
                            <TwColor theme={StyleThemes.Red} />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-inherit">50/20</small>
                                <br />
                                {colors.red['50']}, opacity 20
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Caption text="rust" />
                        <div>
                            <TwColor theme={StyleThemes.Rust} />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-inherit">50/20</small>
                                <br />
                                {colors.rust['50']}, opacity 20
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Caption text="buttered-rum" />
                        <div>
                            <TwColor theme={StyleThemes.ButteredRum} />{' '}
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-inherit">50/20</small>
                                <br />
                                {colors['buttered-rum']['50']}, opacity 20
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Caption text="christi" />
                        <div>
                            <TwColor theme={StyleThemes.Christi} />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-inherit">50/20</small>
                                <br />
                                {colors.christi['50']}, opacity 20
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Caption text="blue-chill" />
                        <div>
                            <TwColor theme={StyleThemes.BlueChill} />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-inherit">50/20</small>
                                <br />
                                {colors['blue-chill']['50']}, opacity 20
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Caption text="blue-gem" />
                        <div>
                            <TwColor theme={StyleThemes.BlueGem} />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-inherit">50/20</small>
                                <br />
                                {colors['blue-gem']['50']}, opacity 20
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Caption text="jazzberry-jam" />
                        <div>
                            <TwColor theme={StyleThemes.JazzberryJam} />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-inherit">50/20</small>
                                <br />
                                {colors['jazzberry-jam']['50']}, opacity 20
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
