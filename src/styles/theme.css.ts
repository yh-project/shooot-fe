import { createThemeContract } from '@vanilla-extract/css';

const themeContract = {
  color: {
    typography: {
      primary: null,
      secondary: null,
      get: null,
      post: null,
      put: null,
      patch: null,
      delete: null,
      grey: null,
      danger: null,
      warning: null,
      light: null,
      dark: null,
    },
  },
};

export default createThemeContract(themeContract);
