import colorPalette from '../colorPalette';
import { GlobalTheme } from '../globalTheme/globalTheme';

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
  size: {
    typography: {
      '3xs': 0.5,
      '2xs': 0.625,
      xs: 0.75,
      sm: 0.875,
      md: 1,
      lg: 1.125,
      xl: 1.25,
      '2xl': 1.375,
      '3xl': 1.5,
    },
  },
};