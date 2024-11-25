/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import * as s from './IconTypographyButton.styles';
import { IconTypographyButtonProps } from './IconTypographyButton.types';
import Icon from '../Icon/Icon';
import Typography from '../Typography';

const IconTypographyButton = ({
  icon,
  typography,
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  fullWidth = false,
  rounded = false,
  disabled = false,
  direction = 'row',
  way = 'forward',
  ...props
}: IconTypographyButtonProps) => {
  const theme = useTheme();

  return (
    <button
      css={[
        s.base(theme, size, fullWidth, rounded, direction, way),
        s.variants[variant](theme, color),
      ]}
      disabled={disabled}
      {...props}
    >
      <Icon
        size={size === 'small' ? 0.875 : size === 'medium' ? 1 : 1.125}
        color={disabled ? 'grey' : variant === 'contained' ? 'light' : color}
      >
        {icon}
      </Icon>
      <Typography
        size={size === 'small' ? 0.75 : size === 'medium' ? 0.875 : 1}
        color={disabled ? 'grey' : variant === 'contained' ? 'light' : color}
      >
        {typography}
      </Typography>
    </button>
  );
};

export default IconTypographyButton;
