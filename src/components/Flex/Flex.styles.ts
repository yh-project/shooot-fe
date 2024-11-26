import { css } from '@emotion/react';
import { CSSProperties } from 'react';

export const base = (
  flexDirections?: CSSProperties['flexDirection'],
  justifyContents?: CSSProperties['justifyContent'],
  alignItems?: CSSProperties['alignItems']
) => css`
  display: flex;
  flex-direction: ${flexDirections ?? 'row'};
  justify-content: ${justifyContents ?? 'normal'};
  align-items: ${alignItems ?? 'normal'};
`;
