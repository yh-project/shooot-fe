import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import './custom.css';
import { lightTheme } from '../src/styles/lightTheme';
import { darkTheme } from '../src/styles/darkTheme';
import { ThemeProvider } from '@emotion/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
