import { Theme, css, keyframes } from '@emotion/react';
import { SpinnerColors, SpinnerSizes } from './Spinner.types';

export const base = (
  theme: Theme,
  size: SpinnerSizes,
  color: SpinnerColors
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
    border: 0.5rem solid #f1f3f5;
    border-top: 0.5rem solid ${theme.color.spinner[color]};
    border-radius: 999rem;
    animation: ${spin} 0.7s linear infinite;
  `;
};
