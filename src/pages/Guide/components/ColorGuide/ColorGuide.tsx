import { Fragment } from 'react';

import Typography from '@components/Typography';

import GeneralBackgroundColorGuide from './GeneralBackgroundColorGuide';
import GeneralBorderColorGuide from './GeneralBorderColorGuide';
import GeneralTextColorGuide from './GeneralTextColorGuide';
import ThemeBackgroundColorGuide from './ThemeBackgroundColorGuide';
import ThemeBorderColorGuide from './ThemeBorderColorGuide';
import ThemeColorGuide from './ThemeColorGuide';
import ThemeLightBackgroundColorGuide from './ThemeLightBackgroundColorGuide';
import ThemeTextColorGuide from './ThemeTextColorGuide';

const ColorGuide = () => {
  return (
    <Fragment>
      <Typography component="h2" id="color" variant="h3">
        Color
      </Typography>
      <div className="space-y-5 rounded bg-white p-5 shadow-md">
        <ThemeColorGuide />
        <ThemeTextColorGuide />
        <GeneralTextColorGuide />
        <ThemeBorderColorGuide />
        <GeneralBorderColorGuide />
        <ThemeBackgroundColorGuide />
        <ThemeLightBackgroundColorGuide />
        <GeneralBackgroundColorGuide />
      </div>
    </Fragment>
  );
};

export default ColorGuide;
