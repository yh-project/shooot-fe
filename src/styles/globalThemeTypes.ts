// palette
export interface PaletteBackground {
  '100': string;
  '200': string;
  '300': string;
}

export interface ThemePalette {
  background: PaletteBackground;
}

// color
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

// theme
export interface GlobalTheme {
  palette: ThemePalette;
  color: ThemeColor;
}
