/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { TextFieldProps } from './TextField.types';
import * as s from './TextField.styles';
import Typography from '../Typography';
import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import Icon from '../Icon';

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      variant = 'filled',
      type = 'text',
      size = 'medium',
      color = 'primary',
      label,
      trailing = false,
      validator,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    const [trailingState, setTrailingState] = useState<boolean>(false);

    return (
      <div css={s.container}>
        {label && (
          <Typography size={0.875} color={color}>
            {label}
          </Typography>
        )}
        <div css={[s.base(theme, size), s.variants[variant](theme, color)]}>
          <input
            css={s.inputBase(theme, variant, color)}
            type={
              trailing ? (trailingState ? type : 'text') : type ? type : 'text'
            }
            ref={ref}
            {...props}
          />
          {trailing && (
            <Icon onClick={() => setTrailingState((prev) => !prev)}>
              {trailingState ? <EyeSlashIcon /> : <EyeIcon />}
            </Icon>
          )}
        </div>
        {validator && (
          <Typography size={0.875} color="delete">
            {validator}
          </Typography>
        )}
      </div>
    );
  }
);

export default TextField;
