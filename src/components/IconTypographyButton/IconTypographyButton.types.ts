import { ReactNode } from 'react';
import { ColorButton } from '../../styles/globalTheme/themeColor';
import { SizeButton } from '../../styles/globalTheme/themeSize';

export type IconTypographyButtonVariants = 'contained' | 'outlined';
export type IconTypographyButtonSizes = keyof SizeButton;
export type IconTypographyButtonColors = keyof ColorButton['contained'];
export type IconTypographyButtonDirections = 'row' | 'col';
export type IconTypographyButtonWays = 'forward' | 'reverse';

export interface IconTypographyButtonProps
  extends React.ComponentProps<'button'> {
  icon: ReactNode;
  typography: string;
  variant?: IconTypographyButtonVariants;
  size?: IconTypographyButtonSizes;
  color?: IconTypographyButtonColors;
  fullWidth?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  direction?: IconTypographyButtonDirections;
  way: IconTypographyButtonWays;
}
