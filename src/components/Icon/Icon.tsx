/** @jsxImportSource @emotion/react */
import { IconProps } from './Icon.types';
import * as s from './Icon.styles';
import { useTheme } from '@emotion/react';

const Icon = ({
  children,
  size = 'md',
  color = 'primary',
  ...props
}: IconProps) => {
  const theme = useTheme();
  return (
    <div css={s.base(theme, size, color)} {...props}>
      {children}
    </div>
  );
};

export default Icon;
