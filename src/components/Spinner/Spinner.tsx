/** @jsxImportSource @emotion/react */
import { SpinnerProps } from './Spinner.types';
import * as s from './Spinner.styles';
import { useTheme } from '@emotion/react';

const Spinner = ({
  size = 'medium',
  color = 'primary',
  ...props
}: SpinnerProps) => {
  const theme = useTheme();

  return <div css={s.base(theme, size, color)} {...props} />;
};

export default Spinner;
