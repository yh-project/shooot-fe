import { SerializedStyles, Theme, css } from '@emotion/react';
import {
  TextFieldColors,
  TextFieldSizes,
  TextFieldVariants,
} from './TextField.types';

export const container = css`
  display: flex;
  flex-direction: column;
  row-gap: 0.125rem;
  width: 100%;
`;

export const base = (theme: Theme, size: TextFieldSizes) => css`
  width: 100%;
  height: ${theme.size.textfield[size]}rem;
  box-sizing: border-box;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
`;

export const variants: Record<
  TextFieldVariants,
  (theme: Theme, color: TextFieldColors) => SerializedStyles
> = {
  filled: (theme: Theme, color: TextFieldColors) => css`
    border: 0.0625rem solid ${theme.color.textfield.filled[color].main};
    border-radius: 0.25rem;
  `,
  outlined: (theme: Theme, color: TextFieldColors) => css`
    border-bottom: 0.0625rem solid ${theme.color.textfield.outlined[color].main};
  `,
  none: (theme: Theme, color: TextFieldColors) => css`
    border: 0;
  `,
};

export const inputBase = (
  theme: Theme,
  variant: TextFieldVariants,
  color: TextFieldColors
) => css`
  width: 100%;
  height: 100%;
  border: 0;
  outline: none;
  font-family: 'Pretendard';
  color: ${theme.color.textfield[variant][color].font};
  background-color: transparent;
`;
