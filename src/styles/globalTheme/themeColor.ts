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

export interface ThemeColor {
  toggle: ColorToggle;
  typography: ColorTypography;
}
