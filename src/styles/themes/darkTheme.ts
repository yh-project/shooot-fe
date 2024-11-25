import colorPalette from '../colorPalette';
import { GlobalTheme } from '../globalTheme/globalTheme';
import {
  themeColorToggle,
  themeColorTypography,
  themeColorIcon,
  themeSizeToggle,
  themeSizeTypography,
  themeSizeIcon,
  themeSizeButton,
  themeSizeTextField,
} from './commonTheme';

export const darkTheme: GlobalTheme = {
  palette: {
    background: {
      '100': '#3a3a4a',
      '200': '#26262e',
      '300': '#1b1a1f',
    },
  },
  color: {
    toggle: themeColorToggle,
    typography: themeColorTypography,
    icon: themeColorIcon,
    button: {
      contained: {
        primary: {
          main: colorPalette.primary['400'],
          hover: colorPalette.primary['500'],
          active: colorPalette.primary['400'],
          disabled: colorPalette.grey['700'],
        },
        secondary: {
          main: colorPalette.secondary['400'],
          hover: colorPalette.secondary['500'],
          active: colorPalette.secondary['400'],
          disabled: colorPalette.grey['700'],
        },
        get: {
          main: colorPalette.get['400'],
          hover: colorPalette.get['500'],
          active: colorPalette.get['400'],
          disabled: colorPalette.grey['700'],
        },
        post: {
          main: colorPalette.post['400'],
          hover: colorPalette.post['500'],
          active: colorPalette.post['400'],
          disabled: colorPalette.grey['700'],
        },
        put: {
          main: colorPalette.put['400'],
          hover: colorPalette.put['500'],
          active: colorPalette.put['400'],
          disabled: colorPalette.grey['700'],
        },
        patch: {
          main: colorPalette.patch['400'],
          hover: colorPalette.patch['500'],
          active: colorPalette.patch['400'],
          disabled: colorPalette.grey['700'],
        },
        delete: {
          main: colorPalette.delete['400'],
          hover: colorPalette.delete['500'],
          active: colorPalette.delete['400'],
          disabled: colorPalette.grey['700'],
        },
        grey: {
          main: colorPalette.grey['500'],
          hover: colorPalette.grey['400'],
          active: colorPalette.grey['500'],
          disabled: colorPalette.grey['700'],
        },
      },
      outlined: {
        primary: {
          main: colorPalette.primary['100'],
          hover: colorPalette.primary['50'],
          active: colorPalette.primary['50'],
          disabled: colorPalette.grey['600'],
        },
        secondary: {
          main: colorPalette.secondary['100'],
          hover: colorPalette.secondary['50'],
          active: colorPalette.secondary['50'],
          disabled: colorPalette.grey['600'],
        },
        get: {
          main: colorPalette.get['300'],
          hover: colorPalette.get['50'],
          active: colorPalette.get['50'],
          disabled: colorPalette.grey['600'],
        },
        post: {
          main: colorPalette.post['400'],
          hover: colorPalette.post['50'],
          active: colorPalette.post['50'],
          disabled: colorPalette.grey['600'],
        },
        put: {
          main: colorPalette.put['400'],
          hover: colorPalette.put['50'],
          active: colorPalette.put['50'],
          disabled: colorPalette.grey['600'],
        },
        patch: {
          main: colorPalette.patch['100'],
          hover: colorPalette.patch['50'],
          active: colorPalette.patch['50'],
          disabled: colorPalette.grey['600'],
        },
        delete: {
          main: colorPalette.delete['400'],
          hover: colorPalette.delete['50'],
          active: colorPalette.delete['50'],
          disabled: colorPalette.grey['600'],
        },
        grey: {
          main: colorPalette.grey['400'],
          hover: colorPalette.grey['50'],
          active: colorPalette.grey['50'],
          disabled: colorPalette.grey['600'],
        },
      },
    },
    textfield: {
      filled: {
        primary: {
          main: colorPalette.primary['400'],
          active: colorPalette.primary['400'],
          disabled: colorPalette.grey['700'],
        },
        secondary: {
          main: colorPalette.secondary['400'],
          active: colorPalette.secondary['400'],
          disabled: colorPalette.grey['700'],
        },
        get: {
          main: colorPalette.get['400'],
          active: colorPalette.get['400'],
          disabled: colorPalette.grey['700'],
        },
        post: {
          main: colorPalette.post['400'],
          active: colorPalette.post['400'],
          disabled: colorPalette.grey['700'],
        },
        put: {
          main: colorPalette.put['400'],
          active: colorPalette.put['400'],
          disabled: colorPalette.grey['700'],
        },
        patch: {
          main: colorPalette.patch['400'],
          active: colorPalette.patch['400'],
          disabled: colorPalette.grey['700'],
        },
        delete: {
          main: colorPalette.delete['400'],
          active: colorPalette.delete['400'],
          disabled: colorPalette.grey['700'],
        },
        grey: {
          main: colorPalette.grey['500'],
          active: colorPalette.grey['500'],
          disabled: colorPalette.grey['700'],
        },
      },
      outlined: {
        primary: {
          main: colorPalette.primary['100'],
          active: colorPalette.primary['50'],
          disabled: colorPalette.grey['600'],
        },
        secondary: {
          main: colorPalette.secondary['100'],
          active: colorPalette.secondary['50'],
          disabled: colorPalette.grey['600'],
        },
        get: {
          main: colorPalette.get['300'],
          active: colorPalette.get['50'],
          disabled: colorPalette.grey['600'],
        },
        post: {
          main: colorPalette.post['400'],
          active: colorPalette.post['50'],
          disabled: colorPalette.grey['600'],
        },
        put: {
          main: colorPalette.put['400'],
          active: colorPalette.put['50'],
          disabled: colorPalette.grey['600'],
        },
        patch: {
          main: colorPalette.patch['100'],
          active: colorPalette.patch['50'],
          disabled: colorPalette.grey['600'],
        },
        delete: {
          main: colorPalette.delete['400'],
          active: colorPalette.delete['50'],
          disabled: colorPalette.grey['600'],
        },
        grey: {
          main: colorPalette.grey['400'],
          active: colorPalette.grey['50'],
          disabled: colorPalette.grey['600'],
        },
      },
      none: {
        primary: { main: colorPalette.primary['400'] },
        secondary: { main: colorPalette.secondary['400'] },
        get: { main: colorPalette.get['400'] },
        post: { main: colorPalette.post['400'] },
        put: { main: colorPalette.put['400'] },
        patch: { main: colorPalette.patch['400'] },
        delete: { main: colorPalette.delete['400'] },
        grey: { main: colorPalette.grey['400'] },
      },
    },
  },
  size: {
    toggle: themeSizeToggle,
    typography: themeSizeTypography,
    icon: themeSizeIcon,
    button: themeSizeButton,
    textfield: themeSizeTextField,
  },
};
