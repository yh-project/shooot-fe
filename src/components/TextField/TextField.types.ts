import { ColorTextField } from '../../styles/globalTheme/themeColor';
import { SizeTextField } from '../../styles/globalTheme/themeSize';

export type TextFieldVariants = 'filled' | 'outlined' | 'none';
export type TextFieldSizes = keyof SizeTextField;
export type TextFieldColors = keyof ColorTextField['filled'];

export interface TextFieldProps
  extends Omit<React.ComponentProps<'input'>, 'size'> {
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  variant?: TextFieldVariants;
  size?: TextFieldSizes;
  color?: TextFieldColors;
  label?: string;
  trailing?: boolean;
  validator?: string;
}
