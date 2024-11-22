import { ColorToggle } from '../../styles/globalTheme/themeColor';

export type ToggleSizes = 'small' | 'medium' | 'large';
export type ToggleColors = keyof ColorToggle;

export interface ToggleProps extends React.ComponentProps<'div'> {
  size?: ToggleSizes;
  color?: ToggleColors;
  handler?: (curState: boolean) => void;
}
