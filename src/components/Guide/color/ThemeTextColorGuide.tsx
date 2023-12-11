import { Typography } from 'components/Core';
import tw from 'twin.macro';

import { colors } from 'utils/theme';

export default function ThemeTextColorGuide() {
    return (
        <>
            <Typography variant="b16" fontWeight="700" component="h3">
                Theme - Text
            </Typography>
            <div className="flex items-center gap-x-5">
                <div className="flex items-center gap-x-5">
                    <div className="space-y-1">
                        <Typography variant="b12" fontWeight="700" component="small" twStyle={tw`capitalize`}>
                            red
                        </Typography>
                        <div>
                            <div className="h-14 w-28 bg-red-500" />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-[inherit]">500</small>
                                <br />
                                {colors.red['500']}
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Typography variant="b12" fontWeight="700" component="small" twStyle={tw`capitalize`}>
                            rust
                        </Typography>
                        <div>
                            <div className="h-14 w-28 bg-rust-500" />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-[inherit]">500</small>
                                <br />
                                {colors.rust['500']}
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Typography variant="b12" fontWeight="700" component="small" twStyle={tw`capitalize`}>
                            buttered-rum
                        </Typography>
                        <div>
                            <div className="h-14 w-28 bg-buttered-rum-500" />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-[inherit]">500</small>
                                <br />
                                {colors['buttered-rum']['500']}
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Typography variant="b12" fontWeight="700" component="small" twStyle={tw`capitalize`}>
                            christi
                        </Typography>
                        <div>
                            <div className="h-14 w-28 bg-christi-500" />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-[inherit]">500</small>
                                <br />
                                {colors.christi['500']}
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Typography variant="b12" fontWeight="700" component="small" twStyle={tw`capitalize`}>
                            blue-chill
                        </Typography>
                        <div>
                            <div className="h-14 w-28 bg-blue-chill-500" />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-[inherit]">500</small>
                                <br />
                                {colors['blue-chill']['500']}
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Typography variant="b12" fontWeight="700" component="small" twStyle={tw`capitalize`}>
                            blue-gem
                        </Typography>
                        <div>
                            <div className="h-14 w-28 bg-blue-gem-500" />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-[inherit]">500</small>
                                <br />
                                {colors['blue-gem']['500']}
                            </Typography>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Typography variant="b12" fontWeight="700" component="small" twStyle={tw`capitalize`}>
                            jazzberry-jam
                        </Typography>
                        <div>
                            <div className="h-14 w-28 bg-jazzberry-jam-500" />
                            <Typography variant="b18" fontFamily="nanumpenscript">
                                <small className="font-[inherit]">500</small>
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
