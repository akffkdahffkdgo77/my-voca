import { Typography } from 'components/Core';
import tw from 'twin.macro';

import { colors } from 'utils/theme';

export default function GeneralTextColorGuide() {
    return (
        <>
            <Typography variant="b16" fontWeight="700" component="h3">
                General - Text
            </Typography>
            <div className="flex items-center gap-x-5">
                <div className="space-y-1">
                    <Typography variant="b12" fontWeight="700" component="small" twStyle={tw`capitalize`}>
                        Primary
                    </Typography>
                    <div className="h-14 w-28 bg-gray-950" />
                    <Typography variant="b18" fontFamily="nanumpenscript">
                        <small className="font-[inherit]">950</small>
                        <br />
                        {colors.gray['950']}
                    </Typography>
                </div>
                <div className="space-y-1">
                    <Typography variant="b12" fontWeight="700" component="small">
                        Secondary
                    </Typography>
                    <div className="h-14 w-28 bg-gray-900" />
                    <Typography variant="b18" fontFamily="nanumpenscript">
                        <small className="font-[inherit]">900</small>
                        <br />
                        {colors.gray['900']}
                    </Typography>
                </div>
                <div className="space-y-1">
                    <Typography variant="b12" fontWeight="700" component="small">
                        Placeholder
                    </Typography>
                    <div className="h-14 w-28 bg-gray-400" />
                    <Typography variant="b18" fontFamily="nanumpenscript">
                        <small className="font-[inherit]">400</small>
                        <br />
                        {colors.gray['400']}
                    </Typography>
                </div>
                <div className="space-y-1">
                    <Typography variant="b12" fontWeight="700" component="small">
                        Neutral
                    </Typography>
                    <div className="h-14 w-28 border border-gray-950 bg-white" />
                    <Typography variant="b18" fontFamily="nanumpenscript">
                        <small className="font-[inherit]">neutral</small>
                        <br />
                        #ffffff
                    </Typography>
                </div>
                <div className="space-y-1">
                    <Typography variant="b12" fontWeight="700" component="small">
                        Neutral
                    </Typography>
                    <div className="h-14 w-28 bg-black" />
                    <Typography variant="b18" fontFamily="nanumpenscript">
                        <small className="font-[inherit]">neutral</small>
                        <br />
                        #000000
                    </Typography>
                </div>
            </div>
        </>
    );
}
