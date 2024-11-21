import React from 'react';
import { Global, css } from '@emotion/react';
import PretendardVariable from '../assets/fonts/PretendardVariable.woff2';

export const GlobalStyle = () => {
  return (
    <Global
      styles={[
        css`
          @font-face {
            font-family: 'Pretendard';
            src: url(${PretendardVariable});
          }

          * {
            font-family: 'Pretendard';
            box-sizing: border-box;
          }

          body,
          #root {
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
          }
        `,
      ]}
    />
  );
};
