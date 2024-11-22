import { ReactNode } from 'react';
import { SizeIcon } from '../../styles/globalTheme/themeSize';
import { ColorIcon } from '../../styles/globalTheme/themeColor';

export type IconSizes = keyof SizeIcon | number;
export type IconColors = keyof ColorIcon;

export interface IconProps extends React.ComponentProps<'div'> {
  children: ReactNode;
  size?: IconSizes;
  color?: IconColors;
}
