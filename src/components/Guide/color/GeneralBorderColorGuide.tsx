import { Typography } from 'components/Core';

import { colors } from 'utils/theme';

export default function GeneralBorderColorGuide() {
    return (
        <>
            <Typography variant="b16" fontWeight="700" component="h3">
                General - Border
            </Typography>
            <div className="flex items-center gap-x-5">
                <div className="space-y-1">
                    <Typography variant="b12" fontWeight="700" component="small">
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
                        Light
                    </Typography>
                    <div className="h-14 w-28 bg-gray-200" />
                    <Typography variant="b18" fontFamily="nanumpenscript">
                        <small className="font-[inherit]">200</small>
                        <br />
                        {colors.gray['200']}
                    </Typography>
                </div>
            </div>
        </>
    );
}
