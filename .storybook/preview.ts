import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/styles/index.css';

import type { Preview } from '@storybook/react'; // tailwind css file

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        includeNames: true,
        order: ['Introduction', 'Pages'],
      },
    },
  },
};

export default preview;
