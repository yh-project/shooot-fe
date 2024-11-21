import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { useCurTheme } from './hooks/useCurTheme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { Temp } from './pages/Temp';

const App = () => {
  const { curTheme } = useCurTheme();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={curTheme}>
        <Routes>
          <Route path="/" element={<Temp />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
