/** @jsxImportSource @emotion/react */
import { IconButtonProps } from './IconButton.types';
import * as s from './IconButton.styles';
import { useTheme } from '@emotion/react';
import Icon from '../Icon/Icon';

const IconButton = ({
  children,
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  fullWidth = false,
  rounded = false,
  disabled = false,
  ...props
}: IconButtonProps) => {
  const theme = useTheme();

  return (
    <button
      css={[
        s.base(theme, size, fullWidth, rounded),
        s.variants[variant](theme, color),
      ]}
      disabled={disabled}
      {...props}
    >
      <Icon
        size={size === 'small' ? 0.875 : size === 'medium' ? 1 : 1.125}
        color={disabled ? 'grey' : variant === 'contained' ? 'light' : color}
      >
        {children}
      </Icon>
    </button>
  );
};

export default IconButton;
