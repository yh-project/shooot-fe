import { Theme, css } from '@emotion/react';
import {
  TypographyColors,
  TypographySizes,
  TypographyWeightKeywords,
  TypographyWeights,
} from './Typography.types';

export const base = (
  theme: Theme,
  size: TypographySizes | number,
  weight: TypographyWeights,
  color: TypographyColors
) => css`
  color: ${theme.color.typography[color]};
  font-size: ${typeof size === 'number'
    ? size
    : theme.size.typography[size]}rem;
  font-weight: ${typeof weight === 'number'
    ? weight
    : TypographyWeightKeywords[weight]};
`;
