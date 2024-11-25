export type SizeFull =
  | '3xs'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl';
export type SizeContent = 'small' | 'medium' | 'large';

export type SizeToggle = {
  [size in SizeContent]: number;
};
export type SizeTypography = {
  [size in SizeFull]: number;
};
export type SizeIcon = {
  [size in SizeFull]: number;
};
export type SizeButton = {
  [size in SizeContent]: number;
};
export type SizeTextField = {
  [size in SizeContent]: number;
};

export interface ThemeSize {
  toggle: SizeToggle;
  typography: SizeTypography;
  icon: SizeIcon;
  button: SizeButton;
  textfield: SizeTextField;
}
