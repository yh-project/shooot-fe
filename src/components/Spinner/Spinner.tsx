/** @jsxImportSource @emotion/react */
import { SpinnerProps } from './Spinner.types';
import * as s from './Spinner.styles';

const Spinner = ({ children, ...props }: SpinnerProps) => {
  return (
    <div css={} {...props}>
      {children}
    </div>
  );
};

export default Spinner;
