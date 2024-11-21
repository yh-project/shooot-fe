import { createTheme } from '@vanilla-extract/css';
import themeContract from '@styles/theme.css';
import colorPalette from '@styles/colorPalette';

export default createTheme(themeContract, {
  color: {
    typography: {
      primary: colorPalette.primary['500'],
      secondary: colorPalette.secondary['500'],
      get: colorPalette.get['500'],
      post: colorPalette.post['500'],
      put: colorPalette.put['500'],
      patch: colorPalette.patch['500'],
      delete: colorPalette.delete['500'],
      grey: colorPalette.grey['500'],
      danger: colorPalette.original.red,
      warning: colorPalette.original.yellow,
      light: colorPalette.original.light,
      dark: colorPalette.original.dark,
    },
  },
});
