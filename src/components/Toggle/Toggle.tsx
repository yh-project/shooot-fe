/** @jsxImportSource @emotion/react */
import React from 'react';
import { ToggleProps } from './Toggle.types';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import * as s from './Toggle.styles';

const Toggle = ({
  size = 'medium',
  color = 'primary',
  handler,
}: ToggleProps) => {
  const theme = useTheme();
  const [curState, setCurState] = useState<boolean>(false);
  return (
    <div
      css={[s.containerBase(theme), s.containerSizeVariants[size]]}
      onClick={() => {
        const prev = curState;
        setCurState(!prev);

        if (handler) handler(!prev);
      }}
    >
      <div
        css={[s.dotBase(theme, size, color, curState), s.dotSizeVariants[size]]}
      />
    </div>
  );
};

export default Toggle;
