import '@emotion/react';
import { GlobalTheme } from './styles/globalTheme/globalTheme';

declare module '@emotion/react' {
  export interface Theme extends GlobalTheme {}
}
