import { Fragment } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import Typography from '@components/Typography';

import { COLOR, colors, ColorType } from '@utils/color';

import Caption from './Caption';

const ThemeTextColorGuide = () => {
  return (
    <Fragment>
      <Typography component="h3" fontWeight="700" variant="b16">
        Color - Text
      </Typography>
      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-x-5">
          <div className="space-y-1">
            <Caption text="red" />
            <div>
              <TWColor color={COLOR.Red} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">600</small>
                <br />
                {colors.red[600]}
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="rust" />
            <div>
              <TWColor color={COLOR.Rust} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">600</small>
                <br />
                {colors.rust[600]}
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="buttered-rum" />
            <div>
              <TWColor color={COLOR.ButteredRum} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">800</small>
                <br />
                {colors['buttered-rum'][800]}
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="christi" />
            <div>
              <TWColor color={COLOR.Christi} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">600</small>
                <br />
                {colors.christi[600]}
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="blue-chill" />
            <div>
              <TWColor color={COLOR.BlueChill} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">600</small>
                <br />
                {colors['blue-chill'][600]}
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="blue-gem" />
            <div>
              <TWColor color={COLOR.BlueGem} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">600</small>
                <br />
                {colors['blue-gem'][600]}
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="jazzberry-jam" />
            <div>
              <TWColor color={COLOR.JazzberryJam} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">600</small>
                <br />
                {colors['jazzberry-jam'][600]}
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="gray" />
            <div>
              <TWColor color={COLOR.Gray} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">950</small>
                <br />
                {colors['gray'][950]}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ThemeTextColorGuide;

const TWColor = styled.div(({ color }: ColorType) => [
  tw`h-14 w-28`,
  color && {
    backgroundColor:
      color === COLOR.Gray ? colors[color][950] : color === COLOR.ButteredRum ? colors[color][800] : colors[color][600],
  },
]);
