import { Theme } from '@emotion/react';
import { lightTheme } from '../styles/themes/lightTheme';
import { useState } from 'react';

export const useCurTheme = () => {
  const [curTheme, setCurTheme] = useState<{ theme: Theme; title: string }>({
    theme: lightTheme,
    title: 'light',
  });
  return { curTheme, setCurTheme };
};
