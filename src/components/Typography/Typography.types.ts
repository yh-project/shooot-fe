import { ReactNode } from 'react';
import { ColorTypography } from '../../styles/globalTheme/themeColor';
import { SizeTypography } from '../../styles/globalTheme/themeSize';

export type TypographySizes = keyof SizeTypography;

export const TypographyWeightKeywords: Record<string, number> = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};
export type TypographyWeightNumbers =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;
export type TypographyWeights =
  | keyof typeof TypographyWeightKeywords
  | TypographyWeightNumbers;

export type TypographyColors = keyof ColorTypography;

export interface TypographyProps extends React.ComponentProps<'div'> {
  children: ReactNode;
  size?: TypographySizes | number;
  weight?: TypographyWeights;
  color?: TypographyColors;
}
