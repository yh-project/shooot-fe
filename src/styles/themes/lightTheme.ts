import colorPalette from '../colorPalette';
import { GlobalTheme } from '../globalTheme/globalTheme';
import {
  themeColorIcon,
  themeColorToggle,
  themeColorTypography,
  themeSizeButton,
  themeSizeIcon,
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
        },
        secondary: {
          main: colorPalette.secondary['500'],
          active: colorPalette.secondary['500'],
          disabled: colorPalette.grey['300'],
        },
        get: {
          main: colorPalette.get['500'],
          active: colorPalette.get['500'],
          disabled: colorPalette.grey['300'],
        },
        post: {
          main: colorPalette.post['500'],
          active: colorPalette.post['500'],
          disabled: colorPalette.grey['300'],
        },
        put: {
          main: colorPalette.put['500'],
          active: colorPalette.put['500'],
          disabled: colorPalette.grey['300'],
        },
        patch: {
          main: colorPalette.patch['500'],
          active: colorPalette.patch['500'],
          disabled: colorPalette.grey['300'],
        },
        delete: {
          main: colorPalette.delete['500'],
          active: colorPalette.delete['500'],
          disabled: colorPalette.grey['300'],
        },
        grey: {
          main: colorPalette.grey['500'],
          active: colorPalette.grey['500'],
          disabled: colorPalette.grey['300'],
        },
      },
      outlined: {
        primary: {
          main: colorPalette.primary['500'],
          active: colorPalette.primary['50'],
          disabled: colorPalette.grey['300'],
        },
        secondary: {
          main: colorPalette.secondary['500'],
          active: colorPalette.secondary['50'],
          disabled: colorPalette.grey['300'],
        },
        get: {
          main: colorPalette.get['500'],
          active: colorPalette.get['100'],
          disabled: colorPalette.grey['300'],
        },
        post: {
          main: colorPalette.post['500'],
          active: colorPalette.post['100'],
          disabled: colorPalette.grey['300'],
        },
        put: {
          main: colorPalette.put['500'],
          active: colorPalette.put['50'],
          disabled: colorPalette.grey['300'],
        },
        patch: {
          main: colorPalette.patch['500'],
          active: colorPalette.patch['50'],
          disabled: colorPalette.grey['300'],
        },
        delete: {
          main: colorPalette.delete['500'],
          active: colorPalette.delete['50'],
          disabled: colorPalette.grey['300'],
        },
        grey: {
          main: colorPalette.grey['500'],
          active: colorPalette.grey['500'],
          disabled: colorPalette.grey['300'],
        },
      },
      none: {
        primary: { main: colorPalette.primary['500'] },
        secondary: { main: colorPalette.secondary['500'] },
        get: { main: colorPalette.get['500'] },
        post: { main: colorPalette.post['500'] },
        put: { main: colorPalette.put['500'] },
        patch: { main: colorPalette.patch['500'] },
        delete: { main: colorPalette.delete['500'] },
        grey: { main: colorPalette.grey['500'] },
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
