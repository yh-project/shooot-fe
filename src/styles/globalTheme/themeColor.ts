export type ColorFull =
  | 'primary'
  | 'secondary'
  | 'get'
  | 'post'
  | 'put'
  | 'patch'
  | 'delete'
  | 'grey'
  | 'danger'
  | 'warning'
  | 'light'
  | 'dark';

export type ColorToggle = {
  [color in Exclude<
    ColorFull,
    'danger' | 'warning' | 'light' | 'dark'
  >]: string;
};
export type ColorTypography = {
  [color in ColorFull]: string;
};
export type ColorIcon = {
  [color in ColorFull]: string;
};
export interface ColorButtonItems {
  main: string;
  hover: string;
  active: string;
  disabled: string;
}
export interface ColorButton {
  contained: {
    [color in Exclude<
      ColorFull,
      'danger' | 'warning' | 'light' | 'dark'
    >]: ColorButtonItems;
  };
  outlined: {
    [color in Exclude<
      ColorFull,
      'danger' | 'warning' | 'light' | 'dark'
    >]: ColorButtonItems;
  };
}

export interface ThemeColor {
  toggle: ColorToggle;
  typography: ColorTypography;
  icon: ColorIcon;
  button: ColorButton;
}
