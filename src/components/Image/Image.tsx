/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { ImageProps } from './Image.types';
import { useTheme } from '@emotion/react';
import * as s from './Image.styles';
import Typography from '../Typography';
import { useCurTheme } from '../../hooks/useCurTheme';

const Image = ({ width, height, ...props }: ImageProps) => {
  const theme = useTheme();
  const { curTheme } = useCurTheme();
  const [imgErr, setImgErr] = useState<boolean>(false);

  return (
    <>
      {imgErr ? (
        <div css={s.errBase(theme, width, height)}>
          <Typography
            size={0.75}
            weight="semiBold"
            color={curTheme.title === 'light' ? 'dark' : 'light'}
          >
            이미지
          </Typography>
          <Typography
            size={0.75}
            weight="semiBold"
            color={curTheme.title === 'light' ? 'dark' : 'light'}
          >
            준비중
          </Typography>
        </div>
      ) : (
        <img
          {...props}
          width={width * 16}
          height={height * 16}
          onError={() => setImgErr(true)}
        />
      )}
    </>
  );
};

export default Image;
