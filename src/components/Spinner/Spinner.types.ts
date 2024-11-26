import { SizeSpinner } from '../../styles/globalTheme/themeSize';
import { ColorSpinner } from '../../styles/globalTheme/themeColor';

export type SpinnerSizes = keyof SizeSpinner;
export type SpinnerColors = keyof ColorSpinner;

export interface SpinnerProps {
  size?: SpinnerSizes;
  color?: SpinnerColors;
}
