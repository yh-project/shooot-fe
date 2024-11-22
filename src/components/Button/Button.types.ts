import { ColorButton } from '../../styles/globalTheme/themeColor';
import { SizeButton } from '../../styles/globalTheme/themeSize';
import { TypographyWeights } from '../Typography/Typography.types';

export type ButtonVariants = 'contained' | 'outlined';
export type ButtonSizes = keyof SizeButton;
export type ButtonColors = keyof ColorButton['contained'];

export interface ButtonProps extends React.ComponentProps<'button'> {
  children: string;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  color?: ButtonColors;
  fullWidth?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  fontSize?: number;
  fontWeight?: TypographyWeights;
}
