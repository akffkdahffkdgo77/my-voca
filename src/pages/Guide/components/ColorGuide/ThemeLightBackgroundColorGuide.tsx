import { Fragment } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import Typography from '@components/Typography';

import { colors, getLightBackgroundColor, StyleThemes, ThemeType } from '@utils/theme';

import Caption from './Caption';

const ThemeLightBackgroundColorGuide = () => {
  return (
    <Fragment>
      <Typography component="h3" fontWeight="700" variant="b16">
        Theme - Light Background
      </Typography>
      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-x-5">
          <div className="space-y-1">
            <Caption text="red" />
            <div>
              <TWColor theme={StyleThemes.Red} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">50/20</small>
                <br />
                {colors.red['50']}, opacity 20
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="rust" />
            <div>
              <TWColor theme={StyleThemes.Rust} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">50/20</small>
                <br />
                {colors.rust['50']}, opacity 20
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="buttered-rum" />
            <div>
              <TWColor theme={StyleThemes.ButteredRum} />{' '}
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">50/20</small>
                <br />
                {colors['buttered-rum']['50']}, opacity 20
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="christi" />
            <div>
              <TWColor theme={StyleThemes.Christi} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">50/20</small>
                <br />
                {colors.christi['50']}, opacity 20
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="blue-chill" />
            <div>
              <TWColor theme={StyleThemes.BlueChill} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">50/20</small>
                <br />
                {colors['blue-chill']['50']}, opacity 20
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="blue-gem" />
            <div>
              <TWColor theme={StyleThemes.BlueGem} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">50/20</small>
                <br />
                {colors['blue-gem']['50']}, opacity 20
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="jazzberry-jam" />
            <div>
              <TWColor theme={StyleThemes.JazzberryJam} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">50/20</small>
                <br />
                {colors['jazzberry-jam']['50']}, opacity 20
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ThemeLightBackgroundColorGuide;

const TWColor = styled.div(({ theme }: ThemeType) => [
  tw`h-14 w-28 border border-gray-950`,
  theme && getLightBackgroundColor(theme),
]);
