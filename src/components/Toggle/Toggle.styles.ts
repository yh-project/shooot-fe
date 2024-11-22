import { Theme, css } from '@emotion/react';
import { ToggleColors, ToggleSizes } from './Toggle.types';

export const containerBase = (theme: Theme, size: ToggleSizes) => css`
  position: relative;
  width: ${2 * (theme.size.toggle[size] + 0.25)}rem;
  height: ${theme.size.toggle[size] + 0.25}rem;
  border-radius: 999rem;
  background-color: ${theme.palette.background['100']};
  transition: all 0.25s ease-in-out;
  box-shadow:
    0 0 0.375rem rgba(0, 0, 0, 0.1),
    0 0 0.1875rem rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

export const dotBase = (
  theme: Theme,
  size: ToggleSizes,
  color: ToggleColors,
  state: boolean
) => css`
  position: absolute;
  width: ${theme.size.toggle[size]}rem;
  height: ${theme.size.toggle[size]}rem;
  top: 0.125rem;
  border-radius: 999rem;
  background-color: ${theme.color.toggle[color]};
  transition: left 0.25s ease-in-out;

  ${state
    ? css`
        left: ${`calc(100% - ${theme.size.toggle[size] + 0.125}rem)`};
      `
    : css`
        left: 0.125rem;
      `}
`;
