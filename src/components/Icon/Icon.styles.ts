import { Theme, css } from '@emotion/react';
import { IconColors, IconSizes } from './Icon.types';

export const base = (theme: Theme, size: IconSizes, color: IconColors) => css`
  width: ${typeof size === 'number' ? size : theme.size.icon[size]}rem;
  height: ${typeof size === 'number' ? size : theme.size.icon[size]}rem;
  color: ${theme.color.icon[color]};
`;
