import { Fragment } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import Typography from '@components/Typography';

import { colors, getTextColor, StyleThemes, ThemeType } from '@utils/theme';

import Caption from './Caption';

const ThemeTextColorGuide = () => {
  return (
    <Fragment>
      <Typography component="h3" fontWeight="700" variant="b16">
        Theme - Text
      </Typography>
      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-x-5">
          <div className="space-y-1">
            <Caption text="red" />
            <div>
              <TWColor theme={StyleThemes.Red} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">500</small>
                <br />
                {colors.red['500']}
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="rust" />
            <div>
              <TWColor theme={StyleThemes.Rust} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">500</small>
                <br />
                {colors.rust['500']}
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="buttered-rum" />
            <div>
              <TWColor theme={StyleThemes.ButteredRum} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">500</small>
                <br />
                {colors['buttered-rum']['500']}
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="christi" />
            <div>
              <TWColor theme={StyleThemes.Christi} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">500</small>
                <br />
                {colors.christi['500']}
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="blue-chill" />
            <div>
              <TWColor theme={StyleThemes.BlueChill} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">500</small>
                <br />
                {colors['blue-chill']['500']}
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="blue-gem" />
            <div>
              <TWColor theme={StyleThemes.BlueGem} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">500</small>
                <br />
                {colors['blue-gem']['500']}
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="jazzberry-jam" />
            <div>
              <TWColor theme={StyleThemes.JazzberryJam} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">500</small>
                <br />
                {colors['jazzberry-jam']['500']}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ThemeTextColorGuide;

const TWColor = styled.div(({ theme }: ThemeType) => [tw`h-14 w-28`, theme && getTextColor(theme)]);
