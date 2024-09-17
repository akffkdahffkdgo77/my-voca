import { Fragment } from 'react';

import Typography from '@components/Typography';

import { colors } from '@utils/theme';

const GeneralBackgroundColorGuide = () => {
  return (
    <Fragment>
      <Typography component="h3" fontWeight="700" variant="b16">
        General - Background
      </Typography>
      <div className="flex items-center gap-x-5">
        <div className="space-y-1">
          <Typography component="small" fontWeight="700" variant="b12">
            Neutral
          </Typography>
          <div className="h-14 w-28 border border-gray-950 bg-white" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">neutral</small>
            <br />
            #ffffff
          </Typography>
        </div>
        <div className="space-y-1">
          <Typography component="small" fontWeight="700" variant="b12">
            Neutral
          </Typography>
          <div className="h-14 w-28 bg-black" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">neutral</small>
            <br />
            #000000
          </Typography>
        </div>
        <div className="space-y-1">
          <Typography component="small" fontWeight="700" variant="b12">
            Grid
          </Typography>
          <div className="h-14 w-28 bg-grid" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">grid</small>
            <br />
            #eeeeee
          </Typography>
        </div>
        <div className="space-y-1">
          <Typography component="small" fontWeight="700" variant="b12">
            Light Grid
          </Typography>
          <div className="h-14 w-28 bg-grid-light" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">light-grid</small>
            <br />
            #fafafa
          </Typography>
        </div>
        <div className="space-y-1">
          <Typography component="small" fontWeight="700" variant="b12">
            Toast - Error
          </Typography>
          <div className="h-14 w-28 bg-red-500" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">500</small>
            <br />
            #ef4444
          </Typography>
        </div>
        <div className="space-y-1">
          <Typography component="small" fontWeight="700" variant="b12">
            Toast - Info
          </Typography>
          <div className="h-14 w-28 bg-blue-500" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">500</small>
            <br />
            #3b82f6
          </Typography>
        </div>
        <div className="space-y-1">
          <Typography component="small" fontWeight="700" variant="b12">
            Toast - Warning
          </Typography>
          <div className="h-14 w-28 bg-yellow-500" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">500</small>
            <br />
            #eab308
          </Typography>
        </div>
        <div className="space-y-1">
          <Typography component="small" fontWeight="700" variant="b12">
            Toast - Success
          </Typography>
          <div className="h-14 w-28 bg-green-500" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">500</small>
            <br />
            #22c55e
          </Typography>
        </div>
        <div className="space-y-1">
          <Typography component="small" fontWeight="700" variant="b12">
            Scrollbar
          </Typography>
          <div className="h-14 w-28 bg-gray-200" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">200</small>
            <br />
            {colors.gray['200']}
          </Typography>
        </div>
        <div className="space-y-1">
          <Typography component="small" fontWeight="700" variant="b12">
            Select - Icon
          </Typography>
          <div className="h-14 w-28 bg-gray-900" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">900</small>
            <br />
            {colors.gray['900']}
          </Typography>
        </div>
      </div>
    </Fragment>
  );
};

export default GeneralBackgroundColorGuide;
