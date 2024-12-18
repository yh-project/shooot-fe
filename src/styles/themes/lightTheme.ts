import colorPalette from '../colorPalette';
import { GlobalTheme } from '../globalTheme/globalTheme';
import {
  themeColorIcon,
  themeColorSpinner,
  themeColorToggle,
  themeColorTypography,
  themeSizeButton,
  themeSizeIcon,
  themeSizeSpinner,
  themeSizeTextField,
  themeSizeToggle,
  themeSizeTypography,
} from './commonTheme';

export const lightTheme: GlobalTheme = {
  palette: {
    background: {
      '100': '#ffffff',
      '200': '#f6f7f8',
      '300': '#e0e0e0',
    },
  },
  color: {
    toggle: themeColorToggle,
    typography: themeColorTypography,
    icon: themeColorIcon,
    button: {
      contained: {
        primary: {
          main: colorPalette.primary['500'],
          hover: colorPalette.primary['400'],
          active: colorPalette.primary['500'],
          disabled: colorPalette.grey['300'],
        },
        secondary: {
          main: colorPalette.secondary['500'],
          hover: colorPalette.secondary['400'],
          active: colorPalette.secondary['500'],
          disabled: colorPalette.grey['300'],
        },
        get: {
          main: colorPalette.get['500'],
          hover: colorPalette.get['400'],
          active: colorPalette.get['500'],
          disabled: colorPalette.grey['300'],
        },
        post: {
          main: colorPalette.post['500'],
          hover: colorPalette.post['400'],
          active: colorPalette.post['500'],
          disabled: colorPalette.grey['300'],
        },
        put: {
          main: colorPalette.put['500'],
          hover: colorPalette.put['400'],
          active: colorPalette.put['500'],
          disabled: colorPalette.grey['300'],
        },
        patch: {
          main: colorPalette.patch['500'],
          hover: colorPalette.patch['400'],
          active: colorPalette.patch['500'],
          disabled: colorPalette.grey['300'],
        },
        delete: {
          main: colorPalette.delete['500'],
          hover: colorPalette.delete['400'],
          active: colorPalette.delete['500'],
          disabled: colorPalette.grey['300'],
        },
        grey: {
          main: colorPalette.grey['500'],
          hover: colorPalette.grey['400'],
          active: colorPalette.grey['500'],
          disabled: colorPalette.grey['300'],
        },
      },
      outlined: {
        primary: {
          main: colorPalette.primary['500'],
          hover: colorPalette.primary['50'],
          active: colorPalette.primary['50'],
          disabled: colorPalette.grey['300'],
        },
        secondary: {
          main: colorPalette.secondary['500'],
          hover: colorPalette.secondary['50'],
          active: colorPalette.secondary['50'],
          disabled: colorPalette.grey['300'],
        },
        get: {
          main: colorPalette.get['500'],
          hover: colorPalette.get['100'],
          active: colorPalette.get['100'],
          disabled: colorPalette.grey['300'],
        },
        post: {
          main: colorPalette.post['500'],
          hover: colorPalette.post['100'],
          active: colorPalette.post['100'],
          disabled: colorPalette.grey['300'],
        },
        put: {
          main: colorPalette.put['500'],
          hover: colorPalette.put['50'],
          active: colorPalette.put['50'],
          disabled: colorPalette.grey['300'],
        },
        patch: {
          main: colorPalette.patch['500'],
          hover: colorPalette.patch['50'],
          active: colorPalette.patch['50'],
          disabled: colorPalette.grey['300'],
        },
        delete: {
          main: colorPalette.delete['500'],
          hover: colorPalette.delete['50'],
          active: colorPalette.delete['50'],
          disabled: colorPalette.grey['300'],
        },
        grey: {
          main: colorPalette.grey['500'],
          hover: colorPalette.grey['400'],
          active: colorPalette.grey['500'],
          disabled: colorPalette.grey['300'],
        },
      },
    },
    textfield: {
      filled: {
        primary: {
          main: colorPalette.primary['500'],
          active: colorPalette.primary['500'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
        secondary: {
          main: colorPalette.secondary['500'],
          active: colorPalette.secondary['500'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
        get: {
          main: colorPalette.get['500'],
          active: colorPalette.get['500'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
        post: {
          main: colorPalette.post['500'],
          active: colorPalette.post['500'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
        put: {
          main: colorPalette.put['500'],
          active: colorPalette.put['500'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
        patch: {
          main: colorPalette.patch['500'],
          active: colorPalette.patch['500'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
        delete: {
          main: colorPalette.delete['500'],
          active: colorPalette.delete['500'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
        grey: {
          main: colorPalette.grey['500'],
          active: colorPalette.grey['500'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
      },
      outlined: {
        primary: {
          main: colorPalette.primary['500'],
          active: colorPalette.primary['50'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
        secondary: {
          main: colorPalette.secondary['500'],
          active: colorPalette.secondary['50'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
        get: {
          main: colorPalette.get['500'],
          active: colorPalette.get['100'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
        post: {
          main: colorPalette.post['500'],
          active: colorPalette.post['100'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
        put: {
          main: colorPalette.put['500'],
          active: colorPalette.put['50'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
        patch: {
          main: colorPalette.patch['500'],
          active: colorPalette.patch['50'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
        delete: {
          main: colorPalette.delete['500'],
          active: colorPalette.delete['50'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
        grey: {
          main: colorPalette.grey['500'],
          active: colorPalette.grey['500'],
          disabled: colorPalette.grey['300'],
          font: colorPalette.original.dark,
        },
      },
      none: {
        primary: {
          main: colorPalette.primary['500'],
          font: colorPalette.original.dark,
        },
        secondary: {
          main: colorPalette.secondary['500'],
          font: colorPalette.original.dark,
        },
        get: {
          main: colorPalette.get['500'],
          font: colorPalette.original.dark,
        },
        post: {
          main: colorPalette.post['500'],
          font: colorPalette.original.dark,
        },
        put: {
          main: colorPalette.put['500'],
          font: colorPalette.original.dark,
        },
        patch: {
          main: colorPalette.patch['500'],
          font: colorPalette.original.dark,
        },
        delete: {
          main: colorPalette.delete['500'],
          font: colorPalette.original.dark,
        },
        grey: {
          main: colorPalette.grey['500'],
          font: colorPalette.original.dark,
        },
      },
    },
    spinner: themeColorSpinner,
  },
  size: {
    toggle: themeSizeToggle,
    typography: themeSizeTypography,
    icon: themeSizeIcon,
    button: themeSizeButton,
    textfield: themeSizeTextField,
    spinner: themeSizeSpinner,
  },
};
