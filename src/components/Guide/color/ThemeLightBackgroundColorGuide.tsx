import { Typography } from 'components/Core';
import tw from 'twin.macro';

import { colors } from 'utils/theme';

export default function ThemeLightBackgroundColorGuide() {
    return (
        <>
            <Typography variant="b16" fontWeight="700" component="h3">
                Theme - Light Background
            </Typography>
            <div className="flex items-center gap-x-5">
                <div className="flex items-center gap-x-5">
                    <div className="space-y-1">
                        <Typography variant="b12" fontWeight="700" component="small" twStyle={tw`capitalize`}>
                            red
                        </Typography>
                        <div>
                            <div className="h-14 w-28 border border-gray-950 bg-red-50/20" />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-[inherit]">50/20</small>
                                <br />
                                {colors.red['50']}, opacity 20
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Typography variant="b12" fontWeight="700" component="small" twStyle={tw`capitalize`}>
                            rust
                        </Typography>
                        <div>
                            <div className="h-14 w-28 border border-gray-950 bg-rust-50/20" />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-[inherit]">50/20</small>
                                <br />
                                {colors.rust['50']}, opacity 20
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Typography variant="b12" fontWeight="700" component="small" twStyle={tw`capitalize`}>
                            buttered-rum
                        </Typography>
                        <div>
                            <div className="h-14 w-28 border border-gray-950 bg-buttered-rum-50/20" />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-[inherit]">50/20</small>
                                <br />
                                {colors['buttered-rum']['50']}, opacity 20
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Typography variant="b12" fontWeight="700" component="small" twStyle={tw`capitalize`}>
                            christi
                        </Typography>
                        <div>
                            <div className="h-14 w-28 border border-gray-950 bg-christi-50/20" />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-[inherit]">50/20</small>
                                <br />
                                {colors.christi['50']}, opacity 20
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Typography variant="b12" fontWeight="700" component="small" twStyle={tw`capitalize`}>
                            blue-chill
                        </Typography>
                        <div>
                            <div className="h-14 w-28 border border-gray-950 bg-blue-chill-50/20" />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-[inherit]">50/20</small>
                                <br />
                                {colors['blue-chill']['50']}, opacity 20
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Typography variant="b12" fontWeight="700" component="small" twStyle={tw`capitalize`}>
                            blue-gem
                        </Typography>
                        <div>
                            <div className="h-14 w-28 border border-gray-950 bg-blue-gem-50/20" />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-[inherit]">50/20</small>
                                <br />
                                {colors['blue-gem']['50']}, opacity 20
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Typography variant="b12" fontWeight="700" component="small" twStyle={tw`capitalize`}>
                            jazzberry-jam
                        </Typography>
                        <div>
                            <div className="h-14 w-28 border border-gray-950 bg-jazzberry-jam-50/20" />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-[inherit]">50/20</small>
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
