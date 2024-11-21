import { SerializedStyles, Theme, css } from '@emotion/react';
import { ToggleColors, ToggleSizes } from './Toggle.types';

const widthInfo: Record<ToggleSizes, number> = {
  small: 1,
  medium: 1.25,
  large: 1.5,
};

export const containerBase = (theme: Theme) => css`
  position: relative;
  border-radius: 999rem;
  background-color: ${theme.palette.background['100']};
  transition: all 0.25s ease-in-out;
  box-shadow:
    0 0 0.375rem rgba(0, 0, 0, 0.1),
    0 0 0.1875rem rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

export const containerSizeVariants: Record<ToggleSizes, SerializedStyles> = {
  small: css`
    width: 2.5rem;
    height: 1.25rem;
  `,
  medium: css`
    width: 3rem;
    height: 1.5rem;
  `,
  large: css`
    width: 3.5rem;
    height: 1.75rem;
  `,
};

export const dotBase = (
  theme: Theme,
  size: ToggleSizes,
  color: ToggleColors,
  state: boolean
) => css`
  position: absolute;
  top: 0.125rem;
  border-radius: 999rem;
  background-color: ${theme.color.toggle[color]};
  transition: left 0.25s ease-in-out;

  ${state
    ? css`
        left: calc(100% - ${widthInfo[size] + 0.125}rem);
      `
    : css`
        left: 0.125rem;
      `}
`;

export const dotSizeVariants: Record<ToggleSizes, SerializedStyles> = {
  small: css`
    width: 1rem;
    height: 1rem;
  `,
  medium: css`
    width: 1.25rem;
    height: 1.25rem;
  `,
  large: css`
    width: 1.5rem;
    height: 1.5rem;
  `,
};
