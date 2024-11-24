import { Fragment } from 'react';

import styled from '@emotion/styled';
import tw from 'twin.macro';

import Typography from '@components/Typography';

import { colors } from '@utils/color';

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
              <TWColor style={{ backgroundColor: '#fcefee' }} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">50/20</small>
                <br />
                {colors.red[50]}, opacity 20
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="rust" />
            <div>
              <TWColor style={{ backgroundColor: '#faf4eb' }} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">50/20</small>
                <br />
                {colors.rust[50]}, opacity 20
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="buttered-rum" />
            <div>
              <TWColor style={{ backgroundColor: '#f8f8e9' }} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">50/20</small>
                <br />
                {colors['buttered-rum'][50]}, opacity 20
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="christi" />
            <div>
              <TWColor style={{ backgroundColor: '#edf8e7' }} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">50/20</small>
                <br />
                {colors.christi[50]}, opacity 20
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="blue-chill" />
            <div>
              <TWColor style={{ backgroundColor: '#f1faf9' }} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">50/20</small>
                <br />
                {colors['blue-chill'][50]}, opacity 20
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="blue-gem" />
            <div>
              <TWColor style={{ backgroundColor: '#f3effc' }} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">50/20</small>
                <br />
                {colors['blue-gem'][50]}, opacity 20
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="jazzberry-jam" />
            <div>
              <TWColor style={{ backgroundColor: '#fceff6' }} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">50/20</small>
                <br />
                {colors['jazzberry-jam'][50]}, opacity 20
              </Typography>
            </div>
          </div>
          <div className="space-y-1">
            <Caption text="gray" />
            <div>
              <TWColor style={{ backgroundColor: '#f7f6f6' }} />
              <Typography fontFamily="nanumpenscript" variant="b18">
                <small className="font-inherit">50/20</small>
                <br />
                {colors['gray'][50]}, opacity 20
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ThemeLightBackgroundColorGuide;

const TWColor = styled.div(() => [tw`h-14 w-28`]);
