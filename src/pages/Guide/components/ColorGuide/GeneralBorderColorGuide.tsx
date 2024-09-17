import { Fragment } from 'react';

import Typography from '@components/Typography';

import { colors } from '@utils/theme';

const GeneralBorderColorGuide = () => {
  return (
    <Fragment>
      <Typography component="h3" fontWeight="700" variant="b16">
        General - Border
      </Typography>
      <div className="flex items-center gap-x-5">
        <div className="space-y-1">
          <Typography component="small" fontWeight="700" variant="b12">
            Primary
          </Typography>
          <div className="h-14 w-28 bg-gray-950" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">950</small>
            <br />
            {colors.gray['950']}
          </Typography>
        </div>
        <div className="space-y-1">
          <Typography component="small" fontWeight="700" variant="b12">
            Secondary
          </Typography>
          <div className="h-14 w-28 bg-gray-900" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">900</small>
            <br />
            {colors.gray['900']}
          </Typography>
        </div>
        <div className="space-y-1">
          <Typography component="small" fontWeight="700" variant="b12">
            Light
          </Typography>
          <div className="h-14 w-28 bg-gray-200" />
          <Typography fontFamily="nanumpenscript" variant="b18">
            <small className="font-inherit">200</small>
            <br />
            {colors.gray['200']}
          </Typography>
        </div>
      </div>
    </Fragment>
  );
};

export default GeneralBorderColorGuide;
