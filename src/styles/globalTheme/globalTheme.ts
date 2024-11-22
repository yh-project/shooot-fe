import { ThemeColor } from './themeColor';
import { ThemePalette } from './themePalette';
import { ThemeSize } from './themeSize';

export interface GlobalTheme {
  palette: ThemePalette;
  color: ThemeColor;
  size: ThemeSize;
}
