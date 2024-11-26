import { CSSProperties, ReactNode } from 'react';

export interface FlexProps extends React.ComponentProps<'div'> {
  children?: ReactNode;
  flexDirections?: CSSProperties['flexDirection'];
  justifyContents?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
}
