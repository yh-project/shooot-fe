import { ReactNode } from 'react';
import { ColorButton } from '../../styles/globalTheme/themeColor';
import { SizeButton } from '../../styles/globalTheme/themeSize';
import { TypographyWeights } from '../Typography/Typography.types';

export type IconButtonVariants = 'contained' | 'outlined';
export type IconButtonSizes = keyof SizeButton;
export type IconButtonColors = keyof ColorButton['contained'];

export interface IconButtonProps extends React.ComponentProps<'button'> {
  children: ReactNode;
  variant?: IconButtonVariants;
  size?: IconButtonSizes;
  color?: IconButtonColors;
  fullWidth?: boolean;
  rounded?: boolean;
  disabled?: boolean;
}
