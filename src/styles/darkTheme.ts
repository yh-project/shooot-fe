import colorPalette from './colorPalette';
import { GlobalTheme } from './globalThemeTypes';

export const darkTheme: GlobalTheme = {
  palette: {
    background: {
      '100': '#3a3a4a',
      '200': '#26262e',
      '300': '#1b1a1f',
    },
  },
  color: {
    toggle: {
      primary: colorPalette.primary['500'],
      secondary: colorPalette.secondary['500'],
      get: colorPalette.get['500'],
      post: colorPalette.post['500'],
      put: colorPalette.put['500'],
      patch: colorPalette.patch['500'],
      delete: colorPalette.delete['500'],
      grey: colorPalette.grey['500'],
    },
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
};
