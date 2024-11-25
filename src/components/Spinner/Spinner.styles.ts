import { Theme, css, keyframes } from '@emotion/react';
import { TextFieldColors, TextFieldSizes } from '../TextField/TextField.types';

export const base = (
  theme: Theme,
  size: TextFieldSizes,
  color: TextFieldColors
) => {
  const spin = keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    `;

  return css`
    width: ${theme.size.spinner[size]}rem;
    height: ${theme.size.spinner[size]}rem;
    border-radius: 999rem;
    border-top-color: 0.25rem solid ${theme.color.spinner[color]};
    animation: ${spin} 0.7s linear infinite;
  `;
};
