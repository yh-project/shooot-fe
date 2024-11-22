/** @jsxImportSource @emotion/react */
import { TypographyProps } from './Typography.types';
import * as s from './Typography.styles';
import { useTheme } from '@emotion/react';

const Typography = ({
  size = 'md',
  weight = 'medium',
  color = 'primary',
  children,
  ...props
}: TypographyProps) => {
  const theme = useTheme();
  return (
    <div css={s.base(theme, size, weight, color)} {...props}>
      {children}
    </div>
  );
};

export default Typography;
