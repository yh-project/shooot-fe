export interface ColorToggle {
  primary: string;
  secondary: string;
  get: string;
  post: string;
  put: string;
  patch: string;
  delete: string;
  grey: string;
}

export interface ColorTypography {
  primary: string;
  secondary: string;
  get: string;
  post: string;
  put: string;
  patch: string;
  delete: string;
  grey: string;
  danger: string;
  warning: string;
  light: string;
  dark: string;
}

export interface ColorIcon {
  primary: string;
  secondary: string;
  get: string;
  post: string;
  put: string;
  patch: string;
  delete: string;
  grey: string;
  danger: string;
  warning: string;
  light: string;
  dark: string;
}

export interface ColorButtonItems {
  main: string;
  hover: string;
  active: string;
  disabled: string;
}
export interface ColorButton {
  contained: {
    primary: ColorButtonItems;
    secondary: ColorButtonItems;
    get: ColorButtonItems;
    post: ColorButtonItems;
    put: ColorButtonItems;
    patch: ColorButtonItems;
    delete: ColorButtonItems;
    grey: ColorButtonItems;
  };
  outlined: {
    primary: ColorButtonItems;
    secondary: ColorButtonItems;
    get: ColorButtonItems;
    post: ColorButtonItems;
    put: ColorButtonItems;
    patch: ColorButtonItems;
    delete: ColorButtonItems;
    grey: ColorButtonItems;
  };
}

export interface ThemeColor {
  toggle: ColorToggle;
  typography: ColorTypography;
  icon: ColorIcon;
  button: ColorButton;
}
