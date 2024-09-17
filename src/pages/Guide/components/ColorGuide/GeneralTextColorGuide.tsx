import { Fragment } from 'react';

import Typography from '@components/Typography';

import { colors } from '@utils/theme';

import Caption from './Caption';

const GeneralTextColorGuide = () => {
  return (
    <Fragment>
      <Typography component="h3" fontWeight="700" variant="b16">
        General - Text
      </Typography>
      <div className="flex items-center gap-x-5">
        <div className="space-y-1">
          <Caption text="primary" />
          <div className="h-14 w-28 bg-gray-950" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">950</small>
            <br />
            {colors.gray['950']}
          </Typography>
        </div>
        <div className="space-y-1">
          <Caption text="secondary" />
          <div className="h-14 w-28 bg-gray-900" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">900</small>
            <br />
            {colors.gray['900']}
          </Typography>
        </div>
        <div className="space-y-1">
          <Caption text="placeholder" />
          <div className="h-14 w-28 bg-gray-400" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">400</small>
            <br />
            {colors.gray['400']}
          </Typography>
        </div>
        <div className="space-y-1">
          <Caption text="neutral" />
          <div className="h-14 w-28 border border-gray-950 bg-white" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">neutral</small>
            <br />
            #ffffff
          </Typography>
        </div>
        <div className="space-y-1">
          <Caption text="neutral" />
          <div className="h-14 w-28 bg-black" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">neutral</small>
            <br />
            #000000
          </Typography>
        </div>
      </div>
    </Fragment>
  );
};

export default GeneralTextColorGuide;
