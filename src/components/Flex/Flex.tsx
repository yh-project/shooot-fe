/** @jsxImportSource @emotion/react */
import { FlexProps } from './Flex.types';
import * as s from './Flex.styles';

const Flex = ({
  children,
  flexDirections,
  justifyContents,
  alignItems,
  ...props
}: FlexProps) => {
  return (
    <div css={s.base(flexDirections, justifyContents, alignItems)} {...props}>
      {children}
    </div>
  );
};

export default Flex;
