import { SerializedStyles, Theme, css } from '@emotion/react';
import { ButtonColors, ButtonSizes, ButtonVariants } from './Button.types';
import {
  TypographyWeightKeywords,
  TypographyWeights,
} from '../Typography/Typography.types';

const hexToRGB = (hex: string, alpha: number) => {
  const sanitizedHex = hex.replace('#', '');
  const bigint = parseInt(sanitizedHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint && 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const base = (
  theme: Theme,
  size: ButtonSizes,
  fullWidth: boolean,
  rounded: boolean,
  fontSize?: number,
  fontWeight?: TypographyWeights
) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${theme.size.button[size]}rem;
  padding: 0
    ${size === 'small' ? '0.75rem' : size === 'medium' ? '0.875rem' : '1rem'};
  border-radius: ${rounded ? '999rem' : '0.25rem'};
  font-size: ${fontSize
    ? fontSize
    : size === 'small'
      ? '0.75rem'
      : size === 'medium'
        ? '0.875'
        : '1rem'};
  font-weight: ${fontWeight
    ? typeof fontWeight === 'number'
      ? fontWeight
      : TypographyWeightKeywords[fontWeight]
    : 500};

  ${fullWidth &&
  css`
    width: 100%;
  `}
`;

export const variants: Record<
  ButtonVariants,
  (theme: Theme, color: ButtonColors) => SerializedStyles
> = {
  contained: (theme: Theme, color: ButtonColors) => css`
    color: white;
    background-color: ${theme.color.button.contained[color].main};
    border: none;

    :enabled {
      :hover {
        background-color: ${theme.color.button.contained[color].hover};
      }
      :active {
        background-color: ${theme.color.button.contained[color].active};
      }
    }

    :disabled {
      background-color: ${theme.color.button.contained[color].disabled};
    }
  `,
  outlined: (theme: Theme, color: ButtonColors) => css`
    background-color: transparent;
    color: ${theme.color.button.outlined[color].main};
    border: 0.0625rem solid ${theme.color.button.outlined[color].main};

    :enabled {
      :hover {
        background-color: ${hexToRGB(
          theme.color.button.outlined[color].hover,
          0.1
        )};
      }
      :active {
        background-color: ${hexToRGB(
          theme.color.button.outlined[color].hover,
          0.3
        )};
      }
    }

    :disabled {
      color: ${theme.color.button.outlined[color].disabled};
      border-color: ${theme.color.button.outlined[color].disabled};
    }
  `,
};
