import { Theme, css } from '@emotion/react';

export const errBase = (theme: Theme, width: number, height: number) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 0.25rem;
  width: ${width}rem;
  height: ${height}rem;
  background-color: ${theme.palette.background['100']};
  border-radius: 0.25rem;
`;
