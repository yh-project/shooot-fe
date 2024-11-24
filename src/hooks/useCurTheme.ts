import { Theme } from '@emotion/react';
import { lightTheme } from '../styles/themes/lightTheme';
import { useState } from 'react';

export const useCurTheme = () => {
  const [curTheme, setCurTheme] = useState<Theme>(lightTheme);
  return { curTheme, setCurTheme };
};
