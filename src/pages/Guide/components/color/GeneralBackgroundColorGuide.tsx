import { Typography } from 'components/Core';

import { colors } from 'utils/theme';

export default function GeneralBackgroundColorGuide() {
    return (
        <>
            <Typography variant="b16" fontWeight="700" component="h3">
                General - Background
            </Typography>
            <div className="flex items-center gap-x-5">
                <div className="space-y-1">
                    <Typography variant="b12" fontWeight="700" component="small">
                        Neutral
                    </Typography>
                    <div className="h-14 w-28 border border-gray-950 bg-white" />
                    <Typography variant="b18" fontFamily="nanumpenscript">
                        <small className="font-inherit">neutral</small>
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
                        <small className="font-inherit">neutral</small>
                        <br />
                        #000000
                    </Typography>
                </div>
                <div className="space-y-1">
                    <Typography variant="b12" fontWeight="700" component="small">
                        Grid
                    </Typography>
                    <div className="h-14 w-28 bg-grid" />
                    <Typography variant="b18" fontFamily="nanumpenscript">
                        <small className="font-inherit">grid</small>
                        <br />
                        #eeeeee
                    </Typography>
                </div>
                <div className="space-y-1">
                    <Typography variant="b12" fontWeight="700" component="small">
                        Light Grid
                    </Typography>
                    <div className="bg-grid-light h-14 w-28" />
                    <Typography variant="b18" fontFamily="nanumpenscript">
                        <small className="font-inherit">light-grid</small>
                        <br />
                        #fafafa
                    </Typography>
                </div>
                <div className="space-y-1">
                    <Typography variant="b12" fontWeight="700" component="small">
                        Toast - Error
                    </Typography>
                    <div className="h-14 w-28 bg-red-500" />
                    <Typography variant="b18" fontFamily="nanumpenscript">
                        <small className="font-inherit">500</small>
                        <br />
                        #ef4444
                    </Typography>
                </div>
                <div className="space-y-1">
                    <Typography variant="b12" fontWeight="700" component="small">
                        Toast - Info
                    </Typography>
                    <div className="h-14 w-28 bg-blue-500" />
                    <Typography variant="b18" fontFamily="nanumpenscript">
                        <small className="font-inherit">500</small>
                        <br />
                        #3b82f6
                    </Typography>
                </div>
                <div className="space-y-1">
                    <Typography variant="b12" fontWeight="700" component="small">
                        Toast - Warning
                    </Typography>
                    <div className="h-14 w-28 bg-yellow-500" />
                    <Typography variant="b18" fontFamily="nanumpenscript">
                        <small className="font-inherit">500</small>
                        <br />
                        #eab308
                    </Typography>
                </div>
                <div className="space-y-1">
                    <Typography variant="b12" fontWeight="700" component="small">
                        Toast - Success
                    </Typography>
                    <div className="h-14 w-28 bg-green-500" />
                    <Typography variant="b18" fontFamily="nanumpenscript">
                        <small className="font-inherit">500</small>
                        <br />
                        #22c55e
                    </Typography>
                </div>
                <div className="space-y-1">
                    <Typography variant="b12" fontWeight="700" component="small">
                        Scrollbar
                    </Typography>
                    <div className="h-14 w-28 bg-gray-200" />
                    <Typography variant="b18" fontFamily="nanumpenscript">
                        <small className="font-inherit">200</small>
                        <br />
                        {colors.gray['200']}
                    </Typography>
                </div>
                <div className="space-y-1">
                    <Typography variant="b12" fontWeight="700" component="small">
                        Select - Icon
                    </Typography>
                    <div className="h-14 w-28 bg-gray-900" />
                    <Typography variant="b18" fontFamily="nanumpenscript">
                        <small className="font-inherit">900</small>
                        <br />
                        {colors.gray['900']}
                    </Typography>
                </div>
            </div>
        </>
    );
}
