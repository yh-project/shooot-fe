import { globalStyle, globalFontFace } from '@vanilla-extract/css';

globalFontFace('Pretendard', {
  src: `local('Pretendard'), url(/src/assets/fonts/PretendardVariable.woff2) format('woff2')`,
});

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily: 'Pretendard',
});
