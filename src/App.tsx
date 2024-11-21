import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { useCurTheme } from './hooks/useCurTheme';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  const { curTheme } = useCurTheme();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={curTheme}>hello</ThemeProvider>
    </>
  );
};

export default App;
