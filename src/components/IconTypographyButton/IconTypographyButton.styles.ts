import { SerializedStyles, Theme, css } from '@emotion/react';
import {
  IconTypographyButtonColors,
  IconTypographyButtonDirections,
  IconTypographyButtonSizes,
  IconTypographyButtonVariants,
  IconTypographyButtonWays,
} from './IconTypographyButton.types';

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
  size: IconTypographyButtonSizes,
  fullWidth: boolean,
  rounded: boolean,
  direction: IconTypographyButtonDirections,
  way: IconTypographyButtonWays
) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${rounded ? '999rem' : '0.25rem'};

  ${direction === 'row'
    ? way === 'forward'
      ? css`
          flex-direction: row;
          column-gap: 0.25rem;
          height: ${theme.size.button[size]}rem;
          padding: 0
            ${size === 'small'
              ? '0.75rem'
              : size === 'medium'
                ? '0.875rem'
                : '1rem'};
        `
      : css`
          flex-direction: row-reverse;
          column-gap: 0.25rem;
          height: ${theme.size.button[size]}rem;
          padding: 0
            ${size === 'small'
              ? '0.75rem'
              : size === 'medium'
                ? '0.875rem'
                : '1rem'};
        `
    : way === 'forward'
      ? css`
          flex-direction: column;
          row-gap: 0.125rem;
          padding: 0.5rem
            ${size === 'small'
              ? '0.75rem'
              : size === 'medium'
                ? '0.875rem'
                : '1rem'};
        `
      : css`
          flex-direction: column-reverse;
          row-gap: 0.125rem;
          padding: 0.5rem
            ${size === 'small'
              ? '0.75rem'
              : size === 'medium'
                ? '0.875rem'
                : '1rem'};
        `}

  ${fullWidth &&
  css`
    width: 100%;
  `}
`;

export const variants: Record<
  IconTypographyButtonVariants,
  (theme: Theme, color: IconTypographyButtonColors) => SerializedStyles
> = {
  contained: (theme: Theme, color: IconTypographyButtonColors) => css`
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
  outlined: (theme: Theme, color: IconTypographyButtonColors) => css`
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
