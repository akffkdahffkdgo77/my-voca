import { Fragment } from 'react';

import Typography from '@components/Typography';

import { colors } from '@utils/theme';

const ThemeColorGuide = () => {
  return (
    <Fragment>
      <Typography component="h3" fontWeight="700" variant="b16">
        General
      </Typography>
      <ul className="space-y-5">
        {Object.keys(colors).map((color) => (
          <li key={color} className="w-full">
            <ul className="flex w-full items-center gap-x-5 rounded">
              {Object.keys(colors[color]).map((key) => (
                <li key={key} className="w-full">
                  <div className="h-14 w-full" style={{ backgroundColor: colors[color][Number(key)] }} />
                  <Typography fontFamily="nanumpenscript" variant="b18">
                    <small className="font-inherit">{key}</small>
                    <br />
                    {colors[color][Number(key)]}
                  </Typography>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ThemeColorGuide;
