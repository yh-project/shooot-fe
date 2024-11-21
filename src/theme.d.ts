import '@emotion/react';
import { GlobalTheme } from './styles/globalThemeTypes';

declare module '@emotion/react' {
  export interface Theme extends GlobalTheme {}
}
