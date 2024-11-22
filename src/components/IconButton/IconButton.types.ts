import { ReactNode } from 'react';

export interface IconButtonProps extends React.ComponentProps<'button'> {
  children: ReactNode;
}
