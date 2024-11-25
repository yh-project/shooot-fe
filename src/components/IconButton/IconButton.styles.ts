import { SerializedStyles, Theme, css } from '@emotion/react';
import {
  IconButtonColors,
  IconButtonSizes,
  IconButtonVariants,
} from './IconButton.types';

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
  size: IconButtonSizes,
  fullWidth: boolean,
  rounded: boolean
) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${theme.size.button[size]}rem;
  height: ${theme.size.button[size]}rem;
  border-radius: ${rounded ? '999rem' : '0.25rem'};

  ${fullWidth &&
  css`
    width: 100%;
  `}
`;

export const variants: Record<
  IconButtonVariants,
  (theme: Theme, color: IconButtonColors) => SerializedStyles
> = {
  contained: (theme: Theme, color: IconButtonColors) => css`
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
  outlined: (theme: Theme, color: IconButtonColors) => css`
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
