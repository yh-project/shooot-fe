/** @jsxImportSource @emotion/react */
import { ButtonProps } from './Button.types';
import * as s from './Button.styles';
import { useTheme } from '@emotion/react';

const Button = ({
  children,
  variant = 'contained',
  size = 'small',
  color = 'primary',
  fullWidth = false,
  rounded = false,
  disabled = false,
  fontSize,
  fontWeight,
  ...props
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <button
      css={[
        s.base(theme, size, fullWidth, rounded, fontSize, fontWeight),
        s.variants[variant](theme, color),
      ]}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
